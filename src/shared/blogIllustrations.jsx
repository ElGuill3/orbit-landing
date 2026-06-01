/* ── Branded Blog Article Illustrations ──
   Homologated geometric SVG illustrations for each blog article.
   Each uses the article's accent color and shares a consistent visual language:
   - Orbital/circular motifs (brand identity)
   - Geometric nodes and connections
   - Gradient fills with accent transparency
   - Dark-mode-first design
*/

import { ACCENTS } from "./theme";

/* ── Shared constants ── */
const VIEW = "0 0 800 420";

/* ═════════════════════════════════════════════════════
   INTEL — Collective Intelligence Network
   Constellation of interconnected nodes with data pulses
   ═════════════════════════════════════════════════════ */
export function IntelIllustration({ isDark = true }) {
  const accent = ACCENTS.intel[isDark ? "dark" : "light"];
  const bg = isDark ? "#000000" : "#F5F5F7";
  const dimLine = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";
  const dimFill = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)";

  return (
    <svg viewBox={VIEW} preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <radialGradient id="intel-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.15" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="intel-node-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.6" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="intel-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={accent} stopOpacity="0" />
          <stop offset="50%" stopColor={accent} stopOpacity="0.4" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
        <filter id="intel-blur">
          <feGaussianBlur stdDeviation="20" />
        </filter>
        <filter id="intel-blur-sm">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="800" height="420" fill={bg} />

      {/* Ambient glow */}
      <circle cx="400" cy="210" r="200" fill="url(#intel-glow)" />

      {/* Grid lines */}
      {[140, 210, 280].map((y) => (
        <line key={`h${y}`} x1="100" y1={y} x2="700" y2={y} stroke={dimLine} strokeWidth="0.5" />
      ))}
      {[200, 300, 400, 500, 600].map((x) => (
        <line key={`v${x}`} x1={x} y1="60" x2={x} y2="360" stroke={dimLine} strokeWidth="0.5" />
      ))}

      {/* Connection lines */}
      {[
        [400, 180, 280, 240], [400, 180, 520, 240], [400, 180, 400, 100],
        [280, 240, 180, 300], [280, 240, 340, 320], [520, 240, 620, 300],
        [520, 240, 460, 320], [180, 300, 140, 200], [620, 300, 660, 200],
        [340, 320, 460, 320], [180, 300, 340, 320], [620, 300, 460, 320],
        [400, 100, 280, 240], [400, 100, 520, 240],
        [140, 200, 280, 240], [660, 200, 520, 240],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={`conn${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={accent} strokeOpacity="0.15" strokeWidth="1" />
      ))}

      {/* Pulse paths */}
      <line x1="400" y1="180" x2="280" y2="240" stroke={accent} strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="4 8">
        <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="2s" repeatCount="indefinite" />
      </line>
      <line x1="400" y1="180" x2="520" y2="240" stroke={accent} strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="4 8">
        <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="2.3s" repeatCount="indefinite" />
      </line>
      <line x1="280" y1="240" x2="340" y2="320" stroke={accent} strokeOpacity="0.4" strokeWidth="1" strokeDasharray="3 6">
        <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1.8s" repeatCount="indefinite" />
      </line>
      <line x1="520" y1="240" x2="460" y2="320" stroke={accent} strokeOpacity="0.4" strokeWidth="1" strokeDasharray="3 6">
        <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="2.1s" repeatCount="indefinite" />
      </line>

      {/* Central orbital ring */}
      <circle cx="400" cy="210" r="120" stroke={accent} strokeOpacity="0.08" strokeWidth="1" fill="none" />
      <circle cx="400" cy="210" r="80" stroke={accent} strokeOpacity="0.12" strokeWidth="0.8" fill="none" strokeDasharray="6 10">
        <animateTransform attributeName="transform" type="rotate" from="0 400 210" to="360 400 210" dur="30s" repeatCount="indefinite" />
      </circle>

      {/* Data nodes — large */}
      {[
        { cx: 400, cy: 180, r: 18 },
        { cx: 280, cy: 240, r: 14 },
        { cx: 520, cy: 240, r: 14 },
      ].map((n, i) => (
        <g key={`ln${i}`}>
          <circle cx={n.cx} cy={n.cy} r={n.r * 2.5} fill="url(#intel-node-glow)" opacity="0.3" filter="url(#intel-blur-sm)" />
          <circle cx={n.cx} cy={n.cy} r={n.r} fill={bg} stroke={accent} strokeWidth="1.5" strokeOpacity="0.6" />
          <circle cx={n.cx} cy={n.cy} r={n.r * 0.4} fill={accent} opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.4;0.8" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}

      {/* Data nodes — medium */}
      {[
        { cx: 180, cy: 300, r: 10 }, { cx: 620, cy: 300, r: 10 },
        { cx: 340, cy: 320, r: 10 }, { cx: 460, cy: 320, r: 10 },
        { cx: 400, cy: 100, r: 10 },
      ].map((n, i) => (
        <g key={`mn${i}`}>
          <circle cx={n.cx} cy={n.cy} r={n.r} fill={bg} stroke={accent} strokeWidth="1" strokeOpacity="0.4" />
          <circle cx={n.cx} cy={n.cy} r={3} fill={accent} opacity="0.6">
            <animate attributeName="opacity" values="0.6;0.25;0.6" dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}

      {/* Data nodes — small satellite */}
      {[
        { cx: 140, cy: 200, r: 5 }, { cx: 660, cy: 200, r: 5 },
        { cx: 240, cy: 160, r: 4 }, { cx: 560, cy: 160, r: 4 },
        { cx: 300, cy: 360, r: 4 }, { cx: 500, cy: 360, r: 4 },
        { cx: 150, cy: 350, r: 3 }, { cx: 650, cy: 350, r: 3 },
      ].map((n, i) => (
        <circle key={`sn${i}`} cx={n.cx} cy={n.cy} r={n.r} fill={accent} opacity={0.2 + (i % 3) * 0.1} />
      ))}

      {/* Center "eye" — the Orbit symbol */}
      <circle cx="400" cy="180" r="6" fill={accent} opacity="0.9" />

      {/* Floating probability labels */}
      <g opacity="0.7">
        <rect x="155" y="263" width="50" height="22" rx="6" fill={dimFill} stroke={accent} strokeOpacity="0.2" strokeWidth="0.8" />
        <text x="180" y="278" textAnchor="middle" fill={accent} fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="500">72%</text>
      </g>
      <g opacity="0.6">
        <rect x="595" y="263" width="50" height="22" rx="6" fill={dimFill} stroke={accent} strokeOpacity="0.2" strokeWidth="0.8" />
        <text x="620" y="278" textAnchor="middle" fill={accent} fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="500">85%</text>
      </g>
      <g opacity="0.5">
        <rect x="375" y="335" width="50" height="22" rx="6" fill={dimFill} stroke={accent} strokeOpacity="0.2" strokeWidth="0.8" />
        <text x="400" y="350" textAnchor="middle" fill={accent} fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="500">63%</text>
      </g>

      {/* Tagline */}
      <text x="400" y="398" textAnchor="middle" fill={accent} fontSize="10" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="0.12em" opacity="0.35">
        COLLECTIVE INTELLIGENCE NETWORK
      </text>
    </svg>
  );
}


/* ═════════════════════════════════════════════════════
   RISK — Operational Shield / Hedge Grid
   Protective mesh with risk flow streams
   ═════════════════════════════════════════════════════ */
export function RiskIllustration({ isDark = true }) {
  const accent = ACCENTS.risk[isDark ? "dark" : "light"];
  const bg = isDark ? "#000000" : "#F5F5F7";
  const dimLine = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)";

  return (
    <svg viewBox={VIEW} preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <radialGradient id="risk-glow" cx="50%" cy="48%" r="45%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.12" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="risk-shield-grad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.25" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="risk-stream" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={accent} stopOpacity="0" />
          <stop offset="40%" stopColor={accent} stopOpacity="0.6" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
        <filter id="risk-blur">
          <feGaussianBlur stdDeviation="16" />
        </filter>
        <filter id="risk-blur-sm">
          <feGaussianBlur stdDeviation="4" />
        </filter>
        <clipPath id="shield-clip">
          <path d="M400 70 L520 120 L520 250 Q520 330 400 370 Q280 330 280 250 L280 120 Z" />
        </clipPath>
      </defs>

      {/* Background */}
      <rect width="800" height="420" fill={bg} />

      {/* Ambient glow */}
      <ellipse cx="400" cy="210" rx="250" ry="180" fill="url(#risk-glow)" />

      {/* Hex grid background */}
      {(() => {
        const hexes = [];
        const size = 30;
        const h = size * Math.sqrt(3);
        for (let row = 0; row < 8; row++) {
          for (let col = 0; col < 14; col++) {
            const x = 80 + col * size * 1.5;
            const y = 40 + row * h + (col % 2 ? h / 2 : 0);
            const dist = Math.sqrt((x - 400) ** 2 + (y - 210) ** 2);
            if (dist < 300) {
              const opacity = Math.max(0.03, 0.08 - dist / 4000);
              hexes.push(
                <polygon
                  key={`hex${row}_${col}`}
                  points={Array.from({ length: 6 }, (_, i) => {
                    const angle = (Math.PI / 3) * i - Math.PI / 6;
                    return `${x + size * 0.8 * Math.cos(angle)},${y + size * 0.8 * Math.sin(angle)}`;
                  }).join(" ")}
                  fill="none"
                  stroke={accent}
                  strokeOpacity={opacity}
                  strokeWidth="0.6"
                />
              );
            }
          }
        }
        return hexes;
      })()}

      {/* Shield outline */}
      <path
        d="M400 80 L510 125 L510 245 Q510 320 400 358 Q290 320 290 245 L290 125 Z"
        fill="none"
        stroke={accent}
        strokeOpacity="0.2"
        strokeWidth="1.5"
      />

      {/* Shield inner glow */}
      <path
        d="M400 100 L495 138 L495 242 Q495 308 400 340 Q305 308 305 242 L305 138 Z"
        fill="url(#risk-shield-grad)"
        opacity="0.4"
      />

      {/* Shield horizontal scan lines */}
      <g clipPath="url(#shield-clip)" opacity="0.3">
        {[130, 160, 190, 220, 250, 280, 310, 340].map((y) => (
          <line key={`scan${y}`} x1="260" y1={y} x2="540" y2={y} stroke={accent} strokeOpacity="0.15" strokeWidth="0.5" />
        ))}
      </g>

      {/* Checkmark in shield center */}
      <path
        d="M375 210 L393 228 L428 188"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
        fill="none"
      >
        <animate attributeName="stroke-dasharray" from="0 100" to="100 0" dur="2s" fill="freeze" />
      </path>

      {/* Incoming risk streams — left side */}
      {[
        { y: 140, label: "TARIFF" },
        { y: 200, label: "FX VOL" },
        { y: 260, label: "REGULAT" },
        { y: 320, label: "POLITIC" },
      ].map((stream, i) => (
        <g key={`ls${i}`}>
          {/* Stream line */}
          <line x1="60" y1={stream.y} x2="280" y2={stream.y + (210 - stream.y) * 0.3} stroke={accent} strokeOpacity="0.15" strokeWidth="1" />
          {/* Animated pulse */}
          <circle r="3" fill={accent} opacity="0.7">
            <animateMotion
              path={`M60,${stream.y} L280,${stream.y + (210 - stream.y) * 0.3}`}
              dur={`${2.5 + i * 0.4}s`}
              repeatCount="indefinite"
            />
            <animate attributeName="opacity" values="0.7;0.2;0.7" dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" />
          </circle>
          {/* Label */}
          <text x="68" y={stream.y - 8} fill={accent} fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="500" opacity="0.35">{stream.label}</text>
        </g>
      ))}

      {/* Incoming risk streams — right side */}
      {[
        { y: 150, label: "CLIMATE" },
        { y: 220, label: "ENERGY" },
        { y: 290, label: "SUPPLY" },
      ].map((stream, i) => (
        <g key={`rs${i}`}>
          <line x1="740" y1={stream.y} x2="520" y2={stream.y + (210 - stream.y) * 0.3} stroke={accent} strokeOpacity="0.15" strokeWidth="1" />
          <circle r="3" fill={accent} opacity="0.6">
            <animateMotion
              path={`M740,${stream.y} L520,${stream.y + (210 - stream.y) * 0.3}`}
              dur={`${2.8 + i * 0.5}s`}
              repeatCount="indefinite"
            />
            <animate attributeName="opacity" values="0.6;0.2;0.6" dur={`${2.8 + i * 0.5}s`} repeatCount="indefinite" />
          </circle>
          <text x="732" y={stream.y - 8} textAnchor="end" fill={accent} fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="500" opacity="0.35">{stream.label}</text>
        </g>
      ))}

      {/* Deflection particles (risks being deflected by shield) */}
      {[
        { sx: 290, sy: 160, ex: 220, ey: 100 },
        { sx: 290, sy: 240, ex: 200, ey: 330 },
        { sx: 510, sy: 170, ex: 580, ey: 100 },
        { sx: 510, sy: 250, ex: 600, ey: 330 },
      ].map((p, i) => (
        <circle key={`dp${i}`} r="2" fill={accent} opacity="0.4">
          <animateMotion
            path={`M${p.sx},${p.sy} Q${(p.sx + p.ex) / 2},${p.sy + (p.ey - p.sy) * 0.2} ${p.ex},${p.ey}`}
            dur={`${3 + i * 0.3}s`}
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0.4;0;0.4" dur={`${3 + i * 0.3}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* Corner metrics */}
      <g opacity="0.5">
        <rect x="100" y="60" width="70" height="28" rx="7" fill={isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)"} stroke={accent} strokeOpacity="0.15" strokeWidth="0.8" />
        <text x="135" y="79" textAnchor="middle" fill={accent} fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="600">-47%</text>
      </g>
      <g opacity="0.4">
        <rect x="630" y="60" width="70" height="28" rx="7" fill={isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)"} stroke={accent} strokeOpacity="0.15" strokeWidth="0.8" />
        <text x="665" y="79" textAnchor="middle" fill={accent} fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="600">HEDGED</text>
      </g>

      {/* Tagline */}
      <text x="400" y="400" textAnchor="middle" fill={accent} fontSize="10" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="0.12em" opacity="0.35">
        OPERATIONAL RISK SHIELD
      </text>
    </svg>
  );
}


/* ═════════════════════════════════════════════════════
   CAPITAL — Quantitative Trading / Orbital Chart
   Abstract chart with orbital paths and data points
   ═════════════════════════════════════════════════════ */
export function CapitalIllustration({ isDark = true }) {
  const accent = ACCENTS.capital[isDark ? "dark" : "light"];
  const bg = isDark ? "#000000" : "#F5F5F7";
  const dimLine = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)";
  const dimFill = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)";

  // Quantitative curve data points (ascending trend)
  const curvePoints = [
    [100, 300], [140, 290], [180, 310], [220, 280], [260, 295],
    [300, 260], [340, 270], [380, 240], [420, 250], [460, 220],
    [500, 230], [540, 195], [580, 205], [620, 170], [660, 180], [700, 140],
  ];
  const curvePath = curvePoints.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(" ");
  const areaPath = curvePath + ` L700,380 L100,380 Z`;

  // Secondary curve (benchmark, flatter)
  const benchPoints = [
    [100, 280], [180, 275], [260, 285], [340, 270], [420, 278],
    [500, 265], [580, 272], [660, 260], [700, 255],
  ];
  const benchPath = benchPoints.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(" ");

  return (
    <svg viewBox={VIEW} preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="cap-area" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.15" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
        <radialGradient id="cap-glow" cx="70%" cy="30%" r="40%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.12" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cap-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.3" />
          <stop offset="50%" stopColor={accent} stopOpacity="0.9" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.7" />
        </linearGradient>
        <filter id="cap-glow-filter">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="800" height="420" fill={bg} />

      {/* Ambient glow */}
      <ellipse cx="550" cy="170" rx="200" ry="150" fill="url(#cap-glow)" />

      {/* Chart grid */}
      {/* Horizontal grid lines */}
      {[140, 180, 220, 260, 300, 340, 380].map((y) => (
        <line key={`gh${y}`} x1="100" y1={y} x2="700" y2={y} stroke={dimLine} strokeWidth="0.5" />
      ))}
      {/* Vertical grid lines */}
      {[100, 200, 300, 400, 500, 600, 700].map((x) => (
        <line key={`gv${x}`} x1={x} y1="100" x2={x} y2="380" stroke={dimLine} strokeWidth="0.5" />
      ))}

      {/* Y-axis labels */}
      {[
        { y: 140, label: "24%" }, { y: 180, label: "20%" },
        { y: 220, label: "16%" }, { y: 260, label: "12%" },
        { y: 300, label: "8%" }, { y: 340, label: "4%" },
      ].map((item) => (
        <text key={`yl${item.y}`} x="84" y={item.y + 4} textAnchor="end" fill={isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"} fontSize="9" fontFamily="JetBrains Mono, monospace">
          {item.label}
        </text>
      ))}

      {/* Area fill under main curve */}
      <path d={areaPath} fill="url(#cap-area)" />

      {/* Benchmark line (S&P 500 / traditional) */}
      <path d={benchPath} stroke={isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)"} strokeWidth="1.5" strokeDasharray="4 6" />
      <text x="710" y={255} fill={isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)"} fontSize="9" fontFamily="JetBrains Mono, monospace">S&amp;P</text>

      {/* Main performance curve (glow) */}
      <path d={curvePath} stroke={accent} strokeOpacity="0.3" strokeWidth="4" fill="none" filter="url(#cap-glow-filter)" />

      {/* Main performance curve */}
      <path d={curvePath} stroke="url(#cap-line-grad)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* Data points on curve */}
      {curvePoints.filter((_, i) => i % 2 === 0).map(([x, y], i) => (
        <g key={`dp${i}`}>
          <circle cx={x} cy={y} r="6" fill={accent} opacity="0.1" />
          <circle cx={x} cy={y} r="3" fill={bg} stroke={accent} strokeWidth="1.5" strokeOpacity="0.7" />
        </g>
      ))}

      {/* Latest point highlight */}
      <circle cx="700" cy="140" r="12" fill={accent} opacity="0.08">
        <animate attributeName="r" values="12;18;12" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.08;0.03;0.08" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="700" cy="140" r="5" fill={bg} stroke={accent} strokeWidth="2" />
      <circle cx="700" cy="140" r="2" fill={accent} />

      {/* Orbital rings around latest point */}
      <ellipse cx="700" cy="140" rx="30" ry="18" stroke={accent} strokeOpacity="0.12" strokeWidth="0.8" fill="none" transform="rotate(-15 700 140)">
        <animateTransform attributeName="transform" type="rotate" from="-15 700 140" to="345 700 140" dur="20s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="700" cy="140" rx="45" ry="25" stroke={accent} strokeOpacity="0.06" strokeWidth="0.6" fill="none" transform="rotate(20 700 140)">
        <animateTransform attributeName="transform" type="rotate" from="20 700 140" to="380 700 140" dur="30s" repeatCount="indefinite" />
      </ellipse>

      {/* Metric cards */}
      <g opacity="0.7">
        <rect x="120" y="75" width="100" height="48" rx="10" fill={dimFill} stroke={accent} strokeOpacity="0.15" strokeWidth="0.8" />
        <text x="170" y="95" textAnchor="middle" fill={accent} fontSize="16" fontFamily="JetBrains Mono, monospace" fontWeight="700">18%</text>
        <text x="170" y="112" textAnchor="middle" fill={isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.25)"} fontSize="8" fontFamily="DM Sans, sans-serif" fontWeight="500">NET ANNUAL</text>
      </g>
      <g opacity="0.6">
        <rect x="250" y="75" width="100" height="48" rx="10" fill={dimFill} stroke={accent} strokeOpacity="0.12" strokeWidth="0.8" />
        <text x="300" y="95" textAnchor="middle" fill={accent} fontSize="16" fontFamily="JetBrains Mono, monospace" fontWeight="700">&gt;1.5</text>
        <text x="300" y="112" textAnchor="middle" fill={isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.25)"} fontSize="8" fontFamily="DM Sans, sans-serif" fontWeight="500">SHARPE RATIO</text>
      </g>
      <g opacity="0.5">
        <rect x="380" y="75" width="100" height="48" rx="10" fill={dimFill} stroke={accent} strokeOpacity="0.10" strokeWidth="0.8" />
        <text x="430" y="95" textAnchor="middle" fill={accent} fontSize="16" fontFamily="JetBrains Mono, monospace" fontWeight="700">&lt;0.2</text>
        <text x="430" y="112" textAnchor="middle" fill={isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.25)"} fontSize="8" fontFamily="DM Sans, sans-serif" fontWeight="500">S&amp;P CORREL</text>
      </g>

      {/* Tagline */}
      <text x="400" y="405" textAnchor="middle" fill={accent} fontSize="10" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="0.12em" opacity="0.35">
        QUANTITATIVE PERFORMANCE
      </text>
    </svg>
  );
}


/* ═════════════════════════════════════════════════════
   EDUCATION — Prediction Market Guide
   Abstract market with connected nodes, floating probabilities,
   balance scale, ascending charts and contract icons
   ═════════════════════════════════════════════════════ */
export function PredictionMarketIllustration({ isDark = true }) {
  const accent = "#4299E1";
  const bg = isDark ? "#000000" : "#F5F5F7";
  const dimLine = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";
  const dimFill = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)";

  /* Ascending line chart data (background) */
  const chartPoints = [
    [80, 360], [130, 350], [180, 355], [230, 335], [280, 340],
    [330, 320], [380, 325], [430, 305], [480, 295], [530, 280],
    [580, 285], [630, 265], [680, 255], [720, 240],
  ];
  const chartPath = chartPoints.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(" ");

  /* Participant nodes */
  const nodes = [
    { cx: 400, cy: 175, r: 20, label: null },       // Central hub
    { cx: 250, cy: 140, r: 12, label: null },        // Top-left
    { cx: 550, cy: 140, r: 12, label: null },        // Top-right
    { cx: 190, cy: 250, r: 10, label: null },        // Mid-left
    { cx: 610, cy: 250, r: 10, label: null },        // Mid-right
    { cx: 300, cy: 310, r: 9, label: null },         // Bottom-left
    { cx: 500, cy: 310, r: 9, label: null },         // Bottom-right
    { cx: 140, cy: 170, r: 5, label: null },         // Satellite
    { cx: 660, cy: 170, r: 5, label: null },         // Satellite
    { cx: 340, cy: 100, r: 5, label: null },         // Satellite top
    { cx: 460, cy: 100, r: 5, label: null },         // Satellite top
  ];

  /* Connections between nodes */
  const connections = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
    [1, 3], [2, 4], [1, 9], [2, 10], [3, 5], [4, 6],
    [5, 6], [1, 7], [2, 8], [9, 10],
  ];

  return (
    <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <radialGradient id="pm-glow" cx="50%" cy="40%" r="45%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.14" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="pm-node-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.5" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pm-chart-area" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.08" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
        <linearGradient id="pm-chart-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.15" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.35" />
        </linearGradient>
        <filter id="pm-blur-sm">
          <feGaussianBlur stdDeviation="5" />
        </filter>
        <filter id="pm-blur-lg">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="800" height="450" fill={bg} />

      {/* Ambient glow */}
      <ellipse cx="400" cy="200" rx="260" ry="190" fill="url(#pm-glow)" />

      {/* Subtle grid */}
      {[130, 200, 270, 340].map((y) => (
        <line key={`h${y}`} x1="80" y1={y} x2="720" y2={y} stroke={dimLine} strokeWidth="0.5" />
      ))}
      {[200, 320, 400, 480, 600].map((x) => (
        <line key={`v${x}`} x1={x} y1="80" x2={x} y2="380" stroke={dimLine} strokeWidth="0.3" />
      ))}

      {/* Background ascending chart */}
      <path d={chartPath + " L720,400 L80,400 Z"} fill="url(#pm-chart-area)" />
      <path d={chartPath} stroke="url(#pm-chart-line)" strokeWidth="1.2" fill="none" strokeLinecap="round" />

      {/* Network connections */}
      {connections.map(([a, b], i) => (
        <line
          key={`conn${i}`}
          x1={nodes[a].cx} y1={nodes[a].cy}
          x2={nodes[b].cx} y2={nodes[b].cy}
          stroke={accent} strokeOpacity="0.12" strokeWidth="0.8"
        />
      ))}

      {/* Animated pulse lines (select key connections) */}
      {[
        [0, 1], [0, 2], [1, 3], [2, 4], [5, 6],
      ].map(([a, b], i) => (
        <line
          key={`pulse${i}`}
          x1={nodes[a].cx} y1={nodes[a].cy}
          x2={nodes[b].cx} y2={nodes[b].cy}
          stroke={accent} strokeOpacity="0.4" strokeWidth="1.2"
          strokeDasharray="4 10"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-28" dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" />
        </line>
      ))}

      {/* Orbital rings around central hub */}
      <circle cx="400" cy="175" r="55" stroke={accent} strokeOpacity="0.06" strokeWidth="0.8" fill="none" />
      <circle cx="400" cy="175" r="90" stroke={accent} strokeOpacity="0.04" strokeWidth="0.6" fill="none" strokeDasharray="5 12">
        <animateTransform attributeName="transform" type="rotate" from="0 400 175" to="360 400 175" dur="45s" repeatCount="indefinite" />
      </circle>

      {/* Participant nodes — large (first 7) */}
      {nodes.slice(0, 7).map((n, i) => (
        <g key={`ln${i}`}>
          <circle cx={n.cx} cy={n.cy} r={n.r * 2.2} fill="url(#pm-node-glow)" opacity="0.25" filter="url(#pm-blur-sm)" />
          <circle cx={n.cx} cy={n.cy} r={n.r} fill={bg} stroke={accent} strokeWidth={i === 0 ? "1.5" : "1"} strokeOpacity={i === 0 ? "0.6" : "0.35"} />
          <circle cx={n.cx} cy={n.cy} r={n.r * 0.35} fill={accent} opacity={i === 0 ? "0.8" : "0.5"}>
            <animate attributeName="opacity" values={`${i === 0 ? "0.8" : "0.5"};${i === 0 ? "0.4" : "0.2"};${i === 0 ? "0.8" : "0.5"}`} dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}

      {/* Satellite nodes (small) */}
      {nodes.slice(7).map((n, i) => (
        <circle key={`sn${i}`} cx={n.cx} cy={n.cy} r={n.r} fill={accent} opacity={0.2 + (i % 3) * 0.08}>
          <animate attributeName="opacity" values={`${0.2 + (i % 3) * 0.08};${0.1};${0.2 + (i % 3) * 0.08}`} dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* Central balance / scale symbol */}
      {/* Fulcrum */}
      <polygon points="400,195 392,212 408,212" fill={accent} opacity="0.2" />
      {/* Beam — slightly tilted to show market lean */}
      <line x1="340" y1="193" x2="460" y2="197" stroke={accent} strokeOpacity="0.35" strokeWidth="1.8" strokeLinecap="round" />
      {/* Left pan (heavier side = higher probability) */}
      <path d="M325,193 Q340,202 355,193" stroke={accent} strokeOpacity="0.3" strokeWidth="1.2" fill="none" />
      <line x1="340" y1="193" x2="340" y2="200" stroke={accent} strokeOpacity="0.25" strokeWidth="0.8" />
      {/* Right pan */}
      <path d="M445,197 Q460,204 475,197" stroke={accent} strokeOpacity="0.2" strokeWidth="1.2" fill="none" />
      <line x1="460" y1="197" x2="460" y2="202" stroke={accent} strokeOpacity="0.2" strokeWidth="0.8" />

      {/* Floating probability labels */}
      <g opacity="0.75">
        <rect x="165" y="112" width="58" height="24" rx="7" fill={dimFill} stroke={accent} strokeOpacity="0.25" strokeWidth="0.8" />
        <text x="194" y="128" textAnchor="middle" fill={accent} fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="600">0.65</text>
      </g>
      <g opacity="0.6">
        <rect x="575" y="112" width="58" height="24" rx="7" fill={dimFill} stroke={accent} strokeOpacity="0.2" strokeWidth="0.8" />
        <text x="604" y="128" textAnchor="middle" fill={accent} fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="600">0.42</text>
      </g>
      <g opacity="0.55">
        <rect x="371" y="80" width="58" height="24" rx="7" fill={dimFill} stroke={accent} strokeOpacity="0.2" strokeWidth="0.8" />
        <text x="400" y="96" textAnchor="middle" fill={accent} fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="600">0.78</text>
      </g>
      <g opacity="0.4">
        <rect x="255" y="280" width="58" height="24" rx="7" fill={dimFill} stroke={accent} strokeOpacity="0.15" strokeWidth="0.8" />
        <text x="284" y="296" textAnchor="middle" fill={accent} fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="600">0.31</text>
      </g>
      <g opacity="0.45">
        <rect x="490" y="280" width="58" height="24" rx="7" fill={dimFill} stroke={accent} strokeOpacity="0.15" strokeWidth="0.8" />
        <text x="519" y="296" textAnchor="middle" fill={accent} fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="600">0.56</text>
      </g>

      {/* Contract icons — small binary indicators */}
      {/* YES contract */}
      <g opacity="0.5">
        <rect x="120" y="310" width="44" height="32" rx="6" fill={dimFill} stroke={accent} strokeOpacity="0.2" strokeWidth="0.8" />
        <text x="142" y="324" textAnchor="middle" fill={accent} fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600">YES</text>
        <text x="142" y="336" textAnchor="middle" fill={accent} fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="500" opacity="0.7">$0.65</text>
      </g>
      {/* NO contract */}
      <g opacity="0.35">
        <rect x="636" y="310" width="44" height="32" rx="6" fill={dimFill} stroke={accent} strokeOpacity="0.15" strokeWidth="0.8" />
        <text x="658" y="324" textAnchor="middle" fill={accent} fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600">NO</text>
        <text x="658" y="336" textAnchor="middle" fill={accent} fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="500" opacity="0.7">$0.35</text>
      </g>

      {/* Traveling data particles along connections */}
      {[
        { path: `M${nodes[1].cx},${nodes[1].cy} L${nodes[0].cx},${nodes[0].cy}`, dur: "3s" },
        { path: `M${nodes[2].cx},${nodes[2].cy} L${nodes[0].cx},${nodes[0].cy}`, dur: "3.5s" },
        { path: `M${nodes[3].cx},${nodes[3].cy} L${nodes[0].cx},${nodes[0].cy}`, dur: "4s" },
        { path: `M${nodes[4].cx},${nodes[4].cy} L${nodes[0].cx},${nodes[0].cy}`, dur: "3.8s" },
      ].map((p, i) => (
        <circle key={`tp${i}`} r="2.5" fill={accent} opacity="0.6">
          <animateMotion path={p.path} dur={p.dur} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0.15;0.6" dur={p.dur} repeatCount="indefinite" />
        </circle>
      ))}

      {/* Extra small satellites for depth */}
      {[
        { cx: 110, cy: 220, r: 3 }, { cx: 690, cy: 220, r: 3 },
        { cx: 160, cy: 370, r: 2.5 }, { cx: 640, cy: 370, r: 2.5 },
        { cx: 400, cy: 370, r: 3 },
      ].map((n, i) => (
        <circle key={`xs${i}`} cx={n.cx} cy={n.cy} r={n.r} fill={accent} opacity={0.12 + (i % 2) * 0.06} />
      ))}

      {/* Tagline */}
      <text x="400" y="428" textAnchor="middle" fill={accent} fontSize="10" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="0.12em" opacity="0.35">
        PREDICTION MARKET NETWORK
      </text>
    </svg>
  );
}


/* ═════════════════════════════════════════════════════
   MECHANICS — Gears, Order Book & Price Chart Flow
   Interconnected gears, stylized bid/ask order book,
   data flowing left-to-right into a price chart
   ═════════════════════════════════════════════════════ */
export function MechanicsPredictionIllustration({ isDark = true }) {
  const navy = "#1A365D";
  const accent = "#4299E1";
  const light = "#EBF8FF";
  const bg = isDark ? "#000000" : "#F5F5F7";
  const dimLine = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";
  const dimFill = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)";
  const textDim = isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.2)";

  /* Gear tooth generator */
  const gearPath = (cx, cy, r, teeth, toothH) => {
    const pts = [];
    for (let i = 0; i < teeth; i++) {
      const a1 = (i / teeth) * Math.PI * 2;
      const a2 = ((i + 0.3) / teeth) * Math.PI * 2;
      const a3 = ((i + 0.5) / teeth) * Math.PI * 2;
      const a4 = ((i + 0.8) / teeth) * Math.PI * 2;
      pts.push(`${cx + r * Math.cos(a1)},${cy + r * Math.sin(a1)}`);
      pts.push(`${cx + (r + toothH) * Math.cos(a2)},${cy + (r + toothH) * Math.sin(a2)}`);
      pts.push(`${cx + (r + toothH) * Math.cos(a3)},${cy + (r + toothH) * Math.sin(a3)}`);
      pts.push(`${cx + r * Math.cos(a4)},${cy + r * Math.sin(a4)}`);
    }
    return "M" + pts.join(" L") + " Z";
  };

  /* Price chart points */
  const pricePoints = [
    [490, 260], [510, 250], [530, 255], [550, 235], [570, 240],
    [590, 220], [610, 225], [630, 205], [650, 210], [670, 190],
    [690, 195], [710, 175], [730, 170],
  ];
  const pricePath = pricePoints.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(" ");

  return (
    <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <radialGradient id="mech-glow" cx="50%" cy="46%" r="42%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.1" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="mech-price-area" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.1" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
        <filter id="mech-blur-sm"><feGaussianBlur stdDeviation="5" /></filter>
      </defs>

      <rect width="800" height="450" fill={bg} />
      <ellipse cx="400" cy="225" rx="260" ry="190" fill="url(#mech-glow)" />

      {/* Grid */}
      {[150, 225, 300, 375].map((y) => (
        <line key={`h${y}`} x1="60" y1={y} x2="740" y2={y} stroke={dimLine} strokeWidth="0.5" />
      ))}

      {/* ── LEFT: Interconnected Gears ── */}
      {/* Large gear */}
      <g opacity="0.6">
        <path d={gearPath(150, 200, 48, 12, 10)} fill="none" stroke={accent} strokeWidth="1.2" strokeOpacity="0.35">
          <animateTransform attributeName="transform" type="rotate" from="0 150 200" to="360 150 200" dur="20s" repeatCount="indefinite" />
        </path>
        <circle cx="150" cy="200" r="20" fill={dimFill} stroke={accent} strokeOpacity="0.2" strokeWidth="1" />
        <circle cx="150" cy="200" r="5" fill={accent} opacity="0.5" />
      </g>
      {/* Medium gear (interlocked) */}
      <g opacity="0.5">
        <path d={gearPath(230, 260, 32, 9, 8)} fill="none" stroke={accent} strokeWidth="1" strokeOpacity="0.3">
          <animateTransform attributeName="transform" type="rotate" from="360 230 260" to="0 230 260" dur="14s" repeatCount="indefinite" />
        </path>
        <circle cx="230" cy="260" r="14" fill={dimFill} stroke={accent} strokeOpacity="0.2" strokeWidth="0.8" />
        <circle cx="230" cy="260" r="4" fill={accent} opacity="0.4" />
      </g>
      {/* Small gear */}
      <g opacity="0.4">
        <path d={gearPath(110, 310, 22, 7, 6)} fill="none" stroke={accent} strokeWidth="0.8" strokeOpacity="0.25">
          <animateTransform attributeName="transform" type="rotate" from="0 110 310" to="360 110 310" dur="10s" repeatCount="indefinite" />
        </path>
        <circle cx="110" cy="310" r="9" fill={dimFill} stroke={accent} strokeOpacity="0.15" strokeWidth="0.8" />
        <circle cx="110" cy="310" r="3" fill={accent} opacity="0.3" />
      </g>

      {/* ── CENTER: Stylized Order Book ── */}
      <g opacity="0.7">
        <rect x="310" y="100" width="170" height="260" rx="10" fill={dimFill} stroke={accent} strokeOpacity="0.15" strokeWidth="0.8" />
        {/* Header */}
        <text x="395" y="125" textAnchor="middle" fill={accent} fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="600" opacity="0.6">ORDER BOOK</text>
        <line x1="320" y1="133" x2="470" y2="133" stroke={accent} strokeOpacity="0.15" strokeWidth="0.5" />
        {/* Column headers */}
        <text x="345" y="148" textAnchor="middle" fill={accent} fontSize="7" fontFamily="JetBrains Mono, monospace" fontWeight="500" opacity="0.35">BID</text>
        <text x="395" y="148" textAnchor="middle" fill={accent} fontSize="7" fontFamily="JetBrains Mono, monospace" fontWeight="500" opacity="0.35">PRICE</text>
        <text x="445" y="148" textAnchor="middle" fill={accent} fontSize="7" fontFamily="JetBrains Mono, monospace" fontWeight="500" opacity="0.35">ASK</text>
        {/* Bid rows (green-ish / accent) */}
        {[
          { bid: "2,340", price: "$0.72", ask: "" },
          { bid: "1,850", price: "$0.70", ask: "" },
          { bid: "3,100", price: "$0.68", ask: "" },
          { bid: "980", price: "$0.65", ask: "" },
        ].map((row, i) => (
          <g key={`bid${i}`}>
            <rect x="320" y={155 + i * 24} width={25 + (4 - i) * 8} height="18" rx="3" fill={accent} opacity={0.06 + (4 - i) * 0.02} />
            <text x="345" y={168 + i * 24} textAnchor="middle" fill={accent} fontSize="8" fontFamily="JetBrains Mono, monospace" opacity={0.5 - i * 0.06}>{row.bid}</text>
            <text x="395" y={168 + i * 24} textAnchor="middle" fill={accent} fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600" opacity={0.6 - i * 0.05}>{row.price}</text>
          </g>
        ))}
        {/* Spread line */}
        <line x1="325" y1="253" x2="465" y2="253" stroke={accent} strokeOpacity="0.25" strokeWidth="0.8" strokeDasharray="3 3" />
        <text x="395" y="265" textAnchor="middle" fill={accent} fontSize="7" fontFamily="JetBrains Mono, monospace" opacity="0.4">SPREAD 0.03</text>
        {/* Ask rows */}
        {[
          { bid: "", price: "$0.75", ask: "1,200" },
          { bid: "", price: "$0.78", ask: "2,050" },
          { bid: "", price: "$0.80", ask: "1,680" },
          { bid: "", price: "$0.82", ask: "3,400" },
        ].map((row, i) => (
          <g key={`ask${i}`}>
            <rect x={455 - 25 - (4 - i) * 8} y={273 + i * 24} width={25 + (4 - i) * 8} height="18" rx="3" fill={navy} opacity={0.08 + i * 0.02} />
            <text x="395" y={286 + i * 24} textAnchor="middle" fill={accent} fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600" opacity={0.5 + i * 0.03}>{row.price}</text>
            <text x="445" y={286 + i * 24} textAnchor="middle" fill={accent} fontSize="8" fontFamily="JetBrains Mono, monospace" opacity={0.4 + i * 0.04}>{row.ask}</text>
          </g>
        ))}
      </g>

      {/* ── Data flow arrows: Gears → Order Book → Price Chart ── */}
      {/* Left flow: gears to order book */}
      <line x1="210" y1="200" x2="305" y2="200" stroke={accent} strokeOpacity="0.15" strokeWidth="1" />
      <circle r="3" fill={accent} opacity="0.5">
        <animateMotion path="M210,200 L305,200" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0.15;0.5" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <line x1="265" y1="260" x2="305" y2="230" stroke={accent} strokeOpacity="0.1" strokeWidth="0.8" />
      {/* Right flow: order book to price chart */}
      <line x1="485" y1="230" x2="490" y2="260" stroke={accent} strokeOpacity="0.2" strokeWidth="1" />
      <circle r="3" fill={accent} opacity="0.5">
        <animateMotion path="M485,200 L530,220" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0.15;0.5" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* ── RIGHT: Price Chart ── */}
      {/* Chart grid */}
      {[200, 230, 260, 290].map((y) => (
        <line key={`cg${y}`} x1="490" y1={y} x2="740" y2={y} stroke={dimLine} strokeWidth="0.3" />
      ))}
      {/* Area fill */}
      <path d={pricePath + " L730,310 L490,310 Z"} fill="url(#mech-price-area)" />
      {/* Price line glow */}
      <path d={pricePath} stroke={accent} strokeOpacity="0.2" strokeWidth="3" fill="none" filter="url(#mech-blur-sm)" />
      {/* Price line */}
      <path d={pricePath} stroke={accent} strokeOpacity="0.7" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Data points */}
      {pricePoints.filter((_, i) => i % 3 === 0).map(([x, y], i) => (
        <g key={`pp${i}`}>
          <circle cx={x} cy={y} r="3" fill={bg} stroke={accent} strokeWidth="1.2" strokeOpacity="0.5" />
        </g>
      ))}
      {/* Latest point */}
      <circle cx="730" cy="170" r="8" fill={accent} opacity="0.06">
        <animate attributeName="r" values="8;14;8" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="730" cy="170" r="4" fill={bg} stroke={accent} strokeWidth="1.5" />
      <circle cx="730" cy="170" r="1.5" fill={accent} />

      {/* Price labels */}
      <g opacity="0.5">
        <rect x="530" y="100" width="68" height="38" rx="8" fill={dimFill} stroke={accent} strokeOpacity="0.15" strokeWidth="0.8" />
        <text x="564" y="118" textAnchor="middle" fill={accent} fontSize="13" fontFamily="JetBrains Mono, monospace" fontWeight="700">$0.72</text>
        <text x="564" y="131" textAnchor="middle" fill={textDim} fontSize="7" fontFamily="DM Sans, sans-serif" fontWeight="500">LAST PRICE</text>
      </g>
      <g opacity="0.4">
        <rect x="630" y="100" width="68" height="38" rx="8" fill={dimFill} stroke={accent} strokeOpacity="0.12" strokeWidth="0.8" />
        <text x="664" y="118" textAnchor="middle" fill={accent} fontSize="13" fontFamily="JetBrains Mono, monospace" fontWeight="700">+8.2%</text>
        <text x="664" y="131" textAnchor="middle" fill={textDim} fontSize="7" fontFamily="DM Sans, sans-serif" fontWeight="500">24H CHANGE</text>
      </g>

      {/* Satellite dots */}
      {[
        { cx: 80, cy: 140, r: 3 }, { cx: 750, cy: 300, r: 3 },
        { cx: 200, cy: 380, r: 2.5 }, { cx: 700, cy: 380, r: 2.5 },
      ].map((n, i) => (
        <circle key={`sat${i}`} cx={n.cx} cy={n.cy} r={n.r} fill={accent} opacity={0.12 + (i % 2) * 0.08} />
      ))}

      <text x="400" y="428" textAnchor="middle" fill={accent} fontSize="10" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="0.12em" opacity="0.35">
        MARKET MECHANICS
      </text>
    </svg>
  );
}


/* ═════════════════════════════════════════════════════
   AI NETWORK — Neural network with converging data
   Abstract neural net with data streams feeding center
   ═════════════════════════════════════════════════════ */
export function AINetworkIllustration({ isDark = true }) {
  const accent = "#4299E1";
  const bg = isDark ? "#000000" : "#F5F5F7";
  const dimLine = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";
  const dimFill = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)";

  // Neural network layers
  const layers = [
    { x: 160, nodes: [145, 205, 265, 325] },   // Input
    { x: 300, nodes: [165, 225, 285] },          // Hidden 1
    { x: 440, nodes: [185, 245, 305] },          // Hidden 2
    { x: 580, nodes: [205, 265] },               // Output
  ];

  return (
    <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <radialGradient id="ai-glow" cx="55%" cy="50%" r="40%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.12" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ai-node-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.5" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ai-stream" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={accent} stopOpacity="0" />
          <stop offset="50%" stopColor={accent} stopOpacity="0.5" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
        <filter id="ai-blur-sm">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="800" height="450" fill={bg} />

      {/* Ambient glow */}
      <ellipse cx="420" cy="225" rx="220" ry="175" fill="url(#ai-glow)" />

      {/* Grid */}
      {[130, 190, 250, 310].map((y) => (
        <line key={`h${y}`} x1="100" y1={y} x2="700" y2={y} stroke={dimLine} strokeWidth="0.5" />
      ))}

      {/* Neural connections between layers */}
      {layers.slice(0, -1).map((layer, li) => {
        const nextLayer = layers[li + 1];
        return layer.nodes.map((y1, ni) =>
          nextLayer.nodes.map((y2, nj) => {
            const opacity = 0.06 + Math.random() * 0.08;
            return (
              <line
                key={`conn${li}_${ni}_${nj}`}
                x1={layer.x}
                y1={y1}
                x2={nextLayer.x}
                y2={y2}
                stroke={accent}
                strokeOpacity={opacity}
                strokeWidth="0.8"
              />
            );
          })
        );
      })}

      {/* Animated pulse connections (select strong paths) */}
      {[
        { x1: 160, y1: 130, x2: 300, y2: 150 },
        { x1: 160, y1: 250, x2: 300, y2: 210 },
        { x1: 300, y1: 150, x2: 440, y2: 170 },
        { x1: 300, y1: 270, x2: 440, y2: 290 },
        { x1: 440, y1: 170, x2: 580, y2: 190 },
        { x1: 440, y1: 230, x2: 580, y2: 250 },
      ].map((p, i) => (
        <line key={`pulse${i}`} x1={p.x1} y1={p.y1} x2={p.x2} y2={p.y2} stroke={accent} strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="4 8">
          <animate attributeName="stroke-dashoffset" from="0" to="-24" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
        </line>
      ))}

      {/* Neural nodes */}
      {layers.map((layer, li) =>
        layer.nodes.map((y, ni) => {
          const isInput = li === 0;
          const isOutput = li === layers.length - 1;
          const r = isInput ? 12 : isOutput ? 14 : 10;
          return (
            <g key={`n${li}_${ni}`}>
              <circle cx={layer.x} cy={y} r={r * 2} fill="url(#ai-node-glow)" opacity="0.2" filter="url(#ai-blur-sm)" />
              <circle cx={layer.x} cy={y} r={r} fill={bg} stroke={accent} strokeWidth={isOutput ? "1.5" : "1"} strokeOpacity={isOutput ? "0.6" : "0.35"} />
              <circle cx={layer.x} cy={y} r={r * 0.35} fill={accent} opacity={isOutput ? "0.8" : "0.5"}>
                <animate attributeName="opacity" values={`${isOutput ? "0.8" : "0.5"};${isOutput ? "0.4" : "0.2"};${isOutput ? "0.8" : "0.5"}`} dur={`${2 + li * 0.5 + ni * 0.3}s`} repeatCount="indefinite" />
              </circle>
            </g>
          );
        })
      )}

      {/* Input labels (left side) */}
      {[
        { y: 130, label: "MARKETS" },
        { y: 190, label: "SOCIAL" },
        { y: 250, label: "MACRO" },
        { y: 310, label: "NEWS" },
      ].map((item, i) => (
        <g key={`il${i}`}>
          <line x1="85" y1={item.y} x2="148" y2={item.y} stroke={accent} strokeOpacity="0.15" strokeWidth="1" />
          <circle r="2.5" fill={accent} opacity="0.5">
            <animateMotion path={`M85,${item.y} L148,${item.y}`} dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0.15;0.5" dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" />
          </circle>
          <text x="78" y={item.y + 4} textAnchor="end" fill={accent} fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="500" opacity="0.35">{item.label}</text>
        </g>
      ))}

      {/* Output labels (right side) */}
      {[
        { y: 190, label: "SIGNALS" },
        { y: 250, label: "ALERTS" },
      ].map((item, i) => (
        <g key={`ol${i}`}>
          <line x1="594" y1={item.y} x2="660" y2={item.y} stroke={accent} strokeOpacity="0.2" strokeWidth="1" />
          <circle r="2.5" fill={accent} opacity="0.6">
            <animateMotion path={`M594,${item.y} L660,${item.y}`} dur={`${2.2 + i * 0.5}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0.2;0.6" dur={`${2.2 + i * 0.5}s`} repeatCount="indefinite" />
          </circle>
          <text x="668" y={item.y + 4} fill={accent} fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="500" opacity="0.45">{item.label}</text>
        </g>
      ))}

      {/* Layer labels */}
      {[
        { x: 160, label: "INPUT" },
        { x: 300, label: "PROCESS" },
        { x: 440, label: "ANALYZE" },
        { x: 580, label: "OUTPUT" },
      ].map((item) => (
        <text key={item.label} x={item.x} y={365} textAnchor="middle" fill={accent} fontSize="7" fontFamily="JetBrains Mono, monospace" fontWeight="500" opacity="0.25">{item.label}</text>
      ))}

      {/* Corner metric cards */}
      <g opacity="0.5">
        <rect x="620" y="95" width="68" height="40" rx="8" fill={dimFill} stroke={accent} strokeOpacity="0.15" strokeWidth="0.8" />
        <text x="654" y="113" textAnchor="middle" fill={accent} fontSize="13" fontFamily="JetBrains Mono, monospace" fontWeight="700">NLP</text>
        <text x="654" y="127" textAnchor="middle" fill={isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.2)"} fontSize="7" fontFamily="DM Sans, sans-serif" fontWeight="500">SENTIMENT</text>
      </g>
      <g opacity="0.4">
        <rect x="620" y="310" width="68" height="40" rx="8" fill={dimFill} stroke={accent} strokeOpacity="0.12" strokeWidth="0.8" />
        <text x="654" y="328" textAnchor="middle" fill={accent} fontSize="13" fontFamily="JetBrains Mono, monospace" fontWeight="700">ML</text>
        <text x="654" y="342" textAnchor="middle" fill={isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.2)"} fontSize="7" fontFamily="DM Sans, sans-serif" fontWeight="500">CALIBRATE</text>
      </g>

      {/* Brain outline behind neural network */}
      <ellipse cx="370" cy="230" rx="180" ry="140" stroke={accent} strokeOpacity="0.04" strokeWidth="1.5" fill="none" />
      <ellipse cx="370" cy="230" rx="140" ry="105" stroke={accent} strokeOpacity="0.06" strokeWidth="0.8" fill="none" strokeDasharray="5 12">
        <animateTransform attributeName="transform" type="rotate" from="0 370 230" to="360 370 230" dur="50s" repeatCount="indefinite" />
      </ellipse>

      {/* Tagline */}
      <text x="400" y="428" textAnchor="middle" fill={accent} fontSize="10" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="0.12em" opacity="0.35">
        AI-POWERED INTELLIGENCE
      </text>
    </svg>
  );
}


/* ═════════════════════════════════════════════════════
   QUANT FUND — Wall Street meets Silicon Valley
   Math formulas, candlestick charts, abstract code lines
   ═════════════════════════════════════════════════════ */
export function QuantFundIllustration({ isDark = true }) {
  const navy = "#1A365D";
  const accent = "#4299E1";
  const bg = isDark ? "#000000" : "#F5F5F7";
  const dimLine = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)";
  const dimFill = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)";
  const textDim = isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.2)";

  /* Candlestick data: [x, open, close, high, low] */
  const candles = [
    [340, 270, 250, 240, 280], [360, 250, 260, 245, 270],
    [380, 260, 240, 235, 268], [400, 240, 230, 222, 248],
    [420, 230, 245, 220, 250], [440, 245, 235, 228, 252],
    [460, 235, 218, 212, 240], [480, 218, 225, 210, 230],
    [500, 225, 210, 205, 232], [520, 210, 200, 192, 218],
    [540, 200, 205, 190, 212], [560, 205, 190, 185, 210],
    [580, 190, 180, 172, 198], [600, 180, 185, 170, 192],
    [620, 185, 170, 165, 190], [640, 170, 165, 158, 178],
  ];

  return (
    <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <radialGradient id="quant-glow" cx="50%" cy="50%" r="45%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.1" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="quant-area" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.08" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
        <filter id="quant-blur-sm"><feGaussianBlur stdDeviation="3" /></filter>
      </defs>

      <rect width="800" height="450" fill={bg} />
      <ellipse cx="400" cy="225" rx="260" ry="190" fill="url(#quant-glow)" />

      {/* Grid */}
      {[150, 200, 250, 300, 350].map((y) => (
        <line key={`h${y}`} x1="80" y1={y} x2="720" y2={y} stroke={dimLine} strokeWidth="0.5" />
      ))}
      {[160, 260, 340, 420, 500, 580, 660].map((x) => (
        <line key={`v${x}`} x1={x} y1="110" x2={x} y2="360" stroke={dimLine} strokeWidth="0.3" />
      ))}

      {/* ── LEFT: Mathematical Formulas ── */}
      <g opacity="0.6" fontFamily="Georgia, serif" fill={accent}>
        {/* Sigma summation */}
        <text x="120" y="165" fontSize="28" fontWeight="400" opacity="0.4">Σ</text>
        <text x="138" y="172" fontSize="9" fontFamily="JetBrains Mono, monospace" opacity="0.25">n=1</text>
        <text x="150" y="160" fontSize="10" fontFamily="JetBrains Mono, monospace" opacity="0.25">N</text>
        <text x="155" y="168" fontSize="11" fontFamily="JetBrains Mono, monospace" opacity="0.3">r(t)</text>

        {/* Alpha symbol */}
        <text x="90" y="220" fontSize="24" fontStyle="italic" opacity="0.35">α</text>
        <text x="112" y="220" fontSize="10" fontFamily="JetBrains Mono, monospace" opacity="0.25">= R - β·Rm</text>

        {/* Square root */}
        <text x="95" y="270" fontSize="18" opacity="0.3">√</text>
        <line x1="108" y1="255" x2="195" y2="255" stroke={accent} strokeOpacity="0.2" strokeWidth="0.8" />
        <text x="112" y="268" fontSize="10" fontFamily="JetBrains Mono, monospace" opacity="0.25">Var(P)</text>

        {/* Sharpe ratio formula */}
        <text x="85" y="315" fontSize="11" fontFamily="JetBrains Mono, monospace" opacity="0.3">S = </text>
        <text x="115" y="308" fontSize="10" fontFamily="JetBrains Mono, monospace" opacity="0.25">E[R] - Rf</text>
        <line x1="115" y1="314" x2="193" y2="314" stroke={accent} strokeOpacity="0.2" strokeWidth="0.8" />
        <text x="135" y="328" fontSize="10" fontFamily="JetBrains Mono, monospace" opacity="0.25">σ(R)</text>

        {/* Probability integral */}
        <text x="100" y="375" fontSize="22" opacity="0.25">∫</text>
        <text x="115" y="372" fontSize="9" fontFamily="JetBrains Mono, monospace" opacity="0.2">p(x)dx</text>
      </g>

      {/* Floating formula particles */}
      {["β", "μ", "σ²", "Δ", "λ"].map((sym, i) => (
        <text key={`fs${i}`} x={220 + i * 20} y={135 + (i % 3) * 25} textAnchor="middle" fill={accent} fontSize="12" fontFamily="Georgia, serif" fontStyle="italic" opacity={0.1 + (i % 2) * 0.05}>
          <animate attributeName="opacity" values={`${0.1 + (i % 2) * 0.05};${0.2};${0.1 + (i % 2) * 0.05}`} dur={`${4 + i * 0.7}s`} repeatCount="indefinite" />
          {sym}
        </text>
      ))}

      {/* ── CENTER-RIGHT: Candlestick Chart (screens) ── */}
      {/* Screen frame */}
      <rect x="320" y="120" width="350" height="230" rx="8" fill={dimFill} stroke={accent} strokeOpacity="0.12" strokeWidth="0.8" />
      <line x1="320" y1="142" x2="670" y2="142" stroke={accent} strokeOpacity="0.1" strokeWidth="0.5" />
      {/* Window dots */}
      <circle cx="335" cy="131" r="3" fill={accent} opacity="0.15" />
      <circle cx="345" cy="131" r="3" fill={accent} opacity="0.1" />
      <circle cx="355" cy="131" r="3" fill={accent} opacity="0.08" />
      <text x="500" y="135" textAnchor="middle" fill={accent} fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="500" opacity="0.3">ORBIT ENGINE — LIVE</text>

      {/* Candlestick chart */}
      {candles.map(([x, open, close, high, low], i) => {
        const bullish = close < open; // price going up (lower y = higher price)
        const bodyTop = Math.min(open, close);
        const bodyH = Math.abs(close - open);
        return (
          <g key={`c${i}`} opacity={0.4 + i * 0.03}>
            {/* Wick */}
            <line x1={x} y1={high} x2={x} y2={low} stroke={accent} strokeOpacity={bullish ? "0.5" : "0.25"} strokeWidth="0.8" />
            {/* Body */}
            <rect x={x - 5} y={bodyTop} width="10" height={Math.max(bodyH, 2)} rx="1" fill={bullish ? accent : "none"} stroke={accent} strokeWidth="0.8" strokeOpacity={bullish ? "0.6" : "0.3"} opacity={bullish ? "0.4" : "0.5"} />
          </g>
        );
      })}

      {/* Moving average line over candles */}
      <path d="M340,265 Q400,250 460,232 Q520,215 580,195 Q620,182 650,170" stroke={accent} strokeOpacity="0.35" strokeWidth="1.2" fill="none" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="4s" repeatCount="indefinite" />
      </path>

      {/* Y-axis labels */}
      {[
        { y: 165, label: "$0.85" }, { y: 205, label: "$0.70" },
        { y: 245, label: "$0.55" }, { y: 285, label: "$0.40" },
      ].map((item) => (
        <text key={`yl${item.y}`} x="315" y={item.y} textAnchor="end" fill={textDim} fontSize="7" fontFamily="JetBrains Mono, monospace">{item.label}</text>
      ))}

      {/* Latest price highlight */}
      <circle cx="640" cy="165" r="8" fill={accent} opacity="0.06">
        <animate attributeName="r" values="8;14;8" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="640" cy="165" r="4" fill={bg} stroke={accent} strokeWidth="1.5" />
      <circle cx="640" cy="165" r="1.5" fill={accent} />

      {/* ── BOTTOM: Abstract Code Lines ── */}
      <g opacity="0.5">
        <rect x="320" y="365" width="350" height="65" rx="6" fill={dimFill} stroke={accent} strokeOpacity="0.08" strokeWidth="0.5" />
        {/* Code line indicators */}
        {[
          { w: 85, text: "def optimize(portfolio):" },
          { w: 110, text: "  return max_sharpe(weights)" },
          { w: 95, text: "  risk = calc_var(pos, 0.99)" },
        ].map((line, i) => (
          <g key={`cl${i}`}>
            <text x="330" y={381 + i * 16} fill={accent} fontSize="7" fontFamily="JetBrains Mono, monospace" opacity={0.2 + i * 0.03}>{line.text}</text>
          </g>
        ))}
        {/* Cursor */}
        <rect x="330" y={381 + 3 * 16 - 10} width="6" height="10" rx="1" fill={accent} opacity="0.4">
          <animate attributeName="opacity" values="0.4;0;0.4" dur="1.2s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* ── Metric Cards ── */}
      <g opacity="0.7">
        <rect x="85" y="110" width="80" height="38" rx="8" fill={dimFill} stroke={accent} strokeOpacity="0.2" strokeWidth="0.8" />
        <text x="125" y="128" textAnchor="middle" fill={accent} fontSize="14" fontFamily="JetBrains Mono, monospace" fontWeight="700">18%</text>
        <text x="125" y="141" textAnchor="middle" fill={textDim} fontSize="7" fontFamily="DM Sans, sans-serif" fontWeight="500">NET ANNUAL</text>
      </g>
      <g opacity="0.6">
        <rect x="185" y="110" width="80" height="38" rx="8" fill={dimFill} stroke={accent} strokeOpacity="0.15" strokeWidth="0.8" />
        <text x="225" y="128" textAnchor="middle" fill={accent} fontSize="14" fontFamily="JetBrains Mono, monospace" fontWeight="700">&gt;1.5</text>
        <text x="225" y="141" textAnchor="middle" fill={textDim} fontSize="7" fontFamily="DM Sans, sans-serif" fontWeight="500">SHARPE</text>
      </g>

      {/* Satellite dots */}
      {[
        { cx: 740, cy: 130, r: 3 }, { cx: 750, cy: 380, r: 2.5 },
        { cx: 70, cy: 400, r: 3 }, { cx: 280, cy: 400, r: 2 },
      ].map((n, i) => (
        <circle key={`sat${i}`} cx={n.cx} cy={n.cy} r={n.r} fill={accent} opacity={0.1 + (i % 2) * 0.06} />
      ))}

      {/* Orbital ring */}
      <ellipse cx="640" cy="165" rx="25" ry="14" stroke={accent} strokeOpacity="0.08" strokeWidth="0.7" fill="none" transform="rotate(-20 640 165)">
        <animateTransform attributeName="transform" type="rotate" from="-20 640 165" to="340 640 165" dur="18s" repeatCount="indefinite" />
      </ellipse>

      <text x="400" y="428" textAnchor="middle" fill={accent} fontSize="10" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="0.12em" opacity="0.35">
        SYSTEMATIC ALPHA ENGINE
      </text>
    </svg>
  );
}


/* ═════════════════════════════════════════════════════
   PM vs ENCUESTAS — Balance / Comparison
   Clipboard with checkmarks on left, price chart on right,
   VS divider in center
   ═════════════════════════════════════════════════════ */
export function PMvsEncuestasIllustration({ isDark = true }) {
  const navy = "#1A365D";
  const accent = "#4299E1";
  const bg = isDark ? "#000000" : "#F5F5F7";
  const dimLine = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";
  const dimFill = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)";
  const textDim = isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.2)";

  /* Price chart points for right side */
  const pricePoints = [
    [480, 260], [500, 245], [520, 252], [540, 230], [560, 238],
    [580, 215], [600, 222], [620, 200], [640, 208], [660, 188],
    [680, 195], [700, 175],
  ];
  const pricePath = pricePoints.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(" ");

  return (
    <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <radialGradient id="enc-glow" cx="50%" cy="50%" r="45%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.1" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="enc-area" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.08" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
        <filter id="enc-blur-sm"><feGaussianBlur stdDeviation="4" /></filter>
      </defs>

      <rect width="800" height="450" fill={bg} />
      <ellipse cx="400" cy="225" rx="260" ry="190" fill="url(#enc-glow)" />

      {/* Grid */}
      {[150, 225, 300].map((y) => (
        <line key={`h${y}`} x1="60" y1={y} x2="740" y2={y} stroke={dimLine} strokeWidth="0.5" />
      ))}

      {/* ── LEFT: Clipboard with survey/checkmarks ── */}
      {/* Clipboard outline */}
      <rect x="90" y="110" width="200" height="270" rx="12" fill={dimFill} stroke={accent} strokeOpacity="0.15" strokeWidth="1" />
      {/* Clipboard clip */}
      <rect x="155" y="100" width="70" height="20" rx="6" fill={bg} stroke={accent} strokeOpacity="0.25" strokeWidth="1" />
      <circle cx="190" cy="110" r="4" fill={accent} opacity="0.3" />
      {/* Header */}
      <text x="190" y="150" textAnchor="middle" fill={accent} fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="600" opacity="0.5">ENCUESTA</text>
      <line x1="110" y1="158" x2="270" y2="158" stroke={accent} strokeOpacity="0.1" strokeWidth="0.5" />

      {/* Survey rows with checkboxes */}
      {[
        { y: 178, checked: true, text: "¿Apoya reforma?", pct: "52%" },
        { y: 210, checked: true, text: "¿Votará Sí?", pct: "48%" },
        { y: 242, checked: false, text: "¿Confía en gov?", pct: "35%" },
        { y: 274, checked: true, text: "¿Expectativa +?", pct: "61%" },
        { y: 306, checked: false, text: "¿Riesgo alto?", pct: "44%" },
      ].map((row, i) => (
        <g key={`sr${i}`} opacity={0.5 - i * 0.04}>
          {/* Checkbox */}
          <rect x="115" y={row.y - 8} width="14" height="14" rx="3" fill="none" stroke={accent} strokeOpacity="0.3" strokeWidth="0.8" />
          {row.checked && (
            <path d={`M${118},${row.y} L${122},${row.y + 3} L${127},${row.y - 4}`} stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" fill="none" />
          )}
          {/* Question text */}
          <text x="136" y={row.y + 3} fill={accent} fontSize="8" fontFamily="JetBrains Mono, monospace" opacity="0.3">{row.text}</text>
          {/* Percentage */}
          <text x="265" y={row.y + 3} textAnchor="end" fill={accent} fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="600" opacity="0.4">{row.pct}</text>
        </g>
      ))}

      {/* Warning indicators on clipboard — biases */}
      {[
        { y: 340, label: "± 3.5pp ERROR" },
        { y: 358, label: "3 WEEK DELAY" },
      ].map((item, i) => (
        <g key={`warn${i}`} opacity={0.35}>
          <text x="120" y={item.y} fill={navy} fontSize="7" fontFamily="JetBrains Mono, monospace" opacity="0.6">⚠ {item.label}</text>
        </g>
      ))}

      {/* ── CENTER: VS Divider ── */}
      <line x1="400" y1="120" x2="400" y2="380" stroke={accent} strokeOpacity="0.1" strokeWidth="1" strokeDasharray="6 6" />
      <circle cx="400" cy="225" r="28" fill={bg} stroke={accent} strokeOpacity="0.2" strokeWidth="1.5" />
      <circle cx="400" cy="225" r="22" fill={dimFill} stroke={accent} strokeOpacity="0.1" strokeWidth="0.8" />
      <text x="400" y="231" textAnchor="middle" fill={accent} fontSize="16" fontFamily="JetBrains Mono, monospace" fontWeight="700" opacity="0.6">VS</text>

      {/* Animated pulse ring around VS */}
      <circle cx="400" cy="225" r="28" fill="none" stroke={accent} strokeOpacity="0.15" strokeWidth="1">
        <animate attributeName="r" values="28;38;28" dur="3s" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" values="0.15;0;0.15" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* ── RIGHT: Price Chart (Prediction Market) ── */}
      {/* Chart container */}
      <rect x="450" y="110" width="280" height="270" rx="12" fill={dimFill} stroke={accent} strokeOpacity="0.15" strokeWidth="1" />
      <text x="590" y="138" textAnchor="middle" fill={accent} fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="600" opacity="0.5">PREDICTION MARKET</text>
      <line x1="465" y1="148" x2="715" y2="148" stroke={accent} strokeOpacity="0.1" strokeWidth="0.5" />

      {/* Chart grid */}
      {[190, 230, 270, 310].map((y) => (
        <line key={`cg${y}`} x1="470" y1={y} x2="710" y2={y} stroke={dimLine} strokeWidth="0.3" />
      ))}

      {/* Y-axis labels */}
      {[
        { y: 178, label: "80%" }, { y: 218, label: "60%" },
        { y: 258, label: "40%" }, { y: 298, label: "20%" },
      ].map((item) => (
        <text key={`ya${item.y}`} x="468" y={item.y} textAnchor="end" fill={textDim} fontSize="7" fontFamily="JetBrains Mono, monospace">{item.label}</text>
      ))}

      {/* Area fill */}
      <path d={pricePath + " L700,330 L480,330 Z"} fill="url(#enc-area)" />
      {/* Price line glow */}
      <path d={pricePath} stroke={accent} strokeOpacity="0.2" strokeWidth="3" fill="none" filter="url(#enc-blur-sm)" />
      {/* Price line */}
      <path d={pricePath} stroke={accent} strokeOpacity="0.7" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* Data points */}
      {pricePoints.filter((_, i) => i % 3 === 0).map(([x, y], i) => (
        <circle key={`dp${i}`} cx={x} cy={y} r="3" fill={bg} stroke={accent} strokeWidth="1.2" strokeOpacity="0.5" />
      ))}

      {/* Latest price */}
      <circle cx="700" cy="175" r="8" fill={accent} opacity="0.06">
        <animate attributeName="r" values="8;14;8" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="700" cy="175" r="4" fill={bg} stroke={accent} strokeWidth="1.5" />
      <circle cx="700" cy="175" r="1.5" fill={accent} />

      {/* Probability callout */}
      <g opacity="0.6">
        <rect x="618" y="155" width="60" height="32" rx="6" fill={dimFill} stroke={accent} strokeOpacity="0.2" strokeWidth="0.8" />
        <text x="648" y="170" textAnchor="middle" fill={accent} fontSize="12" fontFamily="JetBrains Mono, monospace" fontWeight="700">$0.72</text>
        <text x="648" y="182" textAnchor="middle" fill={textDim} fontSize="6" fontFamily="DM Sans, sans-serif" fontWeight="500">REAL-TIME</text>
      </g>

      {/* Advantages labels on right */}
      {[
        { y: 340, label: "± 1.5pp PRECISION" },
        { y: 358, label: "LIVE UPDATE" },
      ].map((item, i) => (
        <g key={`adv${i}`} opacity={0.45}>
          <text x="480" y={item.y} fill={accent} fontSize="7" fontFamily="JetBrains Mono, monospace" opacity="0.6">✓ {item.label}</text>
        </g>
      ))}

      {/* Tagline */}
      <text x="400" y="428" textAnchor="middle" fill={accent} fontSize="10" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="0.12em" opacity="0.35">
        PREDICTION MARKETS VS ENCUESTAS
      </text>
    </svg>
  );
}


/* ═════════════════════════════════════════════════════
   CONSENSUS INTELLIGENCE — Network of nodes converging
   People/nodes connected, signals converging to center,
   concentric waves radiating from consensus point
   ═════════════════════════════════════════════════════ */
export function ConsensusIntelIllustration({ isDark = true }) {
  const accent = "#4299E1";
  const bg = isDark ? "#000000" : "#F5F5F7";
  const dimLine = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";
  const dimFill = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)";
  const textDim = isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.2)";

  /* Outer nodes — sources of information */
  const outerNodes = [
    { cx: 130, cy: 140, label: "MARKETS", r: 16 },
    { cx: 670, cy: 140, label: "SOCIAL", r: 16 },
    { cx: 100, cy: 310, label: "NEWS", r: 14 },
    { cx: 700, cy: 310, label: "EXPERTS", r: 14 },
    { cx: 250, cy: 100, label: "POLLS", r: 12 },
    { cx: 550, cy: 100, label: "MACRO", r: 12 },
    { cx: 200, cy: 370, label: "POLICY", r: 11 },
    { cx: 600, cy: 370, label: "TRENDS", r: 11 },
  ];

  return (
    <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <radialGradient id="ci-glow" cx="50%" cy="50%" r="35%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.15" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ci-node-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.5" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <filter id="ci-blur"><feGaussianBlur stdDeviation="12" /></filter>
        <filter id="ci-blur-sm"><feGaussianBlur stdDeviation="4" /></filter>
      </defs>

      <rect width="800" height="450" fill={bg} />

      {/* Central ambient glow */}
      <circle cx="400" cy="225" r="160" fill="url(#ci-glow)" />

      {/* Grid */}
      {[150, 225, 300].map((y) => (
        <line key={`h${y}`} x1="60" y1={y} x2="740" y2={y} stroke={dimLine} strokeWidth="0.5" />
      ))}

      {/* Concentric waves from center — consensus radiating */}
      {[50, 85, 120, 155].map((r, i) => (
        <circle key={`wave${i}`} cx="400" cy="225" r={r} fill="none" stroke={accent} strokeOpacity={0.08 - i * 0.015} strokeWidth="0.8">
          <animate attributeName="r" values={`${r};${r + 12};${r}`} dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" values={`${0.08 - i * 0.015};${0.02};${0.08 - i * 0.015}`} dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* Connection lines from outer nodes to center */}
      {outerNodes.map((node, i) => (
        <g key={`conn${i}`}>
          <line x1={node.cx} y1={node.cy} x2="400" y2="225" stroke={accent} strokeOpacity="0.08" strokeWidth="0.8" />
          {/* Animated pulse traveling to center */}
          <circle r="3" fill={accent} opacity="0.5">
            <animateMotion path={`M${node.cx},${node.cy} L400,225`} dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0.1;0.5" dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}

      {/* Cross-connections between adjacent outer nodes */}
      {[
        [0, 4], [4, 5], [5, 1], [1, 3], [3, 7], [7, 6], [6, 2], [2, 0],
      ].map(([a, b], i) => (
        <line key={`xc${i}`} x1={outerNodes[a].cx} y1={outerNodes[a].cy} x2={outerNodes[b].cx} y2={outerNodes[b].cy} stroke={accent} strokeOpacity="0.04" strokeWidth="0.6" />
      ))}

      {/* Outer nodes */}
      {outerNodes.map((node, i) => (
        <g key={`on${i}`}>
          <circle cx={node.cx} cy={node.cy} r={node.r * 2} fill="url(#ci-node-glow)" opacity="0.15" filter="url(#ci-blur-sm)" />
          <circle cx={node.cx} cy={node.cy} r={node.r} fill={bg} stroke={accent} strokeWidth="1" strokeOpacity="0.3" />
          <circle cx={node.cx} cy={node.cy} r={node.r * 0.35} fill={accent} opacity="0.4">
            <animate attributeName="opacity" values="0.4;0.15;0.4" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
          </circle>
          <text x={node.cx} y={node.cy + node.r + 14} textAnchor="middle" fill={accent} fontSize="7" fontFamily="JetBrains Mono, monospace" fontWeight="500" opacity="0.3">{node.label}</text>
        </g>
      ))}

      {/* Middle ring of secondary nodes — aggregation layer */}
      {[
        { cx: 300, cy: 170, r: 8 },
        { cx: 500, cy: 170, r: 8 },
        { cx: 280, cy: 280, r: 8 },
        { cx: 520, cy: 280, r: 8 },
      ].map((node, i) => (
        <g key={`mn${i}`}>
          <circle cx={node.cx} cy={node.cy} r={node.r} fill={bg} stroke={accent} strokeWidth="0.8" strokeOpacity="0.25" />
          <circle cx={node.cx} cy={node.cy} r={3} fill={accent} opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.1;0.3" dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
          {/* Connection to center */}
          <line x1={node.cx} y1={node.cy} x2="400" y2="225" stroke={accent} strokeOpacity="0.12" strokeWidth="0.8" strokeDasharray="3 6">
            <animate attributeName="stroke-dashoffset" from="0" to="-18" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
          </line>
        </g>
      ))}

      {/* ── Central Consensus Node ── */}
      <circle cx="400" cy="225" r="40" fill={accent} opacity="0.04" filter="url(#ci-blur)" />
      <circle cx="400" cy="225" r="30" fill={bg} stroke={accent} strokeWidth="2" strokeOpacity="0.4" />
      <circle cx="400" cy="225" r="22" fill={dimFill} stroke={accent} strokeWidth="0.8" strokeOpacity="0.2" />

      {/* Three pillars inside center — markets, sentiment, structure */}
      <rect x="388" y="210" width="4" height="18" rx="2" fill={accent} opacity="0.6" />
      <rect x="396" y="205" width="4" height="23" rx="2" fill={accent} opacity="0.7" />
      <rect x="404" y="213" width="4" height="15" rx="2" fill={accent} opacity="0.5" />

      {/* Probability display below center */}
      <g opacity="0.7">
        <rect x="365" y="268" width="70" height="32" rx="8" fill={dimFill} stroke={accent} strokeOpacity="0.2" strokeWidth="0.8" />
        <text x="400" y="284" textAnchor="middle" fill={accent} fontSize="13" fontFamily="JetBrains Mono, monospace" fontWeight="700">68%</text>
        <text x="400" y="295" textAnchor="middle" fill={textDim} fontSize="6" fontFamily="DM Sans, sans-serif" fontWeight="500">CONSENSUS</text>
      </g>

      {/* Orbital ring */}
      <circle cx="400" cy="225" r="36" fill="none" stroke={accent} strokeOpacity="0.08" strokeWidth="0.8" strokeDasharray="4 8">
        <animateTransform attributeName="transform" type="rotate" from="0 400 225" to="360 400 225" dur="25s" repeatCount="indefinite" />
      </circle>

      {/* Three pillar labels at bottom */}
      {[
        { x: 260, label: "MARKETS" },
        { x: 400, label: "SENTIMENT" },
        { x: 540, label: "STRUCTURE" },
      ].map((item) => (
        <g key={item.label}>
          <rect x={item.x - 32} y="395" width="64" height="18" rx="4" fill={dimFill} stroke={accent} strokeOpacity="0.1" strokeWidth="0.5" />
          <text x={item.x} y="407" textAnchor="middle" fill={accent} fontSize="7" fontFamily="JetBrains Mono, monospace" fontWeight="500" opacity="0.3">{item.label}</text>
        </g>
      ))}

      {/* Tagline */}
      <text x="400" y="440" textAnchor="middle" fill={accent} fontSize="10" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="0.12em" opacity="0.35">
        CONSENSUS INTELLIGENCE
      </text>
    </svg>
  );
}


/* ═════════════════════════════════════════════════════
   PM LATAM — Map with data nodes
   Simplified LATAM map silhouette with data nodes
   at major cities (CDMX, São Paulo, Bogotá, Santiago),
   connection lines between them
   ═════════════════════════════════════════════════════ */
export function PMLatamIllustration({ isDark = true }) {
  const accent = "#4299E1";
  const bg = isDark ? "#000000" : "#F5F5F7";
  const dimLine = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";
  const dimFill = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)";
  const textDim = isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.2)";

  /* City nodes — positioned as if on a stylized LATAM map */
  const cities = [
    { cx: 310, cy: 115, label: "CDMX", prob: "72%", r: 16 },
    { cx: 395, cy: 170, label: "BOGOTÁ", prob: "58%", r: 13 },
    { cx: 445, cy: 215, label: "LIMA", prob: "45%", r: 11 },
    { cx: 530, cy: 265, label: "SÃO PAULO", prob: "67%", r: 15 },
    { cx: 480, cy: 310, label: "B. AIRES", prob: "34%", r: 13 },
    { cx: 430, cy: 340, label: "SANTIAGO", prob: "51%", r: 12 },
  ];

  /* Connections between cities */
  const connections = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [2, 5],
    [0, 3], [1, 3], [3, 5],
  ];

  return (
    <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <radialGradient id="latam-glow" cx="50%" cy="50%" r="45%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.1" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="latam-node-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.5" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <filter id="latam-blur-sm"><feGaussianBlur stdDeviation="5" /></filter>
        <filter id="latam-blur"><feGaussianBlur stdDeviation="15" /></filter>
      </defs>

      <rect width="800" height="450" fill={bg} />

      {/* Ambient glow */}
      <ellipse cx="420" cy="230" rx="230" ry="180" fill="url(#latam-glow)" />

      {/* Grid */}
      {[130, 210, 290, 370].map((y) => (
        <line key={`h${y}`} x1="60" y1={y} x2="740" y2={y} stroke={dimLine} strokeWidth="0.5" />
      ))}

      {/* ── Stylized LATAM continent outline ── */}
      {/* Simplified abstract landmass shape */}
      <path
        d="M290,85 Q270,90 260,100 Q250,115 260,130 Q265,140 275,150 L280,160 Q275,175 280,185 L290,195 Q285,210 290,220 L295,230 Q290,245 295,258 L305,270 Q310,285 320,295 L330,305 Q340,320 350,330 L360,340 Q370,355 380,365 L390,375 Q400,385 410,390 L420,395 Q430,388 440,378 L450,365 Q455,350 460,340 L465,328 Q468,315 465,305 L460,295 Q458,282 462,270 L470,255 Q478,242 485,230 L495,215 Q505,200 515,190 L530,175 Q545,158 555,145 L560,130 Q558,115 545,108 L530,105 Q515,100 500,100 L485,102 Q470,105 455,108 L440,110 Q425,115 410,118 L395,120 Q380,118 365,115 L350,110 Q335,105 320,100 L310,95 Q300,88 290,85 Z"
        fill={accent}
        fillOpacity="0.03"
        stroke={accent}
        strokeOpacity="0.08"
        strokeWidth="1"
      />

      {/* Connection lines */}
      {connections.map(([a, b], i) => (
        <line key={`cl${i}`} x1={cities[a].cx} y1={cities[a].cy} x2={cities[b].cx} y2={cities[b].cy} stroke={accent} strokeOpacity="0.1" strokeWidth="0.8" />
      ))}

      {/* Animated data pulses along connections */}
      {connections.slice(0, 5).map(([a, b], i) => (
        <circle key={`pulse${i}`} r="2.5" fill={accent} opacity="0.5">
          <animateMotion path={`M${cities[a].cx},${cities[a].cy} L${cities[b].cx},${cities[b].cy}`} dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0.1;0.5" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* City nodes with probability labels */}
      {cities.map((city, i) => (
        <g key={`city${i}`}>
          {/* Glow */}
          <circle cx={city.cx} cy={city.cy} r={city.r * 2.5} fill="url(#latam-node-glow)" opacity="0.15" filter="url(#latam-blur-sm)" />
          {/* Node circle */}
          <circle cx={city.cx} cy={city.cy} r={city.r} fill={bg} stroke={accent} strokeWidth="1.2" strokeOpacity="0.4" />
          {/* Inner dot */}
          <circle cx={city.cx} cy={city.cy} r={city.r * 0.35} fill={accent} opacity="0.6">
            <animate attributeName="opacity" values="0.6;0.25;0.6" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
          </circle>
          {/* City label */}
          <text x={city.cx} y={city.cy - city.r - 6} textAnchor="middle" fill={accent} fontSize="7" fontFamily="JetBrains Mono, monospace" fontWeight="600" opacity="0.45">{city.label}</text>
          {/* Probability badge */}
          <g>
            <rect x={city.cx + city.r + 4} y={city.cy - 9} width="32" height="18" rx="4" fill={dimFill} stroke={accent} strokeOpacity="0.15" strokeWidth="0.6" />
            <text x={city.cx + city.r + 20} y={city.cy + 3} textAnchor="middle" fill={accent} fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="600" opacity="0.5">{city.prob}</text>
          </g>
        </g>
      ))}

      {/* ── RIGHT SIDE: Info panel ── */}
      <g opacity="0.6">
        <rect x="610" y="100" width="150" height="120" rx="10" fill={dimFill} stroke={accent} strokeOpacity="0.12" strokeWidth="0.8" />
        <text x="685" y="122" textAnchor="middle" fill={accent} fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600" opacity="0.5">LATAM COVERAGE</text>
        <line x1="625" y1="130" x2="745" y2="130" stroke={accent} strokeOpacity="0.08" strokeWidth="0.5" />

        {/* Stats */}
        {[
          { label: "COUNTRIES", value: "6+" },
          { label: "EVENTS", value: "120+" },
          { label: "UPDATE", value: "LIVE" },
        ].map((stat, i) => (
          <g key={`st${i}`}>
            <text x="635" y={150 + i * 24} fill={textDim} fontSize="7" fontFamily="JetBrains Mono, monospace">{stat.label}</text>
            <text x="745" y={150 + i * 24} textAnchor="end" fill={accent} fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="600" opacity="0.5">{stat.value}</text>
          </g>
        ))}
      </g>

      {/* Key use-case labels */}
      <g opacity="0.4">
        <rect x="610" y="245" width="150" height="100" rx="10" fill={dimFill} stroke={accent} strokeOpacity="0.1" strokeWidth="0.6" />
        <text x="685" y="265" textAnchor="middle" fill={accent} fontSize="7" fontFamily="JetBrains Mono, monospace" fontWeight="600" opacity="0.5">KEY EVENTS</text>
        <line x1="625" y1="272" x2="745" y2="272" stroke={accent} strokeOpacity="0.06" strokeWidth="0.5" />
        {[
          "BANXICO RATES",
          "COPOM DECISION",
          "REFORM FISCAL",
          "ELECTIONS",
        ].map((item, i) => (
          <text key={`ke${i}`} x="635" y={288 + i * 14} fill={accent} fontSize="7" fontFamily="JetBrains Mono, monospace" opacity="0.3">› {item}</text>
        ))}
      </g>

      {/* Orbital ring around map */}
      <ellipse cx="400" cy="230" rx="200" ry="170" fill="none" stroke={accent} strokeOpacity="0.04" strokeWidth="1" />
      <ellipse cx="400" cy="230" rx="160" ry="130" fill="none" stroke={accent} strokeOpacity="0.06" strokeWidth="0.6" strokeDasharray="5 12">
        <animateTransform attributeName="transform" type="rotate" from="0 400 230" to="360 400 230" dur="40s" repeatCount="indefinite" />
      </ellipse>

      {/* Small satellite dots */}
      {[
        { cx: 80, cy: 100, r: 3 }, { cx: 750, cy: 400, r: 2.5 },
        { cx: 150, cy: 400, r: 2 }, { cx: 720, cy: 80, r: 2.5 },
      ].map((n, i) => (
        <circle key={`sat${i}`} cx={n.cx} cy={n.cy} r={n.r} fill={accent} opacity={0.1 + (i % 2) * 0.06} />
      ))}

      {/* Tagline */}
      <text x="400" y="435" textAnchor="middle" fill={accent} fontSize="10" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="0.12em" opacity="0.35">
        PREDICTION MARKETS × LATAM
      </text>
    </svg>
  );
}


/* ═════════════════════════════════════════════════════
   INTEL — Sentiment Analysis NLP Pipeline
   Sentiment bubbles flowing through NLP pipeline into signals
   ═════════════════════════════════════════════════════ */
export function SentimentAnalysisIllustration({ isDark = true }) {
  const accent = ACCENTS.intel[isDark ? "dark" : "light"];
  const bg = isDark ? "#000000" : "#F5F5F7";
  const dimLine = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";
  const dimFill = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)";
  const navy = "#1A365D";
  const green = "#48BB78";
  const red = "#FC8181";
  const gray = "#A0AEC0";

  const bubbles = [
    { x: 60, y: 100, color: green, label: "Bullish", delay: "0s" },
    { x: 130, y: 160, color: red, label: "Risk ↑", delay: "0.4s" },
    { x: 50, y: 230, color: green, label: "+12%", delay: "0.8s" },
    { x: 140, y: 280, color: gray, label: "Neutral", delay: "1.2s" },
    { x: 70, y: 340, color: red, label: "Sell", delay: "1.6s" },
    { x: 150, y: 370, color: green, label: "Growth", delay: "2s" },
  ];

  return (
    <svg viewBox={VIEW} preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <radialGradient id="sa-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.12" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <filter id="sa-blur"><feGaussianBlur stdDeviation="18" /></filter>
        <filter id="sa-blur-sm"><feGaussianBlur stdDeviation="4" /></filter>
        <linearGradient id="sa-flow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={accent} stopOpacity="0" />
          <stop offset="50%" stopColor={accent} stopOpacity="0.35" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="800" height="420" fill={bg} />
      <circle cx="400" cy="210" r="220" fill="url(#sa-glow)" filter="url(#sa-blur)" opacity="0.6" />

      {/* Section labels */}
      <text x="100" y="60" textAnchor="middle" fill={accent} fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="600" letterSpacing="0.1em" opacity="0.4">RAW TEXT</text>
      <text x="350" y="60" textAnchor="middle" fill={accent} fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="600" letterSpacing="0.1em" opacity="0.4">NLP ENGINE</text>
      <text x="640" y="60" textAnchor="middle" fill={accent} fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="600" letterSpacing="0.1em" opacity="0.4">SIGNALS</text>

      {/* ── LEFT: Sentiment Bubbles (tweets/posts) ── */}
      {bubbles.map((b, i) => (
        <g key={`bub${i}`}>
          <circle cx={b.x} cy={b.y} r="28" fill={b.color} fillOpacity="0.06" stroke={b.color} strokeOpacity="0.2" strokeWidth="0.8">
            <animate attributeName="r" values="28;31;28" dur="3s" begin={b.delay} repeatCount="indefinite" />
          </circle>
          <circle cx={b.x} cy={b.y} r="3" fill={b.color} opacity="0.5" />
          <text x={b.x} y={b.y + 16} textAnchor="middle" fill={b.color} fontSize="7" fontFamily="JetBrains Mono, monospace" opacity="0.5">{b.label}</text>
        </g>
      ))}

      {/* Flow arrows from left to center */}
      {[140, 210, 290, 360].map((y, i) => (
        <g key={`fl${i}`} opacity={0.15 + i * 0.05}>
          <line x1="180" y1={y} x2="260" y2={y} stroke={accent} strokeWidth="0.8" strokeDasharray="4 6">
            <animate attributeName="stroke-dashoffset" values="0;-20" dur="2s" repeatCount="indefinite" />
          </line>
          <polygon points={`260,${y - 3} 268,${y} 260,${y + 3}`} fill={accent} opacity="0.3" />
        </g>
      ))}

      {/* ── CENTER: NLP Processing Engine ── */}
      <rect x="270" y="85" width="160" height="260" rx="14" fill={dimFill} stroke={accent} strokeOpacity="0.18" strokeWidth="1.2" />
      <rect x="280" y="100" width="140" height="22" rx="4" fill={accent} fillOpacity="0.04" />
      <text x="350" y="115" textAnchor="middle" fill={accent} fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600" opacity="0.5">TOKENIZER</text>

      <line x1="290" y1="134" x2="410" y2="134" stroke={dimLine} strokeWidth="0.5" />
      <rect x="280" y="144" width="140" height="22" rx="4" fill={accent} fillOpacity="0.04" />
      <text x="350" y="159" textAnchor="middle" fill={accent} fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600" opacity="0.5">EMBEDDING</text>

      <line x1="290" y1="178" x2="410" y2="178" stroke={dimLine} strokeWidth="0.5" />
      <rect x="280" y="188" width="140" height="22" rx="4" fill={accent} fillOpacity="0.06" />
      <text x="350" y="203" textAnchor="middle" fill={accent} fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600" opacity="0.55">TRANSFORMER</text>

      <line x1="290" y1="222" x2="410" y2="222" stroke={dimLine} strokeWidth="0.5" />
      <rect x="280" y="232" width="140" height="22" rx="4" fill={accent} fillOpacity="0.04" />
      <text x="350" y="247" textAnchor="middle" fill={accent} fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600" opacity="0.5">CLASSIFIER</text>

      <line x1="290" y1="266" x2="410" y2="266" stroke={dimLine} strokeWidth="0.5" />
      <rect x="280" y="276" width="140" height="22" rx="4" fill={accent} fillOpacity="0.04" />
      <text x="350" y="291" textAnchor="middle" fill={accent} fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600" opacity="0.5">SCORER</text>

      {/* Processing pulse inside engine */}
      <rect x="275" y="85" width="150" height="6" rx="3" fill={accent} fillOpacity="0.08">
        <animate attributeName="y" values="85;339;85" dur="4s" repeatCount="indefinite" />
        <animate attributeName="fill-opacity" values="0.08;0.2;0.08" dur="4s" repeatCount="indefinite" />
      </rect>

      {/* Flow arrows from center to right */}
      {[140, 215, 290].map((y, i) => (
        <g key={`fr${i}`} opacity={0.2 + i * 0.05}>
          <line x1="440" y1={y} x2="510" y2={y} stroke={accent} strokeWidth="0.8" strokeDasharray="4 6">
            <animate attributeName="stroke-dashoffset" values="0;-20" dur="2s" repeatCount="indefinite" />
          </line>
          <polygon points={`510,${y - 3} 518,${y} 510,${y + 3}`} fill={accent} opacity="0.3" />
        </g>
      ))}

      {/* ── RIGHT: Output Signals — Aggregated Sentiment Chart ── */}
      <rect x="525" y="85" width="240" height="260" rx="12" fill={dimFill} stroke={accent} strokeOpacity="0.15" strokeWidth="1" />
      <text x="645" y="110" textAnchor="middle" fill={accent} fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600" opacity="0.45">SENTIMENT INDEX</text>
      <line x1="540" y1="118" x2="750" y2="118" stroke={dimLine} strokeWidth="0.5" />

      {/* Sentiment line chart */}
      <polyline
        points="545,220 570,200 595,210 620,180 645,175 670,165 695,160 720,145 745,140"
        fill="none" stroke={green} strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"
      />
      <polyline
        points="545,240 570,255 595,245 620,260 645,255 670,262 695,268 720,275 745,270"
        fill="none" stroke={red} strokeWidth="1.2" strokeOpacity="0.4" strokeLinecap="round" strokeLinejoin="round"
      />

      {/* Grid lines */}
      {[160, 200, 240, 280].map((y) => (
        <line key={`rg${y}`} x1="540" y1={y} x2="750" y2={y} stroke={dimLine} strokeWidth="0.3" />
      ))}

      {/* Y-axis labels */}
      <text x="538" y="163" textAnchor="end" fill={accent} fontSize="7" fontFamily="JetBrains Mono, monospace" opacity="0.25">+1</text>
      <text x="538" y="203" textAnchor="end" fill={accent} fontSize="7" fontFamily="JetBrains Mono, monospace" opacity="0.25">0.5</text>
      <text x="538" y="243" textAnchor="end" fill={accent} fontSize="7" fontFamily="JetBrains Mono, monospace" opacity="0.25">0</text>
      <text x="538" y="283" textAnchor="end" fill={accent} fontSize="7" fontFamily="JetBrains Mono, monospace" opacity="0.25">-0.5</text>

      {/* Signal boxes at bottom of right panel */}
      {[
        { x: 540, label: "BUY", val: "0.72", color: green },
        { x: 610, label: "HOLD", val: "0.18", color: gray },
        { x: 680, label: "RISK", val: "0.10", color: red },
      ].map((sig, i) => (
        <g key={`sig${i}`}>
          <rect x={sig.x} y="300" width="60" height="32" rx="6" fill={sig.color} fillOpacity="0.06" stroke={sig.color} strokeOpacity="0.15" strokeWidth="0.8" />
          <text x={sig.x + 30} y="313" textAnchor="middle" fill={sig.color} fontSize="7" fontFamily="JetBrains Mono, monospace" fontWeight="600" opacity="0.5">{sig.label}</text>
          <text x={sig.x + 30} y="326" textAnchor="middle" fill={sig.color} fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="700" opacity="0.6">{sig.val}</text>
        </g>
      ))}

      {/* Bottom tagline */}
      <text x="400" y="405" textAnchor="middle" fill={accent} fontSize="10" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="0.12em" opacity="0.3">
        SENTIMENT ANALYSIS × FINANCE
      </text>
    </svg>
  );
}


/* ═════════════════════════════════════════════════════
   CAPITAL — Investment Guide Dashboard
   Dashboard with returns, allocation bars, metrics, roadmap
   ═════════════════════════════════════════════════════ */
export function InvestGuideIllustration({ isDark = true }) {
  const accent = ACCENTS.capital[isDark ? "dark" : "light"];
  const bg = isDark ? "#000000" : "#F5F5F7";
  const dimLine = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";
  const dimFill = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)";
  const green = "#48BB78";
  const amber = "#ECC94B";

  return (
    <svg viewBox={VIEW} preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <radialGradient id="ig-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.12" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <filter id="ig-blur"><feGaussianBlur stdDeviation="20" /></filter>
      </defs>

      <rect width="800" height="420" fill={bg} />
      <circle cx="400" cy="210" r="200" fill="url(#ig-glow)" filter="url(#ig-blur)" opacity="0.5" />

      {/* ── TOP LEFT: Returns Chart ── */}
      <rect x="30" y="30" width="340" height="180" rx="12" fill={dimFill} stroke={accent} strokeOpacity="0.15" strokeWidth="1" />
      <text x="50" y="56" fill={accent} fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="600" opacity="0.45">CUMULATIVE RETURNS</text>
      <line x1="45" y1="66" x2="355" y2="66" stroke={dimLine} strokeWidth="0.5" />

      {/* Grid */}
      {[100, 130, 160, 190].map((y) => (
        <line key={`lg${y}`} x1="50" y1={y} x2="355" y2={y} stroke={dimLine} strokeWidth="0.3" />
      ))}

      {/* Prediction Markets line — strong uptrend */}
      <polyline
        points="55,185 85,178 115,170 145,162 175,150 205,140 235,128 265,115 295,100 325,90 350,80"
        fill="none" stroke={green} strokeWidth="1.6" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"
      />
      {/* S&P 500 line — moderate */}
      <polyline
        points="55,185 85,182 115,178 145,176 175,172 205,168 235,162 265,158 295,152 325,148 350,142"
        fill="none" stroke={accent} strokeWidth="1.2" strokeOpacity="0.35" strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Bonds line — flat */}
      <polyline
        points="55,185 85,184 115,183 145,183 175,182 205,181 235,180 265,180 295,179 325,178 350,176"
        fill="none" stroke={amber} strokeWidth="1" strokeOpacity="0.3" strokeLinecap="round" strokeLinejoin="round"
      />

      {/* Legend */}
      {[
        { x: 60, label: "PM Fund", color: green },
        { x: 140, label: "S&P 500", color: accent },
        { x: 220, label: "Bonds", color: amber },
      ].map((l, i) => (
        <g key={`leg${i}`}>
          <line x1={l.x} y1="198" x2={l.x + 16} y2="198" stroke={l.color} strokeWidth="1.5" strokeOpacity="0.5" />
          <text x={l.x + 22} y="201" fill={l.color} fontSize="7" fontFamily="JetBrains Mono, monospace" opacity="0.4">{l.label}</text>
        </g>
      ))}

      {/* ── TOP RIGHT: Allocation Bars ── */}
      <rect x="390" y="30" width="380" height="180" rx="12" fill={dimFill} stroke={accent} strokeOpacity="0.15" strokeWidth="1" />
      <text x="410" y="56" fill={accent} fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="600" opacity="0.45">PORTFOLIO ALLOCATION</text>
      <line x1="405" y1="66" x2="755" y2="66" stroke={dimLine} strokeWidth="0.5" />

      {/* Allocation bars */}
      {[
        { y: 82, label: "Prediction Mkts", pct: 40, color: green },
        { y: 108, label: "Equities", pct: 30, color: accent },
        { y: 134, label: "Bonds", pct: 15, color: amber },
        { y: 160, label: "Alt Assets", pct: 10, color: accent },
        { y: 186, label: "Cash", pct: 5, color: "#A0AEC0" },
      ].map((bar, i) => (
        <g key={`bar${i}`}>
          <text x="410" y={bar.y + 10} fill={accent} fontSize="7" fontFamily="JetBrains Mono, monospace" opacity="0.35">{bar.label}</text>
          <rect x="520" y={bar.y} width="200" height="16" rx="3" fill={dimLine} />
          <rect x="520" y={bar.y} width={bar.pct * 2} height="16" rx="3" fill={bar.color} fillOpacity="0.25" stroke={bar.color} strokeOpacity="0.15" strokeWidth="0.5">
            <animate attributeName="width" from="0" to={bar.pct * 2} dur="1.5s" fill="freeze" />
          </rect>
          <text x={526 + bar.pct * 2} y={bar.y + 11} fill={bar.color} fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600" opacity="0.5">{bar.pct}%</text>
        </g>
      ))}

      {/* ── BOTTOM LEFT: Performance Metrics ── */}
      <rect x="30" y="228" width="340" height="100" rx="12" fill={dimFill} stroke={accent} strokeOpacity="0.15" strokeWidth="1" />
      <text x="50" y="254" fill={accent} fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="600" opacity="0.45">KEY METRICS</text>
      <line x1="45" y1="264" x2="355" y2="264" stroke={dimLine} strokeWidth="0.5" />

      {[
        { x: 50, label: "Sharpe", val: "1.82" },
        { x: 130, label: "Alpha", val: "+8.4%" },
        { x: 210, label: "Beta", val: "0.12" },
        { x: 290, label: "Max DD", val: "-6.2%" },
      ].map((m, i) => (
        <g key={`met${i}`}>
          <text x={m.x + 30} y="288" textAnchor="middle" fill={accent} fontSize="7" fontFamily="JetBrains Mono, monospace" opacity="0.3">{m.label}</text>
          <text x={m.x + 30} y="310" textAnchor="middle" fill={green} fontSize="14" fontFamily="JetBrains Mono, monospace" fontWeight="700" opacity="0.55">{m.val}</text>
        </g>
      ))}

      {/* ── BOTTOM RIGHT: Roadmap Steps ── */}
      <rect x="390" y="228" width="380" height="100" rx="12" fill={dimFill} stroke={accent} strokeOpacity="0.15" strokeWidth="1" />
      <text x="410" y="254" fill={accent} fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="600" opacity="0.45">INVESTMENT ROADMAP</text>
      <line x1="405" y1="264" x2="755" y2="264" stroke={dimLine} strokeWidth="0.5" />

      {/* Roadmap timeline */}
      <line x1="430" y1="295" x2="740" y2="295" stroke={accent} strokeOpacity="0.12" strokeWidth="1" />
      {[
        { x: 440, num: "1", label: "Learn" },
        { x: 510, num: "2", label: "Practice" },
        { x: 580, num: "3", label: "Deploy" },
        { x: 650, num: "4", label: "Scale" },
        { x: 720, num: "5", label: "Optimize" },
      ].map((step, i) => (
        <g key={`step${i}`}>
          <circle cx={step.x} cy="295" r="10" fill={accent} fillOpacity={0.08 + i * 0.03} stroke={accent} strokeOpacity={0.2 + i * 0.05} strokeWidth="1" />
          <text x={step.x} y="299" textAnchor="middle" fill={accent} fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="700" opacity="0.5">{step.num}</text>
          <text x={step.x} y="318" textAnchor="middle" fill={accent} fontSize="6.5" fontFamily="JetBrains Mono, monospace" opacity="0.3">{step.label}</text>
        </g>
      ))}

      {/* Active step pulse */}
      <circle cx="580" cy="295" r="10" fill="none" stroke={green} strokeOpacity="0.25" strokeWidth="1">
        <animate attributeName="r" values="10;16;10" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" values="0.25;0;0.25" dur="2.5s" repeatCount="indefinite" />
      </circle>

      {/* Bottom tagline */}
      <text x="400" y="380" textAnchor="middle" fill={accent} fontSize="10" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="0.12em" opacity="0.3">
        PREDICTION MARKETS × INVESTMENT GUIDE
      </text>
    </svg>
  );
}


/* ═════════════════════════════════════════════════════
   EDUCATION — Alternative Data Sources Dashboard
   Diverse data sources converging to a central dashboard
   ═════════════════════════════════════════════════════ */
export function AltDataIllustration({ isDark = true }) {
  const accent = ACCENTS.intel[isDark ? "dark" : "light"];
  const bg = isDark ? "#000000" : "#F5F5F7";
  const dimLine = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";
  const dimFill = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)";

  /* Source nodes arranged around center */
  const sources = [
    { x: 95, y: 90, icon: "SAT", label: "Satellite", color: "#9F7AEA" },
    { x: 705, y: 90, icon: "X", label: "X / Twitter", color: "#4299E1" },
    { x: 95, y: 340, icon: "IoT", label: "IoT Sensors", color: "#48BB78" },
    { x: 705, y: 340, icon: "TX", label: "Transactions", color: "#ECC94B" },
    { x: 95, y: 215, icon: "PM", label: "Pred. Mkts", color: "#F56565" },
    { x: 705, y: 215, icon: "NLP", label: "Sentiment", color: "#ED8936" },
  ];

  return (
    <svg viewBox={VIEW} preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <radialGradient id="ad-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.15" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <filter id="ad-blur"><feGaussianBlur stdDeviation="20" /></filter>
        <filter id="ad-blur-sm"><feGaussianBlur stdDeviation="5" /></filter>
      </defs>

      <rect width="800" height="420" fill={bg} />
      <circle cx="400" cy="210" r="200" fill="url(#ad-glow)" filter="url(#ad-blur)" opacity="0.6" />

      {/* ── CONNECTION LINES from sources to center ── */}
      {sources.map((src, i) => (
        <g key={`conn${i}`}>
          <line x1={src.x} y1={src.y} x2="400" y2="210" stroke={src.color} strokeOpacity="0.08" strokeWidth="1" />
          {/* Animated data pulse traveling along the line */}
          <circle r="3" fill={src.color} opacity="0.4">
            <animateMotion dur={`${3 + i * 0.5}s`} repeatCount="indefinite" path={`M${src.x},${src.y} L400,210`} />
            <animate attributeName="opacity" values="0.4;0.1;0.4" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}

      {/* ── SOURCE NODES ── */}
      {sources.map((src, i) => (
        <g key={`src${i}`}>
          {/* Outer ring */}
          <circle cx={src.x} cy={src.y} r="32" fill={src.color} fillOpacity="0.03" stroke={src.color} strokeOpacity="0.15" strokeWidth="1" />
          {/* Inner circle */}
          <circle cx={src.x} cy={src.y} r="18" fill={src.color} fillOpacity="0.06" stroke={src.color} strokeOpacity="0.25" strokeWidth="0.8" />
          {/* Icon text */}
          <text x={src.x} y={src.y + 4} textAnchor="middle" fill={src.color} fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="700" opacity="0.6">{src.icon}</text>
          {/* Label */}
          <text x={src.x} y={src.y + 48} textAnchor="middle" fill={src.color} fontSize="7" fontFamily="JetBrains Mono, monospace" opacity="0.35">{src.label}</text>
          {/* Pulse */}
          <circle cx={src.x} cy={src.y} r="18" fill="none" stroke={src.color} strokeOpacity="0.15">
            <animate attributeName="r" values="18;28;18" dur={`${3.5 + i * 0.3}s`} repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.15;0;0.15" dur={`${3.5 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}

      {/* ── CENTER: Unified Dashboard ── */}
      <rect x="290" y="120" width="220" height="190" rx="16" fill={dimFill} stroke={accent} strokeOpacity="0.2" strokeWidth="1.5" />

      {/* Dashboard header */}
      <rect x="295" y="125" width="210" height="24" rx="12" fill={accent} fillOpacity="0.04" />
      <text x="400" y="141" textAnchor="middle" fill={accent} fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600" opacity="0.5">ALT DATA DASHBOARD</text>

      {/* Mini sparklines inside dashboard */}
      {[
        { y: 162, label: "Satellite", pts: "310,178 330,174 350,176 370,170 390,168 410,165 430,162 450,160 470,158 490,155" },
        { y: 192, label: "Sentiment", pts: "310,208 330,205 350,210 370,202 390,198 410,200 430,195 450,192 470,190 490,188" },
        { y: 222, label: "PM Signal", pts: "310,238 330,236 350,232 370,228 390,230 410,225 430,222 450,218 470,216 490,212" },
        { y: 252, label: "Composite", pts: "310,268 330,264 350,260 370,255 390,252 410,248 430,244 450,240 470,235 490,230" },
      ].map((row, i) => (
        <g key={`dash${i}`}>
          <text x="308" y={row.y + 5} fill={accent} fontSize="6" fontFamily="JetBrains Mono, monospace" opacity="0.3">{row.label}</text>
          <polyline points={row.pts} fill="none" stroke={accent} strokeWidth="1" strokeOpacity={0.2 + i * 0.08} strokeLinecap="round" />
        </g>
      ))}

      {/* Center glow */}
      <circle cx="400" cy="210" r="40" fill={accent} fillOpacity="0.02" filter="url(#ad-blur-sm)" />

      {/* Concentric rings around dashboard */}
      <rect x="265" y="100" width="270" height="225" rx="22" fill="none" stroke={accent} strokeOpacity="0.04" strokeWidth="0.8" />
      <rect x="248" y="84" width="304" height="258" rx="28" fill="none" stroke={accent} strokeOpacity="0.03" strokeWidth="0.6" strokeDasharray="8 12">
        <animate attributeName="stroke-dashoffset" values="0;-40" dur="10s" repeatCount="indefinite" />
      </rect>

      {/* Bottom stat bar */}
      <rect x="180" y="350" width="440" height="36" rx="8" fill={dimFill} stroke={accent} strokeOpacity="0.1" strokeWidth="0.8" />
      {[
        { x: 220, label: "Sources", val: "6" },
        { x: 320, label: "Signals/s", val: "2.4K" },
        { x: 420, label: "Latency", val: "< 50ms" },
        { x: 540, label: "Coverage", val: "LATAM" },
      ].map((s, i) => (
        <g key={`stat${i}`}>
          <text x={s.x} y="365" textAnchor="middle" fill={accent} fontSize="7" fontFamily="JetBrains Mono, monospace" opacity="0.3">{s.label}</text>
          <text x={s.x} y="380" textAnchor="middle" fill={accent} fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="700" opacity="0.45">{s.val}</text>
        </g>
      ))}

      {/* Tagline */}
      <text x="400" y="412" textAnchor="middle" fill={accent} fontSize="10" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="0.12em" opacity="0.3">
        ALTERNATIVE DATA × FINANCE
      </text>
    </svg>
  );
}


/* ── Map slugs to illustrations ── */
const ILLUSTRATION_MAP = {
  "auge-mercados-prediccion-inteligencia-colectiva": IntelIllustration,
  "cobertura-operativa-mercados-prediccion-latam": RiskIllustration,
  "prediction-markets-clase-activo-fondos-cuantitativos": CapitalIllustration,
  "que-es-un-prediction-market": PredictionMarketIllustration,
  "como-funciona-un-prediction-market": MechanicsPredictionIllustration,
  "ia-y-prediction-markets": AINetworkIllustration,
  "que-es-un-quant-hedge-fund": QuantFundIllustration,
  "prediction-markets-vs-encuestas": PMvsEncuestasIllustration,
  "que-es-inteligencia-consensuada": ConsensusIntelIllustration,
  "prediction-markets-latam": PMLatamIllustration,
  "sentiment-analysis-ia-finanzas": SentimentAnalysisIllustration,
  "guia-invertir-prediction-markets-2026": InvestGuideIllustration,
  "datos-alternativos-finanzas": AltDataIllustration,
};

export function BlogIllustration({ slug, isDark = true }) {
  const Component = ILLUSTRATION_MAP[slug];
  if (!Component) return null;
  return <div aria-hidden="true" role="presentation" style={{ width: "100%", height: "100%" }}><Component isDark={isDark} /></div>;
}
