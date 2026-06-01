import { useState, useMemo, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme, ACCENTS } from "../shared/theme";
import { createStyles } from "../shared/styles";
import {
  SvgIcon, OrbitalCanvas, FadeIn, Counter, GradientText, MorphBlob, SectionTag, CelestialBody,
} from "../shared/components";
import ContactModal from "../shared/ContactModal";
import { useLang } from "../shared/i18n";

import { usePostHog } from '@posthog/react';

const TELEGRAM_URL = "https://t.me/+l1eeYrguaXZhYjdh";

/* ── Planet colors for newsletter papers ── */
const PLANET_COLORS = [
  "#B0B0B0", // Mercury — silver-grey
  "#E8C97A", // Venus — warm gold
  "#4F7BE8", // Earth — blue
  "#D45D47", // Mars — rust red
  "#D4975A", // Jupiter — bronze-orange
  "#C9B06B", // Saturn — golden-tan
  "#5DADE2", // Uranus — ice blue
  "#2E86C1", // Neptune — deep blue
  "#B0A999", // Pluto — grey-brown
  "#27AE60", // Kepler-442b — green
  "#E74C3C", // Proxima b — red
  "#F39C12", // TRAPPIST-1e — orange
  "#9B59B6", // Europa — purple
  "#E67E22", // Titan — amber
  "#1ABC9C", // Ganymede — teal
  "#95A5A6", // Ceres — slate
  "#8E44AD", // Eris — deep purple
  "#F1C40F", // Io — yellow
];

/* ── Single paper card — prediction market style with probability bar ── */
const CARD_W = 220;
const CARD_GAP = 14;

function PaperCard({ paper, idx, isDark, headingColor, dimColor }) {
  const planetColor = PLANET_COLORS[idx % PLANET_COLORS.length];
  const prob = paper.prob || 50;
  const isYes = prob >= 50;
  const barColor = isYes ? "#22c55e" : "#ef4444";
  return (
    <div style={{
      width: CARD_W, flexShrink: 0,
      background: isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.60)",
      border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.55)"}`,
      borderRadius: 14, padding: "14px 12px",
      boxShadow: isDark
        ? "0 6px 24px rgba(0,0,0,0.35)"
        : "0 6px 24px rgba(0,0,0,0.05)",
    }}>
      {/* Planet tag */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
        <div style={{
          width: 14, height: 14, borderRadius: "50%",
          background: `radial-gradient(circle at 35% 35%, ${planetColor}dd, ${planetColor}88)`,
          boxShadow: `0 1px 4px ${planetColor}40`,
          flexShrink: 0,
        }} />
        <span style={{
          fontSize: 8, fontWeight: 700, color: planetColor,
          letterSpacing: "0.08em", textTransform: "uppercase",
        }}>{paper.planet}</span>
      </div>
      {/* Question */}
      <div style={{ fontSize: 11, fontWeight: 600, color: headingColor, letterSpacing: "-0.01em", lineHeight: 1.35, marginBottom: 10, minHeight: 30 }}>
        {paper.title}
      </div>
      {/* Probability bar */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{
          flex: 1, height: 6, borderRadius: 3,
          background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
          overflow: "hidden",
        }}>
          <div style={{
            width: `${prob}%`, height: "100%", borderRadius: 3,
            background: `linear-gradient(90deg, ${barColor}cc, ${barColor})`,
          }} />
        </div>
        <span style={{ fontSize: 10, fontWeight: 700, color: barColor, minWidth: 28, textAlign: "right" }}>
          {prob}%
        </span>
      </div>
      <div style={{ fontSize: 9, color: dimColor, marginTop: 4, fontWeight: 500 }}>
        {paper.outcome}
      </div>
    </div>
  );
}

/* ── Newsletter Section — Quartr-style continuous marquee cards ── */
function OrbitNewsletter({ t, isDark, accent, S, h, posthog }) {
  const papers = h.newsletterPapers || [];

  const handleTelegramClick = () => {
    posthog?.capture('telegram_link_clicked', {
      source: 'perihelio_community',
      url: TELEGRAM_URL,
    });
  };

  // Split papers into 3 rows for the marquee
  const rowSize = Math.ceil(papers.length / 3);
  const rows = [
    papers.slice(0, rowSize),
    papers.slice(rowSize, rowSize * 2),
    papers.slice(rowSize * 2),
  ];
  const rowDurations = [55, 65, 50];
  const rowDirections = ["left", "right", "left"];

  return (
    <section id="perihelio" style={{
      padding: "140px 0",
      minHeight: 700,
      position: "relative",
      overflow: "hidden",
      scrollMarginTop: 96,
    }}>
      {/* Scrolling card rows — extended well beyond viewport for seamless loop */}
      <div className="newsletter-planets" style={{
        position: "absolute",
        top: "50%",
        left: "-20%",
        right: "-20%",
        transform: "translateY(-50%) rotate(-3deg)",
        pointerEvents: "none",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        gap: CARD_GAP,
      }}>
        {rows.map((row, rowIdx) => {
          // 4x duplication — 2x is not enough to fill the 140% wide container seamlessly
          const duped = [...row, ...row, ...row, ...row];
          const isRight = rowDirections[rowIdx] === "right";
          const className = isRight ? "marquee-row-right" : "marquee-row-left";
          return (
            <div key={rowIdx} style={{
              overflow: "hidden",
              maskImage: "linear-gradient(90deg, transparent 0%, black 3%, black 97%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 3%, black 97%, transparent 100%)",
            }}>
              <div className={className} style={{
                display: "flex",
                gap: CARD_GAP,
                width: "max-content",
                "--marquee-duration": `${rowDurations[rowIdx]}s`,
              }}>
                {duped.map((paper, i) => (
                  <PaperCard
                    key={`${rowIdx}-${i}`}
                    paper={paper}
                    idx={papers.indexOf(paper) >= 0 ? papers.indexOf(paper) : i % papers.length}
                    isDark={isDark}
                    headingColor={t.heading}
                    dimColor={t.textDim}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Center radial gradient mask — fades cards behind form */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
        background: isDark
          ? "radial-gradient(ellipse 55% 48% at 50% 50%, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.75) 45%, transparent 70%)"
          : "radial-gradient(ellipse 55% 48% at 50% 50%, rgba(245,245,247,0.97) 0%, rgba(245,245,247,0.75) 45%, transparent 70%)",
      }} />

      {/* Center content: newsletter form + Telegram */}
      <div style={{ ...S.container, position: "relative", zIndex: 10 }}>
        <FadeIn>
          <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
            <SectionTag center>{h.newsletterTag}</SectionTag>
            <h2 style={{ ...S.sectionH2, marginBottom: 14, textAlign: "center" }}>
              {h.newsletterTitle1}{" "}
              <GradientText colors={[accent, "#E8C97A", accent]} style={{ fontWeight: 700, fontStyle: "italic" }}>
                {h.newsletterTitle2}
              </GradientText>
            </h2>
            <p style={{ ...S.sectionP, maxWidth: 480, margin: "0 auto 36px", textAlign: "center" }}>
              {h.newsletterDesc}
            </p>

            {/* Telegram CTA */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-p hover-lift"
                onClick={handleTelegramClick}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  padding: "16px 32px", borderRadius: 14,
                  background: "#29B6F6",
                  color: "#fff", fontSize: 16, fontWeight: 700,
                  textDecoration: "none",
                  fontFamily: "inherit",
                  boxShadow: "0 4px 16px rgba(41,182,246,0.35), inset 0 1px 0 rgba(255,255,255,0.25)",
                  transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                <SvgIcon name="telegram" size={20} color="#fff" />
                {h.newsletterTelegram}
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default function Home() {
  const { mode, t } = useTheme();
  const { S, btnPrimary } = useMemo(() => createStyles(t), [t]);
  const isDark = mode === "dark";
  const capitalAccent = ACCENTS.capital[mode];
  const { i18n } = useLang();
  const h = i18n.home;
  const [modalOpen, setModalOpen] = useState(false);
  const [modalVariant, setModalVariant] = useState("capital");
  const posthog = usePostHog();

  const openModal = (v) => {
    setModalVariant(v);
    setModalOpen(true);
    posthog?.capture('contact_modal_opened', {
      variant: v,
      source: 'home_cta_section',
    });
  };

  // Scroll depth tracking
  const scrollDepthRef = useRef({ 25: false, 50: false, 75: false, 100: false });
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const percent = Math.round((scrollTop / docHeight) * 100);
      [25, 50, 75, 100].forEach((threshold) => {
        if (percent >= threshold && !scrollDepthRef.current[threshold]) {
          scrollDepthRef.current[threshold] = true;
          posthog?.capture('scroll_depth', { depth: `${threshold}%` });
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [posthog]);

  const handleCtaClick = (product) => {
    posthog?.capture('cta_clicked', {
      product,
      location: 'hero_section',
    });
  };


  return (
    <div style={{ overflowX: "hidden" }}>
      {/* ═══════════════ 1. HERO ═══════════════ */}
      <section style={{ ...S.hero, minHeight: "100vh", contain: "layout style" }}>
        <OrbitalCanvas />
        <div style={{ ...S.container, position: "relative", zIndex: 2, width: "100%" }}>
          <FadeIn>
            {/* Split hero layout */}
            <div className="hero-split" style={{
              display: "flex", alignItems: "flex-end", gap: 48, justifyContent: "space-between",
            }}>
              {/* Left: Headline */}
              <div style={{ flex: "1 1 55%", maxWidth: 640 }}>
                <h1 style={{
                  fontSize: "clamp(42px, 6vw, 76px)", fontWeight: 800, color: t.heading,
                  letterSpacing: "-0.04em", lineHeight: 1.05, margin: 0,
                }}>
                  {h.heroTitle1}
                  <GradientText dynamic colors={["#4F7BE8", "#10B981", "#4F7BE8", "#10B981", "#4F7BE8", "#10B981", "#4F7BE8"]} style={{ fontWeight: 800 }}>
                    {h.heroTitleGradient}
                  </GradientText>
                  {h.heroTitle2}
                </h1>
              </div>
              {/* Right: Description + CTAs */}
              <div style={{ flex: "1 1 40%", maxWidth: 440 }}>
                <p style={{
                  fontSize: "clamp(15px, 2vw, 18px)", color: t.textMuted, lineHeight: 1.7,
                  margin: "0 0 32px",
                }}>
                  {h.heroDesc1}<strong>{h.heroDescBold}</strong>{h.heroDesc2}
                </p>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <button onClick={() => { posthog?.capture('cta_click', { location: 'hero', cta_text: h.heroCta1 }); openModal('contact'); }} className="btn-p hover-lift" style={{ ...btnPrimary, background: isDark ? "#2563eb" : t.accent, color: "#ffffff", cursor: "pointer" }}>
                    {h.heroCta1}
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════ 2. ORBIT CAPITAL (protagonist) ═══════════════ */}
      <section id="capital" style={{ padding: "120px 0", position: "relative", overflow: "hidden", minHeight: 800, scrollMarginTop: 96 }}>
        <MorphBlob color={capitalAccent} size={600} style={{ top: -150, right: -200, opacity: 0.25 }} />
        <MorphBlob color={capitalAccent} size={400} style={{ bottom: -100, left: -150, opacity: 0.15 }} />
        <div style={{ ...S.container, position: "relative", zIndex: 1 }}>
          {/* Header */}
          <FadeIn>
            <SectionTag>{h.capitalSectionTag}</SectionTag>
            <h2 style={{ ...S.sectionH2, marginBottom: 12 }}>
              <GradientText dynamic colors={[capitalAccent, "#10B981", capitalAccent, "#10B981", capitalAccent, "#10B981", capitalAccent]}>{h.capitalSectionTitle}</GradientText>
            </h2>
            <p style={{ fontSize: 19, fontWeight: 600, color: t.heading, maxWidth: 640, marginBottom: 32, lineHeight: 1.5 }}>
              {h.capitalSectionSubtitle}
            </p>
          </FadeIn>

          {/* Metrics */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, marginBottom: 48 }}>
            {h.capitalSectionMetrics.map((m, i) => (
              <FadeIn key={i} delay={0.1 + i * 0.1} direction="scale">
                <div className="hover-lift" style={{ ...S.card, textAlign: "center", padding: "28px 20px" }}>
                  <div style={{ fontSize: 36, fontWeight: 800, color: capitalAccent, lineHeight: 1.1 }}>{m.value}</div>
                  <div style={{ fontSize: 13, color: t.textMuted, marginTop: 8 }}>{m.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* 3-step stepper cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginBottom: 48 }}>
            {h.capitalSteps.map((step, i) => (
              <FadeIn key={i} delay={0.2 + i * 0.12} direction="up">
                <div className="card-hover" style={{
                  ...S.card, borderTop: `3px solid ${capitalAccent}`, padding: "28px 24px", height: "100%",
                  display: "flex", flexDirection: "column",
                }}>
                  <div style={{
                    fontSize: 32, fontWeight: 800, color: `${capitalAccent}30`,
                    letterSpacing: "-0.02em", marginBottom: 8, lineHeight: 1,
                  }}>{step.num}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: t.heading, margin: "0 0 10px" }}>{step.title}</h3>
                  <p style={{ fontSize: 14, color: t.textMuted, lineHeight: 1.7, flex: 1, margin: 0 }}>{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Example box */}
          <FadeIn delay={0.4}>
            <div style={{
              ...S.card, borderLeft: `4px solid ${capitalAccent}`,
              background: isDark ? `${capitalAccent}08` : `${capitalAccent}06`,
              padding: "32px 28px", marginBottom: 48,
            }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: t.heading, marginBottom: 16 }}>{h.capitalExampleTitle}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {h.capitalExampleLines.map((line, i) => (
                  <p key={i} style={{
                    fontSize: 14, color: i === 0 ? t.text : t.textMuted, lineHeight: 1.7, margin: 0,
                    fontWeight: i === 0 ? 600 : 400,
                    paddingLeft: i > 0 ? 8 : 0,
                  }}>{line}</p>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Products/markets grid */}
          <FadeIn delay={0.45}>
            <div style={{ fontSize: 16, fontWeight: 700, color: t.heading, marginBottom: 20 }}>{h.capitalProductsTitle}</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
              {h.capitalProducts.map((product, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 10, padding: "12px 16px",
                  background: isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.55)",
                  border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
                  borderRadius: 10,
                }}>
                  <SvgIcon name="chart" size={16} color={capitalAccent} />
                  <span style={{ fontSize: 14, color: t.text }}>{product}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Capital CTAs */}
          <FadeIn delay={0.5}>
            <div style={{ marginTop: 40, display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
              <button onClick={() => { posthog?.capture('capital_cta_clicked', { location: 'home_expanded' }); openModal('capital'); }} className="btn-p hover-lift" style={{
                ...btnPrimary, background: capitalAccent, color: "#ffffff", fontSize: 16, cursor: "pointer",
                padding: "16px 36px",
              }}>
                <SvgIcon name="chart" size={18} color="#ffffff" /> {h.capitalInvestCta}
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════ AGENTS SHOWCASE ═══════════════ */}
      {(() => {
        const agentColors = {
          Atlas: "#00D4AA", Sirius: "#3B82F6", Kepler: "#6366F1", Proxima: "#818CF8",
          Vega: "#8B5CF6", Trappist: "#A855F7", Rigel: "#10B981", Gliese: "#34D399",
          Polaris: "#F59E0B", Altair: "#FBBF24", Centauri: "#EC4899", Cassiopeia: "#F472B6",
          Andromeda: "#FB7185",
        };
        const agents = h.agentsList.map(a => ({ ...a, color: agentColors[a.name] || capitalAccent, celestialType: a.celestialType || "star" }));
        const row1 = agents.slice(0, 7);
        const row2 = agents.slice(7).concat(agents.slice(0, 4));
        return (
          <section id="agents" style={{ padding: "80px 0", overflow: "hidden", scrollMarginTop: 96 }}>
            <div style={S.container}>
              <FadeIn>
                <SectionTag>{h.agentsTag}</SectionTag>
                <h2 style={{ ...S.sectionH2, marginBottom: 12 }}>
                  <GradientText dynamic colors={["#4F7BE8", "#10B981", "#4F7BE8", "#10B981", "#4F7BE8", "#10B981", "#4F7BE8"]}>{h.agentsTitle}</GradientText>
                </h2>
                <p style={S.sectionP}>{h.agentsDesc}</p>
              </FadeIn>
            </div>
            <FadeIn delay={0.15}>
              <div
                className="agents-marquee-wrap"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
                  overflow: "hidden",
                  marginTop: 8,
                }}
              >
                {/* Row 1 → scrolls left */}
                <div style={{ display: "flex", gap: 14, padding: "6px 0", width: "max-content" }} className="marquee-row-left" aria-hidden="true">
                  {[...row1, ...row1, ...row1, ...row1].map((a, i) => (
                    <div key={i} style={{
                      flexShrink: 0, width: 170, padding: "16px 14px",
                      background: isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.55)",
                      border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
                      borderTop: `2px solid ${a.color}`,
                      borderRadius: 10,
                      transition: "border-color 0.3s, background 0.3s",
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                        <CelestialBody type={a.celestialType} color={a.color} size={18} />
                        <span style={{ fontSize: 13, fontWeight: 700, color: t.heading, letterSpacing: "-0.01em" }}>{a.name}</span>
                      </div>
                      <div style={{ fontSize: 11, color: t.textDim, fontWeight: 500, lineHeight: 1.4 }}>{a.role}</div>
                    </div>
                  ))}
                </div>
                {/* Row 2 → scrolls right */}
                <div style={{ display: "flex", gap: 14, padding: "6px 0", width: "max-content", "--marquee-duration": "55s" }} className="marquee-row-right" aria-hidden="true">
                  {[...row2, ...row2, ...row2, ...row2].map((a, i) => (
                    <div key={i} style={{
                      flexShrink: 0, width: 170, padding: "16px 14px",
                      background: isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.55)",
                      border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
                      borderTop: `2px solid ${a.color}`,
                      borderRadius: 10,
                      transition: "border-color 0.3s, background 0.3s",
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                        <CelestialBody type={a.celestialType} color={a.color} size={18} />
                        <span style={{ fontSize: 13, fontWeight: 700, color: t.heading, letterSpacing: "-0.01em" }}>{a.name}</span>
                      </div>
                      <div style={{ fontSize: 11, color: t.textDim, fontWeight: 500, lineHeight: 1.4 }}>{a.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </section>
        );
      })()}

      {/* ═══════════════ 7. VALIDATION ═══════════════ */}
      <section id="validation" style={{ padding: "80px 0", background: t.bgAlt, transition: "background 0.4s", minHeight: 300, scrollMarginTop: 96 }}>
        <div style={S.container}>
          <FadeIn>
            <div style={{ marginBottom: 40 }}>
              <SectionTag>{h.validationTag}</SectionTag>
              <h2 style={{ ...S.sectionH2, maxWidth: 600, marginBottom: 18 }}>
                {h.validationTitle1} <GradientText dynamic colors={["#4F7BE8", "#10B981", "#4F7BE8", "#10B981", "#4F7BE8", "#10B981", "#4F7BE8"]}>{h.validationTitle2}</GradientText>
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            {[
              { value: 44, suffix: "B+", prefix: "$" },
              { value: 0.2, suffix: "", prefix: "<" },
              { value: 7, suffix: "", prefix: "" },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="scale">
                <div className="hover-lift" style={{ ...S.card, textAlign: "center", padding: "28px 20px" }}>
                  <div style={{ fontSize: 36, fontWeight: 800, color: t.accent, lineHeight: 1.1 }}>
                    {s.prefix}{s.value >= 1 ? <Counter end={s.value} /> : s.value}{s.suffix}
                  </div>
                  <div style={{ fontSize: 13, color: t.textMuted, marginTop: 8 }}>{h.validationStats[i].label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ NEWSLETTER — Perihelio ═══════════════ */}
      <OrbitNewsletter t={t} isDark={isDark} accent={t.accent} S={S} h={h} posthog={posthog} />

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} variant={modalVariant} />
    </div>
  );
}
