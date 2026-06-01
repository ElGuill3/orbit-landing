import React, { useState, useEffect, useCallback, useRef } from "react";
import { useLocation } from "react-router-dom";
import { usePostHogLazy } from "../../shared/useAnalytics";
import "./invest.css";

/* ── SVG icon helper (replaces emoji usage) ── */
function SlideIcon({ name, size = 20, color = "#71717A" }) {
  const icons = {
    lock: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>,
    eye: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
    eyeOff: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 01-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>,
  };
  return <span style={{ display: "inline-flex", lineHeight: 0 }}>{icons[name]}</span>;
}

/* ── Lazy-load slide modules ── */
const InvestSlidesModule = React.lazy(() => import("./InvestSlides"));
const InvestSlidesBModule = React.lazy(() => import("./InvestSlidesB"));

/* ── SHA-256 hash of "orbit2026" ── */
const VALID_HASH = "c2ae27a77e88cc9ede656b6106bd05d98f08250e4e27ea899862e6397abc11fb";

async function hashPassword(input) {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

/* ── Full-screen orbital background ── */
function OrbitalBackground() {
  // Generate random stars
  const stars = Array.from({ length: 30 }, (_, i) => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 1.5 + 0.5,
    opacity: Math.random() * 0.3 + 0.1,
    delay: `${Math.random() * 4}s`,
  }));

  return (
    <div className="orbital-bg">
      {/* Star field */}
      {stars.map((s, i) => (
        <div key={i} className="orbital-star" style={{
          top: s.top, left: s.left,
          width: s.size, height: s.size,
          opacity: s.opacity,
          animationDelay: s.delay,
        }} />
      ))}
      {/* Orbital rings SVG - full viewport */}
      <svg className="orbital-rings-svg" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        {/* Ring 1 - large blue */}
        <ellipse cx="500" cy="500" rx="420" ry="160"
          fill="none" stroke="#3B82F6" strokeOpacity="0.07" strokeWidth="0.8"
          strokeDasharray="12 8" className="orbital-ring-path" style={{ animationDuration: "60s" }} />
        {/* Ring 2 - medium green */}
        <ellipse cx="500" cy="500" rx="350" ry="200"
          fill="none" stroke="#12B981" strokeOpacity="0.06" strokeWidth="0.8"
          strokeDasharray="10 6" className="orbital-ring-path" style={{ animationDuration: "45s", animationDirection: "reverse" }}
          transform="rotate(15 500 500)" />
        {/* Ring 3 - large purple */}
        <ellipse cx="500" cy="500" rx="460" ry="130"
          fill="none" stroke="#8B5CF6" strokeOpacity="0.05" strokeWidth="0.8"
          strokeDasharray="8 10" className="orbital-ring-path" style={{ animationDuration: "75s" }}
          transform="rotate(-10 500 500)" />
        {/* Ring 4 - small inner blue */}
        <ellipse cx="500" cy="500" rx="250" ry="90"
          fill="none" stroke="#3B82F6" strokeOpacity="0.08" strokeWidth="0.6"
          className="orbital-ring-path" style={{ animationDuration: "35s", animationDirection: "reverse" }}
          transform="rotate(25 500 500)" />
      </svg>
      {/* Orbiting planets */}
      <div className="orbital-planet" style={{ "--orbit-radius": "280px", "--orbit-speed": "40s", top: "calc(50% - 5px)", left: "calc(50% - 5px)" }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#3B82F6", boxShadow: "0 0 12px rgba(59,130,246,0.4)" }} />
      </div>
      <div className="orbital-planet" style={{ "--orbit-radius": "200px", "--orbit-speed": "30s", animationDirection: "reverse", top: "calc(50% - 4px)", left: "calc(50% - 4px)", animationDelay: "-10s" }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#12B981", boxShadow: "0 0 10px rgba(18,185,129,0.4)" }} />
      </div>
      <div className="orbital-planet" style={{ "--orbit-radius": "350px", "--orbit-speed": "55s", top: "calc(50% - 6px)", left: "calc(50% - 6px)", animationDelay: "-25s" }}>
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#8B5CF6", boxShadow: "0 0 16px rgba(139,92,246,0.3)" }} />
      </div>
      <div className="orbital-planet" style={{ "--orbit-radius": "160px", "--orbit-speed": "25s", top: "calc(50% - 3px)", left: "calc(50% - 3px)", animationDelay: "-15s", animationDirection: "reverse" }}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#EF4444", boxShadow: "0 0 8px rgba(239,68,68,0.3)" }} />
      </div>
      <div className="orbital-planet" style={{ "--orbit-radius": "420px", "--orbit-speed": "70s", top: "calc(50% - 7px)", left: "calc(50% - 7px)", animationDelay: "-40s" }}>
        <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#FBBF24", boxShadow: "0 0 18px rgba(251,191,36,0.25)", opacity: 0.7 }} />
      </div>
    </div>
  );
}

/* ── Orbital background for gate ── */
function GateBackground() {
  // Generate random stars for the gate
  const stars = Array.from({ length: 20 }, (_, i) => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 1.5 + 0.5,
    opacity: Math.random() * 0.3 + 0.1,
    delay: `${Math.random() * 4}s`,
  }));

  return (
    <div className="invest-gate-bg">
      {/* Star field */}
      {stars.map((s, i) => (
        <div key={i} className="orbital-star" style={{
          top: s.top, left: s.left,
          width: s.size, height: s.size,
          opacity: s.opacity,
          animationDelay: s.delay,
        }} />
      ))}
      {/* Orbital rings SVG */}
      <svg className="orbital-rings-svg" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        <ellipse cx="500" cy="500" rx="350" ry="130"
          fill="none" stroke="#3B82F6" strokeOpacity="0.06" strokeWidth="0.8"
          strokeDasharray="12 8" className="orbital-ring-path" style={{ animationDuration: "50s" }} />
        <ellipse cx="500" cy="500" rx="280" ry="160"
          fill="none" stroke="#12B981" strokeOpacity="0.05" strokeWidth="0.8"
          strokeDasharray="10 6" className="orbital-ring-path" style={{ animationDuration: "40s", animationDirection: "reverse" }}
          transform="rotate(20 500 500)" />
        <ellipse cx="500" cy="500" rx="200" ry="80"
          fill="none" stroke="#8B5CF6" strokeOpacity="0.05" strokeWidth="0.6"
          className="orbital-ring-path" style={{ animationDuration: "30s" }}
          transform="rotate(-15 500 500)" />
      </svg>
      {/* Orbiting planets */}
      <div className="orbital-planet" style={{ "--orbit-radius": "220px", "--orbit-speed": "35s", top: "calc(50% - 4px)", left: "calc(50% - 4px)" }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#3B82F6", boxShadow: "0 0 10px rgba(59,130,246,0.4)" }} />
      </div>
      <div className="orbital-planet" style={{ "--orbit-radius": "160px", "--orbit-speed": "28s", animationDirection: "reverse", top: "calc(50% - 3px)", left: "calc(50% - 3px)", animationDelay: "-8s" }}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#12B981", boxShadow: "0 0 8px rgba(18,185,129,0.4)" }} />
      </div>
      <div className="orbital-planet" style={{ "--orbit-radius": "280px", "--orbit-speed": "45s", top: "calc(50% - 5px)", left: "calc(50% - 5px)", animationDelay: "-20s" }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#8B5CF6", boxShadow: "0 0 12px rgba(139,92,246,0.3)" }} />
      </div>
    </div>
  );
}

/* ── Password Gate ── */
function PasswordGate({ onAuthenticated }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const posthog = usePostHogLazy();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const hash = await hashPassword(password);
    if (hash === VALID_HASH) {
      sessionStorage.setItem("invest_auth", "true");
      if (posthog) {
        posthog.capture("invest_deck_accessed", {
          timestamp: new Date().toISOString(),
          referrer: document.referrer,
        });
      }
      onAuthenticated();
    } else {
      if (posthog) {
        posthog.capture("invest_access_attempted", { success: false });
      }
      setError("Contraseña incorrecta");
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
    setLoading(false);
  };

  return (
    <div className={`invest-gate ${shake ? "shake" : ""}`}>
      <GateBackground />
      <div className="invest-gate-content">
        <img src="/orbit-logo-dark.png" alt="Orbit" className="invest-gate-logo" />
        <h1 className="invest-gate-title">Investor Deck</h1>
        <p className="invest-gate-confidential">Confidencial 2026</p>
        <form onSubmit={handleSubmit} style={{ width: "100%", marginTop: 32 }}>
          <div className="invest-gate-input-wrap">
            <span className="invest-gate-input-icon"><SlideIcon name="lock" size={16} color="#71717A" /></span>
            <input
              type={showPassword ? "text" : "password"}
              className="invest-gate-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              autoFocus
              autoComplete="off"
            />
            <button
              type="button"
              className="invest-gate-toggle"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
            >
              {showPassword ? <SlideIcon name="eyeOff" size={16} color="#71717A" /> : <SlideIcon name="eye" size={16} color="#71717A" />}
            </button>
          </div>
          {error && <div className="invest-gate-error">{error}</div>}
          <button type="submit" className="invest-gate-btn" disabled={loading}>
            {loading ? "Verificando..." : "Acceder al Deck →"}
          </button>
        </form>
        <p className="invest-gate-fallback">
          ¿No tienes acceso?{" "}
          <a href="mailto:invest@orbitcapital.ai">invest@orbitcapital.ai</a>
        </p>
      </div>
    </div>
  );
}

/* ── Slide definitions ── */
const SLIDES = [
  { id: "cover", label: "Cover" },
  { id: "problema", label: "El Problema" },
  { id: "oportunidad", label: "La Oportunidad" },
  { id: "solucion", label: "La Solución" },
  { id: "motor-validacion", label: "Motor de Validación" },
  { id: "edge", label: "The Edge" },
  { id: "cobertura", label: "Motor de Cobertura" },
  { id: "modelo-negocio", label: "Modelo de Negocio" },
  { id: "mercado", label: "Oportunidad de Mercado" },
  { id: "traccion", label: "Tracción" },
  { id: "go-to-market", label: "Go to Market" },
  { id: "roadmap", label: "Roadmap" },
  { id: "proyecciones", label: "Proyecciones" },
  { id: "equipo", label: "Equipo" },
  { id: "the-ask", label: "The Ask" },
  { id: "cierre", label: "Cierre" },
  // Annexes
  { id: "anexo-return", label: "Return Scenarios" },
  { id: "anexo-flywheel", label: "Flywheel" },
  { id: "anexo-faq", label: "FAQ" },
  { id: "anexo-entity", label: "Entity Architecture" },
  { id: "anexo-stakeholder", label: "Stakeholder Flow" },
  { id: "anexo-ecosistema", label: "Ecosistema" },
];

const MAIN_SLIDES_COUNT = 16;

function getSlideIndexFromHash(hash) {
  if (!hash) return 0;
  const id = hash.replace("#", "");
  const idx = SLIDES.findIndex((s) => s.id === id);
  return idx >= 0 ? idx : 0;
}

/* OrbitalConstellation replaced by OrbitalBackground above */

/* ════════════════════════════════════════════
   MAIN INVEST PAGE
   ════════════════════════════════════════════ */

function InvestDeck() {
  const location = useLocation();
  const posthog = usePostHogLazy();
  const [currentSlide, setCurrentSlide] = useState(() => getSlideIndexFromHash(location.hash));
  const [prevSlide, setPrevSlide] = useState(-1);
  const [showAnnexes, setShowAnnexes] = useState(() => getSlideIndexFromHash(location.hash) >= MAIN_SLIDES_COUNT);
  const [slideComponents, setSlideComponents] = useState(null);
  const containerRef = useRef(null);
  const touchStartRef = useRef(null);
  const isTransitioning = useRef(false);
  const slideTimerRef = useRef(Date.now());
  const slidesViewedRef = useRef(new Set());
  const deckStartRef = useRef(Date.now());

  // Load slide components
  useEffect(() => {
    Promise.all([
      import("./InvestSlides"),
      import("./InvestSlidesB"),
    ]).then(([a, b]) => {
      setSlideComponents([
        a.CoverSlide,
        a.ProblemaSlide,
        a.OportunidadSlide,
        a.SolucionSlide,
        a.MotorValidacionSlide,
        a.EdgeSlide,
        a.CoberturaSlide,
        a.ModeloNegocioSlide,
        a.MercadoSlide,
        a.TraccionSlide,
        a.GoToMarketSlide,
        b.RoadmapSlide,
        b.ProyeccionesSlide,
        b.EquipoSlide,
        b.TheAskSlide,
        b.CierreSlide,
        b.AnexoReturnSlide,
        b.AnexoFlywheelSlide,
        b.AnexoFAQSlide,
        b.AnexoEntitySlide,
        b.AnexoStakeholderSlide,
        b.AnexoEcosistemaSlide,
      ]);
    });
  }, []);

  const visibleSlides = showAnnexes ? SLIDES : SLIDES.slice(0, MAIN_SLIDES_COUNT);

  // Track slide views
  useEffect(() => {
    if (!posthog) return;
    const now = Date.now();
    const timeOnPrevious = now - slideTimerRef.current;
    slideTimerRef.current = now;
    slidesViewedRef.current.add(currentSlide);

    posthog.capture("invest_slide_viewed", {
      slide_number: currentSlide + 1,
      slide_title: SLIDES[currentSlide]?.label,
      time_on_previous: timeOnPrevious,
    });

    // Check completion
    if (currentSlide === MAIN_SLIDES_COUNT - 1) {
      posthog.capture("invest_deck_completed", {
        total_time: now - deckStartRef.current,
        slides_viewed: slidesViewedRef.current.size,
      });
    }
  }, [currentSlide, posthog]);

  // Navigate to a slide
  const goToSlide = useCallback((idx) => {
    if (idx < 0 || idx >= visibleSlides.length || isTransitioning.current) return;
    isTransitioning.current = true;
    setPrevSlide(currentSlide);
    setCurrentSlide(idx);
    window.history.replaceState(null, "", `/invest#${SLIDES[idx].id}`);
    setTimeout(() => { isTransitioning.current = false; }, 450);
  }, [currentSlide, visibleSlides.length]);

  const goNext = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
  const goPrev = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") { e.preventDefault(); goNext(); }
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

  // Touch/swipe (desktop mode only)
  useEffect(() => {
    if (window.innerWidth <= 768) return;
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

  // Mobile: IntersectionObserver for scroll-snap
  useEffect(() => {
    if (window.innerWidth > 768) return;
    const slides = document.querySelectorAll('.invest-slide');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = Array.from(slides).indexOf(entry.target);
          if (idx >= 0) {
            setCurrentSlide(idx);
            window.history.replaceState(null, "", `/invest#${SLIDES[idx].id}`);
          }
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
  }, [slideComponents]);

  // Hash change
  useEffect(() => {
    const idx = getSlideIndexFromHash(location.hash);
    if (idx !== currentSlide) {
      if (idx >= MAIN_SLIDES_COUNT) setShowAnnexes(true);
      setCurrentSlide(idx);
    }
  }, [location.hash]);

  const handleLogout = () => {
    sessionStorage.removeItem("invest_auth");
    window.location.reload();
  };

  const handleShowAnnexes = () => {
    setShowAnnexes(true);
    setTimeout(() => goToSlide(MAIN_SLIDES_COUNT), 100);
  };

  const progress = ((currentSlide + 1) / visibleSlides.length) * 100;

  if (!slideComponents) {
    return <div className="invest-container" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ color: "#71717A" }}>Cargando deck...</div></div>;
  }

  return (
    <div className="invest-container" ref={containerRef}>
      <OrbitalBackground />

      {/* Header */}
      <header className="invest-header">
        <div className="invest-header-logo">
          <a href="/"><img src="/orbit-logo-dark.png" alt="Orbit" /></a>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div className="invest-badge">CONFIDENCIAL 2026</div>
          <button className="invest-logout-btn" onClick={handleLogout} title="Cerrar sesión" aria-label="Cerrar sesión">
            <SlideIcon name="lock" size={14} color="currentColor" />
          </button>
        </div>
      </header>

      {/* Navigation arrows */}
      {currentSlide > 0 && (
        <button className="invest-nav-arrow left" onClick={goPrev} aria-label="Previous slide">←</button>
      )}
      {currentSlide < visibleSlides.length - 1 && (
        <button className="invest-nav-arrow right" onClick={goNext} aria-label="Next slide">→</button>
      )}

      {/* Mobile progress dots */}
      <div className="invest-progress-dots">
        {visibleSlides.map((s, i) => (
          <button
            key={s.id}
            className={`invest-progress-dot ${i === currentSlide ? "active" : ""}`}
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
        <span className="invest-progress-dots-label">{currentSlide + 1} / {visibleSlides.length}</span>
      </div>

      {/* Slides */}
      <div className="invest-slide-viewport">
        <div className="invest-slides-track">
          {visibleSlides.map((slide, i) => {
            const SlideComp = slideComponents[SLIDES.indexOf(slide)];
            if (!SlideComp) return null;
            return (
              <div
                key={slide.id}
                id={slide.id}
                className={`invest-slide ${i === currentSlide ? "active" : ""} ${i === prevSlide ? "prev" : ""}`}
              >
                {slide.id === "cierre" ? (
                  <SlideComp onShowAnnexes={handleShowAnnexes} />
                ) : (
                  <SlideComp />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Slide counter */}
      <div className="invest-slide-counter">
        {String(currentSlide + 1).padStart(2, "0")} / {String(visibleSlides.length).padStart(2, "0")}
      </div>

      {/* Progress bar */}
      <div className="invest-progress">
        <div className="invest-progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

/* ── Main Page with Gate ── */
export default function InvestPage() {
  const [authenticated, setAuthenticated] = useState(() => {
    return sessionStorage.getItem("invest_auth") === "true";
  });

  // Set noindex meta
  useEffect(() => {
    let meta = document.querySelector('meta[name="robots"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "robots";
      document.head.appendChild(meta);
    }
    meta.content = "noindex, nofollow";

    // Apple mobile web app
    let appleMeta = document.querySelector('meta[name="apple-mobile-web-app-capable"]');
    if (!appleMeta) {
      appleMeta = document.createElement("meta");
      appleMeta.name = "apple-mobile-web-app-capable";
      appleMeta.content = "yes";
      document.head.appendChild(appleMeta);
    }

    return () => {
      if (meta) meta.content = "";
    };
  }, []);

  if (!authenticated) {
    return <PasswordGate onAuthenticated={() => setAuthenticated(true)} />;
  }

  return (
    <React.Suspense fallback={<div style={{ background: "#0A0A0A", minHeight: "100vh" }} />}>
      <InvestDeck />
    </React.Suspense>
  );
}
