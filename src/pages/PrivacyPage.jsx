import { useMemo } from "react";
import { useTheme } from "../shared/theme";
import { createStyles } from "../shared/styles";
import { FadeIn, MorphBlob } from "../shared/components";
import { useLang } from "../shared/i18n";
import { Link } from "react-router-dom";

export default function PrivacyPage() {
  const { t, mode } = useTheme();
  const isDark = mode === "dark";
  const { S } = useMemo(() => createStyles(t), [t]);
  const { i18n } = useLang();
  const p = i18n.legal.privacy;

  const glass = {
    background: t.glassBg,
    backdropFilter: "blur(16px) saturate(150%)",
    WebkitBackdropFilter: "blur(16px) saturate(150%)",
    border: `1px solid ${t.glassBorder}`,
    borderRadius: 16,
    padding: "32px 36px",
    boxShadow: t.glassShadow,
    marginBottom: 24,
  };

  return (
    <div style={{ overflowX: "clip" }}>
      {/* ═══ HERO ═══ */}
      <section style={{
        minHeight: "45vh", display: "flex", alignItems: "center",
        position: "relative", overflow: "hidden", padding: "140px 0 60px",
      }}>
        <MorphBlob color={t.accent} size={420} style={{ top: -180, right: -160, opacity: 0.1 }} />
        <MorphBlob color={isDark ? "#6C5CE7" : "#4068D0"} size={340} style={{ bottom: -120, left: -120, opacity: 0.07 }} />

        <div style={{ ...S.container, position: "relative", zIndex: 2 }}>
          <FadeIn>
            <Link to="/" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontSize: 15, fontWeight: 600, color: t.accent,
              marginBottom: 28, transition: "all 0.2s",
              background: `${t.accent}10`, border: `1px solid ${t.accent}22`,
              borderRadius: 100, padding: "8px 18px", textDecoration: "none",
            }}>
              <span style={{ fontSize: 18 }}>←</span> {i18n.back} {i18n.legal.backHome}
            </Link>

            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: `${t.accent}15`, border: `1px solid ${t.accent}30`,
              borderRadius: 100, padding: "6px 16px",
              fontSize: 11, fontWeight: 600, color: t.accent,
              letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 20,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: t.accent }} />
              {p.heroTag}
            </div>

            <h1 style={{
              fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800,
              color: t.heading, letterSpacing: "-0.03em",
              lineHeight: 1.1, marginBottom: 20, maxWidth: 700,
            }}>{p.heroTitle}</h1>

            <p style={{
              fontSize: "clamp(15px, 2vw, 18px)", color: t.textMuted,
              lineHeight: 1.7, maxWidth: 600,
            }}>{p.heroDesc}</p>

            <div style={{
              marginTop: 20, fontSize: 13, color: t.textDim, fontWeight: 500,
            }}>{p.lastUpdated}</div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ SECTIONS ═══ */}
      <section style={{ padding: "20px 0 100px" }}>
        <div style={{ ...S.container, maxWidth: 840, margin: "0 auto" }}>
          {p.sections.map((sec, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <div style={glass}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 18 }}>
                  <span style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    minWidth: 32, height: 32, borderRadius: 10,
                    background: `${t.accent}18`, color: t.accent,
                    fontSize: 13, fontWeight: 800, letterSpacing: "-0.02em",
                    border: `1px solid ${t.accent}30`,
                  }}>{i + 1}</span>
                  <h2 style={{
                    fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 700,
                    color: t.heading, letterSpacing: "-0.02em", lineHeight: 1.3,
                    paddingTop: 3,
                  }}>{sec.title}</h2>
                </div>

                {Array.isArray(sec.content) ? (
                  sec.content.map((para, j) => (
                    <p key={j} style={{
                      fontSize: 15, color: t.textMuted, lineHeight: 1.8,
                      marginBottom: j < sec.content.length - 1 ? 14 : 0,
                    }}>{para}</p>
                  ))
                ) : (
                  <p style={{ fontSize: 15, color: t.textMuted, lineHeight: 1.8 }}>{sec.content}</p>
                )}
              </div>
            </FadeIn>
          ))}

          {/* ── Contact block ── */}
          <FadeIn delay={p.sections.length * 0.04}>
            <div style={{
              ...glass,
              borderTop: `3px solid ${t.accent}`,
              textAlign: "center",
              padding: "36px 40px",
            }}>
              <h3 style={{
                fontSize: 18, fontWeight: 700, color: t.heading,
                marginBottom: 10, letterSpacing: "-0.02em",
              }}>{p.contactTitle}</h3>
              <p style={{ fontSize: 15, color: t.textMuted, lineHeight: 1.7 }}>
                {p.contactDesc}
              </p>
              <a href={`mailto:${p.contactEmail}`} className="nav-link" style={{
                display: "inline-block", marginTop: 14,
                fontSize: 15, fontWeight: 600, color: t.accent,
              }}>{p.contactEmail}</a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
