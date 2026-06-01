import { useMemo } from "react";
import { useTheme } from "../shared/theme";
import { createStyles } from "../shared/styles";
import { SvgIcon, FadeIn, Counter, SectionTag } from "../shared/components";
import PageHero from "../shared/PageHero";
import { useLang } from "../shared/i18n";

export default function WhyNowPage() {
  const { t } = useTheme();
  const { S } = useMemo(() => createStyles(t), [t]);
  const { i18n } = useLang();
  const w = i18n.whyNow;

  const glass = {
    background: t.glassBg, backdropFilter: "blur(16px) saturate(150%)",
    border: `1px solid ${t.glassBorder}`, borderRadius: 16, padding: "28px 32px",
    boxShadow: t.glassShadow,
  };

  const keyInsight = { ...glass, marginTop: 28, borderLeft: `3px solid ${t.accent}` };

  const t5ListMapped = useMemo(() => {
    const icons = ["cpu", "scale", "signal", "chart"];
    return (w.t5List || []).map((item, i) => ({
      ...item,
      icon: icons[i] || "cpu"
    }));
  }, [w.t5List]);

  return (
    <>
      <PageHero
        tag={w.heroTag}
        title={w.heroTitle}
        description={w.heroDesc}
      />

      {/* Tailwind 1: AI Agents */}
      <section style={{ padding: "80px 0" }}>
        <div style={S.container}>
          <FadeIn>
            <SectionTag>{w.t1Tag}</SectionTag>
            <h2 style={S.sectionH2}>{w.t1Title}</h2>
            <p style={S.sectionP}>
              {w.t1Desc}
            </p>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 32 }}>
            {(w.t1Agents || []).map((a, i) => (
              <FadeIn key={i} delay={i * 0.09}>
                <div style={{ ...glass, height: "100%" }}>
                  <h4 style={{ margin: 0, fontSize: 17, color: t.heading }}>{a.name}</h4>
                  <p style={{ margin: "8px 0 0", fontSize: 14, color: t.textMuted, lineHeight: 1.6 }}>{a.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Enterprise deployers */}
          <FadeIn delay={0.2}>
            <h4 style={{ color: t.heading, fontSize: 16, marginTop: 36, marginBottom: 16 }}>{w.t1DeployTitle}</h4>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
              {(w.t1Deployments || []).map((d, i) => (
                <div key={i} style={{ ...glass, padding: "16px 22px", display: "flex", flexDirection: "column", gap: 4 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: t.heading }}>{d.org}</span>
                  <span style={{ fontSize: 13, color: t.textDim }}>{d.use}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div style={keyInsight}>
              <p style={{ margin: 0, fontSize: 14, color: t.text, lineHeight: 1.7 }}>
                <strong style={{ color: t.accent }}>{w.t1InsightLabel}</strong> {w.t1InsightText}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Tailwind 2: Grok + X */}
      <section style={{ padding: "80px 0", background: t.bgAlt, transition: "background 0.4s" }}>
        <div style={S.container}>
          <FadeIn>
            <SectionTag>{w.t2Tag}</SectionTag>
            <h2 style={S.sectionH2}>{w.t2Title}</h2>
            <p style={S.sectionP}>
              {w.t2Desc}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div style={{ ...glass, marginTop: 32 }}>
              <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                {(w.t2List || []).map((c, i) => (
                  <li key={i} style={{ color: t.text, fontSize: 14, lineHeight: 1.65 }}>{c}</li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div style={keyInsight}>
              <p style={{ margin: 0, fontSize: 14, color: t.text, lineHeight: 1.7 }}>
                <strong style={{ color: t.accent }}>{w.t2InsightLabel}</strong> {w.t2InsightText}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Tailwind 3: Mainstream Prediction Markets */}
      <section style={{ padding: "80px 0" }}>
        <div style={S.container}>
          <FadeIn>
            <SectionTag>{w.t3Tag}</SectionTag>
            <h2 style={S.sectionH2}>{w.t3Title}</h2>
            <p style={S.sectionP}>
              {w.t3Desc}
            </p>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, marginTop: 32 }}>
            {(w.t3Stats || []).map((mItem, i) => (
              <FadeIn key={i} delay={i * 0.09}>
                <div style={{ ...glass, textAlign: "center" }}>
                  <div style={{ fontSize: 32, fontWeight: 800, color: t.accent, lineHeight: 1.1 }}>{mItem.stat}</div>
                  <div style={{ fontSize: 13, color: t.textMuted, marginTop: 8 }}>{mItem.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.25}>
            <div style={keyInsight}>
              <p style={{ margin: 0, fontSize: 14, color: t.text, lineHeight: 1.7 }}>
                <strong style={{ color: t.accent }}>{w.t3InsightLabel}</strong> {w.t3InsightText}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Tailwind 4: Mexico */}
      <section style={{ padding: "80px 0", background: t.bgAlt, transition: "background 0.4s" }}>
        <div style={S.container}>
          <FadeIn>
            <SectionTag>{w.t4Tag}</SectionTag>
            <h2 style={S.sectionH2}>{w.t4Title}</h2>
            <p style={S.sectionP}>
              {w.t4Desc}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div style={{ ...glass, marginTop: 32 }}>
              <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                {(w.t4List || []).map((f, i) => (
                  <li key={i} style={{ color: t.text, fontSize: 14, lineHeight: 1.65 }}>{f}</li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, marginTop: 28 }}>
            {(w.t4Stats || []).map((c, i) => (
              <FadeIn key={i} delay={0.18 + i * 0.08}>
                <div style={{ ...glass, textAlign: "center" }}>
                  <div style={{ fontSize: 34, fontWeight: 800, color: t.accent, lineHeight: 1.1 }}>
                    {c.value !== 15 ? "$" : ""}<Counter end={c.value} />{c.suffix}
                  </div>
                  <div style={{ fontSize: 13, color: t.textMuted, marginTop: 6 }}>{c.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Orbit + AI */}
      <section style={{ padding: "80px 0" }}>
        <div style={S.container}>
          <FadeIn>
            <SectionTag>{w.t5Tag}</SectionTag>
            <h2 style={S.sectionH2}>{w.t5Title}</h2>
            <p style={S.sectionP}>
              {w.t5Desc}
            </p>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginTop: 32 }}>
            {t5ListMapped.map((r, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ ...glass, height: "100%", display: "flex", flexDirection: "column", gap: 12, borderTop: `3px solid ${t.accent}` }}>
                  <SvgIcon name={r.icon} size={26} color={t.accent} />
                  <h4 style={{ margin: 0, fontSize: 17, color: t.heading }}>{r.title}</h4>
                  <p style={{ margin: 0, fontSize: 14, color: t.text, lineHeight: 1.65, flex: 1 }}>{r.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.35}>
            <div style={keyInsight}>
              <p style={{ margin: 0, fontSize: 14, color: t.text, lineHeight: 1.7 }}>
                <strong style={{ color: t.accent }}>{w.t5InsightLabel}</strong> {w.t5InsightText}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
