import React, { useState, useEffect, useCallback, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./pitch.css";

const SLIDES = [
  { id: "cover", label: "Cover" },
  { id: "ecosystem", label: "Ecosistema" },
  { id: "prediction-markets", label: "Prediction Markets" },
  { id: "timing", label: "Timing" },
  { id: "technology", label: "Tecnología" },
  { id: "opportunity", label: "Oportunidad" },
  { id: "risk", label: "Risk Management" },
  { id: "capital-flow", label: "Capital Flow" },
  { id: "platform", label: "Plataforma" },
  { id: "security", label: "Seguridad" },
  { id: "team", label: "Equipo" },
  { id: "roadmap", label: "Roadmap" },
  { id: "contact", label: "Contacto" },
];

function getSlideIndexFromHash(hash) {
  if (!hash) return 0;
  const id = hash.replace("#", "");
  const idx = SLIDES.findIndex((s) => s.id === id);
  return idx >= 0 ? idx : 0;
}

/* ── SVG Icon helper ── */
function SlideIcon({ name, size = 20, color = "#3B82F6" }) {
  const icons = {
    wallet: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/><circle cx="18" cy="14" r="1"/></svg>,
    refresh: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>,
    bank: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M3 10h18M12 3l9 7H3l9-7z"/><path d="M5 10v8M9 10v8M15 10v8M19 10v8"/></svg>,
    signal: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16"/></svg>,
    bot: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect x="2" y="8" width="20" height="12" rx="2"/><path d="M6 12h.01M18 12h.01"/><path d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"/></svg>,
    check: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
    shield: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    link: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>,
    fileText: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
    lock: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>,
    copy: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>,
    maximize: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"/></svg>,
  };
  return icons[name] || null;
}

/* ── Gradient text helper ── */
function G({ children }) {
  return <span className="gradient-text">{children}</span>;
}

/* ── Full-screen orbital background with planets ── */
function OrbitalBackground() {
  const rings = [
    { rx: 380, ry: 180, angle: -15, color: "#3B82F6", opacity: 0.08, speed: 60 },
    { rx: 500, ry: 220, angle: 25, color: "#8B5CF6", opacity: 0.06, speed: 80 },
    { rx: 320, ry: 140, angle: -40, color: "#12B981", opacity: 0.07, speed: 50 },
    { rx: 600, ry: 280, angle: 10, color: "#EF4444", opacity: 0.04, speed: 100 },
    { rx: 440, ry: 200, angle: 50, color: "#3B82F6", opacity: 0.05, speed: 70 },
  ];

  const planets = [
    { radius: 180, speed: "18s", size: 8, color: "#3B82F6", glow: "rgba(59,130,246,0.4)" },
    { radius: 250, speed: "25s", size: 10, color: "#12B981", glow: "rgba(18,185,129,0.4)" },
    { radius: 150, speed: "14s", size: 6, color: "#8B5CF6", glow: "rgba(139,92,246,0.4)" },
    { radius: 320, speed: "35s", size: 12, color: "#EF4444", glow: "rgba(239,68,68,0.3)" },
    { radius: 220, speed: "22s", size: 7, color: "#FBBF24", glow: "rgba(251,191,36,0.4)" },
    { radius: 400, speed: "45s", size: 14, color: "#3B82F6", glow: "rgba(59,130,246,0.3)" },
  ];

  const stars = Array.from({ length: 20 }, (_, i) => ({
    top: `${Math.round((i * 47 + 13) % 100)}%`,
    left: `${Math.round((i * 31 + 7) % 100)}%`,
    size: i % 3 === 0 ? 2 : 1,
    opacity: 0.15 + (i % 5) * 0.06,
  }));

  return (
    <div className="orbital-bg">
      {/* Star field */}
      {stars.map((s, i) => (
        <div
          key={`star-${i}`}
          className="orbital-star"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
          }}
        />
      ))}
      {/* Orbital ring ellipses */}
      <svg
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        {rings.map((r, i) => (
          <ellipse
            key={i}
            cx="960"
            cy="540"
            rx={r.rx}
            ry={r.ry}
            fill="none"
            stroke={r.color}
            strokeOpacity={r.opacity}
            strokeWidth="1"
            strokeDasharray="8 6"
            transform={`rotate(${r.angle} 960 540)`}
            style={{ animation: `orbit-rotate ${r.speed}s linear infinite${i % 2 === 0 ? "" : " reverse"}` }}
          />
        ))}
      </svg>
      {/* Orbiting planets */}
      {planets.map((p, i) => (
        <div
          key={`planet-${i}`}
          className="orbital-planet"
          style={{
            "--orbit-radius": `${p.radius}px`,
            "--orbit-speed": p.speed,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size}px ${p.glow}`,
            animationDelay: `${i * -4}s`,
          }}
        />
      ))}
    </div>
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

/* ── Shared components ── */
function StatusBadge({ label, color }) {
  return (
    <span className="status-badge" style={{ background: `${color}15`, color }}>
      {label}
    </span>
  );
}

/* ════════════════════════════════════════════
   SLIDE COMPONENTS
   ════════════════════════════════════════════ */

function CoverSlide() {
  return (
    <div className="cta-slide" style={{ position: "relative" }}>
      <svg className="cover-orbital-rings" width="520" height="520" viewBox="0 0 520 520">
        <ellipse cx="260" cy="260" rx="180" ry="60" stroke="#3B82F6" strokeOpacity="0.12" strokeWidth="1" style={{ animation: "orbit-rotate 20s linear infinite" }} />
        <ellipse cx="260" cy="260" rx="230" ry="80" stroke="#8B5CF6" strokeOpacity="0.08" strokeWidth="1" style={{ animation: "orbit-rotate 30s linear infinite reverse" }} />
        <ellipse cx="260" cy="260" rx="250" ry="120" stroke="#12B981" strokeOpacity="0.06" strokeWidth="1" style={{ animation: "orbit-rotate 40s linear infinite" }} />
      </svg>
      <img src="/orbit-logo-dark.png" alt="Orbit" style={{ height: 48, marginBottom: 8, position: "relative", zIndex: 1 }} />
      <h1 style={{ fontSize: "clamp(28px, 4.5vw, 52px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: 800, position: "relative", zIndex: 1 }}>
        Building the <G>prediction markets infrastructure</G> for LATAM.
      </h1>
      <p className="stagger-item" style={{ fontSize: "clamp(15px, 2vw, 19px)", color: "#A1A1AA", maxWidth: 600, lineHeight: 1.6, position: "relative", zIndex: 1 }}>
        Quantitative capital and risk systems for event-based markets
      </p>
      <div className="stagger-item" style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center", fontSize: 12, color: "#71717A", marginTop: 20, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600, position: "relative", zIndex: 1 }}>
        <span>AI-Native</span><span style={{ color: "#3B82F6" }}>·</span>
        <span>Quant Infrastructure</span><span style={{ color: "#3B82F6" }}>·</span>
        <span>LATAM-First</span>
      </div>
      <div className="stagger-item" style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center", fontSize: 14, color: "#71717A", marginTop: 16, position: "relative", zIndex: 1 }}>
        <span>invest@orbitcapital.ai</span>
        <span>orbitcapital.ai</span>
        <span>Ciudad de México, México</span>
      </div>
    </div>
  );
}

function EcosystemSlide() {
  const cards = [
    { title: "Orbit Capital", sub: "Quant Hedge Fund", desc: "Fondo cuantitativo que opera en prediction markets con 13 agentes AI. Retorno objetivo: 18% anual, Sharpe >1.5.", color: "#3B82F6", metric: "13 agentes AI", badge: "LIVE", badgeColor: "#12B981" },
    { title: "Orbit Risk", sub: "B2B Product", desc: "Cobertura empresarial basada en prediction markets. Hoy: copy trading del fondo cuantitativo. Mañana: B2B infrastructure.", color: "#3B82F6", metric: "Copy trading live", badge: "PILOT", badgeColor: "#FBBF24" },
    { title: "Intelligence", sub: "Infrastructure", desc: "Motor de inteligencia interno. Knowledge Graph + 13 agentes AI que alimentan Capital y Risk. No es un producto comercial.", color: "#8B5CF6", metric: "47 data sources", badge: "INTERNAL", badgeColor: "#8B5CF6" },
  ];
  return (
    <div className="pitch-slide-inner">
      <div className="section-label stagger-item">Ecosistema</div>
      <h2 className="slide-title stagger-item">Orbit transforma la <G>incertidumbre en retorno.</G></h2>
      <p className="slide-subtitle stagger-item">Somos una fintech AI-native que construye infraestructura de prediction markets para América Latina.</p>
      <div className="ecosystem-diagram stagger-item">
        <svg viewBox="0 0 400 120" fill="none">
          <text x="70" y="30" fill="#3B82F6" fontSize="11" fontWeight="700" textAnchor="middle">CAPITAL</text>
          <text x="330" y="30" fill="#3B82F6" fontSize="11" fontWeight="700" textAnchor="middle">RISK</text>
          <text x="200" y="115" fill="#8B5CF6" fontSize="11" fontWeight="700" textAnchor="middle">INTELLIGENCE</text>
          <line x1="110" y1="25" x2="290" y2="25" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="6 4" style={{ animation: "dash-flow 1.5s linear infinite" }} />
          <line x1="310" y1="40" x2="220" y2="100" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="6 4" style={{ animation: "dash-flow 1.5s linear infinite", animationDelay: "0.5s" }} />
          <line x1="180" y1="100" x2="90" y2="40" stroke="#12B981" strokeWidth="1.5" strokeDasharray="6 4" style={{ animation: "dash-flow 1.5s linear infinite", animationDelay: "1s" }} />
          <circle cx="70" cy="25" r="4" fill="#3B82F6" />
          <circle cx="330" cy="25" r="4" fill="#3B82F6" />
          <circle cx="200" cy="108" r="4" fill="#8B5CF6" />
        </svg>
      </div>
      <div className="slide-grid-3 mobile-carousel">
        {cards.map((c, i) => (
          <div key={i} className="slide-card slide-card-accent stagger-item" style={{ "--accent-color": c.color }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <div style={{ fontSize: 18, fontWeight: 700 }}>{c.title}</div>
              <StatusBadge label={c.badge} color={c.badgeColor} />
            </div>
            <div style={{ fontSize: 12, color: c.color, fontWeight: 600, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.06em" }}>{c.sub}</div>
            <p style={{ fontSize: 14, color: "#A1A1AA", lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
            <div style={{ marginTop: 12, fontSize: 13, fontWeight: 700, color: c.color }}>{c.metric}</div>
          </div>
        ))}
      </div>
      <div className="slide-footer stagger-item">Intel alimenta a Riesgo y Capital. Riesgo protege a las empresas. Capital valida señales con capital real.</div>
    </div>
  );
}

function PredictionMarketsSlide() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const vol = useCountUp(ref1, 33.4, 1400);
  const users = useCountUp(ref2, 688, 1200);

  const volumeData = [
    { year: "2020", value: 0.02, color: "#3B82F633" },
    { year: "2021", value: 0.08, color: "#3B82F644" },
    { year: "2022", value: 0.3, color: "#3B82F655" },
    { year: "2023", value: 1.2, color: "#3B82F688" },
    { year: "2024", value: 9, color: "#3B82F6BB" },
    { year: "2025", value: 33.4, color: "#3B82F6" },
  ];
  const maxVol = 33.4;

  const stats = [
    { value: "$11B+", label: "Volumen combinado 2025" },
    { value: "$50B+", label: "Transacciones mensuales" },
    { value: "$1T", label: "Proyección volumen 2030" },
    { value: "$11B", label: "Valuación Kalshi (Series E)" },
  ];
  return (
    <div className="pitch-slide-inner">
      <div className="section-label stagger-item">Prediction Markets</div>
      <h2 className="slide-title stagger-item">La herramienta de pronóstico <G>más precisa del mundo.</G></h2>
      <div className="stagger-item" style={{ display: "flex", gap: 32, flexWrap: "wrap", margin: "24px 0 16px" }}>
        <div ref={ref1}>
          <div className="slide-stat-big" style={{ color: "#3B82F6" }}>${vol}B</div>
          <div className="slide-stat-label">Volumen Polymarket 2025 (130x crecimiento desde 2024)</div>
        </div>
        <div ref={ref2}>
          <div className="slide-stat-big" style={{ color: "#3B82F6" }}>{users}K</div>
          <div className="slide-stat-label">Usuarios activos mensuales (Feb 2026 — all-time high)</div>
        </div>
        <div>
          <span className="live-badge">LIVE</span>
        </div>
      </div>
      <div className="volume-chart stagger-item">
        {volumeData.map((d, i) => (
          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="volume-bar" style={{ height: `${(d.value / maxVol) * 100}%`, background: d.color, width: "100%", animationDelay: `${i * 0.1}s` }} />
            <div className="volume-bar-label">{d.year}</div>
          </div>
        ))}
      </div>
      <div className="stagger-item" style={{ display: "flex", justifyContent: "center", gap: 24, fontSize: 12, color: "#A1A1AA", marginBottom: 16, flexWrap: "wrap" }}>
        <span><strong style={{ color: "#3B82F6" }}>Polymarket:</strong> $33.4B</span>
        <span><strong style={{ color: "#8B5CF6" }}>Kalshi:</strong> $4.2B</span>
        <span><strong style={{ color: "#71717A" }}>Others:</strong> $3.4B</span>
      </div>
      <div className="slide-grid-4 mobile-stats-grid stagger-item">
        {stats.map((s, i) => (
          <div key={i} className="slide-card" style={{ textAlign: "center", padding: "20px 16px" }}>
            <div className="slide-stat-big" style={{ fontSize: 22, fontWeight: 800, color: "#FFFFFF" }}>{s.value}</div>
            <div className="slide-stat-label" style={{ fontSize: 12, color: "#A1A1AA", marginTop: 6 }}>{s.label}</div>
          </div>
        ))}
      </div>
      <div className="insight-callout stagger-item">
        <strong>Solo 2.3%</strong> del volumen total proviene de LATAM — representando una oportunidad inmediata de <strong>$770M+</strong> en mercados sub-penetrados.
      </div>
    </div>
  );
}

function TimingSlide() {
  const columns = [
    { title: "Hypergrowth", metric: "130x", metricSub: "crecimiento YoY", desc: "De $9B (2024) a $33.4B (2025) solo en Polymarket. Volumen combinado supera $50B. Proyección $1T para 2030.", color: "#3B82F6" },
    { title: "Adopción institucional", metric: "75%", metricSub: "evaluando PM", desc: "DRW, SIG, Jump Trading y Citadel ya operan activamente. 75% de firmas de prop trading en EE.UU. evaluando prediction markets.", color: "#3B82F6" },
    { title: "Regulación favorable", metric: "$11B", metricSub: "valuación Kalshi", desc: "Kalshi Series E (Dec 2025). FanDuel Predicts, DraftKings Predictions ya en mercado. Marco regulatorio consolidándose.", color: "#8B5CF6" },
    { title: "LATAM virgen", metric: "0", metricSub: "competidores", desc: "Nadie está construyendo infraestructura de prediction markets para América Latina. Orbit es el primero.", color: "#EF4444" },
  ];
  const timelineEvents = [
    { label: "2020", active: true },
    { label: "Polymarket", active: true },
    { label: "2024", active: true },
    { label: "Kalshi $11B", active: true },
    { label: "2026", active: true, current: true },
    { label: "2028", active: false },
    { label: "2030 · $1T", active: false },
  ];
  return (
    <div className="pitch-slide-inner">
      <div className="section-label stagger-item">Timing</div>
      <h2 className="slide-title stagger-item">La ventana de oportunidad <G>está abierta.</G></h2>
      <div className="timing-timeline stagger-item">
        {timelineEvents.map((e, i) => (
          <React.Fragment key={i}>
            <div className={`timing-timeline-dot ${e.active ? "active" : ""}`} style={e.current ? { background: "#12B981", boxShadow: "0 0 12px rgba(18,185,129,0.5)" } : {}}>
              <span className="timing-timeline-label">{e.label}</span>
            </div>
            {i < timelineEvents.length - 1 && (
              <div className={`timing-timeline-line ${e.active && timelineEvents[i + 1].active ? "active" : ""}`} />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="slide-grid-4 mobile-carousel" style={{ marginTop: 16 }}>
        {columns.map((c, i) => (
          <div key={i} className="slide-card slide-card-accent stagger-item" style={{ "--accent-color": c.color }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <div className="timing-pulse" style={{ background: c.color, "--pulse-color": `${c.color}66` }} />
              <div className="timing-metric" style={{ color: c.color }}>{c.metric}</div>
            </div>
            <div style={{ fontSize: 10, color: "#71717A", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>{c.metricSub}</div>
            <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: c.color }}>{c.title}</div>
            <p style={{ fontSize: 13, color: "#A1A1AA", lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
          </div>
        ))}
      </div>
      <div className="insight-callout stagger-item">
        <strong>Window 2026-2028:</strong> El momento de construir infraestructura es ahora, antes de que el mercado madure y las barreras de entrada se eleven.
      </div>
    </div>
  );
}

function TechnologySlide() {
  const capabilities = [
    { title: "Signal replication + 13 agentes AI", metric: "13", metricLabel: "agents", desc: "Detectamos patrones de participantes informados (insiders, fondos, analistas) y replicamos sus señales antes de que el mercado las absorba. Operación 24/7 sin intervención humana.", stack: "Python · LangGraph · Claude" },
    { title: "Probability surface modeling", metric: "47", metricLabel: "sources", desc: "Knowledge Graph que construye superficies de probabilidad multidimensionales. Identifica dislocaciones estructurales de precio entre plataformas en tiempo real.", stack: "Neo4j · FastAPI · Redis" },
    { title: "Ejecución sub-150ms + adaptive allocation", metric: "<150", metricLabel: "ms", desc: "Asignación dinámica de capital que responde a regímenes de volatilidad. Time-series y state-space modeling para optimización continua del portafolio.", stack: "Rust · WebSocket · Fireblocks" },
    { title: "Arquitectura Zero-Trust", metric: "0", metricLabel: "SPOF", desc: "Cada agente opera con permisos mínimos. Ningún agente individual puede comprometer el sistema completo. Infraestructura institucional desde el día uno.", stack: "MPC · TEE · mTLS" },
  ];
  const flowSteps = ["Data Ingestion", "Knowledge Graph", "Signal Detection", "Execution", "Risk Check", "Settlement"];
  return (
    <div className="pitch-slide-inner">
      <div className="section-label stagger-item">Tecnología</div>
      <h2 className="slide-title stagger-item"><G>13 agentes de IA.</G> Un Knowledge Graph. Ejecución sub-150ms.</h2>
      <div className="slide-grid-2" style={{ marginTop: 24 }}>
        {capabilities.map((c, i) => (
          <div key={i} className="slide-card stagger-item">
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 8 }}>
              <span className="tech-metric" style={{ color: "#3B82F6" }}>{c.metric}</span>
              <span style={{ fontSize: 11, color: "#71717A", textTransform: "uppercase", letterSpacing: "0.06em" }}>{c.metricLabel}</span>
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8, color: "#3B82F6" }}>{c.title}</div>
            <p style={{ fontSize: 13, color: "#A1A1AA", lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
            <div style={{ marginTop: 10, fontSize: 10, color: "#71717A", letterSpacing: "0.04em", fontFamily: "monospace" }}>{c.stack}</div>
          </div>
        ))}
      </div>
      <div className="tech-flow-steps stagger-item">
        {flowSteps.map((step, i) => (
          <React.Fragment key={i}>
            <div className="tech-flow-step">{step}</div>
            {i < flowSteps.length - 1 && <span className="tech-flow-arrow">→</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function OpportunitySlide() {
  const rows = [
    ["Retornos correlacionados al S&P 500", "Alpha no correlacionado — 18% retorno objetivo, Sharpe >1.5", "Corr: 0.85 → <0.2"],
    ["Dependencia de analistas con sesgo humano", "Explotación de ineficiencias estructurales entre plataformas", "Sesgo: alto → 0"],
    ["Sin acceso a prediction markets", "13 agentes AI con adaptive capital allocation 24/7", "Cobertura: 0 → 142 mkts"],
    ["Instrumentos de cobertura caros y rígidos", "Risk architecture institucional con DDCI y de-risking convexo", "Costo: alto → bajo"],
  ];
  return (
    <div className="pitch-slide-inner">
      <div className="section-label stagger-item">Oportunidad</div>
      <h2 className="slide-title stagger-item">Accede a <G>alpha no correlacionado</G> a mercados tradicionales.</h2>
      <div className="stagger-item" style={{ marginTop: 32 }}>
        <div className="pitch-comparison-grid">
          <div style={{ fontSize: 12, fontWeight: 700, color: "#EF4444", textTransform: "uppercase", letterSpacing: "0.08em", paddingBottom: 12 }}>SIN ORBIT</div>
          <div />
          <div style={{ fontSize: 12, fontWeight: 700, color: "#3B82F6", textTransform: "uppercase", letterSpacing: "0.08em", paddingBottom: 12 }}>CON ORBIT</div>
        </div>
        {rows.map((r, i) => (
          <div key={i} className="comparison-row">
            <div className="comparison-without">{r[0]}</div>
            <div className="comparison-arrow">→</div>
            <div className="comparison-with">
              {r[1]}
              <div style={{ fontSize: 10, color: "#3B82F6", fontWeight: 700, marginTop: 4, letterSpacing: "0.04em" }}>{r[2]}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="opportunity-charts stagger-item">
        <div className="opportunity-chart-box">
          <div className="opportunity-chart-label" style={{ color: "#EF4444" }}>Traditional</div>
          <svg viewBox="0 0 200 50" style={{ width: "100%", height: 50 }}>
            <polyline points="0,25 20,15 40,35 60,10 80,40 100,20 120,38 140,12 160,32 180,28 200,22" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div className="opportunity-chart-box">
          <div className="opportunity-chart-label" style={{ color: "#3B82F6" }}>Orbit</div>
          <svg viewBox="0 0 200 50" style={{ width: "100%", height: 50 }}>
            <polyline points="0,40 20,38 40,36 60,34 80,30 100,28 120,25 140,22 160,18 180,15 200,12" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div className="opportunity-metrics stagger-item">
        <div className="opportunity-metric">
          <div className="opportunity-metric-value" style={{ color: "#3B82F6" }}>{">"}1.5</div>
          <div className="opportunity-metric-label">Sharpe Ratio</div>
        </div>
        <div className="opportunity-metric">
          <div className="opportunity-metric-value" style={{ color: "#12B981" }}>{"<"}0.2</div>
          <div className="opportunity-metric-label">Corr. S&P 500</div>
        </div>
        <div className="opportunity-metric">
          <div className="opportunity-metric-value" style={{ color: "#FBBF24" }}>-12%</div>
          <div className="opportunity-metric-label">Max Drawdown</div>
        </div>
        <div className="opportunity-metric">
          <div className="opportunity-metric-value" style={{ color: "#8B5CF6" }}>18%</div>
          <div className="opportunity-metric-label">Retorno Objetivo</div>
        </div>
      </div>
    </div>
  );
}

function RiskSlide() {
  const ddci = [
    { label: "Diario -2%", desc: "Pausa automática de nuevas posiciones", pct: 25, color: "#FBBF24", exposure: "85%" },
    { label: "Semanal -5%", desc: "Reducción de tamaño de posiciones activas", pct: 50, color: "#F59E0B", exposure: "60%" },
    { label: "Acumulado -12%", desc: "Reevaluación estratégica completa", pct: 75, color: "#EF4444", exposure: "30%" },
    { label: "Peak -25%", desc: "Full shutdown — liquidación ordenada", pct: 100, color: "#DC2626", exposure: "0%" },
  ];
  const derisking = [
    { label: "-5%", pct: 25 },
    { label: "-8%", pct: 50 },
    { label: "-10%", pct: 75 },
    { label: "-12%", pct: 100 },
  ];
  return (
    <div className="pitch-slide-inner">
      <div className="section-label stagger-item">Risk Management</div>
      <h2 className="slide-title stagger-item">Arquitectura de manejo de riesgo <G>institucional.</G></h2>
      <p className="slide-subtitle stagger-item">Respuesta convexa a pérdidas: a mayor drawdown, mayor reducción de exposición. El sistema se protege a sí mismo.</p>
      <div className="slide-grid-2" style={{ marginTop: 16 }}>
        <div className="slide-card stagger-item">
          <div style={{ fontSize: 14, fontWeight: 700, color: "#FBBF24", marginBottom: 16 }}>DDCI — Dynamic Drawdown Control Index</div>
          {ddci.map((d, i) => (
            <div key={i} className="ddci-bar">
              <div className="ddci-label">{d.label}</div>
              <div className="ddci-track">
                <div className="ddci-fill" style={{ width: `${d.pct}%`, background: d.color }} />
              </div>
              <div className="ddci-desc">{d.desc}</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: d.color, minWidth: 32, textAlign: "right" }}>{d.exposure}</div>
            </div>
          ))}
        </div>
        <div className="slide-card stagger-item">
          <div style={{ fontSize: 14, fontWeight: 700, color: "#EF4444", marginBottom: 16 }}>De-risking progresivo convexo</div>
          <div className="convexity-curve">
            <svg viewBox="0 0 220 80" width="220" height="80">
              <defs>
                <linearGradient id="convexGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#FBBF24" />
                  <stop offset="100%" stopColor="#EF4444" />
                </linearGradient>
              </defs>
              <text x="0" y="75" fill="#71717A" fontSize="8">Drawdown</text>
              <text x="150" y="12" fill="#71717A" fontSize="8">Reducción exposición</text>
              <path d="M10,70 Q60,68 100,50 T210,10" fill="none" stroke="url(#convexGrad)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="10" y1="75" x2="210" y2="75" stroke="#333" strokeWidth="0.5" />
              <line x1="10" y1="10" x2="10" y2="75" stroke="#333" strokeWidth="0.5" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {derisking.map((d, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#FFFFFF", minWidth: 40 }}>{d.label}</div>
                <div style={{ flex: 1, height: 24, background: "rgba(255,255,255,0.04)", borderRadius: 4, overflow: "hidden" }}>
                  <div className="derisking-bar" style={{ width: `${d.pct}%`, background: `linear-gradient(90deg, #EF444466, #EF4444)` }} />
                </div>
                <div style={{ fontSize: 12, color: "#A1A1AA", minWidth: 80 }}>{d.pct}% exposición</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="risk-mini-cards stagger-item">
        <div className="risk-mini-card">
          <div className="risk-mini-card-title"><span style={{ color: "#3B82F6" }}>01</span> Position sizing</div>
          <div className="risk-mini-card-desc">Kelly criterion modificado para prediction markets. Tamaño máximo por posición: 5% NAV.</div>
        </div>
        <div className="risk-mini-card">
          <div className="risk-mini-card-title"><span style={{ color: "#8B5CF6" }}>02</span> Correlation modeling</div>
          <div className="risk-mini-card-desc">Monitoreo continuo de correlaciones entre posiciones. Descomposición de factores en tiempo real.</div>
        </div>
        <div className="risk-mini-card">
          <div className="risk-mini-card-title"><span style={{ color: "#EF4444" }}>03</span> Black swan protocol</div>
          <div className="risk-mini-card-desc">Protocolo de emergencia ante eventos extremos. Recovery: re-entry gradual en 5 días.</div>
        </div>
      </div>
    </div>
  );
}

function CapitalFlowSlide() {
  const steps = [
    { num: "01", title: "COMMIT", desc: "Invierte en MXN, USD, USDC o USDT.", icon: <SlideIcon name="wallet" size={24} color="#3B82F6" />, timing: "T+0" },
    { num: "02", title: "CONVERT", desc: "Fiat a USDC vía Bridge by Stripe.", icon: <SlideIcon name="refresh" size={24} color="#8B5CF6" />, timing: "<2 min" },
    { num: "03", title: "CUSTODY", desc: "Custodia Fireblocks MPC. $10T+ asegurados.", icon: <SlideIcon name="bank" size={24} color="#3B82F6" />, timing: "Instantáneo" },
    { num: "04", title: "DISPERSE", desc: "Wallets de trading con límites automáticos.", icon: <SlideIcon name="signal" size={24} color="#12B981" />, timing: "<30s" },
    { num: "05", title: "TRADE", desc: "Agentes AI ejecutan 24/7 en Polymarket.", icon: <SlideIcon name="bot" size={24} color="#8B5CF6" />, timing: "24/7, <150ms" },
    { num: "06", title: "SETTLE", desc: "P&L consolidado. Retiros invierten el flujo.", icon: <SlideIcon name="check" size={24} color="#12B981" />, timing: "T+1" },
  ];
  return (
    <div className="pitch-slide-inner">
      <div className="section-label stagger-item">Capital Flow</div>
      <h2 className="slide-title stagger-item">De tu capital a <G>alpha en seis pasos.</G></h2>
      <div className="flow-steps stagger-item" style={{ marginTop: 40 }}>
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <div className="flow-step slide-card">
              <div className="flow-step-icon">{s.icon}</div>
              <div className="flow-step-num">{s.num}</div>
              <div className="flow-step-title">{s.title}</div>
              <div className="flow-step-desc">{s.desc}</div>
              <div className="flow-step-detail">{s.timing}</div>
            </div>
            {i < steps.length - 1 && (
              <div className="flow-connector" style={{ animationDelay: `${i * 0.3}s` }}>→</div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="slide-footer stagger-item" style={{ textAlign: "center" }}>
        Cada paso es auditable on-chain. Retiros invierten el flujo: SETTLE → CUSTODY → CONVERT → COMMIT.
      </div>
    </div>
  );
}

function PlatformSlide() {
  const features = [
    { title: "Dashboard en tiempo real", desc: "NAV diario, performance attribution, visualización de portafolio." },
    { title: "Onboarding 100% digital", desc: "KYC/AML automatizado, sin papel, compliance desde el día uno." },
    { title: "Depósitos y retiros", desc: "Fiat y crypto procesados vía Bridge by Stripe." },
    { title: "Reportes mensuales", desc: "Statements detallados con audit trail completo." },
  ];

  const statSets = [
    { nav: "$1,245,800", mtd: "+2.34%", ytd: "+8.91%", sharpe: "1.67" },
    { nav: "$1,246,120", mtd: "+2.36%", ytd: "+8.93%", sharpe: "1.67" },
    { nav: "$1,246,450", mtd: "+2.37%", ytd: "+8.94%", sharpe: "1.68" },
    { nav: "$1,245,980", mtd: "+2.35%", ytd: "+8.92%", sharpe: "1.67" },
  ];
  const pnlSets = [
    ["+$12,450", "+$8,200", "+$5,100", "-$2,300"],
    ["+$12,520", "+$8,180", "+$5,140", "-$2,280"],
    ["+$12,480", "+$8,230", "+$5,080", "-$2,310"],
  ];
  const positions = [
    { name: "US Elections", color: "#12B981" },
    { name: "Fed Rate Cut", color: "#12B981" },
    { name: "LATAM Trade", color: "#12B981" },
    { name: "EU Policy", color: "#EF4444" },
  ];

  const [statIdx, setStatIdx] = useState(0);
  const [pnlIdx, setPnlIdx] = useState(0);
  const [cursorPos, setCursorPos] = useState({ top: "78%", left: "15%" });
  const [highlightEl, setHighlightEl] = useState(null);
  const cursorRef = useRef(null);
  const animFrame = useRef(null);

  // Ticking stats
  useEffect(() => {
    const id1 = setInterval(() => setStatIdx(i => (i + 1) % statSets.length), 3500);
    const id2 = setInterval(() => setPnlIdx(i => (i + 1) % pnlSets.length), 5000);
    return () => { clearInterval(id1); clearInterval(id2); };
  }, []);

  // Cursor animation loop
  useEffect(() => {
    const waypoints = [
      { top: 78, left: 15, dur: 800, highlight: "pos-0" },
      { top: 78, left: 15, dur: 1200, highlight: "pos-0" },
      { top: 30, left: 65, dur: 1000, highlight: "stat-mtd" },
      { top: 30, left: 65, dur: 1000, highlight: "stat-mtd" },
      { top: 14, left: 75, dur: 800, highlight: "tab" },
      { top: 52, left: 50, dur: 1200, highlight: "chart" },
      { top: 52, left: 50, dur: 800, highlight: "chart" },
      { top: 6, left: 85, dur: 600, highlight: "live" },
      { top: 68, left: 80, dur: 1000, highlight: "pos-1" },
      { top: 68, left: 80, dur: 800, highlight: "pos-1" },
      { top: 30, left: 25, dur: 1000, highlight: "stat-nav" },
      { top: 78, left: 15, dur: 1200, highlight: null },
    ];
    let idx = 0;
    let running = true;

    const step = () => {
      if (!running) return;
      const wp = waypoints[idx];
      setCursorPos({ top: `${wp.top}%`, left: `${wp.left}%` });
      setHighlightEl(wp.highlight);
      idx = (idx + 1) % waypoints.length;
      animFrame.current = setTimeout(step, wp.dur);
    };
    step();
    return () => { running = false; clearTimeout(animFrame.current); };
  }, []);

  const stats = statSets[statIdx];
  const pnls = pnlSets[pnlIdx];

  const isHighlighted = (name) => highlightEl === name ? "portal-hover-highlight" : "";

  return (
    <div className="pitch-slide-inner">
      <div className="section-label stagger-item">Plataforma</div>
      <h2 className="slide-title stagger-item"><G>Transparencia total.</G> Tu portafolio en tiempo real.</h2>
      <div className="slide-grid-2" style={{ marginTop: 32, gap: 32 }}>
        <div className="stagger-item">
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {features.map((f, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#3B82F6", marginTop: 6, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#FAFAFA", marginBottom: 4 }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: "#A1A1AA", lineHeight: 1.5 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="portal-mockup stagger-item">
          <div className="portal-layout">
            {/* Sidebar */}
            <div className="portal-sidebar">
              {[0, 1, 2, 3, 4].map(i => (
                <div key={i} className={`portal-sidebar-icon ${i === 0 ? "active" : ""}`} />
              ))}
            </div>
            {/* Main */}
            <div className="portal-main">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: "#A1A1AA", textTransform: "uppercase", letterSpacing: "0.08em" }}>Investor Portal</div>
                <span className={`live-badge ${isHighlighted("live")}`}>LIVE</span>
              </div>
              {/* Tabs */}
              <div className="portal-tabs">
                <div className={`portal-tab active ${isHighlighted("tab")}`}>Overview</div>
                <div className="portal-tab">Positions</div>
                <div className="portal-tab">Analytics</div>
              </div>
              {/* Stats */}
              <div className="pitch-responsive-grid-2" style={{ marginBottom: 12 }}>
                <div className={`portal-stat ${isHighlighted("stat-nav")}`}><div className="portal-stat-value">{stats.nav}</div><div className="portal-stat-label">NAV</div></div>
                <div className={`portal-stat ${isHighlighted("stat-mtd")}`}><div className="portal-stat-value" style={{ color: "#12B981" }}>{stats.mtd}</div><div className="portal-stat-label">MTD Return</div></div>
                <div className="portal-stat"><div className="portal-stat-value" style={{ color: "#12B981" }}>{stats.ytd}</div><div className="portal-stat-label">YTD Return</div></div>
                <div className="portal-stat"><div className="portal-stat-value">{stats.sharpe}</div><div className="portal-stat-label">Sharpe</div></div>
              </div>
              {/* Sparkline chart */}
              <div className={isHighlighted("chart")} style={{ marginBottom: 12, borderRadius: 8 }}>
                <div style={{ fontSize: 9, color: "#71717A", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>30D Performance</div>
                <svg viewBox="0 0 300 48" style={{ width: "100%", height: 36 }} preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polyline className="portal-chart-line" style={{ "--chart-length": 350 }} points="0,40 30,35 60,38 90,28 120,30 150,20 180,24 210,15 240,18 270,10 300,12" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
                  <polygon className="portal-sparkline-area" points="0,40 30,35 60,38 90,28 120,30 150,20 180,24 210,15 240,18 270,10 300,12 300,48 0,48" fill="url(#sparkGrad)" />
                </svg>
              </div>
              {/* Positions */}
              <div style={{ fontSize: 10, fontWeight: 600, color: "#A1A1AA", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>Active Positions</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {positions.map((p, i) => (
                  <div key={i} className={`portal-position ${isHighlighted(`pos-${i}`)}`}>
                    <span style={{ color: "#CCCCCC" }}>{p.name}</span>
                    <span style={{ color: p.color, fontWeight: 700 }}>{pnls[i]}</span>
                  </div>
                ))}
              </div>
              {/* Activity */}
              <div className="portal-activity">
                <div className="portal-activity-dot" />
                <span>Last updated: just now</span>
              </div>
            </div>
          </div>
          {/* Animated cursor */}
          <svg ref={cursorRef} className="portal-cursor" width="16" height="20" viewBox="0 0 16 20" style={{ top: cursorPos.top, left: cursorPos.left, transition: "top 0.8s cubic-bezier(0.4,0,0.2,1), left 0.8s cubic-bezier(0.4,0,0.2,1)" }}>
            <path d="M0 0L12 9L5 9.5L8 16L6 17L3 10.5L0 14Z" fill="white" stroke="#111" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="slide-footer stagger-item">Cada movimiento de capital es trazable de punta a punta.</div>
    </div>
  );
}

function SecuritySlide() {
  const items = [
    { title: "Fireblocks MPC", desc: "Custodia multi-party computation. SOC 2 Type II. $10T+ procesados. Intel SGX TEEs.", color: "#3B82F6", badges: ["SOC 2", "MPC"] },
    { title: "Bridge by Stripe", desc: "On/off ramp fiat-to-USDC regulado. MXN y USD a USDC instantáneo.", color: "#8B5CF6", badges: ["FinCEN"] },
    { title: "Coinbase Agentic Wallets", desc: "Wallets para agentes AI con session caps y límites por transacción.", color: "#3B82F6", badges: ["MPC"] },
    { title: "TRES FinOS", desc: "Contabilidad custodia nativa. GAAP/IFRS. Adquirido por Fireblocks (Jan 2026).", color: "#FBBF24", badges: ["GAAP", "IFRS"] },
    { title: "Compliance agent", desc: "Screening KYT/AML automatizado en cada transacción antes del settlement.", color: "#EF4444", badges: ["KYT", "AML"] },
  ];
  const chainNodes = [
    <SlideIcon name="lock" size={16} color="#3B82F6" />,
    <SlideIcon name="link" size={16} color="#8B5CF6" />,
    <SlideIcon name="shield" size={16} color="#12B981" />,
    <SlideIcon name="fileText" size={16} color="#FBBF24" />,
    <SlideIcon name="check" size={16} color="#12B981" />,
  ];
  return (
    <div className="pitch-slide-inner">
      <div className="section-label stagger-item">Seguridad</div>
      <h2 className="slide-title stagger-item">Infraestructura <G>institucional</G> desde el día uno.</h2>
      <div className="trust-chain stagger-item">
        {chainNodes.map((icon, i) => (
          <React.Fragment key={i}>
            <div className="trust-chain-node">
              <span style={{ fontSize: 16 }}>{icon}</span>
            </div>
            {i < chainNodes.length - 1 && <div className="trust-chain-line" />}
          </React.Fragment>
        ))}
      </div>
      <div className="security-grid stagger-item" style={{ marginTop: 16 }}>
        {items.map((item, i) => (
          <div key={i} className="slide-card slide-card-accent" style={{ "--accent-color": item.color }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: item.color }}>{item.title}</div>
              <div style={{ display: "flex", gap: 4 }}>
                {item.badges.map((b, j) => (
                  <span key={j} className="cert-badge" style={{ color: item.color, borderColor: `${item.color}44` }}>{b}</span>
                ))}
              </div>
            </div>
            <p style={{ fontSize: 13, color: "#A1A1AA", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="security-metrics stagger-item">
        <div className="security-metric">
          <div className="security-metric-value" style={{ color: "#3B82F6" }}>$10T+</div>
          <div className="security-metric-label">Secured</div>
        </div>
        <div className="security-metric">
          <div className="security-metric-value" style={{ color: "#12B981" }}>0</div>
          <div className="security-metric-label">Breaches</div>
        </div>
        <div className="security-metric">
          <div className="security-metric-value" style={{ color: "#8B5CF6" }}>SOC 2</div>
          <div className="security-metric-label">Type II</div>
        </div>
      </div>
    </div>
  );
}

function TeamAvatar({ initial, gradient, size = 56 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: gradient,
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden", flexShrink: 0,
    }}>
      {/* Professional silhouette */}
      <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24" fill="rgba(255,255,255,0.2)" stroke="none">
        <circle cx="12" cy="8" r="4" />
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      </svg>
      {/* Initials overlay */}
      <span style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: size * 0.35, fontWeight: 800, color: "#FFFFFF",
        textShadow: "0 1px 2px rgba(0,0,0,0.3)",
      }}>
        {initial}
      </span>
    </div>
  );
}

function TeamSlide() {
  const [expandedTeam, setExpandedTeam] = useState(null);
  const gradients = [
    "linear-gradient(135deg, #3B82F6, #12B981)",
    "linear-gradient(135deg, #8B5CF6, #3B82F6)",
    "linear-gradient(135deg, #3B82F6, #8B5CF6)",
    "linear-gradient(135deg, #FBBF24, #EF4444)",
  ];
  const team = [
    { name: "Javier Regalado Sabates", role: "Co-Founder & CEO", initial: "JR", photoUrl: null, bio: "Ha construido y escalado operaciones de infraestructura energética y proyectos solares en México por más de una década. Expertise en navegar industrias altamente reguladas — energía, finanzas, gobierno. Impulsa la convergencia AI + fintech en mercados emergentes desde la operación." },
    { name: "Rodrigo García", role: "Co-Founder & CIO", initial: "RG", photoUrl: null, bio: "+5 años en trading cuantitativo en crypto y equities. Fundó una firma de prop trading y levantó capital de inversionistas internacionales. Expertise profundo en arbitraje estadístico, derivados, market microstructure y risk management. Diseña y supervisa todas las estrategias de inversión de Orbit Capital." },
    { name: "Toño Arellano Ibáñez", role: "Strategic Advisor", initial: "TA", photoUrl: null, bio: "Co-founder & Co-CEO de Delta Protect — la empresa líder en ciberseguridad y compliance de LATAM, con 300+ clientes enterprise incluyendo unicornios y corporativos Fortune 500. Expertise en arquitectura tecnológica, transformación AI a escala, distribución enterprise y gobernanza de producto." },
  ];
  return (
    <div className="pitch-slide-inner">
      <div className="section-label stagger-item">Equipo</div>
      <h2 className="slide-title stagger-item">Cuatro fundadores, <G>un objetivo.</G></h2>
      <div className="slide-grid-2 mobile-team-grid" style={{ marginTop: 32 }}>
        {team.map((t, i) => (
          <div key={i} className={`team-card stagger-item ${expandedTeam === i ? "expanded" : ""}`} onClick={() => setExpandedTeam(expandedTeam === i ? null : i)}>
            {t.photoUrl ? (
              <img src={t.photoUrl} alt={t.name} className="team-card-avatar" style={{ objectFit: "cover" }} />
            ) : (
              <TeamAvatar initial={t.initial} gradient={gradients[i]} size={56} />
            )}
            <div className="team-card-name" style={{ marginTop: 16 }}>{t.name}</div>
            <div className="team-card-role">{t.role}</div>
            <div className="team-card-bio">{t.bio}</div>
            <span className="team-card-expand-hint">{expandedTeam === i ? "▲ Cerrar" : "▼ Ver bio"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RoadmapSlide() {
  const timeline = [
    { period: "Q1-Q2 2026", phase: "current", items: [
      { text: "Trading activo en Polymarket", status: "done" },
      { text: "Portal de inversionistas v1", status: "progress" },
      { text: "Incorporación en Dubai (DFSA/VARA)", status: "progress" },
      { text: "Fund I: $2M AUM target", status: "upcoming" },
      { text: "3+ LPs onboarded", status: "upcoming" },
    ], kpi: "Target: $2M AUM · 3+ LPs" },
    { period: "Q3-Q4 2026", phase: "next", items: [
      { text: "Seed round", status: "upcoming" },
      { text: "Orbit Risk pilot con primeros clientes", status: "upcoming" },
      { text: "Partnerships fiat on-ramp adicionales", status: "upcoming" },
      { text: "10+ mercados activos", status: "upcoming" },
    ], kpi: "Target: $5M AUM · 5+ B2B pilots" },
    { period: "2027", phase: "future", items: [
      { text: "Orbit Risk B2B a escala", status: "upcoming" },
      { text: "Expansión a más mercados de predicción", status: "upcoming" },
      { text: "Licencia regulatoria completa en Dubai", status: "upcoming" },
      { text: "Series A preparation", status: "upcoming" },
    ], kpi: "Target: $20M AUM · 50+ B2B clients" },
  ];
  return (
    <div className="pitch-slide-inner">
      <div className="section-label stagger-item">Roadmap</div>
      <h2 className="slide-title stagger-item"><G>Lo que viene.</G></h2>
      {/* Progress bar */}
      <div className="roadmap-progress stagger-item">
        <div className="roadmap-progress-dot done" />
        <div className="roadmap-progress-segment done" />
        <div className="roadmap-progress-dot active" />
        <div className="roadmap-progress-segment future" />
        <div className="roadmap-progress-dot" />
        <div className="roadmap-progress-segment future" />
        <div className="roadmap-progress-dot" />
      </div>
      <div className="slide-grid-3" style={{ marginTop: 16 }}>
        {timeline.map((col, i) => (
          <div key={i} className="roadmap-col stagger-item">
            {i === 0 && <div className="roadmap-now-badge">HOY</div>}
            <div className="roadmap-period">{col.period}</div>
            {col.items.map((item, j) => (
              <div key={j} className="roadmap-item" style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <div className={`roadmap-status ${item.status}`}>
                  {item.status === "done" && "✓"}
                </div>
                <span>{item.text}</span>
              </div>
            ))}
            <div className="roadmap-kpi">{col.kpi}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CTASlide() {
  return (
    <div className="cta-slide">
      <img src="/orbit-logo-dark.png" alt="Orbit" style={{ height: 48, marginBottom: 16 }} />
      <h2 className="stagger-item" style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", maxWidth: 700 }}>
        ¿Listo para acceder a <G>alpha no correlacionado?</G>
      </h2>
      <p className="stagger-item" style={{ fontSize: 18, color: "#A1A1AA", marginBottom: 8 }}>
        Agenda una conversación con nuestro equipo.
      </p>
      <div className="stagger-item" style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center", marginTop: 16 }}>
        <a href="mailto:invest@orbitcapital.ai" className="cta-btn-primary">Agenda una conversación</a>
      </div>
      <div className="stagger-item" style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center", fontSize: 14, color: "#71717A", marginTop: 32 }}>
        <span>invest@orbitcapital.ai</span>
        <span>orbitcapital.ai</span>
        <span>Ciudad de México, México</span>
      </div>
    </div>
  );
}

const SLIDE_COMPONENTS = [
  CoverSlide,
  EcosystemSlide,
  PredictionMarketsSlide,
  TimingSlide,
  TechnologySlide,
  OpportunitySlide,
  RiskSlide,
  CapitalFlowSlide,
  PlatformSlide,
  SecuritySlide,
  TeamSlide,
  RoadmapSlide,
  CTASlide,
];

/* ════════════════════════════════════════════
   MAIN PITCH PAGE
   ════════════════════════════════════════════ */

export default function PitchPage() {
  const location = useLocation();
  const [currentSlide, setCurrentSlide] = useState(() => getSlideIndexFromHash(location.hash));
  const [prevSlide, setPrevSlide] = useState(-1);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef(null);
  const touchStartRef = useRef(null);
  const isTransitioning = useRef(false);

  // Navigate to a slide
  const goToSlide = useCallback((idx) => {
    if (idx < 0 || idx >= SLIDES.length || isTransitioning.current) return;
    isTransitioning.current = true;
    setPrevSlide(currentSlide);
    setCurrentSlide(idx);
    window.history.replaceState(null, "", `/pitch#${SLIDES[idx].id}`);
    setTimeout(() => { isTransitioning.current = false; }, 450);
  }, [currentSlide]);

  const goNext = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
  const goPrev = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); goNext(); }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); goPrev(); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  // Wheel navigation (desktop)
  useEffect(() => {
    let lastWheel = 0;
    const handleWheel = (e) => {
      if (window.innerWidth <= 768) return;
      const now = Date.now();
      if (now - lastWheel < 800) return;
      if (Math.abs(e.deltaY) < 30) return;
      lastWheel = now;
      if (e.deltaY > 0) goNext();
      else goPrev();
    };
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [goNext, goPrev]);

  // Touch/swipe navigation (desktop horizontal swipe only)
  useEffect(() => {
    if (window.innerWidth <= 768) return; // mobile uses scroll snap
    const handleTouchStart = (e) => { touchStartRef.current = e.touches[0].clientX; };
    const handleTouchEnd = (e) => {
      if (touchStartRef.current === null) return;
      const diff = touchStartRef.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) goNext();
        else goPrev();
      }
      touchStartRef.current = null;
    };
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [goNext, goPrev]);

  // Mobile: IntersectionObserver for scroll-snap slide tracking + stagger reveals
  useEffect(() => {
    if (window.innerWidth > 768) return;
    const slides = document.querySelectorAll('.pitch-slide');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = Array.from(slides).indexOf(entry.target);
          if (idx >= 0) {
            setCurrentSlide(idx);
            window.history.replaceState(null, "", `/pitch#${SLIDES[idx].id}`);
          }
          // Trigger stagger reveals
          entry.target.querySelectorAll('.stagger-item').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 100);
          });
        } else {
          entry.target.querySelectorAll('.stagger-item').forEach(el => el.classList.remove('visible'));
        }
      });
    }, { threshold: 0.5 });
    slides.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Hash change
  useEffect(() => {
    const idx = getSlideIndexFromHash(location.hash);
    if (idx !== currentSlide) setCurrentSlide(idx);
  }, [location.hash]);

  // Fullscreen
  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current?.requestFullscreen();
    }
  };

  // Copy link
  const copyLink = () => {
    const url = `${window.location.origin}/pitch#${SLIDES[currentSlide].id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const progress = ((currentSlide + 1) / SLIDES.length) * 100;

  return (
    <div className="pitch-container" ref={containerRef}>
      <OrbitalBackground />

      {/* Header */}
      <header className="pitch-header">
        <div className="pitch-header-logo">
          <a href="/"><img src="/orbit-logo-dark.png" alt="Orbit" /></a>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div className="pitch-badge">CONFIDENCIAL 2026</div>
          <button className="pitch-fullscreen-btn" onClick={toggleFullscreen} title="Fullscreen" aria-label="Toggle fullscreen">
            <SlideIcon name="maximize" size={14} color="currentColor" />
          </button>
        </div>
      </header>

      {/* Navigation arrows */}
      {currentSlide > 0 && (
        <button className="pitch-nav-arrow left" onClick={goPrev} aria-label="Previous slide">←</button>
      )}
      {currentSlide < SLIDES.length - 1 && (
        <button className="pitch-nav-arrow right" onClick={goNext} aria-label="Next slide">→</button>
      )}

      {/* Slides */}
      <div className="pitch-slide-viewport">
        <div className="pitch-slides-track">
          {SLIDE_COMPONENTS.map((SlideComp, i) => (
            <div
              key={SLIDES[i].id}
              id={SLIDES[i].id}
              className={`pitch-slide ${i === currentSlide ? "active" : ""} ${i === prevSlide ? "prev" : ""}`}
            >
              <SlideComp />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile progress dots */}
      <div className="pitch-progress-dots">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            className={`pitch-progress-dot ${i === currentSlide ? "active" : ""}`}
            onClick={() => {
              if (window.innerWidth <= 768) {
                const el = document.getElementById(s.id);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              } else {
                goToSlide(i);
              }
            }}
            aria-label={s.label}
          />
        ))}
        <span className="pitch-progress-dots-label">{currentSlide + 1} / {SLIDES.length}</span>
      </div>

      {/* Copy link */}
      <button className="pitch-copy-btn" onClick={copyLink}>
        {copied ? <><SlideIcon name="check" size={12} color="currentColor" /> Copiado</> : <><SlideIcon name="copy" size={12} color="currentColor" /> Copiar link</>}
      </button>

      {/* Slide counter */}
      <div className="pitch-slide-counter">
        {String(currentSlide + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
      </div>

      {/* Progress bar */}
      <div className="pitch-progress">
        <div className="pitch-progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
