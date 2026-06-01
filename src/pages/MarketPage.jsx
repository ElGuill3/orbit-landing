import { useMemo } from "react";
import { useTheme } from "../shared/theme";
import { createStyles } from "../shared/styles";
import { SvgIcon, FadeIn, Counter, SectionTag } from "../shared/components";
import PageHero from "../shared/PageHero";

const GIANTS = [
  { name: "Susquehanna International Group (SIG)", desc: "Primer market maker institucional dedicado a prediction markets en Kalshi. ~$2T USD en volumen anual. Creó una división de trading dedicada, incrementando liquidez ~30x.", icon: "building" },
  { name: "Jump Trading", desc: "Gigante de trading algorítmico de Chicago. Entrada como proveedor de liquidez señala que quant funds ven oportunidades de arbitraje y market making.", icon: "trending" },
  { name: "DRW Trading", desc: "Potencia del trading institucional con expertise en derivados y commodities. Trata los event contracts como derivados financieros legítimos para hedging de black swan events.", icon: "chart" },
  { name: "Interactive Brokers & ForecastEx", desc: "IBKR (NASDAQ: IBKR) lanzó ForecastEx con Kalshi. Uno de los brokers más respetados de Wall Street estabilizando mercados y reduciendo bid-ask spreads.", icon: "bank" },
];

const CAPITAL_DATA = [
  { platform: "Kalshi", raised: "$1.59B USD", valuation: "$11B USD", backers: "Sequoia, a16z, Paradigm, CapitalG" },
  { platform: "Polymarket", raised: "$2,000M USD", valuation: "$9-15B USD", backers: "ICE (NYSE Parent), Founders Fund" },
];

const VOLUME_DATA = [
  { year: "2023", poly: 73, kalshi: 300, unit: "M" },
  { year: "2024", poly: 9000, kalshi: 1970, unit: "M" },
  { year: "2025", poly: 33400, kalshi: 23800, unit: "M" },
];

const PROJECTIONS = [
  { scenario: "Conservador", range: "$60B - $120B USD", color: "#64748b" },
  { scenario: "Base", range: "$80B - $180B USD", color: "#4F7BE8" },
  { scenario: "Optimista (World Cup + Election)", range: "$120B - $300B USD", color: "#22c55e" },
];

const MEDIA_PARTNERS = [
  { name: "CNN y CNBC", detail: "Partnerships con Kalshi para integrar datos de mercado en tiempo real en cobertura editorial." },
  { name: "Google", detail: "Integración de datos de Kalshi y Polymarket en búsqueda y Google Finance (noviembre 2025)." },
  { name: "Dow Jones", detail: "Partnership con Polymarket para distribución de datos a instituciones financieras globales." },
  { name: "NHL", detail: "Primera liga deportiva mayor en firmar deal de licensing con Kalshi (octubre 2025)." },
  { name: "X (Twitter)", detail: "Polymarket como partner oficial de prediction markets, integrado con xAI." },
];

function fmtVol(v) {
  return v >= 1000 ? `$${(v / 1000).toFixed(1)}B` : `$${v}M`;
}

export default function MarketPage() {
  const { t } = useTheme();
  const { S } = useMemo(() => createStyles(t), [t]);

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
        tag="Validación Institucional"
        title="Wall Street ya Apostó"
        description="Los hedge funds más sofisticados del mundo están invirtiendo activamente en prediction markets. No estamos apostando por tecnología especulativa."
      />

      {/* Los Gigantes */}
      <section style={{ padding: "80px 0" }}>
        <div style={S.container}>
          <FadeIn>
            <SectionTag>Smart Money</SectionTag>
            <h2 style={S.sectionH2}>Los Gigantes de Wall Street ya Están Dentro</h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 32 }}>
            {GIANTS.map((g, i) => (
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
            <SectionTag>Funding</SectionTag>
            <h2 style={S.sectionH2}>Capital Institucional Masivo</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ ...glass, marginTop: 28, overflow: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={th}>Plataforma</th>
                    <th style={th}>Capital Levantado</th>
                    <th style={th}>Valuación</th>
                    <th style={th}>Inversores Clave</th>
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
                <strong style={{ color: t.heading }}>Nota sobre ICE:</strong>{" "}
                Intercontinental Exchange (dueña del NYSE) invirtió{" "}
                <strong style={{ color: t.accent }}>$2B</strong> en Polymarket. Cuando la
                infraestructura que opera la Bolsa de Nueva York apuesta por prediction
                markets, la señal es inequívoca.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Volúmenes */}
      <section style={{ padding: "80px 0" }}>
        <div style={S.container}>
          <FadeIn>
            <SectionTag>Volúmenes</SectionTag>
            <h2 style={S.sectionH2}>Crecimiento Explosivo</h2>
            <p style={S.sectionP}>
              El volumen combinado en las dos plataformas líderes ha crecido más de
              <strong style={{ color: t.accent }}> 100x</strong> en dos años.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div style={{ ...glass, marginTop: 28, overflow: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={th}>Año</th>
                    <th style={th}>Polymarket</th>
                    <th style={th}>Kalshi</th>
                    <th style={th}>Combinado</th>
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
            {[
              { label: "Vol. Polymarket 2025", value: 33, suffix: "B" },
              { label: "Vol. Kalshi 2025", value: 23, suffix: "B" },
              { label: "Crecimiento 2023-2025", value: 153, suffix: "x" },
            ].map((c, i) => (
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
            <SectionTag>Proyección</SectionTag>
            <h2 style={S.sectionH2}>Proyección 2026-2028</h2>
            <p style={S.sectionP}>
              Bajo tres escenarios, el volumen anual combinado podría alcanzar entre{" "}
              <strong style={{ color: t.accent }}>$60B y $300B</strong> en los próximos tres años.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div style={{ ...glass, marginTop: 28, overflow: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={th}>Escenario</th>
                    <th style={th}>Volumen Anual Estimado</th>
                  </tr>
                </thead>
                <tbody>
                  {PROJECTIONS.map((p) => (
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
              <h4 style={{ color: t.heading, fontSize: 16, marginBottom: 14 }}>Catalizadores Clave</h4>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {[
                  "2026: Consolidación institucional. Polymarket aprobación CFTC. Elecciones intermedias EE.UU.",
                  "2027: Mainstream adoption. Integración con brokers tradicionales. Productos derivados sobre event contracts.",
                  "2028: Elección Presidencial EE.UU. podría multiplicar 3-5x los volúmenes actuales.",
                  "Copa Mundial FIFA 2026 en Norteamérica podría generar $100B+ en volumen.",
                ].map((c, i) => (
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
            <SectionTag>Medios</SectionTag>
            <h2 style={S.sectionH2}>Validación de Medios</h2>
            <p style={S.sectionP}>Los principales medios y plataformas del mundo ya integran datos de prediction markets en su cobertura.</p>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginTop: 32 }}>
            {MEDIA_PARTNERS.map((m, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div style={{ ...glass, display: "flex", flexDirection: "column", gap: 8 }}>
                  <h4 style={{ margin: 0, fontSize: 18, color: t.heading }}>{m.name}</h4>
                  <p style={{ margin: 0, fontSize: 14, color: t.textMuted, lineHeight: 1.6 }}>{m.detail}</p>
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
            <SectionTag>Relevancia</SectionTag>
            <h2 style={S.sectionH2}>Por Qué Importa para Orbit</h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, marginTop: 32 }}>
            {[
              { title: "Timing Perfecto", text: "Entramos en la fase de adopción temprana institucional (Early Majority), no en la fase especulativa." },
              { title: "Liquidez Garantizada", text: "Market makers institucionales permiten ejecutar estrategias a escala sin impacto de mercado hasta $50-100M USD en AUM." },
              { title: "Legitimidad del Mercado", text: "Bloomberg, CNN y Google ya consideran prediction markets fuentes legítimas de datos." },
              { title: "Runway de Crecimiento", text: "Mercado proyectado a crecer 3-5x en 3 años. Infraestructura para un mercado validado por el smart money." },
            ].map((r, i) => (
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
