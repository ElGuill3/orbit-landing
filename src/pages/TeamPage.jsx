import { useMemo } from "react";
import { useTheme } from "../shared/theme";
import { createStyles } from "../shared/styles";
import { SvgIcon, FadeIn, GradientText, FloatingElement, MorphBlob, GlowCard, SectionTag } from "../shared/components";
import PageHero from "../shared/PageHero";
import { useLang } from "../shared/i18n";

const FOUNDERS = [
  {
    name: "Javier Regalado Sabates",
    role: "Co-Founder & CEO",
    color: "#4F7BE8",
    bioKey: "bioJavier",
    linkedin: "https://linkedin.com/in/javierregaladosabates",
  },
  {
    name: "Rodrigo García",
    role: "Co-Founder & CIO",
    color: "#4068D0",
    bioKey: "bioRodrigo",
    linkedin: "https://linkedin.com/in/rodrigogarcia",
  },
  {
    name: "Toño Arellano Ibáñez",
    role: "Strategic Advisor",
    color: "#2E4FA0",
    bioKey: "bioTono",
    linkedin: "https://linkedin.com/in/tonoarellano",
  },
];



export default function TeamPage() {
  const { t } = useTheme();
  const { S } = useMemo(() => createStyles(t), [t]);
  const { i18n } = useLang();
  const tm = i18n.team;

  const glass = {
    background: t.glassBg, backdropFilter: "blur(16px) saturate(150%)",
    border: `1px solid ${t.glassBorder}`, borderRadius: 16, padding: "24px 28px",
    boxShadow: t.glassShadow,
  };

  return (
    <>
      <PageHero
        tag={tm.heroTag}
        title={tm.heroTitle}
        description={tm.heroDesc}
      />

      {/* Fundadores */}
      <section style={{ padding: "80px 0", position: "relative", overflow: "hidden" }}>
        {/* Ambient blobs */}
        <MorphBlob color={t.accent} size={500} style={{ top: -100, left: -200, opacity: 0.5 }} />
        <MorphBlob color={t.accentLight || "#7C5CF6"} size={400} style={{ bottom: -80, right: -150, opacity: 0.4 }} />

        <div style={S.container}>
          <FadeIn>
            <SectionTag>{tm.foundersTag}</SectionTag>
            <h2 style={S.sectionH2}><GradientText colors={[t.accent, t.accentLight || "#7C5CF6", t.accent]}>{tm.foundersTitle}</GradientText></h2>
          </FadeIn>

          <div style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 40 }}>
            {FOUNDERS.map((f, i) => (
              <FadeIn key={i} delay={i * 0.12} direction={i % 2 === 0 ? "left" : "right"}>
                <GlowCard color={f.color} className="hover-lift" style={{ ...S.card, padding: "32px 36px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16, flexWrap: "wrap", gap: 12 }}>
                    <div>
                      <div style={{ fontSize: 20, fontWeight: 700, color: t.heading }}>{f.name}</div>
                      <div style={{ fontSize: 13, color: f.color, fontWeight: 600, marginTop: 4 }}>{f.role}</div>
                    </div>
                    <a href={f.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${f.name} on LinkedIn`} className="card-hover" style={{
                      width: 30, height: 30, borderRadius: 8,
                      background: `${f.color}12`, border: `1px solid ${f.color}25`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.25s",
                    }}>
                      <SvgIcon name="linkedin" size={14} color={f.color} />
                    </a>
                  </div>
                  <p style={{ fontSize: 14, color: t.textMuted, lineHeight: 1.7, margin: 0 }}>{tm[f.bioKey]}</p>
                </GlowCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Native Operations */}
      <section style={{ padding: "80px 0", position: "relative", overflow: "hidden" }}>
        <MorphBlob color={t.accent} size={500} style={{ top: -80, left: -200, opacity: 0.4 }} />
        <MorphBlob color="#22c55e" size={350} style={{ bottom: -60, right: -100, opacity: 0.3 }} />

        <div style={S.container}>
          <FadeIn>
            <SectionTag>{tm.aiTag}</SectionTag>
            <h2 style={S.sectionH2}>{tm.aiTitlePrefix} <GradientText colors={[t.accent, "#22c55e", t.accent]}>{tm.aiTitle}</GradientText></h2>
            <p style={{ ...S.sectionP, maxWidth: 700, margin: "0 auto 12px" }}>
              {tm.aiHero}
            </p>
          </FadeIn>

          {/* Key metrics */}
          <FadeIn delay={0.1} direction="scale">
            <div style={{ display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "center", marginTop: 32, marginBottom: 40 }}>
              {tm.aiStats.map((m, i) => (
                <GlowCard key={i} color={i === 2 ? "#22c55e" : t.accent} className="hover-lift hover-glow" style={{ ...S.card, padding: "28px 36px", textAlign: "center", minWidth: 180, "--glow-color": i === 2 ? "#22c55e" : t.accent }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: t.textDim, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>{m.label}</div>
                  <div style={{ fontSize: 32, fontWeight: 800, color: i === 2 ? "#22c55e" : t.accent }}>{m.value}</div>
                  <div style={{ fontSize: 12, color: t.textMuted, marginTop: 4 }}>{m.sub}</div>
                </GlowCard>
              ))}
            </div>
          </FadeIn>

          {/* AI Pillars */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 8 }}>
            {tm.aiPillars.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1} direction={i === 0 ? "left" : i === 2 ? "right" : "up"}>
                <GlowCard color={i === 1 ? "#22c55e" : t.accent} className="card-hover hover-lift" style={{ ...S.card, padding: "28px 24px", height: "100%" }}>
                  <div className="card-icon" style={{ width: 48, height: 48, borderRadius: 12, background: `${i === 1 ? "#22c55e" : t.accent}12`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <SvgIcon name={["cpu", "bolt", "shield"][i]} size={22} color={i === 1 ? "#22c55e" : t.accent} filled />
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: t.heading, margin: "0 0 10px" }}>{p.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: t.textMuted, margin: 0 }}>{p.desc}</p>
                </GlowCard>
              </FadeIn>
            ))}
          </div>

          {/* Bottom callout */}
          <FadeIn delay={0.3} direction="scale">
            <GlowCard color={t.accent} className="hover-lift" style={{
              marginTop: 40, padding: "28px 32px",
              background: `linear-gradient(135deg, ${t.accent}10, #22c55e10)`,
              border: `1px solid ${t.accent}25`, borderRadius: 16,
              maxWidth: 860, margin: "40px auto 0",
              display: "flex", alignItems: "center", gap: 16,
            }}>
              <FloatingElement amplitude={3} duration={3}>
                <SvgIcon name="rocket" size={24} color="#22c55e" filled />
              </FloatingElement>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: t.textMuted, margin: 0 }}>
                <strong style={{ color: t.heading }}>{tm.aiForce}</strong>{" "}
                {tm.aiForceDesc}
              </p>
            </GlowCard>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
