import { useMemo } from "react";
import { useTheme } from "../shared/theme";
import { createStyles } from "../shared/styles";
import { SvgIcon, FadeIn, Counter, SectionTag } from "../shared/components";
import PageHero from "../shared/PageHero";

export default function WhyNowPage() {
  const { t } = useTheme();
  const { S } = useMemo(() => createStyles(t), [t]);

  const glass = {
    background: t.glassBg, backdropFilter: "blur(16px) saturate(150%)",
    border: `1px solid ${t.glassBorder}`, borderRadius: 16, padding: "28px 32px",
    boxShadow: t.glassShadow,
  };

  const keyInsight = { ...glass, marginTop: 28, borderLeft: `3px solid ${t.accent}` };

  return (
    <>
      <PageHero
        tag="Timing"
        title="¿Por Qué Ahora?"
        description="Cuatro fuerzas masivas están convergiendo para crear una oportunidad única en una década."
      />

      {/* Tailwind 1: AI Agents */}
      <section style={{ padding: "80px 0" }}>
        <div style={S.container}>
          <FadeIn>
            <SectionTag>Tailwind 1</SectionTag>
            <h2 style={S.sectionH2}>Explosión de Agentes de IA</h2>
            <p style={S.sectionP}>
              Los agentes autónomos de IA están pasando de demos a producción.
              Las empresas más grandes del mundo ya los despliegan — y todos
              necesitan datos estructurados como input.
            </p>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 32 }}>
            {[
              { name: "GPT-4 / OpenAI", detail: "Function-calling agents para research, trading y ops." },
              { name: "Claude / Anthropic", detail: "Computer-use agents que navegan sistemas complejos." },
              { name: "Grok / xAI", detail: "Agente nativo de X con acceso a datos en tiempo real." },
            ].map((a, i) => (
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
            <h4 style={{ color: t.heading, fontSize: 16, marginTop: 36, marginBottom: 16 }}>Despliegues Enterprise</h4>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
              {[
                { org: "Goldman Sachs", use: "Agents para research y due diligence" },
                { org: "McKinsey", use: "Lilli — agent interno para 30K+ consultores" },
                { org: "Walmart", use: "Agents para supply chain y pricing" },
                { org: "Palantir AIP", use: "$1B ARR — agents para defensa y enterprise" },
              ].map((d, i) => (
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
                <strong style={{ color: t.accent }}>Insight clave:</strong> Los agentes de IA
                necesitan contexto estructurado para LATAM — probabilidades calibradas, datos
                regulatorios, sentiment político — y{" "}
                <strong style={{ color: t.heading }}>ese contexto no existe hoy</strong>. Orbit lo crea.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Tailwind 2: Grok + X */}
      <section style={{ padding: "80px 0", background: t.bgAlt, transition: "background 0.4s" }}>
        <div style={S.container}>
          <FadeIn>
            <SectionTag>Tailwind 2</SectionTag>
            <h2 style={S.sectionH2}>Grok y X: Stack de Inteligencia en Tiempo Real</h2>
            <p style={S.sectionP}>
              xAI Grok tiene acceso nativo a X (Twitter). Combinados, forman el stack
              de inteligencia en tiempo real más poderoso del mundo.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div style={{ ...glass, marginTop: 32 }}>
              <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "Acceso nativo a 500M+ posts diarios en X",
                  "Análisis de sentiment en tiempo real",
                  "México: X es la plataforma política primaria",
                  "Grok convierte caos de datos en inteligencia estructurada",
                  "Monitoreo 24/7 de narrativas políticas y económicas",
                ].map((c, i) => (
                  <li key={i} style={{ color: t.text, fontSize: 14, lineHeight: 1.65 }}>{c}</li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div style={keyInsight}>
              <p style={{ margin: 0, fontSize: 14, color: t.text, lineHeight: 1.7 }}>
                <strong style={{ color: t.accent }}>Nuestra ventaja:</strong> Orbit convierte
                el caos de 500M+ posts diarios en{" "}
                <strong style={{ color: t.heading }}>inteligencia estructurada y accionable</strong>{" "}
                para inversores y corporativos en LATAM.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Tailwind 3: Mainstream Prediction Markets */}
      <section style={{ padding: "80px 0" }}>
        <div style={S.container}>
          <FadeIn>
            <SectionTag>Tailwind 3</SectionTag>
            <h2 style={S.sectionH2}>Prediction Markets se Vuelven Mainstream</h2>
            <p style={S.sectionP}>
              La elección de 2024 fue el punto de inflexión. Los prediction markets
              pasaron de nicho cripto a herramienta mainstream de toma de decisiones.
            </p>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, marginTop: 32 }}>
            {[
              { stat: "$3.6B", label: "Volumen Polymarket en elección 2024" },
              { stat: "CFTC", label: "Validación regulatoria de event contracts" },
              { stat: "Metaculus", label: "Estándar de calibración para labs de IA" },
            ].map((m, i) => (
              <FadeIn key={i} delay={i * 0.09}>
                <div style={{ ...glass, textAlign: "center" }}>
                  <div style={{ fontSize: 32, fontWeight: 800, color: t.accent, lineHeight: 1.1 }}>{m.stat}</div>
                  <div style={{ fontSize: 13, color: t.textMuted, marginTop: 8 }}>{m.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.25}>
            <div style={keyInsight}>
              <p style={{ margin: 0, fontSize: 14, color: t.text, lineHeight: 1.7 }}>
                <strong style={{ color: t.accent }}>El problema:</strong> Los datos de
                prediction markets están fragmentados entre múltiples plataformas y{" "}
                <strong style={{ color: t.heading }}>no están empaquetados para consumo enterprise</strong>.
                No hay API unificada, no hay consenso cross-platform, no hay análisis LATAM.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Tailwind 4: Mexico */}
      <section style={{ padding: "80px 0", background: t.bgAlt, transition: "background 0.4s" }}>
        <div style={S.container}>
          <FadeIn>
            <SectionTag>Tailwind 4</SectionTag>
            <h2 style={S.sectionH2}>El Momento Político de México</h2>
            <p style={S.sectionP}>
              México atraviesa el período de mayor incertidumbre regulatoria y
              política en décadas — exactamente cuando la demanda por inteligencia
              predictiva es máxima.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div style={{ ...glass, marginTop: 32 }}>
              <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "Elecciones intermedias 2026 — 15 carreras gubernamentales",
                  "Reforma judicial en implementación — incertidumbre masiva",
                  "Política energética en transición — impacto en $50B+ de inversión",
                  "Boom de nearshoring — $35B en inversiones 2024",
                  "México recibe más FDI que China por primera vez",
                  "Consultas populares y cambios constitucionales frecuentes",
                ].map((f, i) => (
                  <li key={i} style={{ color: t.text, fontSize: 14, lineHeight: 1.65 }}>{f}</li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, marginTop: 28 }}>
            {[
              { value: 35, suffix: "B", label: "FDI en México 2024" },
              { value: 15, suffix: "", label: "Carreras Gubernamentales 2026" },
              { value: 50, suffix: "B+", label: "Inversión impactada por política energética" },
            ].map((c, i) => (
              <FadeIn key={i} delay={0.18 + i * 0.08}>
                <div style={{ ...glass, textAlign: "center" }}>
                  <div style={{ fontSize: 34, fontWeight: 800, color: t.accent, lineHeight: 1.1 }}>
                    ${c.value !== 15 ? "" : ""}<Counter end={c.value} />{c.suffix}
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
            <SectionTag>Orbit + IA</SectionTag>
            <h2 style={S.sectionH2}>Por Qué Orbit Escala CON IA</h2>
            <p style={S.sectionP}>
              La narrativa de "SaaS muere con IA" no aplica cuando tu producto es{" "}
              <strong style={{ color: t.accent }}>data primaria</strong> que ninguna IA puede generar por sí sola.
            </p>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginTop: 32 }}>
            {[
              { title: "API-First Pricing", text: "Cobro por consulta/endpoint. Más agentes de IA = más revenue. El crecimiento de IA nos beneficia directamente.", icon: "cpu" },
              { title: "Moat de Regulación Local", text: "Entender CNBV, INE, INEGI requiere contexto que ningún LLM tiene out-of-the-box. Orbit empaqueta ese contexto.", icon: "scale" },
              { title: "Console + APIs", text: "Humanos usan la consola, agentes usan la API. Mismo dato, dos interfaces, doble mercado.", icon: "signal" },
              { title: "Consensus Data Primario", text: "Ninguna IA puede generar probabilidades calibradas de mercado — se necesitan participantes reales apostando dinero real.", icon: "chart" },
            ].map((r, i) => (
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
                <strong style={{ color: t.accent }}>La tesis:</strong> Orbit provee{" "}
                <strong style={{ color: t.heading }}>datos de consenso primarios</strong>{" "}
                — probabilidades calibradas respaldadas por dinero real — que ningún LLM
                puede fabricar. Más agentes de IA en el mundo ={" "}
                <strong style={{ color: t.heading }}>más clientes para Orbit</strong>.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
