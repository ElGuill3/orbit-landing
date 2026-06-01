import { useState, useEffect, useMemo, useRef, useCallback, lazy, Suspense } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme, getAccent, ACCENTS } from "./theme";
import { useLang } from "./i18n";
import { createStyles } from "./styles";
import { OrbitLogo, SvgIcon, ThemeToggle } from "./components";
import { usePostHogLazy as usePostHog } from './useAnalytics';
import "./layout.css";

const ContactModal = lazy(() => import("./ContactModal"));

/* ── Helpers ── */
function getContext(pathname) {
  if (pathname === "/" || pathname.startsWith("/capital")) return "capital";
  return "default";
}

function getNavLinks(i18n) {
  return {
    default: [
      [i18n.nav.capital, "/"],
      [i18n.nav.team || "Team", "/team"],
      [i18n.nav.blog || "Blog", "/blog"],
    ],
    capital: [
      [i18n.nav.engine, "#engine"],
      [i18n.nav.performance, "#performance"],
      [i18n.nav.infraestructura, "#infra"],
      [i18n.nav.terminos, "#terms"],
      [i18n.nav.mercado, "/capital/market"],
      [i18n.nav.timing, "/capital/timing"],
      ["FAQ", "#faq"],
    ],
  };
}

/* ── Language Toggle Button ── */
function LangToggle() {
  const { lang, toggleLang } = useLang();
  const { t, mode } = useTheme();
  const isDark = mode === "dark";
  return (
    <button
      onClick={toggleLang}
      aria-label="Toggle language"
      aria-pressed={lang === "en"}
      style={{
        display: "inline-flex", alignItems: "center", gap: 4,
        fontSize: 11, fontWeight: 700, letterSpacing: "0.05em",
        color: t.textMuted,
        background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
        border: `1px solid ${t.glassBorder}`,
        borderRadius: 8, padding: "5px 10px",
        cursor: "pointer", fontFamily: "inherit",
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        textTransform: "uppercase",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      {lang === "es" ? "🇺🇸 EN" : "🇲🇽 ES"}
    </button>
  );
}

/* ── Mega Dropdown Content ── */
function MegaDropdown({ type, isDark, t, accent, onClose, i18n, openModal }) {
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") { onClose(); return; }
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        if (!dropdownRef.current) return;
        const links = Array.from(dropdownRef.current.querySelectorAll("a, button"));
        const idx = links.indexOf(document.activeElement);
        const next = e.key === "ArrowDown" ? (idx + 1) % links.length : (idx - 1 + links.length) % links.length;
        links[next]?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  const isCapital = type === "capital";
  const isRisk = type === "risk";
  const dropdownAccent = isCapital
    ? ACCENTS.capital[isDark ? "dark" : "light"]
    : isRisk
      ? ACCENTS.risk[isDark ? "dark" : "light"]
      : ACCENTS.intel[isDark ? "dark" : "light"];

  const capitalItems = [
    { icon: "chart", title: i18n.nav.engine || "Engine", desc: i18n.nav.capitalEngineDesc || "Quantitative trading system", link: "/#engine" },
    { icon: "trending", title: i18n.nav.performance || "Performance", desc: i18n.nav.capitalPerfDesc || "Risk-adjusted returns", link: "/#performance" },
    { icon: "shield", title: i18n.nav.infraestructura || "Infrastructure", desc: i18n.nav.capitalInfraDesc || "Institutional from day one", link: "/#infra" },
    { icon: "wallet", title: i18n.nav.terminos || "Terms", desc: i18n.nav.capitalTermsDesc || "Fund terms", link: "/#terms" },
    { icon: "globe", title: i18n.nav.mercado || "Market", desc: i18n.nav.capitalMarketDesc || "Market opportunity", link: "/capital/market" },
    { icon: "signal", title: i18n.nav.timing || "Timing", desc: i18n.nav.capitalTimingDesc || "Market timing analysis", link: "/capital/timing" },
  ];

  const intelItems = [
    { icon: "cpu", title: i18n.nav.producto || "Product", desc: i18n.nav.intelProductDesc || "Platform & API", link: "/intel#product" },
    { icon: "scale", title: i18n.nav.verticales || "Verticals", desc: i18n.nav.intelVerticalsDesc || "7 intelligence verticals", link: "/intel#verticals" },
    { icon: "rocket", title: i18n.nav.integraciones || "Integrations", desc: i18n.nav.intelIntegrationsDesc || "Connect your stack", link: "/intel#integrations" },
    { icon: "trending", title: i18n.nav.pricing || "Pricing", desc: i18n.nav.intelPricingDesc || "Transparent pricing", link: "/intel#pricing" },
  ];

  const riskItems = [
    { icon: "shield", title: i18n.nav?.riskProceso || "Proceso", desc: i18n.nav?.riskProcessDesc || "How Orbit Risk works", link: "/risk#process" },
    { icon: "trending", title: i18n.nav?.riskExposiciones || "Exposiciones", desc: i18n.nav?.riskExposuresDesc || "Exposure types we cover", link: "/risk#exposures" },
    { icon: "scale", title: i18n.nav?.riskPorQue || "¿Por qué?", desc: i18n.nav?.riskWhyDesc || "Why Orbit Risk", link: "/risk#why" },
    { icon: "cpu", title: i18n.nav?.riskArquitectura || "Arquitectura", desc: i18n.nav?.riskArchDesc || "The ecosystem", link: "/risk#architecture" },
    { icon: "globe", title: i18n.nav?.riskCasos || "Casos", desc: i18n.nav?.riskCasesDesc || "Real-world use cases", link: "/risk#cases" },
    { icon: "search", title: i18n.nav?.riskFaq || "FAQ", desc: i18n.nav?.riskFaqDesc || "Frequently asked questions", link: "/risk#faq" },
  ];

  const items = isCapital ? capitalItems : isRisk ? riskItems : intelItems;
  const tagLine = isCapital
    ? (i18n.home?.capitalSub || "Quantitative Fund")
    : isRisk
      ? (i18n.home?.riskSub || "Operational Hedging")
      : (i18n.home?.intelSub || "Intelligence Platform");
  const ctaLabel = isCapital
    ? (i18n.nav?.invertir || "Invest")
    : isRisk
      ? (i18n.nav?.riskDemo || "Demo")
      : (i18n.nav?.acceso || "Access");

  return (
    <div
      ref={dropdownRef}
      role="menu"
      onMouseLeave={onClose}
      style={{
        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        marginTop: 8,
        width: 520,
        background: isDark ? "rgba(18,18,18,0.97)" : "rgba(255,255,255,0.97)",
        backdropFilter: "blur(40px) saturate(200%)",
        WebkitBackdropFilter: "blur(40px) saturate(200%)",
        border: `1px solid ${isDark ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.65)"}`,
        borderRadius: 20,
        padding: "20px 20px 16px",
        boxShadow: isDark
          ? "0 20px 60px rgba(0,0,0,0.6), 0 1px 2px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)"
          : "0 20px 60px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)",
        animation: "megaDropdownIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        zIndex: 200,
      }}
    >
      {/* Header */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        marginBottom: 14, paddingBottom: 12,
        borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)"}`,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{
            fontSize: 13, fontWeight: 700, color: dropdownAccent,
            letterSpacing: "-0.01em",
          }}>
            {isCapital ? "Orbit Capital" : isRisk ? "Orbit Risk" : (i18n.nav?.intel || "Intelligence")}
          </span>
          <span style={{
            fontSize: 10, fontWeight: 600, color: t.textDim,
            background: `${dropdownAccent}12`,
            border: `1px solid ${dropdownAccent}20`,
            borderRadius: 100, padding: "2px 8px",
            letterSpacing: "0.03em", textTransform: "uppercase",
          }}>{tagLine}</span>
        </div>
        <button
          onClick={() => { openModal(isCapital ? "capital" : isRisk ? "risk" : "contact"); onClose(); }}
          style={{
            fontSize: 11, fontWeight: 600, color: "#fff",
            background: dropdownAccent,
            border: "none", borderRadius: 8,
            padding: "6px 14px", cursor: "pointer", fontFamily: "inherit",
            transition: "all 0.2s ease",
            boxShadow: `0 2px 6px ${dropdownAccent}30`,
          }}
        >{ctaLabel}</button>
      </div>

      {/* Items grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: items.length > 4 ? "1fr 1fr" : "1fr 1fr",
        gap: 4,
      }}>
        {items.map((item) => (
          <Link
            key={item.link}
            to={item.link}
            role="menuitem"
            onClick={onClose}
            style={{
              display: "flex", alignItems: "flex-start", gap: 10,
              padding: "10px 12px", borderRadius: 12,
              transition: "all 0.2s ease",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            <div style={{
              width: 32, height: 32, borderRadius: 8, flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              background: `${dropdownAccent}10`,
              border: `1px solid ${dropdownAccent}18`,
              marginTop: 1,
            }}>
              <SvgIcon name={item.icon} size={16} color={dropdownAccent} />
            </div>
            <div>
              <div style={{
                fontSize: 13, fontWeight: 600, color: t.heading,
                lineHeight: 1.3, marginBottom: 2,
              }}>{item.title}</div>
              <div style={{
                fontSize: 11, color: t.textDim, lineHeight: 1.45,
                overflow: "hidden", textOverflow: "ellipsis",
                display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
              }}>{item.desc}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ── Simplified Products Dropdown — 3 items ── */
function ProductsDropdown({ isDark, t, onClose, i18n, posthog }) {
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") { onClose(); return; }
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        if (!dropdownRef.current) return;
        const links = Array.from(dropdownRef.current.querySelectorAll("a"));
        const idx = links.indexOf(document.activeElement);
        const next = e.key === "ArrowDown" ? (idx + 1) % links.length : (idx - 1 + links.length) % links.length;
        links[next]?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const products = [
    { name: "Home", desc: i18n.nav?.home || "Orbit ecosystem", link: "/", icon: "globe", accent: t.accent },
    { name: "Orbit Risk", desc: i18n.home?.riskSub || "Cobertura de riesgos", link: "/risk", icon: "shield", accent: ACCENTS.risk[isDark ? "dark" : "light"] },
    { name: "Orbit Capital", desc: i18n.home?.capitalSub || "Trading cuantitativo", link: "/capital", icon: "chart", accent: ACCENTS.capital[isDark ? "dark" : "light"] },
  ];

  return (
    <div
      ref={dropdownRef}
      role="menu"
      onMouseLeave={onClose}
      style={{
        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        marginTop: 8,
        width: 320,
        background: isDark ? "rgba(18,18,18,0.97)" : "rgba(255,255,255,0.97)",
        backdropFilter: "blur(40px) saturate(200%)",
        WebkitBackdropFilter: "blur(40px) saturate(200%)",
        border: `1px solid ${isDark ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.65)"}`,
        borderRadius: 16,
        padding: "8px",
        boxShadow: isDark
          ? "0 20px 60px rgba(0,0,0,0.6), 0 1px 2px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)"
          : "0 20px 60px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)",
        animation: "megaDropdownIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        zIndex: 200,
      }}
    >
      {products.map((product) => (
        <Link
          key={product.link}
          to={product.link}
          role="menuitem"
          onClick={() => {
            posthog?.capture('nav_product_click', { product: product.link.slice(1) });
            onClose();
          }}
          style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "12px 14px", borderRadius: 12,
            transition: "all 0.2s ease",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
          }}
        >
          <div style={{
            width: 36, height: 36, borderRadius: 10, flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            background: `${product.accent}12`,
            border: `1px solid ${product.accent}20`,
          }}>
            <SvgIcon name={product.icon} size={18} color={product.accent} />
          </div>
          <div>
            <div style={{
              fontSize: 14, fontWeight: 600, color: product.accent,
              lineHeight: 1.3, marginBottom: 1,
            }}>{product.name}</div>
            <div style={{
              fontSize: 12, color: t.textDim, lineHeight: 1.4,
            }}>{product.desc}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function Layout({ children }) {
  const { mode, t } = useTheme();
  const { lang, i18n } = useLang();
  const { S } = useMemo(() => createStyles(t), [t]);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalVariant, setModalVariant] = useState("capital");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // "capital" | "intel" | null
  const dropdownTimeoutRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const ctx = getContext(location.pathname);
  const accent = getAccent(ctx, mode);
  const posthog = usePostHog();

  const openModal = (variant) => {
    setModalVariant(variant);
    setModalOpen(true);
    posthog?.capture('contact_modal_opened', {
      variant,
      source: 'nav_cta',
      page: location.pathname,
    });
  };

  const handleSocialClick = (platform, url) => {
    posthog?.capture('social_link_clicked', {
      platform,
      url,
      source: 'footer',
    });
  };

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open + focus trap
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      // Focus trap for mobile menu
      const handleKeyDown = (e) => {
        if (e.key === "Escape") { setMobileMenuOpen(false); return; }
        if (e.key !== "Tab" || !mobileMenuRef.current) return;
        const focusable = mobileMenuRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) { e.preventDefault(); last.focus(); }
        } else {
          if (document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const handleHashLinkClick = (target) => {
    const elementId = target.slice(1);
    if (location.pathname === "/") {
      scrollTo(elementId);
    } else {
      navigate("/" + target);
    }
  };

  // Handle cross-page navigation with hash scrolling using polling
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const elementId = location.hash.slice(1);
      const startTime = performance.now();

      let frameId;
      const poll = () => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else if (performance.now() - startTime < 2000) {
          frameId = requestAnimationFrame(poll);
        }
      };

      frameId = requestAnimationFrame(poll);
      return () => {
        if (frameId) cancelAnimationFrame(frameId);
      };
    }
  }, [location.pathname, location.hash]);

  const NAV_LINKS = getNavLinks(i18n);
  const navLinks = NAV_LINKS[ctx] || NAV_LINKS.default;

  const isDark = mode === "dark";
  const f = i18n.footer;

  const merged = true; // Nav always uses merged (inline) layout

  /* ── Dropdown handlers ── */
  const handleDropdownEnter = (type) => {
    clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(type);
  };
  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };
  const handleDropdownContentEnter = () => {
    clearTimeout(dropdownTimeoutRef.current);
  };

  /* ── Nav CTA button style (glass pill) ── */
  const navCtaStyle = (bg, fg) => ({
    fontSize: 13, fontWeight: 600, color: fg,
    background: bg,
    border: "none", borderRadius: 12,
    padding: "8px 20px", fontFamily: "inherit", cursor: "pointer",
    display: "inline-flex", alignItems: "center",
    transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
    boxShadow: `0 2px 8px ${bg}30, inset 0 1px 0 rgba(255,255,255,0.15)`,
    letterSpacing: "0.01em",
  });

  /* ── Glass pill base style — Liquid Glass ── */
  const glassPill = {
    background: isDark
      ? "linear-gradient(135deg, rgba(30,30,30,0.35) 0%, rgba(15,15,15,0.30) 50%, rgba(25,25,25,0.35) 100%)"
      : "rgba(255,255,255,0.45)",
    backdropFilter: "blur(32px) saturate(180%)",
    WebkitBackdropFilter: "blur(32px) saturate(180%)",
    border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.60)"}`,
    borderRadius: 22,
    boxShadow: isDark
      ? [
          "0 8px 32px rgba(0,0,0,0.6)",
          "0 2px 8px rgba(0,0,0,0.4)",
          "0 0 0 0.5px rgba(255,255,255,0.06)",
          "inset 0 1px 0 rgba(255,255,255,0.10)",
          "inset 0 -1px 0 rgba(255,255,255,0.03)",
          "inset 0 0 16px rgba(255,255,255,0.02)",
        ].join(", ")
      : "0 8px 32px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(255,255,255,0.4)",
    position: "relative",
    isolation: "isolate",
  };

  /* ── Determine if nav item should show dropdown ── */
  const hasDropdown = (target) => {
    return target === "__products_dropdown__";
  };

  /* ── Render a nav link with optional dropdown trigger ── */
  const renderNavLink = (label, target, isHash, isActive) => {
    let linkColor = isActive ? accent : t.textMuted;
    if (ctx === "default" && !isHash) {
      if (target === "/capital") linkColor = ACCENTS.capital[mode];
      else if (target === "/risk") linkColor = ACCENTS.risk[mode];
    }

    const dropdownType = target === "__products_dropdown__" ? "products" : target === "/capital" ? "capital" : target === "/intel" ? "intel" : target === "/risk" ? "risk" : null;
    const showDropdownArrow = hasDropdown(target);

    const navFontSize = ctx === "default" ? 14 : 13;

    if (isHash) {
      return (
        <button key={target} className="nav-link" onClick={() => handleHashLinkClick(target)} style={{
          fontSize: navFontSize, color: t.textMuted, fontWeight: 600,
          background: "none", border: "none", padding: 0,
          cursor: "pointer", fontFamily: "inherit",
          letterSpacing: "-0.01em", whiteSpace: "nowrap",
        }}>{label}</button>
      );
    }

    // Unified products dropdown trigger (not a link)
    if (target === "__products_dropdown__") {
      return (
        <div
          key={target}
          style={{ position: "relative", display: "inline-flex", alignItems: "center" }}
          onMouseEnter={() => handleDropdownEnter("products")}
          onMouseLeave={handleDropdownLeave}
        >
          <button className="nav-link" style={{
            fontSize: navFontSize, color: t.textMuted,
            fontWeight: 600, fontFamily: "inherit",
            letterSpacing: "-0.01em", whiteSpace: "nowrap",
            display: "inline-flex", alignItems: "center", gap: 3,
            background: "none", border: "none", padding: 0, cursor: "pointer",
          }}>
            {label}
            <svg
              width={10} height={10} viewBox="0 0 10 10" fill="none"
              style={{
                stroke: t.textMuted, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round",
                transition: "transform 0.2s ease",
                transform: activeDropdown === "products" ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <path d="M2.5 3.75L5 6.25L7.5 3.75" />
            </svg>
          </button>
          {activeDropdown === "products" && (
            <div
              onMouseEnter={handleDropdownContentEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <ProductsDropdown
                isDark={isDark}
                t={t}
                onClose={() => setActiveDropdown(null)}
                i18n={i18n}
                posthog={posthog}
              />
            </div>
          )}
        </div>
      );
    }

    return (
      <div
        key={target}
        style={{ position: "relative", display: "inline-flex", alignItems: "center" }}
        onMouseEnter={showDropdownArrow ? () => handleDropdownEnter(dropdownType) : undefined}
        onMouseLeave={showDropdownArrow ? handleDropdownLeave : undefined}
      >
        <Link to={target} className="nav-link" aria-current={isActive ? "page" : undefined} style={{
          fontSize: navFontSize, color: linkColor,
          fontWeight: isActive ? 700 : 600, fontFamily: "inherit",
          letterSpacing: "-0.01em", whiteSpace: "nowrap",
          display: "inline-flex", alignItems: "center", gap: 3,
        }}>
          {label}
          {showDropdownArrow && (
            <svg
              width={10} height={10} viewBox="0 0 10 10" fill="none"
              style={{
                stroke: linkColor, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round",
                transition: "transform 0.2s ease",
                transform: activeDropdown === dropdownType ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <path d="M2.5 3.75L5 6.25L7.5 3.75" />
            </svg>
          )}
        </Link>
        {/* Mega dropdown */}
        {showDropdownArrow && activeDropdown === dropdownType && (
          <div
            onMouseEnter={handleDropdownContentEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <MegaDropdown
              type={dropdownType}
              isDark={isDark}
              t={t}
              accent={accent}
              onClose={() => setActiveDropdown(null)}
              i18n={i18n}
              openModal={openModal}
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={S.page}>
      {/* Theme-dependent styles — static styles are in layout.css */}
      <style>{`
        body { background: ${t.bg}; min-height: -webkit-fill-available; }
        ::selection { background: ${isDark ? "rgba(79,123,232,0.25)" : "rgba(64,104,208,0.15)"}; }
        .card-hover::before {
          background: linear-gradient(90deg, transparent 0%, ${t.specular} 15%, ${t.specularHover} 50%, ${t.specular} 85%, transparent 100%);
        }
        .card-hover:hover {
          border-color: ${t.glassBorderHover} !important;
          box-shadow: ${t.glassHoverShadow} !important;
        }
        .card-hover::after {
          background: conic-gradient(
            from var(--glow-angle),
            transparent 0%, transparent 40%,
            ${isDark ? '#7C5CF6' : '#6B4FD8'}99 55%, ${isDark ? '#7C5CF6' : '#6B4FD8'}40 62%,
            ${isDark ? '#4F7BE8' : '#4068D0'}99 70%, ${isDark ? '#4F7BE8' : '#4068D0'}40 78%,
            transparent 90%, transparent 100%
          );
        }
        .nav-link:hover { color: ${accent} !important; opacity: 1 !important; }
        .btn-s:hover {
          border-color: ${t.glassBorderHover} !important;
          background: ${isDark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.7)"} !important;
        }
        *:focus-visible { outline: 2px solid ${accent}; outline-offset: 2px; border-radius: 4px; }
        .btn-p:focus-visible, .btn-s:focus-visible { outline: 2px solid ${accent}; outline-offset: 3px; box-shadow: 0 0 0 4px ${accent}25 !important; }
        .nav-link:focus-visible { outline: 2px solid ${accent}; outline-offset: 4px; }
        input:focus-visible, select:focus-visible, textarea:focus-visible { outline: 2px solid ${accent}; outline-offset: 0px; border-color: ${accent} !important; }
        .typewriter-cursor { animation: cursorBlink 0.8s step-end infinite; font-weight: 300; color: ${t.accent}; }
        .hover-lift::before {
          background: linear-gradient(90deg, transparent 0%, ${t.specular} 20%, ${t.specularHover} 50%, ${t.specular} 80%, transparent 100%);
        }
        .hover-lift:hover { box-shadow: ${t.glassHoverShadow} !important; }
        .skip-nav { background: ${t.accent}; }
        .skip-nav:focus { outline: 2px solid ${t.accent}; outline-offset: 2px; }
        .glass-specular::before {
          background: ${isDark
            ? `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.02) 10%, ${t.specular} 30%, ${t.specularHover} 50%, ${t.specular} 70%, rgba(255,255,255,0.02) 90%, transparent 100%)`
            : `linear-gradient(90deg, transparent 0%, ${t.specular} 20%, ${t.specularHover} 50%, ${t.specular} 80%, transparent 100%)`
          };
        }
        .glass-specular::after {
          content: '';
          position: absolute;
          inset: 1px;
          border-radius: 21px;
          border: 1px solid ${isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.3)"};
          pointer-events: none;
          z-index: 1;
        }
      `}</style>

      <a href="#main-content" className="skip-nav">Skip to content</a>

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* ══════════════════════════════════════════
            NAV — Quartr-style split → merged on scroll
            ══════════════════════════════════════════ */}
        <nav aria-label="Main navigation" style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999,
          padding: merged
            ? "calc(10px + env(safe-area-inset-top, 0px)) 0 0"
            : "calc(24px + env(safe-area-inset-top, 0px)) 0 0",
          transition: "padding 0.45s cubic-bezier(0.4,0,0.2,1)",
          pointerEvents: "none",
          transform: "translate3d(0,0,0)",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          willChange: "transform",
        }}>
          <div style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            pointerEvents: "auto",
          }}>

            {/* ── Left: Standalone Logo (only on Capital split nav, fades out when merged) ── */}
            <div
              className="nav-split-logo"
              style={{
                opacity: merged ? 0 : 1,
                transform: merged ? "translateX(30px)" : "translateX(0)",
                transition: "all 0.45s cubic-bezier(0.4,0,0.2,1)",
                pointerEvents: merged ? "none" : "auto",
                position: "absolute",
                left: 20,
                top: "50%",
                marginTop: -13,
                zIndex: 2,
              }}
            >
              <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                <OrbitLogo height={26} showSub={false} context={ctx} />
              </Link>
            </div>

            {/* ── Center: Glass Nav Pill (expands to include logo + CTA on scroll) ── */}
            <div className="glass-specular" style={{
              ...glassPill,
              margin: "0 auto",
              backdropFilter: `blur(${merged ? 40 : 32}px) saturate(${merged ? 200 : 180}%)`,
              WebkitBackdropFilter: `blur(${merged ? 40 : 32}px) saturate(${merged ? 200 : 180}%)`,
              transition: "all 0.45s cubic-bezier(0.4,0,0.2,1)",
              width: merged ? "min(96%, 1140px)" : "auto",
              maxWidth: "96%",
            }}>
              <div style={{
                padding: merged ? "0 20px" : "0 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: merged ? "space-between" : "center",
                height: 52,
                gap: merged ? 0 : 18,
                transition: "all 0.45s cubic-bezier(0.4,0,0.2,1)",
              }}>

                {/* Logo inside pill — visible when merged (and always on mobile) */}
                <div className="nav-pill-logo" style={{
                  opacity: merged ? 1 : 0,
                  width: merged ? "auto" : 0,
                  overflow: "hidden",
                  transition: "all 0.45s cubic-bezier(0.4,0,0.2,1)",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  marginRight: merged ? 16 : 0,
                }}>
                  <Link to="/" style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>
                    <OrbitLogo height={24} showSub={false} context={ctx} />
                  </Link>
                </div>

                {/* Nav links — always centered */}
                <div style={{
                  display: "flex", alignItems: "center", gap: ctx === "default" ? 22 : 16,
                  flexShrink: 1, minWidth: 0,
                }} className="hide-mobile">
                  {navLinks.map(([label, target]) => {
                    const isHash = target.startsWith("#");
                    const isActive = !isHash && location.pathname === target;
                    return renderNavLink(label, target, isHash, isActive);
                  })}
                </div>

                {/* Right side inside pill — visible when merged */}
                <div className="hide-mobile" style={{
                  opacity: merged ? 1 : 0,
                  width: merged ? "auto" : 0,
                  overflow: "hidden",
                  transition: "all 0.45s cubic-bezier(0.4,0,0.2,1)",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginLeft: merged ? 16 : 0,
                }}>
                  <LangToggle />
                  <ThemeToggle />
                  <button onClick={() => openModal("contact")} className="btn-p"
                    style={navCtaStyle(
                      isDark ? "#fafafa" : t.accent,
                      isDark ? "#000" : "#fff"
                    )}>{i18n.nav.agendaDemo}</button>
                </div>

                {/* Hamburger button — mobile only (always visible) */}
                <button
                  className="show-mobile"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle menu"
                  aria-expanded={mobileMenuOpen}
                  style={{
                    display: "none",
                    alignItems: "center", justifyContent: "center",
                    width: 40, height: 40, borderRadius: 16,
                    background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
                    border: `1px solid ${t.glassBorder}`,
                    cursor: "pointer", padding: 0,
                    transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    flexShrink: 0,
                    marginRight: -14,
                  }}
                >
                  {mobileMenuOpen ? (
                    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke={t.textMuted} strokeWidth="2" strokeLinecap="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  ) : (
                    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke={t.textMuted} strokeWidth="2" strokeLinecap="round">
                      <line x1="4" y1="7" x2="20" y2="7" />
                      <line x1="4" y1="12" x2="20" y2="12" />
                      <line x1="4" y1="17" x2="20" y2="17" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* ── Right: Standalone CTA + Controls (only on Capital split nav) ── */}
            <div
              className="nav-split-cta hide-mobile"
              style={{
                opacity: merged ? 0 : 1,
                transform: merged ? "translateX(-30px)" : "translateX(0)",
                transition: "all 0.45s cubic-bezier(0.4,0,0.2,1)",
                pointerEvents: merged ? "none" : "auto",
                position: "absolute",
                right: 20,
                top: "50%",
                marginTop: -16,
                display: "flex",
                alignItems: "center",
                gap: 8,
                zIndex: 2,
              }}
            >
              <LangToggle />
              <ThemeToggle />
              <button onClick={() => openModal("contact")} className="btn-p"
                style={navCtaStyle(
                  isDark ? "#fafafa" : t.accent,
                  isDark ? "#000" : "#fff"
                )}>{i18n.nav.agendaDemo}</button>
            </div>
          </div>
        </nav>

        {/* ── Mobile menu drawer — glass panel ── */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="show-mobile"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            style={{
              position: "fixed",
              top: 0, left: 0, right: 0, bottom: 0,
              zIndex: 99,
              display: "none",
              flexDirection: "column",
              transform: "translate3d(0,0,0)",
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
            }}
          >
            <div
              onClick={() => setMobileMenuOpen(false)}
              style={{
                position: "absolute", inset: 0,
                background: isDark ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.2)",
                backdropFilter: "blur(8px) saturate(150%)",
                WebkitBackdropFilter: "blur(8px) saturate(150%)",
              }}
            />
            <div style={{
              position: "relative",
              marginTop: 76,
              marginLeft: "4%", marginRight: "4%",
              background: isDark
                ? "linear-gradient(135deg, rgba(25,25,25,0.88) 0%, rgba(15,15,15,0.85) 50%, rgba(20,20,20,0.88) 100%)"
                : "rgba(255,255,255,0.75)",
              backdropFilter: "blur(40px) saturate(200%)",
              WebkitBackdropFilter: "blur(40px) saturate(200%)",
              border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.60)"}`,
              borderRadius: 20,
              padding: "20px 24px 24px",
              boxShadow: isDark
                ? "0 16px 64px rgba(0,0,0,0.7), 0 0 0 0.5px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 0 24px rgba(255,255,255,0.02)"
                : "0 16px 64px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
              animation: "mobileMenuSlideIn 0.3s cubic-bezier(0.4,0,0.2,1)",
              display: "flex", flexDirection: "column", gap: 4,
            }}>
              {navLinks.map(([label, target]) => {
                const isHash = target.startsWith("#");
                const isActive = !isHash && location.pathname === target;
                let linkColor = isActive ? accent : t.text;
                if (ctx === "default" && !isHash) {
                  if (target === "/capital") linkColor = ACCENTS.capital[mode];
                  else if (target === "/risk") linkColor = ACCENTS.risk[mode];
                }
                // Expand products dropdown into individual links for mobile
                if (target === "__products_dropdown__") {
                  return [
                    { name: "Home", link: "/", accent: t.accent },
                    { name: "Orbit Risk", link: "/risk", accent: ACCENTS.risk[mode] },
                    { name: "Orbit Capital", link: "/capital", accent: ACCENTS.capital[mode] },
                  ].map((p) => (
                    <Link
                      key={p.link}
                      to={p.link}
                      onClick={() => {
                        posthog?.capture('nav_product_click', { product: p.link.slice(1) });
                        setMobileMenuOpen(false);
                      }}
                      style={{
                        fontSize: 16, fontWeight: location.pathname === p.link ? 600 : 500,
                        color: p.accent,
                        padding: "14px 0",
                        borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)"}`,
                        letterSpacing: "-0.01em",
                      }}
                    >{p.name}</Link>
                  ));
                }
                if (isHash) {
                  return (
                    <button
                      key={target}
                      onClick={() => { handleHashLinkClick(target); setMobileMenuOpen(false); }}
                      style={{
                        fontSize: 16, fontWeight: 500, color: t.text,
                        background: "none", border: "none",
                        padding: "14px 0",
                        cursor: "pointer", fontFamily: "inherit",
                        textAlign: "left",
                        borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)"}`,
                        letterSpacing: "-0.01em",
                      }}
                    >{label}</button>
                  );
                }
                return (
                  <Link
                    key={target}
                    to={target}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      fontSize: 16, fontWeight: isActive ? 600 : 500,
                      color: linkColor,
                      padding: "14px 0",
                      borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)"}`,
                      letterSpacing: "-0.01em",
                    }}
                  >{label}</Link>
                );
              })}

              <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 14 }}>
                <LangToggle />
                <ThemeToggle />
                <button onClick={() => { openModal("contact"); setMobileMenuOpen(false); }} style={{
                  flex: 1, fontSize: 14, fontWeight: 600,
                  color: isDark ? "#000" : "#fff",
                  background: isDark ? "#fafafa" : t.accent,
                  border: "none", borderRadius: 14,
                  padding: "13px 20px", fontFamily: "inherit", cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                  boxShadow: isDark ? "0 2px 8px rgba(0,0,0,0.2)" : `0 2px 8px ${t.accent}30`,
                }}>{i18n.nav.agendaDemo}</button>
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <main id="main-content">{children}</main>

        {/* ── Footer — Glass morphism ── */}
        <footer role="contentinfo" style={{
          borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)"}`,
          padding: "64px 0 0",
          transition: "border 0.4s, background 0.4s",
          background: isDark ? t.bg : "rgba(245,245,247,0.8)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}>
          <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>

            <div className="footer-grid" style={{
              display: "grid",
              gridTemplateColumns: "1.6fr repeat(2, 1fr)",
              gap: 40,
              paddingBottom: 48,
            }}>

              {/* Col 1: Brand */}
              <div className="footer-brand" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <Link to="/" style={{ display: "inline-flex", alignItems: "center", width: "fit-content" }}>
                  <OrbitLogo height={30} showSub={false} />
                </Link>
                <p style={{
                  fontSize: 13, color: t.textDim, lineHeight: 1.7, maxWidth: 280, margin: 0,
                }}>
                  {f.brand}
                </p>
                <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
                  <a href="https://x.com/orbitcapitalai" target="_blank" rel="noopener noreferrer" aria-label="Orbit Capital en X"
                    onClick={() => handleSocialClick('x', 'https://x.com/orbitcapitalai')}
                    style={{
                      width: 36, height: 36, borderRadius: 10,
                      background: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
                      border: `1px solid ${t.glassBorder}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                    }}>
                    <SvgIcon name="x" size={15} color={t.textDim} />
                  </a>
                  <a href="https://linkedin.com/company/orbitcapitalai" target="_blank" rel="noopener noreferrer" aria-label="Orbit Capital en LinkedIn"
                    onClick={() => handleSocialClick('linkedin', 'https://linkedin.com/company/orbitcapitalai')}
                    style={{
                      width: 36, height: 36, borderRadius: 10,
                      background: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
                      border: `1px solid ${t.glassBorder}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                    }}>
                    <SvgIcon name="linkedin" size={15} color={t.textDim} />
                  </a>
                  <a href="https://t.me/orbitcapitalai" target="_blank" rel="noopener noreferrer" aria-label="Orbit Capital en Telegram"
                    onClick={() => handleSocialClick('telegram', 'https://t.me/orbitcapitalai')}
                    style={{
                      width: 36, height: 36, borderRadius: 10,
                      background: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
                      border: `1px solid ${t.glassBorder}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                    }}>
                    <SvgIcon name="telegram" size={15} color={t.textDim} />
                  </a>
                </div>
              </div>

              {/* Col 2: Orbit Capital */}
              <div>
                <div style={{
                  fontSize: 11, fontWeight: 700, color: t.heading,
                  textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16,
                }}>{f.colCapital}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    [f.elFondo, "/"],
                    [f.mercado, "/capital/market"],
                    [f.timing, "/capital/timing"],
                    [f.orbitEngine, "/#engine"],
                    [f.performance, "/#performance"],
                    ["FAQ", "/#faq"],
                  ].map(([label, path]) => (
                    <Link key={path} to={path} className="nav-link" style={{
                      fontSize: 13, color: t.textDim, fontWeight: 500,
                      transition: "color 0.25s",
                    }}>{label}</Link>
                  ))}
                </div>
              </div>

              {/* Col 3: Company */}
              <div>
                <div style={{
                  fontSize: 11, fontWeight: 700, color: t.heading,
                  textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16,
                }}>{f.colCompany}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <Link to="/team" className="nav-link" style={{
                    fontSize: 13, color: t.textDim, fontWeight: 500,
                    transition: "color 0.25s",
                  }}>{f.equipo}</Link>
                  <Link to="/blog" className="nav-link" style={{
                    fontSize: 13, color: t.textDim, fontWeight: 500,
                    transition: "color 0.25s",
                  }}>{f.blog}</Link>
                  <span style={{
                    fontSize: 13, color: t.textDim, fontWeight: 500,
                    display: "inline-flex", alignItems: "center", gap: 6,
                    opacity: 0.5, cursor: "default",
                  }}>
                    {f.press}
                    <span style={{
                      fontSize: 9, fontWeight: 700, color: t.accent,
                      background: `${t.accent}12`, border: `1px solid ${t.accent}20`,
                      borderRadius: 4, padding: "1px 6px",
                      letterSpacing: "0.04em", textTransform: "uppercase",
                    }}>{f.pronto}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* ── Contact row ── */}
            <div style={{
              borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)"}`,
              padding: "24px 0",
              display: "flex", flexWrap: "wrap", gap: 28, alignItems: "center",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: t.textDim }}>
                <SvgIcon name="mail" size={14} color={t.textDim} />
                <span><strong style={{ color: t.textMuted, fontWeight: 600 }}>Capital:</strong>{" "}
                  <a href={`mailto:${f.capitalEmail}`} className="nav-link" style={{ color: t.textDim }}>{f.capitalEmail}</a>
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: t.textDim }}>
                <SvgIcon name="mapPin" size={14} color={t.textDim} />
                <span>{f.location}</span>
              </div>
            </div>

            {/* ── Bottom bar ── */}
            <div style={{
              borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)"}`,
              padding: "20px 0",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              flexWrap: "wrap", gap: 12,
            }}>
              <div style={{ fontSize: 12, color: t.textDim }}>
                © {new Date().getFullYear()} Orbit. {f.rights}
              </div>
              <div style={{ display: "flex", gap: 18 }}>
                {[
                  { label: f.privacy, to: "/privacy" },
                  { label: f.terms, to: "/terms" },
                ].map(({ label, to }) => (
                  <Link key={to} to={to} className="nav-link" style={{
                    fontSize: 11, color: t.textDim, fontWeight: 500,
                    opacity: 0.6, textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}>{label}</Link>
                ))}
              </div>
            </div>

          </div>
        </footer>
      </div>

      {modalOpen && (
        <Suspense fallback={null}>
          <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} variant={modalVariant} />
        </Suspense>
      )}
    </div>
  );
}
