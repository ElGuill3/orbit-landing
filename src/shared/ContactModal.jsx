import { useState, useEffect, useRef, useCallback } from "react";
import { useTheme, getAccent } from "./theme";
import { useLang } from "./i18n";
import { supabase } from "../lib/supabaseClient";
import { usePostHogLazy as usePostHog } from './useAnalytics';

/* ── Hash utility: SHA-256 for anonymizing PII before analytics ── */
async function hashEmail(email) {
  if (!email || typeof crypto?.subtle?.digest !== "function") return "anon";
  const data = new TextEncoder().encode(email.toLowerCase().trim());
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

export default function ContactModal({ isOpen, onClose, variant = "capital" }) {
  const { mode, t } = useTheme();
  const { i18n } = useLang();
  const m = i18n.modal;
  const accent = getAccent(variant, mode);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [form, setForm] = useState({});
  const modalRef = useRef(null);
  const posthog = usePostHog();

  // Focus trap + Escape key handler
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") { onClose(); return; }
    if (e.key !== "Tab" || !modalRef.current) return;
    const focusable = modalRef.current.querySelectorAll(
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
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setSubmitError(false);
      setForm({});
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
      // Auto-focus first focusable element inside modal
      requestAnimationFrame(() => {
        if (modalRef.current) {
          const first = modalRef.current.querySelector(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (first) first.focus();
        }
      });
      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  /* ── Input sanitizer: strip HTML/scripts, dangerous URIs, event handlers, limit length ── */
  const sanitize = (v) => {
    if (typeof v !== "string") return v;
    return v
      .replace(/<[^>]*>?/g, "")              // Strip HTML tags (including unclosed)
      .replace(/on\w+\s*=/gi, "")             // Strip event handlers (onclick=, onerror=, etc.)
      .replace(/javascript\s*:/gi, "")        // Strip javascript: protocol
      .replace(/vbscript\s*:/gi, "")          // Strip vbscript: protocol
      .replace(/data\s*:[^,]*,/gi, "")        // Strip data: URIs
      .replace(/expression\s*\(/gi, "")       // Strip CSS expression()
      .replace(/url\s*\(/gi, "")              // Strip CSS url()
      .replace(/&#/g, "")                     // Strip HTML entity encoding attempts
      .replace(/\\u00/gi, "")                 // Strip unicode escape attempts
      .trim()
      .slice(0, 500);
  };

  const set = (k, v) => setForm((prev) => ({ ...prev, [k]: sanitize(v) }));

  /* ── Rate limiting: max 3 submissions per 60s window ── */
  const RATE_LIMIT = 3;
  const RATE_WINDOW = 60_000;
  const checkRateLimit = () => {
    try {
      const key = "orbit_rl";
      const now = Date.now();
      const raw = sessionStorage.getItem(key);
      const timestamps = raw ? JSON.parse(raw).filter((ts) => now - ts < RATE_WINDOW) : [];
      if (timestamps.length >= RATE_LIMIT) return false;
      timestamps.push(now);
      sessionStorage.setItem(key, JSON.stringify(timestamps));
      return true;
    } catch { return true; }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check: if the hidden field is filled, silently reject (bot detected)
    if (form._website) {
      setSubmitted(true);
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (form.email && !emailRegex.test(form.email.trim())) {
      setEmailError(true);
      return;
    }
    setEmailError(false);

    // Rate limiting check
    if (!checkRateLimit()) {
      setSubmitError(true);
      return;
    }

    // Sanitize all fields before processing
    const cleanForm = Object.fromEntries(
      Object.entries(form).map(([k, v]) => [k, sanitize(v)])
    );

    const isCapital = variant === "capital";
    const isRisk = variant === "risk";
    const isContactForm = variant === "contact";
    setSubmitError(false);

    if (!supabase) {
      setSubmitError(true);
      return;
    }

    try {
      if (isContactForm) {
        // Insert into contact_leads table
        const { error } = await supabase.from("contact_leads").insert([{
          name: cleanForm.name || null,
          email: cleanForm.email || null,
          company: cleanForm.company || null,
          phone: cleanForm.phone || null,
          product: cleanForm.product || null,
          message: cleanForm.message || null,
        }]);
        if (error) throw error;
        posthog?.capture('contact_lead_submitted', {
          product: cleanForm.product || 'not_specified',
          has_company: !!cleanForm.company,
          has_phone: !!cleanForm.phone,
          has_message: !!cleanForm.message,
        });
        if (cleanForm.email) {
          hashEmail(cleanForm.email).then((hashed) => {
            posthog?.identify(hashed, { lead_type: 'contact' });
          });
        }
      } else if (isCapital) {
        // Insert into capital_leads table
        const { error } = await supabase.from("capital_leads").insert([{
          name: cleanForm.name || null,
          email: cleanForm.email || null,
          company: cleanForm.company || null,
          investment_range: cleanForm.investmentRange || null,
          referral_source: cleanForm.source || null,
          message: cleanForm.message || null,
        }]);
        if (error) throw error;
        posthog?.capture('capital_lead_submitted', {
          investment_range: cleanForm.investmentRange || 'not_specified',
          referral_source: cleanForm.source || 'not_specified',
          has_company: !!cleanForm.company,
          has_message: !!cleanForm.message,
        });
        if (cleanForm.email) {
          hashEmail(cleanForm.email).then((hashed) => {
            posthog?.identify(hashed, { lead_type: 'capital' });
          });
        }
      } else if (isRisk) {
        // Insert into risk_leads table
        const { error } = await supabase.from("risk_leads").insert([{
          name: cleanForm.name || null,
          email: cleanForm.email || null,
          company: cleanForm.company || null,
          phone: cleanForm.phone || null,
          industry: cleanForm.industry || null,
          message: cleanForm.message || null,
        }]);
        if (error) throw error;
        posthog?.capture('risk_lead_submitted', {
          industry: cleanForm.industry || 'not_specified',
          has_company: !!cleanForm.company,
          has_phone: !!cleanForm.phone,
          has_message: !!cleanForm.message,
        });
        if (cleanForm.email) {
          hashEmail(cleanForm.email).then((hashed) => {
            posthog?.identify(hashed, { lead_type: 'risk' });
          });
        }
      }
    } catch (err) {
      if (import.meta.env.DEV) {
        console.error(`[ContactModal] Error submitting ${variant} lead:`, err);
      }
      posthog?.captureException(err, {
        context: 'contact_form_submission',
        variant,
      });
      setSubmitError(true);
      return;
    }

    // Track submission count (non-PII)
    try {
      const count = parseInt(sessionStorage.getItem("orbit_lead_count") || "0", 10);
      sessionStorage.setItem("orbit_lead_count", String(count + 1));
    } catch (_) { /* storage unavailable */ }

    // Log to console in dev for debugging (no PII in production)
    if (import.meta.env.DEV) {
      console.log("[ContactModal] Lead submitted:", { variant, ...cleanForm });
    }

    setSubmitted(true);
  };

  const isDark = mode === "dark";
  const inputBg = isDark ? "#1e1e1e" : "#f4f4f5";

  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    fontSize: 14,
    background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
    border: `1px solid ${t.glassBorder}`,
    borderRadius: 12,
    color: t.heading,
    fontFamily: "inherit",
    outline: "none",
    transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
  };

  const selectStyle = {
    ...inputStyle,
    appearance: "none",
    cursor: "pointer",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23888' fill='none' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 14px center",
    paddingRight: 36,
  };

  const labelStyle = {
    fontSize: 12,
    fontWeight: 600,
    color: t.textMuted,
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    marginBottom: 6,
    display: "block",
  };

  const isCapital = variant === "capital";
  const isRisk = variant === "risk";
  const isContact = variant === "contact";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={isCapital ? "Contact Orbit Capital" : isRisk ? "Contact Orbit Risk" : "Contact Orbit"}
      onClick={onClose}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 1000,
        background: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 20,
        animation: "modalFadeIn 0.25s ease-out",
      }}
    >
      <style>{`
        @keyframes modalFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modalSlideUp { from { opacity: 0; transform: scale(0.95) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        .modal-input:focus { border-color: ${accent} !important; }
      `}</style>

      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%", maxWidth: 480, maxHeight: "90vh", overflowY: "auto",
          background: mode === "dark" ? "rgba(22,22,22,0.85)" : "rgba(255,255,255,0.75)",
          backdropFilter: "blur(40px) saturate(200%)",
          WebkitBackdropFilter: "blur(40px) saturate(200%)",
          border: `1px solid ${mode === "dark" ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.60)"}`,
          borderRadius: 24,
          padding: "36px 32px",
          boxShadow: mode === "dark"
            ? "0 24px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)"
            : "0 24px 80px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
          animation: "modalSlideUp 0.35s cubic-bezier(0.4,0,0.2,1)",
          position: "relative",
        }}
      >
        {/* Close button */}
        <button onClick={onClose} aria-label="Close modal" style={{
          position: "absolute", top: 16, right: 16, width: 32, height: 32,
          borderRadius: "50%", background: inputBg,
          border: `1px solid ${t.glassBorder}`, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18, color: t.textDim, fontFamily: "inherit", transition: "all 0.2s",
        }}>×</button>

        {/* Header */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: `${accent}15`, border: `1px solid ${accent}30`,
          borderRadius: 100, padding: "5px 14px",
          fontSize: 10, fontWeight: 700, color: accent,
          letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 16,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: accent }} />
          {isCapital ? "Orbit Capital" : isRisk ? "Orbit Risk" : "Orbit"}
        </div>

        <h3 style={{
          fontSize: 22, fontWeight: 800, color: t.heading,
          letterSpacing: "-0.02em", margin: "0 0 8px",
        }}>
          {isCapital ? m.capitalTitle : isRisk ? m.riskTitle : m.contactTitle}
        </h3>
        <p style={{ fontSize: 14, color: t.textMuted, lineHeight: 1.6, margin: "0 0 28px" }}>
          {isCapital ? m.capitalDesc : isRisk ? m.riskDesc : m.contactDesc}
        </p>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <div style={{
              width: 56, height: 56, borderRadius: "50%",
              background: `${accent}15`, border: `2px solid ${accent}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 28, margin: "0 auto 20px",
            }}>✓</div>
            <h4 style={{ fontSize: 20, fontWeight: 700, color: t.heading, margin: "0 0 8px" }}>
              {m.thanks}
            </h4>
            <p style={{ fontSize: 14, color: t.textMuted, margin: 0 }}>
              {isCapital ? m.thanksCapital : isRisk ? m.thanksRisk : m.thanksContact}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {/* Honeypot: hidden field to catch bots — must remain empty for humans */}
            <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "-9999px", opacity: 0, height: 0, overflow: "hidden", tabIndex: -1 }}>
              <label htmlFor="contact-website">Website</label>
              <input id="contact-website" name="website" type="text" autoComplete="off" tabIndex={-1}
                onChange={(e) => setForm((prev) => ({ ...prev, _website: e.target.value }))} />
            </div>
            {/* Common: Name + Email */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div>
                <label htmlFor="contact-name" style={labelStyle}>{m.name}</label>
                <input id="contact-name" className="modal-input" required style={inputStyle}
                  placeholder={m.namePlaceholder} onChange={(e) => set("name", e.target.value)} />
              </div>
              <div>
                <label htmlFor="contact-email" style={labelStyle}>{m.email}</label>
                <input id="contact-email" className="modal-input" required type="email"
                  style={{ ...inputStyle, ...(emailError ? { borderColor: "#ef4444" } : {}) }}
                  placeholder={m.emailPlaceholder} onChange={(e) => { set("email", e.target.value); setEmailError(false); }} />
                {emailError && <span style={{ color: "#ef4444", fontSize: 12, marginTop: 4, display: "block" }}>{m.invalidEmail || "Invalid email format"}</span>}
              </div>
            </div>

            {isCapital ? (
              <>
                <div>
                  <label htmlFor="contact-company" style={labelStyle}>{m.companyFO}</label>
                  <input id="contact-company" className="modal-input" style={inputStyle}
                    placeholder={m.companyPlaceholder} onChange={(e) => set("company", e.target.value)} />
                </div>
                <div>
                  <label htmlFor="contact-investment" style={labelStyle}>{m.investmentRange}</label>
                  <select id="contact-investment" className="modal-input" style={selectStyle}
                    onChange={(e) => set("investmentRange", e.target.value)}>
                    <option value="">{m.select}</option>
                    <option value="1M-5M">$1M – $5M MXN</option>
                    <option value="5M-15M">$5M – $15M MXN</option>
                    <option value="15M+">$15M+ MXN</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-source" style={labelStyle}>{m.howDidYouHear}</label>
                  <select id="contact-source" className="modal-input" style={selectStyle}
                    onChange={(e) => set("source", e.target.value)}>
                    <option value="">{m.select}</option>
                    <option value="referral">{m.referral}</option>
                    <option value="linkedin">{m.linkedin}</option>
                    <option value="event">{m.event}</option>
                    <option value="search">{m.search}</option>
                    <option value="other">{m.other}</option>
                  </select>
                </div>
              </>
            ) : isRisk ? (
              <>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label htmlFor="contact-company-risk" style={labelStyle}>{m.company}</label>
                    <input id="contact-company-risk" className="modal-input" style={inputStyle}
                      placeholder={m.companyIntelPlaceholder} onChange={(e) => set("company", e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="contact-phone-risk" style={labelStyle}>{m.phone}</label>
                    <input id="contact-phone-risk" className="modal-input" type="tel" style={inputStyle}
                      placeholder={m.phonePlaceholder} onChange={(e) => set("phone", e.target.value)} />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-industry" style={labelStyle}>{m.riskIndustry}</label>
                  <select id="contact-industry" className="modal-input" style={selectStyle}
                    onChange={(e) => set("industry", e.target.value)}>
                    <option value="">{m.riskIndustryPlaceholder}</option>
                    <option value="manufacturing">{m.riskIndustryManufacturing}</option>
                    <option value="energy">{m.riskIndustryEnergy}</option>
                    <option value="agriculture">{m.riskIndustryAgriculture}</option>
                    <option value="logistics">{m.riskIndustryLogistics}</option>
                    <option value="financial">{m.riskIndustryFinancial}</option>
                    <option value="real-estate">{m.riskIndustryRealEstate}</option>
                    <option value="retail">{m.riskIndustryRetail}</option>
                    <option value="tech">{m.riskIndustryTech}</option>
                    <option value="other">{m.riskIndustryOther}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-exposures" style={labelStyle}>{m.riskExposures}</label>
                  <textarea id="contact-exposures" className="modal-input"
                    style={{ ...inputStyle, minHeight: 80, resize: "vertical" }}
                    placeholder={m.riskExposuresPlaceholder}
                    onChange={(e) => set("message", e.target.value)} />
                </div>
              </>
            ) : (
              <>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label htmlFor="contact-company-gen" style={labelStyle}>{m.company}</label>
                    <input id="contact-company-gen" className="modal-input" style={inputStyle}
                      placeholder={m.companyIntelPlaceholder} onChange={(e) => set("company", e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" style={labelStyle}>{m.phone}</label>
                    <input id="contact-phone" className="modal-input" type="tel" style={inputStyle}
                      placeholder={m.phonePlaceholder} onChange={(e) => set("phone", e.target.value)} />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-product" style={labelStyle}>{m.productInterest}</label>
                  <select id="contact-product" className="modal-input" style={selectStyle}
                    onChange={(e) => set("product", e.target.value)}>
                    <option value="">{m.select}</option>
                    <option value="risk">{m.productRisk}</option>
                    <option value="capital">{m.productCapital}</option>
                  </select>
                </div>
              </>
            )}

            {/* Message/Use-case — only for non-risk variants (risk has its own textarea above) */}
            {!isRisk && (
              <div>
                <label htmlFor="contact-message" style={labelStyle}>{m.messageLabel}</label>
                <textarea id="contact-message" className="modal-input"
                  style={{ ...inputStyle, minHeight: 80, resize: "vertical" }}
                  placeholder={m.messagePlaceholder}
                  onChange={(e) => set("message", e.target.value)} />
              </div>
            )}

            {submitError && (
              <div role="alert" style={{
                fontSize: 13, color: "#ef4444", textAlign: "center",
                padding: "10px 14px", background: "rgba(239,68,68,0.08)",
                border: "1px solid rgba(239,68,68,0.2)", borderRadius: 10,
              }}>
                {m.submitError || "Something went wrong. Please try again."}
              </div>
            )}

            <button type="submit" className="btn-p" style={{
              width: "100%", padding: "14px 0", fontSize: 15, fontWeight: 700,
              color: "#fff", border: "none", borderRadius: 14, cursor: "pointer",
              fontFamily: "inherit", background: accent,
              transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
              boxShadow: `0 2px 12px ${accent}35, inset 0 1px 0 rgba(255,255,255,0.15)`,
            }}>
              {isCapital ? m.submitCapital : isRisk ? m.submitRisk : m.submitContact}
            </button>
            <p style={{ fontSize: 11, color: t.textDim, textAlign: "center", margin: 0 }}>
              {isCapital ? m.disclaimerCapital : isRisk ? m.disclaimerRisk : m.disclaimerContact}
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
