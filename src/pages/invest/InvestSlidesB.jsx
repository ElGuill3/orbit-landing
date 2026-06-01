import React, { useState, useRef } from "react";
import { G, useCountUp, SlideIcon } from "./InvestSlides";

/* ── Inline icon helper (fallback) ── */
function Icon({ name, size = 20, color = "#3B82F6" }) {
  const icons = {
    wallet: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/><circle cx="18" cy="14" r="1"/></svg>,
    building: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V7l8-4v18M13 21V3l6 4v14"/><path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01M17 9v.01M17 12v.01M17 15v.01"/></svg>,
    cpu: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>,
    briefcase: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>,
    mail: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    globe: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
    mapPin: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    shield: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    trending: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>,
    flag: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"/></svg>,
    scale: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M3 7l3-4 3 4M15 7l3-4 3 4M3 7v2a3 3 0 003 3 3 3 0 003-3V7M15 7v2a3 3 0 003 3 3 3 0 003-3V7"/></svg>,
    rocket: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/></svg>,
    users: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  };
  return <span style={{ display: "inline-flex", lineHeight: 0, alignItems: "center", justifyContent: "center" }}>{icons[name] || null}</span>;
}

/* ════════════════════════════════════════════
   SLIDES 12–22 — Investment Pitch Deck (Part B)
   ════════════════════════════════════════════ */

/* ── Slide 12 — Roadmap ── */
function RoadmapSlide() {
  const phases = [
    {
      header: "MESES 1–4",
      phase: "Infraestructura",
      tag: "Core & Setup",
      items: [
        "Orbit Capital live",
        "Agentes AI en prod.",
        "Fireblocks MPC",
        "Bridge by Stripe",
        "Dubai incorporation",
      ],
    },
    {
      header: "MESES 5–8",
      phase: "Go to Market",
      tag: "B2B & Validation",
      items: [
        "Primeros 5 clientes de Risk",
        "Orbit Risk SaaS v1",
        "Pipeline corporativo MX",
        "Orbit Intel v2",
        "MRR $50K MXN",
      ],
    },
    {
      header: "MESES 9–12",
      phase: "Escala",
      tag: "Regional Expansion",
      items: [
        "Expansión Colombia/Chile",
        "Exchange partnerships",
        "AUM $500K USD",
        "10 clientes de Risk",
        "Métricas Seed Round",
      ],
    },
    {
      header: "MESES 13–18",
      phase: "Seed Round",
      tag: "Fundraise & Growth",
      items: [
        "Revenue $2M ARR",
        "Team 10 personas",
        "Orbit Risk enterprise",
        "Orbit Intel prod.",
        "Due diligence ready",
      ],
    },
  ];

  return (
    <div className="invest-slide-inner">
      <div className="invest-section-label stagger-item">ROADMAP</div>
      <h2 className="invest-slide-title stagger-item">
        Hoja de ruta: de pre-seed a seed en <G>18 meses.</G>
      </h2>
      <p className="invest-slide-subtitle stagger-item">
        Ejecución paralela de infraestructura, producto y distribución.
      </p>
      <div
        className="stagger-item invest-responsive-grid-4"
        style={{ marginTop: 32 }}
      >
        {phases.map((p, i) => (
          <div
            key={i}
            className="invest-card"
            style={{ padding: 20 }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#3B82F6",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 4,
              }}
            >
              {p.header}
            </div>
            <div
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "#FAFAFA",
                marginBottom: 2,
              }}
            >
              {p.phase}
            </div>
            <div
              style={{
                fontSize: 11,
                color: "#71717A",
                marginBottom: 16,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              {p.tag}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {p.items.map((item, j) => (
                <div
                  key={j}
                  style={{
                    display: "flex",
                    gap: 8,
                    alignItems: "flex-start",
                    fontSize: 13,
                    color: "#A1A1AA",
                    lineHeight: 1.5,
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#3B82F6",
                      marginTop: 6,
                      flexShrink: 0,
                    }}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Slide 13 — Proyecciones Financieras ── */
function ProyeccionesSlide() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const aum = useCountUp(ref1, 221, 1400);
  const margen = useCountUp(ref2, 81, 1200);
  const arr = useCountUp(ref3, 2, 1000);

  const stats = [
    {
      ref: ref1,
      value: `$${aum}M`,
      label: "AUM Objetivo",
      sub: "Año 3 · Orbit Capital",
    },
    {
      ref: ref2,
      value: `>${margen}%`,
      label: "Margen Bruto",
      sub: "Objetivo · Orbit Risk SaaS",
    },
    {
      ref: ref3,
      value: `$${arr}M`,
      label: "ARR",
      sub: "Objetivo Año 2 · Revenue combinado",
    },
    {
      ref: null,
      value: "M15",
      label: "Break-even",
      sub: "Proyectado post-raise",
    },
  ];

  return (
    <div className="invest-slide-inner">
      <div className="invest-section-label stagger-item">
        PROYECCIONES FINANCIERAS
      </div>
      <h2 className="invest-slide-title stagger-item">
        De $0 a revenue recurrente en <G>18 meses.</G>
      </h2>
      <p className="invest-slide-subtitle stagger-item" style={{ fontSize: "clamp(15px, 2vw, 17px)", color: "#A1A1AA", maxWidth: 700, lineHeight: 1.6, marginBottom: 16 }}>
        Modelo financiero basado en dos fuentes de ingreso: management + performance fees de Capital, y revenue SaaS recurrente de Risk.
      </p>

      {/* Stat cards */}
      <div
        className="stagger-item invest-responsive-grid-4"
        style={{ marginTop: 28 }}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            ref={s.ref}
            className="invest-card"
            style={{ textAlign: "center", padding: "24px 16px" }}
          >
            <div
              style={{
                fontSize: 28,
                fontWeight: 800,
                color: "#3B82F6",
                letterSpacing: "-0.02em",
              }}
            >
              {s.value}
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#FAFAFA",
                marginTop: 6,
              }}
            >
              {s.label}
            </div>
            <div style={{ fontSize: 11, color: "#71717A", marginTop: 4 }}>
              {s.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Revenue Growth Chart */}
      <div className="invest-card stagger-item" style={{ marginTop: 24, padding: 24 }}>
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: "#FAFAFA",
            marginBottom: 16,
          }}
        >
          Revenue Growth · M1–M18
        </div>
        <svg
          viewBox="0 0 600 200"
          style={{ width: "100%", height: "auto", maxHeight: 200 }}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="capitalGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="riskGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={i}
              x1="40"
              y1={40 + i * 35}
              x2="580"
              y2={40 + i * 35}
              stroke="#27272A"
              strokeWidth="0.5"
            />
          ))}
          {/* X-axis labels */}
          {["M1", "M3", "M5", "M7", "M9", "M12", "M15", "M18"].map(
            (label, i) => (
              <text
                key={i}
                x={40 + i * 77}
                y="195"
                fill="#71717A"
                fontSize="9"
                textAnchor="middle"
              >
                {label}
              </text>
            )
          )}
          {/* Capital area (blue) — linear growth */}
          <polygon
            points="40,175 117,168 194,160 271,150 348,138 425,122 502,104 580,85 580,180 40,180"
            fill="url(#capitalGrad)"
          />
          <polyline
            points="40,175 117,168 194,160 271,150 348,138 425,122 502,104 580,85"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Risk area (green) — starts M5, grows exponentially */}
          <polygon
            points="194,180 271,172 348,158 425,135 502,105 580,65 580,180 194,180"
            fill="url(#riskGrad)"
          />
          <polyline
            points="194,180 271,172 348,158 425,135 502,105 580,65"
            fill="none"
            stroke="#10B981"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        {/* Legend */}
        <div
          style={{
            display: "flex",
            gap: 24,
            marginTop: 12,
            justifyContent: "center",
            fontSize: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div
              style={{
                width: 12,
                height: 3,
                borderRadius: 2,
                background: "#3B82F6",
              }}
            />
            <span style={{ color: "#A1A1AA" }}>Capital (Mgmt + Perf Fees)</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div
              style={{
                width: 12,
                height: 3,
                borderRadius: 2,
                background: "#10B981",
              }}
            />
            <span style={{ color: "#A1A1AA" }}>Risk (SaaS Revenue)</span>
          </div>
        </div>
        <p
          style={{
            fontSize: 12,
            color: "#71717A",
            textAlign: "center",
            marginTop: 12,
            lineHeight: 1.5,
          }}
        >
          Capital genera revenue desde M1 con management + performance fees. Risk
          SaaS entra en M5 y escala exponencialmente con clientes B2B.
        </p>
      </div>
    </div>
  );
}

/* ── Slide 14 — Equipo Fundador ── */
function EquipoSlide() {
  const team = [
    {
      initials: "JR",
      name: "Javier Regalado Sabates",
      role: "Co-Founder & CEO",
      bio: "Ha construido y escalado operaciones de infraestructura energética y proyectos solares en México por más de una década. Expertise en navegar industrias altamente reguladas — energía, finanzas, gobierno. Impulsa la convergencia AI + fintech en mercados emergentes desde la operación.",
      gradient: "linear-gradient(135deg, #3B82F6, #12B981)",
    },
    {
      initials: "SD",
      name: "Sebastián Dulong",
      role: "Co-Founder & CTO",
      bio: "Competidor en la Olimpiada Internacional de Matemáticas. Ingeniero cuantitativo con background en investigación económica en ITAM. Lideró equipos de datos en empresas tech multinacionales en LATAM. Arquitecto del stack completo: pipelines de datos, modelos predictivos, ejecución automatizada e infraestructura de riesgo.",
      gradient: "linear-gradient(135deg, #8B5CF6, #3B82F6)",
    },
    {
      initials: "RG",
      name: "Rodrigo García",
      role: "Co-Founder & CIO",
      bio: "+5 años en trading cuantitativo en crypto y equities. Fundó una firma de prop trading y levantó capital de inversionistas internacionales. Expertise profundo en arbitraje estadístico, derivados, market microstructure y risk management. Diseña y supervisa todas las estrategias de inversión de Orbit Capital.",
      gradient: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
    },
    {
      initials: "TA",
      name: "Toño Arellano Ibáñez",
      role: "Strategic Advisor",
      bio: "Co-founder & Co-CEO de Delta Protect — la empresa líder en ciberseguridad y compliance de LATAM, con 300+ clientes enterprise incluyendo unicornios y corporativos Fortune 500. Expertise en arquitectura tecnológica, transformación AI a escala, distribución enterprise y gobernanza de producto.",
      gradient: "linear-gradient(135deg, #FBBF24, #EF4444)",
    },
  ];

  return (
    <div className="invest-slide-inner">
      <div className="invest-section-label stagger-item">EQUIPO FUNDADOR</div>
      <h2 className="invest-slide-title stagger-item">
        Cuatro fundadores, <G>un objetivo.</G>
      </h2>
      <p className="invest-slide-subtitle stagger-item" style={{ fontSize: "clamp(15px, 2vw, 17px)", color: "#A1A1AA", maxWidth: 700, lineHeight: 1.6, marginBottom: 16 }}>
        Experiencia combinada en fintech, AI, trading cuantitativo e infraestructura regulada en LATAM.
      </p>
      <div
        className="invest-responsive-grid-2"
        style={{ marginTop: 32 }}
      >
        {team.map((t, i) => (
          <div key={i} className="invest-card stagger-item" style={{ padding: 24 }}>
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              {/* Avatar with professional silhouette */}
              <div style={{
                width: 56, height: 56, borderRadius: "50%",
                background: t.gradient,
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative", overflow: "hidden", flexShrink: 0,
              }}>
                <svg width="34" height="34" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)" stroke="none" style={{ position: "absolute" }}>
                  <circle cx="12" cy="8" r="4" />
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                </svg>
                <span style={{
                  position: "relative", zIndex: 1,
                  fontSize: 18, fontWeight: 800, color: "#FFFFFF",
                  textShadow: "0 1px 3px rgba(0,0,0,0.3)",
                }}>
                  {t.initials}
                </span>
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#FAFAFA",
                    marginBottom: 4,
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: i < 3 ? "#10B981" : "#FAFAFA",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: 12,
                  }}
                >
                  {t.role}
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "#A1A1AA",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {t.bio}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Slide 15 — The Ask ── */
function TheAskSlide() {
  const dealTerms = [
    {
      label: "Instrumento",
      value: "SAFE",
      detail: "YC Standard Post-Money",
    },
    {
      label: "Valuación",
      value: "~$33.3M MXN",
      detail: "Post-Money Cap",
    },
    { label: "Dilución", value: "15%", detail: "Dilución máxima proyectada" },
    { label: "Discount", value: "20%", detail: "Descuento SAFE" },
    {
      label: "Runway",
      value: "9-12 meses",
      detail: "Extendido por revenue de Risk",
    },
  ];

  // Donut chart segments
  const segments = [
    { label: "Tech & Infra", pct: 40, color: "#3B82F6" },
    { label: "Trading Capital", pct: 25, color: "#10B981" },
    { label: "GTM & Sales", pct: 20, color: "#8B5CF6" },
    { label: "Legal & Compliance", pct: 10, color: "#F59E0B" },
    { label: "Ops & Equipo", pct: 5, color: "#71717A" },
  ];

  // Build stroke-dasharray offsets for donut
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  let cumulativeOffset = 0;
  const donutSegments = segments.map((seg) => {
    const dashLength = (seg.pct / 100) * circumference;
    const dashGap = circumference - dashLength;
    const offset = cumulativeOffset;
    cumulativeOffset += dashLength;
    return { ...seg, dashLength, dashGap, offset };
  });

  return (
    <div className="invest-slide-inner">
      <div className="invest-section-label stagger-item">THE ASK</div>
      <h2 className="invest-slide-title stagger-item">Pre-Seed Round</h2>
      <p className="invest-slide-subtitle stagger-item" style={{ fontSize: "clamp(15px, 2vw, 17px)", color: "#A1A1AA", maxWidth: 700, lineHeight: 1.6, marginBottom: 8 }}>
        Capital para acelerar la operación y escalar la infraestructura de Orbit en LATAM.
      </p>

      {/* Big number */}
      <div className="stagger-item" style={{ textAlign: "center", margin: "24px 0" }}>
        <div
          style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 800,
            color: "#FAFAFA",
            letterSpacing: "-0.03em",
          }}
        >
          $5,000,000 MXN
        </div>
        <div style={{ fontSize: 18, color: "#71717A", marginTop: 4 }}>
          ~$280,000 USD
        </div>
      </div>

      {/* Two columns */}
      <div
        className="stagger-item invest-responsive-grid-2"
        style={{ marginTop: 16 }}
      >
        {/* Deal terms table */}
        <div className="invest-card" style={{ padding: 24 }}>
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: "#FAFAFA",
              marginBottom: 16,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            Deal Terms
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {dealTerms.map((t, i) => (
              <div
                key={i}
                className="invest-responsive-grid-terms"
                style={{
                  padding: "10px 0",
                  borderBottom:
                    i < dealTerms.length - 1
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "none",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    color: "#71717A",
                    fontWeight: 600,
                  }}
                >
                  {t.label}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#FAFAFA",
                  }}
                >
                  {t.value}
                </div>
                <div style={{ fontSize: 12, color: "#A1A1AA" }}>
                  {t.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Donut chart */}
        <div className="invest-card" style={{ padding: 24 }}>
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: "#FAFAFA",
              marginBottom: 16,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            Use of Proceeds
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 20,
            }}
          >
            <svg width="180" height="180" viewBox="0 0 180 180">
              {donutSegments.map((seg, i) => (
                <circle
                  key={i}
                  cx="90"
                  cy="90"
                  r={radius}
                  fill="none"
                  stroke={seg.color}
                  strokeWidth="20"
                  strokeDasharray={`${seg.dashLength} ${seg.dashGap}`}
                  strokeDashoffset={-seg.offset}
                  transform="rotate(-90 90 90)"
                  style={{ transition: "stroke-dasharray 0.6s ease" }}
                />
              ))}
              <text
                x="90"
                y="86"
                textAnchor="middle"
                fill="#FAFAFA"
                fontSize="16"
                fontWeight="800"
              >
                $5M
              </text>
              <text
                x="90"
                y="102"
                textAnchor="middle"
                fill="#71717A"
                fontSize="9"
              >
                MXN
              </text>
            </svg>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                width: "100%",
              }}
            >
              {segments.map((seg, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 12,
                  }}
                >
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 2,
                      background: seg.color,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ color: "#A1A1AA", flex: 1 }}>{seg.label}</span>
                  <span style={{ color: "#FAFAFA", fontWeight: 700 }}>
                    {seg.pct}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footnote */}
      <div
        className="stagger-item"
        style={{
          fontSize: 11,
          color: "#71717A",
          textAlign: "center",
          marginTop: 20,
          lineHeight: 1.5,
        }}
      >
        Estructura Legal: Incluye formación tri-jurisdiccional: Dubai DIFC
        (operativo) + Cayman (holding) + México SAPI.
      </div>
    </div>
  );
}

/* ── Slide 16 — Cierre ── */
function CierreSlide({ onShowAnnexes }) {
  return (
    <div
      className="invest-slide-inner"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Orbital background */}
      <svg
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.12,
          pointerEvents: "none",
        }}
        width="520"
        height="520"
        viewBox="0 0 520 520"
      >
        <ellipse
          cx="260"
          cy="260"
          rx="180"
          ry="60"
          stroke="#3B82F6"
          strokeOpacity="0.3"
          strokeWidth="1"
          fill="none"
          style={{ animation: "orbit-rotate 20s linear infinite" }}
        />
        <ellipse
          cx="260"
          cy="260"
          rx="230"
          ry="80"
          stroke="#8B5CF6"
          strokeOpacity="0.2"
          strokeWidth="1"
          fill="none"
          style={{ animation: "orbit-rotate 30s linear infinite reverse" }}
        />
        <ellipse
          cx="260"
          cy="260"
          rx="250"
          ry="120"
          stroke="#10B981"
          strokeOpacity="0.15"
          strokeWidth="1"
          fill="none"
          style={{ animation: "orbit-rotate 40s linear infinite" }}
        />
      </svg>

      <h2
        className="stagger-item"
        style={{
          fontSize: "clamp(26px, 4vw, 44px)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          maxWidth: 700,
          lineHeight: 1.15,
          position: "relative",
          zIndex: 1,
        }}
      >
        Transformamos la <G>incertidumbre</G> en una{" "}
        <G>ventaja competitiva.</G>
      </h2>
      <p
        className="stagger-item"
        style={{
          fontSize: "clamp(15px, 2vw, 19px)",
          color: "#A1A1AA",
          maxWidth: 600,
          lineHeight: 1.6,
          position: "relative",
          zIndex: 1,
          marginTop: 16,
        }}
      >
        La infraestructura de prediction markets para que Latinoamérica se
        proteja, invierta y crezca.
      </p>

      {/* Contact */}
      <div
        className="stagger-item"
        style={{
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
          justifyContent: "center",
          fontSize: 14,
          color: "#71717A",
          marginTop: 32,
          position: "relative",
          zIndex: 1,
        }}
      >
        <span><Icon name="mail" size={16} color="#71717A" /> invest@orbitcapital.ai</span>
        <span><Icon name="globe" size={16} color="#71717A" /> orbitcapital.ai</span>
        <span><Icon name="mapPin" size={16} color="#71717A" /> Ciudad de México, México</span>
      </div>

      {/* Annexes button */}
      {onShowAnnexes && (
        <button
          className="stagger-item invest-btn-primary"
          onClick={onShowAnnexes}
          style={{
            marginTop: 28,
            position: "relative",
            zIndex: 1,
            padding: "12px 28px",
            fontSize: 15,
            fontWeight: 700,
            background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
            color: "#FFFFFF",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          Ver Anexos →
        </button>
      )}
    </div>
  );
}

/* ── Slide 17 — Anexo: Return Scenarios ── */
function AnexoReturnSlide() {
  const scenarios = [
    {
      scenario: "Bear Case",
      aum: "$50M",
      mgmtFee: "$1M",
      perfFee: "$0.5M",
      totalRev: "$1.5M",
      moic: "5x",
      irr: "~45%",
      color: "#EF4444",
    },
    {
      scenario: "Base Case",
      aum: "$100M",
      mgmtFee: "$2M",
      perfFee: "$2M",
      totalRev: "$4M",
      moic: "15x",
      irr: "~85%",
      color: "#FBBF24",
    },
    {
      scenario: "Bull Case",
      aum: "$221M",
      mgmtFee: "$4.4M",
      perfFee: "$6.6M",
      totalRev: "$11M",
      moic: "40x",
      irr: "~150%",
      color: "#10B981",
    },
  ];

  const reasons = [
    {
      title: "Mercado explotando",
      desc: "Polymarket pasó de $0 a $33.4B en volumen. Kalshi levantó $11B de valuación. El mercado se multiplica cada 12 meses.",
    },
    {
      title: "Regulación favorable",
      desc: "FanDuel Predicts, DraftKings Predictions — los operadores más grandes del mundo ya están entrando. El marco regulatorio se consolida.",
    },
    {
      title: "LATAM sin competencia",
      desc: "Cero actores institucionales construyendo infraestructura de prediction markets para América Latina.",
    },
    {
      title: "Valuación conservadora",
      desc: "Pre-seed con métricas de operación real. El mercado premia primeros movimientos con valuaciones significativamente mayores.",
    },
  ];

  return (
    <div className="invest-slide-inner">
      <div className="invest-section-label stagger-item">
        ANEXO: RETURN SCENARIOS
      </div>
      <h2 className="invest-slide-title stagger-item">
        Escenarios de <G>retorno para inversionistas.</G>
      </h2>

      {/* Return table */}
      <div className="invest-card stagger-item" style={{ marginTop: 24, padding: 24, overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: 13,
          }}
        >
          <thead>
            <tr>
              {[
                "Escenario",
                "AUM",
                "Mgmt Fee",
                "Perf Fee",
                "Total Rev",
                "MOIC",
                "IRR",
              ].map((h) => (
                <th
                  key={h}
                  style={{
                    textAlign: "left",
                    padding: "10px 12px",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#71717A",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {scenarios.map((s, i) => (
              <tr key={i}>
                <td
                  style={{
                    padding: "10px 12px",
                    fontWeight: 700,
                    color: s.color,
                  }}
                >
                  {s.scenario}
                </td>
                <td style={{ padding: "10px 12px", color: "#A1A1AA" }}>
                  {s.aum}
                </td>
                <td style={{ padding: "10px 12px", color: "#A1A1AA" }}>
                  {s.mgmtFee}
                </td>
                <td style={{ padding: "10px 12px", color: "#A1A1AA" }}>
                  {s.perfFee}
                </td>
                <td style={{ padding: "10px 12px", color: "#A1A1AA" }}>
                  {s.totalRev}
                </td>
                <td
                  style={{
                    padding: "10px 12px",
                    fontWeight: 700,
                    color: "#FAFAFA",
                  }}
                >
                  {s.moic}
                </td>
                <td
                  style={{
                    padding: "10px 12px",
                    fontWeight: 700,
                    color: s.color,
                  }}
                >
                  {s.irr}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Why now cards */}
      <div
        style={{
          fontSize: 14,
          fontWeight: 700,
          color: "#FAFAFA",
          marginTop: 28,
          marginBottom: 12,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
        className="stagger-item"
      >
        ¿POR QUÉ AHORA?
      </div>
      <div className="invest-responsive-grid-4">
        {reasons.map((r, i) => (
          <div key={i} className="invest-card stagger-item" style={{ padding: 20 }}>
            <div
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#3B82F6",
                marginBottom: 8,
              }}
            >
              {r.title}
            </div>
            <p
              style={{
                fontSize: 12,
                color: "#A1A1AA",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {r.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Slide 18 — Anexo: Flywheel ── */
function AnexoFlywheelSlide() {
  const motors = [
    {
      label: "Intel",
      desc: "Motor de inteligencia. Knowledge Graph + 13 agentes AI que alimentan señales a Capital y Risk. Procesa 47 fuentes de datos en tiempo real.",
      color: "#8B5CF6",
      angle: 210,
    },
    {
      label: "Capital",
      desc: "Fondo cuantitativo que opera en prediction markets. Valida señales de Intel con capital real. Genera revenue vía management + performance fees.",
      color: "#3B82F6",
      angle: 330,
    },
    {
      label: "Risk",
      desc: "Cobertura empresarial B2B. Transforma las señales e infraestructura de Capital en productos de protección para corporativos LATAM.",
      color: "#10B981",
      angle: 90,
    },
  ];

  return (
    <div className="invest-slide-inner">
      <div className="invest-section-label stagger-item">
        ANEXO: FLYWHEEL
      </div>
      <h2 className="invest-slide-title stagger-item">
        El <G>flywheel</G> de Orbit: tres motores, un ecosistema.
      </h2>
      <p className="invest-slide-subtitle stagger-item" style={{ fontSize: "clamp(15px, 2vw, 17px)", color: "#A1A1AA", maxWidth: 700, lineHeight: 1.6, marginBottom: 16 }}>
        Intel alimenta a Capital, Capital valida y genera revenue, Risk distribuye la inteligencia como producto B2B. Cada motor fortalece a los demás.
      </p>

      {/* Flywheel SVG */}
      <div
        className="stagger-item"
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "32px 0",
        }}
      >
        <svg width="320" height="320" viewBox="0 0 320 320">
          {/* Circular arrows */}
          <circle
            cx="160"
            cy="160"
            r="100"
            fill="none"
            stroke="#27272A"
            strokeWidth="2"
            strokeDasharray="8 6"
            style={{ animation: "orbit-rotate 12s linear infinite" }}
          />
          {/* Intel node — bottom-left */}
          <circle cx="73" cy="210" r="36" fill="#8B5CF620" stroke="#8B5CF6" strokeWidth="1.5" />
          <text x="73" y="214" textAnchor="middle" fill="#8B5CF6" fontSize="11" fontWeight="700">
            Intel
          </text>
          {/* Capital node — bottom-right */}
          <circle cx="247" cy="210" r="36" fill="#3B82F620" stroke="#3B82F6" strokeWidth="1.5" />
          <text x="247" y="214" textAnchor="middle" fill="#3B82F6" fontSize="11" fontWeight="700">
            Capital
          </text>
          {/* Risk node — top */}
          <circle cx="160" cy="60" r="36" fill="#10B98120" stroke="#10B981" strokeWidth="1.5" />
          <text x="160" y="64" textAnchor="middle" fill="#10B981" fontSize="11" fontWeight="700">
            Risk
          </text>
          {/* Arrows: Intel → Capital */}
          <line
            x1="109"
            y1="210"
            x2="211"
            y2="210"
            stroke="#3B82F6"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            style={{ animation: "dash-flow 1.5s linear infinite" }}
          />
          {/* Arrows: Capital → Risk */}
          <line
            x1="230"
            y1="180"
            x2="177"
            y2="90"
            stroke="#10B981"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            style={{
              animation: "dash-flow 1.5s linear infinite",
              animationDelay: "0.5s",
            }}
          />
          {/* Arrows: Risk → Intel */}
          <line
            x1="143"
            y1="90"
            x2="90"
            y2="180"
            stroke="#8B5CF6"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            style={{
              animation: "dash-flow 1.5s linear infinite",
              animationDelay: "1s",
            }}
          />
        </svg>
      </div>

      {/* Descriptions */}
      <div className="invest-responsive-grid-3">
        {motors.map((m, i) => (
          <div key={i} className="invest-card stagger-item" style={{ padding: 20 }}>
            <div
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: m.color,
                marginBottom: 8,
              }}
            >
              {m.label}
            </div>
            <p
              style={{
                fontSize: 13,
                color: "#A1A1AA",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {m.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Slide 19 — Anexo: FAQ ── */
function AnexoFAQSlide() {
  const [expanded, setExpanded] = useState(null);

  const faqs = [
    {
      q: "¿Qué pasa si pierdo mi dinero?",
      a: "Orbit Capital implementa un sistema de control de riesgo progresivo (DDCI) que limita las pérdidas. El drawdown máximo objetivo es <15%. Si se activa el último nivel de protección, el sistema liquida posiciones de forma ordenada para preservar el capital restante.",
    },
    {
      q: "¿Están regulados?",
      a: "Estamos en proceso de incorporación en Dubai (DFSA/VARA), una de las jurisdicciones más progresivas para activos digitales. Estructura tri-jurisdiccional: Dubai DIFC (operativo) + Cayman (holding) + México SAPI (servicios).",
    },
    {
      q: "¿El retorno de 18-25% es realista?",
      a: "Sí. Los prediction markets tienen ineficiencias estructurales significativas. Nuestros modelos explotan arbitraje entre plataformas, errores de pricing por sesgos cognitivos, y retrasos en la incorporación de información. En backtesting extendido, nuestros agentes logran Sharpe >1.5.",
    },
    {
      q: "¿Por qué Dubai y no México?",
      a: "Dubai ofrece un marco regulatorio claro y progresivo para operaciones con activos digitales. DFSA y VARA proporcionan certeza jurídica que México aún no tiene para este tipo de instrumentos.",
    },
    {
      q: "¿Qué pasa si Polymarket cierra?",
      a: "Nuestra infraestructura es plataforma-agnóstica. Podemos operar en Kalshi, Metaculus, y otros mercados. Polymarket es el punto de partida por su liquidez, pero no es una dependencia estructural.",
    },
    {
      q: "¿Castle Technologies no hace lo mismo?",
      a: "Castle Technologies se enfoca en trading algorítmico general en crypto. Orbit es específico para prediction markets, con agentes especializados por tipo de evento y un motor de cobertura B2B (Orbit Risk) que no existe en ningún competidor.",
    },
    {
      q: "¿Por qué USDC y no pesos?",
      a: "USDC es el estándar de liquidación en Polymarket y la mayoría de prediction markets. Bridge by Stripe permite conversión instantánea MXN/USD a USDC. El inversionista puede aportar en MXN, USD o USDC.",
    },
    {
      q: "¿Plan si no se cierra el raise?",
      a: "Orbit Capital ya está generando revenue con management + performance fees. El equipo puede operar con runway extendido. El raise acelera la escala, pero no es existencial para la operación.",
    },
  ];

  return (
    <div className="invest-slide-inner">
      <div className="invest-section-label stagger-item">ANEXO: FAQ</div>
      <h2 className="invest-slide-title stagger-item">
        Preguntas <G>frecuentes.</G>
      </h2>
      <p className="invest-slide-subtitle stagger-item" style={{ fontSize: "clamp(15px, 2vw, 17px)", color: "#A1A1AA", maxWidth: 700, lineHeight: 1.6, marginBottom: 16 }}>
        Respuestas directas a las preguntas más comunes de inversionistas sobre el modelo, la regulación y el riesgo.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          marginTop: 24,
        }}
      >
        {faqs.map((faq, i) => (
          <div key={i} className="invest-card stagger-item" style={{ padding: 0, overflow: "hidden" }}>
            <button
              onClick={() => setExpanded(expanded === i ? null : i)}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 20px",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#FAFAFA",
                fontSize: 14,
                fontWeight: 600,
                textAlign: "left",
              }}
            >
              <span>{faq.q}</span>
              <span
                style={{
                  color: "#3B82F6",
                  fontSize: 18,
                  fontWeight: 700,
                  flexShrink: 0,
                  marginLeft: 12,
                  transform:
                    expanded === i ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              >
                +
              </span>
            </button>
            {expanded === i && (
              <div
                style={{
                  padding: "0 20px 16px",
                  fontSize: 13,
                  color: "#A1A1AA",
                  lineHeight: 1.6,
                }}
              >
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Slide 20 — Anexo: Entity Structure ── */
function AnexoEntitySlide() {
  return (
    <div className="invest-slide-inner">
      <div className="invest-section-label stagger-item">
        ANEXO: ENTITY STRUCTURE
      </div>
      <h2 className="invest-slide-title stagger-item">
        Estructura <G>tri-jurisdiccional.</G>
      </h2>
      <p className="invest-slide-subtitle stagger-item" style={{ fontSize: "clamp(15px, 2vw, 17px)", color: "#A1A1AA", maxWidth: 700, lineHeight: 1.6, marginBottom: 16 }}>
        Arquitectura legal diseñada para operar en mercados de predicción desde tres jurisdicciones complementarias.
      </p>

      <div
        className="stagger-item"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0,
          marginTop: 40,
        }}
      >
        {/* Cayman */}
        <div
          className="invest-card"
          style={{
            padding: "24px 40px",
            textAlign: "center",
            width: 320,
            borderColor: "rgba(251,191,36,0.3)",
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#FBBF24",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 4,
            }}
          >
            Cayman Islands
          </div>
          <div
            style={{ fontSize: 16, fontWeight: 700, color: "#FAFAFA" }}
          >
            Holding / Fund Structure
          </div>
        </div>

        {/* Connector line */}
        <div
          style={{
            width: 2,
            height: 32,
            background: "linear-gradient(180deg, #FBBF24, #3B82F6)",
          }}
        />

        {/* Dubai */}
        <div
          className="invest-card"
          style={{
            padding: "24px 40px",
            textAlign: "center",
            width: 320,
            borderColor: "rgba(59,130,246,0.3)",
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#3B82F6",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 4,
            }}
          >
            Dubai DIFC
          </div>
          <div
            style={{ fontSize: 16, fontWeight: 700, color: "#FAFAFA" }}
          >
            GP / Operating Entity
          </div>
        </div>

        {/* Connector line */}
        <div
          style={{
            width: 2,
            height: 32,
            background: "linear-gradient(180deg, #3B82F6, #10B981)",
          }}
        />

        {/* Mexico */}
        <div
          className="invest-card"
          style={{
            padding: "24px 40px",
            textAlign: "center",
            width: 320,
            borderColor: "rgba(16,185,129,0.3)",
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#10B981",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 4,
            }}
          >
            México SAPI
          </div>
          <div
            style={{ fontSize: 16, fontWeight: 700, color: "#FAFAFA" }}
          >
            Services / Local Operations
          </div>
        </div>
      </div>

      {/* Flow arrows description */}
      <div
        className="stagger-item invest-responsive-grid-3"
        style={{ marginTop: 32 }}
      >
        <div className="invest-card" style={{ padding: 16, textAlign: "center" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#FBBF24" }}>
            Cayman
          </div>
          <div style={{ fontSize: 11, color: "#A1A1AA", marginTop: 4 }}>
            LP capital, fund admin, regulatory shelter
          </div>
        </div>
        <div className="invest-card" style={{ padding: 16, textAlign: "center" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#3B82F6" }}>
            Dubai
          </div>
          <div style={{ fontSize: 11, color: "#A1A1AA", marginTop: 4 }}>
            Trading ops, custody, DFSA/VARA license
          </div>
        </div>
        <div className="invest-card" style={{ padding: 16, textAlign: "center" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#10B981" }}>
            México
          </div>
          <div style={{ fontSize: 11, color: "#A1A1AA", marginTop: 4 }}>
            Team, Risk SaaS, B2B sales, local ops
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Slide 21 — Anexo: Stakeholder Flow ── */
function AnexoStakeholderSlide() {
  const stakeholders = [
    {
      title: "Inversionistas / LPs",
      desc: "Aportan capital → reciben retornos + reportes",
      color: "#3B82F6",
      icon: <Icon name="wallet" size={24} color="#3B82F6" />,
    },
    {
      title: "Empresas / Corporativos",
      desc: "Contratan cobertura → protección ante eventos",
      color: "#10B981",
      icon: <Icon name="building" size={24} color="#10B981" />,
    },
    {
      title: "Infraestructura",
      desc: "Fireblocks, Bridge, TRES FinOS, Polymarket",
      color: "#8B5CF6",
      icon: <Icon name="cpu" size={24} color="#8B5CF6" />,
    },
    {
      title: "Equipo Fundador",
      desc: "Opera, ejecuta, escala",
      color: "#FBBF24",
      icon: <Icon name="users" size={24} color="#FBBF24" />,
    },
  ];

  return (
    <div className="invest-slide-inner">
      <div className="invest-section-label stagger-item">
        ANEXO: STAKEHOLDER FLOW
      </div>
      <h2 className="invest-slide-title stagger-item">
        Flujo de <G>stakeholders.</G>
      </h2>
      <p className="invest-slide-subtitle stagger-item" style={{ fontSize: "clamp(15px, 2vw, 17px)", color: "#A1A1AA", maxWidth: 700, lineHeight: 1.6, marginBottom: 16 }}>
        Cada stakeholder aporta y recibe valor del ecosistema Orbit, creando un ciclo de crecimiento autosostenido.
      </p>

      <div
        className="invest-responsive-grid-2"
        style={{ marginTop: 32 }}
      >
        {stakeholders.map((s, i) => (
          <div
            key={i}
            className="invest-card invest-card-accent stagger-item"
            style={{
              padding: 24,
              "--accent-color": s.color,
              borderLeft: `3px solid ${s.color}`,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 12,
              }}
            >
              <span style={{ fontSize: 24 }}>{s.icon}</span>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: s.color,
                }}
              >
                {s.title}
              </div>
            </div>
            <p
              style={{
                fontSize: 14,
                color: "#A1A1AA",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Slide 22 — Anexo: Ecosistema de Partners ── */
function AnexoEcosistemaSlide() {
  const columns = [
    {
      title: "Infraestructura",
      color: "#3B82F6",
      partners: ["Polymarket", "Fireblocks", "Bridge by Stripe", "TRES FinOS"],
    },
    {
      title: "Clientes / Pipeline",
      color: "#10B981",
      partners: [
        "Sofía Salud",
        "Corporativos MX",
        "Aseguradoras",
        "Banca PYME",
      ],
    },
    {
      title: "Aceleradores / Red",
      color: "#8B5CF6",
      partners: [
        "Bitso Accelerator",
        "Y Combinator",
        "Sara Velásquez",
        "Delta Protect",
      ],
    },
  ];

  return (
    <div className="invest-slide-inner">
      <div className="invest-section-label stagger-item">
        ANEXO: ECOSISTEMA
      </div>
      <h2 className="invest-slide-title stagger-item">
        Red de <G>partners y aliados.</G>
      </h2>
      <p className="invest-slide-subtitle stagger-item" style={{ fontSize: "clamp(15px, 2vw, 17px)", color: "#A1A1AA", maxWidth: 700, lineHeight: 1.6, marginBottom: 16 }}>
        Red de partners tecnológicos, clientes en pipeline y aceleradoras que potencian la operación de Orbit.
      </p>

      <div
        className="invest-responsive-grid-3"
        style={{ marginTop: 32 }}
      >
        {columns.map((col, i) => (
          <div key={i} className="invest-card stagger-item" style={{ padding: 24 }}>
            <div
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: col.color,
                marginBottom: 20,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              {col.title}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {col.partners.map((p, j) => (
                <div
                  key={j}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: `${col.color}15`,
                      border: `1px solid ${col.color}33`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 700,
                      color: col.color,
                      flexShrink: 0,
                    }}
                  >
                    {p.charAt(0)}
                  </div>
                  <span
                    style={{
                      fontSize: 14,
                      color: "#FAFAFA",
                      fontWeight: 500,
                    }}
                  >
                    {p}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export {
  RoadmapSlide,
  ProyeccionesSlide,
  EquipoSlide,
  TheAskSlide,
  CierreSlide,
  AnexoReturnSlide,
  AnexoFlywheelSlide,
  AnexoFAQSlide,
  AnexoEntitySlide,
  AnexoStakeholderSlide,
  AnexoEcosistemaSlide,
};
