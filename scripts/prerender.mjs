/**
 * Build-time prerender script.
 * 1. Generates route-specific HTML with correct meta tags
 * 2. Injects pre-rendered hero shell for instant FCP/LCP
 * 3. Adds noscript fallback for crawlers
 *
 * Run after `vite build`: node scripts/prerender.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const DIST = join(process.cwd(), "dist");
const BASE_URL = "https://orbitcapital.ai";

// Route metadata — mirrors useSEO.js SEO_CONFIG
const ROUTES = [
  {
    path: "/",
    title: "Orbit - Home",
    description: "Orbit combina mercados de predicción, IA y datos en tiempo real para ofrecer inteligencia empresarial, cobertura de riesgos y retornos cuantitativos en América Latina.",
    h1: "Orbit — Inteligencia Predictiva y Trading Cuantitativo para LATAM",
    content: "Ecosistema de inteligencia predictiva, cobertura operativa y trading cuantitativo para América Latina basado en mercados de predicción. Productos: Orbit Risk (cobertura operativa), Orbit Capital (fondo cuantitativo), Nuestra Inteligencia (plataforma de inteligencia).",
    heroTitle: "Operamos mercados de predicci\u00f3n.",
    heroAccent: "Con inteligencia artificial.",
    heroDesc: "Inteligencia, cobertura y capital cuantitativo para empresas en Am\u00e9rica Latina. Todo impulsado por mercados de predicci\u00f3n y agentes de IA.",
    logoSrc: "/orbit-logo-dark.png",
  },
  {
    path: "/capital",
    title: "Orbit - Capital",
    description: "Primer fondo cuantitativo de LATAM especializado en prediction markets. 18% retorno objetivo, Sharpe >1.5, correlación <0.2 con S&P 500.",
    h1: "Orbit Capital — Fondo Cuantitativo de Prediction Markets",
    content: "Primer fondo cuantitativo de LATAM especializado en prediction markets. 13 agentes autónomos de IA. 18% retorno objetivo anual. Sharpe ratio >1.5. Correlación <0.2 con S&P 500. Infraestructura institucional Fireblocks.",
    heroTitle: "Los mercados de predicci\u00f3n son la pr\u00f3xima gran frontera de mercado.",
    heroAccent: "13 agentes de IA los operan por nosotros.",
    heroDesc: "Orbit Capital captura alpha en prediction markets con una flota de 13 agentes aut\u00f3nomos. Cada agente tiene wallet propio y autoridad de decisi\u00f3n.",
    logoSrc: "/orbit-capital-dark.png",
  },
  {
    path: "/capital/market",
    title: "Mercado de Predicción — Oportunidad de Inversión | Orbit Capital",
    description: "Análisis del mercado de predicción: $9B+ volumen en Polymarket, regulación CFTC, crecimiento 300% YoY.",
    h1: "El Mercado de Predicción — Oportunidad de Inversión",
    content: "Análisis del mercado de predicción: más de $9B en volumen en Polymarket, regulación CFTC en EE.UU., crecimiento de 300% año contra año. El próximo gran mercado financiero.",
  },
  {
    path: "/capital/timing",
    title: "Timing del Mercado de Predicción — ¿Por Qué Ahora? | Orbit Capital",
    description: "La ventana de alpha en mercados de predicción está abierta. Análisis de timing y adopción institucional.",
    h1: "¿Por Qué Ahora? — Timing del Mercado de Predicción",
    content: "La ventana de alpha en mercados de predicción está abierta. Análisis de timing y adopción institucional de prediction markets.",
  },
  {
    path: "/team",
    title: "Equipo Orbit — Liderazgo Fundador en Finanzas Cuantitativas y Tecnología",
    description: "Equipo multidisciplinario con experiencia en finanzas cuantitativas, ciberseguridad, data science y trading.",
    h1: "Equipo Orbit",
    content: "Equipo multidisciplinario con experiencia en finanzas cuantitativas, ciberseguridad, data science y trading. Operación AI-native con agentes autónomos.",
  },
  {
    path: "/blog",
    title: "Orbit - Blog",
    description: "Ideas, investigación y análisis sobre mercados de predicción, inteligencia de datos, cobertura de riesgos y trading cuantitativo para América Latina.",
    h1: "Blog Orbit",
    content: "Análisis e investigación sobre mercados de predicción, inteligencia de datos, cobertura de riesgos y trading cuantitativo para América Latina.",
  },
  {
    path: "/pitch",
    title: "Orbit — Pitch Comercial 2026",
    description: "Building the prediction markets infrastructure for LATAM. Confidencial.",
    h1: "Orbit — Pitch Comercial 2026",
    content: "Building the prediction markets infrastructure for LATAM. Quantitative capital and risk systems for event-based markets. The first quant hedge fund focused on prediction markets in Latin America.",
    heroTitle: "Building the prediction markets infrastructure",
    heroAccent: "for LATAM.",
    heroDesc: "Quantitative capital and risk systems for event-based markets.",
    logoSrc: "/orbit-logo-dark.png",
  },
  {
    path: "/privacy",
    title: "Orbit — Aviso de Privacidad",
    description: "Aviso de privacidad de Orbit Predictive Technologies, LLC.",
    h1: "Aviso de Privacidad",
    content: "Aviso de privacidad de Orbit Predictive Technologies, LLC. Conoce cómo recopilamos, usamos y protegemos tus datos personales.",
  },
  {
    path: "/terms",
    title: "Orbit — Términos de Uso",
    description: "Términos de uso de los servicios de Orbit Predictive Technologies, LLC.",
    h1: "Términos de Uso",
    content: "Términos de uso de los servicios de Orbit Predictive Technologies, LLC, incluyendo Nuestra Inteligencia, Orbit Risk y Orbit Capital.",
  },
];

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function buildShellHtml(route) {
  if (!route.heroTitle) {
    // Pages without hero data get a simple shell with just the nav
    return `
    <div id="shell" aria-hidden="true">
      <nav class="shell-nav">
        <img src="/orbit-logo-dark.png" alt="Orbit" width="144" height="32" fetchpriority="high" />
      </nav>
      <div class="shell-hero">
        <div>
          <h1>${escapeHtml(route.h1)}</h1>
        </div>
      </div>
    </div>`;
  }

  const logoSrc = route.logoSrc || "/orbit-logo-dark.png";
  return `
    <div id="shell" aria-hidden="true">
      <nav class="shell-nav">
        <img src="${logoSrc}" alt="Orbit" width="144" height="32" fetchpriority="high" />
      </nav>
      <div class="shell-hero">
        <div>
          <h1>${escapeHtml(route.heroTitle)} <span class="accent">${escapeHtml(route.heroAccent)}</span></h1>
          <p class="shell-sub">${escapeHtml(route.heroDesc)}</p>
        </div>
      </div>
    </div>`;
}

function generateHtml(template, route) {
  const url = route.path === "/" ? BASE_URL : `${BASE_URL}${route.path}`;
  const pageKey = route.path === "/" ? "home" : route.path.replace(/^\//, "").replace(/\//g, "-");
  const ogImage = `${BASE_URL}/api/og?page=${encodeURIComponent(pageKey)}`;

  let html = template;

  // Replace title
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`);

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${route.description}" />`
  );

  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${url}" />`
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${route.description}" />`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${url}" />`
  );
  html = html.replace(
    /<meta property="og:image" content="[^"]*" \/>/,
    `<meta property="og:image" content="${ogImage}" />`
  );
  html = html.replace(
    /<meta property="og:image:alt" content="[^"]*" \/>/,
    `<meta property="og:image:alt" content="${route.title}" />`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content="${route.description}" />`
  );
  html = html.replace(
    /<meta name="twitter:image" content="[^"]*" \/>/,
    `<meta name="twitter:image" content="${ogImage}" />`
  );

  // Replace hreflang
  html = html.replace(
    /<link rel="alternate" hreflang="x-default" href="[^"]*" \/>/,
    `<link rel="alternate" hreflang="x-default" href="${url}" />`
  );

  // Preload the correct logo for this route's LCP
  if (route.logoSrc && route.logoSrc !== "/orbit-logo-dark.png") {
    html = html.replace(
      '<link rel="preload" as="image" href="/orbit-logo-dark.png" fetchpriority="high" />',
      `<link rel="preload" as="image" href="${route.logoSrc}" fetchpriority="high" />`
    );
  }

  // Replace the default shell with route-specific shell
  const defaultShell = /<div id="shell"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
  const newShell = buildShellHtml(route);
  html = html.replace(defaultShell, newShell);

  // Add noscript content after the shell
  const noscriptBlock = `
    <noscript>
      <div style="max-width:800px;margin:80px auto;padding:0 24px;font-family:sans-serif">
        <h1>${route.h1}</h1>
        <p>${route.content}</p>
        <p><a href="${BASE_URL}">Orbit Capital</a> — Ciudad de México, México</p>
        <nav>
          <a href="/capital">Orbit Capital</a> |
          <a href="/blog">Blog</a>
        </nav>
      </div>
    </noscript>`;

  // Insert noscript before the main script
  html = html.replace(
    '<script type="module"',
    `${noscriptBlock}\n    <script type="module"`
  );

  return html;
}

// Main
const template = readFileSync(join(DIST, "index.html"), "utf-8");
let count = 0;

for (const route of ROUTES) {
  const html = generateHtml(template, route);

  if (route.path === "/") {
    writeFileSync(join(DIST, "index.html"), html);
  } else {
    const dir = join(DIST, route.path.slice(1));
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "index.html"), html);
  }
  count++;
}

console.log(`✓ Prerendered ${count} routes with hero shells + SEO content`);
