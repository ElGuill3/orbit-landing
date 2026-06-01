// Dynamic styles factory — receives a theme token object `t`
export function createStyles(t) {
  const isDark = t.isDark;

  const S = {
    page: {
      fontFamily: "'DM Sans', 'DM Sans Fallback', 'Helvetica Neue', -apple-system, BlinkMacSystemFont, sans-serif",
      background: t.bg, color: t.text, minHeight: "100vh",
      overflowX: "hidden", lineHeight: 1.65,
      letterSpacing: "-0.01em",
      transition: "background 0.4s, color 0.4s",
    },
    container: { maxWidth: 1180, margin: "0 auto", padding: "0 24px" },
    nav: {
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      transition: "all 0.3s ease",
    },
    navInner: {
      maxWidth: 1180, margin: "0 auto", padding: "0 24px",
      display: "flex", alignItems: "center", justifyContent: "space-between", height: 64,
    },
    hero: {
      position: "relative", minHeight: "100vh", display: "flex",
      alignItems: "center", paddingTop: 80, overflow: "hidden",
    },
    sectionTag: {
      fontSize: 12, fontWeight: 700, color: t.accent,
      letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16,
    },
    sectionH2: {
      fontSize: "clamp(30px, 4.5vw, 52px)", fontWeight: 800,
      letterSpacing: "-0.03em", color: t.heading, lineHeight: 1.1, marginBottom: 20,
    },
    sectionP: {
      fontSize: 17, color: t.textMuted, maxWidth: 640, lineHeight: 1.75, marginBottom: 48,
      fontWeight: 500,
    },
    card: {
      background: isDark
        ? "rgba(255,255,255,0.03)"
        : "rgba(255,255,255,0.55)",
      backdropFilter: t.cardBlur,
      WebkitBackdropFilter: t.cardBlur,
      border: `1px solid ${t.glassBorder}`,
      borderRadius: 20, padding: 32,
      transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
      position: "relative", overflow: "hidden",
      boxShadow: t.glassShadow,
    },
    vertCard: {
      background: isDark
        ? "rgba(255,255,255,0.03)"
        : "rgba(255,255,255,0.55)",
      backdropFilter: t.cardBlur,
      WebkitBackdropFilter: t.cardBlur,
      border: `1px solid ${t.glassBorder}`,
      borderRadius: 16, padding: "20px 18px",
      transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
      boxShadow: t.glassShadow,
    },
  };

  const btnPrimary = {
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
    background: isDark ? "#fafafa" : t.accent,
    color: isDark ? "#000" : "#ffffff",
    fontWeight: 700, fontSize: 15,
    padding: "14px 32px", borderRadius: 14,
    border: "none",
    cursor: "pointer", letterSpacing: "0.01em",
    transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)", fontFamily: "inherit",
    minWidth: 180,
    boxShadow: isDark
      ? "0 2px 12px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.20)"
      : `0 2px 12px ${t.accent}30, inset 0 1px 0 rgba(255,255,255,0.25)`,
  };

  const btnSecondary = {
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
    background: isDark ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.55)",
    backdropFilter: "blur(16px) saturate(160%)",
    WebkitBackdropFilter: "blur(16px) saturate(160%)",
    color: isDark ? t.text : t.heading,
    fontWeight: 700, fontSize: 15,
    padding: "14px 32px", borderRadius: 14,
    border: `1px solid ${t.glassBorder}`,
    cursor: "pointer", letterSpacing: "0.01em",
    transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)", fontFamily: "inherit",
    minWidth: 180,
    boxShadow: isDark
      ? "0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)"
      : "0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)",
  };

  return { S, btnPrimary, btnSecondary };
}
