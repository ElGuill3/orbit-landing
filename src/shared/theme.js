import { createContext, useContext } from "react";

const ThemeCtx = createContext();
const useTheme = () => useContext(ThemeCtx);

/* ── Sub-theme accents ── */
const ACCENTS = {
  default: { dark: "#4F7BE8", light: "#4068D0" },
  capital: { dark: "#4F7BE8", light: "#4068D0" },
  intel:   { dark: "#7C5CF6", light: "#6B4FD8" },
  risk:    { dark: "#10B981", light: "#059669" },
};

function getAccent(context, mode) {
  const key = context === "capital" ? "capital" : context === "intel" ? "intel" : context === "risk" ? "risk" : "default";
  return ACCENTS[key][mode];
}

const THEMES = {
  dark: {
    isDark: true,
    bg: "#000000", bgAlt: "#0a0a0a", bgCard: "rgba(255,255,255,0.03)",
    accent: "#4F7BE8", accentGlow: "#3A5FBE", accentLight: "#8FAEF0",
    gold: "#4F7BE8", goldLight: "#8FAEF0",
    text: "#e4e4e7", textMuted: "#b4b4bc", textDim: "#8a8a94",
    heading: "#fafafa",
    border: "#1e1e1e", borderLight: "#2a2a2a",
    navBg: "rgba(0,0,0,0.45)",
    cardBg: "rgba(255,255,255,0.03)",
    subtleBg: "rgba(255,255,255,0.03)",
    subtleBorder: "rgba(255,255,255,0.08)",
    shadow: "rgba(0,0,0,0.4)",
    hoverShadow: "rgba(255,255,255,0.03)",
    gradFrom: "#8FAEF0", gradTo: "#4F7BE8",
    glassBg: "rgba(255,255,255,0.03)",
    glassBorder: "rgba(255,255,255,0.12)",
    glassBorderHover: "rgba(255,255,255,0.22)",
    glassHighlight: "inset 0 1px 0 rgba(255,255,255,0.05), inset 0 -1px 0 rgba(255,255,255,0.02)",
    glassShadow: "0 4px 16px rgba(0,0,0,0.35), 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.04)",
    glassHoverShadow: "0 12px 48px rgba(0,0,0,0.5), 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.06)",
    meshGradient: "none",
    glassBlur: "blur(40px) saturate(200%)",
    cardBlur: "blur(16px) saturate(140%)",
    specular: "rgba(255,255,255,0.06)",
    specularHover: "rgba(255,255,255,0.10)",
  },
  light: {
    isDark: false,
    bg: "#F5F5F7", bgAlt: "#EBEBED", bgCard: "rgba(255,255,255,0.60)",
    accent: "#4068D0", accentGlow: "#2E4FA0", accentLight: "#4F7BE8",
    gold: "#4068D0", goldLight: "#2E4FA0",
    text: "#1d1d1f", textMuted: "#6e6e73", textDim: "#86868b",
    heading: "#1d1d1f",
    border: "#d2d2d7", borderLight: "#e8e8ed",
    navBg: "rgba(255,255,255,0.55)",
    cardBg: "rgba(255,255,255,0.60)",
    subtleBg: "rgba(0,0,0,0.02)",
    subtleBorder: "rgba(0,0,0,0.06)",
    shadow: "rgba(0,0,0,0.06)",
    hoverShadow: "rgba(0,0,0,0.08)",
    gradFrom: "#4068D0", gradTo: "#4F7BE8",
    glassBg: "rgba(255,255,255,0.60)",
    glassBorder: "rgba(255,255,255,0.65)",
    glassBorderHover: "rgba(255,255,255,0.85)",
    glassHighlight: "inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(255,255,255,0.3)",
    glassShadow: "0 4px 16px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)",
    glassHoverShadow: "0 12px 48px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.95)",
    meshGradient: "none",
    glassBlur: "blur(40px) saturate(200%)",
    cardBlur: "blur(24px) saturate(180%)",
    specular: "rgba(255,255,255,0.7)",
    specularHover: "rgba(255,255,255,0.9)",
  },
};

export { ThemeCtx, useTheme, THEMES, ACCENTS, getAccent };
