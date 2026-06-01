import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "./theme";

// Logos served as static files from public/ instead of base64 JS to reduce main bundle
const LOGO_DARK = "/orbit-logo-dark.png";
const LOGO_LIGHT = "/orbit-logo-light.png";
const LOGO_CAPITAL_DARK = "/orbit-capital-dark.png";
const LOGO_CAPITAL_LIGHT = "/orbit-capital-light.png";
const LOGO_INTEL_DARK = "/orbit-intel-dark.png";
const LOGO_INTEL_LIGHT = "/orbit-intel-light.png";
const LOGO_RISK_DARK = "/orbit-risk-dark.png";
const LOGO_RISK_LIGHT = "/orbit-risk-light.png";
const orbitMarkSvg = "/orbit-mark.svg";

function OrbitLogo({ height = 32, showSub = true, context = "default" }) {
  const { t, mode } = useTheme();
  const isDark = mode === "dark";
  // Always use the generic "Orbit" logo — no per-product suffixes
  const src = isDark ? LOGO_DARK : LOGO_LIGHT;
  const alt = "Orbit";
  // Compute aspect ratio from context for width reservation
  const aspectW = Math.round(height * 4.5);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <img src={src} alt={alt} loading="eager" decoding="async" width={aspectW} height={height} style={{ height, width: "auto", maxWidth: "100%", display: "block", objectFit: "contain" }} />
      {showSub && context === "default" && (
        <div style={{
          fontSize: Math.max(7, height * 0.22), fontWeight: 600, color: t.textDim,
          letterSpacing: "0.12em", textTransform: "uppercase",
          marginTop: 1, paddingLeft: 1,
          fontFamily: "'DM Sans', sans-serif",
        }}>Capital + Intelligence</div>
      )}
    </div>
  );
}

function OrbitMark({ height = 24 }) {
  const { mode } = useTheme();
  const src = mode === "dark" ? LOGO_DARK : LOGO_LIGHT;
  const w = Math.round(height * 4.5);
  return <img src={src} alt="Orbit" loading="eager" decoding="async" width={w} height={height} style={{ height, width: "auto" }} />;
}

// Icon-only mark — uses the official Orbit logotype SVG
function OrbitIconMark({ size = 44 }) {
  return (
    <div style={{
      width: size,
      height: size,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}>
      <img
        src={orbitMarkSvg}
        alt="Orbit"
        width={size}
        height={size}
        loading="eager"
        decoding="async"
        style={{
          width: size,
          height: size,
          objectFit: "contain",
          display: "block",
          borderRadius: size * 0.15,
        }}
      />
    </div>
  );
}

function SvgIcon({ name, size = 24, color = "currentColor", filled = false }) {
  const sw = filled ? "1.8" : "1.5";
  const fl = filled ? `${color}18` : "none";
  const icons = {
    building: <svg width={size} height={size} viewBox="0 0 24 24" fill={fl} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V7l8-4v18M13 21V3l6 4v14M9 9v.01M9 12v.01M9 15v.01M9 18v.01M17 9v.01M17 12v.01M17 15v.01" /></svg>,
    chart: <svg width={size} height={size} viewBox="0 0 24 24" fill={fl} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18M7 16l4-4 4 4 5-5" /><path d="M17 11h4v4" /></svg>,
    scale: <svg width={size} height={size} viewBox="0 0 24 24" fill={fl} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M3 7l3-4 3 4M15 7l3-4 3 4M3 7v2a3 3 0 003 3h0a3 3 0 003-3V7M15 7v2a3 3 0 003 3h0a3 3 0 003-3V7" /></svg>,
    bolt: <svg width={size} height={size} viewBox="0 0 24 24" fill={fl} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" /></svg>,
    globe: <svg width={size} height={size} viewBox="0 0 24 24" fill={fl} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>,
    crane: <svg width={size} height={size} viewBox="0 0 24 24" fill={fl} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20M5 20V8l4-4v16M13 20V4h4v16M21 20v-8h-4" /><path d="M9 8h4M9 12h4M9 16h4" /></svg>,
    bank: <svg width={size} height={size} viewBox="0 0 24 24" fill={fl} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M3 10h18M12 3l9 7H3l9-7z" /><path d="M5 10v8M9 10v8M15 10v8M19 10v8" /></svg>,
    trending: <svg width={size} height={size} viewBox="0 0 24 24" fill={fl} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M23 6l-9.5 9.5-5-5L1 18" /><path d="M17 6h6v6" /></svg>,
    search: <svg width={size} height={size} viewBox="0 0 24 24" fill={fl} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>,
    wallet: <svg width={size} height={size} viewBox="0 0 24 24" fill={fl} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /><circle cx="18" cy="14" r="1" /></svg>,
    flag: <svg width={size} height={size} viewBox="0 0 24 24" fill={fl} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" /></svg>,
    brain: <svg width={size} height={size} viewBox="0 0 24 24" fill={fl} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a5 5 0 015 5c0 .9-.2 1.7-.7 2.5A5 5 0 0119 14a5 5 0 01-3 4.6V22h-4v-3.4A5 5 0 019 14a5 5 0 012.7-4.5A5 5 0 0112 2z" /><path d="M12 2v6M8.5 8.5l3.5 2M15.5 8.5l-3.5 2" /></svg>,
    refresh: <svg width={size} height={size} viewBox="0 0 24 24" fill={fl} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M23 4v6h-6M1 20v-6h6" /><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" /></svg>,
    cpu: <svg width={size} height={size} viewBox="0 0 24 24" fill={fl} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" /></svg>,
    rocket: <svg width={size} height={size} viewBox="0 0 24 24" fill={fl} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>,
    signal: <svg width={size} height={size} viewBox="0 0 24 24" fill={fl} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16" /></svg>,
    tv: <svg width={size} height={size} viewBox="0 0 24 24" fill={fl} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" /><path d="M17 2l-5 5-5-5" /></svg>,
    briefcase: <svg width={size} height={size} viewBox="0 0 24 24" fill={fl} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /><path d="M12 12v.01" /></svg>,
    office: <svg width={size} height={size} viewBox="0 0 24 24" fill={fl} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1" /><path d="M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" /></svg>,
    shield: <svg width={size} height={size} viewBox="0 0 24 24" fill={fl} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
    x: <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
    linkedin: <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
    telegram: <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>,
    mail: <svg width={size} height={size} viewBox="0 0 24 24" fill={fl} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
    mapPin: <svg width={size} height={size} viewBox="0 0 24 24" fill={fl} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
    clock: <svg width={size} height={size} viewBox="0 0 24 24" fill={fl} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
    gitCompare: <svg width={size} height={size} viewBox="0 0 24 24" fill={fl} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><path d="M13 6h3a2 2 0 012 2v7M11 18H8a2 2 0 01-2-2V9" /></svg>,
    newspaper: <svg width={size} height={size} viewBox="0 0 24 24" fill={fl} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v16a2 2 0 01-2 2zm0 0a2 2 0 01-2-2v-9c0-1.1.9-2 2-2h2" /><path d="M18 14h-8M15 18h-5M10 6h8v4h-8z" /></svg>,
    barChart3: <svg width={size} height={size} viewBox="0 0 24 24" fill={fl} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M18 17V9M13 17V5M8 17v-3" /></svg>,
    repeat: <svg width={size} height={size} viewBox="0 0 24 24" fill={fl} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M17 1l4 4-4 4" /><path d="M3 11V9a4 4 0 014-4h14" /><path d="M7 23l-4-4 4-4" /><path d="M21 13v2a4 4 0 01-4 4H3" /></svg>,
    bot: <svg width={size} height={size} viewBox="0 0 24 24" fill={fl} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8" /><rect x="2" y="8" width="20" height="12" rx="2" /><path d="M6 12h.01M18 12h.01" /><path d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1" /></svg>,
    activity: <svg width={size} height={size} viewBox="0 0 24 24" fill={fl} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
    fileText: <svg width={size} height={size} viewBox="0 0 24 24" fill={fl} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>,
  };
  const icon = icons[name];
  if (!icon) return null;
  return <span aria-hidden="true" style={{ display: "inline-flex", lineHeight: 0 }}>{icon}</span>;
}


// ─── Section Tag (pill/badge for section eyebrows) ───
function SectionTag({ children, color, center = false }) {
  const tagColor = color || "#4A90D9";
  return (
    <div style={{
      display: "inline-flex", alignItems: "center",
      background: `${tagColor}1A`,
      color: tagColor,
      fontSize: 13, fontWeight: 700,
      letterSpacing: "0.12em", textTransform: "uppercase",
      borderRadius: 9999, padding: "6px 16px",
      marginBottom: 16,
      fontFamily: "'DM Sans', sans-serif",
      ...(center ? { display: "flex", width: "fit-content", margin: "0 auto 16px" } : {}),
    }}>
      {children}
    </div>
  );
}

// ─── Theme Toggle ───
function ThemeToggle() {
  const { mode, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      aria-pressed={mode === "light"}
      style={{
        width: 44, height: 24, borderRadius: 12,
        border: `1px solid ${mode === "dark" ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.06)"}`,
        background: mode === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        position: "relative", cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        display: "flex", alignItems: "center", padding: "0 3px",
      }}
    >
      <div style={{
        width: 18, height: 18, borderRadius: "50%",
        background: mode === "dark" ? "#4F7BE8" : "#4068D0",
        transform: mode === "dark" ? "translateX(0)" : "translateX(20px)",
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 10,
      }}>
        {mode === "dark" ? "☾" : "☀"}
      </div>
    </button>
  );
}

// ─── Orbital Canvas (starfield + mouse trail) ───
function OrbitalCanvas() {
  const canvasRef = useRef(null);
  const { mode } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let t = 0;
    let isVisible = true;
    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;
    const resize = () => {
      canvas.width = W() * 2;
      canvas.height = H() * 2;
      ctx.scale(2, 2);
    };
    resize();
    let resizeTimer;
    const debouncedResize = () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(resize, 150); };
    window.addEventListener("resize", debouncedResize, { passive: true });

    // Pause animation when off-screen
    const observer = new IntersectionObserver(([entry]) => { isVisible = entry.isIntersecting; }, { threshold: 0 });
    observer.observe(canvas);

    // Particles — brighter + more visible
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * W(),
      y: Math.random() * H(),
      r: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.2 + 0.04,
      opacity: Math.random() * 0.6 + 0.25,
    }));
    const particleColor = mode === "dark" ? "255,255,255" : "37,99,235";

    // Orbiting planets — minimalist spheres on elliptical paths
    const isDark = mode === "dark";
    const planets = [
      { rxPct: 0.38, ryPct: 0.28, size: 12, speed: 0.004, angle: 0, color: isDark ? "79,123,232" : "64,104,208", opacity: isDark ? 0.30 : 0.55, hasRing: true },
      { rxPct: 0.28, ryPct: 0.20, size: 5, speed: -0.007, angle: 2.1, color: isDark ? "124,92,246" : "107,79,216", opacity: isDark ? 0.22 : 0.45, hasRing: false },
      { rxPct: 0.46, ryPct: 0.18, size: 9, speed: 0.003, angle: 4.2, color: isDark ? "124,92,246" : "107,79,216", opacity: isDark ? 0.25 : 0.50, hasRing: true },
      { rxPct: 0.18, ryPct: 0.32, size: 4, speed: -0.009, angle: 1.0, color: isDark ? "79,123,232" : "64,104,208", opacity: isDark ? 0.18 : 0.40, hasRing: false },
      { rxPct: 0.52, ryPct: 0.24, size: 7, speed: 0.0025, angle: 3.5, color: isDark ? "124,92,246" : "107,79,216", opacity: isDark ? 0.20 : 0.45, hasRing: false },
    ];
    // Orbit path line opacity
    const pathOpacity = isDark ? 0.12 : 0.18;

    // Mouse trail
    let mouse = { x: -100, y: -100 };
    const trail = [];
    const MAX_TRAIL = 18;
    const handleMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      trail.push({ x: mouse.x, y: mouse.y, life: 1 });
      if (trail.length > MAX_TRAIL) trail.shift();
    };
    canvas.parentElement?.addEventListener("mousemove", handleMove);

    function draw() {
      if (!isVisible) { animId = requestAnimationFrame(draw); return; }
      ctx.clearRect(0, 0, W(), H());
      t += 1;

      // Draw particles
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < -5) { p.y = H() + 5; p.x = Math.random() * W(); }
        const flicker = p.opacity * (0.6 + 0.4 * Math.sin(t * 0.015 + p.x));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, ${flicker})`;
        ctx.fill();
      });

      // Draw orbit path lines (elliptical trajectories)
      const cx = W() * 0.5;
      const cy = H() * 0.5;
      planets.forEach((p) => {
        const rx = W() * p.rxPct;
        const ry = H() * p.ryPct;
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${p.color}, ${pathOpacity})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 6]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Draw orbiting planets
      planets.forEach((p) => {
        p.angle += p.speed;
        const rx = W() * p.rxPct;
        const ry = H() * p.ryPct;
        const x = cx + Math.cos(p.angle) * rx;
        const y = cy + Math.sin(p.angle) * ry;

        // Subtle glow behind planet
        const glowR = p.size * 3;
        const glow = ctx.createRadialGradient(x, y, 0, x, y, glowR);
        glow.addColorStop(0, `rgba(${p.color}, ${p.opacity * 0.35})`);
        glow.addColorStop(1, `rgba(${p.color}, 0)`);
        ctx.beginPath();
        ctx.arc(x, y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Planet body — radial gradient for 3D sphere effect
        const grad = ctx.createRadialGradient(
          x - p.size * 0.3, y - p.size * 0.3, p.size * 0.1,
          x, y, p.size,
        );
        grad.addColorStop(0, `rgba(${p.color}, ${p.opacity * 1.4})`);
        grad.addColorStop(0.7, `rgba(${p.color}, ${p.opacity})`);
        grad.addColorStop(1, `rgba(${p.color}, ${p.opacity * 0.4})`);
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Optional ring
        if (p.hasRing) {
          ctx.beginPath();
          ctx.ellipse(x, y, p.size * 1.9, p.size * 0.5, Math.PI * 0.15, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${p.color}, ${p.opacity * 0.5})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      });

      // Draw mouse trail
      if (trail.length > 1) {
        for (let i = trail.length - 1; i >= 0; i--) {
          trail[i].life -= 0.04;
          if (trail[i].life <= 0) { trail.splice(i, 1); continue; }
          const pt = trail[i];
          const alpha = pt.life * 0.5;
          const radius = pt.life * 3;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${particleColor}, ${alpha})`;
          ctx.fill();
        }
        // Glow at cursor position
        if (trail.length > 0) {
          const last = trail[trail.length - 1];
          const grd = ctx.createRadialGradient(last.x, last.y, 0, last.x, last.y, 60);
          grd.addColorStop(0, `rgba(${particleColor}, 0.08)`);
          grd.addColorStop(1, `rgba(${particleColor}, 0)`);
          ctx.beginPath();
          ctx.arc(last.x, last.y, 60, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(resizeTimer);
      observer.disconnect();
      window.removeEventListener("resize", debouncedResize);
      canvas.parentElement?.removeEventListener("mousemove", handleMove);
    };
  }, [mode]);

  return (
    <canvas ref={canvasRef} role="img" aria-label="Animated orbital starfield background" style={{
      position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
      pointerEvents: "none", opacity: mode === "dark" ? 0.6 : 0.55,
      transition: "opacity 0.4s",
    }} />
  );
}

// ─── Intel Canvas (data network grid + cursor ripple) ───
function IntelCanvas() {
  const canvasRef = useRef(null);
  const { mode } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let isVisible = true;
    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;
    const resize = () => {
      canvas.width = W() * 2;
      canvas.height = H() * 2;
      ctx.scale(2, 2);
      buildGrid();
    };
    const isDark = mode === "dark";
    const accent = isDark ? "124,92,246" : "107,79,216"; // purple
    const dim = isDark ? "255,255,255" : "107,79,216";

    let mouse = { x: -9999, y: -9999 };
    const handleMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    canvas.parentElement?.addEventListener("mousemove", handleMove);

    // Pause animation when off-screen
    const observer = new IntersectionObserver(([entry]) => { isVisible = entry.isIntersecting; }, { threshold: 0 });
    observer.observe(canvas);

    // Build grid nodes
    let nodes = [];
    let spacing = 0;
    function buildGrid() {
      nodes = [];
      spacing = Math.max(48, Math.min(60, W() / 22));
      const cols = Math.ceil(W() / spacing) + 2;
      const rows = Math.ceil(H() / spacing) + 2;
      for (let r = -1; r < rows; r++) {
        for (let c = -1; c < cols; c++) {
          nodes.push({
            ox: c * spacing, oy: r * spacing,
            x: c * spacing, y: r * spacing,
            vx: 0, vy: 0,
            r: Math.random() * 1.2 + 0.8,
            pulse: Math.random() * Math.PI * 2,
            active: false,
          });
        }
      }
    }
    resize();
    let resizeTimeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 150);
    };
    window.addEventListener("resize", debouncedResize, { passive: true });

    // Data packets traveling along edges
    const packets = [];
    let packetTimer = 0;

    function spawnPacket() {
      if (nodes.length < 2) return;
      const i = Math.floor(Math.random() * nodes.length);
      // pick a neighbor
      const neighbors = nodes.filter((n, j) => {
        if (j === i) return false;
        const dx = n.ox - nodes[i].ox;
        const dy = n.oy - nodes[i].oy;
        return Math.abs(dx) <= spacing * 1.1 && Math.abs(dy) <= spacing * 1.1
          && (Math.abs(dx) + Math.abs(dy)) > 0;
      });
      if (neighbors.length === 0) return;
      const target = neighbors[Math.floor(Math.random() * neighbors.length)];
      packets.push({
        sx: nodes[i].x, sy: nodes[i].y,
        tx: target.x, ty: target.y,
        progress: 0, speed: 0.008 + Math.random() * 0.012,
        size: 1.5 + Math.random(),
      });
    }

    function draw() {
      if (!isVisible) { animId = requestAnimationFrame(draw); return; }
      ctx.clearRect(0, 0, W(), H());
      packetTimer++;
      if (packetTimer % 3 === 0 && packets.length < 30) spawnPacket();

      const INFLUENCE = 140;
      const FORCE = 22;

      // Update node positions based on cursor
      nodes.forEach((n) => {
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < INFLUENCE && dist > 0) {
          const factor = (1 - dist / INFLUENCE) * FORCE;
          n.vx += (dx / dist) * factor * 0.04;
          n.vy += (dy / dist) * factor * 0.04;
          n.active = true;
        } else {
          n.active = false;
        }
        // Spring back to original
        n.vx += (n.ox - n.x) * 0.04;
        n.vy += (n.oy - n.y) * 0.04;
        n.vx *= 0.88;
        n.vy *= 0.88;
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.015;
      });

      // Draw connections
      const maxConn = spacing * 1.6;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxConn) {
            const alpha = (1 - dist / maxConn) * (isDark ? 0.12 : 0.22);
            // Highlight connections near cursor
            const midX = (nodes[i].x + nodes[j].x) / 2;
            const midY = (nodes[i].y + nodes[j].y) / 2;
            const dMouse = Math.sqrt((midX - mouse.x) ** 2 + (midY - mouse.y) ** 2);
            const boost = dMouse < INFLUENCE ? (1 - dMouse / INFLUENCE) * 0.35 : 0;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = boost > 0
              ? `rgba(${accent}, ${alpha + boost})`
              : `rgba(${dim}, ${alpha})`;
            ctx.lineWidth = boost > 0 ? 0.8 : 0.4;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        const dMouse = Math.sqrt((n.x - mouse.x) ** 2 + (n.y - mouse.y) ** 2);
        const nearCursor = dMouse < INFLUENCE;
        const pulseSize = n.r + Math.sin(n.pulse) * 0.3;
        const baseAlpha = isDark ? 0.35 : 0.55;
        const alpha = nearCursor
          ? baseAlpha + (1 - dMouse / INFLUENCE) * 0.55
          : baseAlpha;
        const color = nearCursor ? accent : dim;
        const size = nearCursor ? pulseSize * 1.6 : pulseSize;

        // Glow for near-cursor nodes
        if (nearCursor) {
          const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, size * 5);
          glow.addColorStop(0, `rgba(${accent}, ${(1 - dMouse / INFLUENCE) * 0.12})`);
          glow.addColorStop(1, `rgba(${accent}, 0)`);
          ctx.beginPath();
          ctx.arc(n.x, n.y, size * 5, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${alpha})`;
        ctx.fill();
      });

      // Draw data packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.progress += p.speed;
        if (p.progress >= 1) { packets.splice(i, 1); continue; }
        const px = p.sx + (p.tx - p.sx) * p.progress;
        const py = p.sy + (p.ty - p.sy) * p.progress;
        const alpha = Math.sin(p.progress * Math.PI) * 0.8;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accent}, ${alpha})`;
        ctx.fill();
        // Tiny trail
        const glow = ctx.createRadialGradient(px, py, 0, px, py, p.size * 4);
        glow.addColorStop(0, `rgba(${accent}, ${alpha * 0.25})`);
        glow.addColorStop(1, `rgba(${accent}, 0)`);
        ctx.beginPath();
        ctx.arc(px, py, p.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
      }

      // Cursor glow ring
      if (mouse.x > -100) {
        const grd = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, INFLUENCE);
        grd.addColorStop(0, `rgba(${accent}, 0.06)`);
        grd.addColorStop(0.5, `rgba(${accent}, 0.02)`);
        grd.addColorStop(1, `rgba(${accent}, 0)`);
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, INFLUENCE, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(resizeTimeout);
      observer.disconnect();
      window.removeEventListener("resize", debouncedResize);
      canvas.parentElement?.removeEventListener("mousemove", handleMove);
    };
  }, [mode]);

  return (
    <canvas ref={canvasRef} role="img" aria-label="Animated data network grid background" style={{
      position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
      pointerEvents: "none", opacity: mode === "dark" ? 0.55 : 0.6,
      transition: "opacity 0.4s",
    }} />
  );
}

// ─── Capital Canvas (prediction market order flow + probability tickers) ───
function CapitalCanvas() {
  const canvasRef = useRef(null);
  const { mode } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let tick = 0;
    let isVisible = true;
    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;
    const resize = () => {
      canvas.width = W() * 2;
      canvas.height = H() * 2;
      ctx.scale(2, 2);
    };
    resize();
    let resizeTimer;
    const debouncedResize = () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(resize, 150); };
    window.addEventListener("resize", debouncedResize, { passive: true });

    // Pause animation when off-screen
    const observer = new IntersectionObserver(([entry]) => { isVisible = entry.isIntersecting; }, { threshold: 0 });
    observer.observe(canvas);

    const isDark = mode === "dark";
    const green = isDark ? "34,197,94" : "22,163,74";
    const red = isDark ? "239,68,68" : "220,38,38";
    const blue = isDark ? "79,123,232" : "64,104,208";
    const dim = isDark ? "255,255,255" : "64,104,208";

    let mouse = { x: -9999, y: -9999 };
    const handleMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    canvas.parentElement?.addEventListener("mousemove", handleMove);

    // Multiple probability lines — staircase style
    const NUM_LINES = 4;
    const lines = Array.from({ length: NUM_LINES }, (_, i) => ({
      points: [],
      value: 0.3 + Math.random() * 0.4,
      target: 0,
      color: [green, red, blue, isDark ? "168,85,247" : "126,34,206"][i],
      speed: 0.002 + Math.random() * 0.003,
      volatility: 0.008 + Math.random() * 0.012,
      label: ["YES", "NO", "UP", "DOWN"][i],
    }));
    lines.forEach((l) => { l.target = l.value; });

    // Order flow particles (buy/sell)
    const orders = [];
    function spawnOrder() {
      const isBuy = Math.random() > 0.45;
      const w = W();
      const h = H();
      orders.push({
        x: Math.random() * w * 0.9 + w * 0.05,
        y: h + 20,
        targetY: h * 0.25 + Math.random() * h * 0.55,
        size: 2 + Math.random() * 5,
        isBuy,
        color: isBuy ? green : red,
        alpha: 0,
        speed: 0.6 + Math.random() * 1.2,
        life: 1,
        arrived: false,
      });
    }

    // Floating probability badges
    const badges = [];
    let badgeTimer = 0;
    function spawnBadge() {
      const val = Math.floor(Math.random() * 40 + 30);
      const isUp = Math.random() > 0.5;
      const w = W();
      const h = H();
      badges.push({
        x: Math.random() * w * 0.7 + w * 0.15,
        y: h * 0.2 + Math.random() * h * 0.5,
        text: `${val}%`,
        arrow: isUp ? "\u2191" : "\u2193",
        color: isUp ? green : red,
        alpha: 0,
        life: 1,
        vy: -0.15 - Math.random() * 0.2,
      });
    }

    function draw() {
      if (!isVisible) { animId = requestAnimationFrame(draw); return; }
      ctx.clearRect(0, 0, W(), H());
      tick++;
      const w = W();
      const h = H();

      // Spawn orders
      if (tick % 4 === 0 && orders.length < 40) spawnOrder();
      if (tick % 90 === 0) spawnBadge();

      // ── Draw staircase probability chart lines ──
      const chartTop = h * 0.15;
      const chartBot = h * 0.85;
      const chartH = chartBot - chartTop;
      const chartLeft = w * 0.05;
      const chartRight = w * 0.95;
      const chartW = chartRight - chartLeft;

      // Faint grid lines
      for (let i = 0; i <= 4; i++) {
        const gy = chartTop + (chartH / 4) * i;
        ctx.beginPath();
        ctx.moveTo(chartLeft, gy);
        ctx.lineTo(chartRight, gy);
        ctx.strokeStyle = `rgba(${dim}, ${isDark ? 0.04 : 0.06})`;
        ctx.lineWidth = 0.5;
        ctx.setLineDash([3, 5]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Update line values (random walk)
      lines.forEach((l) => {
        if (Math.random() < 0.02) {
          l.target = Math.max(0.05, Math.min(0.95,
            l.value + (Math.random() - 0.5) * l.volatility * 15));
        }
        l.value += (l.target - l.value) * 0.02;

        // Add staircase point
        if (tick % 3 === 0) {
          l.points.push(l.value);
          if (l.points.length > Math.floor(chartW / 3)) l.points.shift();
        }
      });

      // Draw lines as staircase
      lines.forEach((l, li) => {
        if (l.points.length < 2) return;
        const step = chartW / (l.points.length - 1);
        ctx.beginPath();
        for (let i = 0; i < l.points.length; i++) {
          const px = chartLeft + i * step;
          const py = chartTop + (1 - l.points[i]) * chartH;
          if (i === 0) { ctx.moveTo(px, py); }
          else {
            // Staircase: horizontal then vertical
            const prevPy = chartTop + (1 - l.points[i - 1]) * chartH;
            ctx.lineTo(px, prevPy);
            ctx.lineTo(px, py);
          }
        }
        ctx.strokeStyle = `rgba(${l.color}, ${isDark ? 0.25 : 0.35})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Glowing dot at end
        const lastX = chartLeft + (l.points.length - 1) * step;
        const lastY = chartTop + (1 - l.points[l.points.length - 1]) * chartH;
        const glow = ctx.createRadialGradient(lastX, lastY, 0, lastX, lastY, 12);
        glow.addColorStop(0, `rgba(${l.color}, 0.3)`);
        glow.addColorStop(1, `rgba(${l.color}, 0)`);
        ctx.beginPath();
        ctx.arc(lastX, lastY, 12, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(lastX, lastY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${l.color}, 0.7)`;
        ctx.fill();

        // Label at end of line
        ctx.font = "600 9px 'JetBrains Mono', monospace";
        ctx.fillStyle = `rgba(${l.color}, 0.5)`;
        ctx.fillText(
          `${l.label} ${(l.value * 100).toFixed(0)}%`,
          lastX + 8, lastY + 3
        );
      });

      // ── Draw order particles ──
      for (let i = orders.length - 1; i >= 0; i--) {
        const o = orders[i];
        if (!o.arrived) {
          o.y -= o.speed;
          o.alpha = Math.min(o.alpha + 0.05, 0.6);
          if (o.y <= o.targetY) {
            o.arrived = true;
          }
        } else {
          o.life -= 0.015;
          o.alpha = o.life * 0.5;
          o.size *= 0.995;
        }
        if (o.life <= 0 || o.alpha <= 0) { orders.splice(i, 1); continue; }

        // Distance to cursor — pulse effect
        const dm = Math.sqrt((o.x - mouse.x) ** 2 + (o.y - mouse.y) ** 2);
        const cursorBoost = dm < 120 ? (1 - dm / 120) * 0.3 : 0;

        ctx.beginPath();
        ctx.arc(o.x, o.y, o.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${o.color}, ${o.alpha + cursorBoost})`;
        ctx.fill();

        // Glow
        if (o.alpha > 0.2) {
          const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.size * 3);
          g.addColorStop(0, `rgba(${o.color}, ${o.alpha * 0.15})`);
          g.addColorStop(1, `rgba(${o.color}, 0)`);
          ctx.beginPath();
          ctx.arc(o.x, o.y, o.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = g;
          ctx.fill();
        }
      }

      // ── Draw floating probability badges ──
      for (let i = badges.length - 1; i >= 0; i--) {
        const b = badges[i];
        b.y += b.vy;
        b.life -= 0.004;
        b.alpha = b.life > 0.8 ? (1 - (b.life - 0.8) / 0.2) * 0.55
          : b.life < 0.3 ? (b.life / 0.3) * 0.55 : 0.55;
        if (b.life <= 0) { badges.splice(i, 1); continue; }

        ctx.font = "700 11px 'JetBrains Mono', monospace";
        ctx.fillStyle = `rgba(${b.color}, ${b.alpha})`;
        ctx.fillText(`${b.arrow} ${b.text}`, b.x, b.y);
      }

      // ── Cursor glow effect ──
      if (mouse.x > -100) {
        const grd = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 100);
        grd.addColorStop(0, `rgba(${blue}, 0.05)`);
        grd.addColorStop(1, `rgba(${blue}, 0)`);
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 100, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(resizeTimer);
      observer.disconnect();
      window.removeEventListener("resize", debouncedResize);
      canvas.parentElement?.removeEventListener("mousemove", handleMove);
    };
  }, [mode]);

  return (
    <canvas ref={canvasRef} role="img" aria-label="Animated prediction market order flow background" style={{
      position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
      pointerEvents: "none", opacity: mode === "dark" ? 0.6 : 0.5,
      transition: "opacity 0.4s",
    }} />
  );
}

// ─── Agents Canvas (constellation mind + cursor-as-task) ───
const AGENTS_DATA = [
  { name: "Atlas",      color: "#00D4AA", rgb: "0,212,170",   type: "planet",  layer: 0 },
  { name: "Sirius",     color: "#3B82F6", rgb: "59,130,246",  type: "star",    layer: 1 },
  { name: "Kepler",     color: "#6366F1", rgb: "99,102,241",  type: "giant",   layer: 1 },
  { name: "Proxima",    color: "#818CF8", rgb: "129,140,248", type: "system",  layer: 2 },
  { name: "Vega",       color: "#8B5CF6", rgb: "139,92,246",  type: "star",    layer: 0 },
  { name: "Trappist",   color: "#A855F7", rgb: "168,85,247",  type: "galaxy",  layer: 1 },
  { name: "Rigel",      color: "#10B981", rgb: "16,185,129",  type: "planet",  layer: 1 },
  { name: "Gliese",     color: "#34D399", rgb: "52,211,153",  type: "giant",   layer: 2 },
  { name: "Polaris",    color: "#F59E0B", rgb: "245,158,11",  type: "star",    layer: 0 },
  { name: "Altair",     color: "#FBBF24", rgb: "251,191,36",  type: "system",  layer: 1 },
  { name: "Centauri",   color: "#EC4899", rgb: "236,72,153",  type: "planet",  layer: 0 },
  { name: "Cassiopeia", color: "#F472B6", rgb: "244,114,182", type: "nebula",  layer: 2 },
  { name: "Andromeda",  color: "#FB7185", rgb: "251,113,133", type: "galaxy",  layer: 2 },
];

function AgentsCanvas() {
  const canvasRef = useRef(null);
  const { mode } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let tick = 0;
    let isVisible = true;
    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;
    const isDark = mode === "dark";
    const accentRGB = isDark ? "0,212,170" : "64,104,208";

    const resize = () => {
      canvas.width = W() * 2;
      canvas.height = H() * 2;
      ctx.scale(2, 2);
      initPositions();
    };

    // Pause when off-screen
    const observer = new IntersectionObserver(([entry]) => { isVisible = entry.isIntersecting; }, { threshold: 0 });
    observer.observe(canvas);

    // Mouse
    let mouse = { x: -9999, y: -9999 };
    const handleMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    canvas.parentElement?.addEventListener("mousemove", handleMove);

    // Orbital layers: radii as fraction of min(W,H)
    const LAYER_RX = [0.18, 0.30, 0.43];
    const LAYER_RY = [0.14, 0.22, 0.32];
    const ATTRACT = 200;

    // Initialize agents
    const agents = AGENTS_DATA.map((d, i) => {
      const sameLayer = AGENTS_DATA.filter(a => a.layer === d.layer);
      const idx = sameLayer.indexOf(d);
      return {
        ...d,
        x: 0, y: 0, vx: 0, vy: 0, homeX: 0, homeY: 0,
        orbitAngle: (idx / sameLayer.length) * Math.PI * 2 + Math.random() * 0.4,
        orbitSpeed: (0.0018 + Math.random() * 0.0022) * (i % 2 === 0 ? 1 : -1),
        baseR: d.type === "giant" ? 8 : d.type === "star" ? 6.5 : d.type === "galaxy" ? 7 : 5,
        curR: 0, glow: 0, activity: 0, labelAlpha: 0,
        pulse: Math.random() * Math.PI * 2,
      };
    });

    function initPositions() {
      const cx = W() * 0.5;
      const cy = H() * 0.5;
      const dim = Math.min(W(), H());
      agents.forEach(a => {
        const rx = dim * LAYER_RX[a.layer];
        const ry = dim * LAYER_RY[a.layer];
        a.homeX = cx + Math.cos(a.orbitAngle) * rx;
        a.homeY = cy + Math.sin(a.orbitAngle) * ry;
        a.x = a.homeX;
        a.y = a.homeY;
        a.curR = a.baseR;
      });
    }

    resize();
    let resizeTimer;
    const debouncedResize = () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(resize, 150); };
    window.addEventListener("resize", debouncedResize, { passive: true });

    // Pulses
    const pulses = [];
    let pulseTimer = 0;

    function spawnPulse(fromIdx, toIdx) {
      if (pulses.length >= 55) return;
      const col = fromIdx === -1 ? accentRGB : agents[fromIdx].rgb;
      pulses.push({ fromIdx, toIdx, progress: 0, speed: 0.008 + Math.random() * 0.014, size: 1.4 + Math.random() * 1.6, col });
    }

    function draw() {
      if (!isVisible) { animId = requestAnimationFrame(draw); return; }
      ctx.clearRect(0, 0, W(), H());
      tick++;
      pulseTimer++;

      const cx = W() * 0.5;
      const cy = H() * 0.5;
      const dim = Math.min(W(), H());

      // ── Update orbits & home positions ──
      agents.forEach(a => {
        a.orbitAngle += a.orbitSpeed;
        const rx = dim * LAYER_RX[a.layer];
        const ry = dim * LAYER_RY[a.layer];
        a.homeX = cx + Math.cos(a.orbitAngle) * rx;
        a.homeY = cy + Math.sin(a.orbitAngle) * ry;
      });

      // ── Physics ──
      let anyActive = false;
      agents.forEach(a => {
        // Spring to orbit
        a.vx += (a.homeX - a.x) * 0.015;
        a.vy += (a.homeY - a.y) * 0.015;

        // Cursor attraction
        const dx = mouse.x - a.x;
        const dy = mouse.y - a.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const near = dist < ATTRACT && dist > 0;
        if (near) {
          const strength = (1 - dist / ATTRACT) * 0.35;
          a.vx += (dx / dist) * strength;
          a.vy += (dy / dist) * strength;
          anyActive = true;
        }

        // Inter-agent repulsion
        agents.forEach(b => {
          if (a === b) return;
          const ex = a.x - b.x;
          const ey = a.y - b.y;
          const ed = Math.sqrt(ex * ex + ey * ey);
          if (ed < 45 && ed > 0) {
            const rep = (1 - ed / 45) * 0.4;
            a.vx += (ex / ed) * rep;
            a.vy += (ey / ed) * rep;
          }
        });

        // Damping
        a.vx *= 0.93;
        a.vy *= 0.93;
        a.x += a.vx;
        a.y += a.vy;
        a.pulse += 0.018;

        // Smooth visual state
        const targetGlow = near ? (1 - dist / ATTRACT) : 0;
        const targetActivity = near ? 1 : 0;
        const targetLabel = near && dist < ATTRACT * 0.7 ? 1 : 0;
        const targetR = near ? a.baseR * (1.3 + (1 - dist / ATTRACT) * 0.5) : a.baseR;
        a.glow += (targetGlow - a.glow) * 0.07;
        a.activity += (targetActivity - a.activity) * 0.05;
        a.labelAlpha += (targetLabel - a.labelAlpha) * 0.045;
        a.curR += (targetR - a.curR) * 0.06;
      });

      // ── Spawn pulses ──
      const activeAgents = agents.map((a, i) => ({ a, i })).filter(o => o.a.activity > 0.2);
      if (activeAgents.length >= 2 && pulseTimer % 8 === 0) {
        const s = activeAgents[Math.floor(Math.random() * activeAgents.length)];
        const t = activeAgents[Math.floor(Math.random() * activeAgents.length)];
        if (s.i !== t.i) spawnPulse(s.i, t.i);
      }
      if (pulseTimer % 38 === 0) {
        const si = Math.floor(Math.random() * 13);
        spawnPulse(si, -1); // to core
      }
      if (pulseTimer % 50 === 0) {
        const si = Math.floor(Math.random() * 13);
        spawnPulse(-1, si); // from core
      }

      // ── Layer 0: Background vignette ──
      const vig = ctx.createRadialGradient(cx, cy, 0, cx, cy, dim * 0.55);
      vig.addColorStop(0, `rgba(${accentRGB}, ${isDark ? 0.025 : 0.015})`);
      vig.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, W(), H());

      // ── Layer 1: Orbital paths ──
      for (let l = 0; l < 3; l++) {
        ctx.beginPath();
        ctx.ellipse(cx, cy, dim * LAYER_RX[l], dim * LAYER_RY[l], 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${accentRGB}, ${isDark ? 0.05 : 0.07})`;
        ctx.lineWidth = 0.5;
        ctx.setLineDash([3, 7]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // ── Layer 2: Knowledge Graph core ──
      const coreR = 16 + Math.sin(tick * 0.012) * 3;
      const coreG = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR * 4);
      coreG.addColorStop(0, `rgba(${accentRGB}, ${0.12 + (anyActive ? 0.06 : 0)})`);
      coreG.addColorStop(0.4, `rgba(${accentRGB}, 0.04)`);
      coreG.addColorStop(1, `rgba(${accentRGB}, 0)`);
      ctx.beginPath();
      ctx.arc(cx, cy, coreR * 4, 0, Math.PI * 2);
      ctx.fillStyle = coreG;
      ctx.fill();
      // Core dot
      const coreDot = ctx.createRadialGradient(cx - 2, cy - 2, 0, cx, cy, coreR);
      coreDot.addColorStop(0, `rgba(${accentRGB}, 0.6)`);
      coreDot.addColorStop(0.6, `rgba(${accentRGB}, 0.25)`);
      coreDot.addColorStop(1, `rgba(${accentRGB}, 0.05)`);
      ctx.beginPath();
      ctx.arc(cx, cy, coreR, 0, Math.PI * 2);
      ctx.fillStyle = coreDot;
      ctx.fill();

      // ── Layer 3: Agent-to-core connections ──
      agents.forEach(a => {
        const alpha = 0.025 + a.activity * 0.12;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(cx, cy);
        ctx.strokeStyle = `rgba(${a.rgb}, ${alpha})`;
        ctx.lineWidth = 0.4 + a.activity * 0.6;
        ctx.stroke();
      });

      // ── Layer 4: Inter-agent connections ──
      for (let i = 0; i < agents.length; i++) {
        for (let j = i + 1; j < agents.length; j++) {
          const ax = agents[j].x - agents[i].x;
          const ay = agents[j].y - agents[i].y;
          const ad = Math.sqrt(ax * ax + ay * ay);
          const avgAct = (agents[i].activity + agents[j].activity) / 2;
          const range = 180 + avgAct * 120;
          if (ad < range) {
            const alpha = (1 - ad / range) * (0.03 + avgAct * 0.18);
            ctx.beginPath();
            ctx.moveTo(agents[i].x, agents[i].y);
            ctx.lineTo(agents[j].x, agents[j].y);
            ctx.strokeStyle = `rgba(${agents[i].rgb}, ${alpha})`;
            ctx.lineWidth = 0.3 + avgAct * 0.9;
            ctx.stroke();
          }
        }
      }

      // ── Layer 5: Communication pulses ──
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.progress += p.speed;
        if (p.progress >= 1) { pulses.splice(i, 1); continue; }
        const sx = p.fromIdx === -1 ? cx : agents[p.fromIdx].x;
        const sy = p.fromIdx === -1 ? cy : agents[p.fromIdx].y;
        const tx = p.toIdx === -1 ? cx : agents[p.toIdx].x;
        const ty = p.toIdx === -1 ? cy : agents[p.toIdx].y;
        const px = sx + (tx - sx) * p.progress;
        const py = sy + (ty - sy) * p.progress;
        const alpha = Math.sin(p.progress * Math.PI) * 0.7;
        // Glow
        const pg = ctx.createRadialGradient(px, py, 0, px, py, p.size * 3.5);
        pg.addColorStop(0, `rgba(${p.col}, ${alpha * 0.25})`);
        pg.addColorStop(1, `rgba(${p.col}, 0)`);
        ctx.beginPath();
        ctx.arc(px, py, p.size * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = pg;
        ctx.fill();
        // Core
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.col}, ${alpha})`;
        ctx.fill();
      }

      // ── Layer 6: Agent nodes ──
      agents.forEach(a => {
        const r = a.curR + Math.sin(a.pulse) * 0.6;
        const baseAlpha = isDark ? 0.55 : 0.5;

        // Outer glow
        const glowR = r * (3 + a.glow * 2);
        const og = ctx.createRadialGradient(a.x, a.y, 0, a.x, a.y, glowR);
        og.addColorStop(0, `rgba(${a.rgb}, ${0.06 + a.glow * 0.15})`);
        og.addColorStop(1, `rgba(${a.rgb}, 0)`);
        ctx.beginPath();
        ctx.arc(a.x, a.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = og;
        ctx.fill();

        // Core sphere (3D radial gradient)
        const sg = ctx.createRadialGradient(a.x - r * 0.3, a.y - r * 0.3, r * 0.1, a.x, a.y, r);
        sg.addColorStop(0, `rgba(${a.rgb}, ${baseAlpha + a.glow * 0.35})`);
        sg.addColorStop(0.7, `rgba(${a.rgb}, ${(baseAlpha - 0.1) + a.glow * 0.2})`);
        sg.addColorStop(1, `rgba(${a.rgb}, ${baseAlpha * 0.3})`);
        ctx.beginPath();
        ctx.arc(a.x, a.y, r, 0, Math.PI * 2);
        ctx.fillStyle = sg;
        ctx.fill();

        // Type-specific accents
        if (a.type === "star") {
          const sLen = r * 1.8;
          const sAlpha = 0.25 + a.glow * 0.3;
          ctx.strokeStyle = `rgba(${a.rgb}, ${sAlpha})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath(); ctx.moveTo(a.x, a.y - sLen); ctx.lineTo(a.x, a.y + sLen); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(a.x - sLen, a.y); ctx.lineTo(a.x + sLen, a.y); ctx.stroke();
        } else if (a.type === "planet") {
          ctx.beginPath();
          ctx.ellipse(a.x, a.y, r * 1.7, r * 0.45, Math.PI * 0.15, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${a.rgb}, ${0.2 + a.glow * 0.25})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        } else if (a.type === "galaxy") {
          ctx.beginPath();
          ctx.ellipse(a.x, a.y, r * 1.4, r * 0.8, tick * 0.003, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${a.rgb}, ${0.1 + a.glow * 0.15})`;
          ctx.lineWidth = 0.5;
          ctx.setLineDash([2, 3]);
          ctx.stroke();
          ctx.setLineDash([]);
        }
      });

      // ── Layer 7: Agent labels ──
      agents.forEach(a => {
        if (a.labelAlpha < 0.04) return;
        ctx.textAlign = "center";
        ctx.font = `600 ${isDark ? 10 : 11}px 'DM Sans', sans-serif`;
        ctx.fillStyle = `rgba(${a.rgb}, ${a.labelAlpha * 0.85})`;
        ctx.fillText(a.name, a.x, a.y + a.curR + 15);
      });

      // ── Layer 8: Cursor glow ──
      if (mouse.x > -100) {
        const cg = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, ATTRACT);
        cg.addColorStop(0, `rgba(${accentRGB}, 0.07)`);
        cg.addColorStop(0.4, `rgba(${accentRGB}, 0.025)`);
        cg.addColorStop(1, `rgba(${accentRGB}, 0)`);
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, ATTRACT, 0, Math.PI * 2);
        ctx.fillStyle = cg;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(resizeTimer);
      observer.disconnect();
      window.removeEventListener("resize", debouncedResize);
      canvas.parentElement?.removeEventListener("mousemove", handleMove);
    };
  }, [mode]);

  return (
    <canvas ref={canvasRef} role="img" aria-label="Animated knowledge graph showing AI agents collaborating" style={{
      position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
      pointerEvents: "none", opacity: mode === "dark" ? 0.65 : 0.55,
      transition: "opacity 0.4s",
    }} />
  );
}

// ─── Counter ───
function Counter({ end, suffix = "", prefix = "", duration = 2000 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setVal(Math.floor(ease * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          tick();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);
  return <span ref={ref}>{prefix}{val.toLocaleString()}{suffix}</span>;
}

// ─── FadeIn ───
function FadeIn({ children, delay = 0, style = {}, direction = "up" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const transforms = {
    up: "translateY(20px)",
    down: "translateY(-20px)",
    left: "translateX(30px)",
    right: "translateX(-30px)",
    scale: "scale(0.95)",
    none: "none",
  };
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : transforms[direction] || transforms.up,
      transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      willChange: "opacity, transform",
      ...style,
    }}>{children}</div>
  );
}

// ─── GradientText — animated shimmer gradient on text ───
function GradientText({ children, colors = ["#4F7BE8", "#7C5CF6", "#4F7BE8"], dynamic = false, style = {} }) {
  return (
    <span className={dynamic ? "gradient-text-dynamic" : "gradient-text-shimmer"} style={{
      background: `linear-gradient(90deg, ${colors.join(", ")})`,
      backgroundSize: dynamic ? "300% auto" : "200% auto",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      display: "inline-block",
      willChange: "background-position",
      ...style,
    }}>{children}</span>
  );
}

// ─── FloatingElement — gentle bob animation ───
function FloatingElement({ children, amplitude = 8, duration = 4, delay = 0, style = {} }) {
  return (
    <div style={{
      animation: `floatBob ${duration}s ease-in-out ${delay}s infinite`,
      "--float-amplitude": `${amplitude}px`,
      ...style,
    }}>{children}</div>
  );
}

// ─── Parallax — scroll-driven depth effect ───
function Parallax({ children, speed = 0.3, style = {} }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      setOffset(center * speed * -1);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);
  return (
    <div ref={ref} style={{
      transform: `translateY(${offset}px)`,
      transition: "transform 0.1s linear",
      willChange: "transform",
      ...style,
    }}>{children}</div>
  );
}

// ─── GlowCard — card with animated glowing border on scroll-in ───
function GlowCard({ children, color = "#4F7BE8", style = {}, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`${className} ${visible ? "glow-card-active" : ""}`} style={{
      position: "relative",
      "--glow-color": color,
      ...style,
    }}>{children}</div>
  );
}

// ─── TypeWriter — character-by-character reveal ───
function TypeWriter({ text, speed = 40, delay = 0, style = {} }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!started) return;
    let intervalId;
    const timeout = setTimeout(() => {
      let i = 0;
      intervalId = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(intervalId);
      }, speed);
    }, delay);
    return () => {
      clearTimeout(timeout);
      if (intervalId) clearInterval(intervalId);
    };
  }, [started, text, speed, delay]);
  return (
    <span ref={ref} style={style}>
      {displayed}
      {started && displayed.length < text.length && (
        <span className="typewriter-cursor" style={{ opacity: 1 }}>|</span>
      )}
    </span>
  );
}

// ─── Stagger — stagger children animations ───
function StaggerChildren({ children, stagger = 0.08, style = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} style={style}>
      {Array.isArray(children) ? children.map((child, i) => (
        <div key={i} style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.97)",
          transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * stagger}s`,
        }}>{child}</div>
      )) : children}
    </div>
  );
}

// ─── LogoMarquee — "Trusted by" static logo grid ───
function LogoMarquee({ title = "", logos = [], style: containerStyle = {} }) {
  const { t } = useTheme();
  return (
    <div style={{ textAlign: "center", padding: "48px 0", ...containerStyle }}>
      {title && (
        <div style={{
          fontSize: 13, fontWeight: 500, color: t.textDim,
          letterSpacing: "0.04em", textTransform: "uppercase",
          marginBottom: 28,
        }}>{title}</div>
      )}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        gap: 40, flexWrap: "wrap", opacity: 0.5,
      }}>
        {logos.map((logo, i) => (
          <div key={i} style={{
            fontSize: 15, fontWeight: 600, color: t.textDim,
            letterSpacing: "0.02em",
            transition: "opacity 0.3s",
          }}>{logo.name}</div>
        ))}
      </div>
    </div>
  );
}

// ─── MorphBlob — animated SVG blob background ───
function MorphBlob({ color = "#4F7BE8", size = 400, style = {} }) {
  return (
    <div className="morph-blob" style={{
      width: size, height: size, position: "absolute", pointerEvents: "none",
      background: `radial-gradient(ellipse at center, ${color}20 0%, ${color}05 50%, transparent 70%)`,
      borderRadius: "40% 60% 55% 45% / 60% 40% 60% 40%",
      filter: `blur(${size * 0.15}px)`,
      animation: `morphBlob ${12 + Math.random() * 6}s ease-in-out infinite`,
      ...style,
    }} />
  );
}

// ─── PulseRing — expanding pulse ring animation ───
function PulseRing({ color = "#4F7BE8", size = 60, style = {} }) {
  return (
    <div style={{ position: "relative", width: size, height: size, ...style }}>
      <div style={{
        position: "absolute", inset: 0, borderRadius: "50%",
        border: `2px solid ${color}40`,
        animation: "pulseRingExpand 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      }} />
      <div style={{
        position: "absolute", inset: 0, borderRadius: "50%",
        border: `2px solid ${color}40`,
        animation: "pulseRingExpand 2s cubic-bezier(0, 0, 0.2, 1) infinite 0.5s",
      }} />
    </div>
  );
}

// ─── OrbitRings — Quartr-style concentric orbit animation ───
function OrbitRings({ centerContent, icons = [], height = 500 }) {
  const { t, mode } = useTheme();
  const isDark = mode === "dark";
  const containerRef = useRef(null);
  const iconsRef = useRef([]);
  const animRef = useRef(null);

  // Ring definitions: radius, spin duration, spin direction
  const rings = [
    { radius: 125, duration: 105, reverse: false },
    { radius: 225, duration: 95, reverse: true },
    { radius: 325, duration: 85, reverse: false },
  ];

  // Distribute icons across rings (3 per ring)
  const iconGroups = [
    icons.slice(0, 3),
    icons.slice(3, 6),
    icons.slice(6, 9),
  ];

  // Animate icon positions with requestAnimationFrame
  useEffect(() => {
    const startTime = Date.now();
    const angleOffsets = [
      [0, 120, 240],
      [60, 180, 300],
      [30, 150, 270],
    ];

    function animate() {
      const elapsed = (Date.now() - startTime) / 1000;
      rings.forEach((ring, ri) => {
        const speed = (360 / ring.duration) * (ring.reverse ? -1 : 1);
        iconGroups[ri].forEach((_, ii) => {
          const baseAngle = angleOffsets[ri][ii];
          const angle = (baseAngle + elapsed * speed) * (Math.PI / 180);
          const ref = iconsRef.current[ri * 3 + ii];
          if (ref) {
            const x = Math.cos(angle) * ring.radius;
            const y = Math.sin(angle) * ring.radius;
            ref.style.transform = `translate(${x}px, ${y}px)`;
          }
        });
      });
      animRef.current = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const borderColor = isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)";
  const iconBg = isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.65)";
  const iconBorder = isDark ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.70)";
  const iconColor = isDark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.45)";

  const maxRadius = Math.max(...rings.map(r => r.radius));
  const containerSize = maxRadius * 2 + 80; // extra space for icon overflow

  return (
    <div ref={containerRef} style={{
      position: "relative",
      width: containerSize,
      height: Math.min(height, containerSize),
      maxWidth: "100%",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      pointerEvents: "none",
    }}>
      {/* Radial mask for edge fade */}
      <div style={{
        position: "absolute",
        inset: 0,
        maskImage: "radial-gradient(ellipse 70% 70% at center, black 60%, rgba(0,0,0,0.3) 80%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 70% 70% at center, black 60%, rgba(0,0,0,0.3) 80%, transparent 100%)",
      }}>
        {/* Spinning dashed rings */}
        {rings.map((ring, i) => (
          <div key={`ring-${i}`} style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: ring.radius * 2,
            height: ring.radius * 2,
            marginTop: -ring.radius,
            marginLeft: -ring.radius,
            borderRadius: "50%",
            border: `2px dashed ${borderColor}`,
            animation: `${ring.reverse ? "orbitSpinReverse" : "orbitSpin"} ${ring.duration}s linear infinite`,
          }} />
        ))}

        {/* Orbiting icons */}
        {rings.map((ring, ri) =>
          iconGroups[ri].map((icon, ii) => (
            <div
              key={`icon-${ri}-${ii}`}
              ref={el => { iconsRef.current[ri * 3 + ii] = el; }}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: -20,
                marginLeft: -20,
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 12,
                background: iconBg,
                backdropFilter: "blur(12px) saturate(150%)",
                WebkitBackdropFilter: "blur(12px) saturate(150%)",
                border: `1px solid ${iconBorder}`,
                boxShadow: isDark
                  ? "0 4px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)"
                  : "0 4px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)",
                zIndex: 2,
                transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              {icon.svg ? (
                icon.svg
              ) : (
                <SvgIcon name={icon.name || "chart"} size={20} color={iconColor} />
              )}
            </div>
          ))
        )}
      </div>

      {/* Center logo */}
      <div style={{
        position: "relative",
        zIndex: 10,
        width: 80,
        height: 80,
        borderRadius: "50%",
        background: isDark ? "#ffffff" : "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: isDark
          ? "0 0 40px rgba(79,123,232,0.15), 0 4px 20px rgba(0,0,0,0.3)"
          : "0 0 40px rgba(64,104,208,0.1), 0 4px 20px rgba(0,0,0,0.08)",
      }}>
        {centerContent}
      </div>
    </div>
  );
}

// ─── PolymarketTicker — live marquee ticker with category badges ───
// polymarketFilter is dynamically imported to keep it out of the main bundle
let _polymarketMod = null;
const getPolymarketFilter = () => _polymarketMod || (_polymarketMod = import("./polymarketFilter.js"));

function PolymarketTicker({ i18nHome }) {
  const { t, mode } = useTheme();
  const isDark = mode === "dark";
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [catMap, setCatMap] = useState(null);
  const sectionRef = useRef(null);

  const h = i18nHome;

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    async function fetchMarkets() {
      try {
        const polyMod = await getPolymarketFilter();
        if (!catMap) setCatMap(polyMod.ENTERPRISE_CATEGORIES);
        const params = new URLSearchParams({
          active: "true",
          closed: "false",
          archived: "false",
          limit: "100",
          order: "volume24hr",
          ascending: "false",
        });
        const res = await fetch(`/api/polymarket/markets?${params}`, { signal: controller.signal });
        if (!res.ok) throw new Error("API error");
        const data = await res.json();
        if (cancelled) return;

        const filtered = polyMod.filterEnterpriseMarkets(data);

        setMarkets(filtered);
        setLoading(false);
      } catch (_) {
        if (!cancelled) { setError(true); setLoading(false); }
      }
    }

    fetchMarkets();
    const interval = setInterval(async () => { const pm = await getPolymarketFilter(); pm.clearMarketCache(); fetchMarkets(); }, 60000);
    return () => { cancelled = true; controller.abort(); clearInterval(interval); };
  }, []);

  // IntersectionObserver — show sticky bar only when section scrolled ABOVE viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || loading || error || markets.length === 0) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only show sticky when section is above viewport (user scrolled past it)
        const aboveViewport = entry.boundingClientRect.bottom < 0;
        setShowSticky(!entry.isIntersecting && aboveViewport);
      },
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [loading, error, markets.length]);

  // Graceful degradation — reserve min-height to prevent CLS
  if (error || (!loading && markets.length === 0)) return <div style={{ minHeight: 220 }} />;

  function formatVol(v) {
    if (v >= 1e6) return `$${(v / 1e6).toFixed(1)}M`;
    if (v >= 1e3) return `$${(v / 1e3).toFixed(0)}K`;
    return `$${v.toFixed(0)}`;
  }

  function truncate(str, n) {
    return str.length > n ? str.slice(0, n - 1) + "\u2026" : str;
  }

  const yesColor = "#22c55e";
  const noColor = "#ef4444";
  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.55)";
  const cardBorder = isDark ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.60)";

  // Category label resolver (7 enterprise verticals)
  const CAT_LABELS = {
    geopolitics: h.polymarketCatGeopolitics,
    macroeconomy: h.polymarketCatMacroeconomy,
    regulatory: h.polymarketCatRegulatory,
    elections: h.polymarketCatElections,
    technology: h.polymarketCatTechnology,
    climateEnergy: h.polymarketCatClimateEnergy,
    publicHealth: h.polymarketCatPublicHealth,
  };

  // Ticker speed: ~50px/s
  const CARD_W = typeof window !== "undefined" && window.innerWidth < 400 ? 220 : 280;
  const GAP = 12;
  const itemCount = markets.length || 1;
  const tickerDuration = loading ? 60 : Math.max(30, (itemCount * (CARD_W + GAP)) / 50);

  // Mini-ticker constants
  const MINI_W = 200;
  const MINI_GAP = 12;
  const miniTickerDuration = loading ? 40 : Math.max(20, (itemCount * (MINI_W + MINI_GAP)) / 60);

  // Render a single market card for the ticker
  const TickerCard = ({ m }) => {
    const yesPrice = m.prices[0] || 0;
    const noPrice = m.prices[1] || 0;
    const yesPct = Math.round(yesPrice * 100);
    const noPct = Math.round(noPrice * 100);
    const cat = m.category && catMap ? catMap[m.category] : null;
    const catLabel = m.category ? (CAT_LABELS[m.category] || h.polymarketCatOther) : null;

    return (
      <div
        aria-label={`${m.question} — ${h.polymarketYes}: ${yesPct}%, ${h.polymarketNo}: ${noPct}%`}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: cardBg,
          border: `1px solid ${cardBorder}`,
          borderRadius: 12,
          padding: "10px 14px",
          width: CARD_W,
          height: 68,
          boxSizing: "border-box",
          flexShrink: 0,
          cursor: "default",
          transition: "border-color 0.25s",
          overflow: "hidden",
        }}
      >
        {/* Question + category badge */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: 12, fontWeight: 600, color: t.heading,
            lineHeight: 1.35, marginBottom: 4,
            overflow: "hidden", textOverflow: "ellipsis",
            display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
          }}>
            {truncate(m.question, 55)}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4, flexWrap: "wrap" }}>
            {cat && catLabel && (
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 3,
                fontSize: 9, fontWeight: 700, letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: cat.color,
                background: `${cat.color}12`,
                border: `1px solid ${cat.color}25`,
                borderRadius: 100, padding: "2px 7px",
                whiteSpace: "nowrap",
              }}>
                <SvgIcon name={cat.icon} size={9} color={cat.color} />
                {catLabel}
              </span>
            )}
            {m.latamRelevant && (
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 2,
                fontSize: 8, fontWeight: 700, letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "#F59E0B",
                background: "rgba(245,158,11,0.08)",
                border: "1px solid rgba(245,158,11,0.2)",
                borderRadius: 100, padding: "2px 6px",
                whiteSpace: "nowrap",
              }}>
                LATAM
              </span>
            )}
          </div>
        </div>

        {/* Yes/No percentages */}
        <div style={{ display: "flex", flexDirection: "column", gap: 2, flexShrink: 0, textAlign: "right" }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: yesColor, lineHeight: 1.2 }}>
            {h.polymarketYes} {yesPct}%
          </span>
          <span style={{ fontSize: 11, fontWeight: 600, color: noColor, lineHeight: 1.2, opacity: 0.8 }}>
            {h.polymarketNo} {noPct}%
          </span>
        </div>
      </div>
    );
  };

  // Mini ticker item for sticky bar
  const MiniTickerItem = ({ m }) => {
    const yesPct = Math.round((m.prices[0] || 0) * 100);
    const pctColor = yesPct >= 50 ? yesColor : noColor;

    return (
      <div style={{
        display: "flex", alignItems: "center", gap: 8,
        width: MINI_W, flexShrink: 0, whiteSpace: "nowrap",
      }}>
        <span style={{
          fontSize: 11, fontWeight: 500, color: t.textMuted,
          overflow: "hidden", textOverflow: "ellipsis", flex: 1,
        }}>
          {truncate(m.question, 28)}
        </span>
        <span style={{
          fontSize: 11, fontWeight: 700, color: pctColor, flexShrink: 0,
        }}>
          {yesPct}%
        </span>
      </div>
    );
  };

  // Skeleton pill for loading state
  const SkeletonPill = () => (
    <div style={{
      width: CARD_W, height: 68, flexShrink: 0,
      background: cardBg,
      border: `1px solid ${cardBorder}`,
      borderRadius: 12,
      padding: "10px 14px",
      display: "flex", alignItems: "center", gap: 10,
    }}>
      <div style={{ flex: 1 }}>
        <div style={{
          width: "80%", height: 12, borderRadius: 4, marginBottom: 8,
          background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
        }} />
        <div style={{
          width: "40%", height: 8, borderRadius: 4,
          background: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.04)",
        }} />
      </div>
    </div>
  );

  // Show all markets (uncategorized ones just lack a badge)
  const relevantMarkets = markets;

  // Items to render (duplicate for seamless loop)
  const items = loading
    ? Array.from({ length: 8 }).map((_, i) => <SkeletonPill key={`sk-${i}`} />)
    : [...relevantMarkets, ...relevantMarkets].map((m, i) => <TickerCard key={`${m.id}-${i}`} m={m} />);

  // Sticky mini-ticker bar (rendered via portal)
  const stickyBar = !loading && relevantMarkets.length > 0 && createPortal(
    <div
      className="sticky-ticker-bar"
      style={{
        position: "fixed",
        top: 70,
        left: 0,
        right: 0,
        zIndex: 99,
        height: 36,
        transform: showSticky ? "translateY(0)" : "translateY(-110%)",
        opacity: showSticky ? 1 : 0,
        pointerEvents: showSticky ? "auto" : "none",
        background: isDark
          ? "rgba(10,10,10,0.75)"
          : "rgba(255,255,255,0.8)",
        backdropFilter: "blur(16px) saturate(160%)",
        WebkitBackdropFilter: "blur(16px) saturate(160%)",
        borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)"}`,
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
        maskImage: "linear-gradient(90deg, transparent 0%, black 3%, black 97%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 3%, black 97%, transparent 100%)",
      }}
    >
      <div
        className="ticker-track"
        style={{
          display: "flex",
          gap: MINI_GAP,
          width: "max-content",
          alignItems: "center",
          height: 36,
          "--ticker-duration": `${miniTickerDuration}s`,
        }}
      >
        {[...relevantMarkets, ...relevantMarkets].map((m, i) => (
          <MiniTickerItem key={`mini-${m.id}-${i}`} m={m} />
        ))}
      </div>
    </div>,
    document.body,
  );

  return (
    <div ref={sectionRef}>
      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontSize: 11, fontWeight: 700, letterSpacing: "0.08em",
          textTransform: "uppercase", color: yesColor,
          marginBottom: 14,
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: "50%",
            background: yesColor,
            animation: "glowPulse 2s ease-in-out infinite",
            boxShadow: `0 0 8px ${yesColor}60`,
          }} />
          {h.polymarketTag}
        </div>
        <h2 style={{
          fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 700,
          color: t.heading, letterSpacing: "-0.02em",
          lineHeight: 1.15, margin: "0 0 10px",
        }}>
          {h.polymarketTitle}
        </h2>
        <p style={{
          fontSize: 15, color: t.textMuted, lineHeight: 1.6,
          maxWidth: 500, margin: "0 auto",
        }}>
          {h.polymarketDesc}
        </p>
      </div>

      {/* Ticker viewport — full bleed */}
      <div style={{
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
        overflow: "hidden",
        maskImage: "linear-gradient(90deg, transparent 0%, black 4%, black 96%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 4%, black 96%, transparent 100%)",
      }}>
        <div
          className="ticker-track"
          style={{
            display: "flex",
            gap: GAP,
            width: "max-content",
            padding: "20px 0",
            "--ticker-duration": `${tickerDuration}s`,
          }}
        >
          {items}
        </div>
      </div>

      {/* Powered by */}
      <div style={{
        textAlign: "center", marginTop: 20,
        fontSize: 11, color: t.textDim, fontWeight: 500,
        letterSpacing: "0.02em",
        display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
      }}>
        <span style={{
          width: 5, height: 5, borderRadius: "50%",
          background: yesColor, opacity: 0.6,
        }} />
        {h.polymarketPowered}
      </div>

      {/* Sticky mini-ticker (portal to body) */}
      {stickyBar}
    </div>
  );
}

/* ── FAQ Accordion Item (shared) ── */
function FaqAccordion({ question, answer, accent, t, isDark }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      borderRadius: 16, overflow: "hidden",
      background: isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.55)",
      border: `1px solid ${open ? accent + "30" : (isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)")}`,
      backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
      transition: "border-color 0.3s",
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: 16,
          padding: "20px 24px", border: "none", cursor: "pointer",
          background: "transparent", textAlign: "left",
          fontFamily: "inherit",
        }}
      >
        <span style={{ fontSize: 16, fontWeight: 600, color: t.heading, lineHeight: 1.4 }}>
          {question}
        </span>
        <span style={{
          width: 28, height: 28, borderRadius: 8, flexShrink: 0,
          background: open ? `${accent}15` : (isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)"),
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 16, color: open ? accent : t.textMuted,
          transition: "all 0.3s", transform: open ? "rotate(45deg)" : "rotate(0)",
        }}>+</span>
      </button>
      <div style={{
        display: "grid",
        gridTemplateRows: open ? "1fr" : "0fr",
        transition: "grid-template-rows 0.35s cubic-bezier(0.4,0,0.2,1)",
      }}>
        <div style={{ overflow: "hidden" }}>
          <div style={{
            padding: "0 24px 20px",
            fontSize: 15, color: t.textMuted, lineHeight: 1.7,
          }}>
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Ecosystem Canvas (full flywheel with agents, hubs & data rivers) ───
const ECO_AGENTS = [
  // Intel-zone agents (teal family)
  { name: "Atlas",      rgb: "0,212,170",   hub: 0, orbitR: 0.65, angle: 0,           speed: 0.0025, r: 7 },
  { name: "Polaris",    rgb: "245,158,11",  hub: 0, orbitR: 0.80, angle: Math.PI*0.5,  speed:-0.0018, r: 6 },
  { name: "Cassiopeia", rgb: "244,114,182", hub: 0, orbitR: 0.55, angle: Math.PI,      speed: 0.0022, r: 5.5 },
  { name: "Andromeda",  rgb: "251,113,133", hub: 0, orbitR: 0.70, angle: Math.PI*1.5,  speed:-0.0020, r: 6.5 },
  { name: "Trappist",   rgb: "168,85,247",  hub: 0, orbitR: 0.90, angle: Math.PI*0.3,  speed: 0.0016, r: 5 },
  // Risk-zone agents (green family)
  { name: "Rigel",      rgb: "16,185,129",  hub: 1, orbitR: 0.65, angle: 0,            speed:-0.0024, r: 7 },
  { name: "Gliese",     rgb: "52,211,153",  hub: 1, orbitR: 0.80, angle: Math.PI*0.7,  speed: 0.0019, r: 5.5 },
  { name: "Proxima",    rgb: "129,140,248", hub: 1, orbitR: 0.55, angle: Math.PI*1.4,  speed:-0.0021, r: 6 },
  { name: "Centauri",   rgb: "236,72,153",  hub: 1, orbitR: 0.90, angle: Math.PI*0.2,  speed: 0.0017, r: 5 },
  // Capital-zone agents (blue family)
  { name: "Sirius",     rgb: "59,130,246",  hub: 2, orbitR: 0.65, angle: 0,            speed: 0.0023, r: 7 },
  { name: "Kepler",     rgb: "99,102,241",  hub: 2, orbitR: 0.80, angle: Math.PI*0.8,  speed:-0.0020, r: 6.5 },
  { name: "Vega",       rgb: "139,92,246",  hub: 2, orbitR: 0.55, angle: Math.PI*1.6,  speed: 0.0018, r: 5.5 },
  { name: "Altair",     rgb: "251,191,36",  hub: 2, orbitR: 0.90, angle: Math.PI*1.1,  speed:-0.0015, r: 5 },
];

function EcosystemCanvas({ intelAccent, riskAccent, capitalAccent }) {
  const canvasRef = useRef(null);
  const { mode } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let tick = 0;
    let isVisible = true;
    const isDark = mode === "dark";

    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;

    // Hub accent RGB values
    const hubColors = [
      { hex: intelAccent,   rgb: isDark ? "124,92,246" : "107,79,216" },   // Intel (purple)
      { hex: riskAccent,    rgb: isDark ? "16,185,129" : "5,150,105" },    // Risk (green)
      { hex: capitalAccent, rgb: isDark ? "79,123,232" : "64,104,208" },   // Capital (blue)
    ];

    // Replace capital rgb with more visible blue in dark mode
    if (isDark) hubColors[2].rgb = "59,130,246";

    const resize = () => {
      canvas.width = W() * 2;
      canvas.height = H() * 2;
      ctx.scale(2, 2);
    };

    // Visibility observer
    const observer = new IntersectionObserver(([entry]) => { isVisible = entry.isIntersecting; }, { threshold: 0 });
    observer.observe(canvas);

    // Mouse tracking
    let mouse = { x: -9999, y: -9999 };
    const handleMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleLeave = () => { mouse.x = -9999; mouse.y = -9999; };
    canvas.parentElement?.addEventListener("mousemove", handleMove);
    canvas.parentElement?.addEventListener("mouseleave", handleLeave);

    resize();
    let resizeTimer;
    const debouncedResize = () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(resize, 150); };
    window.addEventListener("resize", debouncedResize, { passive: true });

    // ── Hub positions (recalculated each frame for responsiveness) ──
    function getHubs(w, h) {
      const cx = w * 0.5;
      const topY = h * 0.22;
      const botY = h * 0.78;
      const spread = Math.min(w * 0.30, 260);
      return [
        { x: cx, y: topY, label: "Intel", r: 28 },               // top center
        { x: cx - spread, y: botY, label: "Risk", r: 24 },       // bottom left
        { x: cx + spread, y: botY, label: "Capital", r: 24 },    // bottom right
      ];
    }

    // ── Agents state ──
    const agents = ECO_AGENTS.map(d => ({
      ...d,
      x: 0, y: 0, vx: 0, vy: 0,
      curAngle: d.angle,
      curR: d.r,
      glow: 0,
      labelAlpha: 0,
      pulse: Math.random() * Math.PI * 2,
    }));

    // ── River particles (data flow between hubs) ──
    const rivers = []; // {from, to, progress, speed, size, rgb}
    let riverTimer = 0;
    const MAX_RIVERS = 60;

    function spawnRiver(fromHub, toHub) {
      if (rivers.length >= MAX_RIVERS) return;
      const rgb = hubColors[fromHub].rgb;
      rivers.push({
        from: fromHub, to: toHub,
        progress: 0,
        speed: 0.004 + Math.random() * 0.006,
        size: 1.5 + Math.random() * 2,
        rgb,
        drift: (Math.random() - 0.5) * 40,
      });
    }

    // ── Pulses between agents ──
    const pulses = [];
    let pulseTimer = 0;
    const MAX_PULSES = 30;

    function spawnPulse(fromIdx, toIdx) {
      if (pulses.length >= MAX_PULSES) return;
      pulses.push({
        fromIdx, toIdx,
        progress: 0,
        speed: 0.008 + Math.random() * 0.012,
        size: 1.2 + Math.random() * 1.4,
        rgb: agents[fromIdx].rgb,
      });
    }

    // ── Core glow particles ──
    const coreParticles = Array.from({ length: 20 }, () => ({
      angle: Math.random() * Math.PI * 2,
      radius: 8 + Math.random() * 18,
      speed: 0.005 + Math.random() * 0.008,
      size: 0.8 + Math.random() * 1.2,
      alpha: 0.2 + Math.random() * 0.4,
    }));

    const ATTRACT = 180;

    function draw() {
      if (!isVisible) { animId = requestAnimationFrame(draw); return; }
      const w = W(), h = H();
      ctx.clearRect(0, 0, w, h);
      tick++;
      riverTimer++;
      pulseTimer++;

      const hubs = getHubs(w, h);
      const cx = w * 0.5;
      const cy = h * 0.5;
      const dim = Math.min(w, h);
      const zoneR = dim * 0.22; // radius of each hub's agent zone

      // ══════ Layer 0: Background ══════
      // Subtle radial vignette
      const vig = ctx.createRadialGradient(cx, cy, 0, cx, cy, dim * 0.7);
      vig.addColorStop(0, `rgba(${hubColors[0].rgb}, ${isDark ? 0.02 : 0.01})`);
      vig.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, w, h);

      // ══════ Layer 1: Hub zone rings ══════
      hubs.forEach((hub, i) => {
        // Orbital ring for agents
        ctx.beginPath();
        ctx.arc(hub.x, hub.y, zoneR * 0.65, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${hubColors[i].rgb}, ${isDark ? 0.06 : 0.08})`;
        ctx.lineWidth = 0.5;
        ctx.setLineDash([3, 6]);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.beginPath();
        ctx.arc(hub.x, hub.y, zoneR * 0.9, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${hubColors[i].rgb}, ${isDark ? 0.03 : 0.05})`;
        ctx.lineWidth = 0.5;
        ctx.setLineDash([2, 8]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // ══════ Layer 2: Data river paths (curved connections between hubs) ══════
      const riverPaths = [
        { from: 0, to: 1, bend: -40 },  // Intel → Risk
        { from: 0, to: 2, bend: 40 },   // Intel → Capital
        { from: 1, to: 2, bend: 30 },   // Risk → Capital
      ];
      riverPaths.forEach(rp => {
        const a = hubs[rp.from], b = hubs[rp.to];
        const mx = (a.x + b.x) / 2 + rp.bend;
        const my = (a.y + b.y) / 2 + rp.bend * 0.3;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.quadraticCurveTo(mx, my, b.x, b.y);
        ctx.strokeStyle = `rgba(${hubColors[rp.from].rgb}, ${isDark ? 0.07 : 0.09})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      // ══════ Layer 3: Spawn river particles ══════
      if (riverTimer % 12 === 0) {
        // Flywheel cycle: Intel→Risk→Capital→Intel
        const pairs = [[0,1],[0,2],[1,2],[2,0],[1,0],[2,1]];
        const pair = pairs[Math.floor(Math.random() * pairs.length)];
        spawnRiver(pair[0], pair[1]);
      }

      // Draw river particles
      for (let i = rivers.length - 1; i >= 0; i--) {
        const rv = rivers[i];
        rv.progress += rv.speed;
        if (rv.progress >= 1) { rivers.splice(i, 1); continue; }
        const a = hubs[rv.from], b = hubs[rv.to];
        const rp = riverPaths.find(r => r.from === rv.from && r.to === rv.to) ||
                   riverPaths.find(r => r.from === rv.to && r.to === rv.from);
        const bend = rp ? (rv.from === rp.from ? rp.bend : -rp.bend) : 0;
        const mx = (a.x + b.x) / 2 + bend + rv.drift;
        const my = (a.y + b.y) / 2 + bend * 0.3;
        const t2 = rv.progress;
        const px = (1-t2)*(1-t2)*a.x + 2*(1-t2)*t2*mx + t2*t2*b.x;
        const py = (1-t2)*(1-t2)*a.y + 2*(1-t2)*t2*my + t2*t2*b.y;
        const alpha = Math.sin(rv.progress * Math.PI) * 0.65;

        // Glow
        const rg = ctx.createRadialGradient(px, py, 0, px, py, rv.size * 4);
        rg.addColorStop(0, `rgba(${rv.rgb}, ${alpha * 0.3})`);
        rg.addColorStop(1, `rgba(${rv.rgb}, 0)`);
        ctx.beginPath();
        ctx.arc(px, py, rv.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = rg;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(px, py, rv.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rv.rgb}, ${alpha})`;
        ctx.fill();
      }

      // ══════ Layer 4: Knowledge Graph core (center) ══════
      const coreX = cx;
      const coreY = cy;
      const coreR = 14 + Math.sin(tick * 0.015) * 2;

      // Core glow aura
      const coreGlow = ctx.createRadialGradient(coreX, coreY, 0, coreX, coreY, coreR * 5);
      coreGlow.addColorStop(0, `rgba(${hubColors[0].rgb}, ${isDark ? 0.10 : 0.07})`);
      coreGlow.addColorStop(0.3, `rgba(${hubColors[0].rgb}, 0.04)`);
      coreGlow.addColorStop(1, `rgba(${hubColors[0].rgb}, 0)`);
      ctx.beginPath();
      ctx.arc(coreX, coreY, coreR * 5, 0, Math.PI * 2);
      ctx.fillStyle = coreGlow;
      ctx.fill();

      // Core orbiting particles
      coreParticles.forEach(p => {
        p.angle += p.speed;
        const px = coreX + Math.cos(p.angle) * p.radius;
        const py = coreY + Math.sin(p.angle) * p.radius;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${hubColors[0].rgb}, ${p.alpha * (isDark ? 0.5 : 0.4)})`;
        ctx.fill();
      });

      // Core dot
      const coreDot = ctx.createRadialGradient(coreX - 2, coreY - 2, 0, coreX, coreY, coreR);
      coreDot.addColorStop(0, `rgba(${hubColors[0].rgb}, 0.5)`);
      coreDot.addColorStop(0.6, `rgba(${hubColors[0].rgb}, 0.2)`);
      coreDot.addColorStop(1, `rgba(${hubColors[0].rgb}, 0.05)`);
      ctx.beginPath();
      ctx.arc(coreX, coreY, coreR, 0, Math.PI * 2);
      ctx.fillStyle = coreDot;
      ctx.fill();

      // Core label
      ctx.textAlign = "center";
      ctx.font = `500 ${isDark ? 9 : 10}px 'JetBrains Mono', monospace`;
      ctx.fillStyle = `rgba(${hubColors[0].rgb}, ${isDark ? 0.45 : 0.5})`;
      ctx.fillText("KG", coreX, coreY + 3.5);

      // ══════ Layer 5: Agent-to-hub connections ══════
      agents.forEach(a => {
        const hub = hubs[a.hub];
        const alpha = 0.02 + a.glow * 0.10;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(hub.x, hub.y);
        ctx.strokeStyle = `rgba(${a.rgb}, ${alpha})`;
        ctx.lineWidth = 0.3 + a.glow * 0.5;
        ctx.stroke();
      });

      // ══════ Layer 6: Inter-agent connections ══════
      for (let i = 0; i < agents.length; i++) {
        for (let j = i + 1; j < agents.length; j++) {
          const ax = agents[j].x - agents[i].x;
          const ay = agents[j].y - agents[i].y;
          const ad = Math.sqrt(ax * ax + ay * ay);
          const avgGlow = (agents[i].glow + agents[j].glow) / 2;
          const range = 90 + avgGlow * 80;
          if (ad < range && ad > 0) {
            const alpha = (1 - ad / range) * (0.025 + avgGlow * 0.15);
            ctx.beginPath();
            ctx.moveTo(agents[i].x, agents[i].y);
            ctx.lineTo(agents[j].x, agents[j].y);
            ctx.strokeStyle = `rgba(${agents[i].rgb}, ${alpha})`;
            ctx.lineWidth = 0.3 + avgGlow * 0.7;
            ctx.stroke();
          }
        }
      }

      // ══════ Layer 7: Agent physics & rendering ══════
      agents.forEach(a => {
        const hub = hubs[a.hub];
        a.curAngle += a.speed;
        const targetR = zoneR * a.orbitR;
        const homeX = hub.x + Math.cos(a.curAngle) * targetR;
        const homeY = hub.y + Math.sin(a.curAngle) * targetR * 0.7; // elliptical

        // Spring to orbit home
        a.vx += (homeX - a.x) * 0.018;
        a.vy += (homeY - a.y) * 0.018;

        // Mouse attraction
        const dx = mouse.x - a.x;
        const dy = mouse.y - a.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const near = dist < ATTRACT && dist > 0;
        if (near) {
          const strength = (1 - dist / ATTRACT) * 0.4;
          a.vx += (dx / dist) * strength;
          a.vy += (dy / dist) * strength;
        }

        // Inter-agent repulsion
        agents.forEach(b => {
          if (a === b) return;
          const ex = a.x - b.x;
          const ey = a.y - b.y;
          const ed = Math.sqrt(ex * ex + ey * ey);
          if (ed < 35 && ed > 0) {
            const rep = (1 - ed / 35) * 0.35;
            a.vx += (ex / ed) * rep;
            a.vy += (ey / ed) * rep;
          }
        });

        // Damping
        a.vx *= 0.92;
        a.vy *= 0.92;
        a.x += a.vx;
        a.y += a.vy;
        a.pulse += 0.02;

        // Visual state
        const targetGlow = near ? (1 - dist / ATTRACT) : 0;
        const targetLabel = near && dist < ATTRACT * 0.55 ? 1 : 0;
        const targetNodeR = near ? a.r * (1.4 + (1 - dist / ATTRACT) * 0.5) : a.r;
        a.glow += (targetGlow - a.glow) * 0.06;
        a.labelAlpha += (targetLabel - a.labelAlpha) * 0.05;
        a.curR += (targetNodeR - a.curR) * 0.07;

        // Draw agent node
        const r = a.curR + Math.sin(a.pulse) * 0.5;
        const baseAlpha = isDark ? 0.55 : 0.5;

        // Outer glow
        const glowR = r * (2.5 + a.glow * 2);
        const og = ctx.createRadialGradient(a.x, a.y, 0, a.x, a.y, glowR);
        og.addColorStop(0, `rgba(${a.rgb}, ${0.05 + a.glow * 0.15})`);
        og.addColorStop(1, `rgba(${a.rgb}, 0)`);
        ctx.beginPath();
        ctx.arc(a.x, a.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = og;
        ctx.fill();

        // Core sphere
        const sg = ctx.createRadialGradient(a.x - r * 0.3, a.y - r * 0.3, r * 0.1, a.x, a.y, r);
        sg.addColorStop(0, `rgba(${a.rgb}, ${baseAlpha + a.glow * 0.35})`);
        sg.addColorStop(0.7, `rgba(${a.rgb}, ${(baseAlpha - 0.1) + a.glow * 0.2})`);
        sg.addColorStop(1, `rgba(${a.rgb}, ${baseAlpha * 0.3})`);
        ctx.beginPath();
        ctx.arc(a.x, a.y, r, 0, Math.PI * 2);
        ctx.fillStyle = sg;
        ctx.fill();

        // Ring accent for "planet"-like agents (Rigel, Sirius, Atlas)
        if (a.r >= 7) {
          ctx.beginPath();
          ctx.ellipse(a.x, a.y, r * 1.6, r * 0.4, Math.PI * 0.15, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${a.rgb}, ${0.15 + a.glow * 0.2})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      });

      // ══════ Layer 8: Agent labels ══════
      agents.forEach(a => {
        if (a.labelAlpha < 0.04) return;
        ctx.textAlign = "center";
        ctx.font = `600 9px 'DM Sans', sans-serif`;
        ctx.fillStyle = `rgba(${a.rgb}, ${a.labelAlpha * 0.85})`;
        ctx.fillText(a.name, a.x, a.y + a.curR + 13);
      });

      // ══════ Layer 9: Agent pulses ══════
      if (pulseTimer % 18 === 0 && agents.length > 1) {
        const si = Math.floor(Math.random() * agents.length);
        let ti = Math.floor(Math.random() * agents.length);
        if (ti === si) ti = (ti + 1) % agents.length;
        spawnPulse(si, ti);
      }
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.progress += p.speed;
        if (p.progress >= 1) { pulses.splice(i, 1); continue; }
        const sx = agents[p.fromIdx].x, sy = agents[p.fromIdx].y;
        const tx = agents[p.toIdx].x, ty = agents[p.toIdx].y;
        const px = sx + (tx - sx) * p.progress;
        const py = sy + (ty - sy) * p.progress;
        const alpha = Math.sin(p.progress * Math.PI) * 0.6;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.rgb}, ${alpha})`;
        ctx.fill();
      }

      // ══════ Layer 10: Hub nodes ══════
      hubs.forEach((hub, i) => {
        const hR = hub.r + Math.sin(tick * 0.012 + i * 2) * 2;
        const rgb = hubColors[i].rgb;

        // Large glow aura
        const hg = ctx.createRadialGradient(hub.x, hub.y, 0, hub.x, hub.y, hR * 3.5);
        hg.addColorStop(0, `rgba(${rgb}, ${isDark ? 0.12 : 0.08})`);
        hg.addColorStop(0.5, `rgba(${rgb}, 0.03)`);
        hg.addColorStop(1, `rgba(${rgb}, 0)`);
        ctx.beginPath();
        ctx.arc(hub.x, hub.y, hR * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = hg;
        ctx.fill();

        // Rotating dashed ring
        ctx.save();
        ctx.translate(hub.x, hub.y);
        ctx.rotate(tick * 0.003 * (i % 2 === 0 ? 1 : -1));
        ctx.beginPath();
        ctx.arc(0, 0, hR + 6, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${rgb}, ${isDark ? 0.2 : 0.25})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();

        // Hub body - gradient sphere
        const hsg = ctx.createRadialGradient(hub.x - hR * 0.25, hub.y - hR * 0.25, hR * 0.1, hub.x, hub.y, hR);
        hsg.addColorStop(0, `rgba(${rgb}, ${isDark ? 0.35 : 0.25})`);
        hsg.addColorStop(0.6, `rgba(${rgb}, ${isDark ? 0.18 : 0.12})`);
        hsg.addColorStop(1, `rgba(${rgb}, 0.05)`);
        ctx.beginPath();
        ctx.arc(hub.x, hub.y, hR, 0, Math.PI * 2);
        ctx.fillStyle = hsg;
        ctx.fill();

        // Hub border
        ctx.beginPath();
        ctx.arc(hub.x, hub.y, hR, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${rgb}, ${isDark ? 0.35 : 0.30})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Hub icon dot
        ctx.beginPath();
        ctx.arc(hub.x, hub.y - 6, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, 0.7)`;
        ctx.fill();

        // Hub label
        ctx.textAlign = "center";
        ctx.font = `700 12px 'DM Sans', sans-serif`;
        ctx.fillStyle = isDark ? `rgba(255,255,255,0.85)` : `rgba(0,0,0,0.75)`;
        ctx.fillText(hub.label, hub.x, hub.y + 8);

        // Hub sub label
        const subs = ["Inteligencia", "Protección", "Validación"];
        ctx.font = `500 8px 'DM Sans', sans-serif`;
        ctx.fillStyle = `rgba(${rgb}, ${isDark ? 0.55 : 0.6})`;
        ctx.fillText(subs[i], hub.x, hub.y + 20);
      });

      // ══════ Layer 11: Hub-to-core connections ══════
      hubs.forEach((hub, i) => {
        const rgb = hubColors[i].rgb;
        ctx.beginPath();
        ctx.moveTo(hub.x, hub.y);
        ctx.lineTo(coreX, coreY);
        ctx.strokeStyle = `rgba(${rgb}, ${isDark ? 0.06 : 0.08})`;
        ctx.lineWidth = 0.8;
        ctx.setLineDash([2, 5]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // ══════ Layer 12: Flywheel rotation arrows ══════
      // Draw subtle curved arrows showing the clockwise flywheel direction
      const arrowTick = tick * 0.008;
      const arrowPairs = [[0,2],[2,1],[1,0]]; // Intel→Capital→Risk→Intel
      arrowPairs.forEach(([fi, ti], idx) => {
        const a = hubs[fi], b = hubs[ti];
        const bend = riverPaths[idx]?.bend || 0;
        const mx = (a.x + b.x) / 2 + bend;
        const my = (a.y + b.y) / 2 + bend * 0.3;
        // Animated arrow position along path
        const t2 = ((arrowTick + idx * 0.33) % 1);
        const ax2 = (1-t2)*(1-t2)*a.x + 2*(1-t2)*t2*mx + t2*t2*b.x;
        const ay2 = (1-t2)*(1-t2)*a.y + 2*(1-t2)*t2*my + t2*t2*b.y;
        // Tangent for arrow direction
        const dt = 0.02;
        const t3 = Math.min(t2 + dt, 1);
        const bx = (1-t3)*(1-t3)*a.x + 2*(1-t3)*t3*mx + t3*t3*b.x;
        const by = (1-t3)*(1-t3)*a.y + 2*(1-t3)*t3*my + t3*t3*b.y;
        const ang = Math.atan2(by - ay2, bx - ax2);
        const aAlpha = Math.sin(t2 * Math.PI) * 0.35;
        const sz = 5;
        ctx.save();
        ctx.translate(ax2, ay2);
        ctx.rotate(ang);
        ctx.beginPath();
        ctx.moveTo(sz, 0);
        ctx.lineTo(-sz, -sz * 0.6);
        ctx.lineTo(-sz, sz * 0.6);
        ctx.closePath();
        ctx.fillStyle = `rgba(${hubColors[fi].rgb}, ${aAlpha})`;
        ctx.fill();
        ctx.restore();
      });

      // ══════ Layer 13: Mouse glow ══════
      if (mouse.x > -100) {
        const mg = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, ATTRACT);
        mg.addColorStop(0, `rgba(${hubColors[0].rgb}, 0.06)`);
        mg.addColorStop(0.4, `rgba(${hubColors[0].rgb}, 0.02)`);
        mg.addColorStop(1, `rgba(${hubColors[0].rgb}, 0)`);
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, ATTRACT, 0, Math.PI * 2);
        ctx.fillStyle = mg;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    // Initialize agent positions near their hubs
    const initHubs = getHubs(W(), H());
    const initZoneR = Math.min(W(), H()) * 0.22;
    agents.forEach(a => {
      const hub = initHubs[a.hub];
      const r = initZoneR * a.orbitR;
      a.x = hub.x + Math.cos(a.curAngle) * r;
      a.y = hub.y + Math.sin(a.curAngle) * r * 0.7;
    });

    draw();

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(resizeTimer);
      observer.disconnect();
      window.removeEventListener("resize", debouncedResize);
      canvas.parentElement?.removeEventListener("mousemove", handleMove);
      canvas.parentElement?.removeEventListener("mouseleave", handleLeave);
    };
  }, [mode, intelAccent, riskAccent, capitalAccent]);

  return (
    <canvas ref={canvasRef} role="img" aria-label="Animated ecosystem diagram showing Our Intelligence, Risk and Capital agents collaborating" style={{
      width: "100%", height: "100%",
      pointerEvents: "none",
      opacity: mode === "dark" ? 0.75 : 0.65,
      transition: "opacity 0.4s",
    }} />
  );
}

/* ── CelestialBody — pure-CSS celestial illustrations for agents ── */
function CelestialBody({ type, color, size = 44 }) {
  const s = size;
  const base = {
    width: s, height: s, borderRadius: "50%", flexShrink: 0,
    position: "relative", display: "flex", alignItems: "center", justifyContent: "center",
  };

  if (type === "star") {
    return (
      <div style={{ ...base, background: `radial-gradient(circle at 35% 35%, ${color}ff, ${color}88 50%, ${color}22 80%, transparent)`, boxShadow: `0 0 16px ${color}55, 0 0 4px ${color}88` }}>
        <div style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0 }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", width: 2, height: s * 0.7, background: `linear-gradient(${color}00, ${color}66, ${color}00)`, transform: "translate(-50%, -50%)" }} />
          <div style={{ position: "absolute", top: "50%", left: "50%", width: s * 0.7, height: 2, background: `linear-gradient(90deg, ${color}00, ${color}66, ${color}00)`, transform: "translate(-50%, -50%)" }} />
        </div>
        <div style={{ width: s * 0.35, height: s * 0.35, borderRadius: "50%", background: `radial-gradient(circle at 40% 40%, #fff, ${color})`, position: "relative", zIndex: 1 }} />
      </div>
    );
  }

  if (type === "planet") {
    return (
      <div style={{ ...base, background: `radial-gradient(circle at 30% 30%, ${color}cc, ${color}66 60%, ${color}22)`, boxShadow: `0 0 12px ${color}44, inset -4px -4px 8px ${color}44` }}>
        <div style={{ width: s * 0.6, height: s * 0.6, borderRadius: "50%", background: `radial-gradient(circle at 35% 35%, ${color}ff, ${color}aa)`, border: `1px solid ${color}44` }} />
        <div style={{ position: "absolute", width: s * 0.9, height: s * 0.3, border: `1.5px solid ${color}55`, borderRadius: "50%", transform: "rotateX(65deg)" }} />
      </div>
    );
  }

  if (type === "giant") {
    return (
      <div style={{ ...base, background: `radial-gradient(circle at 35% 35%, #fff, ${color}ee 30%, ${color}88 60%, ${color}22 85%, transparent)`, boxShadow: `0 0 24px ${color}66, 0 0 8px ${color}aa` }}>
        <div style={{ width: s * 0.45, height: s * 0.45, borderRadius: "50%", background: `radial-gradient(circle at 40% 35%, #fff, ${color})`, position: "relative", zIndex: 1 }} />
      </div>
    );
  }

  if (type === "system") {
    return (
      <div style={{ ...base, background: `radial-gradient(circle, ${color}22 0%, transparent 70%)`, boxShadow: `0 0 12px ${color}33` }}>
        <div style={{ width: s * 0.22, height: s * 0.22, borderRadius: "50%", background: `radial-gradient(circle at 40% 40%, #fff, ${color})`, position: "absolute", zIndex: 1 }} />
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const r = s * 0.35;
          const x = Math.cos((deg * Math.PI) / 180) * r;
          const y = Math.sin((deg * Math.PI) / 180) * r;
          return (
            <div key={i} style={{
              position: "absolute", width: 4, height: 4, borderRadius: "50%",
              background: `${color}${i < 3 ? "cc" : "66"}`,
              left: `calc(50% + ${x}px - 2px)`, top: `calc(50% + ${y}px - 2px)`,
              boxShadow: i < 3 ? `0 0 4px ${color}88` : "none",
            }} />
          );
        })}
      </div>
    );
  }

  if (type === "galaxy") {
    return (
      <div style={{ ...base, background: `conic-gradient(from 0deg, ${color}11, ${color}44, ${color}11, ${color}44, ${color}11)`, boxShadow: `0 0 16px ${color}33` }}>
        <div style={{ width: s * 0.7, height: s * 0.7, borderRadius: "50%", background: `conic-gradient(from 45deg, ${color}22, ${color}66, ${color}22, ${color}66, ${color}22)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: s * 0.2, height: s * 0.2, borderRadius: "50%", background: `radial-gradient(circle, #fff, ${color})`, boxShadow: `0 0 8px ${color}88` }} />
        </div>
      </div>
    );
  }

  if (type === "nebula") {
    return (
      <div style={{ ...base, background: `radial-gradient(ellipse at 30% 40%, ${color}88, ${color}33 50%, transparent 80%)`, boxShadow: `0 0 14px ${color}44` }}>
        <div style={{ position: "absolute", width: s * 0.6, height: s * 0.4, background: `radial-gradient(ellipse at 60% 50%, ${color}66, transparent)`, borderRadius: "50%", top: "20%", left: "25%", transform: "rotate(-15deg)" }} />
        <svg width={s * 0.5} height={s * 0.3} viewBox="0 0 20 12" fill="none" style={{ position: "relative", zIndex: 1 }}>
          <polyline points="1,2 5,10 10,3 15,10 19,2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.8" />
          {[1, 5, 10, 15, 19].map((x, i) => (
            <circle key={i} cx={x} cy={[2, 10, 3, 10, 2][i]} r="1.2" fill="#fff" opacity="0.9" />
          ))}
        </svg>
      </div>
    );
  }

  // Fallback
  return (
    <div style={{ ...base, background: `radial-gradient(circle at 35% 35%, ${color}cc, ${color}44)`, boxShadow: `0 0 12px ${color}44` }}>
      <SvgIcon name="globe" size={s * 0.45} color="#fff" />
    </div>
  );
}

export {
  OrbitLogo, OrbitMark, OrbitIconMark, SvgIcon, SectionTag, ThemeToggle, OrbitalCanvas, IntelCanvas, CapitalCanvas, AgentsCanvas,
  Counter, FadeIn, GradientText, FloatingElement, Parallax, GlowCard, TypeWriter,
  StaggerChildren, MorphBlob, PulseRing, LogoMarquee, OrbitRings, PolymarketTicker, FaqAccordion,
  EcosystemCanvas, CelestialBody,
};
