import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://orbitcapital.ai";

const SEO_CONFIG = {
  "/": {
    title: {
      es: "Orbit - Home",
      en: "Orbit - Home",
    },
    description: {
      es: "Orbit combina mercados de predicción, IA y datos en tiempo real para ofrecer inteligencia empresarial, cobertura de riesgos y retornos cuantitativos en América Latina.",
      en: "Orbit combines prediction markets, AI, and real-time data to deliver business intelligence, risk hedging, and quantitative returns in Latin America.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Orbit Capital + Intelligence",
        url: BASE_URL,
        description:
          "Ecosistema de inteligencia predictiva, cobertura operativa y trading cuantitativo para América Latina basado en mercados de predicción.",
        foundingDate: "2025",
        foundingLocation: {
          "@type": "Place",
          name: "Ciudad de México, México",
        },
        areaServed: {
          "@type": "Place",
          name: "Latin America",
        },
        knowsAbout: [
          "Prediction Markets",
          "Quantitative Trading",
          "Business Intelligence",
          "Risk Management",
          "Polymarket",
          "Kalshi",
          "LATAM Markets",
          "Operational Hedging",
        ],
        sameAs: [
          "https://x.com/orbitcapitalai",
          "https://linkedin.com/company/orbitcapitalai",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            email: "invest@orbitcapital.ai",
            contactType: "investment inquiries",
            availableLanguage: ["Spanish", "English"],
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "SiteNavigationElement",
        name: ["Capital"],
        url: [
          `${BASE_URL}/capital`,
        ],
      },
    ],
  },
  "/capital": {
    title: {
      es: "Orbit - Capital",
      en: "Orbit - Capital",
    },
    description: {
      es: "Primer fondo cuantitativo de LATAM especializado en prediction markets. 18% retorno objetivo, Sharpe >1.5, correlación <0.2 con S&P 500. Infraestructura institucional Fireblocks.",
      en: "First LATAM quantitative fund specialized in prediction markets. 18% target return, Sharpe >1.5, <0.2 S&P 500 correlation. Institutional Fireblocks infrastructure.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "FinancialProduct",
        name: "Orbit Capital",
        description:
          "Fondo cuantitativo que opera mercados de predicción globales con infraestructura institucional",
        provider: {
          "@type": "Organization",
          name: "Orbit Capital + Intelligence",
          url: BASE_URL,
        },
        areaServed: "Latin America",
        category: "Quantitative Fund",
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Qué es Orbit Capital?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Orbit Capital es un agentic hedge fund — el primero en LATAM — que opera prediction markets mediante una infraestructura de 13 agentes autónomos que consumen el Knowledge Graph unificado de Orbit. No usamos algoritmos fijos: nuestros agentes navegan un grafo vivo de entidades, eventos y relaciones.",
            },
          },
          {
            "@type": "Question",
            name: "¿En qué mercados opera el fondo?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Operamos en Polymarket (mercado internacional) y Kalshi (regulado por la CFTC en EE.UU.). Nuestros agentes — Rigel (ejecución) y Gliese (arbitraje) — cubren mercados políticos, económicos, regulatorios y de eventos globales.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuál es el rendimiento esperado?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "El objetivo de retorno neto anual es del 18%, con un Sharpe Ratio backtested superior a 1.5 y un drawdown máximo inferior al 15%. Los rendimientos pasados no garantizan resultados futuros.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuál es la inversión mínima?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "$1M MXN (~$57K USD). Incluye acceso al dashboard LP en tiempo real, statements mensuales y soporte dedicado del equipo.",
            },
          },
        ],
      },
    ],
  },
  "/capital/market": {
    title: {
      es: "Mercado de Predicción — Oportunidad de Inversión | Orbit Capital",
      en: "Prediction Market — Investment Opportunity | Orbit Capital",
    },
    description: {
      es: "Análisis del mercado de predicción: $44B+ volumen en prediction markets 2025, regulación CFTC. El próximo gran mercado financiero.",
      en: "Prediction market analysis: $44B+ prediction markets volume 2025, CFTC regulation. The next great financial market.",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Mercado de Predicción — Oportunidad de Inversión",
      description:
        "Análisis del mercado de predicción: $44B+ volumen prediction markets 2025, regulación CFTC.",
      url: `${BASE_URL}/capital/market`,
      isPartOf: {
        "@type": "WebSite",
        name: "Orbit Capital + Intelligence",
        url: BASE_URL,
      },
    },
  },
  "/capital/timing": {
    title: {
      es: "Timing del Mercado de Predicción — ¿Por Qué Ahora? | Orbit Capital",
      en: "Prediction Market Timing — Why Now? | Orbit Capital",
    },
    description: {
      es: "La ventana de alpha en mercados de predicción está abierta. Análisis de timing y adopción institucional de prediction markets.",
      en: "The alpha window in prediction markets is open. Timing analysis and institutional adoption of prediction markets.",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Timing del Mercado de Predicción — ¿Por Qué Ahora?",
      description:
        "La ventana de alpha en mercados de predicción está abierta. Análisis de timing y adopción institucional.",
      url: `${BASE_URL}/capital/timing`,
      isPartOf: {
        "@type": "WebSite",
        name: "Orbit Capital + Intelligence",
        url: BASE_URL,
      },
    },
  },
  "/team": {
    title: {
      es: "Equipo Orbit — Liderazgo Fundador en Finanzas Cuantitativas y Tecnología",
      en: "Orbit Team — Founding Leadership in Quantitative Finance & Technology",
    },
    description: {
      es: "Equipo multidisciplinario con experiencia en finanzas cuantitativas, ciberseguridad, data science y trading. Operación AI-native con agentes autónomos.",
      en: "Multidisciplinary team with expertise in quantitative finance, cybersecurity, data science, and trading. AI-native operation with autonomous agents.",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "Equipo Orbit",
      description:
        "Equipo fundador multidisciplinario con expertise en finanzas cuantitativas, ciberseguridad y tecnología",
      mainEntity: {
        "@type": "Organization",
        name: "Orbit Capital + Intelligence",
        url: BASE_URL,
      },
    },
  },
  "/blog": {
    title: {
      es: "Orbit - Blog",
      en: "Orbit - Blog",
    },
    description: {
      es: "Ideas, investigación y análisis sobre mercados de predicción, inteligencia de datos, cobertura de riesgos y trading cuantitativo para América Latina.",
      en: "Ideas, research, and analysis on prediction markets, data intelligence, risk hedging, and quantitative trading for Latin America.",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Blog Orbit",
      description:
        "Análisis e investigación sobre mercados de predicción y finanzas cuantitativas para América Latina",
      url: `${BASE_URL}/blog`,
      publisher: {
        "@type": "Organization",
        name: "Orbit Capital + Intelligence",
        url: BASE_URL,
      },
      inLanguage: "es",
    },
  },
  "/privacy": {
    title: {
      es: "Orbit — Aviso de Privacidad",
      en: "Orbit — Privacy Policy",
    },
    description: {
      es: "Aviso de privacidad de Orbit Predictive Technologies, LLC. Conoce cómo recopilamos, usamos y protegemos tus datos personales.",
      en: "Privacy Policy of Orbit Predictive Technologies, LLC. Learn how we collect, use, and protect your personal data.",
    },
  },
  "/terms": {
    title: {
      es: "Orbit — Términos de Uso",
      en: "Orbit — Terms of Use",
    },
    description: {
      es: "Términos de uso de los servicios de Orbit Predictive Technologies, LLC, incluyendo Nuestra Inteligencia, Orbit Risk y Orbit Capital.",
      en: "Terms of Use for the services of Orbit Predictive Technologies, LLC, including Our Intelligence, Orbit Risk, and Orbit Capital.",
    },
  },
};

function setMetaTag(attr, attrValue, content) {
  let el = document.querySelector(`meta[${attr}="${attrValue}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLinkTag(rel, href, attrs = {}) {
  const selector = Object.entries(attrs)
    .map(([k, v]) => `[${k}="${v}"]`)
    .join("");
  let el = document.querySelector(`link[rel="${rel}"]${selector}`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function removeJsonLd(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

/* ── WebSite schema — enables sitelinks search in Google ── */
const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Orbit Capital + Intelligence",
  alternateName: "Orbit",
  url: BASE_URL,
  inLanguage: ["es", "en"],
  publisher: {
    "@type": "Organization",
    name: "Orbit Capital + Intelligence",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/favicon-512.png`,
    },
  },
};

const BREADCRUMB_LABELS = {
  "/": { es: "Inicio", en: "Home" },
  "/capital": { es: "Orbit Capital", en: "Orbit Capital" },
  "/capital/market": { es: "Mercado", en: "Market" },
  "/capital/timing": { es: "Timing", en: "Timing" },
  "/team": { es: "Equipo", en: "Team" },
  "/blog": { es: "Blog", en: "Blog" },
  "/privacy": { es: "Privacidad", en: "Privacy" },
  "/terms": { es: "Términos", en: "Terms" },
};

function buildBreadcrumbJsonLd(pathname, lang) {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: BREADCRUMB_LABELS["/"][lang] || "Inicio",
      item: BASE_URL,
    },
  ];

  if (pathname !== "/") {
    const segments = pathname.split("/").filter(Boolean);
    let currentPath = "";
    segments.forEach((seg, i) => {
      currentPath += `/${seg}`;
      const label = BREADCRUMB_LABELS[currentPath];
      if (label) {
        items.push({
          "@type": "ListItem",
          position: items.length + 1,
          name: label[lang] || label.es,
          item: `${BASE_URL}${currentPath}`,
        });
      }
    });
  }

  // Only return breadcrumbs if there's more than just Home
  if (items.length < 2) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

export function useSEO(lang) {
  const { pathname } = useLocation();

  useEffect(() => {
    const config = SEO_CONFIG[pathname];
    if (!config) return;

    const title = config.title[lang] || config.title.es;
    const description = config.description[lang] || config.description.es;
    const url = `${BASE_URL}${pathname === "/" ? "" : pathname}`;

    // Title
    document.title = title;

    // Core SEO
    setMetaTag("name", "description", description);

    // Canonical
    setLinkTag("canonical", url);

    // Robots — allow max rich results
    setMetaTag("name", "robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");

    // Build page-specific OG image URL
    const pageKey = pathname === "/" ? "home" : pathname.replace(/^\//, "").replace(/\//g, "-");
    const ogImage = `${BASE_URL}/api/og?page=${encodeURIComponent(pageKey)}`;

    // Open Graph
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", url);
    setMetaTag("property", "og:type", pathname.startsWith("/blog/") ? "article" : "website");
    setMetaTag("property", "og:site_name", "Orbit Capital + Intelligence");
    setMetaTag("property", "og:image", ogImage);
    setMetaTag("property", "og:image:width", "1200");
    setMetaTag("property", "og:image:height", "630");
    setMetaTag("property", "og:image:type", "image/png");
    setMetaTag("property", "og:image:alt", title);
    setMetaTag("property", "og:locale", lang === "en" ? "en_US" : "es_MX");

    // Twitter
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:site", "@orbitcapitalai");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", ogImage);
    setMetaTag("name", "twitter:image:alt", title);

    // Hreflang — single-URL site, only x-default (no separate /en/ routes)
    setLinkTag("alternate", url, { hreflang: "x-default" });
    // Remove stale es/en hreflang tags from initial HTML
    document.querySelectorAll('link[hreflang="es"], link[hreflang="en"]').forEach(el => el.remove());

    // JSON-LD: WebSite (always present — enables sitelinks in GSC)
    setJsonLd("orbit-jsonld-website", WEBSITE_JSONLD);

    // JSON-LD: BreadcrumbList (all pages except home)
    const breadcrumb = buildBreadcrumbJsonLd(pathname, lang);
    if (breadcrumb) {
      setJsonLd("orbit-jsonld-breadcrumb", breadcrumb);
    } else {
      removeJsonLd("orbit-jsonld-breadcrumb");
    }

    // JSON-LD: Page-specific schema (supports single object or array of schemas)
    if (config.jsonLd) {
      if (Array.isArray(config.jsonLd)) {
        config.jsonLd.forEach((schema, i) => {
          setJsonLd(`orbit-jsonld${i === 0 ? "" : `-${i}`}`, schema);
        });
        // Clean up any extra slots from a previous page with fewer schemas
        for (let i = config.jsonLd.length; i < 5; i++) {
          removeJsonLd(`orbit-jsonld-${i}`);
        }
      } else {
        setJsonLd("orbit-jsonld", config.jsonLd);
        for (let i = 1; i < 5; i++) removeJsonLd(`orbit-jsonld-${i}`);
      }
    } else {
      removeJsonLd("orbit-jsonld");
      for (let i = 1; i < 5; i++) removeJsonLd(`orbit-jsonld-${i}`);
    }
  }, [pathname, lang]);
}
