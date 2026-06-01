import React, { useState, useEffect, useRef } from "react";

/* ── Gradient text helper ── */
function G({ children }) {
  return <span className="invest-gradient-text">{children}</span>;
}

/* ── SVG icon helper ── */
function SlideIcon({ name, size = 20, color = "#3B82F6" }) {
  const icons = {
    bot: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect x="2" y="8" width="20" height="12" rx="2"/><path d="M6 12h.01M18 12h.01"/><path d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"/></svg>,
    gitCompare: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 012 2v7M11 18H8a2 2 0 01-2-2V9"/></svg>,
    brain: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a5 5 0 015 5c0 .9-.2 1.7-.7 2.5A5 5 0 0119 14a5 5 0 01-3 4.6V22h-4v-3.4A5 5 0 019 14a5 5 0 012.7-4.5A5 5 0 0112 2z"/><path d="M12 2v6M8.5 8.5l3.5 2M15.5 8.5l-3.5 2"/></svg>,
    clock: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    bank: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M3 10h18M12 3l9 7H3l9-7z"/><path d="M5 10v8M9 10v8M15 10v8M19 10v8"/></svg>,
    bolt: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/></svg>,
    trending: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>,
    chart: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18M7 16l4-4 4 4 5-5"/><path d="M17 11h4v4"/></svg>,
    shield: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    lock: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>,
    barChart: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9M13 17V5M8 17v-3"/></svg>,
    repeat: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 014-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>,
    target: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
    building: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V7l8-4v18M13 21V3l6 4v14"/><path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01M17 9v.01M17 12v.01M17 15v.01"/></svg>,
    globe: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
    rocket: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/></svg>,
    flag: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"/></svg>,
    scale: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M3 7l3-4 3 4M15 7l3-4 3 4M3 7v2a3 3 0 003 3 3 3 0 003-3V7M15 7v2a3 3 0 003 3 3 3 0 003-3V7"/></svg>,
    cpu: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>,
    activity: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    check: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  };
  return <span style={{ display: "inline-flex", lineHeight: 0, alignItems: "center", justifyContent: "center" }}>{icons[name] || null}</span>;
}

/* ── Status badge helper ── */
function StatusBadge({ label, color }) {
  return (
    <span className="invest-status-badge" style={{ background: `${color}15`, color }}>
      {label}
    </span>
  );
}

/* ── Count-up hook ── */
function useCountUp(ref, target, duration = 1200) {
  const [value, setValue] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!ref.current || hasRun.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const start = performance.now();
          const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, target, duration]);

  return value;
}

/* ════════════════════════════════════════════
   SLIDE 1 — CoverSlide
   ════════════════════════════════════════════ */
function CoverSlide() {
  return (
    <div className="invest-slide-inner" style={{ position: "relative", textAlign: "center" }}>
      <svg className="invest-cover-orbital-rings" width="520" height="520" viewBox="0 0 520 520">
        <ellipse cx="260" cy="260" rx="180" ry="60" stroke="#3B82F6" strokeOpacity="0.12" strokeWidth="1" style={{ animation: "orbit-rotate 20s linear infinite" }} />
        <ellipse cx="260" cy="260" rx="230" ry="80" stroke="#8B5CF6" strokeOpacity="0.08" strokeWidth="1" style={{ animation: "orbit-rotate 30s linear infinite reverse" }} />
        <ellipse cx="260" cy="260" rx="250" ry="120" stroke="#12B981" strokeOpacity="0.06" strokeWidth="1" style={{ animation: "orbit-rotate 40s linear infinite" }} />
      </svg>

      <h1 className="invest-slide-title stagger-item" style={{ fontSize: "clamp(20px, 4.5vw, 52px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
        Building the <G>prediction markets</G> Infrastructure for LATAM.
      </h1>

      <p className="invest-slide-subtitle stagger-item" style={{ fontSize: "clamp(13px, 2.5vw, 19px)", color: "#A1A1AA", maxWidth: 600, margin: "16px auto 0", lineHeight: 1.6, position: "relative", zIndex: 1 }}>
        Quantitative capital and risk systems for event-based markets
      </p>

      <div className="stagger-item" style={{ display: "inline-block", marginTop: 24, position: "relative", zIndex: 1 }}>
        <span className="invest-badge" style={{ background: "#1F2937", border: "1px solid #27272A", color: "#E5E7EB", padding: "8px 20px", borderRadius: 999, fontSize: 13, fontWeight: 600 }}>
          Pre-Seed Round
        </span>
      </div>

      <div className="stagger-item" style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center", fontSize: 14, color: "#71717A", marginTop: 32, position: "relative", zIndex: 1 }}>
        <span>invest@orbitcapital.ai</span>
        <span style={{ color: "#3B82F6" }}>&bull;</span>
        <span>orbitcapital.ai</span>
        <span style={{ color: "#3B82F6" }}>&bull;</span>
        <span>Ciudad de M&eacute;xico, M&eacute;xico</span>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   SLIDE 2 — ProblemaSlide
   ════════════════════════════════════════════ */
function ProblemaSlide() {
  const cards = [
    {
      keyword: "Muchas ineficiencias",
      desc: "Los mercados de predicci\u00f3n generan se\u00f1ales cuantitativas de alta precisi\u00f3n que ning\u00fan actor institucional latinoamericano aprovecha.",
      stat: "$50B+",
      statLabel: "volumen sin capturar en LATAM",
    },
    {
      keyword: "Riesgos sin cobertura",
      desc: "Las empresas no tienen acceso a instrumentos eficientes para cubrirse ante volatilidad pol\u00edtica, econ\u00f3mica o clim\u00e1tica.",
      stat: "50,000+",
      statLabel: "empresas sin acceso a cobertura",
    },
    {
      keyword: "Sin infraestructura",
      desc: "No existe un stack tecnol\u00f3gico unificado que conecte inteligencia de mercado, cobertura empresarial y validaci\u00f3n cuantitativa.",
      stat: "$0",
      statLabel: "soluci\u00f3n integrada existente",
    },
  ];

  return (
    <div className="invest-slide-inner">
      <div className="invest-section-label stagger-item">EL PROBLEMA</div>
      <h2 className="invest-slide-title stagger-item">
        LATAM opera a ciegas frente a la incertidumbre.
      </h2>
      <p className="invest-slide-subtitle stagger-item">
        Tres problemas estructurales que impiden a LATAM capitalizar la revoluci&oacute;n de los mercados de predicci&oacute;n.
      </p>

      <div className="invest-grid-3">
        {cards.map((c, i) => (
          <div key={i} className="invest-card invest-card--gradient-top stagger-item">
            <div style={{ fontSize: 14, fontWeight: 700, color: "#12B981", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.04em" }}>
              {c.keyword}
            </div>
            <p style={{ fontSize: 14, color: "#A1A1AA", lineHeight: 1.6, margin: 0, marginBottom: 20 }}>
              {c.desc}
            </p>
            <div style={{ borderTop: "1px solid #27272A", paddingTop: 16 }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#FFFFFF" }}>{c.stat}</div>
              <div style={{ fontSize: 12, color: "#71717A", marginTop: 4 }}>{c.statLabel}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   SLIDE 3 — OportunidadSlide
   ════════════════════════════════════════════ */
function OportunidadSlide() {
  const cards = [
    {
      icon: <SlideIcon name="gitCompare" size={20} color="#3B82F6" />,
      title: "Precios desalineados entre plataformas",
      desc: "El mismo evento cotiza a distintas probabilidades en Polymarket, Kalshi y otras plataformas. Eso viola los principios b\u00e1sicos de convergencia de precios y abre ventanas de arbitraje sistem\u00e1tico.",
    },
    {
      icon: <SlideIcon name="brain" size={20} color="#3B82F6" />,
      title: "Sesgos en la formaci\u00f3n de precios",
      desc: "Los precios en estos mercados no siempre reflejan informaci\u00f3n real. La mayor\u00eda de los participantes son usuarios individuales que toman decisiones basadas en emociones o en narrativas del momento. Eso crea errores en los precios que pueden ser identificados y aprovechados con modelos cuantitativos disciplinados.",
    },
    {
      icon: <SlideIcon name="clock" size={20} color="#3B82F6" />,
      title: "Reacci\u00f3n lenta a nueva informaci\u00f3n",
      desc: "Cuando aparece nueva informaci\u00f3n, el mercado no la incorpora de inmediato. Ese retraso crea oportunidades que pueden anticiparse con modelos cuantitativos.",
    },
    {
      icon: <SlideIcon name="bank" size={20} color="#3B82F6" />,
      title: "Falta capital profesional",
      desc: "A diferencia de otros mercados financieros, los prediction markets a\u00fan tienen poca participaci\u00f3n institucional. Eso hace que los errores de precio duren m\u00e1s tiempo y generen m\u00e1s oportunidades.",
    },
  ];

  return (
    <div className="invest-slide-inner">
      <div className="invest-section-label stagger-item">LA OPORTUNIDAD</div>
      <h2 className="invest-slide-title stagger-item">
        Los prediction markets est&aacute;n llenos de ineficiencias
      </h2>
      <p className="invest-slide-subtitle stagger-item">
        Cuatro fuentes estructurales de ineficiencia que Orbit explota sistem&aacute;ticamente.
      </p>

      <div className="invest-grid-2">
        {cards.map((c, i) => (
          <div key={i} className="invest-card invest-card--gradient-top stagger-item">
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(59,130,246,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: 16 }}>
              {c.icon}
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF", marginBottom: 10 }}>
              {c.title}
            </div>
            <p style={{ fontSize: 14, color: "#A1A1AA", lineHeight: 1.6, margin: 0 }}>
              {c.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   SLIDE 4 — SolucionSlide
   ════════════════════════════════════════════ */
function SolucionSlide() {
  const cards = [
    {
      header: "\u00bfQU\u00c9 ES ORBIT CAPITAL?",
      title: <>El <span style={{ color: "#3B82F6" }}>primer</span> quant hedge fund de prediction markets</>,
      desc: "Trading algor\u00edtmico en Polymarket con 13 agentes de AI aut\u00f3nomos. Acceso privado y onboarding digital a trav\u00e9s de nuestra plataforma para inversionistas.",
    },
    {
      header: "\u00bfC\u00d3MO FUNCIONA?",
      title: <>Stack de <span style={{ color: "#3B82F6" }}>inteligencia</span> autónoma 24/7</>,
      desc: "NLP en espa\u00f1ol para se\u00f1ales de mercado LATAM. Modelos ML de alta precisi\u00f3n para pol\u00edtica, macro, clima y commodities. Reconciliaci\u00f3n GAAP/IFRS con TRES FinOS.",
    },
    {
      header: "\u00bfPOR QU\u00c9 GANAREMOS?",
      title: <><span style={{ color: "#12B981" }}>Ventaja</span> estructural de primer mover en LATAM</>,
      desc: "Retorno objetivo 18-25% bruto. Drawdown controlado <15%. Infraestructura de custodia MPC con Fireblocks. El stack que tard\u00f3 a\u00f1os construir, operando en producci\u00f3n.",
    },
  ];

  return (
    <div className="invest-slide-inner">
      <div className="invest-section-label stagger-item">LA SOLUCI&Oacute;N</div>
      <h2 className="invest-slide-title stagger-item">
        Alfa cuantitativo en prediction markets.
      </h2>
      <p className="invest-slide-subtitle stagger-item">
        Un fondo algor&iacute;tmico construido sobre tres pilares: <strong>inteligencia aut&oacute;noma</strong>, <strong>ejecuci&oacute;n institucional</strong> y <strong>cobertura de riesgo</strong>.
      </p>

      <div className="invest-grid-3">
        {cards.map((c, i) => (
          <div key={i} className="invest-card stagger-item">
            <div style={{ fontSize: 11, fontWeight: 600, color: "#71717A", letterSpacing: "0.08em", marginBottom: 10, textTransform: "uppercase" }}>
              {c.header}
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#FFFFFF", marginBottom: 12, lineHeight: 1.3 }}>
              {c.title}
            </div>
            <p style={{ fontSize: 14, color: "#A1A1AA", lineHeight: 1.6, margin: 0, marginBottom: 16 }}>
              {c.desc}
            </p>
            <span className="invest-badge-live">&#9679; LIVE</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   SLIDE 5 — MotorValidacionSlide
   ════════════════════════════════════════════ */
function MotorValidacionSlide() {
  const stats = [
    { value: "18-25%", color: "#3B82F6", label: "Retorno anual target (bruto)" },
    { value: "13", color: "#FFFFFF", label: "Agentes de AI aut\u00f3nomos" },
    { value: "<15%", color: "#EF4444", label: "Drawdown m\u00e1ximo (DDCI)" },
  ];

  const infraRows = [
    { label: "Custodia", icon: <SlideIcon name="lock" size={16} color="#3B82F6" />, value: "Fireblocks MPC" },
    { label: "On/off ramp", icon: <SlideIcon name="repeat" size={16} color="#8B5CF6" />, value: "Bridge by Stripe" },
    { label: "Reconciliaci\u00f3n", icon: <SlideIcon name="barChart" size={16} color="#12B981" />, value: "TRES FinOS (GAAP/IFRS)" },
    { label: "Plataforma", icon: <SlideIcon name="activity" size={16} color="#3B82F6" />, value: "Polymarket EXCLUSIVO" },
    { label: "Mercados objetivo", icon: <SlideIcon name="target" size={16} color="#EF4444" />, value: "Pol\u00edtica \u00b7 Macro \u00b7 Clima \u00b7 Commodities" },
  ];

  return (
    <div className="invest-slide-inner">
      <div className="invest-section-label stagger-item">MOTOR DE VALIDACI&Oacute;N</div>
      <h2 className="invest-slide-title stagger-item">
        Fondo cuantitativo de prediction markets.
      </h2>
      <p className="invest-slide-subtitle stagger-item">
        Trading algor&iacute;tmico en Polymarket con 13 agentes de AI aut&oacute;nomos.
      </p>

      <div className="invest-grid-2 stagger-item">
        {/* Left column — stat cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {stats.map((s, i) => (
            <div key={i} className="invest-card" style={{ textAlign: "center", padding: 20 }}>
              <div style={{ fontSize: 32, fontWeight: 800, color: s.color }}>{s.value}</div>
              <div style={{ fontSize: 13, color: "#A1A1AA", marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Right column — infrastructure table */}
        <div className="invest-card" style={{ padding: 0, overflow: "hidden" }}>
          {infraRows.map((row, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", padding: "14px 20px", borderBottom: i < infraRows.length - 1 ? "1px solid #27272A" : "none", gap: 14 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#71717A", width: 120, flexShrink: 0 }}>{row.label}</div>
              <div style={{ fontSize: 16, width: 28, textAlign: "center" }}>{row.icon}</div>
              <div style={{ fontSize: 14, color: "#E5E7EB", fontWeight: 500 }}>{row.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="invest-slide-footer stagger-item" style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", fontSize: 12, color: "#71717A", marginTop: 24 }}>
        <span>&#9679; Fee: 2% management + 20% performance</span>
        <span>&#9679; Hurdle rate: high-water mark</span>
        <span>&#9679; Sharpe objetivo: &gt; 1.5</span>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   SLIDE 6 — EdgeSlide
   ════════════════════════════════════════════ */
function EdgeSlide() {
  const cards = [
    {
      icon: <SlideIcon name="bot" size={20} color="#3B82F6" />,
      title: "Agentes de trading especializados por sector",
      desc: "No usamos un solo bot general. Tenemos 13 agentes cuantitativos especializados en distintos tipos de eventos como pol\u00edtica, macro, clima o crypto. Cada uno est\u00e1 dise\u00f1ado para detectar oportunidades en su propio mercado.",
    },
    {
      icon: <SlideIcon name="activity" size={20} color="#3B82F6" />,
      title: "Construcci\u00f3n de estimaciones de probabilidad real para cada evento.",
      desc: "Estimamos probabilidades y luego las comparamos con los precios del mercado en distintas plataformas. Cuando el mercado est\u00e1 mal calibrado, ejecutamos la operaci\u00f3n.",
    },
    {
      icon: <SlideIcon name="bolt" size={20} color="#3B82F6" />,
      title: "Asignaci\u00f3n adaptativa de capital",
      desc: "Asignamos m\u00e1s capital donde nuestros modelos detectan mayor ventaja. El tama\u00f1o de cada posici\u00f3n se ajusta seg\u00fan riesgo y oportunidad.",
    },
    {
      icon: <SlideIcon name="shield" size={20} color="#3B82F6" />,
      title: "Mecanismo de protecci\u00f3n de capital",
      desc: "El sistema monitorea el riesgo en tiempo real. Si las p\u00e9rdidas aumentan, la exposici\u00f3n se reduce autom\u00e1ticamente. Mientras las p\u00e9rdidas crecen, el capital en riesgo se reduce. El objetivo es proteger el capital.",
    },
  ];

  return (
    <div className="invest-slide-inner">
      <div className="invest-section-label stagger-item">THE EDGE</div>
      <h2 className="invest-slide-title stagger-item">
        C&oacute;mo generamos alpha: cuatro ventajas t&eacute;cnicas.
      </h2>
      <p className="invest-slide-subtitle stagger-item">
        Cada ventaja explota una ineficiencia estructural que desaparece solo cuando el mercado se institucionaliza &mdash; y somos los primeros.
      </p>

      <div className="invest-grid-2">
        {cards.map((c, i) => (
          <div key={i} className="invest-card stagger-item">
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(59,130,246,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: 16 }}>
              {c.icon}
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF", marginBottom: 10 }}>
              {c.title}
            </div>
            <p style={{ fontSize: 14, color: "#A1A1AA", lineHeight: 1.6, margin: 0 }}>
              {c.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   SLIDE 7 — CoberturaSlide
   ════════════════════════════════════════════ */
function CoberturaSlide() {
  const sinOrbit = [
    "Sin instrumentos de cobertura disponibles en LATAM",
    "Exposici\u00f3n pol\u00edtica a riesgo pol\u00edtico y macroecon\u00f3mico",
    "Decisiones basadas en intuici\u00f3n, no en datos cuantitativos",
    "P\u00e9rdidas no cubiertas ante eventos inesperados",
    "Sin validaci\u00f3n de probabilidades con datos de mercado",
  ];

  const conOrbit = [
    "Cobertura a medida con prediction markets en tiempo real",
    "Dashboard de riesgo con alertas predictivas autom\u00e1ticas",
    "Probabilidades validadas cuantitativamente por Orbit Capital",
    "Protecci\u00f3n antes de que el evento ocurra",
    "ROI demostrable: cobertura que genera retorno neto positivo",
  ];

  const clients = [
    { label: "Corporativos", icon: "building", color: "#3B82F6" },
    { label: "Aseguradoras", icon: "shield", color: "#8B5CF6" },
    { label: "Agros / Energ\u00eda", icon: "bolt", color: "#12B981" },
    { label: "Banca PYME", icon: "bank", color: "#FBBF24" },
  ];

  return (
    <div className="invest-slide-inner">
      <div className="invest-section-label stagger-item">MOTOR DE COBERTURA</div>
      <h2 className="invest-slide-title stagger-item">
        La inteligencia de Capital, aplicada a las empresas.
      </h2>
      <p className="invest-slide-subtitle stagger-item">
        La misma infraestructura cuantitativa traducida en coberturas para empresas LATAM.
      </p>

      <div className="invest-grid-2 stagger-item">
        {/* SIN ORBIT */}
        <div className="invest-card" style={{ borderTop: "3px solid #EF4444" }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#EF4444", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            SIN ORBIT
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {sinOrbit.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14, color: "#A1A1AA", lineHeight: 1.5 }}>
                <span style={{ color: "#EF4444", fontWeight: 700, flexShrink: 0 }}>&times;</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CON ORBIT RISK */}
        <div className="invest-card" style={{ borderTop: "3px solid #12B981" }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#12B981", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            CON ORBIT RISK
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {conOrbit.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14, color: "#A1A1AA", lineHeight: 1.5 }}>
                <span style={{ color: "#12B981", flexShrink: 0, display: "inline-flex", alignItems: "center" }}><SlideIcon name="check" size={16} color="#12B981" /></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="stagger-item" style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginTop: 24 }}>
        {clients.map((c, i) => (
          <div key={i} style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "8px 16px", borderRadius: 8,
            background: `${c.color}10`, border: `1px solid ${c.color}30`,
            fontSize: 13, fontWeight: 600, color: c.color,
          }}>
            <SlideIcon name={c.icon} size={16} color={c.color} />
            {c.label}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   SLIDE 8 — ModeloNegocioSlide
   ════════════════════════════════════════════ */
function ModeloNegocioSlide() {
  const capitalMetrics = [
    { value: "~$280K", label: "AUM objetivo" },
    { value: "18-25%", label: "Retorno bruto" },
    { value: ">1.5", label: "Sharpe objetivo" },
    { value: "<15%", label: "Drawdown m\u00e1x" },
  ];

  const riskMetrics = [
    { value: ">70%", label: "Margen bruto" },
    { value: "$5K-50K", label: "Ticket B2B" },
    { value: "30-90d", label: "Ciclo ventas" },
    { value: ">6x", label: "LTV/CAC" },
  ];

  return (
    <div className="invest-slide-inner">
      <div className="invest-section-label stagger-item">MODELO DE NEGOCIO</div>
      <h2 className="invest-slide-title stagger-item">
        Dos motores de ingresos complementarios y recurrentes.
      </h2>
      <p className="invest-slide-subtitle stagger-item">
        Estructura diversificada que combina fees de gesti&oacute;n de activos con ingresos recurrentes SaaS.
      </p>

      <div className="stagger-item invest-responsive-grid-4">
        {/* Orbit Capital — spans columns 1-2 */}
        <div className="invest-card" style={{ gridColumn: "1 / 3" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: "#3B82F6" }}>Orbit Capital</span>
            <StatusBadge label="HEDGE FUND" color="#3B82F6" />
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#FFFFFF", marginBottom: 6 }}>
            2% mgmt + 20% performance
          </div>
          <p style={{ fontSize: 13, color: "#A1A1AA", margin: 0 }}>
            Estructura est&aacute;ndar de fondos institucionales
          </p>
        </div>

        {/* Orbit Risk — spans columns 3-4 */}
        <div className="invest-card" style={{ gridColumn: "3 / 5" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: "#12B981" }}>Orbit Risk</span>
            <StatusBadge label="B2B SAAS" color="#12B981" />
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#FFFFFF", marginBottom: 6 }}>
            Plataforma + comisi&oacute;n (2-5%)
          </div>
          <p style={{ fontSize: 13, color: "#A1A1AA", margin: 0 }}>
            Fee por volumen de cobertura ejecutada
          </p>
        </div>

        {/* Interleaved: capital metrics (col 1-2) + risk metrics (col 3-4) on same rows */}
        {[0, 1].map((row) => (
          <React.Fragment key={`row-${row}`}>
            {capitalMetrics.slice(row * 2, row * 2 + 2).map((m, i) => (
              <div key={`cap-${row}-${i}`} className="invest-card" style={{ textAlign: "center", padding: 16, borderTop: "2px solid #3B82F6" }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#FFFFFF" }}>{m.value}</div>
                <div style={{ fontSize: 11, color: "#71717A", marginTop: 4 }}>{m.label}</div>
              </div>
            ))}
            {riskMetrics.slice(row * 2, row * 2 + 2).map((m, i) => (
              <div key={`risk-${row}-${i}`} className="invest-card" style={{ textAlign: "center", padding: 16, borderTop: "2px solid #12B981" }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#FFFFFF" }}>{m.value}</div>
                <div style={{ fontSize: 11, color: "#71717A", marginTop: 4 }}>{m.label}</div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   SLIDE 9 — MercadoSlide
   ════════════════════════════════════════════ */
function MercadoSlide() {
  const segments = [
    { label: "TAM", value: "$200B+", color: "#3B82F6", desc: "Mercado global de prediction markets + hedging corporativo" },
    { label: "SAM", value: "$50B+", color: "#8B5CF6", desc: "Mercado addressable en LATAM con infraestructura digital" },
    { label: "SOM", value: "$5.3B", color: "#12B981", desc: "Segmento capturable en 5 a\u00f1os con la estrategia actual" },
  ];

  return (
    <div className="invest-slide-inner">
      <div className="invest-section-label stagger-item">OPORTUNIDAD DE MERCADO</div>
      <h2 className="invest-slide-title stagger-item">
        Un mercado de $200B+ sin soluci&oacute;n institucional en LATAM.
      </h2>
      <p className="invest-slide-subtitle stagger-item" style={{ fontSize: "clamp(15px, 2vw, 17px)", color: "#A1A1AA", maxWidth: 700, lineHeight: 1.6, marginBottom: 32 }}>
        Prediction markets y cobertura corporativa convergen en un mercado masivo sin infraestructura institucional en la regi&oacute;n.
      </p>

      <div className="invest-grid-3 stagger-item">
        {segments.map((s, i) => (
          <div key={i} className="invest-card" style={{ textAlign: "center", borderTop: `3px solid ${s.color}` }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: s.color, letterSpacing: "0.1em", marginBottom: 8 }}>
              {s.label}
            </div>
            <div style={{ fontSize: 36, fontWeight: 800, color: "#FFFFFF", marginBottom: 8 }}>
              {s.value}
            </div>
            <p style={{ fontSize: 13, color: "#A1A1AA", lineHeight: 1.5, margin: 0 }}>
              {s.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="invest-slide-footer stagger-item" style={{ fontSize: 12, color: "#52525B", marginTop: 24, textAlign: "center", lineHeight: 1.6 }}>
        Fuentes: Polymarket, Kalshi, PredictIt, McKinsey, Deloitte LATAM. Validaci&oacute;n cruzada con vol&uacute;menes on-chain y reportes sectoriales 2024-2025.
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   SLIDE 10 — TraccionSlide
   ════════════════════════════════════════════ */
function TraccionSlide() {
  const milestones = [
    {
      status: "live",
      badge: "\u25CF LIVE",
      title: "Orbit Capital operativo",
      desc: "13 agentes AI aut\u00f3nomos en producci\u00f3n. Trading algor\u00edtmico activo en Polymarket con infraestructura de custodia MPC.",
    },
    {
      status: "progress",
      badge: "IN PROGRESS",
      title: "Orbit Risk: primeros clientes",
      desc: "Copy trading activo. Pipeline de clientes corporativos en M\u00e9xico para cobertura de riesgo pol\u00edtico y macro.",
    },
    {
      status: "progress",
      badge: "IN PROGRESS",
      title: "Dubai / DFSA incorporation",
      desc: "Proceso de incorporaci\u00f3n en DIFC para operaci\u00f3n regulada en mercados de predicci\u00f3n desde Emiratos \u00c1rabes.",
    },
    {
      status: "progress",
      badge: "IN PROGRESS",
      title: "Orbit Intel Knowledge Graph",
      desc: "Base de conocimiento estructurada que alimenta a los 13 agentes con datos de 47+ fuentes en tiempo real.",
    },
    {
      status: "live",
      badge: "\u25CF LIVE",
      title: "Equipo fundador completo",
      desc: "CTO, CEO y advisors con experiencia en fintech, AI y mercados financieros en LATAM.",
    },
    {
      status: "progress",
      badge: "IN PROGRESS",
      title: "Bitso Accelerator: aplicaci\u00f3n",
      desc: "Aplicaci\u00f3n al programa de aceleraci\u00f3n de Bitso para acceso a infraestructura cripto en LATAM.",
    },
  ];

  return (
    <div className="invest-slide-inner">
      <div className="invest-section-label stagger-item">TRACCI&Oacute;N</div>
      <h2 className="invest-slide-title stagger-item">
        De cero a infraestructura operativa en 90 d&iacute;as.
      </h2>
      <p className="invest-slide-subtitle stagger-item" style={{ fontSize: "clamp(15px, 2vw, 17px)", color: "#A1A1AA", maxWidth: 700, lineHeight: 1.6, marginBottom: 32 }}>
        Equipo completo, infraestructura en producci&oacute;n y pipeline activo &mdash; todo antes de cerrar la ronda.
      </p>

      <div className="invest-grid-3">
        {milestones.map((m, i) => (
          <div key={i} className="invest-card stagger-item">
            <span className={m.status === "live" ? "invest-badge-live" : "invest-badge-progress"}>
              {m.badge}
            </span>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF", marginTop: 12, marginBottom: 8 }}>
              {m.title}
            </div>
            <p style={{ fontSize: 13, color: "#A1A1AA", lineHeight: 1.5, margin: 0 }}>
              {m.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   SLIDE 11 — GoToMarketSlide
   ════════════════════════════════════════════ */
function GoToMarketSlide() {
  const phases = [
    {
      months: "MESES 1\u20134",
      title: "Community Led",
      tag: "COMUNIDAD",
      tagColor: "#3B82F6",
      desc: "Construir comunidad de traders cuantitativos en LATAM. Contenido educativo, se\u00f1ales gratuitas y acceso early a la plataforma. Generar confianza y validaci\u00f3n social antes de escalar.",
      kpi: "500+ traders activos",
    },
    {
      months: "MESES 5\u20138",
      title: "Institutional Push",
      tag: "CAPITAL INSTITUCIONAL",
      tagColor: "#8B5CF6",
      desc: "Onboarding de capital institucional y family offices. Track record verificable, reportes GAAP/IFRS y estructura de fondo regulada. Expandir AUM con inversionistas calificados.",
      kpi: "$50K MXN MRR",
    },
    {
      months: "MESES 9\u201312",
      title: "Exchange Partnerships",
      tag: "DISTRIBUCI\u00d3N \u2192 MARKET MAKER",
      tagColor: "#12B981",
      desc: "Partnerships con exchanges y plataformas de predicci\u00f3n. Proveer liquidez como market maker. Orbit Risk como infraestructura B2B para corporativos LATAM.",
      kpi: "$500K USD AUM + 10 B2B",
    },
  ];

  return (
    <div className="invest-slide-inner">
      <div className="invest-section-label stagger-item">GO TO MARKET STRATEGY</div>
      <h2 className="invest-slide-title stagger-item">
        De comunidad trader a market maker en LATAM
      </h2>
      <p className="invest-slide-subtitle stagger-item" style={{ fontSize: "clamp(15px, 2vw, 17px)", color: "#A1A1AA", maxWidth: 700, lineHeight: 1.6, marginBottom: 32 }}>
        Estrategia en tres fases para capturar el mercado de prediction markets y cobertura B2B en LATAM.
      </p>

      <div className="invest-grid-3">
        {phases.map((p, i) => (
          <div key={i} className="invest-card stagger-item">
            <div style={{ fontSize: 11, fontWeight: 700, color: "#71717A", letterSpacing: "0.1em", marginBottom: 8 }}>
              {p.months}
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#FFFFFF", marginBottom: 10 }}>
              {p.title}
            </div>
            <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, color: p.tagColor, background: `${p.tagColor}15`, padding: "4px 10px", borderRadius: 4, letterSpacing: "0.06em", marginBottom: 14 }}>
              {p.tag}
            </span>
            <p style={{ fontSize: 13, color: "#A1A1AA", lineHeight: 1.6, margin: 0, marginBottom: 16 }}>
              {p.desc}
            </p>
            <div style={{ borderTop: "1px solid #27272A", paddingTop: 12, fontSize: 13, fontWeight: 700, color: "#FFFFFF" }}>
              KPI: {p.kpi}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Named exports ── */
export {
  CoverSlide,
  ProblemaSlide,
  OportunidadSlide,
  SolucionSlide,
  MotorValidacionSlide,
  EdgeSlide,
  CoberturaSlide,
  ModeloNegocioSlide,
  MercadoSlide,
  TraccionSlide,
  GoToMarketSlide,
  G,
  SlideIcon,
  useCountUp,
};
