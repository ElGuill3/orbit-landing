import { useMemo } from "react";
import { useTheme } from "../shared/theme";
import { createStyles } from "../shared/styles";
import { SvgIcon, FadeIn, Counter, SectionTag } from "../shared/components";
import PageHero from "../shared/PageHero";
import { useLang } from "../shared/i18n";

const CAPITAL_DATA = [
  { platform: "Kalshi", raised: "$1.59B USD", valuation: "$11B USD", backers: "Sequoia, a16z, Paradigm, CapitalG" },
  { platform: "Polymarket", raised: "$2,000M USD", valuation: "$9-15B USD", backers: "ICE (NYSE Parent), Founders Fund" },
];

const VOLUME_DATA = [
  { year: "2023", poly: 73, kalshi: 300, unit: "M" },
  { year: "2024", poly: 9000, kalshi: 1970, unit: "M" },
  { year: "2025", poly: 33400, kalshi: 23800, unit: "M" },
];

function fmtVol(v) {
  return v >= 1000 ? `$${(v / 1000).toFixed(1)}B` : `$${v}M`;
}

export default function MarketPage() {
  const { t } = useTheme();
  const { S } = useMemo(() => createStyles(t), [t]);
  const { i18n } = useLang();
  const m = i18n.market;

  const giants = useMemo(() => {
    const icons = ["building", "trending", "chart", "bank"];
    return (m.giants || []).map((g, i) => ({
      ...g,
      icon: icons[i] || "building"
    }));
  }, [m.giants]);

  const projections = useMemo(() => {
    const colors = ["#64748b", "#4F7BE8", "#22c55e"];
    const ranges = ["$60B - $120B USD", "$80B - $180B USD", "$120B - $300B USD"];
    return (m.projScenarios || []).map((s, i) => ({
      scenario: s,
      range: ranges[i],
      color: colors[i],
    }));
  }, [m.projScenarios]);

  const counterCallouts = useMemo(() => [
    { label: m.statPoly, value: 33, suffix: "B" },
    { label: m.statKalshi, value: 23, suffix: "B" },
    { label: m.statGrowth, value: 153, suffix: "x" },
  ], [m.statPoly, m.statKalshi, m.statGrowth]);

  const glass = {
    background: t.glassBg, backdropFilter: "blur(16px) saturate(150%)",
    border: `1px solid ${t.glassBorder}`, borderRadius: 16, padding: "24px 28px",
    boxShadow: t.glassShadow,
  };

  const th = { padding: "14px 16px", fontSize: 12, fontWeight: 700, color: t.textDim, textTransform: "uppercase", letterSpacing: "0.06em", textAlign: "left", borderBottom: `2px solid ${t.glassBorder}` };
  const td = { padding: "14px 16px", fontSize: 14, color: t.textMuted, borderBottom: `1px solid ${t.glassBorder}` };

  return (
    <>
      <PageHero
        tag={m.heroTag}
        title={m.heroTitle}
        description={m.heroDesc}
      />

      {/* Los Gigantes */}
      <section style={{ padding: "80px 0" }}>
        <div style={S.container}>
          <FadeIn>
            <SectionTag>{m.giantsTag}</SectionTag>
            <h2 style={S.sectionH2}>{m.giantsTitle}</h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 32 }}>
            {giants.map((g, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="card-hover" style={{ ...S.card, padding: "28px 24px" }}>
                  <div style={{ marginBottom: 14 }}><SvgIcon name={g.icon} size={26} color={t.accent} /></div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: t.heading, marginBottom: 8 }}>{g.name}</div>
                  <div style={{ fontSize: 13, color: t.textDim, lineHeight: 1.7 }}>{g.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Capital Institucional */}
      <section style={{ padding: "80px 0", background: t.bgAlt, transition: "background 0.4s" }}>
        <div style={S.container}>
          <FadeIn>
            <SectionTag>{m.fundingTag}</SectionTag>
            <h2 style={S.sectionH2}>{m.fundingTitle}</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ ...glass, marginTop: 28, overflow: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={th}>{m.tablePlatform}</th>
                    <th style={th}>{m.tableRaised}</th>
                    <th style={th}>{m.tableValuation}</th>
                    <th style={th}>{m.tableBackers}</th>
                  </tr>
                </thead>
                <tbody>
                  {CAPITAL_DATA.map((r) => (
                    <tr key={r.platform}>
                      <td style={{ ...td, fontWeight: 600, color: t.heading }}>{r.platform}</td>
                      <td style={td}>{r.raised}</td>
                      <td style={{ ...td, color: t.accent, fontWeight: 600 }}>{r.valuation}</td>
                      <td style={td}>{r.backers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div style={{ ...glass, marginTop: 28, borderLeft: `3px solid ${t.accent}` }}>
              <p style={{ margin: 0, fontSize: 14, color: t.text, lineHeight: 1.7 }}>
                <strong style={{ color: t.heading }}>{m.iceNote}</strong>{" "}
                {m.iceDetail}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Volúmenes */}
      <section style={{ padding: "80px 0" }}>
        <div style={S.container}>
          <FadeIn>
            <SectionTag>{m.volumeTag}</SectionTag>
            <h2 style={S.sectionH2}>{m.volumeTitle}</h2>
            <p style={S.sectionP}>
              {m.volumeDesc}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div style={{ ...glass, marginTop: 28, overflow: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={th}>{m.tableYear}</th>
                    <th style={th}>Polymarket</th>
                    <th style={th}>Kalshi</th>
                    <th style={th}>{m.tableCombined}</th>
                  </tr>
                </thead>
                <tbody>
                  {VOLUME_DATA.map((r, i) => {
                    const combined = r.poly + r.kalshi;
                    const prev = i > 0 ? VOLUME_DATA[i - 1].poly + VOLUME_DATA[i - 1].kalshi : null;
                    const yoy = prev ? Math.round(((combined - prev) / prev) * 100) : null;
                    return (
                      <tr key={r.year}>
                        <td style={{ ...td, fontWeight: 600, color: t.heading }}>{r.year}</td>
                        <td style={td}>{fmtVol(r.poly)}</td>
                        <td style={td}>{fmtVol(r.kalshi)}</td>
                        <td style={{ ...td, color: t.accent, fontWeight: 700 }}>
                          {fmtVol(combined)}
                          {yoy !== null && (
                            <span style={{ marginLeft: 10, fontSize: 12, color: "#22c55e", fontWeight: 600 }}>
                              +{yoy}% YoY
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </FadeIn>

          {/* Counter callouts */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, marginTop: 36 }}>
            {counterCallouts.map((c, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div style={{ ...glass, textAlign: "center" }}>
                  <div style={{ fontSize: 36, fontWeight: 800, color: t.accent, lineHeight: 1.1 }}>
                    <Counter end={c.value} />{c.suffix}
                  </div>
                  <div style={{ fontSize: 13, color: t.textMuted, marginTop: 6 }}>{c.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Proyección 2026-2028 */}
      <section style={{ padding: "80px 0", background: t.bgAlt, transition: "background 0.4s" }}>
        <div style={S.container}>
          <FadeIn>
            <SectionTag>{m.projTag}</SectionTag>
            <h2 style={S.sectionH2}>{m.projTitle}</h2>
            <p style={S.sectionP}>
              {m.projDesc}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div style={{ ...glass, marginTop: 28, overflow: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={th}>{m.tableScenario}</th>
                    <th style={th}>{m.tableEstVolume}</th>
                  </tr>
                </thead>
                <tbody>
                  {projections.map((p) => (
                    <tr key={p.scenario}>
                      <td style={{ ...td, fontWeight: 600, color: t.heading }}>
                        <span style={{ display: "inline-block", width: 10, height: 10, borderRadius: "50%", background: p.color, marginRight: 10 }} />
                        {p.scenario}
                      </td>
                      <td style={{ ...td, fontWeight: 700, color: p.color, fontSize: 17 }}>{p.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div style={{ marginTop: 32 }}>
              <h4 style={{ color: t.heading, fontSize: 16, marginBottom: 14 }}>{m.catalystsTitle}</h4>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {(m.catalystsList || []).map((c, i) => (
                  <li key={i} style={{ color: t.text, fontSize: 14, marginBottom: 8, lineHeight: 1.6 }}>{c}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Validación de Medios */}
      <section style={{ padding: "80px 0" }}>
        <div style={S.container}>
          <FadeIn>
            <SectionTag>{m.mediaTag}</SectionTag>
            <h2 style={S.sectionH2}>{m.mediaTitle}</h2>
            <p style={S.sectionP}>{m.mediaDesc}</p>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginTop: 32 }}>
            {(m.mediaList || []).map((mItem, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div style={{ ...glass, display: "flex", flexDirection: "column", gap: 8 }}>
                  <h4 style={{ margin: 0, fontSize: 18, color: t.heading }}>{mItem.name}</h4>
                  <p style={{ margin: 0, fontSize: 14, color: t.textMuted, lineHeight: 1.6 }}>{mItem.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Por Qué Importa para Orbit */}
      <section style={{ padding: "80px 0", background: t.bgAlt, transition: "background 0.4s" }}>
        <div style={S.container}>
          <FadeIn>
            <SectionTag>{m.relevanceTag}</SectionTag>
            <h2 style={S.sectionH2}>{m.relevanceTitle}</h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, marginTop: 32 }}>
            {(m.relevanceList || []).map((r, i) => (
              <FadeIn key={i} delay={i * 0.09}>
                <div style={{ ...glass, height: "100%", borderTop: `3px solid ${t.accent}`, display: "flex", flexDirection: "column", gap: 10 }}>
                  <h4 style={{ margin: 0, fontSize: 18, color: t.heading }}>{r.title}</h4>
                  <p style={{ margin: 0, fontSize: 14, color: t.text, lineHeight: 1.65, flex: 1 }}>{r.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
