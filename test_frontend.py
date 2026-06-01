#!/usr/bin/env python3
"""
Frontend verification for Orbit Landing using Playwright.
Uses time.sleep() instead of page.wait_for_timeout() to avoid event loop issues.
"""

from playwright.sync_api import sync_playwright
import json
import time
import os

BASE_URL = "http://localhost:5173"
SCREENSHOT_DIR = "/tmp/orbit-screenshots"
os.makedirs(SCREENSHOT_DIR, exist_ok=True)

CHROMIUM = "/root/.cache/ms-playwright/chromium-1194/chrome-linux/chrome"

ROUTES = [
    ("/", "Home"),
    ("/capital", "Capital Landing"),
    ("/capital/market", "Market Page"),
    ("/capital/timing", "Why Now Page"),
    ("/team", "Team Page"),
]

results = {
    "pages_loaded": [],
    "console_errors": [],
    "console_warnings": [],
    "navigation_issues": [],
    "interaction_results": [],
    "responsive_results": [],
    "accessibility_issues": [],
}


def go(page, url):
    """Navigate and wait using time.sleep to avoid Playwright event loop issues."""
    page.goto(url, wait_until="commit", timeout=15000)
    time.sleep(3)


def run_tests():
    pw = sync_playwright().start()
    browser = pw.chromium.launch(
        headless=True,
        executable_path=CHROMIUM,
        args=["--no-sandbox", "--disable-gpu"]
    )
    ctx = browser.new_context(viewport={"width": 1440, "height": 900}, bypass_csp=True)
    page = ctx.new_page()

    # Console capture
    def on_console(msg):
        if msg.type == "error":
            results["console_errors"].append({"text": msg.text[:200], "url": page.url})
        elif msg.type == "warning":
            results["console_warnings"].append({"text": msg.text[:200], "url": page.url})
    page.on("console", on_console)

    try:
        # =============================================
        # TEST 1: Page Load Verification
        # =============================================
        print("\n=== TEST 1: Page Load Verification ===")
        for route, name in ROUTES:
            url = f"{BASE_URL}{route}"
            try:
                resp = page.goto(url, wait_until="commit", timeout=15000)
                time.sleep(3)
                status = resp.status if resp else "no response"
                has_main = page.locator("#main-content").count() > 0
                passed = status == 200 and has_main
                results["pages_loaded"].append({"name": name, "route": route, "status": status, "pass": passed})
                print(f"  [{'PASS' if passed else 'FAIL'}] {name} ({route}) - Status: {status}, Main: {has_main}")
                page.screenshot(path=f"{SCREENSHOT_DIR}/{name.lower().replace(' ', '_')}.png", full_page=True)
            except Exception as e:
                results["pages_loaded"].append({"name": name, "route": route, "error": str(e)[:100], "pass": False})
                print(f"  [FAIL] {name} ({route}) - Error: {str(e)[:80]}")

        # =============================================
        # TEST 2: Navigation
        # =============================================
        print("\n=== TEST 2: Navigation Verification ===")
        go(page, BASE_URL)
        nav_count = page.locator("nav a[href]").count()
        footer_count = page.locator("footer a[href]").count()
        print(f"  Found {nav_count} nav links, {footer_count} footer links")

        for route, name in ROUTES:
            go(page, f"{BASE_URL}{route}")
            current = page.url.replace(BASE_URL, "") or "/"
            ok = current == route
            if not ok:
                results["navigation_issues"].append({"expected": route, "actual": current})
            print(f"  [{'PASS' if ok else 'FAIL'}] {name}: {route}")

        # Logo -> Home
        go(page, f"{BASE_URL}/capital")
        logos = page.locator('nav a[href="/"]')
        if logos.count() > 0:
            logos.first.click()
            time.sleep(2)
            at_home = "/" in page.url.replace(BASE_URL, "") or page.url.rstrip("/") == BASE_URL.rstrip("/")
            print(f"  [{'PASS' if at_home else 'FAIL'}] Logo -> Home")

        # =============================================
        # TEST 3: Interactive Elements
        # =============================================
        print("\n=== TEST 3: Interactive Elements ===")

        # Theme Toggle
        go(page, BASE_URL)
        bg_before = page.evaluate("getComputedStyle(document.body).backgroundColor")
        theme_btn = page.locator('button[aria-label="Toggle theme"]')
        if theme_btn.count() > 0:
            theme_btn.first.click()
            time.sleep(0.5)
            bg_after = page.evaluate("getComputedStyle(document.body).backgroundColor")
            changed = bg_before != bg_after
            print(f"  [{'PASS' if changed else 'FAIL'}] Theme toggle: {bg_before} -> {bg_after}")
            results["interaction_results"].append({"test": "Theme Toggle", "pass": changed})
            page.screenshot(path=f"{SCREENSHOT_DIR}/theme_light.png")
            theme_btn.first.click()
            time.sleep(0.5)
        else:
            print("  [FAIL] Theme toggle not found")
            results["interaction_results"].append({"test": "Theme Toggle", "pass": False})

        # Language Toggle
        lang_btn = page.locator('button[aria-label="Toggle language"]')
        if lang_btn.count() > 0:
            text_before = page.locator("nav").first.inner_text()
            lang_btn.first.click()
            time.sleep(0.5)
            text_after = page.locator("nav").first.inner_text()
            changed = text_before != text_after
            print(f"  [{'PASS' if changed else 'FAIL'}] Language toggle")
            results["interaction_results"].append({"test": "Language Toggle", "pass": changed})
            page.screenshot(path=f"{SCREENSHOT_DIR}/lang_en.png")
            lang_btn.first.click()
            time.sleep(0.5)
        else:
            print("  [FAIL] Language toggle not found")
            results["interaction_results"].append({"test": "Language Toggle", "pass": False})

        # Contact Modal (Home)
        cta = page.locator("nav button.btn-p")
        if cta.count() > 0:
            cta.first.click()
            time.sleep(0.6)
            modal = page.locator('[role="dialog"]')
            modal_open = modal.count() > 0 and modal.first.is_visible()
            print(f"  [{'PASS' if modal_open else 'FAIL'}] Contact Modal opens")
            results["interaction_results"].append({"test": "Contact Modal Open", "pass": modal_open})

            if modal_open:
                page.screenshot(path=f"{SCREENSHOT_DIR}/modal_open.png")
                has_name = page.locator("#contact-name").count() > 0
                has_email = page.locator("#contact-email").count() > 0
                print(f"  [{'PASS' if has_name and has_email else 'FAIL'}] Form fields (name={has_name}, email={has_email})")
                results["interaction_results"].append({"test": "Modal Form Fields", "pass": has_name and has_email})

                if has_name and has_email:
                    page.locator("#contact-name").fill("Test User")
                    page.locator("#contact-email").fill("test@example.com")
                    submit = page.locator('[role="dialog"] button[type="submit"]')
                    if submit.count() > 0:
                        submit.click()
                        time.sleep(0.5)
                        txt = page.locator('[role="dialog"]').inner_text()
                        ok = any(x in txt for x in ["✓", "Gracias", "Thank"])
                        print(f"  [{'PASS' if ok else 'FAIL'}] Form submit -> success")
                        results["interaction_results"].append({"test": "Form Submit", "pass": ok})
                        page.screenshot(path=f"{SCREENSHOT_DIR}/modal_submitted.png")

                page.keyboard.press("Escape")
                time.sleep(0.4)
                closed = page.locator('[role="dialog"]').count() == 0
                print(f"  [{'PASS' if closed else 'FAIL'}] Modal closes (Escape)")
                results["interaction_results"].append({"test": "Modal Close (Escape)", "pass": closed})

        # Capital Modal
        go(page, f"{BASE_URL}/capital")
        cta = page.locator("nav button.btn-p")
        if cta.count() > 0:
            cta.first.click()
            time.sleep(0.6)
            modal_open = page.locator('[role="dialog"]').count() > 0
            has_inv = page.locator("#contact-investment").count() > 0
            print(f"  [{'PASS' if modal_open and has_inv else 'FAIL'}] Capital modal + investment field")
            results["interaction_results"].append({"test": "Capital Modal", "pass": modal_open and has_inv})
            if modal_open:
                page.locator('[role="dialog"]').first.click(position={"x": 5, "y": 5})
                time.sleep(0.4)
                closed = page.locator('[role="dialog"]').count() == 0
                print(f"  [{'PASS' if closed else 'FAIL'}] Modal closes (backdrop)")
                results["interaction_results"].append({"test": "Modal Close (Backdrop)", "pass": closed})


        # =============================================
        # TEST 4: Responsive Behavior
        # =============================================
        print("\n=== TEST 4: Responsive Behavior ===")
        viewports = [
            ("Desktop", 1440, 900),
            ("Laptop", 1024, 768),
            ("Tablet", 768, 1024),
            ("Mobile", 375, 812),
            ("Mobile Small", 320, 568),
        ]
        for name, w, h in viewports:
            page.set_viewport_size({"width": w, "height": h})
            go(page, BASE_URL)
            overflow = page.evaluate("document.documentElement.scrollWidth > document.documentElement.clientWidth")
            nav_ok = page.locator("nav").first.is_visible()
            hamburger = page.locator('button[aria-label="Toggle menu"]').count() > 0 if w < 769 else None
            passed = not overflow and nav_ok
            results["responsive_results"].append({"viewport": name, "size": f"{w}x{h}", "overflow": overflow, "pass": passed})
            hb = f", hamburger={'yes' if hamburger else 'no'}" if hamburger is not None else ""
            ov = ", OVERFLOW!" if overflow else ""
            print(f"  [{'PASS' if passed else 'FAIL'}] {name} ({w}x{h}): nav={nav_ok}{hb}{ov}")
            page.screenshot(path=f"{SCREENSHOT_DIR}/responsive_{name.lower().replace(' ', '_')}.png", full_page=True)

        # =============================================
        # TEST 5: Theme Switching All Pages
        # =============================================
        print("\n=== TEST 5: Theme Switching All Pages ===")
        page.set_viewport_size({"width": 1440, "height": 900})
        for route, name in ROUTES:
            go(page, f"{BASE_URL}{route}")
            bg_dark = page.evaluate("getComputedStyle(document.body).backgroundColor")
            theme_btn = page.locator('button[aria-label="Toggle theme"]')
            if theme_btn.count() > 0:
                theme_btn.first.click()
                time.sleep(0.5)
                bg_light = page.evaluate("getComputedStyle(document.body).backgroundColor")
                ok = bg_dark != bg_light
                print(f"  [{'PASS' if ok else 'FAIL'}] {name}: {bg_dark} -> {bg_light}")
                page.screenshot(path=f"{SCREENSHOT_DIR}/{name.lower().replace(' ', '_')}_light.png", full_page=True)
                theme_btn.first.click()
                time.sleep(0.3)
            else:
                print(f"  [FAIL] {name}: No theme toggle")

        # =============================================
        # TEST 6: Accessibility Basics
        # =============================================
        print("\n=== TEST 6: Accessibility Checks ===")
        page.set_viewport_size({"width": 1440, "height": 900})
        go(page, BASE_URL)

        checks = [
            ("Skip Navigation", page.locator(".skip-nav").count() > 0),
            ("Main Landmark", page.locator("main#main-content").count() > 0),
        ]
        for name, ok in checks:
            print(f"  [{'PASS' if ok else 'FAIL'}] {name}")
            results["accessibility_issues"].append({"test": name, "pass": ok})

        imgs = page.locator("img").all()
        no_alt = sum(1 for i in imgs if i.get_attribute("alt") is None)
        print(f"  [{'PASS' if no_alt == 0 else 'WARN'}] Images without alt: {no_alt}/{len(imgs)}")
        results["accessibility_issues"].append({"test": "Image Alt", "missing": no_alt, "total": len(imgs)})

        btns = page.locator("button").all()
        no_name = sum(1 for b in btns if not b.inner_text().strip() and not (b.get_attribute("aria-label") or ""))
        print(f"  [{'PASS' if no_name == 0 else 'WARN'}] Buttons without name: {no_name}/{len(btns)}")
        results["accessibility_issues"].append({"test": "Button Names", "unnamed": no_name, "total": len(btns)})

        # Modal ARIA
        cta = page.locator("nav button.btn-p")
        if cta.count() > 0:
            cta.first.click()
            time.sleep(0.6)
            aria_ok = page.locator('[role="dialog"][aria-modal="true"]').count() > 0
            close_ok = page.locator('[role="dialog"] button[aria-label="Close modal"]').count() > 0
            print(f"  [{'PASS' if aria_ok else 'FAIL'}] Modal ARIA (role=dialog, aria-modal=true)")
            print(f"  [{'PASS' if close_ok else 'FAIL'}] Modal close button labeled")
            results["accessibility_issues"].append({"test": "Modal ARIA", "pass": aria_ok})
            results["accessibility_issues"].append({"test": "Modal Close", "pass": close_ok})
            page.keyboard.press("Escape")
            time.sleep(0.3)

        focus_ok = page.evaluate("Array.from(document.querySelectorAll('style')).some(s => s.textContent.includes('focus-visible'))")
        print(f"  [{'PASS' if focus_ok else 'FAIL'}] Focus-visible styles")
        results["accessibility_issues"].append({"test": "Focus Styles", "pass": focus_ok})

        h1 = page.locator("h1").count()
        print(f"  [INFO] H1 count on Home: {h1}")

    except Exception as e:
        print(f"\n[CRITICAL ERROR] {e}")
        import traceback
        traceback.print_exc()
    finally:
        # Summary
        print("\n" + "=" * 60)
        print("FINAL SUMMARY")
        print("=" * 60)
        loaded = sum(1 for p in results["pages_loaded"] if p.get("pass"))
        print(f"\n  Pages: {loaded}/{len(results['pages_loaded'])}")
        print(f"  Console Errors: {len(results['console_errors'])}")
        for e in results["console_errors"][:5]:
            print(f"    - {e['text'][:100]}")
        print(f"  Console Warnings: {len(results['console_warnings'])}")
        print(f"  Nav Issues: {len(results['navigation_issues'])}")
        ip = sum(1 for i in results["interaction_results"] if i.get("pass"))
        print(f"  Interactions: {ip}/{len(results['interaction_results'])}")
        for i in results["interaction_results"]:
            if not i.get("pass"):
                print(f"    - FAIL: {i['test']}")
        rp = sum(1 for r in results["responsive_results"] if r.get("pass"))
        print(f"  Responsive: {rp}/{len(results['responsive_results'])}")
        for r in results["responsive_results"]:
            if not r.get("pass"):
                print(f"    - FAIL: {r['viewport']}")
        ap = sum(1 for a in results["accessibility_issues"] if a.get("pass", True))
        print(f"  Accessibility: {ap}/{len(results['accessibility_issues'])}")
        print(f"\n  Screenshots: {SCREENSHOT_DIR}/")
        print("=" * 60)

        with open(f"{SCREENSHOT_DIR}/results.json", "w") as f:
            json.dump(results, f, indent=2)

        browser.close()
        pw.stop()


if __name__ == "__main__":
    run_tests()
