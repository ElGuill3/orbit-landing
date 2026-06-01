import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme, getAccent } from "./theme";
import { createStyles } from "./styles";
import { FadeIn } from "./components";
import { useLang } from "./i18n";

export default function PageHero({ tag, title, description, accentColor, hideBackButton }) {
  const { mode, t } = useTheme();
  const { S } = useMemo(() => createStyles(t), [t]);
  const { i18n, lang } = useLang();
  const location = useLocation();
  const ctx = location.pathname.startsWith("/capital") ? "capital" : "default";
  const accent = accentColor || getAccent(ctx, mode);

  const backTo = "/";
  const backLabel = "Capital";

  return (
    <section style={{
      ...S.hero,
      minHeight: "auto",
      paddingTop: 120,
      paddingBottom: 80,
      position: "relative",
    }}>
      <div style={{ ...S.container, position: "relative", zIndex: 2 }}>
        <FadeIn>
          <div style={{ maxWidth: 720 }}>
            {!hideBackButton && (
              <Link to={backTo} style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                fontSize: 15, fontWeight: 600, color: accent,
                marginBottom: 28, transition: "all 0.2s",
                background: `${accent}10`, border: `1px solid ${accent}22`,
                borderRadius: 100, padding: "8px 18px",
              }}>
                <span style={{ fontSize: 18 }}>←</span> {i18n.back} a {backLabel}
              </Link>
            )}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: `${accent}15`,
              border: `1px solid ${accent}30`,
              borderRadius: 100, padding: "6px 16px",
              fontSize: 11, fontWeight: 600, color: accent,
              letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 20,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: accent }} />
              {tag}
            </div>
            <h1 style={{
              fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800,
              color: t.heading, letterSpacing: "-0.03em",
              lineHeight: 1.1, marginBottom: 20,
            }}>{title}</h1>
            {description && (
              <p style={{
                fontSize: "clamp(15px, 2vw, 18px)", color: t.textMuted,
                lineHeight: 1.7, maxWidth: 600,
              }}>{description}</p>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
