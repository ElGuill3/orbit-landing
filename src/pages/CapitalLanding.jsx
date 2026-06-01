import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useTheme, ACCENTS } from "../shared/theme";
import { createStyles } from "../shared/styles";
import {
  SvgIcon, FadeIn,
  GradientText, CapitalCanvas,
  PolymarketTicker, FaqAccordion, SectionTag,
} from "../shared/components";
import ContactModal from "../shared/ContactModal";
import { useLang } from "../shared/i18n";
import { usePostHog } from '@posthog/react';


export default function CapitalLanding() {
  const { mode, t } = useTheme();
  const { S, btnPrimary, btnSecondary } = useMemo(() => createStyles(t), [t]);
  const isDark = mode === "dark";
  const accent = ACCENTS.capital[mode];
  const [modalOpen, setModalOpen] = useState(false);
  const { i18n } = useLang();
  const c = i18n.capital;
  const posthog = usePostHog();

  const openModal = () => {
    setModalOpen(true);
    posthog?.capture('capital_cta_clicked', {
      source: 'capital_landing',
    });
  };

  const glass = {
    background: t.glassBg,
    backdropFilter: t.cardBlur,
    WebkitBackdropFilter: t.cardBlur,
    border: `1px solid ${t.glassBorder}`, borderRadius: 20, padding: "24px 28px",
    boxShadow: t.glassShadow,
    transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
  };

  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section style={{ ...S.hero, minHeight: "100vh" }}>
        <CapitalCanvas />
        <div style={{ ...S.container, position: "relative", zIndex: 2 }}>
          <FadeIn>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: isDark ? `${accent}12` : "rgba(255,255,255,0.50)",
              backdropFilter: "blur(16px) saturate(150%)",
              WebkitBackdropFilter: "blur(16px) saturate(150%)",
              border: `1px solid ${isDark ? `${accent}25` : "rgba(255,255,255,0.60)"}`,
              borderRadius: 100, padding: "7px 18px",
              fontSize: 11, fontWeight: 600, color: accent,
              letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 24,
              boxShadow: isDark
                ? `0 2px 8px rgba(0,0,0,0.2), inset 0 1px 0 ${accent}10`
                : "0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: accent }} />
              {c.heroTag}
            </div>

            <h1 style={{
              fontSize: "clamp(42px, 6vw, 72px)", fontWeight: 800,
              color: t.heading, letterSpacing: "-0.03em",
              lineHeight: 1.08, marginBottom: 20, maxWidth: 800,
            }}>
              {c.heroTitle1}{" "}
              <GradientText colors={[accent, "#4F7BE8", accent]} style={{ fontWeight: 800 }}>{c.heroTitle2}</GradientText>
            </h1>

            <p style={{
              fontSize: "clamp(15px, 2vw, 18px)", color: t.textMuted,
              lineHeight: 1.7, maxWidth: 640, marginBottom: 36,
            }}>
              {c.heroDesc}
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button className="btn-p hover-lift" onClick={openModal} style={{
                ...btnPrimary,
                background: accent,
                color: "#fff",
                cursor: "pointer",
              }}>
                {c.heroCta1}
              </button>
              <button className="btn-s" onClick={() => document.getElementById("engine")?.scrollIntoView({ behavior: "smooth" })} style={{ ...btnSecondary, cursor: "pointer" }}>
                {c.heroCta2}
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════ POLYMARKET LIVE TICKER ═══════════════ */}
      <section style={{
        padding: "64px 0",
        background: t.bgAlt,
        transition: "background 0.4s",
      }}>
        <div style={S.container}>
          <FadeIn>
            <PolymarketTicker i18nHome={i18n.home} />
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════ POR QUÉ PREDICTION MARKETS ═══════════════ */}
      <section style={{ padding: "80px 0" }}>
        <div style={S.container}>
          <FadeIn>
            <SectionTag>{c.statsTag}</SectionTag>
            <h2 style={S.sectionH2}>{c.statsTitle}</h2>
            <p style={S.sectionP}>
              {c.statsDesc}
            </p>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, marginTop: 8 }}>
            {(c.stats || []).map((s, i) => (
              <FadeIn key={i} delay={i * 0.08} direction="scale">
                <div className="hover-lift" style={{ ...glass, textAlign: "center", height: "100%", boxSizing: "border-box" }}>
                  <div style={{ fontSize: 30, fontWeight: 800, color: accent, lineHeight: 1.1 }}>
                    {s.prefix || ""}{s.value}
                  </div>
                  <div style={{ fontSize: 13, color: t.textMuted, marginTop: 8 }}>{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div style={{ marginTop: 28, textAlign: "center" }}>
              <Link to="/capital/market" style={{ fontSize: 14, fontWeight: 600, color: accent }}>
                {c.statsValidation}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════ TRADING STRATEGIES (Bloque 2) ═══════════════ */}
      <section style={{ padding: "80px 0", background: t.bgAlt, transition: "background 0.4s" }}>
        <div style={S.container}>
          <FadeIn>
            <SectionTag>ORBIT CAPITAL</SectionTag>
            <h2 style={S.sectionH2}>{c.strategiesTitle}</h2>
            <p style={S.sectionP}>{c.strategiesDesc}</p>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 20, marginTop: 8 }}>
            {(c.strategies || []).map((strat, i) => {
              const colors = ["#3B82F6", "#8B5CF6", "#10B981", "#F59E0B", "#00D4AA"];
              const icons = ["trending", "gitCompare", "newspaper", "barChart3", "repeat"];
              const color = colors[i] || "#3B82F6";
              const icon = icons[i] || "trending";
              return { ...strat, color, icon };
            }).map((strat, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card-hover" style={{
                  ...S.card,
                  borderRadius: 12,
                  padding: 24, height: "100%", boxSizing: "border-box",
                }}>
                  {/* Hover glow */}
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
                    background: `radial-gradient(ellipse at 50% 0%, ${strat.color}08 0%, transparent 70%)`,
                    pointerEvents: "none", transition: "opacity 0.3s",
                  }} />
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                      <SvgIcon name={strat.icon} size={24} color={strat.color} />
                      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                        {strat.crossVertical && (
                          <span style={{
                            fontSize: 9, fontWeight: 700, color: "#00D4AA",
                            background: "rgba(0,212,170,0.10)", border: "1px solid rgba(0,212,170,0.20)",
                            borderRadius: 4, padding: "2px 8px", letterSpacing: "0.06em", textTransform: "uppercase",
                          }}>CROSS-VERTICAL</span>
                        )}
                        <span style={{
                          fontSize: 11, fontWeight: 700, color: strat.color,
                          background: `${strat.color}18`, borderRadius: 9999, padding: "3px 10px",
                        }}>{strat.badge}</span>
                      </div>
                    </div>
                    <h3 style={{ margin: "0 0 10px", fontSize: 18, fontWeight: 700, color: "#fff" }}>{strat.name}</h3>
                    <p style={{ margin: "0 0 14px", fontSize: 14, color: "#A0AEC0", lineHeight: 1.65 }}>{strat.desc}</p>
                    <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: "#00D4AA", fontWeight: 600 }}>
                      {strat.agents}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Market Categories */}
          <div style={{ marginTop: 64 }}>
            <FadeIn>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: t.heading, marginBottom: 24 }}>{c.categoriesTitle}</h3>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div style={{ width: "100%", height: 32, borderRadius: 9999, overflow: "hidden", display: "flex" }}>
                {[
                  { pct: 40, color: "#3B82F6" },
                  { pct: 30, color: "#8B5CF6" },
                  { pct: 15, color: "#10B981" },
                  { pct: 10, color: "#F59E0B" },
                  { pct: 5, color: "#EC4899" },
                ].map((cat, i) => (
                  <div key={i} style={{
                    width: `${cat.pct}%`, height: "100%", background: cat.color,
                    transition: "width 1s cubic-bezier(0.4,0,0.2,1)",
                  }} />
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 16 }}>
                {(c.categories || []).map((cat, i) => {
                  const colors = ["#3B82F6", "#8B5CF6", "#10B981", "#F59E0B", "#EC4899"];
                  return { ...cat, color: colors[i] || "#3B82F6" };
                }).map((cat, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: cat.color, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: t.textMuted }}>{cat.name}</span>
                    <span style={{ fontSize: 12, fontWeight: 600, color: t.heading, fontFamily: "'JetBrains Mono', monospace" }}>{cat.pct}</span>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: 12, fontSize: 13, color: "#718096", fontStyle: "italic" }}>
                {c.categoriesExcluded}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════ HOW INVESTMENT WORKS — 6 Steps (Bloque 3) ═══════════════ */}
      <section id="engine" style={{ padding: "80px 0", position: "relative", overflow: "hidden" }}>
        <div style={S.container}>
          <FadeIn>
            <SectionTag>ORBIT CAPITAL</SectionTag>
            <h2 style={S.sectionH2}>{c.stepsTitle}</h2>
            <p style={S.sectionP}>{c.stepsDesc}</p>
          </FadeIn>

          {/* Desktop: horizontal flow / Mobile: vertical */}
          <div className="flow-steps" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24, marginTop: 8, position: "relative",
          }}>
            {(c.investSteps || []).map((step, i) => {
              const icons = ["wallet", "shield", "bot", "bolt", "activity", "fileText"];
              return { ...step, icon: icons[i] || "wallet" };
            }).map((step, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{
                  ...S.card,
                  borderRadius: 16,
                  padding: 28, height: "100%", boxSizing: "border-box",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                    <div style={{
                      fontSize: 28, fontWeight: 800, color: "#00D4AA",
                      fontFamily: "'JetBrains Mono', monospace", lineHeight: 1,
                    }}>{step.num}</div>
                    <SvgIcon name={step.icon} size={22} color="#00D4AA" />
                  </div>
                  <h3 style={{ margin: "0 0 10px", fontSize: 18, fontWeight: 700, color: t.heading }}>{step.title}</h3>
                  <p style={{ margin: "0 0 14px", fontSize: 14, color: t.textMuted, lineHeight: 1.65 }}>{step.desc}</p>
                  <div style={{
                    fontSize: 11, fontFamily: "'JetBrains Mono', monospace",
                    color: "#00D4AA", fontWeight: 600, letterSpacing: "0.04em",
                  }}>{step.agent}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Currency Badges */}
          <FadeIn delay={0.6}>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 48, flexWrap: "wrap" }}>
              {["MXN", "USD", "USDC", "USDT"].map((cur) => (
                <span key={cur} style={{
                  fontSize: 14, fontWeight: 700, color: cur === "USDC" ? "#00D4AA" : t.textMuted,
                  background: cur === "USDC" ? "rgba(0,212,170,0.10)" : (isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)"),
                  border: cur === "USDC" ? "1px solid rgba(0,212,170,0.25)" : `1px solid ${t.glassBorder}`,
                  borderRadius: 9999, padding: "8px 20px",
                  fontFamily: "'JetBrains Mono', monospace",
                  boxShadow: cur === "USDC" ? "0 0 16px rgba(0,212,170,0.15)" : "none",
                }}>{cur}</span>
              ))}
            </div>
            <p style={{ textAlign: "center", fontSize: 13, color: "#718096", marginTop: 12 }}>
              {c.currencyNote}
            </p>
          </FadeIn>

          {/* Trust Line */}
          <FadeIn delay={0.7}>
            <p style={{
              textAlign: "center", fontSize: 13, color: "#718096", marginTop: 28,
              letterSpacing: "0.01em",
            }}>
              Bridge by Stripe · Fireblocks MPC · Coinbase Agentic Wallets · TRES FinOS · Knowledge Graph Audit Trail
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════ PERFORMANCE ═══════════════ */}
      <section id="performance" style={{ padding: "80px 0" }}>
        <div style={S.container}>
          <FadeIn>
            <SectionTag>{c.perfTag}</SectionTag>
            <h2 style={S.sectionH2}>{c.perfTitle}</h2>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 20, marginTop: 8 }}>
            {(c.metrics || []).map((m, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div style={{ ...glass, textAlign: "center", borderTop: `3px solid ${accent}`, height: "100%", boxSizing: "border-box" }}>
                  <div style={{ fontSize: 32, fontWeight: 800, color: accent, lineHeight: 1.1 }}>{m.value}</div>
                  <div style={{ fontSize: 12, color: t.textMuted, marginTop: 8 }}>{m.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <p style={{
              textAlign: "center", fontSize: 12, color: t.textDim, marginTop: 24,
              fontStyle: "italic", maxWidth: 600, margin: "24px auto 0",
            }}>
              {c.perfDisclaimer}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════ INFRAESTRUCTURA ═══════════════ */}
      <section id="infra" style={{ padding: "80px 0", background: t.bgAlt, transition: "background 0.4s" }}>
        <div style={S.container}>
          <FadeIn>
            <SectionTag>{c.infraTag}</SectionTag>
            <h2 style={S.sectionH2}>{c.infraTitle}</h2>
            <p style={S.sectionP}>
              {c.infraDesc}
            </p>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 8 }}>
            {(c.infra || []).map((item, i) => (
              <FadeIn key={i} delay={i * 0.08} direction="scale">
                <div className="card-hover hover-lift" style={{ ...S.card, padding: "28px 24px", height: "100%", boxSizing: "border-box" }}>
                  <div className="card-icon" style={{ marginBottom: 14 }}><SvgIcon name={item.icon} size={26} color={accent} filled /></div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: t.heading, marginBottom: 8 }}>{item.name}</div>
                  <div style={{ fontSize: 13, color: t.textDim, lineHeight: 1.7 }}>{item.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TÉRMINOS DEL FONDO ═══════════════ */}
      <section id="terms" style={{ padding: "80px 0" }}>
        <div style={S.container}>
          <FadeIn>
            <SectionTag>{c.termsTag}</SectionTag>
            <h2 style={S.sectionH2}>{c.termsTitle}</h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div style={{ ...glass, marginTop: 8, maxWidth: 700, margin: "8px auto 0" }}>
              {(c.terms || []).map((term, i) => (
                <div key={i} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "18px 0", flexWrap: "wrap", gap: 8,
                  borderBottom: i < (c.terms || []).length - 1 ? `1px solid ${t.glassBorder}` : "none",
                }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: t.heading }}>{term.label}</span>
                  <span style={{ fontSize: 14, color: t.textMuted }}>{term.value}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 36, flexWrap: "wrap" }}>
              <button className="btn-p hover-lift" onClick={openModal} style={{
                ...btnPrimary,
                background: accent,
                color: "#fff",
                cursor: "pointer",
              }}>{c.termsCta1}</button>
              <button className="btn-s hover-lift" onClick={openModal} style={{ ...btnSecondary, cursor: "pointer" }}>{c.termsCta2}</button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════ EQUIPO (condensado) ═══════════════ */}
      <section style={{ padding: "80px 0", background: t.bgAlt, transition: "background 0.4s" }}>
        <div style={S.container}>
          <FadeIn>
            <SectionTag>{c.teamTag}</SectionTag>
            <h2 style={S.sectionH2}>{c.teamTitle}</h2>
            <p style={S.sectionP}>
              {c.teamDesc}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div style={{ textAlign: "center", marginTop: 8 }}>
              <Link to="/team" style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: 14, fontWeight: 600, color: accent,
              }}>{c.teamVerEquipo}</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════ CONFIANZA ═══════════════ */}
      <section style={{ padding: "80px 0" }}>
        <div style={S.container}>
          <FadeIn>
            <SectionTag>{c.trustTag}</SectionTag>
            <h2 style={S.sectionH2}>{c.trustTitle}</h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div style={{ ...glass, marginTop: 8, borderLeft: `3px solid ${accent}` }}>
              <p style={{ margin: 0, fontSize: 15, color: t.text, lineHeight: 1.7, fontStyle: "italic" }}>
                {c.trustQuote}
              </p>
              <p style={{ margin: "12px 0 0", fontSize: 13, color: t.textDim }}>{c.trustQuoteAuthor}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div style={{ display: "flex", gap: 14, marginTop: 28, justifyContent: "center" }}>
              <Link to="/capital/market" style={{ fontSize: 14, fontWeight: 600, color: accent }}>
                {c.statsValidation}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section id="faq" style={{ padding: "100px 0", position: "relative" }}>
        <div style={{ ...S.container, maxWidth: 800 }}>
          <FadeIn>
            <SectionTag>{c.faqTag}</SectionTag>
            <h2 style={{ ...S.sectionH2, marginBottom: 48 }}>{c.faqTitle}</h2>
          </FadeIn>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {(c.faqItems || []).map((item, i) => (
              <FadeIn key={i} delay={0.06 * i} direction="up">
                <FaqAccordion question={item.q} answer={item.a} accent={accent} t={t} isDark={isDark} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA FINAL ═══════════════ */}
      <section id="contact" style={{
        padding: "100px 0",
        background: t.bgAlt,
        transition: "background 0.4s", position: "relative", overflow: "hidden",
      }}>
        <div style={{ ...S.container, textAlign: "center", position: "relative", zIndex: 1 }}>
          <FadeIn>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800,
              color: t.heading, letterSpacing: "-0.03em",
              lineHeight: 1.1, marginBottom: 18,
            }}>
              {c.ctaTitle1} <GradientText colors={[accent, "#4F7BE8", accent]}>{c.ctaTitle2}</GradientText> {c.ctaTitle3}
            </h2>
            <p style={{
              fontSize: 17, color: t.textMuted, lineHeight: 1.7,
              maxWidth: 600, margin: "0 auto 40px",
            }}>
              {c.ctaDesc}
            </p>

            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <button className="btn-p hover-lift" onClick={openModal} style={{
                ...btnPrimary,
                background: accent,
                color: "#fff",
                cursor: "pointer",
                fontSize: 15,
              }}>{c.ctaCta1}</button>
              <button className="btn-s hover-lift" onClick={openModal} style={{ ...btnSecondary, fontSize: 15, cursor: "pointer" }}>{c.ctaCta2}</button>
            </div>

            <div style={{ marginTop: 40, fontSize: 13, color: t.textDim }}>
              <a href="mailto:invest@orbitcapital.ai" style={{ color: t.textDim, textDecoration: "none" }}>invest@orbitcapital.ai</a> · {c.ctaLocation}
            </div>

            <p style={{
              marginTop: 32, fontSize: 11, color: t.textDim, maxWidth: 500, margin: "32px auto 0",
              lineHeight: 1.6,
            }}>
              {c.ctaDisclaimer}
            </p>
          </FadeIn>
        </div>
      </section>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} variant="capital" />
    </>
  );
}
