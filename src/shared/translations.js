const translations = {
  es: {
    // ── Nav & Global ──
    nav: {
      capital: "Capital",
      intel: "Inteligencia",
      equipo: "Equipo",
      invertir: "Invertir",
      acceso: "Acceso",
      home: "Ecosistema Orbit",
      empezar: "Empezar",
      productos: "Productos",
      agendaDemo: "Contáctanos",
      risk: "Risk",
      riskDemo: "Demo",
      contactanos: "Contáctanos",
      whitepaper: "Whitepaper",
      // Capital sub-nav
      engine: "Engine",
      performance: "Performance",
      infraestructura: "Infraestructura",
      terminos: "Términos",
      mercado: "Mercado",
      timing: "Timing",
      // Intel sub-nav
      producto: "Producto",
      plataforma: "Plataforma",
      verticales: "Verticales",
      integraciones: "Integraciones",
      fuentes: "Fuentes",
      pricing: "Planes",
      // Risk sub-nav
      riskProceso: "Proceso",
      riskExposiciones: "Exposiciones",
      riskPorQue: "¿Por qué?",
      riskArquitectura: "Arquitectura",
      riskCasos: "Casos",
      riskFaq: "FAQ",
      // Dropdown descriptions — Capital
      capitalEngineDesc: "Sistema de trading cuantitativo",
      capitalPerfDesc: "Retornos consistentes ajustados por riesgo",
      capitalInfraDesc: "Institucional desde el día uno",
      capitalTermsDesc: "Estructura y condiciones del fondo",
      capitalMarketDesc: "Oportunidad en mercados de predicción",
      capitalTimingDesc: "Análisis de timing de mercado",
      // Dropdown descriptions — Intel
      intelProductDesc: "Una plataforma, dos interfaces",
      intelVerticalsDesc: "Inteligencia en 7 dimensiones de mercado",
      intelIntegrationsDesc: "Conecta con tu stack de IA",
      intelPricingDesc: "Starter, Professional, Enterprise y AI Platform.",
      // Dropdown descriptions — Risk
      riskProcessDesc: "Cómo funciona Orbit Risk",
      riskExposuresDesc: "Tipos de exposición que cubrimos",
      riskWhyDesc: "Ventaja sobre hedging tradicional",
      riskArchDesc: "Intel + Risk + Capital integrados",
      riskCasesDesc: "Casos reales por industria",
      riskFaqDesc: "Preguntas frecuentes",
      agents: "Agentes",
    },

    // ── Footer ──
    footer: {
      brand: "Inteligencia, cobertura y capital cuantitativo para empresas en América Latina.",
      colCapital: "Orbit Capital",
      colIntel: "Intelligence",
      colRisk: "Orbit Risk",
      colCompany: "Compañía",
      riskProducto: "Producto",
      riskExposiciones: "Exposiciones",
      riskPorQue: "¿Por qué?",
      riskCasos: "Casos de uso",
      riskFaq: "FAQ",
      elFondo: "El Fondo",
      mercado: "Mercado",
      timing: "Timing",
      orbitEngine: "Orbit Engine",
      performance: "Performance",
      plataforma: "Plataforma",
      verticales: "Verticales",
      integraciones: "Integraciones",
      fuentes: "Fuentes",
      pricing: "Planes",
      equipo: "Equipo",
      blog: "Blog",
      press: "Press",
      pronto: "Pronto",
      capitalEmail: "invest@orbitcapital.ai",
      location: "Ciudad de México, México 🇲🇽",
      rights: "Todos los derechos reservados.",
      builtWith: "Construido con pasión en México 🇲🇽",
      privacy: "Aviso de privacidad",
      terms: "Términos de uso",
    },

    // ── Home ──
    home: {
      // Hero
      badge: "",
      heroTitle1: "Construyendo la infraestructura de ",
      heroTitleGradient: "mercados de predicción",
      heroTitle2: " para LATAM.",
      heroDesc1: "Sistemas cuantitativos de capital y riesgo para mercados ",
      heroDescBold: "basados en eventos",
      heroDesc2: ".",
      heroCta1: "Contáctanos",
      heroCta2: "Explora la API",

      // Social Proof Bar
      socialProofLine: "Mercados de predicción: el activo con mayor crecimiento y menor correlación a nivel global",
      socialProofMetrics: [
        { value: "$44B+", label: "Volumen prediction markets 2025" },
        { value: "7", label: "Verticales de análisis" },
        { value: "CFTC", label: "Regulación institucional (Kalshi)" },
        { value: "3", label: "Productos integrados" },
      ],

      // Use Cases
      useCasesTag: "Casos de Uso",
      useCasesTitle: "Problemas reales que resolvemos cada día",
      useCases: [
        { industry: "Manufactura", desc: "Tu fábrica exporta a EE.UU. y necesitas saber si vienen aranceles nuevos antes de que te golpeen los márgenes.", link: "/risk", accent: "risk" },
        { industry: "Fondo de inversión", desc: "Quieres alpha real en LATAM con datos que el resto del mercado todavía no tiene.", link: "/capital", accent: "capital" },
      ],

      // Bottom CTA
      bottomCtaTitle: "¿Listo para moverte antes que la competencia?",
      bottomCtaCta: "Contáctanos",

      // Ecosystem (3 cards)
      ecosystemTag: "El Ecosistema",
      ecosystemTitle1: "Un ecosistema. Tres capas.",
      ecosystemTitle2: "Un flywheel.",
      ecosystemDesc: "Orbit vive donde se cruzan la inteligencia de mercado, la gestión de riesgo y el trading cuantitativo. Cada pieza alimenta a la otra: los datos generan protección, la protección genera liquidez, la liquidez genera retornos, y los retornos mejoran los datos.",
      intelName: "Nuestra Intelligence",
      intelSub: "El motor de inteligencia",
      intelCardDesc: "Nuestra infraestructura de inteligencia interna: Knowledge Graphs, probabilidades calibradas y señales alternativas que alimentan todo el ecosistema.",
      intelCta: "Conocer Intel",
      riskName: "Orbit Risk",
      riskSub: "La capa de protección",
      riskCardDesc: "Coberturas operativas para empresas que enfrentan incertidumbre política, regulatoria y macroeconómica en LATAM.",
      riskCta: "Conocer Risk",
      capitalName: "Orbit Capital",
      capitalSub: "La capa de validación",
      capitalCardDesc: "Fondo cuantitativo que opera mercados de predicción de forma sistemática. Donde la inteligencia de Orbit se valida con capital real.",
      capitalCta: "Conocer el Fondo",

      // Nuestra Inteligencia section
      intelSectionTag: "Nuestra tecnología",
      intelSectionTitle: "Nuestra propia infraestructura de inteligencia",
      intelSectionDesc: "Señales de prediction markets, X/Grok y datos alternativos unificados en un Knowledge Graph que alimenta Capital y Risk.",
      intelSectionBullets: [
        "7 verticales: Política, Economía, Regulatorio, Energía, Clima, Real Estate, Seguros",
        "Knowledge Graph unificado que alimenta directamente a los 13 agentes de Capital",
        "Construida desde cero en CDMX — nuestra ventaja, no un producto de terceros",
      ],
      intelSectionCta: "Conocer Nuestra Inteligencia →",

      // Orbit Risk section (protagonist)
      riskSectionTag: "Orbit Risk",
      riskSectionTitle: "Cobertura de riesgo que realmente funciona",
      riskSectionSubtitle: "Un tweet sobre aranceles o una reforma inesperada pueden borrar un trimestre de margen. Orbit Risk traduce esas exposiciones en coberturas ejecutadas directamente en prediction markets.",
      riskSteps: [
        { num: "01", title: "Conecta tu operación", desc: "Integramos tus datos clave — ingresos, costos, cadena de suministro — y nuestra IA identifica los factores externos que te afectan." },
        { num: "02", title: "Mapeamos tus riesgos", desc: "Cada exposición se traduce en contratos de prediction markets: aranceles, tasas, regulación, elecciones. Portfolio optimizado al menor costo." },
        { num: "03", title: "Ejecutamos la cobertura", desc: "Orbit Capital ejecuta las posiciones como tu hedge operativo. Monitoreo continuo y reportes en tiempo real." },
      ],
      riskExampleTitle: "Ejemplo: Exportadora manufacturera mexicana",
      riskExampleLines: [
        "Una manufacturera mexicana exporta el 40% de su producción a Estados Unidos.",
        "→ Nuestra Inteligencia detecta que la probabilidad de nuevos aranceles a manufactura mexicana saltó de 15% a 42% en 72 horas.",
        "→ Orbit Risk mide el impacto: $2.3M USD de revenue en riesgo. Diseña cobertura con 4 contratos en Polymarket y Kalshi.",
        "→ Orbit Capital ejecuta el hedge. Si pasan los aranceles, la empresa cobra. Si no, el costo de protección fue una fracción del riesgo.",
      ],
      riskExposuresTitle: "Tipos de exposición que cubrimos",
      riskExposures: [
        "Aranceles y política comercial US-LATAM",
        "Tipo de cambio MXN/USD",
        "Regulación financiera (CNBV, SHCP)",
        "Política energética y reforma eléctrica",
        "Disrupciones de nearshoring",
        "Riesgo político y electoral",
        "Commodities y cadena de suministro",
      ],
      riskCtaWaitlist: "Únete a la lista de espera",
      riskExperimentalLabel: "Fase experimental",

      // Orbit Capital section (protagonist)
      capitalSectionTag: "Orbit Capital",
      capitalSectionTitle: "El motor cuantitativo de predicción",
      capitalSectionSubtitle: "El primer fondo cuantitativo de prediction markets en LATAM. 13 agentes autónomos navegan nuestro Knowledge Graph para encontrar y ejecutar alpha en un mercado de $44B+ que nadie opera con IA.",
      capitalSteps: [
        { num: "01", title: "Compromete capital", desc: "Invierte en MXN, USD, USDC o USDT. Depósito directo a custodia institucional Fireblocks." },
        { num: "02", title: "Los agentes operan por ti", desc: "13 agentes navegan el Knowledge Graph para encontrar y ejecutar oportunidades. Ejecución sub-150ms, 24/7." },
        { num: "03", title: "Transparencia total", desc: "NAV diario, statements mensuales y dashboard LP en tiempo real. Supervisión humana con kill-switches." },
      ],
      capitalExampleTitle: "Ejemplo: Fondo de inversión LATAM",
      capitalExampleLines: [
        "Un family office en México busca diversificación real con baja correlación al S&P 500.",
        "→ Nuestra Inteligencia detecta que la probabilidad de recorte de Banxico saltó del 40% al 68%. Los agentes identifican pricing edge en 3 contratos.",
        "→ Rigel ejecuta las posiciones. Si las probabilidades revierten, Polaris activa el kill-switch.",
      ],
      capitalProductsTitle: "¿Qué opera el fondo?",
      capitalProducts: [
        "Trading direccional en mercados políticos y económicos",
        "Arbitraje cross-market entre Polymarket y Kalshi",
        "Estrategias event-driven con detección anticipada",
        "Venta sistemática de volatilidad en tail-risk",
        "Market making vía demanda de hedging de Risk",
        "Diversificación real: correlación <0.2 con S&P 500",
      ],
      capitalSectionMetrics: [
        { value: "18%", label: "Retorno neto anual objetivo" },
        { value: ">1.5", label: "Sharpe Ratio (backtested)" },
        { value: "<0.2", label: "Correlación con S&P 500 (backtested)" },
      ],
      capitalSectionCta: "Conocer el Fondo",
      capitalInvestCta: "Invertir en el fondo",

      // Agents Showcase
      agentsTag: "Los Agentes",
      agentsTitle: "13 agentes. Una constelación autónoma.",
      agentsDesc: "Cada agente tiene wallet propio, autoridad de decisión y un rol especializado. El humano supervisa. La máquina ejecuta.",
      agentsList: [
        { name: "Atlas", role: "Graph Architect", celestialType: "planet" },
        { name: "Sirius", role: "Data Intake", celestialType: "star" },
        { name: "Kepler", role: "Data Intake", celestialType: "planet" },
        { name: "Proxima", role: "Data Intake", celestialType: "star" },
        { name: "Vega", role: "Generación de Señales", celestialType: "star" },
        { name: "Trappist", role: "Calibración de Probabilidad", celestialType: "system" },
        { name: "Rigel", role: "Ejecución de Trades", celestialType: "giant" },
        { name: "Gliese", role: "Arbitraje Cross-Market", celestialType: "star" },
        { name: "Polaris", role: "Risk Oversight", celestialType: "star" },
        { name: "Altair", role: "Gestión de Portafolio", celestialType: "system" },
        { name: "Centauri", role: "Orquestación", celestialType: "star" },
        { name: "Cassiopeia", role: "Reporting", celestialType: "nebula" },
        { name: "Andromeda", role: "Operaciones", celestialType: "galaxy" },
      ],

      // Ecosistema (Flywheel)
      flywheelTag: "El Ecosistema",
      flywheelTitle: "Un fondo. Un ecosistema. Un flywheel.",
      flywheelDesc: "Cada operación alimenta el Knowledge Graph, cada cobertura genera liquidez, cada señal mejora las decisiones.",
      flywheelSteps: [
        { title: "Orbit Capital", sub: "La capa de validación", desc: "El fondo cuantitativo opera los mismos datos con infraestructura institucional. Si genera retornos, los datos funcionan.", icon: "chart", cta: "Conocer el Fondo", link: "/capital" },
        { title: "Orbit Risk", sub: "La capa de protección", desc: "Los datos se convierten en coberturas operativas concretas para empresas que enfrentan incertidumbre en LATAM.", icon: "shield", cta: "Conocer Risk", link: "/risk" },
        { title: "Nuestra Intelligence", sub: "La capa de datos", desc: "Probabilidades en tiempo real de prediction markets y señales de X, con foco en LATAM.", icon: "cpu", cta: "Explorar Intel", link: "/intel" },
      ],

      // Validation
      validationTag: "Validación",
      validationTitle1: "Datos reales, construido por",
      validationTitle2: "operadores reales",
      validationStats: [
        { label: "Volumen total prediction markets 2025" },
        { label: "Correlación con S&P 500 (backtested)" },
        { label: "Verticales de inteligencia" },
      ],
      // ── Newsletter ──
      newsletterTag: "Comunidad",
      newsletterTitle1: "Únete a",
      newsletterTitle2: "Perihelio",
      newsletterDesc: "Análisis de prediction markets, señales macro para LATAM y estrategias cuantitativas — todo Orbit en un solo canal.",
      newsletterTelegram: "Unirse a Perihelio en Telegram",
      newsletterPapers: [
        { planet: "Mercurio", title: "¿Bajará Banxico la tasa antes de junio?", prob: 68, outcome: "Sí" },
        { planet: "Venus", title: "¿Flujos institucionales LATAM superarán $5B?", prob: 54, outcome: "Sí" },
        { planet: "Tierra", title: "¿Se impondrán nuevos aranceles a México?", prob: 72, outcome: "Sí" },
        { planet: "Marte", title: "¿El peso caerá a 22 MXN/USD?", prob: 35, outcome: "No" },
        { planet: "Júpiter", title: "¿Polymarket superará $2B vol. mensual?", prob: 58, outcome: "Sí" },
        { planet: "Saturno", title: "¿Sentiment en X predecirá el S&P 500?", prob: 44, outcome: "Sí" },
        { planet: "Urano", title: "¿Bitcoin superará $200k este año?", prob: 38, outcome: "No" },
        { planet: "Neptuno", title: "¿Petróleo Brent arriba de $90?", prob: 31, outcome: "No" },
        { planet: "Plutón", title: "¿Habrá acuerdo de paz Rusia-Ucrania?", prob: 28, outcome: "No" },
        { planet: "Kepler-442b", title: "¿Se alcanzará AGI este año?", prob: 8, outcome: "No" },
        { planet: "Próxima b", title: "¿La FED recortará tasas 3+ veces?", prob: 45, outcome: "Sí" },
        { planet: "TRAPPIST-1e", title: "¿T-MEC será renegociado este año?", prob: 62, outcome: "Sí" },
        { planet: "Europa", title: "¿CNBV regulará cripto este año?", prob: 73, outcome: "Sí" },
        { planet: "Titán", title: "¿Amazon entrará a banca en México?", prob: 29, outcome: "No" },
        { planet: "Ganímedes", title: "¿Habrá recesión en EE.UU. este año?", prob: 23, outcome: "No" },
        { planet: "Ceres", title: "¿FDA aprobará nueva terapia génica?", prob: 66, outcome: "Sí" },
        { planet: "Eris", title: "¿NVIDIA superará $200 por acción?", prob: 57, outcome: "Sí" },
        { planet: "Io", title: "¿SoftBank invertirá más en LATAM?", prob: 55, outcome: "Sí" },
      ],
      newsletterDisclaimer: "Ejemplos ilustrativos. No representan datos en tiempo real.",

      ctaTitle: "La infraestructura de inteligencia, riesgo y trading que LATAM necesitaba.",
      ctaDesc: "Tres productos, tres audiencias, un ecosistema. Sin importar tu perfil, hay algo en Orbit para ti.",
      ctaAudiences: [
        { label: "Empresas", desc: "Solicitar demo de Risk", link: "/risk", icon: "shield", variant: "risk" },
        { label: "Developers", desc: "Explorar Intel API", link: "/intel", icon: "cpu", variant: "intel" },
        { label: "Inversores", desc: "Conocer Capital", link: "/capital", icon: "chart", variant: "capital" },
      ],
      ctaLocation: "Ciudad de México, México",
      logoMarqueeTitle: "Infraestructura de mercados de predicción líder",
      polymarketTag: "Mercados en vivo",
      polymarketTitle: "Mercados de predicción en tiempo real",
      polymarketDesc: "Mercados enterprise filtrados por relevancia corporativa para México y LATAM.",
      polymarketPowered: "Datos de Polymarket",
      polymarketYes: "Sí",
      polymarketNo: "No",
      polymarketVol: "Vol 24h",
      polymarketLoading: "Cargando mercados...",
      polymarketCatGeopolitics: "Geopolítica",
      polymarketCatMacroeconomy: "Macro",
      polymarketCatRegulatory: "Regulatorio",
      polymarketCatElections: "Elecciones",
      polymarketCatTechnology: "Tecnología",
      polymarketCatClimateEnergy: "Clima y Energía",
      polymarketCatPublicHealth: "Salud",
      polymarketCatOther: "Mercado",
    },

    // ── Capital Landing ──
    capital: {
      heroTag: "Orbit Capital · Agentic Hedge Fund",
      heroTitle1: "Alfa cuantitativo en prediction markets.",
      heroTitle2: "El primer quant hedge fund de prediction markets en América Latina.",
      heroDesc: "13 agentes autónomos operan sobre un Knowledge Graph propietario. Inteligencia autónoma, ejecución institucional y cobertura de riesgo — un fondo algorítmico construido sobre tres pilares.",
      heroCta1: "Iniciar tu asignación",
      heroCta2: "Conoce la arquitectura agéntica",
      statsTag: "La oportunidad",
      statsTitle: "Un mercado de $44B+ sin capital institucional en LATAM.",
      statsDesc: "Regulación activa (Kalshi/CFTC), volumen 130x desde 2024, y casi cero participación profesional. La ventana está abierta.",
      statsValidation: "Ver validación institucional completa →",
      engineTag: "Arquitectura Agéntica",
      engineTitle1: "13 agentes. Un Knowledge Graph.",
      engineTitle2: "Alpha que se genera solo.",
      engineDesc: "Nada de algoritmos fijos ni bots convencionales. Orbit Capital opera con 13 agentes autónomos que navegan el Knowledge Graph de Orbit Risk para encontrar, validar y ejecutar oportunidades en prediction markets. Risk construye el grafo. Capital lo consume.",
      infraTag: "Infraestructura",
      infraTitle: "Infraestructura institucional desde el día uno.",
      infraDesc: "La mayoría de los managers emergentes arrancan con MetaMask y un spreadsheet. Nosotros no.",
      termsTag: "Inversión",
      termsTitle: "Términos del fondo",
      termsCta1: "Solicitar documentos del fondo",
      termsCta2: "Agendar llamada",
      teamTag: "Equipo",
      teamTitle: "Equipo fundador",
      teamVerEquipo: "Ver equipo completo →",
      ctaTitle1: "¿Listo para acceder a",
      ctaTitle2: "alpha no correlacionado",
      ctaTitle3: "?",
      ctaDesc: "La ventana está abierta. Si quieres este fondo en tu portafolio, hablemos.",
      ctaCta1: "Iniciar tu asignación",
      ctaCta2: "Solicitar documentos del fondo",
      ctaLocation: "Ciudad de México, México",
      ctaDisclaimer: "Este documento es solo informativo y no constituye oferta de venta de valores. Rendimientos pasados no garantizan rendimientos futuros. Consulte a su asesor financiero antes de invertir.",
      // Performance section
      perfTag: "Resultados",
      perfTitle: "Retornos consistentes. Riesgo controlado.",
      perfDisclaimer: "Track record backtested de 12+ meses de trading simulado en datasets de prediction markets. Publicamos estos números porque la transparencia no debería ser opcional — es parte del producto.",
      // Team section
      teamDesc: "Venimos de finanzas cuantitativas, ciberseguridad y tecnología. Hemos levantado capital, cerrado deals enterprise, construido sistemas a escala y navegado industrias reguladas. Toda esa disciplina ahora la aplicamos a operar prediction markets.",
      // Trust section
      trustTag: "Confianza",
      trustTitle: "Construido por operadores. Respaldado por datos.",
      trustQuote: "\"La tesis es directa: si construyes un Knowledge Graph que refleje la realidad mejor que el mercado, y agentes que lo naveguen para operar, puedes generar alpha sostenible. Los prediction markets son el terreno ideal — transparencia total, liquidación inmediata y un espacio donde la infraestructura agéntica marca toda la diferencia.\"",
      trustQuoteAuthor: "— Equipo Orbit Capital",
      // Community section
      communityTag: "Comunidad",
      communityTitle1: "La comunidad de",
      communityTitle2: "traders de prediction markets",
      communityTitle3: "más activa de México.",
      communityDesc: "No solo operamos — estamos construyendo la comunidad de traders de prediction markets más grande de LATAM. Estrategias compartidas, cursos en vivo y mentoría directa de nuestro equipo.",
      communityPlaceholder: "tu@email.com",
      communityCta: "Unirme a la comunidad",
      communitySuccess: "¡Bienvenido al equipo! 🚀",
      communityPerks: [
        { icon: "signal", title: "Señales cada semana", desc: "Nuestras señales de trading y tesis de inversión en prediction markets, directo a tu inbox." },
        { icon: "brain", title: "Aprende en vivo", desc: "Workshops sobre prediction markets, trading cuantitativo y herramientas como Polymarket y Kalshi." },
        { icon: "trending", title: "Análisis exclusivos", desc: "Reportes sobre oportunidades de arbitraje, sentiment y movimientos de smart money que no encuentras en otro lado." },
        { icon: "rocket", title: "Red de traders", desc: "Conecta con otros traders de prediction markets en México y LATAM. Networking real y colaboración." },
      ],
      // Hardcoded data arrays
      stats: [
        { value: "44B+", label: "Volumen prediction markets 2025.", prefix: "$" },
        { value: "<0.2", label: "Correlación con S&P 500. Diversificación real." },
        { value: "CFTC", label: "Regulación institucional (Kalshi)." },
        { value: "1ro", label: "Primer fondo sistemático de prediction markets en LATAM." },
      ],
      engineSteps: [
        { num: "01", title: "Knowledge Graph (Orbit Risk)", desc: "Atlas — agente de Orbit Risk — construye y mantiene el Knowledge Graph con 5 tipos de nodos y 5 tipos de edges. Risk lo construye, Capital lo consume. Cada engagement enriquece el grafo." },
        { num: "02", title: "Generación de señales", desc: "Sirius, Kepler y Proxima alimentan datos al grafo. Vega y Trappist consumen el Knowledge Graph para generar señales con valor esperado cuantificado y detección de patrones multi-dimensionales." },
        { num: "03", title: "Ejecución autónoma", desc: "Rigel ejecuta operaciones en múltiples venues (Polymarket, Kalshi) con ciclos sub-segundo. Gliese detecta arbitraje cross-market y gestiona settlement. Todo basado en señales del Knowledge Graph." },
        { num: "04", title: "Risk & Oversight", desc: "Polaris tiene autoridad de override y kill-switches. Altair gestiona el portafolio con rebalanceo dinámico. Centauri orquesta los 13 agentes. Transparencia total: NAV 24/7 y dashboard LP." },
      ],
      metrics: [
        { value: "18%", label: "Retorno neto anual objetivo" },
        { value: ">1.5", label: "Sharpe Ratio (backtested)" },
        { value: "1.3+", label: "Profit Factor (backtested)" },
        { value: "<15%", label: "Drawdown máximo" },
        { value: "<0.2", label: "Correlación S&P 500" },
      ],
      infra: [
        { name: "Fireblocks", desc: "Custody MPC institucional. Multi-sig. Cero punto único de fallo. La misma plataforma de BlackRock y Galaxy Digital.", icon: "shield" },
        { name: "TRES FinOS", desc: "Contabilidad cripto-nativa. NAV automatizado, fees, reconciliación. Sin spreadsheets manuales.", icon: "cpu" },
        { name: "Xero", desc: "Libro mayor corporativo integrado con contabilidad cripto.", icon: "building" },
        { name: "Portal LP (Grafana)", desc: "Tu dashboard. Performance, composición, riesgo y Proof of Funds — disponible 24/7.", icon: "signal" },
      ],
      terms: [
        { label: "Management Fee", value: "2.5% anual" },
        { label: "Performance Fee", value: "20% sobre hurdle rate del 8%" },
        { label: "High-Water Mark", value: "Sí — solo cobramos performance sobre nuevas ganancias" },
        { label: "Liquidez", value: "Rescates mensuales con 30 días de aviso" },
        { label: "Asignación mínima", value: "$1M MXN (~$57K USD)" },
        { label: "Reporting", value: "Statements mensuales + dashboard en tiempo real" },
      ],
      // Trading Strategies section
      strategiesTitle: "Cinco estrategias. Un Knowledge Graph.",
      strategiesDesc: "Cada agente recorre un camino diferente del grafo. Misma inteligencia, distintas oportunidades.",
      strategies: [
        { name: "Trading Direccional", badge: "35-40%", agents: "VEGA + RIGEL", desc: "Vega recorre el Knowledge Graph para detectar pricing edge — la diferencia entre nuestra probabilidad estimada y el precio de mercado. Cuando el edge es claro, Rigel ejecuta en menos de 150ms." },
        { name: "Arbitraje Cross-Market", badge: "20-25%", agents: "GLIESE", desc: "Gliese monitorea los edges de correlación entre mercados en diferentes venues. Cuando los spreads superan las comisiones, ejecuta simultáneamente en ambos lados. Totalmente autónomo, crítico en latencia." },
        { name: "Event-Driven", badge: "15-20%", agents: "KEPLER + VEGA + RIGEL", desc: "Kepler detecta eventos breaking antes de que el mercado reprice. El Knowledge Graph mapea exposiciones Entity-Event, así que Vega calcula instantáneamente efectos de segundo orden que otros tardan horas en descifrar." },
        { name: "Venta Sistemática de Volatilidad", badge: "10-15%", agents: "TRAPPIST + VEGA + RIGEL", desc: "Trappist calibra probabilidades mediante consenso multi-LLM. Vendemos sistemáticamente contratos de tail-risk sobrevalorados donde el sesgo de longshot infla la probabilidad implícita." },
        { name: "Market Making vía Demanda de Risk", badge: "5-10%", agents: "RIGEL + ALTAIR", desc: "La demanda de hedging de nuestra vertical de Risk crea flujo benigno contra el cual podemos proveer liquidez de forma segura. Capital gana el spread. Risk obtiene hedging eficiente.", crossVertical: true },
      ],
      categoriesTitle: "Categorías de Mercado",
      categories: [
        { name: "Política y Elecciones", pct: "35-45%" },
        { name: "Economía y Política Monetaria", pct: "25-35%" },
        { name: "Geopolítica y Regulación", pct: "10-20%" },
        { name: "Tecnología y Corporativo", pct: "5-15%" },
        { name: "Clima y Eventos Naturales", pct: "5-10%" },
      ],
      categoriesExcluded: "Excluido: Deportes, precios de criptomonedas, eventos de celebridades.",
      stepsTitle: "De tu capital a alpha en seis pasos.",
      stepsDesc: "Invierte en la moneda que prefieras. Cada dólar es rastreable de punta a punta.",
      investSteps: [
        { num: "01", title: "Compromete Capital", desc: "Invierte en MXN, USD, USDC o USDT. ¿Ya tienes stablecoins? Deposita directo a custodia — sin conversión necesaria. Fiat se convierte vía Bridge by Stripe.", agent: "CENTAURI" },
        { num: "02", title: "Custodia Institucional", desc: "Custodia MPC Fireblocks — $10T+ asegurados para instituciones. Multi-party computation, enclaves Intel SGX, SOC 2 Type II.", agent: "ALTAIR" },
        { num: "03", title: "Despliegue de Agentes IA", desc: "Altair dispersa capital a wallets de trading especializadas vía Coinbase Agentic Wallets. Caps de sesión y límites por transacción en cada wallet.", agent: "ALTAIR" },
        { num: "04", title: "Trading Autónomo", desc: "13 agentes operan prediction markets 24/7 sobre el Knowledge Graph. Ejecución sub-150ms en Polymarket. Liquidación USDC en Polygon.", agent: "RIGEL + GLIESE" },
        { num: "05", title: "Gestión de Riesgo Continua", desc: "Polaris monitorea el subgrafo del portafolio en tiempo real. Autoridad de override. Máximo 5% por mercado, caps de drawdown diario, límites de correlación.", agent: "POLARIS" },
        { num: "06", title: "Reporting Transparente", desc: "NAV diario, statements mensuales, atribución de performance. Cada movimiento rastreable en el Knowledge Graph.", agent: "CASSIOPEIA" },
      ],
      currencyNote: "Todo el capital se liquida en USDC para uniformidad operativa",

      // FAQ section
      faqTag: "Preguntas frecuentes",
      faqTitle: "Preguntas frecuentes sobre Orbit Capital",
      faqItems: [
        { q: "¿Qué es Orbit Capital?", a: "Orbit Capital es un agentic hedge fund — el primero en LATAM — que opera prediction markets mediante una infraestructura de 13 agentes autónomos que consumen el Knowledge Graph unificado de Orbit Risk. No usamos algoritmos fijos: nuestros agentes navegan un grafo vivo de entidades, eventos y relaciones." },
        { q: "¿En qué mercados opera el fondo?", a: "Operamos en Polymarket (mercado internacional) y Kalshi (regulado por la CFTC en EE.UU.). Nuestros agentes — Rigel (ejecución) y Gliese (arbitraje) — cubren mercados políticos, económicos, regulatorios y de eventos globales." },
        { q: "¿Qué es el Knowledge Graph?", a: "El Knowledge Graph es la infraestructura central de Orbit Risk. Es una red con 5 tipos de nodos (Entity, Event, Market, Asset, Source) y 5 tipos de edges (Exposure, Correlation, Position, Dependency, Signal). Atlas — agente de Orbit Risk — lo construye. Los agentes de Capital lo consumen para trading. Cada operación enriquece el grafo." },
        { q: "¿Quiénes son los 13 agentes?", a: "Cada agente tiene nombre celestial: Atlas (Graph Architect, Orbit Risk), Sirius/Kepler/Proxima (datos), Vega/Trappist (inteligencia), Rigel/Gliese (ejecución), Polaris/Altair (riesgo), y Centauri/Cassiopeia/Andromeda (operaciones). Todos operan 24/7 con wallets propios." },
        { q: "¿Cuál es el rendimiento esperado?", a: "El objetivo de retorno neto anual es del 18%, con un Sharpe Ratio backtested superior a 1.5 y un drawdown máximo inferior al 15%. Los rendimientos pasados no garantizan resultados futuros." },
        { q: "¿Cuál es la inversión mínima?", a: "$1M MXN (~$57K USD). Incluye acceso al dashboard LP en tiempo real, statements mensuales y soporte dedicado del equipo." },
      ],
    },

    // ── Intel Landing ──
    intel: {
      heroTag: "Intelligence · Motor de Inteligencia",
      heroTitle1: "El cerebro que alimenta todo Orbit.",
      heroTitle2: "Knowledge Graphs + Prediction Markets + Señales Alternativas.",
      heroDesc: "Nuestra Inteligencia es nuestra infraestructura de inteligencia. Conecta datos de prediction markets, noticias, redes sociales y fuentes alternativas en un Knowledge Graph que impulsa las decisiones de Capital y los modelos de Risk.",
      heroCta1: "Conocer Orbit Capital",
      heroCta2: "Conocer Orbit Risk",
      painTag: "El Desafío",
      painTitle: "¿Por qué construir nuestra propia infraestructura de inteligencia?",
      painDesc: "Para operar un fondo cuantitativo y una plataforma de cobertura en LATAM, necesitábamos datos que simplemente no existían en el mercado.",
      pains: [
        "No había datos de probabilidad en tiempo real para eventos políticos, económicos y regulatorios en LATAM.",
        "Los agentes de trading necesitan contexto profundo sobre la región para tomar decisiones inteligentes.",
        "Los proveedores tradicionales de inteligencia son caros, entregan PDFs semanales y no sirven para consumo programático.",
        "Los datos de redes sociales son ruidosos, desestructurados e imposibles de convertir en señales accionables.",
      ],
      productTag: "La Plataforma",
      productTitle1: "Una infraestructura. Múltiples capacidades.",
      productTitle2: "Cada señal que mueve un mercado.",
      productDesc: "Nuestra Inteligencia reúne probabilidades de prediction markets, inteligencia social de X (via Grok) y fuentes alternativas, y lo estructura en un Knowledge Graph que alimenta a los agentes de Capital y los modelos de Risk.",
      verticalsTag: "Verticales",
      verticalsTitle: "Inteligencia organizada por cada dimensión que mueve mercados.",
      trustTag: "Nuestra Ventaja",
      trustTitle: "¿Por qué no compramos inteligencia de terceros?",
      trustCards: [
        { title: "Orbit Capital", desc: "Intel alimenta a los 13 agentes de Capital para que operen prediction markets con la precisión que necesitan." },
        { title: "Orbit Risk", desc: "Los modelos de Risk consumen el Knowledge Graph de Intel para ejecutar coberturas basadas en probabilidades reales, no en estimaciones." },
        { title: "Orbit Intel", desc: "El Knowledge Graph unifica todas las fuentes en un grafo vivo que los agentes y modelos consumen 24/7 para entender LATAM como nadie más." },
      ],
      ctaTitle1: "Inteligencia propia.",
      ctaTitle2: "Ventaja real.",
      ctaDesc: "Nuestra Inteligencia es el motor que hay detrás de cada decisión de inversión de Capital y cada cobertura de Risk. Infraestructura construida desde cero en CDMX para entender LATAM como nadie más puede.",
      ctaCta1: "Conocer Orbit Capital",
      ctaCta2: "Conocer Orbit Risk",
      ctaLocation: "Ciudad de México, México",
      ctaDisclaimer: "Nuestra Inteligencia es infraestructura propietaria interna del ecosistema Orbit. No es un producto comercial ni se encuentra disponible para licenciamiento.",
      // Data sources section (previously Integrations)
      integrationsTag: "Fuentes de Datos",
      integrationsTitle: "Las fuentes que alimentan nuestro Knowledge Graph.",
      // Hardcoded data arrays
      verticals: [
        { name: "Political", icon: "scale", q: "¿Quién ganará? ¿Qué políticas pasarán?", use: "Alimenta agentes de trading y modelos de riesgo político de Orbit." },
        { name: "Economic", icon: "trending", q: "¿Qué hará Banxico? ¿Inflación? ¿Recesión?", use: "Señales para agentes de tesorería, FX y modelos de crédito de Orbit." },
        { name: "Regulatory", icon: "shield", q: "¿Pasará esta reforma? ¿Cómo afecta al portafolio?", use: "Datos para modelos de compliance y coberturas regulatorias de Orbit Risk." },
        { name: "Energy", icon: "rocket", q: "¿Petróleo? ¿Política energética?", use: "Inteligencia para posiciones de energía y coberturas operativas." },
        { name: "Climate", icon: "globe", q: "¿Rendimientos agrícolas? ¿Sequía?", use: "Señales para modelos de seguros paramétricos y cadena de suministro." },
        { name: "Real Estate", icon: "building", q: "¿Infraestructura? ¿Nearshoring?", use: "Datos para tesis de inversión y análisis de exposición inmobiliaria." },
        { name: "Insurance", icon: "chart", q: "¿Probabilidad real del evento? ¿Pricing de riesgo?", use: "Probabilidades calibradas para hedging dinámico y coberturas paramétricas." },
      ],
      integrations: [
        { name: "Prediction Markets", desc: "Polymarket, Kalshi y otros mercados de predicción como fuentes primarias de probabilidades consensuadas en tiempo real." },
        { name: "X / Grok", desc: "Análisis de sentimiento social en tiempo real powered by Grok. Hilos, tendencias y señales de opinión pública." },
        { name: "Fuentes Oficiales", desc: "INEGI, Banxico, DOF, SEC y otras fuentes gubernamentales y regulatorias de México y LATAM." },
        { name: "Señales Alternativas", desc: "Datos satelitales, flujos de comercio, indicadores de actividad económica y otras fuentes no convencionales." },
        { name: "Knowledge Graph", desc: "Todo converge en un grafo unificado con 5 tipos de nodos y 5 tipos de edges que los agentes de Orbit consumen 24/7." },
      ],
      // Product section hardcoded lists
      consoleLabel: "Interfaces internas",
      consoleFeatures: [
        "Dashboards de probabilidad en tiempo real en 7 verticales",
        "Explorador de hilos de X con análisis de sentimiento",
        "Constructor de escenarios what-if para validación de tesis",
        "Alertas inteligentes configurables para los equipos de inversión",
        "ORBIT AI Copilot — asistente de inteligencia para el equipo Orbit",
      ],
      apiLabel: "Para los agentes de Orbit",
      apiFeatures: [
        "REST, GraphQL y WebSocket endpoints internos",
        "Probabilidades, sentimiento de X, entidades, eventos en tiempo real",
        "Embeddings semánticos y búsqueda contextual para el Knowledge Graph",
        "Feeds nativos para los 13 agentes autónomos de Orbit Capital",
        "Contexto LATAM en milisegundos para decisiones de trading y cobertura",
      ],
      // FAQ section
      faqTag: "Preguntas frecuentes",
      faqTitle: "Preguntas frecuentes sobre Nuestra Inteligencia",
      faqItems: [
        { q: "¿Qué es Nuestra Inteligencia?", a: "Nuestra Inteligencia es la plataforma propietaria de inteligencia interna de Orbit. No es un producto comercial ni un SaaS — es la infraestructura que alimenta todo el ecosistema Orbit, desde los agentes de trading de Orbit Capital hasta los modelos de cobertura de Orbit Risk." },
        { q: "¿Qué tipo de datos procesa?", a: "Procesa probabilidades en tiempo real de prediction markets, sentimiento social de X vía Grok, datos oficiales de INEGI, Banxico y DOF, y señales alternativas — todo unificado en un Knowledge Graph con entidades, eventos, mercados, activos y fuentes." },
        { q: "¿Cómo alimenta a Orbit Capital?", a: "Nuestra Inteligencia es la fuente de datos e insights que los 13 agentes autónomos de Orbit Capital consumen para tomar decisiones de trading en prediction markets. Cada operación enriquece el Knowledge Graph, creando un ciclo virtuoso de inteligencia." },
        { q: "¿Cómo se conecta con Orbit Risk?", a: "Orbit Risk consume el Knowledge Graph de nuestra Inteligencia para modelar exposiciones empresariales y ejecutar coberturas con precisión. Las probabilidades en tiempo real permiten pricing dinámico y hedging paramétrico." },
        { q: "¿Nuestra Inteligencia está disponible como producto?", a: "No. Nuestra Inteligencia es infraestructura interna propietaria. No se vende ni se licencia. Es la ventaja competitiva que hace posible la operación de Orbit Capital y Orbit Risk." },
      ],
    },

    // ── Team Page ──
    team: {
      heroTag: "Equipo",
      heroTitle: "Quiénes somos",
      heroDesc: "Un equipo que combina finanzas cuantitativas, tecnología y ciberseguridad.",
      foundersTag: "Fundadores",
      foundersTitle: "Equipo fundador",
      advisorsTag: "Advisors",
      advisorsTitle1: "Consejo asesor",
      advisorsTitle2: "(en formación)",
      advisorsDesc: "Perfiles de alto nivel en áreas clave para credibilidad y conocimiento estratégico.",
      enBusqueda: "En búsqueda",
      bioJavier: "Ha construido y escalado operaciones de infraestructura energética y proyectos solares en México por más de una década. Expertise en navegar industrias altamente reguladas — energía, finanzas, gobierno. Impulsa la convergencia AI + fintech en mercados emergentes desde la operación.",
      bioSebastian: "Competidor en la Olimpiada Internacional de Matemáticas. Ingeniero cuantitativo con background en investigación económica en ITAM. Lideró equipos de datos en empresas tech multinacionales en LATAM. Arquitecto del stack completo: pipelines de datos, modelos predictivos, ejecución automatizada e infraestructura de riesgo.",
      bioRodrigo: "+5 años en trading cuantitativo en crypto y equities. Fundó una firma de prop trading y levantó capital de inversionistas internacionales. Expertise profundo en arbitraje estadístico, derivados, market microstructure y risk management. Diseña y supervisa todas las estrategias de inversión de Orbit Capital.",
      bioTono: "Co-founder & Co-CEO de Delta Protect — la empresa líder en ciberseguridad y compliance de LATAM, con 300+ clientes enterprise incluyendo unicornios y corporativos Fortune 500. Expertise en arquitectura tecnológica, transformación AI a escala, distribución enterprise y gobernanza de producto.",
      aiTag: "Operaciones AI-Native",
      aiTitle: "AI-Native",
      aiTitlePrefix: "Operación",
      aiHero: "No contratamos un ejército de analistas. Construimos 13 agentes autónomos que operan 24/7 sobre el Knowledge Graph de Orbit Risk. Cada agente tiene su propio wallet, acceso a datos en tiempo real y autoridad para decidir. El humano supervisa. La máquina ejecuta.",
      aiStats: [
        { label: "Agentes Activos", value: "13", sub: "infraestructura agéntica completa" },
        { label: "Operación Continua", value: "24/7", sub: "ejecución autónoma" },
        { label: "Filosofía", value: "AI-First", sub: "el humano supervisa, la máquina ejecuta" },
      ],
      aiPillars: [
        { title: "13 Agentes Autónomos", desc: "Desde Sirius (data ingestion) hasta Polaris (override authority), cada agente consume el Knowledge Graph de Orbit Risk para operar prediction markets con ciclos sub-segundo." },
        { title: "Knowledge Graph-Driven", desc: "Los agentes no ejecutan reglas fijas — navegan un Knowledge Graph vivo de entidades, eventos y relaciones. Risk lo construye, Capital lo consume. Cada operación enriquece el grafo." },
        { title: "Zero-Trust Execution", desc: "Cada agente opera con permisos mínimos, auditoría completa y kill-switches automáticos. Polaris tiene autoridad de override sobre toda la ejecución." },
      ],
      aiForce: "La ventaja competitiva definitiva:",
      aiForceDesc: "Mientras los fondos tradicionales gastan millones en nómina, nosotros invertimos en infraestructura que escala sin fricción. Cada dólar de back-office ahorrado es un dólar que genera alpha. Esta es la razón por la que un equipo lean puede competir contra mesas de trading con cientos de personas.",
    },

    // ── Agents Page ──
    agents: {
      heroTag: "Infraestructura Agéntica",
      heroTitle: "13 Agentes. Un Knowledge Graph. Alpha autónomo.",
      heroDesc: "13 agentes de IA operando 24/7 sobre el Knowledge Graph de Orbit Risk. Cada uno con wallet propio, datos en tiempo real y autoridad para actuar. El humano supervisa. La máquina ejecuta.",
      philosophyTag: "Filosofía",
      philosophyTitle: "Agentes sobre Knowledge Graphs, no reglas fijas",
      philosophyDesc: "No hacemos bots con if/else. Construimos agentes que navegan un Knowledge Graph vivo — una red de entidades, eventos, mercados y relaciones que se enriquece con cada operación. Risk construye el grafo. Capital lo consume para generar señales.",
      stats: [
        { value: "13", label: "Agentes Activos", sub: "infraestructura agéntica completa" },
        { value: "24/7", label: "Operación Continua", sub: "sin interrupciones" },
        { value: "5→20", label: "Multiplicador", sub: "equipo de 5 produce como 20" },
        { value: "1", label: "Knowledge Graph", sub: "construido por Orbit Risk" },
      ],
      catalogTag: "Catálogo de Agentes",
      catalogTitle: "El Equipo que Nunca Duerme",
      catalogDesc: "13 agentes organizados en 6 capas. Cada uno con un rol específico dentro del ecosistema.",
      agents: [
        { name: "Atlas", role: "Graph Architect", celestialType: "planet", icon: "globe", color: "#00D4AA", area: "Graph", desc: "Agente de Orbit Risk. Construye y mantiene el Knowledge Graph unificado con cinco tipos de nodos (Entity, Event, Market, Asset, Source) y cinco tipos de edges (Exposure, Correlation, Position, Dependency, Signal). El grafo se enriquece con cada operación.", capabilities: ["Construcción de Knowledge Graph", "Ontología dinámica", "Validación de edges", "Enriquecimiento continuo"], ownerBadge: "Orbit Risk" },
        { name: "Sirius", role: "Data Ingestion", celestialType: "star", icon: "signal", color: "#3B82F6", area: "Datos", desc: "La estrella más brillante del cielo alimenta el Knowledge Graph de Risk con datos de prediction markets, order books y feeds institucionales. Ingesta primaria de datos estructurados en tiempo real.", capabilities: ["Ingesta de prediction markets", "Order book analysis", "Feeds institucionales", "Normalización de datos"] },
        { name: "Kepler", role: "Social Scanner", celestialType: "planet", icon: "search", color: "#6366F1", area: "Datos", desc: "Como el telescopio que lleva su nombre, Kepler escanea el universo social. Procesa sentimiento de X (powered by Grok) y detecta cambios de narrativa que alimentan el Knowledge Graph.", capabilities: ["Sentimiento social (X/Grok)", "Detección de narrativas", "NLP en español", "Señales pre-mercado"] },
        { name: "Proxima", role: "Real-time Data", celestialType: "star", icon: "bolt", color: "#818CF8", area: "Datos", desc: "La estrella más cercana al sistema. Sourcing de datos alternativos y enriquecimiento en tiempo real: flujos regulatorios, noticias LATAM, datos macro y eventos geopolíticos.", capabilities: ["Datos alternativos", "Monitoreo regulatorio", "Eventos geopolíticos", "Enriquecimiento en tiempo real"] },
        { name: "Vega", role: "Signal Generator", celestialType: "star", icon: "cpu", color: "#8B5CF6", area: "Inteligencia", desc: "Una de las estrellas más brillantes del firmamento. Vega consume el Knowledge Graph para generar señales de trading con valor esperado cuantificado. Análisis de microestructura y detección de oportunidades.", capabilities: ["Generación de señales", "Valor esperado cuantificado", "Microestructura de mercado", "Consumo del Knowledge Graph"] },
        { name: "Trappist", role: "Pattern Recognition", celestialType: "system", icon: "brain", color: "#A855F7", area: "Inteligencia", desc: "Como el sistema TRAPPIST-1 con sus múltiples planetas, este agente detecta patrones multi-dimensionales. Estimación de probabilidades, reconocimiento de regímenes de mercado y forecasting.", capabilities: ["Reconocimiento de patrones", "Estimación de probabilidades", "Detección de regímenes", "Forecasting multi-dimensional"] },
        { name: "Rigel", role: "Trade Executor", celestialType: "giant", icon: "chart", color: "#10B981", area: "Ejecución", desc: "El supergigante azul de Orión. Rigel ejecuta operaciones en múltiples venues (Polymarket, Kalshi) con ciclos sub-segundo. Smart routing, sizing dinámico y ejecución basada en señales del Knowledge Graph.", capabilities: ["Ejecución sub-segundo", "Smart routing multi-venue", "Sizing dinámico", "Ejecución basada en KG"] },
        { name: "Gliese", role: "Arbitrage & Settlement", celestialType: "star", icon: "trending", color: "#34D399", area: "Ejecución", desc: "Detección de arbitraje cross-market y settlement de operaciones. Gliese reconcilia posiciones, gestiona liquidaciones y mantiene la integridad operativa del portafolio.", capabilities: ["Arbitraje cross-market", "Settlement automatizado", "Reconciliación de posiciones", "Integridad operativa"] },
        { name: "Polaris", role: "Override Authority", celestialType: "star", icon: "shield", color: "#F59E0B", area: "Riesgo", desc: "La Estrella del Norte. Polaris tiene autoridad de override sobre todos los agentes de ejecución. Monitoreo continuo de exposiciones, kill-switches automáticos y enforcement de límites de riesgo.", capabilities: ["Autoridad de override", "Kill-switches automáticos", "Monitoreo de exposiciones", "Enforcement de límites"] },
        { name: "Altair", role: "Portfolio Manager", celestialType: "star", icon: "scale", color: "#FBBF24", area: "Riesgo", desc: "El águila del firmamento. Altair gestiona el portafolio a nivel macro: rebalanceo dinámico, correlación entre posiciones, drawdown management y optimización risk-adjusted.", capabilities: ["Gestión de portafolio", "Rebalanceo dinámico", "Drawdown management", "Optimización risk-adjusted"] },
        { name: "Centauri", role: "Orchestrator", celestialType: "star", icon: "rocket", color: "#EC4899", area: "Operaciones", desc: "El sistema estelar más cercano al Sol. Centauri orquesta a los 13 agentes: task routing, scheduling, monitoreo de compliance regulatorio y mantenimiento de audit trails.", capabilities: ["Orquestación de agentes", "Task routing", "Compliance regulatorio", "Audit trails"] },
        { name: "Cassiopeia", role: "Reporting", celestialType: "nebula", icon: "briefcase", color: "#F472B6", area: "Operaciones", desc: "La constelación que siempre es visible. Cassiopeia genera reportes de performance, análisis de mercado y documentación del fondo automáticamente. Distribuye a stakeholders en formatos requeridos.", capabilities: ["Reportes de performance", "Análisis de mercado", "Documentación del fondo", "Distribución automática"] },
        { name: "Andromeda", role: "Communications", celestialType: "galaxy", icon: "globe", color: "#FB7185", area: "Operaciones", desc: "La galaxia vecina. Andromeda gestiona CRM, relaciones con inversionistas, contenido para redes sociales, newsletters y comunicaciones externas. Mantiene la presencia de Orbit activa 24/7.", capabilities: ["CRM automatizado", "Relaciones con inversionistas", "Contenido social", "Newsletters y comunicados"] },
      ],
      architectureTag: "Arquitectura",
      architectureTitle: "Zero-Trust sobre Knowledge Graph",
      architectureDesc: "Cada agente opera con el principio de mínimo privilegio. El Knowledge Graph de Orbit Risk es la fuente de verdad: Capital consume, Risk construye, y cada operación enriquece el grafo.",
      archPillars: [
        { title: "Knowledge Graph", desc: "Cinco tipos de nodos (Entity, Event, Market, Asset, Source) y cinco tipos de edges (Exposure, Correlation, Position, Dependency, Signal). Construido por Orbit Risk, consumido por Capital.", icon: "globe" },
        { title: "Permisos Mínimos", desc: "Cada agente solo accede a los nodos y edges del grafo que necesita. Nada más.", icon: "shield" },
        { title: "Auditoría Completa", desc: "Cada traversal del grafo, cada señal generada, cada trade ejecutado queda registrado.", icon: "search" },
        { title: "Kill-Switches", desc: "Polaris tiene autoridad de override. Cualquier agente puede ser detenido instantáneamente.", icon: "bolt" },
      ],
      advantageTag: "Flywheel",
      advantageTitle: "El Knowledge Graph se vuelve más fuerte con cada operación",
      advantageDesc: "Más clientes de Risk = grafo más profundo = mejores señales para Capital = más enriquecimiento del grafo. Cada trade valida conexiones. Cada engagement de Risk profundiza la ontología. El Knowledge Graph compone con el uso — esta ventaja se amplifica sola con el tiempo.",
    },

    // ── Contact Modal ──
    modal: {
      capitalTitle: "Empieza a invertir",
      intelTitle: "Obtén acceso anticipado",
      capitalDesc: "Deja tus datos y alguien del equipo te contacta con la documentación del fondo.",
      intelDesc: "Cuéntanos de tu empresa y te damos acceso a la plataforma.",
      name: "Nombre",
      email: "Email",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@email.com",
      company: "Empresa",
      companyFO: "Empresa / Family Office",
      companyPlaceholder: "Nombre de la entidad",
      companyIntelPlaceholder: "Nombre de la empresa",
      investmentRange: "Rango de inversión",
      select: "Seleccionar...",
      howDidYouHear: "¿Cómo nos conociste?",
      referral: "Referencia personal",
      linkedin: "LinkedIn",
      event: "Evento / Conferencia",
      search: "Búsqueda en internet",
      other: "Otro",
      role: "Cargo",
      rolePlaceholder: "Tu cargo",
      vertical: "Vertical de interés",
      companySize: "Tamaño de empresa",
      size1: "Menos de 50 empleados",
      size2: "50 – 200 empleados",
      size3: "200 – 1,000 empleados",
      size4: "Más de 1,000 empleados",
      messageLabel: "Mensaje (opcional)",
      useCaseLabel: "Caso de uso",
      messagePlaceholder: "¿Algo que debamos saber?",
      useCasePlaceholder: "¿Cómo planeas usar Nuestra Inteligencia?",
      submitCapital: "Solicitar documentación",
      submitIntel: "Solicitar acceso",
      thanks: "¡Gracias!",
      thanksCapital: "Te contactaremos pronto con los documentos del fondo.",
      thanksIntel: "Te enviaremos acceso a la plataforma en breve.",
      disclaimerCapital: "Solo para inversionistas calificados. No es una solicitud para invertir.",
      disclaimerIntel: "Te responderemos en menos de 24 horas.",
      planInterest: "Plan de interés",
      planStarter: "Starter — Startups y PyMEs",
      planProfessional: "Professional — Medianas empresas",
      planEnterprise: "Enterprise — Corporativos y fondos",
      planAIPlatform: "AI Platform — Integraciones a escala",
      riskTitle: "Pide tu demo de Orbit Risk",
      riskDesc: "Cuéntanos de tu empresa y te mostramos cómo Orbit Risk puede blindar tu operación.",
      riskIndustry: "Industria",
      riskIndustryPlaceholder: "Seleccionar...",
      riskIndustryManufacturing: "Manufactura",
      riskIndustryEnergy: "Energía",
      riskIndustryAgriculture: "Agricultura / Agroindustria",
      riskIndustryLogistics: "Logística / Comercio exterior",
      riskIndustryFinancial: "Servicios financieros",
      riskIndustryRealEstate: "Bienes raíces",
      riskIndustryRetail: "Retail / Consumo",
      riskIndustryTech: "Tecnología",
      riskIndustryOther: "Otra",
      riskExposures: "Cuéntanos sobre tus exposiciones",
      riskExposuresPlaceholder: "¿Qué riesgos operativos enfrenta tu empresa? (aranceles, tipo de cambio, regulación, etc.)",
      submitRisk: "Solicitar demo",
      thanksRisk: "Te contactaremos pronto para agendar una demo.",
      disclaimerRisk: "Orbit Risk se encuentra en desarrollo activo.",
      // Unified contact form
      contactTitle: "Hablemos",
      contactDesc: "Cuéntanos de tu empresa y qué producto te interesa. Te respondemos en menos de 24 horas.",
      phone: "Teléfono (opcional)",
      phonePlaceholder: "+52 55 1234 5678",
      productInterest: "¿Qué producto te interesa?",
      productIntel: "Nuestra Inteligencia — Inteligencia de mercado",
      productRisk: "Orbit Risk — Cobertura operativa",
      productCapital: "Orbit Capital — Fondo cuantitativo",
      submitContact: "Enviar",
      thanksContact: "Te contactaremos en menos de 24 horas.",
      disclaimerContact: "Tu información está segura. No compartimos datos con terceros.",
    },

    // ── Risk Landing ──
    risk: {
      heroTag: "Cobertura operativa",
      heroTitle1: "La inteligencia de Capital, aplicada",
      heroTitle2: "a tu empresa.",
      heroDesc: "Orbit Risk traduce incertidumbre en coberturas concretas. Identificamos tus exposiciones, las cuantificamos y las cubrimos con posiciones en prediction markets.",
      heroCta1: "Solicitar demo",
      heroCta2: "Ver exposiciones",
      riskCtaWaitlist: "Únete a la lista de espera",
      experimentalBanner: "FASE EXPERIMENTAL — Orbit Risk se encuentra en desarrollo activo. Únete a nuestra lista de espera para acceso anticipado.",
      experimentalLabel: "Fase experimental",
      // Process section
      processTag: "El proceso",
      processTitle: "Tres pasos. De exposición a cobertura.",
      processDesc: "",
      processSteps: [
        { num: "01", title: "Conecta tu operación", desc: "Conectamos los datos de tu negocio: revenue por mercado, estructura de costos, cadena de suministro, exposición cambiaria. Nuestro sistema de AI identifica automáticamente los drivers exógenos que afectan tu operación." },
        { num: "02", title: "Mapeamos tus riesgos", desc: "Cada exposición se traduce a contratos específicos en prediction markets: aranceles US-México, política monetaria de Banxico, cambios regulatorios CNBV, elecciones, precio del petróleo." },
        { num: "03", title: "Ejecutamos la cobertura", desc: "Orbit Capital ejecuta la combinación óptima de posiciones como tu hedge operativo. Monitoreo continuo. Rebalanceo dinámico. Reportes en tiempo real." },
      ],
      // Exposures section
      exposuresTag: "Exposiciones",
      exposuresTitle: "Riesgos sin cobertura en LATAM.",
      exposuresDesc: "Las empresas no tienen instrumentos eficientes para cubrirse ante volatilidad política, económica o climática. Hasta ahora.",
      exposures: [
        { title: "Aranceles y política comercial", desc: "Protección contra cambios en aranceles US-LATAM, restricciones comerciales y renegociaciones de tratados." },
        { title: "Tipo de cambio MXN/USD", desc: "Cobertura contra depreciación del peso y volatilidad cambiaria que afecta costos e ingresos." },
        { title: "Regulación financiera", desc: "Protección ante cambios regulatorios de CNBV, SHCP y otros organismos que impactan tu sector." },
        { title: "Política energética", desc: "Cobertura contra cambios en política de CFE, reforma eléctrica y precios de energía." },
        { title: "Disrupciones de nearshoring", desc: "Protección contra eventos que afectan flujos de inversión y cadenas de suministro regionales." },
        { title: "Riesgo político y electoral", desc: "Cobertura ante resultados electorales, cambios de gobierno y decisiones políticas disruptivas." },
        { title: "Commodities y supply chain", desc: "Protección contra volatilidad en precios de materias primas y disrupciones logísticas." },
      ],
      // Architecture section
      archTag: "Arquitectura",
      archTitle: "Tres capas. Una cobertura.",
      archDesc: "Cada posición de protección pasa por inteligencia, diseño de riesgo y ejecución institucional.",
      archSteps: [
        { title: "Nuestra Inteligencia", desc: "Detecta cambios en probabilidades de eventos de riesgo en tiempo real. Alimenta señales al motor de Risk.", icon: "cpu" },
        { title: "Orbit Risk", desc: "Traduce señales en coberturas optimizadas. Diseña el portfolio de protección para tu empresa.", icon: "shield" },
        { title: "Orbit Capital", desc: "Ejecuta las posiciones en prediction markets con infraestructura institucional. Monitoreo 24/7.", icon: "chart" },
      ],
      // Lead form section
      formTag: "Solicitar demo",
      formTitle: "Protege tu operación hoy",
      formDesc: "Cuéntanos sobre tu empresa y un especialista de Orbit Risk te contactará para una demo personalizada.",
      formName: "Nombre",
      formNamePlaceholder: "Tu nombre",
      formCompany: "Empresa",
      formCompanyPlaceholder: "Nombre de la empresa",
      formEmail: "Email",
      formEmailPlaceholder: "tu@empresa.com",
      formPhone: "Teléfono (opcional)",
      formPhonePlaceholder: "+52 55 1234 5678",
      formMessage: "Cuéntanos sobre tus exposiciones",
      formMessagePlaceholder: "¿Qué riesgos operativos enfrenta tu empresa?",
      formSubmit: "Solicitar demo",
      formSuccess: "¡Gracias! Te contactaremos pronto para agendar tu demo.",
      formDisclaimer: "Orbit Risk se encuentra en desarrollo activo. Demo sujeta a disponibilidad.",
      // Why section
      whyTag: "¿Por qué Orbit Risk?",
      whyTitle: "Cobertura que sí funciona en LATAM.",
      whyDesc: "Los derivados OTC no se diseñaron para mercados emergentes. Orbit Risk sí.",
      whyMetrics: [
        { value: 7, suffix: "", prefix: "", label: "Tipos de exposición cubiertos" },
        { value: 24, suffix: "/7", prefix: "", label: "Monitoreo continuo" },
        { value: 3, suffix: "", prefix: "", label: "Capas del ecosistema integradas" },
        { value: 48, suffix: "h", prefix: "<", label: "Objetivo de tiempo de activación" },
      ],
      whyTraditionalTitle: "Hedging tradicional",
      whyTraditionalItems: [
        "Derivados OTC caros e ilíquidos",
        "Semanas de negociación y documentación",
        "Montos mínimos de $10M+",
        "Sin cobertura para riesgo político",
        "Diseñado para mercados desarrollados",
      ],
      whyOrbitTitle: "Orbit Risk",
      whyOrbitItems: [
        "Mercados de predicción líquidos y transparentes",
        "Activación en menos de 48 horas",
        "Sin montos mínimos elevados",
        "Cobertura política, regulatoria y macro",
        "Diseñado específicamente para LATAM",
      ],
      // Use Cases section
      casesTag: "Casos de uso",
      casesTitle: "Coberturas por industria.",
      casesDesc: "Cada sector tiene exposiciones distintas. Cada cobertura es diferente.",
      casesResult: "Resultado con Orbit Risk",
      cases: [
        {
          icon: "building",
          industry: "Manufactura",
          title: "Exportador mexicano a EE.UU.",
          scenario: "Una empresa manufacturera exporta el 40% de su producción a Estados Unidos. Un aumento de aranceles pondría en riesgo $2.3M USD de revenue trimestral.",
          result: "Orbit Risk detecta la probabilidad de nuevos aranceles con anticipación y ejecuta un hedge diseñado para cubrir una porción significativa del impacto potencial.",
        },
        {
          icon: "bank",
          industry: "Fintech",
          title: "Fintech regulada por CNBV",
          scenario: "Una fintech de pagos opera bajo regulación CNBV. Un cambio regulatorio podría requerir capital adicional de $5M USD en 90 días.",
          result: "Orbit Risk monitorea probabilidades de cambios regulatorios y mantiene un hedge activo que protege contra costos de compliance inesperados.",
        },
        {
          icon: "globe",
          industry: "Nearshoring",
          title: "Empresa de logística LATAM",
          scenario: "Una empresa de logística depende de flujos de nearshoring. Tensiones comerciales entre US-China-México podrían reducir volúmenes un 30%.",
          result: "Orbit Risk mapea 6 contratos de prediction markets correlacionados con flujos de nearshoring y diseña un portfolio de protección dinámico.",
        },
      ],
      // FAQ section
      faqTag: "Preguntas frecuentes",
      faqTitle: "Preguntas frecuentes sobre Orbit Risk",
      faqItems: [
        { q: "¿Qué son las coberturas operativas?", a: "Son posiciones en mercados de predicción diseñadas para compensar el impacto financiero de eventos externos en tu operación — como aranceles, cambios regulatorios o depreciación cambiaria." },
        { q: "¿Es legal operar en mercados de predicción?", a: "Sí. Polymarket opera internacionalmente y Kalshi es regulado por la CFTC en Estados Unidos. Orbit Capital ejecuta las posiciones a través de infraestructura institucional regulada." },
        { q: "¿Cuál es el costo de las coberturas?", a: "El costo depende del tipo y nivel de exposición. Generalmente es una fracción del riesgo cubierto — comparable a una prima de seguro pero con mayor transparencia y liquidez." },
        { q: "¿Cuánto tarda en activarse una cobertura?", a: "Desde la evaluación inicial, las coberturas pueden estar activas en menos de 48 horas. El monitoreo y rebalanceo son continuos y automatizados." },
        { q: "¿Qué pasa si el evento de riesgo no ocurre?", a: "El costo de la cobertura es limitado y conocido de antemano. Similar a una prima de seguro que no se reclama — pagas por la protección, no por el evento." },
      ],

      // Platform Features section
      platformTag: "La plataforma",
      platformTitle: "Stack de inteligencia autónoma 24/7.",
      platformDesc: "Datos, modelos y ejecución institucional en una sola plataforma.",
      platformFeatures: [
        {
          icon: "cpu",
          title: "Motor de riesgo AI",
          desc: "Nuestro motor de inteligencia artificial analiza continuamente señales de prediction markets, redes sociales e indicadores macro para identificar amenazas a tu operación antes de que impacten.",
        },
        {
          icon: "signal",
          title: "Monitoreo en tiempo real",
          desc: "Dashboard 24/7 con alertas configurables. Visualiza tu exposición neta, probabilidades de eventos clave y status de tus coberturas activas en un solo panel.",
        },
        {
          icon: "shield",
          title: "Ejecución institucional",
          desc: "Tus coberturas se ejecutan a través de la infraestructura de Orbit Capital: custody Fireblocks, contabilidad TRES FinOS, routing multi-venue y liquidación automatizada.",
        },
        {
          icon: "chart",
          title: "Reportes y transparencia",
          desc: "Reportes mensuales de exposición, performance de coberturas, costos y ROI. Toda la información que tu CFO necesita para justificar la inversión en protección.",
        },
        {
          icon: "globe",
          title: "Cobertura multi-mercado",
          desc: "Cubre riesgos en México, Brasil, Colombia, Chile y Argentina. Nuestro motor traduce exposiciones locales a contratos líquidos globales.",
        },
        {
          icon: "brain",
          title: "API de integración",
          desc: "Conecta Orbit Risk con tu ERP, treasury system o data warehouse. REST API documentada con SDKs para Python y Node.js.",
        },
      ],

      // Metrics section
      metricsTag: "Diseño",
      metricsTitle: "Protección real. Métricas reales.",
      metricsDesc: "Orbit Risk está diseñado para ofrecer cobertura operativa transparente y medible.",
      metricsItems: [
        { value: "7", label: "Tipos de exposición cubiertos en LATAM", icon: "globe" },
        { value: "<48h", label: "Objetivo de activación de cobertura", icon: "rocket" },
        { value: "24/7", label: "Monitoreo continuo de tu exposición", icon: "cpu" },
        { value: "3", label: "Capas de ecosistema integradas (Intel + Risk + Capital)", icon: "signal" },
      ],

      // Trust / Social Proof section
      trustTag: "Confianza",
      trustTitle: "LATAM opera a ciegas frente a la incertidumbre.",
      trustDesc: "Orbit Risk está respaldado por la misma infraestructura institucional que opera Orbit Capital y Nuestra Inteligencia.",
      trustPillars: [
        {
          icon: "building",
          title: "Infraestructura institucional",
          desc: "Custody con Fireblocks (la misma plataforma de BlackRock). Contabilidad con TRES FinOS. Sin spreadsheets. Sin puntos únicos de fallo.",
        },
        {
          icon: "brain",
          title: "AI-Native desde el día uno",
          desc: "12+ agentes de IA operando 24/7. Cada señal de riesgo, cada rebalanceo, cada reporte es procesado por nuestros modelos. El humano supervisa. La máquina ejecuta.",
        },
        {
          icon: "shield",
          title: "Equipo de ciberseguridad",
          desc: "Fundado por expertos en ciberseguridad empresarial con experiencia protegiendo las organizaciones más grandes de América Latina.",
        },
      ],
      trustQuote: "\"Si los prediction markets pueden predecir elecciones mejor que las encuestas, imagina lo que pueden hacer por tu exposición operativa.\"",
      trustQuoteAuthor: "— Equipo Orbit Risk",

      // Security & Compliance section
      securityTag: "Seguridad",
      securityTitle: "Infraestructura institucional desde el día uno.",
      securityDesc: "La misma infraestructura que usan las instituciones más grandes del mundo.",
      securityItems: [
        { icon: "shield", title: "Encriptación end-to-end", desc: "Toda la información de tu empresa se transmite y almacena con encriptación AES-256. Tus datos nunca se comparten con terceros." },
        { icon: "cpu", title: "Infraestructura SOC 2", desc: "Nuestros proveedores de infraestructura (Fireblocks, AWS) cumplen con SOC 2 Type II. Auditorías de seguridad trimestrales." },
        { icon: "scale", title: "Compliance regulatorio", desc: "Orbit Capital opera bajo marcos regulatorios reconocidos. Las posiciones de cobertura se ejecutan en mercados regulados (Kalshi — CFTC) y plataformas institucionales." },
        { icon: "building", title: "Segregación de fondos", desc: "Los fondos de cobertura de cada cliente están completamente segregados. Custody MPC con multi-signature. Sin commingling." },
      ],
    },

    // ── Whitepaper ──
    whitepaper: {
      heroTag: "Whitepaper",
      heroTitle: "Orbit: Infraestructura de Inteligencia Predictiva, Cobertura Operativa y Trading Cuantitativo para Mercados Emergentes",
      heroSubtitle: "Un marco institucional para la monetización de señales probabilísticas en América Latina",
      toc: "Contenido",
      footnotesLabel: "Referencias",
      footnotes: [
        "¹ The Block (2025). \"Prediction markets explode in 2025: Inside the Kalshi-Polymarket duopoly.\" Volumen combinado Polymarket + Kalshi >$38B; volumen total del mercado >$44B.",
        "² Bank for International Settlements (2025). \"OTC derivatives statistics at end-June 2025.\" Valor nocional pendiente: $846T (+16% YoY). Solo el 10% del volumen global de derivados corresponde a monedas de economías emergentes.",
        "³ Precedence Research (2025). \"AI Agents in Financial Services Market Size 2025–2035.\" Mercado valorado en $1.79B en 2025, proyectado a $6.54B para 2035.",
        "⁴ IMF Country Report No. 25/286 (2025). \"Mexico.\" Crecimiento del PIB: 0.4% en 2025.",
        "⁵ Focus Economics (2025). \"Mexico's Economy 2025: US Tariffs, Remittances & GDP Forecast.\" Aranceles promedio de EE.UU. sobre productos mexicanos: 15.8%.",
        "⁶ Wilson Center (2025). \"Economic Impact Analysis of US Tariffs on Mexico.\" Pérdidas estimadas de exportación: $26–42B.",
        "⁷ EBC Financial Group (2025). \"Is the Mexican Peso Getting Stronger in 2025?\" Rango MXN/USD: 21.13–18.44.",
        "⁸ BIS Triennial Central Bank Survey (2025). Volumen diario de FX: $9.5T (+27% vs 2022); opciones OTC de divisas se duplicaron de $303B a $634B (2022–2025).",
        "⁹ The Block / Dune Analytics (2025). Usuarios mensuales crecieron de ~4,000 a 600,000+; transacciones mensuales de 240K a 43M+.",
        "¹⁰ Phemex (2025). \"Polymarket and Kalshi Hit Record $40B Trading Volume.\" Kalshi levantó $300M+ con valoración de $5B; Polymarket apunta a $12–15B.",
        "¹¹ Sidley Austin LLP (2026). \"U.S. CFTC Signals Imminent Rulemaking on Prediction Markets.\" Agenda regulatoria de 4 pilares del Chairman Selig.",
        "¹² IMARC Group (2025). \"Latin America Fintech Market Size, Share and Forecast.\" $13.14B (2024) → $49.58B (2033), CAGR 15.9%.",
        "¹³ Mexico News Daily (2025). \"Foreign direct investment in Mexico climbs to record $40.9B.\" Incremento del 14.5% YoY.",
        "¹⁴ J.P. Morgan Private Bank (2026). \"Latin America in 2026: Between Promise and Pressure.\"",
        "¹⁵ Princeton University / Hommel (2025). \"Nonfinancial Firms Hedging Currency Risk.\" ~50% de exposición cubierta; varianza residual 8–15% mayor sin derivados.",
        "¹⁶ UiPath (2025). \"2025 Agentic AI Report.\" 93% de ejecutivos de TI priorizan automatización agéntica.",
        "¹⁷ Cryptopolitan (2026). \"SEC signals possible oversight of surging $63.5B prediction market sector.\"",
        "¹⁸ ISDA (2026). \"Key Trends in the Size and Composition of OTC Derivatives Markets in H1 2025.\" Valor bruto de mercado creció 29% a $21.8T.",
      ],
      sections: [
        {
          id: "abstract",
          title: "Resumen Ejecutivo",
          content: [
            "El presente documento expone la tesis de inversión y la arquitectura técnica del ecosistema Orbit: una plataforma integrada de inteligencia predictiva, cobertura operativa y trading cuantitativo diseñada para mercados emergentes, con enfoque inicial en América Latina.",
            "Orbit opera en la convergencia de tres tendencias estructurales: (i) la consolidación de los mercados de predicción como infraestructura financiera institucional, con un volumen global superior a $44 mil millones en 2025¹; (ii) la ausencia de instrumentos de cobertura eficientes para riesgo operativo en economías emergentes, donde solo el 10% del volumen global de derivados corresponde a monedas de mercados emergentes²; y (iii) la emergencia de agentes de inteligencia artificial autónomos en servicios financieros, un mercado de $1.79 mil millones en 2025 proyectado a $6.54 mil millones para 2035³.",
            "Orbit construye un flywheel de tres capas — datos, protección y validación — donde cada componente refuerza a los demás. Este modelo integrado no tiene análogo directo en el mercado actual y posiciona a Orbit como infraestructura de misión crítica para la toma de decisiones bajo incertidumbre en la región.",
          ],
        },
        {
          id: "problem",
          title: "El Problema: Riesgo Estructural sin Cobertura Eficiente",
          content: [
            "Las empresas que operan en América Latina enfrentan un régimen de incertidumbre persistente que carece de instrumentos de cobertura proporcionales. En 2025, el PIB de México creció apenas 0.4%⁴, mientras que los aranceles promedio de EE.UU. sobre productos mexicanos alcanzaron 15.8%⁵, generando pérdidas estimadas de exportación entre $26 y $42 mil millones en sectores como automotriz, electrónica y textiles⁶. El peso mexicano osciló entre 21.13 y 18.44 por dólar en un solo año⁷, una volatilidad que ningún instrumento convencional cubre de forma eficiente para empresas medianas.",
            "El mercado global de derivados OTC alcanzó un valor nocional de $846 billones (trillones americanos) a junio de 2025 — un incremento interanual del 16%, el mayor desde 2008². Sin embargo, solo el 10% de ese volumen corresponde a monedas de economías emergentes, una proporción significativamente inferior a la participación de estas economías en el PIB mundial². Los instrumentos disponibles — forwards, swaps, seguros paramétricos — son caros, ilíquidos y diseñados para contrapartes institucionales en mercados desarrollados. Las opciones OTC de divisas duplicaron su volumen diario entre 2022 y 2025, de $303 mil millones a $634 mil millones⁸, evidenciando una demanda insatisfecha de cobertura alternativa. Según investigación de Princeton, aproximadamente el 50% de la exposición cambiaria corporativa global permanece sin cobertura, lo que incrementa la varianza del flujo de caja entre 8% y 15%¹⁵.",
            "Simultáneamente, los equipos de estrategia corporativa y tesorería operan con información asimétrica: encuestas obsoletas, sondeos políticamente sesgados y análisis fragmentados. No existe una fuente institucional de datos de probabilidad consensuada, calibrada en tiempo real, para eventos que impactan directamente la operación empresarial en la región. Esta brecha informacional representa un costo de oportunidad cuantificable para cada decisión que se toma bajo incertidumbre en LATAM.",
          ],
        },
        {
          id: "insight",
          title: "El Insight: Mercados de Predicción como Infraestructura Financiera",
          content: [
            "Los mercados de predicción resuelven simultáneamente el déficit de información y la carencia de instrumentos de cobertura. Funcionan como mecanismos de descubrimiento de precios donde participantes con capital propio en riesgo expresan sus expectativas sobre eventos futuros, generando la fuente más precisa de probabilidades consensuadas en tiempo real — con precisión calibrada superior a encuestas, modelos econométricos y paneles de expertos.",
            "En 2025, el volumen total de los mercados de predicción superó los $44 mil millones¹. Polymarket registró $21.5 mil millones y Kalshi $17.1 mil millones en volumen de trading. La base de usuarios mensuales creció de aproximadamente 4,000 a más de 600,000, y las transacciones mensuales escalaron de 240,000 a más de 43 millones⁹. Kalshi alcanzó una valoración de $11 mil millones tras levantar más de $300 millones de Sequoia, a16z y Paradigm¹⁰. Polymarket adquirió QCEX, una exchange regulada por la CFTC, habilitando su relanzamiento en EE.UU. La SEC señaló en 2026 su interés en supervisar un sector que ya supera los $63.5 mil millones en actividad total¹⁷.",
            "En enero de 2026, el Chairman de la CFTC, Michael Selig, anunció una agenda regulatoria de cuatro pilares para respaldar el desarrollo responsable de mercados de contratos de eventos¹¹. Estos mercados dejaron de ser una curiosidad académica — son infraestructura financiera institucional. Pero la oportunidad específica que Orbit captura es esta: prácticamente nadie aplica estrategias cuantitativas y sistemáticas a estos mercados, y nadie ha construido la capa de traducción entre riesgo corporativo y mercados de predicción para economías emergentes.",
          ],
        },
        {
          id: "ecosystem",
          title: "El Ecosistema Orbit",
          content: [
            "Orbit opera en la intersección de inteligencia de mercado, gestión de riesgo corporativo y trading cuantitativo. La arquitectura consiste en tres productos integrados que funcionan como un sistema de retroalimentación positiva — un flywheel donde cada capa amplifica el valor de las demás:",
          ],
          subsections: [
            {
              title: "Orbit Intelligence — La Capa de Datos",
              content: "Plataforma de inteligencia consensuada en tiempo real para América Latina. Agrega probabilidades calibradas de mercados de predicción, señales de sentiment vía X/Grok, datos macroeconómicos de INEGI, Banxico y DOF, y fuentes de datos alternativos. Opera en 7 verticales: Política, Economía, Regulatorio, Energía, Clima, Real Estate y Seguros. Arquitectura API-first con endpoints REST, GraphQL y WebSocket. Spanish-first por diseño. Construido para consumo tanto humano como por agentes de IA autónomos — un diferenciador crítico en un ecosistema donde el 93% de ejecutivos de TI a nivel global consideran la automatización agéntica como prioritaria para sus operaciones¹⁶.",
            },
            {
              title: "Orbit Risk — La Capa de Protección",
              content: "El primer producto de cobertura operativa basado en mercados de predicción para empresas en mercados emergentes. Orbit Risk es la capa de traducción que conecta la exposición operativa de una empresa con contratos líquidos en mercados de predicción. El sistema identifica qué eventos exógenos amenazan el margen operativo del cliente, los mapea a combinaciones de posiciones optimizadas, y ejecuta coberturas dinámicas con rebalanceo continuo. En un mercado donde la inversión extranjera directa en México alcanzó un récord de $40.9 mil millones en 2025¹³, la demanda de cobertura operativa es proporcional al capital en riesgo.",
            },
            {
              title: "Orbit Capital — La Capa de Validación",
              content: "Fondo cuantitativo que opera mercados de predicción de forma sistemática. Cada trade genera una señal de validación para la inteligencia de Orbit Intelligence: si los datos producen retornos ajustados al riesgo consistentes, los datos funcionan. Infraestructura institucional desde el día uno: Fireblocks para custodia de activos digitales, TRES FinOS para contabilidad de fondo, Xero para libro mayor, y portal LP disponible 24/7. Objetivo de rendimiento: 18% retorno neto anual, ratio Sharpe >1.5, correlación <0.2 con S&P 500.",
            },
          ],
        },
        {
          id: "risk-detail",
          title: "Orbit Risk: Mecánica Operativa",
          content: [
            "Orbit Risk opera como una capa de abstracción entre la exposición operativa de una empresa y la liquidez de los mercados de predicción. En un entorno donde un tweet sobre aranceles, una reforma regulatoria o una depreciación abrupta del peso pueden eliminar un trimestre completo de margen operativo, la capacidad de ejecutar coberturas en tiempo real sobre eventos específicos representa una ventaja competitiva cuantificable para cualquier empresa con operaciones en la región.",
          ],
          steps: [
            { num: "01", title: "Conecta tu operación", desc: "Integramos los datos del negocio: revenue por mercado y geografía, estructura de costos, dependencias de cadena de suministro y exposición cambiaria. Nuestro sistema de IA identifica automáticamente los drivers exógenos que generan varianza en el margen operativo." },
            { num: "02", title: "Mapeamos tus riesgos", desc: "Cada exposición identificada se traduce a contratos específicos en mercados de predicción regulados. Optimizamos el portfolio de cobertura mediante algoritmos propietarios que maximizan la protección al menor costo, incorporando correlaciones cruzadas entre eventos." },
            { num: "03", title: "Ejecutamos la cobertura", desc: "Orbit Capital ejecuta la combinación óptima de posiciones con ejecución algorítmica. Monitoreo continuo 24/7. Rebalanceo dinámico basado en cambios de probabilidad. Reportes en tiempo real de exposición neta, P&L de cobertura y sensibilidades." },
          ],
        },
        {
          id: "exposures",
          title: "Taxonomía de Exposiciones Cubiertas",
          content: [
            "Orbit Risk cubre las exposiciones operativas más críticas para empresas con actividad en América Latina. Cada categoría ha sido seleccionada con base en su impacto histórico demostrado sobre el margen operativo empresarial en la región:",
          ],
          list: [
            "Aranceles y política comercial US-LATAM (aranceles promedio 15.8% en 2025)⁵",
            "Tipo de cambio MXN/USD (volatilidad: rango de 14.6% en 2025)⁷",
            "Regulación financiera y supervisión (CNBV, SHCP, Banxico)",
            "Política energética y reforma eléctrica",
            "Disrupciones de nearshoring y cadena de suministro (FDI récord: $40.9B)¹³",
            "Riesgo político, electoral y de gobernanza institucional",
            "Commodities, materias primas y costos logísticos",
            "Renegociación del T-MEC / USMCA (2026)",
          ],
        },
        {
          id: "architecture",
          title: "Arquitectura del Ecosistema: El Flywheel de Datos",
          content: [
            "El flywheel de Orbit opera como un ciclo de retroalimentación positiva con tres fases: Intel genera datos de probabilidad consensuada en tiempo real a partir de mercados de predicción y fuentes alternativas. Risk consume esos datos para diseñar coberturas operativas optimizadas para empresas. Capital valida la calidad de los datos operando un fondo cuantitativo — si la inteligencia genera retornos ajustados al riesgo consistentes, los datos son confiables. Los retornos del fondo retroalimentan y calibran los modelos de Intel. Cada ciclo produce inteligencia más precisa, coberturas más efectivas y retornos más consistentes.",
            "La ventaja competitiva de Orbit emerge de la integración vertical: ningún competidor opera simultáneamente las tres capas. Las firmas de inteligencia venden datos pero no los validan con capital propio en riesgo. Los hedge funds operan datos pero no los distribuyen como servicio de inteligencia. Las plataformas de predicción proveen liquidez pero no construyen aplicaciones verticales. Nadie ha construido la capa de traducción entre riesgo corporativo y mercados de predicción. El mercado fintech de América Latina, valorado en $13.14 mil millones en 2024 y proyectado a $49.58 mil millones para 2033¹², carece de esta infraestructura de forma conspicua.",
          ],
        },
        {
          id: "market",
          title: "Dimensionamiento de Mercado y Tracción",
          content: [
            "TAM (Total Addressable Market): El mercado global de mercados de predicción superó $44 mil millones en volumen en 2025¹, con la SEC señalando actividad total superior a $63.5 mil millones¹⁷. El mercado de agentes de IA en servicios financieros alcanzó $1.79 mil millones en 2025³. El mercado fintech de LATAM se proyecta en $49.58 mil millones para 2033¹². La convergencia de estos tres mercados define el TAM de Orbit.",
            "SAM (Serviceable Available Market): Empresas con operaciones en LATAM expuestas a riesgo político, regulatorio, cambiario y comercial. Inversión extranjera directa en México: $40.9 mil millones récord en 2025¹³. Nearshoring como catalizador: México proyecta exportaciones por $700 mil millones para 2026. Más de 3,500 empresas manufactureras con exposición directa a volatilidad regulatoria y cambiaria¹⁴.",
            "Orbit Capital: Primer fondo sistemático de mercados de predicción en LATAM. Objetivo: 18% retorno neto anual. Sharpe ratio >1.5. Correlación <0.2 con S&P 500. Infraestructura institucional: Fireblocks, TRES FinOS, portal LP 24/7.",
            "Orbit Intelligence: Única plataforma Spanish-first de inteligencia consensuada para LATAM. 7 verticales. API-first. Diseñada para consumo por agentes de IA. Primer data provider nativo de mercados de predicción para la región.",
            "Orbit Risk: Primer producto de cobertura operativa basado en mercados de predicción para empresas en mercados emergentes. Sin competidor directo identificado.",
          ],
        },
        {
          id: "team",
          title: "Equipo y Modelo Operativo",
          content: [
            "Equipo multidisciplinario con experiencia combinada en finanzas cuantitativas, ciberseguridad empresarial e infraestructura tecnológica a escala. Track record demostrado en levantamiento de capital, cierre de contratos enterprise, desarrollo de tecnología en producción y navegación de industrias reguladas en México y EE.UU.",
            "Modelo operativo AI-Native: más de 12 agentes de IA y bots de trading operando de forma autónoma 24/7. Un equipo de 5 personas produce el output operativo equivalente a un equipo de 20. Cada proceso está automatizado con supervisión humana en los puntos de decisión críticos. Este modelo permite escalar operaciones con capital efficiency significativamente superior al promedio de la industria — un diferenciador clave en un mercado donde el 93% de ejecutivos priorizan la automatización agéntica¹⁶.",
          ],
        },
        {
          id: "contact",
          title: "Contacto",
          content: [
            "Capital: invest@orbitcapital.ai",
            "Ciudad de México, México 🇲🇽",
          ],
        },
      ],
    },

    // ── Legal Pages ──
    legal: {
      backHome: "a Inicio",
      acceptableUseLabel: "Política de uso aceptable",

      // ── Privacy Notice (Aviso de Privacidad) ──
      privacy: {
        heroTag: "Aviso Legal",
        heroTitle: "Aviso de Privacidad",
        heroDesc: "Este Aviso de Privacidad describe cómo Orbit Predictive Technologies, LLC recopila, utiliza, almacena y protege su información personal conforme a la legislación aplicable.",
        lastUpdated: "Última actualización: 16 de febrero de 2026",
        contactTitle: "Contacto del Responsable de Datos",
        contactDesc: "Para ejercer sus derechos ARCO o cualquier consulta relacionada con sus datos personales, comuníquese con nosotros:",
        contactEmail: "privacy@orbitcapital.ai",
        sections: [
          {
            title: "Identidad y Domicilio del Responsable",
            content: [
              "Orbit Predictive Technologies, LLC (en adelante \"Orbit\", \"nosotros\" o \"la Empresa\"), con domicilio operativo en Ciudad de México, México, es la entidad responsable del tratamiento de sus datos personales.",
              "Orbit opera tres líneas de negocio integradas: Nuestra Inteligencia (plataforma de inteligencia empresarial con IA), Orbit Risk (cobertura de riesgos operativos) y Orbit Capital (fondo de trading cuantitativo). Este Aviso de Privacidad aplica a la totalidad de los servicios ofrecidos a través del ecosistema Orbit.",
            ],
          },
          {
            title: "Datos Personales que Recopilamos",
            content: [
              "Datos de identificación: nombre completo, denominación o razón social, cargo, dirección de correo electrónico corporativo, número de teléfono y país de residencia.",
              "Datos profesionales y empresariales: nombre de la empresa u organización, sector o industria, tamaño de la organización, rol dentro de la misma y necesidades operativas declaradas.",
              "Datos financieros (aplicable a Orbit Capital): información necesaria para la evaluación de inversionistas acreditados, monto de inversión propuesto, perfil de riesgo y datos bancarios para transferencias de fondos, en la medida en que las leyes aplicables lo permitan.",
              "Datos técnicos y de navegación: dirección IP, tipo de navegador, sistema operativo, páginas visitadas dentro de nuestros sitios, duración de la sesión, identificadores de dispositivo y datos de cookies o tecnologías de rastreo similares.",
              "Datos de uso del servicio: patrones de consulta a la API de Nuestra Inteligencia, frecuencia de uso, configuraciones de alertas, verticales de análisis seleccionadas e historial de interacciones con la plataforma.",
            ],
          },
          {
            title: "Finalidades del Tratamiento de Datos",
            content: [
              "Finalidades primarias: (a) proveer, mantener y mejorar los servicios de Nuestra Inteligencia, Orbit Risk y Orbit Capital; (b) crear y administrar cuentas de usuario; (c) procesar solicitudes de demostración, contacto e inversión; (d) gestionar la relación contractual y precontractual; (e) cumplir con obligaciones legales, regulatorias y fiscales aplicables; (f) prevenir fraude, lavado de dinero y otras actividades ilícitas.",
              "Finalidades secundarias: (a) enviar comunicaciones comerciales, boletines informativos y actualizaciones sobre nuestros productos y servicios; (b) realizar análisis estadísticos, estudios de mercado y segmentación de usuarios; (c) personalizar la experiencia del usuario dentro de nuestras plataformas; (d) realizar encuestas de satisfacción y mejora de servicio. Si usted no desea que sus datos personales sean tratados para estas finalidades secundarias, podrá solicitarlo al correo privacy@orbitcapital.ai.",
            ],
          },
          {
            title: "Base Legal para el Tratamiento",
            content: [
              "El tratamiento de sus datos personales se fundamenta en: (a) el consentimiento otorgado al interactuar con nuestros servicios, registrar una cuenta o enviar un formulario; (b) la ejecución de un contrato o la adopción de medidas precontractuales a solicitud del interesado; (c) el cumplimiento de obligaciones legales aplicables a Orbit; (d) el interés legítimo de Orbit para mejorar y asegurar sus servicios, siempre que no prevalezcan los derechos y libertades del interesado.",
            ],
          },
          {
            title: "Transferencias de Datos",
            content: [
              "Orbit podrá transferir sus datos personales a las siguientes categorías de destinatarios, siempre bajo medidas de seguridad adecuadas: (a) proveedores de servicios tecnológicos (alojamiento en nube, análisis de datos, infraestructura de servidores); (b) procesadores de pagos y entidades financieras para la gestión de inversiones; (c) asesores legales, contables y de cumplimiento regulatorio; (d) autoridades gubernamentales cuando sea requerido por ley o resolución judicial.",
              "Dado que Orbit es una entidad constituida en los Estados Unidos de América con operaciones en México, sus datos personales podrán ser transferidos y almacenados en servidores ubicados en Estados Unidos u otras jurisdicciones. En tales casos, Orbit garantizará que existan salvaguardas apropiadas conforme a las leyes de protección de datos aplicables.",
            ],
          },
          {
            title: "Proveedores de Tecnología y Subencargados",
            content: [
              "Para la prestación de nuestros servicios utilizamos los siguientes proveedores de tecnología que pueden acceder o procesar datos personales en nuestro nombre: Supabase (base de datos y autenticación), Vercel (alojamiento web y análisis de rendimiento), PostHog (análisis de comportamiento y métricas de producto). Cada uno de estos proveedores está sujeto a acuerdos de procesamiento de datos que garantizan niveles adecuados de protección.",
            ],
          },
          {
            title: "Derechos del Titular (Derechos ARCO)",
            content: [
              "Usted tiene derecho a: (a) Acceder a sus datos personales en posesión de Orbit y conocer las condiciones del tratamiento; (b) Rectificar sus datos cuando sean inexactos o estén incompletos; (c) Cancelar (suprimir) sus datos cuando considere que no están siendo tratados conforme a los principios y deberes aplicables; (d) Oponerse al tratamiento de sus datos para finalidades específicas.",
              "Asimismo, tiene derecho a revocar su consentimiento en cualquier momento, limitar el uso o divulgación de sus datos y solicitar la portabilidad de los mismos cuando sea técnicamente posible.",
              "Para ejercer cualquiera de estos derechos, envíe una solicitud a privacy@orbitcapital.ai indicando su nombre completo, descripción clara de los datos sobre los que desea ejercer su derecho y cualquier documentación que facilite la localización de sus datos. Orbit responderá en un plazo máximo de veinte (20) días hábiles contados a partir de la recepción de la solicitud completa.",
            ],
          },
          {
            title: "Medidas de Seguridad",
            content: [
              "Orbit implementa medidas de seguridad administrativas, técnicas y físicas apropiadas para proteger sus datos personales contra daño, pérdida, alteración, destrucción, o uso, acceso o tratamiento no autorizado. Entre dichas medidas se incluyen: cifrado de datos en tránsito y en reposo, controles de acceso basados en roles, monitoreo continuo de la infraestructura, auditorías periódicas de seguridad y políticas internas de manejo de información confidencial.",
            ],
          },
          {
            title: "Uso de Cookies y Tecnologías de Rastreo",
            content: [
              "Nuestros sitios web utilizan cookies y tecnologías similares para: (a) garantizar el funcionamiento técnico del sitio; (b) recordar sus preferencias (como idioma y tema visual); (c) obtener métricas de uso y rendimiento; (d) mejorar la experiencia del usuario.",
              "Puede configurar su navegador para rechazar cookies o recibir una notificación antes de que se almacenen. Tenga en cuenta que la desactivación de ciertas cookies puede afectar la funcionalidad del sitio.",
            ],
          },
          {
            title: "Conservación de Datos",
            content: [
              "Conservaremos sus datos personales durante el tiempo necesario para cumplir con las finalidades descritas en este Aviso, salvo que un plazo de conservación más largo sea requerido o permitido por la ley. Los criterios utilizados para determinar nuestros períodos de conservación incluyen: la vigencia de la relación contractual, obligaciones legales y regulatorias, plazos de prescripción aplicables y la necesidad operativa de los datos.",
            ],
          },
          {
            title: "Menores de Edad",
            content: [
              "Los servicios de Orbit no están dirigidos a personas menores de dieciocho (18) años. No recopilamos intencionalmente datos personales de menores. Si tenemos conocimiento de que hemos recopilado datos de un menor sin el consentimiento verificable de su padre, madre o tutor legal, procederemos a eliminar dicha información de nuestros sistemas.",
            ],
          },
          {
            title: "Modificaciones al Aviso de Privacidad",
            content: [
              "Orbit se reserva el derecho de modificar el presente Aviso de Privacidad en cualquier momento. Cualquier cambio sustancial será notificado a través de nuestro sitio web o por correo electrónico a la dirección asociada a su cuenta. Le recomendamos revisar este Aviso periódicamente. El uso continuado de nuestros servicios después de la publicación de modificaciones constituye su aceptación de las mismas.",
            ],
          },
          {
            title: "Legislación Aplicable y Jurisdicción",
            content: [
              "El presente Aviso de Privacidad se rige por las leyes aplicables del Estado de Delaware, Estados Unidos de América, así como por las disposiciones de protección de datos personales vigentes en México en la medida en que resulten aplicables a las operaciones de Orbit en dicho territorio. Para la resolución de cualquier controversia derivada de este Aviso, las partes se someten a la jurisdicción de los tribunales competentes en el Estado de Delaware, EE.UU., renunciando a cualquier otro fuero que pudiera corresponderles por razón de su domicilio presente o futuro.",
            ],
          },
        ],
      },

      // ── Terms of Use (Términos de Uso) ──
      terms: {
        heroTag: "Marco Legal",
        heroTitle: "Términos de Uso",
        heroDesc: "Estos Términos de Uso regulan el acceso y utilización de los servicios, plataformas y contenidos proporcionados por Orbit Predictive Technologies, LLC.",
        lastUpdated: "Última actualización: 16 de febrero de 2026",
        contactTitle: "Contacto Legal",
        contactDesc: "Para consultas legales sobre estos Términos de Uso, comuníquese con nosotros:",
        contactEmail: "legal@orbitcapital.ai",
        sections: [
          {
            title: "Aceptación de los Términos",
            content: [
              "Al acceder, navegar o utilizar cualquier servicio de Orbit Predictive Technologies, LLC (en adelante \"Orbit\"), incluyendo pero no limitado a Nuestra Inteligencia, Orbit Risk y Orbit Capital, así como los sitios web, APIs, aplicaciones y cualquier material asociado (colectivamente, los \"Servicios\"), usted acepta quedar vinculado por estos Términos de Uso (\"Términos\").",
              "Si usted accede a los Servicios en nombre de una empresa u otra persona jurídica, declara y garantiza que tiene la autoridad para vincular a dicha entidad a estos Términos. Si no acepta estos Términos, no utilice los Servicios.",
            ],
          },
          {
            title: "Descripción de los Servicios",
            content: [
              "Nuestra Inteligencia: plataforma de inteligencia empresarial que utiliza inteligencia artificial, mercados de predicción y análisis de datos en tiempo real para generar probabilidades, señales y análisis en múltiples verticales (regulatoria, geopolítica, económica, energética, climática, competitiva y cadena de suministro).",
              "Orbit Risk: servicio de cobertura de riesgos operativos que transforma exposiciones empresariales (regulatorias, políticas, climáticas, cambiarias, entre otras) en coberturas cuantificables mediante posiciones en mercados de predicción.",
              "Orbit Capital: fondo de trading cuantitativo que opera en mercados de predicción globales utilizando la infraestructura de inteligencia de Orbit. Los servicios de Orbit Capital están destinados exclusivamente a inversionistas acreditados conforme a la regulación aplicable.",
            ],
          },
          {
            title: "Requisitos de Elegibilidad",
            content: [
              "Para utilizar los Servicios, usted debe: (a) tener al menos dieciocho (18) años de edad; (b) tener capacidad legal para celebrar contratos vinculantes; (c) no estar impedido para recibir los Servicios bajo las leyes de la jurisdicción aplicable; (d) para los servicios de Orbit Capital, cumplir con los requisitos de inversionista acreditado según la regulación del mercado de valores aplicable.",
            ],
          },
          {
            title: "Registro de Cuenta y Seguridad",
            content: [
              "Algunos Servicios requieren la creación de una cuenta. Usted se compromete a: (a) proporcionar información veraz, exacta, actual y completa durante el registro; (b) mantener y actualizar oportunamente dicha información; (c) mantener la confidencialidad de sus credenciales de acceso; (d) notificar inmediatamente a Orbit sobre cualquier uso no autorizado de su cuenta.",
              "Usted es el único responsable de toda la actividad que ocurra bajo su cuenta. Orbit no será responsable de ninguna pérdida derivada del uso no autorizado de su cuenta si dicho uso no es atribuible a Orbit.",
            ],
          },
          {
            title: "Uso Permitido y Restricciones",
            content: [
              "Se le concede una licencia limitada, no exclusiva, intransferible y revocable para acceder y utilizar los Servicios conforme a estos Términos y a la Política de Uso Aceptable de Orbit. Queda estrictamente prohibido: (a) copiar, modificar, distribuir, vender, sublicenciar o crear obras derivadas de los Servicios; (b) realizar ingeniería inversa, descompilar o intentar extraer el código fuente; (c) utilizar los Servicios para cualquier finalidad ilícita o no autorizada; (d) interferir con o interrumpir la integridad o el rendimiento de los Servicios; (e) eludir medidas tecnológicas de protección; (f) acceder a los Servicios mediante medios automatizados (bots, scrapers) sin autorización expresa.",
            ],
          },
          {
            title: "Propiedad Intelectual",
            content: [
              "Todos los derechos de propiedad intelectual sobre los Servicios, incluyendo pero no limitado a software, algoritmos, modelos de inteligencia artificial, bases de datos, diseños, marcas, logotipos, contenido editorial y documentación, son y permanecerán propiedad exclusiva de Orbit o de sus licenciantes.",
              "La información, análisis, probabilidades, señales y demás datos generados por las plataformas de Orbit (\"Contenido de Orbit\") están protegidos por derechos de autor y leyes de propiedad intelectual. Queda prohibida su reproducción, distribución o comunicación pública sin autorización previa y por escrito de Orbit.",
            ],
          },
          {
            title: "Descargo sobre Información Financiera",
            content: [
              "AVISO IMPORTANTE: Ninguna información, análisis, probabilidad, señal o contenido proporcionado a través de los Servicios de Orbit constituye asesoramiento financiero, asesoramiento de inversión, recomendación de valores, solicitud de compra o venta de instrumentos financieros, ni oferta pública de valores en ninguna jurisdicción.",
              "Nuestra Inteligencia proporciona información de inteligencia empresarial para fines informativos y analíticos. Las probabilidades y señales reflejan la síntesis de múltiples fuentes de datos y modelos, pero no garantizan resultados futuros.",
              "Orbit Capital opera como un fondo privado destinado exclusivamente a inversionistas acreditados. La inversión en mercados de predicción e instrumentos derivados conlleva riesgos significativos, incluida la posible pérdida total del capital invertido. Rendimientos pasados no garantizan rendimientos futuros.",
            ],
          },
          {
            title: "Limitación de Responsabilidad",
            content: [
              "EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY APLICABLE, ORBIT, SUS DIRECTORES, EMPLEADOS, AGENTES, LICENCIANTES Y PROVEEDORES NO SERÁN RESPONSABLES POR: (A) DAÑOS INDIRECTOS, INCIDENTALES, ESPECIALES, CONSECUENTES O PUNITIVOS; (B) PÉRDIDA DE BENEFICIOS, INGRESOS, DATOS, OPORTUNIDADES DE NEGOCIO O AHORROS ESPERADOS; (C) CUALQUIER DAÑO DERIVADO DE LA INTERRUPCIÓN DEL SERVICIO, ERRORES, VIRUS O FALLOS TÉCNICOS.",
              "La responsabilidad agregada de Orbit por cualquier reclamación relacionada con los Servicios no excederá el monto total pagado por usted a Orbit durante los doce (12) meses anteriores al evento que dio origen a la reclamación, o cien dólares estadounidenses (USD $100), lo que sea mayor.",
            ],
          },
          {
            title: "Indemnización",
            content: [
              "Usted acepta indemnizar, defender y mantener indemne a Orbit, sus directores, empleados, agentes y afiliados, frente a cualquier reclamación, demanda, daño, pérdida, responsabilidad, costo o gasto (incluyendo honorarios razonables de abogados) que surjan de o estén relacionados con: (a) su uso de los Servicios; (b) su incumplimiento de estos Términos; (c) su violación de derechos de terceros; (d) cualquier contenido o información que usted proporcione a través de los Servicios.",
            ],
          },
          {
            title: "Disponibilidad del Servicio y Modificaciones",
            content: [
              "Orbit se reserva el derecho de modificar, suspender o descontinuar cualquier aspecto de los Servicios en cualquier momento, con o sin previo aviso, y sin responsabilidad alguna hacia usted. Orbit realizará esfuerzos comercialmente razonables para notificar cambios materiales con anticipación razonable.",
              "Orbit no garantiza que los Servicios estarán disponibles de forma ininterrumpida, segura o libre de errores. El acceso a los Servicios puede verse afectado por mantenimiento programado, actualizaciones, fallos técnicos o circunstancias fuera del control razonable de Orbit.",
            ],
          },
          {
            title: "Plazo y Terminación",
            content: [
              "Estos Términos permanecerán vigentes mientras usted utilice los Servicios. Orbit podrá suspender o terminar su acceso a los Servicios, en cualquier momento y por cualquier motivo, incluyendo el incumplimiento de estos Términos, sin obligación de notificación previa.",
              "Tras la terminación: (a) cesarán todos los derechos y licencias otorgados bajo estos Términos; (b) usted deberá cesar inmediatamente todo uso de los Servicios; (c) las disposiciones que por su naturaleza deban sobrevivir a la terminación continuarán vigentes, incluyendo las relativas a propiedad intelectual, limitación de responsabilidad, indemnización y legislación aplicable.",
            ],
          },
          {
            title: "Legislación Aplicable y Resolución de Controversias",
            content: [
              "Estos Términos se rigen e interpretan conforme a las leyes del Estado de Delaware, Estados Unidos de América, sin referencia a sus normas de conflicto de leyes.",
              "Cualquier controversia derivada de o relacionada con estos Términos o los Servicios será resuelta mediante arbitraje vinculante administrado de conformidad con las reglas de la American Arbitration Association (AAA). El arbitraje se llevará a cabo en inglés, en la ciudad de Wilmington, Delaware, EE.UU. El laudo arbitral será definitivo y vinculante y podrá ser ejecutado ante cualquier tribunal competente.",
              "LAS PARTES RENUNCIAN AL DERECHO DE PARTICIPAR EN DEMANDAS COLECTIVAS O ARBITRAJES COLECTIVOS. Toda controversia deberá resolverse de forma individual.",
            ],
          },
          {
            title: "Disposiciones Generales",
            content: [
              "Cesión: usted no podrá ceder ni transferir estos Términos ni ningún derecho derivado de los mismos sin el consentimiento previo por escrito de Orbit. Orbit podrá ceder estos Términos libremente.",
              "Divisibilidad: si alguna disposición de estos Términos es declarada inválida o inaplicable, las disposiciones restantes continuarán en pleno vigor y efecto.",
              "Renuncia: la omisión de Orbit en ejercer cualquier derecho o recurso bajo estos Términos no constituye una renuncia a dicho derecho o recurso.",
              "Acuerdo completo: estos Términos, junto con el Aviso de Privacidad y la Política de Uso Aceptable de Orbit, constituyen el acuerdo completo entre usted y Orbit en relación con el uso de los Servicios y reemplazan cualquier acuerdo previo.",
            ],
          },
        ],
      },

      // ── Acceptable Use Policy (Política de Uso Aceptable) ──
      acceptableUse: {
        heroTag: "Política",
        heroTitle: "Política de Uso Aceptable",
        heroDesc: "Esta Política de Uso Aceptable establece las conductas permitidas y prohibidas al utilizar los servicios de Orbit Predictive Technologies, LLC.",
        lastUpdated: "Última actualización: 16 de febrero de 2026",
        contactTitle: "Reportar una Violación",
        contactDesc: "Si tiene conocimiento de alguna violación a esta política o desea reportar un uso indebido, contáctenos:",
        contactEmail: "abuse@orbitcapital.ai",
        sections: [
          {
            title: "Alcance y Aplicación",
            content: [
              "Esta Política de Uso Aceptable (\"PUA\") aplica a todos los usuarios de los servicios de Orbit Predictive Technologies, LLC (\"Orbit\"), incluyendo Nuestra Inteligencia, Orbit Risk, Orbit Capital, las APIs, sitios web, aplicaciones y cualquier servicio relacionado (colectivamente, los \"Servicios\").",
              "Esta PUA complementa y forma parte integral de los Términos de Uso de Orbit. El incumplimiento de esta política puede resultar en la suspensión o terminación de su acceso a los Servicios, sin perjuicio de cualquier acción legal que pueda corresponder.",
            ],
          },
          {
            title: "Principios Generales de Uso",
            content: [
              "Al utilizar los Servicios, usted se compromete a: (a) actuar de buena fe y de manera ética en todas sus interacciones; (b) cumplir con todas las leyes, regulaciones y normativas aplicables en su jurisdicción y en cualquier jurisdicción relevante para su uso de los Servicios; (c) respetar los derechos de propiedad intelectual de Orbit y de terceros; (d) no interferir con el uso y disfrute de los Servicios por parte de otros usuarios.",
            ],
          },
          {
            title: "Conductas Prohibidas — Seguridad y Acceso",
            content: [
              "Queda estrictamente prohibido: (a) intentar obtener acceso no autorizado a los Servicios, cuentas de otros usuarios, sistemas informáticos o redes conectadas a los Servicios; (b) utilizar los Servicios para realizar pruebas de vulnerabilidad, escaneo de puertos o pruebas de penetración sin autorización expresa por escrito de Orbit; (c) transmitir virus, malware, ransomware o cualquier código malicioso a través de los Servicios; (d) sobrecargar intencionalmente la infraestructura de los Servicios mediante ataques de denegación de servicio o técnicas similares; (e) falsificar encabezados, identificadores o cualquier dato para ocultar el origen de contenido transmitido a través de los Servicios.",
            ],
          },
          {
            title: "Conductas Prohibidas — Uso de Datos e Información",
            content: [
              "Queda prohibido: (a) redistribuir, revender o sublicenciar los datos, análisis, probabilidades o cualquier contenido obtenido a través de Nuestra Inteligencia sin autorización expresa; (b) utilizar la información de Orbit para manipulación de mercados, abuso de información privilegiada (insider trading) o cualquier actividad que viole regulaciones de mercados de valores; (c) utilizar los Servicios para recopilar datos personales de otros usuarios sin su consentimiento; (d) realizar scraping, minería de datos o extracción automatizada de contenido de los Servicios sin autorización previa por escrito; (e) utilizar los datos de Orbit para construir productos o servicios competidores.",
            ],
          },
          {
            title: "Conductas Prohibidas — Contenido y Comunicaciones",
            content: [
              "Queda prohibido utilizar los Servicios para: (a) transmitir contenido difamatorio, obsceno, amenazante, acosador o que incite a la violencia; (b) suplantar la identidad de otra persona o entidad; (c) enviar comunicaciones comerciales no solicitadas (spam); (d) publicar información falsa o engañosa con el propósito de perjudicar a terceros; (e) promover actividades ilegales o conductas que violen los derechos de otros.",
            ],
          },
          {
            title: "Uso de APIs y Servicios Automatizados",
            content: [
              "Los usuarios que accedan a los Servicios a través de APIs deberán: (a) respetar los límites de tasa (rate limits) establecidos para su plan de suscripción; (b) implementar mecanismos de reintento exponencial (exponential backoff) para gestionar errores; (c) no compartir claves de API con terceros no autorizados; (d) monitorear y controlar el uso de sus credenciales de API; (e) notificar inmediatamente a Orbit si sospechan que sus credenciales de API han sido comprometidas.",
              "El uso excesivo o abusivo de las APIs que degrade el rendimiento del servicio para otros usuarios podrá resultar en la limitación temporal o permanente del acceso.",
            ],
          },
          {
            title: "Cumplimiento Regulatorio y Sanciones",
            content: [
              "Queda prohibido utilizar los Servicios: (a) en violación de sanciones económicas o embargos comerciales impuestos por Estados Unidos (OFAC), la Unión Europea o cualquier otra autoridad competente; (b) para financiar o apoyar actividades terroristas, lavado de dinero u otras actividades ilícitas; (c) en beneficio de personas o entidades incluidas en listas de sanciones internacionales; (d) para evadir controles de exportación o regulaciones de comercio internacional.",
            ],
          },
          {
            title: "Inteligencia Artificial y Modelos de Datos",
            content: [
              "Los usuarios que interactúen con las herramientas de IA de Orbit deberán: (a) no intentar extraer, replicar o realizar ingeniería inversa de los modelos de inteligencia artificial propietarios de Orbit; (b) no utilizar los resultados de los modelos de IA como única base para decisiones financieras, legales o médicas sin supervisión humana adecuada; (c) reportar cualquier sesgo, error o comportamiento inesperado detectado en los modelos; (d) comprender y aceptar que los resultados de los modelos de IA son probabilísticos y no constituyen certezas ni garantías.",
            ],
          },
          {
            title: "Consecuencias del Incumplimiento",
            content: [
              "Orbit se reserva el derecho de investigar cualquier sospecha de violación a esta PUA y tomar las medidas que considere apropiadas, incluyendo: (a) emisión de advertencias formales; (b) limitación temporal del acceso a funcionalidades específicas; (c) suspensión temporal de la cuenta; (d) terminación permanente de la cuenta y acceso a los Servicios; (e) reportar la conducta a las autoridades competentes cuando sea legalmente necesario.",
              "Orbit actuará de manera proporcional al considerar la gravedad de la violación, su carácter intencional o negligente, la reincidencia y el impacto sobre otros usuarios o sobre los Servicios.",
            ],
          },
          {
            title: "Proceso de Apelación",
            content: [
              "Si su cuenta ha sido suspendida o terminada y usted considera que la decisión fue tomada por error, puede presentar una apelación por escrito a abuse@orbitcapital.ai dentro de los treinta (30) días posteriores a la notificación de la acción. Orbit revisará la apelación y le comunicará su decisión en un plazo razonable. La decisión de Orbit será definitiva.",
            ],
          },
          {
            title: "Modificaciones a esta Política",
            content: [
              "Orbit se reserva el derecho de actualizar esta Política de Uso Aceptable en cualquier momento. Las modificaciones entrarán en vigor al ser publicadas en nuestro sitio web. El uso continuado de los Servicios después de la publicación de cambios constituye su aceptación de los mismos. Para cambios sustanciales, Orbit realizará esfuerzos razonables por notificar a los usuarios con anticipación.",
            ],
          },
        ],
      },
    },

    // ── PageHero / Back ──
    back: "Volver",

    // ── Market Page ──
    market: {
      heroTag: "Validación Institucional",
      heroTitle: "Wall Street ya Apostó",
      heroDesc: "Los hedge funds más sofisticados del mundo están invirtiendo activamente en prediction markets. No estamos apostando por tecnología especulativa.",
      giantsTag: "Smart Money",
      giantsTitle: "Los Gigantes de Wall Street ya Están Dentro",
      giants: [
        { name: "Susquehanna International Group (SIG)", desc: "Primer market maker institucional dedicado a prediction markets en Kalshi. ~$2T USD en volumen anual. Creó una división de trading dedicada, incrementando liquidez ~30x." },
        { name: "Jump Trading", desc: "Gigante de trading algorítmico de Chicago. Entrada como proveedor de liquidez señala que quant funds ven oportunidades de arbitraje y market making." },
        { name: "DRW Trading", desc: "Potencia del trading institucional con expertise en derivados y commodities. Trata los event contracts como derivados financieros legítimos para hedging de black swan events." },
        { name: "Interactive Brokers & ForecastEx", desc: "IBKR (NASDAQ: IBKR) lanzó ForecastEx con Kalshi. Uno de los brokers más respetados de Wall Street estabilizando mercados y reduciendo bid-ask spreads." }
      ],
      fundingTag: "Funding",
      fundingTitle: "Capital Institucional Masivo",
      tablePlatform: "Plataforma",
      tableRaised: "Capital Levantado",
      tableValuation: "Valuación",
      tableBackers: "Inversores Clave",
      iceNote: "Nota sobre ICE:",
      iceDetail: "Intercontinental Exchange (dueña del NYSE) invirtió $2B en Polymarket. Cuando la infraestructura que opera la Bolsa de Nueva York apuesta por prediction markets, la señal es inequívoca.",
      volumeTag: "Volúmenes",
      volumeTitle: "Crecimiento Explosivo",
      volumeDesc: "El volumen combinado en las dos plataformas líderes ha crecido más de 100x en dos años.",
      tableYear: "Año",
      tableCombined: "Combinado",
      statPoly: "Vol. Polymarket 2025",
      statKalshi: "Vol. Kalshi 2025",
      statGrowth: "Crecimiento 2023-2025",
      projTag: "Proyección",
      projTitle: "Proyección 2026-2028",
      projDesc: "Bajo tres escenarios, el volumen anual combinado podría alcanzar entre $60B y $300B en los próximos tres años.",
      tableScenario: "Escenario",
      tableEstVolume: "Volumen Anual Estimado",
      projScenarios: [
        "Conservador",
        "Base",
        "Optimista (World Cup + Election)"
      ],
      catalystsTitle: "Catalizadores Clave",
      catalystsList: [
        "2026: Consolidación institucional. Polymarket aprobación CFTC. Elecciones intermedias EE.UU.",
        "2027: Mainstream adoption. Integración con brokers tradicionales. Productos derivados sobre event contracts.",
        "2028: Elección Presidencial EE.UU. podría multiplicar 3-5x los volúmenes actuales.",
        "Copa Mundial FIFA 2026 en Norteamérica podría generar $100B+ en volumen."
      ],
      mediaTag: "Medios",
      mediaTitle: "Validación de Medios",
      mediaDesc: "Los principales medios y plataformas del mundo ya integran datos de prediction markets en su cobertura.",
      mediaList: [
        { name: "CNN y CNBC", detail: "Partnerships con Kalshi para integrar datos de mercado en tiempo real en cobertura editorial." },
        { name: "Google", detail: "Integración de datos de Kalshi y Polymarket en búsqueda y Google Finance (noviembre 2025)." },
        { name: "Dow Jones", detail: "Partnership con Polymarket para distribución de datos a instituciones financieras globales." },
        { name: "NHL", detail: "Primera liga deportiva mayor en firmar deal de licensing con Kalshi (octubre 2025)." },
        { name: "X (Twitter)", detail: "Polymarket como partner oficial de prediction markets, integrado con xAI." }
      ],
      relevanceTag: "Relevancia",
      relevanceTitle: "Por Qué Importa para Orbit",
      relevanceList: [
        { title: "Timing Perfecto", text: "Entramos en la fase de adopción temprana institucional (Early Majority), no en la fase especulativa." },
        { title: "Liquidez Garantizada", text: "Market makers institucionales permiten ejecutar estrategias a escala sin impacto de mercado hasta $50-100M USD en AUM." },
        { title: "Legitimidad del Mercado", text: "Bloomberg, CNN y Google ya consideran prediction markets fuentes legítimas de datos." },
        { title: "Runway de Crecimiento", text: "Mercado proyectado a crecer 3-5x en 3 años. Infraestructura para un mercado validado por el smart money." }
      ]
    },

    // ── Why Now Page (Timing) ──
    whyNow: {
      heroTag: "Timing",
      heroTitle: "¿Por Qué Ahora?",
      heroDesc: "Cuatro fuerzas masivas están convergiendo para crear una oportunidad única en una década.",
      t1Tag: "Tailwind 1",
      t1Title: "Explosión de Agentes de IA",
      t1Desc: "Los agentes autónomos de IA están pasando de demos a producción. Las empresas más grandes del mundo ya los despliegan — y todos necesitan datos estructurados como input.",
      t1Agents: [
        { name: "GPT-4 / OpenAI", detail: "Function-calling agents para research, trading y ops." },
        { name: "Claude / Anthropic", detail: "Computer-use agents que navegan sistemas complejos." },
        { name: "Grok / xAI", detail: "Agente nativo de X con acceso a datos en tiempo real." }
      ],
      t1DeployTitle: "Despliegues Enterprise",
      t1Deployments: [
        { org: "Goldman Sachs", use: "Agents para research y due diligence" },
        { org: "McKinsey", use: "Lilli — agent interno para 30K+ consultores" },
        { org: "Walmart", use: "Agents para supply chain y pricing" },
        { org: "Palantir AIP", use: "$1B ARR — agents para defensa y enterprise" }
      ],
      t1InsightLabel: "Insight clave:",
      t1InsightText: "Los agentes de IA necesitan contexto estructurado para LATAM — probabilidades calibradas, datos regulatorios, sentiment político — y ese contexto no existe hoy. Orbit lo crea.",
      t2Tag: "Tailwind 2",
      t2Title: "Grok y X: Stack de Inteligencia en Tiempo Real",
      t2Desc: "xAI Grok tiene acceso nativo a X (Twitter). Combinados, forman el stack de inteligencia en tiempo real más poderoso del mundo.",
      t2List: [
        "Acceso nativo a 500M+ posts diarios en X",
        "Análisis de sentiment en tiempo real",
        "México: X es la plataforma política primaria",
        "Grok convierte caos de datos en inteligencia estructurada",
        "Monitoreo 24/7 de narrativas políticas y económicas"
      ],
      t2InsightLabel: "Nuestra ventaja:",
      t2InsightText: "Orbit convierte el caos de 500M+ posts diarios en inteligencia estructurada y accionable para inversores y corporativos en LATAM.",
      t3Tag: "Tailwind 3",
      t3Title: "Prediction Markets se Vuelven Mainstream",
      t3Desc: "La elección de 2024 fue el punto de inflexión. Los prediction markets pasaron de nicho cripto a herramienta mainstream de toma de decisiones.",
      t3Stats: [
        { stat: "$3.6B", label: "Volumen Polymarket en elección 2024" },
        { stat: "CFTC", label: "Validación regulatoria de event contracts" },
        { stat: "Metaculus", label: "Estándar de calibración para labs de IA" }
      ],
      t3InsightLabel: "El problema:",
      t3InsightText: "Los datos de prediction markets están fragmentados entre múltiples plataformas y no están empaquetados para consumo enterprise. No hay API unificada, no hay consenso cross-platform, no hay análisis LATAM.",
      t4Tag: "Tailwind 4",
      t4Title: "El Momento Político de México",
      t4Desc: "México atraviesa el período de mayor incertidumbre regulatoria y política en décadas — exactamente cuando la demanda por inteligencia predictiva es máxima.",
      t4List: [
        "Elecciones intermedias 2026 — 15 carreras gubernamentales",
        "Reforma judicial en implementación — incertidumbre masiva",
        "Política energética en transición — impacto en $50B+ de inversión",
        "Boom de nearshoring — $35B en inversiones 2024",
        "México recibe más FDI que China por primera vez",
        "Consultas populares y cambios constitucionales frecuentes"
      ],
      t4Stats: [
        { value: 35, suffix: "B", label: "FDI en México 2024" },
        { value: 15, suffix: "", label: "Carreras Gubernamentales 2026" },
        { value: 50, suffix: "B+", label: "Inversión impactada por política energética" }
      ],
      t5Tag: "Orbit + IA",
      t5Title: "Por Qué Orbit Escala CON IA",
      t5Desc: "La narrativa de \"SaaS muere con IA\" no aplica cuando tu producto es data primaria que ninguna IA puede generar por sí sola.",
      t5List: [
        { title: "API-First Pricing", text: "Cobro por consulta/endpoint. Más agentes de IA = más revenue. El crecimiento de IA nos beneficia directamente." },
        { title: "Moat de Regulación Local", text: "Entender CNBV, INE, INEGI requiere contexto que ningún LLM tiene out-of-the-box. Orbit empaqueta ese contexto." },
        { title: "Console + APIs", text: "Humanos usan la consola, agentes usan la API. Mismo dato, dos interfaces, doble mercado." },
        { title: "Consensus Data Primario", text: "Ninguna IA puede generar probabilidades calibradas de mercado — se necesitan participantes reales apostando dinero real." }
      ],
      t5InsightLabel: "La tesis:",
      t5InsightText: "Orbit provee datos de consenso primarios — probabilidades calibradas respaldadas por dinero real — que ningún LLM puede fabricar. Más agentes de IA en el mundo = más clientes para Orbit."
    },
  },

  en: {
    // ── Nav & Global ──
    nav: {
      capital: "Capital",
      intel: "Intelligence",
      equipo: "Team",
      invertir: "Invest",
      acceso: "Access",
      home: "Orbit Ecosystem",
      empezar: "Start",
      productos: "Products",
      agendaDemo: "Contact Us",
      risk: "Risk",
      riskDemo: "Demo",
      contactanos: "Contact Us",
      whitepaper: "Whitepaper",
      engine: "Engine",
      performance: "Performance",
      infraestructura: "Infrastructure",
      terminos: "Terms",
      mercado: "Market",
      timing: "Timing",
      producto: "Product",
      plataforma: "Platform",
      verticales: "Verticals",
      integraciones: "Integrations",
      fuentes: "Sources",
      pricing: "Plans",
      // Risk sub-nav
      riskProceso: "Process",
      riskExposiciones: "Exposures",
      riskPorQue: "Why",
      riskArquitectura: "Architecture",
      riskCasos: "Cases",
      riskFaq: "FAQ",
      // Dropdown descriptions — Capital
      capitalEngineDesc: "Quantitative trading system",
      capitalPerfDesc: "Consistent risk-adjusted returns",
      capitalInfraDesc: "Institutional from day one",
      capitalTermsDesc: "Fund structure and terms",
      capitalMarketDesc: "Prediction market opportunity",
      capitalTimingDesc: "Market timing analysis",
      // Dropdown descriptions — Intel
      intelProductDesc: "One platform, two interfaces",
      intelVerticalsDesc: "Intelligence across 7 market dimensions",
      intelIntegrationsDesc: "Connects to your AI stack",
      intelPricingDesc: "Starter, Professional, Enterprise, and AI Platform.",
      // Dropdown descriptions — Risk
      riskProcessDesc: "How Orbit Risk works",
      riskExposuresDesc: "Exposure types we cover",
      riskWhyDesc: "Advantage over traditional hedging",
      riskArchDesc: "Intel + Risk + Capital integrated",
      riskCasesDesc: "Real-world industry cases",
      riskFaqDesc: "Frequently asked questions",
      agents: "Agents",
    },

    // ── Footer ──
    footer: {
      brand: "Intelligence, operational hedging, and quantitative capital for businesses in Latin America.",
      colCapital: "Orbit Capital",
      colIntel: "Intelligence",
      colRisk: "Orbit Risk",
      colCompany: "Company",
      riskProducto: "Product",
      riskExposiciones: "Exposures",
      riskPorQue: "Why",
      riskCasos: "Use Cases",
      riskFaq: "FAQ",
      elFondo: "The Fund",
      mercado: "Market",
      timing: "Timing",
      orbitEngine: "Orbit Engine",
      performance: "Performance",
      plataforma: "Platform",
      verticales: "Verticals",
      integraciones: "Integrations",
      fuentes: "Sources",
      pricing: "Plans",
      equipo: "Team",
      blog: "Blog",
      press: "Press",
      pronto: "Soon",
      capitalEmail: "invest@orbitcapital.ai",
      location: "Mexico City, Mexico 🇲🇽",
      rights: "All rights reserved.",
      builtWith: "Built with passion in Mexico 🇲🇽",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
    },

    // ── Home ──
    home: {
      // Hero
      badge: "",
      heroTitle1: "Building the ",
      heroTitleGradient: "prediction markets",
      heroTitle2: " infrastructure for LATAM.",
      heroDesc1: "Quantitative capital and risk systems for ",
      heroDescBold: "event-based",
      heroDesc2: " markets.",
      heroCta1: "Contact Us",
      heroCta2: "Explore the API",

      // Social Proof Bar
      socialProofLine: "Prediction markets: the fastest-growing, lowest-correlation asset class in the world",
      socialProofMetrics: [
        { value: "$44B+", label: "Prediction Markets Volume 2025" },
        { value: "7", label: "Analysis verticals" },
        { value: "CFTC", label: "Institutional regulation (Kalshi)" },
        { value: "3", label: "Integrated products" },
      ],

      // Use Cases
      useCasesTag: "Use Cases",
      useCasesTitle: "Real problems we solve every day",
      useCases: [
        { industry: "Manufacturing", desc: "Your factory exports to the U.S. and you need to know if tariffs are coming before they hit your margins.", link: "/risk", accent: "risk" },
        { industry: "Investment Fund", desc: "You want real alpha in LATAM using data the rest of the market doesn't have yet.", link: "/capital", accent: "capital" },
      ],

      // Bottom CTA
      bottomCtaTitle: "Ready to move before the competition does?",
      bottomCtaCta: "Contact Us",

      // Ecosystem (3 cards)
      ecosystemTag: "The Ecosystem",
      ecosystemTitle1: "One ecosystem. Three layers.",
      ecosystemTitle2: "One flywheel.",
      ecosystemDesc: "Orbit lives where market intelligence, risk management, and quantitative trading meet. Each piece feeds the next: data generates protection, protection generates liquidity, liquidity generates returns, and returns sharpen the data.",
      intelName: "Nuestra Intelligence",
      intelSub: "The intelligence engine",
      intelCardDesc: "Our internal intelligence infrastructure: Knowledge Graphs, calibrated probabilities, and alternative signals powering the entire ecosystem.",
      intelCta: "Learn About Intel",
      riskName: "Orbit Risk",
      riskSub: "The protection layer",
      riskCardDesc: "Operational hedges for businesses facing political, regulatory, and macroeconomic uncertainty in LATAM.",
      riskCta: "Learn About Risk",
      capitalName: "Orbit Capital",
      capitalSub: "The validation layer",
      capitalCardDesc: "Quantitative fund that trades prediction markets systematically. Where Orbit's intelligence gets validated with real capital.",
      capitalCta: "Learn About the Fund",

      // Our Intelligence section
      intelSectionTag: "Our Technology",
      intelSectionTitle: "Our own intelligence infrastructure",
      intelSectionDesc: "Prediction market signals, X/Grok, and alternative data unified into a Knowledge Graph that powers Capital and Risk.",
      intelSectionBullets: [
        "7 verticals: Political, Economic, Regulatory, Energy, Climate, Real Estate, Insurance",
        "Unified Knowledge Graph that directly feeds Capital's 13 agents",
        "Built from scratch in CDMX — our edge, not a third-party product",
      ],
      intelSectionCta: "Learn About Our Intelligence →",

      // Orbit Risk section (protagonist)
      riskSectionTag: "Orbit Risk",
      riskSectionTitle: "Risk hedging that actually works",
      riskSectionSubtitle: "A tweet about tariffs or a surprise regulation can wipe out a quarter of margin. Orbit Risk translates those exposures into hedges executed directly on prediction markets.",
      riskSteps: [
        { num: "01", title: "Connect your operations", desc: "We integrate your key data — revenue, costs, supply chain — and our AI identifies the external drivers that affect you." },
        { num: "02", title: "Map your risks", desc: "Each exposure is translated to prediction market contracts: tariffs, rates, regulation, elections. Portfolio optimized at the lowest cost." },
        { num: "03", title: "Execute the hedge", desc: "Orbit Capital executes positions as your operational hedge. Continuous monitoring and real-time reports." },
      ],
      riskExampleTitle: "Example: Manufacturing exporter",
      riskExampleLines: [
        "A Mexican manufacturing company exports 40% of its production to the United States.",
        "→ Our Intelligence detects that the probability of new tariffs on Mexican manufacturing rose from 15% to 42% in 72 hours.",
        "→ Orbit Risk quantifies the impact: $2.3M USD in revenue at risk. Designs a hedge portfolio with 4 contracts on Polymarket and Kalshi.",
        "→ Orbit Capital executes the hedge. If the tariffs pass, the company collects. If not, the cost of protection was a fraction of the risk.",
      ],
      riskExposuresTitle: "Exposure types we cover",
      riskExposures: [
        "Tariffs and US-LATAM trade policy",
        "MXN/USD exchange rate",
        "Financial regulation (CNBV, SHCP)",
        "Energy policy and electricity reform",
        "Nearshoring disruptions",
        "Political and electoral risk",
        "Commodities and supply chain",
      ],
      riskCtaWaitlist: "Join the waitlist",
      riskExperimentalLabel: "Experimental Phase",

      // Orbit Capital section (protagonist)
      capitalSectionTag: "Orbit Capital",
      capitalSectionTitle: "The quantitative prediction engine",
      capitalSectionSubtitle: "The first quantitative prediction markets fund in LATAM. 13 autonomous agents navigate our Knowledge Graph to find and execute alpha in a $44B+ market that nobody is trading with AI.",
      capitalSteps: [
        { num: "01", title: "Commit capital", desc: "Invest in MXN, USD, USDC, or USDT. Direct deposit to institutional Fireblocks custody." },
        { num: "02", title: "Agents trade for you", desc: "13 agents navigate the Knowledge Graph to find and execute opportunities. Sub-150ms execution, 24/7." },
        { num: "03", title: "Full transparency", desc: "Daily NAV, monthly statements, and real-time LP dashboard. Human oversight with kill-switches." },
      ],
      capitalExampleTitle: "Example: LATAM investment fund",
      capitalExampleLines: [
        "A family office in Mexico seeks real diversification with low correlation to the S&P 500.",
        "→ Our Intelligence detects Banxico rate cut probability jumped from 40% to 68%. Agents identify pricing edge in 3 contracts.",
        "→ Rigel executes the positions. If probabilities revert, Polaris activates the kill-switch.",
      ],
      capitalProductsTitle: "What does the fund trade?",
      capitalProducts: [
        "Directional trading in political and economic markets",
        "Cross-market arbitrage between Polymarket and Kalshi",
        "Event-driven strategies with early detection",
        "Systematic volatility selling on tail-risk",
        "Market making via Risk hedging demand",
        "Real diversification: <0.2 correlation with S&P 500",
      ],
      capitalSectionMetrics: [
        { value: "18%", label: "Net annual target return" },
        { value: ">1.5", label: "Sharpe Ratio (backtested)" },
        { value: "<0.2", label: "Correlation with S&P 500 (backtested)" },
      ],
      capitalSectionCta: "Learn About the Fund",
      capitalInvestCta: "Invest in the fund",

      // Agents Showcase
      agentsTag: "The Agents",
      agentsTitle: "13 agents. One autonomous constellation.",
      agentsDesc: "Each agent has its own wallet, decision authority, and a specialized role. Humans oversee. Machines execute.",
      agentsList: [
        { name: "Atlas", role: "Graph Architect", celestialType: "planet" },
        { name: "Sirius", role: "Data Intake", celestialType: "star" },
        { name: "Kepler", role: "Data Intake", celestialType: "planet" },
        { name: "Proxima", role: "Data Intake", celestialType: "star" },
        { name: "Vega", role: "Signal Generation", celestialType: "star" },
        { name: "Trappist", role: "Probability Calibration", celestialType: "system" },
        { name: "Rigel", role: "Trade Execution", celestialType: "giant" },
        { name: "Gliese", role: "Cross-Market Arbitrage", celestialType: "star" },
        { name: "Polaris", role: "Risk Oversight", celestialType: "star" },
        { name: "Altair", role: "Portfolio Management", celestialType: "system" },
        { name: "Centauri", role: "Orchestration", celestialType: "star" },
        { name: "Cassiopeia", role: "Reporting", celestialType: "nebula" },
        { name: "Andromeda", role: "Operations", celestialType: "galaxy" },
      ],

      // Ecosystem (Flywheel)
      flywheelTag: "The Ecosystem",
      flywheelTitle: "One fund. One ecosystem. One flywheel.",
      flywheelDesc: "Every trade feeds the Knowledge Graph, every hedge generates liquidity, every signal sharpens decisions.",
      flywheelSteps: [
        { title: "Orbit Capital", sub: "The validation layer", desc: "The quantitative fund trades the same data with institutional infrastructure. If it generates returns, the data works.", icon: "chart", cta: "Learn About the Fund", link: "/capital" },
        { title: "Orbit Risk", sub: "The protection layer", desc: "Data is translated into executable operational hedges for businesses exposed to LATAM uncertainty.", icon: "shield", cta: "Learn About Risk", link: "/risk" },
        { title: "Nuestra Intelligence", sub: "The data layer", desc: "Real-time consensus probabilities from prediction markets + X sentiment for LATAM.", icon: "cpu", cta: "Explore Intel", link: "/intel" },
      ],

      // Validation
      validationTag: "Validation",
      validationTitle1: "Real data, built by",
      validationTitle2: "real operators",
      validationStats: [
        { label: "Total prediction market volume 2025" },
        { label: "Correlation with S&P 500 (backtested)" },
        { label: "Intelligence Verticals" },
      ],
      // ── Newsletter ──
      newsletterTag: "Community",
      newsletterTitle1: "Join",
      newsletterTitle2: "Perihelio",
      newsletterDesc: "Prediction market analysis, LATAM macro signals, and quant strategies — all of Orbit in one channel.",
      newsletterTelegram: "Join Perihelio on Telegram",
      newsletterPapers: [
        { planet: "Mercury", title: "Will Banxico cut rates before June?", prob: 68, outcome: "Yes" },
        { planet: "Venus", title: "Will LATAM institutional flows exceed $5B?", prob: 54, outcome: "Yes" },
        { planet: "Earth", title: "Will new tariffs be imposed on Mexico?", prob: 72, outcome: "Yes" },
        { planet: "Mars", title: "Will peso fall to 22 MXN/USD?", prob: 35, outcome: "No" },
        { planet: "Jupiter", title: "Will Polymarket surpass $2B monthly vol?", prob: 58, outcome: "Yes" },
        { planet: "Saturn", title: "Will X sentiment predict S&P 500?", prob: 44, outcome: "Yes" },
        { planet: "Uranus", title: "Will Bitcoin surpass $200k this year?", prob: 38, outcome: "No" },
        { planet: "Neptune", title: "Will Brent crude rise above $90?", prob: 31, outcome: "No" },
        { planet: "Pluto", title: "Will there be a Russia-Ukraine peace deal?", prob: 28, outcome: "No" },
        { planet: "Kepler-442b", title: "Will AGI be achieved this year?", prob: 8, outcome: "No" },
        { planet: "Proxima b", title: "Will the FED cut rates 3+ times?", prob: 45, outcome: "Yes" },
        { planet: "TRAPPIST-1e", title: "Will USMCA be renegotiated this year?", prob: 62, outcome: "Yes" },
        { planet: "Europa", title: "Will CNBV regulate crypto this year?", prob: 73, outcome: "Yes" },
        { planet: "Titan", title: "Will Amazon enter Mexico banking?", prob: 29, outcome: "No" },
        { planet: "Ganymede", title: "Will the US enter recession this year?", prob: 23, outcome: "No" },
        { planet: "Ceres", title: "Will FDA approve new gene therapy?", prob: 66, outcome: "Yes" },
        { planet: "Eris", title: "Will NVIDIA surpass $200 per share?", prob: 57, outcome: "Yes" },
        { planet: "Io", title: "Will SoftBank invest more in LATAM?", prob: 55, outcome: "Yes" },
      ],
      newsletterDisclaimer: "Illustrative examples. Not real-time data.",

      ctaTitle: "The intelligence, risk, and trading infrastructure LATAM was missing.",
      ctaDesc: "Three products, three audiences, one ecosystem. Whatever your profile, there's something in Orbit for you.",
      ctaAudiences: [
        { label: "Businesses", desc: "Request Risk demo", link: "/risk", icon: "shield", variant: "risk" },
        { label: "Developers", desc: "Explore Intel API", link: "/intel", icon: "cpu", variant: "intel" },
        { label: "Investors", desc: "Learn About Capital", link: "/capital", icon: "chart", variant: "capital" },
      ],
      ctaLocation: "Mexico City, Mexico",
      logoMarqueeTitle: "Powered by leading prediction market infrastructure",
      polymarketTag: "Live Markets",
      polymarketTitle: "Real-Time Prediction Markets",
      polymarketDesc: "Enterprise markets filtered by corporate relevance for Mexico and LATAM.",
      polymarketPowered: "Data from Polymarket",
      polymarketYes: "Yes",
      polymarketNo: "No",
      polymarketVol: "24h Vol",
      polymarketLoading: "Loading markets...",
      polymarketCatGeopolitics: "Geopolitics",
      polymarketCatMacroeconomy: "Macro",
      polymarketCatRegulatory: "Regulatory",
      polymarketCatElections: "Elections",
      polymarketCatTechnology: "Technology",
      polymarketCatClimateEnergy: "Climate & Energy",
      polymarketCatPublicHealth: "Health",
      polymarketCatOther: "Market",
    },

    // ── Capital Landing ──
    capital: {
      heroTag: "Orbit Capital · Agentic Hedge Fund",
      heroTitle1: "Quantitative alpha in prediction markets.",
      heroTitle2: "The first quant hedge fund for prediction markets in Latin America.",
      heroDesc: "13 autonomous agents operate on a proprietary Knowledge Graph. Autonomous intelligence, institutional execution, and risk hedging — an algorithmic fund built on three pillars.",
      heroCta1: "Start Your Allocation",
      heroCta2: "Explore the Agentic Architecture",
      statsTag: "The Opportunity",
      statsTitle: "A $44B+ market with no institutional capital in LATAM.",
      statsDesc: "Active regulation (Kalshi/CFTC), 130x volume since 2024, and near-zero professional participation. The window is open.",
      statsValidation: "See full institutional validation →",
      engineTag: "Agentic Architecture",
      engineTitle1: "13 Agents. One Knowledge Graph.",
      engineTitle2: "Alpha that generates itself.",
      engineDesc: "No fixed algorithms. No conventional trading bots. Orbit Capital runs on 13 autonomous agents that navigate Orbit Risk's Knowledge Graph to find, validate, and execute opportunities in prediction markets. Risk builds the graph. Capital consumes it.",
      infraTag: "Infrastructure",
      infraTitle: "Institutional infrastructure from day one.",
      infraDesc: "Most emerging managers start with MetaMask and a spreadsheet. Not us.",
      termsTag: "Investment",
      termsTitle: "Fund Terms",
      termsCta1: "Request Fund Documents",
      termsCta2: "Schedule a Call",
      teamTag: "Team",
      teamTitle: "Founding Team",
      teamVerEquipo: "See full team →",
      ctaTitle1: "Ready to access",
      ctaTitle2: "uncorrelated alpha",
      ctaTitle3: "?",
      ctaDesc: "The window is open. If you want this fund in your portfolio, let's talk.",
      ctaCta1: "Start Your Allocation",
      ctaCta2: "Request Fund Documents",
      ctaLocation: "Mexico City, Mexico",
      ctaDisclaimer: "This document is for informational purposes only and does not constitute an offer to sell securities. Past performance does not guarantee future results. Consult your financial advisor before investing.",
      // Performance section
      perfTag: "Performance",
      perfTitle: "Consistent returns. Controlled risk.",
      perfDisclaimer: "Backtested track record from 12+ months of simulated trading on prediction market datasets. We publish these numbers because transparency shouldn't be optional — it's part of the product.",
      // Team section
      teamDesc: "We come from quantitative finance, cybersecurity, and technology. We've raised capital, closed enterprise deals, built systems at scale, and navigated regulated industries. All that discipline now goes into trading prediction markets.",
      // Trust section
      trustTag: "Trust",
      trustTitle: "Built by operators. Backed by data.",
      trustQuote: "\"The thesis is straightforward: if you build a Knowledge Graph that reflects reality better than the market, and agents that navigate it to trade, you can generate sustainable alpha. Prediction markets are the ideal arena — total transparency, instant settlement, and a space where agentic infrastructure makes all the difference.\"",
      trustQuoteAuthor: "— Orbit Capital Team",
      // Community section
      communityTag: "Community",
      communityTitle1: "The most active",
      communityTitle2: "prediction markets trading",
      communityTitle3: "community in Mexico.",
      communityDesc: "We don't just trade — we're building the largest prediction markets community in LATAM. Shared strategies, live courses, and direct mentorship from our team.",
      communityPlaceholder: "you@email.com",
      communityCta: "Join the community",
      communitySuccess: "Welcome to the team! 🚀",
      communityPerks: [
        { icon: "signal", title: "Weekly signals", desc: "Our trading signals and prediction market investment theses, delivered straight to your inbox." },
        { icon: "brain", title: "Learn live", desc: "Workshops on prediction markets, quantitative trading, and tools like Polymarket and Kalshi." },
        { icon: "trending", title: "Exclusive analysis", desc: "Reports on arbitrage opportunities, sentiment, and smart money moves you won't find elsewhere." },
        { icon: "rocket", title: "Trader network", desc: "Connect with other prediction market traders in Mexico and LATAM. Real networking and collaboration." },
      ],
      // Data arrays
      stats: [
        { value: "44B+", label: "Prediction Markets Volume 2025.", prefix: "$" },
        { value: "<0.2", label: "Correlation with S&P 500. Real diversification." },
        { value: "CFTC", label: "Institutional regulation (Kalshi)." },
        { value: "1st", label: "First systematic prediction markets fund in LATAM." },
      ],
      engineSteps: [
        { num: "01", title: "Knowledge Graph (Orbit Risk)", desc: "Atlas — an Orbit Risk agent — builds and maintains the Knowledge Graph with 5 node types and 5 edge types. Risk builds it, Capital consumes it. Every engagement enriches the graph." },
        { num: "02", title: "Signal Generation", desc: "Sirius, Kepler, and Proxima feed data into the graph. Vega and Trappist consume the Knowledge Graph to generate signals with quantified expected value and multi-dimensional pattern detection." },
        { num: "03", title: "Autonomous Execution", desc: "Rigel executes trades across multiple venues (Polymarket, Kalshi) with sub-second cycles. Gliese detects cross-market arbitrage and handles settlement. All driven by Knowledge Graph signals." },
        { num: "04", title: "Risk & Oversight", desc: "Polaris has override authority and kill-switches. Altair manages the portfolio with dynamic rebalancing. Centauri orchestrates all 13 agents. Full transparency: 24/7 NAV and LP dashboard." },
      ],
      metrics: [
        { value: "18%", label: "Net annual target return" },
        { value: ">1.5", label: "Sharpe Ratio (backtested)" },
        { value: "1.3+", label: "Profit Factor (backtested)" },
        { value: "<15%", label: "Maximum drawdown" },
        { value: "<0.2", label: "S&P 500 correlation" },
      ],
      infra: [
        { name: "Fireblocks", desc: "Institutional MPC custody. Multi-sig. Zero single point of failure. Same platform as BlackRock and Galaxy Digital.", icon: "shield" },
        { name: "TRES FinOS", desc: "Crypto-native accounting. Automated NAV, fees, reconciliation. No manual spreadsheets.", icon: "cpu" },
        { name: "Xero", desc: "Corporate general ledger integrated with crypto accounting.", icon: "building" },
        { name: "LP Portal (Grafana)", desc: "Your dashboard. Performance, composition, risk, and Proof of Funds — available 24/7.", icon: "signal" },
      ],
      terms: [
        { label: "Management Fee", value: "2.5% annual" },
        { label: "Performance Fee", value: "20% over 8% hurdle rate" },
        { label: "High-Water Mark", value: "Yes — we only charge performance on new gains" },
        { label: "Liquidity", value: "Monthly redemptions with 30-day notice" },
        { label: "Minimum allocation", value: "$1M MXN (~$57K USD)" },
        { label: "Reporting", value: "Monthly statements + real-time dashboard" },
      ],
      // Trading Strategies section
      strategiesTitle: "Five strategies. One Knowledge Graph.",
      strategiesDesc: "Each agent traverses a different path on the graph. Same intelligence, different opportunities.",
      strategies: [
        { name: "Directional Trading", badge: "35-40%", agents: "VEGA + RIGEL", desc: "Vega traverses the Knowledge Graph to detect pricing edge — the gap between our estimated probability and the market price. When the edge is clear, Rigel executes in under 150ms." },
        { name: "Cross-Market Arbitrage", badge: "20-25%", agents: "GLIESE", desc: "Gliese monitors correlation edges between markets on different venues. When spreads exceed fees, it executes simultaneously on both sides. Fully autonomous, latency-critical." },
        { name: "Event-Driven", badge: "15-20%", agents: "KEPLER + VEGA + RIGEL", desc: "Kepler detects breaking events before the market reprices. The Knowledge Graph maps Entity-Event exposures, so Vega instantly calculates second-order effects others take hours to figure out." },
        { name: "Systematic Volatility Selling", badge: "10-15%", agents: "TRAPPIST + VEGA + RIGEL", desc: "Trappist calibrates probabilities through multi-LLM consensus. We systematically sell overpriced tail-risk contracts where longshot bias inflates implied probability." },
        { name: "Market Making via Risk Demand", badge: "5-10%", agents: "RIGEL + ALTAIR", desc: "Our Risk vertical's hedging demand creates benign flow we can safely provide liquidity against. Capital earns the spread. Risk gets efficient hedging.", crossVertical: true },
      ],
      categoriesTitle: "Market Categories",
      categories: [
        { name: "Politics & Elections", pct: "35-45%" },
        { name: "Economy & Monetary Policy", pct: "25-35%" },
        { name: "Geopolitics & Regulation", pct: "10-20%" },
        { name: "Technology & Corporate", pct: "5-15%" },
        { name: "Climate & Natural Events", pct: "5-10%" },
      ],
      categoriesExcluded: "Excluded: Sports, cryptocurrency prices, celebrity events.",
      stepsTitle: "From your capital to alpha in six steps.",
      stepsDesc: "Invest in your preferred currency. Every dollar is traceable end to end.",
      investSteps: [
        { num: "01", title: "Commit Capital", desc: "Invest in MXN, USD, USDC, or USDT. Already hold stablecoins? Deposit directly to custody — no conversion needed. Fiat converts via Bridge by Stripe.", agent: "CENTAURI" },
        { num: "02", title: "Institutional Custody", desc: "Fireblocks MPC custody — $10T+ secured for institutions. Multi-party computation, Intel SGX enclaves, SOC 2 Type II.", agent: "ALTAIR" },
        { num: "03", title: "AI Agent Deployment", desc: "Altair disperses capital to purpose-built trading wallets via Coinbase Agentic Wallets. Session caps and per-transaction limits on every wallet.", agent: "ALTAIR" },
        { num: "04", title: "Autonomous Trading", desc: "13 agents trade prediction markets 24/7 on the Knowledge Graph. Sub-150ms execution on Polymarket. USDC settlement on Polygon.", agent: "RIGEL + GLIESE" },
        { num: "05", title: "Continuous Risk Management", desc: "Polaris monitors the portfolio subgraph in real-time. Override authority. Max 5% per market, daily drawdown caps, correlation limits.", agent: "POLARIS" },
        { num: "06", title: "Transparent Reporting", desc: "Daily NAV, monthly statements, performance attribution. Every movement traceable on the Knowledge Graph.", agent: "CASSIOPEIA" },
      ],
      currencyNote: "All capital settles in USDC for operational uniformity",

      // FAQ section
      faqTag: "FAQ",
      faqTitle: "Frequently asked questions about Orbit Capital",
      faqItems: [
        { q: "What is Orbit Capital?", a: "Orbit Capital is an agentic hedge fund — the first in LATAM — that trades prediction markets through a 13-agent autonomous infrastructure consuming Orbit Risk's unified Knowledge Graph. We don't use fixed algorithms: our agents traverse a living graph of entities, events, and relationships." },
        { q: "Which markets does the fund trade?", a: "We trade on Polymarket (international market) and Kalshi (CFTC-regulated in the US). Our agents — Rigel (execution) and Gliese (arbitrage) — cover political, economic, regulatory, and global event markets." },
        { q: "What is the Knowledge Graph?", a: "The Knowledge Graph is Orbit Risk's core infrastructure. It's a network with 5 node types (Entity, Event, Market, Asset, Source) and 5 edge types (Exposure, Correlation, Position, Dependency, Signal). Atlas — an Orbit Risk agent — builds it. Capital's agents consume it for trading. Every trade enriches the graph." },
        { q: "Who are the 13 agents?", a: "Each agent has a celestial name: Atlas (Graph Architect, Orbit Risk), Sirius/Kepler/Proxima (data), Vega/Trappist (intelligence), Rigel/Gliese (execution), Polaris/Altair (risk), and Centauri/Cassiopeia/Andromeda (operations). All operate 24/7 with their own wallets." },
        { q: "What is the expected return?", a: "The net annual return target is 18%, with a backtested Sharpe Ratio above 1.5 and maximum drawdown below 15%. Past performance does not guarantee future results." },
        { q: "What is the minimum investment?", a: "$1M MXN (~$57K USD). Includes access to the real-time LP dashboard, monthly statements, and dedicated team support." },
      ],
    },

    // ── Intel Landing ──
    intel: {
      heroTag: "Intelligence · Intelligence Engine",
      heroTitle1: "The brain behind everything Orbit does.",
      heroTitle2: "Knowledge Graphs + Prediction Markets + Alternative Signals.",
      heroDesc: "Our Intelligence is our intelligence infrastructure. It connects prediction markets, news, social signals, and alternative data into a Knowledge Graph that powers Capital's agents and Risk's hedging models.",
      heroCta1: "Learn About Orbit Capital",
      heroCta2: "Learn About Orbit Risk",
      painTag: "The Challenge",
      painTitle: "Why build our own intelligence infrastructure?",
      painDesc: "To run a quantitative fund and a hedging platform in LATAM, we needed data that simply didn't exist in the market.",
      pains: [
        "There was no real-time probability data for political, economic, and regulatory events in LATAM.",
        "Trading agents need deep regional context to make smart decisions.",
        "Traditional intelligence providers are expensive, deliver weekly PDFs, and don't support programmatic consumption.",
        "Social media data is noisy, unstructured, and impossible to turn into actionable signals.",
      ],
      productTag: "The Platform",
      productTitle1: "One Infrastructure. Multiple Capabilities.",
      productTitle2: "Every signal that moves a market.",
      productDesc: "Our Intelligence gathers probabilities from prediction markets, social intelligence from X (via Grok), and alternative sources, structuring it all into a Knowledge Graph that feeds Capital's agents and Risk's models.",
      verticalsTag: "Verticals",
      verticalsTitle: "Intelligence organized by every dimension that moves markets.",
      trustTag: "Our Advantage",
      trustTitle: "Why we don't buy third-party intelligence.",
      trustCards: [
        { title: "Orbit Capital", desc: "Intel feeds Capital's 13 agents so they trade prediction markets with the precision they need." },
        { title: "Orbit Risk", desc: "Risk's models consume Intel's Knowledge Graph to execute hedges based on real probabilities, not estimates." },
        { title: "Orbit Intel", desc: "The Knowledge Graph unifies all sources into a live graph consumed 24/7 by agents and models to understand LATAM like nobody else." },
      ],
      ctaTitle1: "Our own intelligence.",
      ctaTitle2: "Real advantage.",
      ctaDesc: "Our Intelligence is the engine behind every investment decision at Capital and every hedge at Risk. Infrastructure built from scratch in CDMX to understand LATAM like nobody else can.",
      ctaCta1: "Learn About Orbit Capital",
      ctaCta2: "Learn About Orbit Risk",
      ctaLocation: "Mexico City, Mexico",
      ctaDisclaimer: "Our Intelligence is proprietary internal infrastructure of the Orbit ecosystem. It is not a commercial product and is not available for licensing.",
      // Data sources section (previously Integrations)
      integrationsTag: "Data Sources",
      integrationsTitle: "The sources that feed our Knowledge Graph.",
      // Data arrays
      verticals: [
        { name: "Political", icon: "scale", q: "Who will win? What policies will pass?", use: "Feeds trading agents and Orbit's political risk models." },
        { name: "Economic", icon: "trending", q: "What will the central bank do? Inflation? Recession?", use: "Signals for Orbit's treasury agents, FX, and credit models." },
        { name: "Regulatory", icon: "shield", q: "Will this reform pass? How does it affect the portfolio?", use: "Data for Orbit Risk's compliance models and regulatory hedges." },
        { name: "Energy", icon: "rocket", q: "Oil prices? Energy policy?", use: "Intelligence for energy positions and operational hedges." },
        { name: "Climate", icon: "globe", q: "Agricultural yields? Drought?", use: "Signals for parametric insurance models and supply chain analysis." },
        { name: "Real Estate", icon: "building", q: "Infrastructure? Nearshoring?", use: "Data for investment theses and real estate exposure analysis." },
        { name: "Insurance", icon: "chart", q: "Real event probability? Risk pricing?", use: "Calibrated probabilities for dynamic hedging and parametric coverage." },
      ],
      integrations: [
        { name: "Prediction Markets", desc: "Polymarket, Kalshi, and other prediction markets as primary sources of real-time consensus probabilities." },
        { name: "X / Grok", desc: "Real-time social sentiment analysis powered by Grok. Threads, trends, and public opinion signals." },
        { name: "Official Sources", desc: "INEGI, Banxico, DOF, SEC, and other governmental and regulatory sources from Mexico and LATAM." },
        { name: "Alternative Signals", desc: "Satellite data, trade flows, economic activity indicators, and other unconventional sources." },
        { name: "Knowledge Graph", desc: "Everything converges into a unified graph with 5 node types and 5 edge types consumed 24/7 by Orbit's agents." },
      ],
      // Product section
      consoleLabel: "Internal interfaces",
      consoleFeatures: [
        "Real-time probability dashboards across 7 verticals",
        "X thread explorer with sentiment analysis",
        "What-if scenario builder for thesis validation",
        "Configurable smart alerts for investment teams",
        "ORBIT AI Copilot — intelligence assistant for the Orbit team",
      ],
      apiLabel: "For Orbit's agents",
      apiFeatures: [
        "Internal REST, GraphQL, and WebSocket endpoints",
        "Real-time probabilities, X sentiment, entities, events",
        "Semantic embeddings and contextual search across the Knowledge Graph",
        "Native feeds for Orbit Capital's 13 autonomous agents",
        "LATAM context in milliseconds for trading and hedging decisions",
      ],
      // FAQ section
      faqTag: "FAQ",
      faqTitle: "Frequently asked questions about Our Intelligence",
      faqItems: [
        { q: "What is Our Intelligence?", a: "Our Intelligence is Orbit's proprietary internal intelligence platform. It is not a commercial product or SaaS — it is the infrastructure that powers the entire Orbit ecosystem, from Orbit Capital's trading agents to Orbit Risk's hedging models." },
        { q: "What type of data does it process?", a: "It processes real-time probabilities from prediction markets, social sentiment from X via Grok, official data from INEGI, Banxico, and DOF, and alternative signals — all unified in a Knowledge Graph with entities, events, markets, assets, and sources." },
        { q: "How does it feed Orbit Capital?", a: "Our Intelligence is the data and insights source that Orbit Capital's 13 autonomous agents consume to make trading decisions in prediction markets. Every trade enriches the Knowledge Graph, creating a virtuous intelligence cycle." },
        { q: "How does it connect with Orbit Risk?", a: "Orbit Risk consumes our Intelligence's Knowledge Graph to model enterprise exposures and execute hedges with precision. Real-time probabilities enable dynamic pricing and parametric hedging." },
        { q: "Is Our Intelligence available as a product?", a: "No. Our Intelligence is proprietary internal infrastructure. It is not sold or licensed. It is the competitive advantage that makes Orbit Capital and Orbit Risk possible." },
      ],
    },

    // ── Team Page ──
    team: {
      heroTag: "Team",
      heroTitle: "Who we are",
      heroDesc: "A team that brings together quantitative finance, technology, and cybersecurity.",
      foundersTag: "Founders",
      foundersTitle: "Founding Team",
      advisorsTag: "Advisors",
      advisorsTitle1: "Advisory Board",
      advisorsTitle2: "(In Formation)",
      advisorsDesc: "High-level profiles in key areas for credibility and strategic knowledge.",
      enBusqueda: "Searching",
      bioJavier: "Built and scaled energy infrastructure operations and solar projects in Mexico for over a decade. Expertise in navigating highly regulated industries — energy, finance, government. Drives the convergence of AI + fintech in emerging markets from the operational side.",
      bioSebastian: "International Math Olympiad competitor. Quantitative engineer with an economics research background at ITAM. Led data teams at multinational tech companies in LATAM. Architect of the full stack: data pipelines, predictive models, automated execution, and risk infrastructure.",
      bioRodrigo: "5+ years in quantitative trading in crypto and equities. Founded a prop trading firm and raised capital from international investors. Deep expertise in statistical arbitrage, derivatives, market microstructure, and risk management. Designs and oversees all of Orbit Capital's investment strategies.",
      bioTono: "Co-founder & Co-CEO of Delta Protect — LATAM's leading cybersecurity and compliance company, with 300+ enterprise clients including unicorns and Fortune 500 corporates. Expertise in technology architecture, AI transformation at scale, enterprise distribution, and product governance.",
      aiTag: "AI-Native Operations",
      aiTitle: "AI-Native",
      aiTitlePrefix: "Operations",
      aiHero: "We didn't hire an army of analysts. We built 13 autonomous agents that operate 24/7 on Orbit Risk's Knowledge Graph. Each one has its own wallet, real-time data access, and authority to act. Humans supervise. Machines execute.",
      aiStats: [
        { label: "Active Agents", value: "13", sub: "complete agentic infrastructure" },
        { label: "Continuous Operations", value: "24/7", sub: "autonomous execution" },
        { label: "Philosophy", value: "AI-First", sub: "humans supervise, machines execute" },
      ],
      aiPillars: [
        { title: "13 Autonomous Agents", desc: "From Sirius (data ingestion) to Polaris (override authority), each agent consumes Orbit Risk's Knowledge Graph to trade prediction markets with sub-second cycles." },
        { title: "Knowledge Graph-Driven", desc: "Agents don't execute fixed rules — they traverse a living Knowledge Graph of entities, events, and relationships. Risk builds it, Capital consumes it. Every operation enriches the graph." },
        { title: "Zero-Trust Execution", desc: "Every agent operates with minimal permissions, full audit trails, and automatic kill-switches. Polaris has override authority over all execution." },
      ],
      aiForce: "The ultimate competitive advantage:",
      aiForceDesc: "While traditional funds spend millions on payroll, we invest in infrastructure that scales without friction. Every dollar saved in back-office is a dollar generating alpha. This is why a lean team can compete against trading desks with hundreds of people.",
    },

    // ── Agents Page ──
    agents: {
      heroTag: "Agentic Infrastructure",
      heroTitle: "13 Agents. One Knowledge Graph. Autonomous Alpha.",
      heroDesc: "13 AI agents operating 24/7 on Orbit Risk's Knowledge Graph. Each one with its own wallet, real-time data, and authority to act. Humans supervise. Machines execute.",
      philosophyTag: "Philosophy",
      philosophyTitle: "Agents on Knowledge Graphs, not fixed rules",
      philosophyDesc: "No bots with if/else logic. We build agents that navigate a living Knowledge Graph — a network of entities, events, markets, and relationships that grows with every operation. Risk builds the graph. Capital consumes it for signals.",
      stats: [
        { value: "13", label: "Active Agents", sub: "complete agentic infrastructure" },
        { value: "24/7", label: "Continuous Ops", sub: "zero downtime" },
        { value: "5→20", label: "Multiplier", sub: "team of 5 outputs like 20" },
        { value: "1", label: "Knowledge Graph", sub: "built by Orbit Risk" },
      ],
      catalogTag: "Agent Catalog",
      catalogTitle: "The Team That Never Sleeps",
      catalogDesc: "13 agents organized in 6 layers. Each with a specific role within the ecosystem.",
      agents: [
        { name: "Atlas", role: "Graph Architect", celestialType: "planet", icon: "globe", color: "#00D4AA", area: "Graph", desc: "Orbit Risk agent. Builds and maintains the unified Knowledge Graph with five node types (Entity, Event, Market, Asset, Source) and five edge types (Exposure, Correlation, Position, Dependency, Signal). The graph compounds with every operation.", capabilities: ["Knowledge Graph construction", "Dynamic ontology", "Edge validation", "Continuous enrichment"], ownerBadge: "Orbit Risk" },
        { name: "Sirius", role: "Data Ingestion", celestialType: "star", icon: "signal", color: "#3B82F6", area: "Data", desc: "The brightest star in the sky feeds Risk's Knowledge Graph with prediction market data, order books, and institutional feeds. Primary ingestion of structured real-time data.", capabilities: ["Prediction market ingestion", "Order book analysis", "Institutional feeds", "Data normalization"] },
        { name: "Kepler", role: "Social Scanner", celestialType: "planet", icon: "search", color: "#6366F1", area: "Data", desc: "Like the telescope it's named after, Kepler scans the social universe. Processes X sentiment (powered by Grok) and detects narrative shifts that feed the Knowledge Graph.", capabilities: ["Social sentiment (X/Grok)", "Narrative detection", "Spanish NLP", "Pre-market signals"] },
        { name: "Proxima", role: "Real-time Data", celestialType: "star", icon: "bolt", color: "#818CF8", area: "Data", desc: "The nearest star to the system. Alternative data sourcing and real-time enrichment: regulatory flows, LATAM news, macro data, and geopolitical events.", capabilities: ["Alternative data", "Regulatory monitoring", "Geopolitical events", "Real-time enrichment"] },
        { name: "Vega", role: "Signal Generator", celestialType: "star", icon: "cpu", color: "#8B5CF6", area: "Intelligence", desc: "One of the brightest stars in the sky. Vega consumes the Knowledge Graph to generate trading signals with quantified expected value. Microstructure analysis and opportunity detection.", capabilities: ["Signal generation", "Quantified expected value", "Market microstructure", "Knowledge Graph consumption"] },
        { name: "Trappist", role: "Pattern Recognition", celestialType: "system", icon: "brain", color: "#A855F7", area: "Intelligence", desc: "Like the TRAPPIST-1 system with its multiple planets, this agent detects multi-dimensional patterns. Probability estimation, market regime recognition, and forecasting.", capabilities: ["Pattern recognition", "Probability estimation", "Regime detection", "Multi-dimensional forecasting"] },
        { name: "Rigel", role: "Trade Executor", celestialType: "giant", icon: "chart", color: "#10B981", area: "Execution", desc: "The blue supergiant of Orion. Rigel executes trades across multiple venues (Polymarket, Kalshi) with sub-second cycles. Smart routing, dynamic sizing, and Knowledge Graph-driven execution.", capabilities: ["Sub-second execution", "Multi-venue smart routing", "Dynamic sizing", "KG-driven execution"] },
        { name: "Gliese", role: "Arbitrage & Settlement", celestialType: "star", icon: "trending", color: "#34D399", area: "Execution", desc: "Cross-market arbitrage detection and trade settlement. Gliese reconciles positions, manages settlements, and maintains portfolio operational integrity.", capabilities: ["Cross-market arbitrage", "Automated settlement", "Position reconciliation", "Operational integrity"] },
        { name: "Polaris", role: "Override Authority", celestialType: "star", icon: "shield", color: "#F59E0B", area: "Risk", desc: "The North Star. Polaris has override authority over all execution agents. Continuous exposure monitoring, automatic kill-switches, and risk limit enforcement.", capabilities: ["Override authority", "Automatic kill-switches", "Exposure monitoring", "Limit enforcement"] },
        { name: "Altair", role: "Portfolio Manager", celestialType: "star", icon: "scale", color: "#FBBF24", area: "Risk", desc: "The eagle of the sky. Altair manages the portfolio at a macro level: dynamic rebalancing, cross-position correlation, drawdown management, and risk-adjusted optimization.", capabilities: ["Portfolio management", "Dynamic rebalancing", "Drawdown management", "Risk-adjusted optimization"] },
        { name: "Centauri", role: "Orchestrator", celestialType: "star", icon: "rocket", color: "#EC4899", area: "Operations", desc: "The nearest star system to the Sun. Centauri orchestrates all 13 agents: task routing, scheduling, regulatory compliance monitoring, and audit trail maintenance.", capabilities: ["Agent orchestration", "Task routing", "Regulatory compliance", "Audit trails"] },
        { name: "Cassiopeia", role: "Reporting", celestialType: "nebula", icon: "briefcase", color: "#F472B6", area: "Operations", desc: "The constellation that's always visible. Cassiopeia automatically generates performance reports, market analysis, and fund documentation. Distributes to stakeholders in required formats.", capabilities: ["Performance reports", "Market analysis", "Fund documentation", "Automatic distribution"] },
        { name: "Andromeda", role: "Communications", celestialType: "galaxy", icon: "globe", color: "#FB7185", area: "Operations", desc: "The neighboring galaxy. Andromeda manages CRM, investor relations, social media content, newsletters, and external communications. Keeps Orbit's presence active 24/7.", capabilities: ["Automated CRM", "Investor relations", "Social content", "Newsletters & press"] },
      ],
      architectureTag: "Architecture",
      architectureTitle: "Zero-Trust on Knowledge Graph",
      architectureDesc: "Every agent operates under the principle of least privilege. Orbit Risk's Knowledge Graph is the source of truth: Capital consumes, Risk builds, and every operation enriches the graph.",
      archPillars: [
        { title: "Knowledge Graph", desc: "Five node types (Entity, Event, Market, Asset, Source) and five edge types (Exposure, Correlation, Position, Dependency, Signal). Built by Orbit Risk, consumed by Capital.", icon: "globe" },
        { title: "Minimal Permissions", desc: "Each agent only accesses the graph nodes and edges it needs. Nothing more.", icon: "shield" },
        { title: "Full Audit Trail", desc: "Every graph traversal, every signal generated, every trade executed is logged.", icon: "search" },
        { title: "Kill-Switches", desc: "Polaris has override authority. Any agent can be stopped instantly.", icon: "bolt" },
      ],
      advantageTag: "Flywheel",
      advantageTitle: "The Knowledge Graph gets stronger with every operation",
      advantageDesc: "More Risk clients = deeper graph = better Capital signals = more enrichment. Every trade validates connections. Every Risk engagement deepens the ontology. The Knowledge Graph compounds with usage — this advantage amplifies itself over time.",
    },

    // ── Contact Modal ──
    modal: {
      capitalTitle: "Start investing",
      intelTitle: "Get early access",
      capitalDesc: "Leave your details and someone from the team will reach out with the fund docs.",
      intelDesc: "Tell us about your company and we'll get you access to the platform.",
      name: "Name",
      email: "Email",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@email.com",
      company: "Company",
      companyFO: "Company / Family Office",
      companyPlaceholder: "Entity name",
      companyIntelPlaceholder: "Company name",
      investmentRange: "Investment Range",
      select: "Select...",
      howDidYouHear: "How did you hear about us?",
      referral: "Personal referral",
      linkedin: "LinkedIn",
      event: "Event / Conference",
      search: "Internet search",
      other: "Other",
      role: "Title",
      rolePlaceholder: "Your title",
      vertical: "Vertical of Interest",
      companySize: "Company Size",
      size1: "Less than 50 employees",
      size2: "50 – 200 employees",
      size3: "200 – 1,000 employees",
      size4: "More than 1,000 employees",
      messageLabel: "Message (optional)",
      useCaseLabel: "Use Case",
      messagePlaceholder: "Anything we should know?",
      useCasePlaceholder: "How do you plan to use Our Intelligence?",
      submitCapital: "Request Documentation",
      submitIntel: "Request Access",
      thanks: "Thank You!",
      thanksCapital: "We'll contact you soon with the fund documents.",
      thanksIntel: "We'll send you platform access shortly.",
      disclaimerCapital: "For qualified investors only. This is not a solicitation to invest.",
      disclaimerIntel: "We'll respond within 24 hours.",
      planInterest: "Plan of Interest",
      planStarter: "Starter — Startups & SMBs",
      planProfessional: "Professional — Mid-size companies",
      planEnterprise: "Enterprise — Corporates & funds",
      planAIPlatform: "AI Platform — Integrations at scale",
      riskTitle: "Get your Orbit Risk demo",
      riskDesc: "Tell us about your company and we'll show you how Orbit Risk can shield your operations.",
      riskIndustry: "Industry",
      riskIndustryPlaceholder: "Select...",
      riskIndustryManufacturing: "Manufacturing",
      riskIndustryEnergy: "Energy",
      riskIndustryAgriculture: "Agriculture / Agribusiness",
      riskIndustryLogistics: "Logistics / Foreign trade",
      riskIndustryFinancial: "Financial services",
      riskIndustryRealEstate: "Real estate",
      riskIndustryRetail: "Retail / Consumer",
      riskIndustryTech: "Technology",
      riskIndustryOther: "Other",
      riskExposures: "Tell us about your exposures",
      riskExposuresPlaceholder: "What operational risks does your business face? (tariffs, FX, regulation, etc.)",
      submitRisk: "Request Demo",
      thanksRisk: "We'll contact you soon to schedule a demo.",
      disclaimerRisk: "Orbit Risk is under active development.",
      // Unified contact form
      contactTitle: "Let's talk",
      contactDesc: "Tell us about your company and which product interests you. We'll get back to you within 24 hours.",
      phone: "Phone (optional)",
      phonePlaceholder: "+1 555 123 4567",
      productInterest: "Which product interests you?",
      productIntel: "Our Intelligence — Market Intelligence",
      productRisk: "Orbit Risk — Operational Hedging",
      productCapital: "Orbit Capital — Quantitative Fund",
      submitContact: "Send",
      thanksContact: "We'll contact you within 24 hours.",
      disclaimerContact: "Your information is safe. We don't share data with third parties.",
    },

    // ── Risk Landing ──
    risk: {
      heroTag: "Operational hedging",
      heroTitle1: "Capital's intelligence, applied",
      heroTitle2: "to your business.",
      heroDesc: "Orbit Risk turns uncertainty into real hedges. We identify your exposures, quantify them, and cover them with prediction market positions.",
      heroCta1: "Request Demo",
      heroCta2: "View Exposures",
      riskCtaWaitlist: "Join the waitlist",
      experimentalBanner: "EXPERIMENTAL PHASE — Orbit Risk is under active development. Join the waitlist for early access.",
      experimentalLabel: "Experimental Phase",
      processTag: "The Process",
      processTitle: "Three steps. From exposure to hedge.",
      processDesc: "",
      processSteps: [
        { num: "01", title: "Connect your operations", desc: "We connect your business data: revenue by market, cost structure, supply chain, currency exposure. Our AI system automatically identifies the exogenous drivers that affect your operations." },
        { num: "02", title: "Map your risks", desc: "Each exposure is translated to specific prediction market contracts: US-Mexico tariffs, Banxico monetary policy, CNBV regulatory changes, elections, oil prices." },
        { num: "03", title: "Execute the hedge", desc: "Orbit Capital executes the optimal combination of positions as your operational hedge. Continuous monitoring. Dynamic rebalancing. Real-time reports." },
      ],
      exposuresTag: "Exposures",
      exposuresTitle: "Unhedged risks in LATAM.",
      exposuresDesc: "Businesses lack efficient instruments to hedge against political, economic, or climate volatility. Until now.",
      exposures: [
        { title: "Tariffs and trade policy", desc: "Protection against changes in US-LATAM tariffs, trade restrictions, and treaty renegotiations." },
        { title: "MXN/USD exchange rate", desc: "Hedge against peso depreciation and currency volatility that affects costs and revenue." },
        { title: "Financial regulation", desc: "Protection against regulatory changes from CNBV, SHCP, and other bodies that impact your sector." },
        { title: "Energy policy", desc: "Hedge against changes in CFE policy, electricity reform, and energy prices." },
        { title: "Nearshoring disruptions", desc: "Protection against events that affect investment flows and regional supply chains." },
        { title: "Political and electoral risk", desc: "Hedge against electoral outcomes, government changes, and disruptive political decisions." },
        { title: "Commodities and supply chain", desc: "Protection against commodity price volatility and logistics disruptions." },
      ],
      archTag: "Architecture",
      archTitle: "Three layers. One hedge.",
      archDesc: "Every protection position goes through intelligence, risk design, and institutional execution.",
      archSteps: [
        { title: "Our Intelligence", desc: "Detects changes in risk event probabilities in real time. Feeds signals to the Risk engine.", icon: "cpu" },
        { title: "Orbit Risk", desc: "Translates signals into optimized hedges. Designs the protection portfolio for your business.", icon: "shield" },
        { title: "Orbit Capital", desc: "Executes positions in prediction markets with institutional infrastructure. 24/7 monitoring.", icon: "chart" },
      ],
      formTag: "Request Demo",
      formTitle: "Protect your operations today",
      formDesc: "Tell us about your company and an Orbit Risk specialist will contact you for a personalized demo.",
      formName: "Name",
      formNamePlaceholder: "Your name",
      formCompany: "Company",
      formCompanyPlaceholder: "Company name",
      formEmail: "Email",
      formEmailPlaceholder: "you@company.com",
      formPhone: "Phone (optional)",
      formPhonePlaceholder: "+1 555 123 4567",
      formMessage: "Tell us about your exposures",
      formMessagePlaceholder: "What operational risks does your company face?",
      formSubmit: "Request Demo",
      formSuccess: "Thank you! We'll contact you soon to schedule your demo.",
      formDisclaimer: "Orbit Risk is under active development. Demo subject to availability.",
      // Why section
      whyTag: "Why Orbit Risk",
      whyTitle: "Hedging that actually works in LATAM.",
      whyDesc: "OTC derivatives weren't designed for emerging markets. Orbit Risk was.",
      whyMetrics: [
        { value: 7, suffix: "", prefix: "", label: "Exposure types covered" },
        { value: 24, suffix: "/7", prefix: "", label: "Continuous monitoring" },
        { value: 3, suffix: "", prefix: "", label: "Integrated ecosystem layers" },
        { value: 48, suffix: "h", prefix: "<", label: "Target activation time" },
      ],
      whyTraditionalTitle: "Traditional hedging",
      whyTraditionalItems: [
        "Expensive and illiquid OTC derivatives",
        "Weeks of negotiation and documentation",
        "Minimum amounts of $10M+",
        "No coverage for political risk",
        "Designed for developed markets",
      ],
      whyOrbitTitle: "Orbit Risk",
      whyOrbitItems: [
        "Liquid and transparent prediction markets",
        "Activation in under 48 hours",
        "No high minimums",
        "Political, regulatory, and macro coverage",
        "Designed specifically for LATAM",
      ],
      // Use Cases section
      casesTag: "Use Cases",
      casesTitle: "Hedges by industry.",
      casesDesc: "Every sector has different exposures. Every hedge is different.",
      casesResult: "Result with Orbit Risk",
      cases: [
        {
          icon: "building",
          industry: "Manufacturing",
          title: "Mexican exporter to the U.S.",
          scenario: "A manufacturing company exports 40% of its production to the United States. A tariff increase would put $2.3M USD of quarterly revenue at risk.",
          result: "Orbit Risk detects the probability of new tariffs in advance and executes a hedge designed to cover a significant portion of the potential impact.",
        },
        {
          icon: "bank",
          industry: "Fintech",
          title: "CNBV-regulated fintech",
          scenario: "A payments fintech operates under CNBV regulation. A regulatory change could require additional capital of $5M USD within 90 days.",
          result: "Orbit Risk monitors probabilities of regulatory changes and maintains an active hedge that protects against unexpected compliance costs.",
        },
        {
          icon: "globe",
          industry: "Nearshoring",
          title: "LATAM logistics company",
          scenario: "A logistics company depends on nearshoring flows. US-China-Mexico trade tensions could reduce volumes by 30%.",
          result: "Orbit Risk maps 6 prediction market contracts correlated with nearshoring flows and designs a dynamic protection portfolio.",
        },
      ],
      // FAQ section
      faqTag: "FAQ",
      faqTitle: "Frequently asked questions about Orbit Risk",
      faqItems: [
        { q: "What are operational hedges?", a: "They are positions in prediction markets designed to offset the financial impact of external events on your operations — such as tariffs, regulatory changes, or currency depreciation." },
        { q: "Is it legal to trade on prediction markets?", a: "Yes. Polymarket operates internationally and Kalshi is regulated by the CFTC in the United States. Orbit Capital executes positions through regulated institutional infrastructure." },
        { q: "What is the cost of hedges?", a: "The cost depends on the type and level of exposure. It's generally a fraction of the risk covered — comparable to an insurance premium but with greater transparency and liquidity." },
        { q: "How long does it take to activate a hedge?", a: "From the initial assessment, hedges can be active in under 48 hours. Monitoring and rebalancing are continuous and automated." },
        { q: "What happens if the risk event doesn't occur?", a: "The cost of the hedge is limited and known in advance. Similar to an insurance premium that isn't claimed — you pay for the protection, not for the event." },
      ],

      // Platform Features section
      platformTag: "The Platform",
      platformTitle: "Autonomous intelligence stack 24/7.",
      platformDesc: "Data, models, and institutional execution in a single platform.",
      platformFeatures: [
        {
          icon: "cpu",
          title: "AI Risk Engine",
          desc: "Our artificial intelligence engine continuously analyzes signals from prediction markets, social media, and macro indicators to identify threats to your operations before they impact.",
        },
        {
          icon: "signal",
          title: "Real-time monitoring",
          desc: "24/7 dashboard with configurable alerts. Visualize your net exposure, key event probabilities, and active hedge status in a single panel.",
        },
        {
          icon: "shield",
          title: "Institutional execution",
          desc: "Your hedges are executed through Orbit Capital's infrastructure: Fireblocks custody, TRES FinOS accounting, multi-venue routing, and automated settlement.",
        },
        {
          icon: "chart",
          title: "Reports and transparency",
          desc: "Monthly exposure reports, hedge performance, costs, and ROI. All the information your CFO needs to justify the investment in protection.",
        },
        {
          icon: "globe",
          title: "Multi-market coverage",
          desc: "Cover risks in Mexico, Brazil, Colombia, Chile, and Argentina. Our engine translates local exposures into liquid global contracts.",
        },
        {
          icon: "brain",
          title: "Integration API",
          desc: "Connect Orbit Risk with your ERP, treasury system, or data warehouse. Documented REST API with SDKs for Python and Node.js.",
        },
      ],

      // Metrics section
      metricsTag: "Design",
      metricsTitle: "Real protection. Real metrics.",
      metricsDesc: "Orbit Risk is designed to offer transparent and measurable operational coverage.",
      metricsItems: [
        { value: "7", label: "Exposure types covered in LATAM", icon: "globe" },
        { value: "<48h", label: "Target hedge activation time", icon: "rocket" },
        { value: "24/7", label: "Continuous exposure monitoring", icon: "cpu" },
        { value: "3", label: "Integrated ecosystem layers (Intel + Risk + Capital)", icon: "signal" },
      ],

      // Trust / Social Proof section
      trustTag: "Trust",
      trustTitle: "LATAM operates blind in the face of uncertainty.",
      trustDesc: "Orbit Risk is backed by the same institutional infrastructure that operates Orbit Capital and Our Intelligence.",
      trustPillars: [
        {
          icon: "building",
          title: "Institutional infrastructure",
          desc: "Custody with Fireblocks (the same platform as BlackRock). Accounting with TRES FinOS. No spreadsheets. No single points of failure.",
        },
        {
          icon: "brain",
          title: "AI-Native from day one",
          desc: "12+ AI agents operating 24/7. Every risk signal, every rebalance, every report is processed by our models. Humans supervise. Machines execute.",
        },
        {
          icon: "shield",
          title: "Cybersecurity team",
          desc: "Founded by enterprise cybersecurity experts with experience protecting the largest organizations in Latin America.",
        },
      ],
      trustQuote: "\"If prediction markets can predict elections better than polls, imagine what they can do for your operational exposure.\"",
      trustQuoteAuthor: "— Orbit Risk Team",

      // Security & Compliance section
      securityTag: "Security",
      securityTitle: "Institutional infrastructure from day one.",
      securityDesc: "The same infrastructure used by the world's largest institutions.",
      securityItems: [
        { icon: "shield", title: "End-to-end encryption", desc: "All your company information is transmitted and stored with AES-256 encryption. Your data is never shared with third parties." },
        { icon: "cpu", title: "SOC 2 infrastructure", desc: "Our infrastructure providers (Fireblocks, AWS) comply with SOC 2 Type II. Quarterly security audits." },
        { icon: "scale", title: "Regulatory compliance", desc: "Orbit Capital operates under recognized regulatory frameworks. Hedge positions are executed on regulated markets (Kalshi — CFTC) and institutional platforms." },
        { icon: "building", title: "Fund segregation", desc: "Each client's hedge funds are completely segregated. MPC custody with multi-signature. No commingling." },
      ],
    },

    // ── Whitepaper ──
    whitepaper: {
      heroTag: "Whitepaper",
      heroTitle: "Orbit: Predictive Intelligence, Operational Hedging, and Quantitative Trading Infrastructure for Emerging Markets",
      heroSubtitle: "An institutional framework for the monetization of probabilistic signals in Latin America",
      toc: "Contents",
      footnotesLabel: "References",
      footnotes: [
        "¹ The Block (2025). \"Prediction markets explode in 2025: Inside the Kalshi-Polymarket duopoly.\" Combined Polymarket + Kalshi volume >$38B; total market volume >$44B.",
        "² Bank for International Settlements (2025). \"OTC derivatives statistics at end-June 2025.\" Notional outstanding: $846T (+16% YoY). Only 10% of global derivatives turnover in EME currencies.",
        "³ Precedence Research (2025). \"AI Agents in Financial Services Market Size 2025–2035.\" Market valued at $1.79B in 2025, projected to $6.54B by 2035.",
        "⁴ IMF Country Report No. 25/286 (2025). \"Mexico.\" GDP growth: 0.4% in 2025.",
        "⁵ Focus Economics (2025). \"Mexico's Economy 2025: US Tariffs, Remittances & GDP Forecast.\" Average US tariffs on Mexican goods: 15.8%.",
        "⁶ Wilson Center (2025). \"Economic Impact Analysis of US Tariffs on Mexico.\" Estimated export losses: $26–42B.",
        "⁷ EBC Financial Group (2025). \"Is the Mexican Peso Getting Stronger in 2025?\" MXN/USD range: 21.13–18.44.",
        "⁸ BIS Triennial Central Bank Survey (2025). Daily FX turnover: $9.5T (+27% vs 2022); OTC currency options doubled from $303B to $634B (2022–2025).",
        "⁹ The Block / Dune Analytics (2025). Monthly users grew from ~4,000 to 600,000+; monthly transactions from 240K to 43M+.",
        "¹⁰ Phemex (2025). \"Polymarket and Kalshi Hit Record $40B Trading Volume.\" Kalshi raised $300M+ at $5B valuation; Polymarket targeting $12–15B.",
        "¹¹ Sidley Austin LLP (2026). \"U.S. CFTC Signals Imminent Rulemaking on Prediction Markets.\" Chairman Selig's 4-pillar regulatory agenda.",
        "¹² IMARC Group (2025). \"Latin America Fintech Market Size, Share and Forecast.\" $13.14B (2024) → $49.58B (2033), CAGR 15.9%.",
        "¹³ Mexico News Daily (2025). \"Foreign direct investment in Mexico climbs to record $40.9B.\" 14.5% YoY increase.",
        "¹⁴ J.P. Morgan Private Bank (2026). \"Latin America in 2026: Between Promise and Pressure.\"",
        "¹⁵ Princeton University / Hommel (2025). \"Nonfinancial Firms Hedging Currency Risk.\" ~50% of exposure hedged; residual variance 8–15% higher without derivatives.",
        "¹⁶ UiPath (2025). \"2025 Agentic AI Report.\" 93% of IT executives prioritize agentic automation.",
        "¹⁷ Cryptopolitan (2026). \"SEC signals possible oversight of surging $63.5B prediction market sector.\"",
        "¹⁸ ISDA (2026). \"Key Trends in the Size and Composition of OTC Derivatives Markets in H1 2025.\" Gross market value grew 29% to $21.8T.",
      ],
      sections: [
        {
          id: "abstract",
          title: "Executive Summary",
          content: [
            "This document presents the investment thesis and technical architecture of the Orbit ecosystem: an integrated platform for predictive intelligence, operational hedging, and quantitative trading designed for emerging markets, with an initial focus on Latin America.",
            "Orbit operates at the convergence of three structural trends: (i) the consolidation of prediction markets as institutional financial infrastructure, with global volume exceeding $44 billion in 2025¹; (ii) the absence of efficient hedging instruments for operational risk in emerging economies, where only 10% of global derivatives turnover corresponds to emerging market currencies²; and (iii) the emergence of autonomous AI agents in financial services, a $1.79 billion market in 2025 projected to reach $6.54 billion by 2035³.",
            "Orbit builds a three-layer flywheel — data, protection, and validation — where each component reinforces the others. This integrated model has no direct analog in the current market and positions Orbit as mission-critical infrastructure for decision-making under uncertainty in the region.",
          ],
        },
        {
          id: "problem",
          title: "The Problem: Structural Risk Without Efficient Hedging",
          content: [
            "Businesses operating in Latin America face a persistent uncertainty regime that lacks proportional hedging instruments. In 2025, Mexico's GDP grew just 0.4%⁴, while average U.S. tariffs on Mexican goods reached 15.8%⁵, generating estimated export losses between $26 and $42 billion across sectors including automotive, electronics, and textiles⁶. The Mexican peso oscillated between 21.13 and 18.44 per dollar within a single year⁷ — a level of volatility that no conventional instrument hedges efficiently for mid-market companies.",
            "The global OTC derivatives market reached a notional value of $846 trillion as of June 2025 — a 16% year-over-year increase, the largest since 2008². Yet only 10% of that volume corresponds to emerging market economy currencies, a proportion significantly below these economies' share of global GDP or international trade². Available instruments — forwards, swaps, parametric insurance — are expensive, illiquid, and structured for institutional counterparties in developed markets. OTC currency options doubled their daily volume between 2022 and 2025, from $303 billion to $634 billion⁸, evidencing unmet demand for alternative hedging. According to Princeton research, approximately 50% of global corporate currency exposure remains unhedged, increasing cash flow variance by 8% to 15%¹⁵.",
            "Simultaneously, corporate strategy and treasury teams operate with asymmetric information: outdated surveys, politically biased polls, and fragmented analysis. No institutional source of real-time calibrated consensus probability data exists for events that directly impact business operations in the region. This information gap represents a quantifiable opportunity cost for every decision made under uncertainty in LATAM.",
          ],
        },
        {
          id: "insight",
          title: "The Insight: Prediction Markets as Financial Infrastructure",
          content: [
            "Prediction markets simultaneously solve both the information deficit and the hedging instrument gap. They function as price discovery mechanisms where participants with their own capital at risk express expectations about future events, generating the most accurate source of real-time consensus probabilities — with calibrated accuracy superior to surveys, econometric models, and expert panels.",
            "In 2025, total prediction market volume surpassed $44 billion¹. Polymarket recorded $21.5 billion and Kalshi $17.1 billion in trading volume. The monthly user base grew from approximately 4,000 to over 600,000, and monthly transactions scaled from 240,000 to over 43 million⁹. Kalshi reached an $11 billion valuation after raising over $300 million from Sequoia, a16z, and Paradigm¹⁰. Polymarket acquired QCEX, a CFTC-licensed exchange, enabling its regulated U.S. relaunch. The SEC signaled in 2026 its interest in overseeing a sector that already exceeds $63.5 billion in total activity¹⁷.",
            "In January 2026, CFTC Chairman Michael Selig announced a four-pillar regulatory agenda to support the responsible development of event contract markets¹¹. These markets are no longer an academic curiosity — they are institutional financial infrastructure. But the specific opportunity Orbit captures is this: virtually no one applies quantitative and systematic strategies to these markets, and no one has built the translation layer between corporate risk and prediction markets for emerging economies.",
          ],
        },
        {
          id: "ecosystem",
          title: "The Orbit Ecosystem",
          content: [
            "Orbit operates at the intersection of market intelligence, corporate risk management, and quantitative trading. The architecture consists of three integrated products that function as a positive feedback system — a flywheel where each layer amplifies the value of the others:",
          ],
          subsections: [
            {
              title: "Orbit Intelligence — The Data Layer",
              content: "Real-time consensus intelligence platform for Latin America. Aggregates calibrated probabilities from prediction markets, sentiment signals via X/Grok, macroeconomic data from INEGI, Banxico, and DOF, and alternative data sources. Operates across 7 verticals: Political, Economic, Regulatory, Energy, Climate, Real Estate, and Insurance. API-first architecture with REST, GraphQL, and WebSocket endpoints. Spanish-first by design. Built for both human consumption and autonomous AI agents — a critical differentiator in an ecosystem where 93% of IT executives globally consider agentic automation a priority for their operations¹⁶.",
            },
            {
              title: "Orbit Risk — The Protection Layer",
              content: "The first prediction market-based operational hedging product for businesses in emerging markets. Orbit Risk is the translation layer connecting a company's operational exposure to liquid prediction market contracts. The system identifies which exogenous events threaten the client's operating margin, maps them to optimized position combinations, and executes dynamic hedges with continuous rebalancing. In a market where foreign direct investment in Mexico reached a record $40.9 billion in 2025¹³, the demand for operational hedging is proportional to the capital at risk.",
            },
            {
              title: "Orbit Capital — The Validation Layer",
              content: "Quantitative fund that systematically trades prediction markets. Every trade generates a validation signal for Orbit Intelligence's data: if the data produces consistent risk-adjusted returns, the data works. Institutional infrastructure from day one: Fireblocks for digital asset custody, TRES FinOS for fund accounting, Xero for general ledger, and 24/7 LP portal. Performance target: 18% net annual return, Sharpe ratio >1.5, correlation <0.2 with S&P 500.",
            },
          ],
        },
        {
          id: "risk-detail",
          title: "Orbit Risk: Operational Mechanics",
          content: [
            "Orbit Risk operates as an abstraction layer between a company's operational exposure and prediction market liquidity. In an environment where a tweet about tariffs, a regulatory reform, or an abrupt peso depreciation can eliminate an entire quarter of operating margin, the ability to execute real-time hedges on specific events represents a quantifiable competitive advantage for any business with operations in the region.",
          ],
          steps: [
            { num: "01", title: "Connect your operations", desc: "We integrate your business data: revenue by market and geography, cost structure, supply chain dependencies, and currency exposure. Our AI system automatically identifies the exogenous drivers generating variance in your operating margin." },
            { num: "02", title: "Map your risks", desc: "Each identified exposure is translated into specific contracts on regulated prediction markets. We optimize the hedge portfolio through proprietary algorithms that maximize protection at the lowest cost, incorporating cross-event correlations." },
            { num: "03", title: "Execute the hedge", desc: "Orbit Capital executes the optimal position combination with algorithmic execution. Continuous 24/7 monitoring. Dynamic rebalancing based on probability shifts. Real-time reports on net exposure, hedge P&L, and sensitivities." },
          ],
        },
        {
          id: "exposures",
          title: "Taxonomy of Covered Exposures",
          content: [
            "Orbit Risk covers the most critical operational exposures for businesses operating in Latin America. Each category has been selected based on its historically demonstrated impact on operating margins in the region:",
          ],
          list: [
            "Tariffs and US-LATAM trade policy (average tariffs 15.8% in 2025)⁵",
            "MXN/USD exchange rate (volatility: 14.6% range in 2025)⁷",
            "Financial regulation and supervision (CNBV, SHCP, Banxico)",
            "Energy policy and electricity reform",
            "Nearshoring disruptions and supply chain (record FDI: $40.9B)¹³",
            "Political, electoral, and institutional governance risk",
            "Commodities, raw materials, and logistics costs",
            "USMCA / T-MEC renegotiation (2026)",
          ],
        },
        {
          id: "architecture",
          title: "Ecosystem Architecture: The Data Flywheel",
          content: [
            "The Orbit flywheel operates as a positive feedback cycle with three phases: Intel generates real-time consensus probability data from prediction markets and alternative sources. Risk consumes that data to design optimized operational hedges for businesses. Capital validates data quality by operating a quantitative fund — if the intelligence generates consistent risk-adjusted returns, the data is reliable. The fund's returns feed back into and calibrate Intel's models. Each cycle produces more accurate intelligence, more effective hedges, and more consistent returns.",
            "Orbit's competitive advantage emerges from vertical integration: no competitor simultaneously operates all three layers. Intelligence firms sell data but don't validate it with their own capital at risk. Hedge funds trade data but don't distribute it as an intelligence service. Prediction platforms provide liquidity but don't build vertical applications. No one has built the translation layer between corporate risk and prediction markets. Latin America's fintech market, valued at $13.14 billion in 2024 and projected to reach $49.58 billion by 2033¹², conspicuously lacks this infrastructure.",
          ],
        },
        {
          id: "market",
          title: "Market Sizing and Traction",
          content: [
            "TAM (Total Addressable Market): The global prediction markets industry surpassed $44 billion in volume in 2025¹, with the SEC signaling total activity exceeding $63.5 billion¹⁷. The AI agents in financial services market reached $1.79 billion in 2025³. LATAM's fintech market is projected at $49.58 billion by 2033¹². The convergence of these three markets defines Orbit's TAM.",
            "SAM (Serviceable Available Market): Companies with LATAM operations exposed to political, regulatory, currency, and trade risk. Foreign direct investment in Mexico: record $40.9 billion in 2025¹³. Nearshoring as catalyst: Mexico projects exports of $700 billion by 2026. Over 3,500 manufacturing companies with direct exposure to regulatory and currency volatility¹⁴.",
            "Orbit Capital: First systematic prediction markets fund in LATAM. Target: 18% net annual return. Sharpe ratio >1.5. Correlation <0.2 with S&P 500. Institutional infrastructure: Fireblocks, TRES FinOS, 24/7 LP portal.",
            "Orbit Intelligence: The only Spanish-first consensus intelligence platform for LATAM. 7 verticals. API-first. Designed for AI agent consumption. First native prediction markets data provider for the region.",
            "Orbit Risk: First prediction market-based operational hedging product for businesses in emerging markets. No direct competitor identified.",
          ],
        },
        {
          id: "team",
          title: "Team and Operating Model",
          content: [
            "Multidisciplinary team with combined experience in quantitative finance, enterprise cybersecurity, and technology infrastructure at scale. Demonstrated track record in capital raising, enterprise deal closing, production technology development, and navigating regulated industries in Mexico and the U.S.",
            "AI-Native operating model: 12+ AI agents and trading bots operating autonomously 24/7. A team of 5 produces the operational output equivalent to a team of 20. Every process is automated with human oversight at critical decision points. This model enables operations scaling with capital efficiency significantly above the industry average — a key differentiator in a market where 93% of executives prioritize agentic automation¹⁶.",
          ],
        },
        {
          id: "contact",
          title: "Contact",
          content: [
            "Capital: invest@orbitcapital.ai",
            "Mexico City, Mexico 🇲🇽",
          ],
        },
      ],
    },

    // ── Legal Pages ──
    legal: {
      backHome: "to Home",
      acceptableUseLabel: "Acceptable Use Policy",

      // ── Privacy Policy ──
      privacy: {
        heroTag: "Legal Notice",
        heroTitle: "Privacy Policy",
        heroDesc: "This Privacy Policy describes how Orbit Predictive Technologies, LLC collects, uses, stores, and protects your personal information in accordance with applicable law.",
        lastUpdated: "Last updated: February 16, 2026",
        contactTitle: "Data Protection Contact",
        contactDesc: "To exercise your data rights or for any inquiries related to your personal data, contact us:",
        contactEmail: "privacy@orbitcapital.ai",
        sections: [
          {
            title: "Identity and Domicile of the Data Controller",
            content: [
              "Orbit Predictive Technologies, LLC (hereinafter \"Orbit,\" \"we,\" or \"the Company\"), with operational offices in Mexico City, Mexico, is the entity responsible for the processing of your personal data.",
              "Orbit operates three integrated business lines: Our Intelligence (AI-powered business intelligence platform), Orbit Risk (operational risk hedging), and Orbit Capital (quantitative trading fund). This Privacy Policy applies to all services offered through the Orbit ecosystem.",
            ],
          },
          {
            title: "Personal Data We Collect",
            content: [
              "Identification data: full name, corporate name, job title, corporate email address, phone number, and country of residence.",
              "Professional and business data: company or organization name, industry sector, organization size, role within the organization, and stated operational needs.",
              "Financial data (applicable to Orbit Capital): information required for accredited investor evaluation, proposed investment amount, risk profile, and banking details for fund transfers, to the extent permitted by applicable law.",
              "Technical and browsing data: IP address, browser type, operating system, pages visited on our sites, session duration, device identifiers, and cookie or similar tracking technology data.",
              "Service usage data: Our Intelligence API query patterns, usage frequency, alert configurations, selected analysis verticals, and platform interaction history.",
            ],
          },
          {
            title: "Purposes of Data Processing",
            content: [
              "Primary purposes: (a) provide, maintain, and improve the Our Intelligence, Orbit Risk, and Orbit Capital services; (b) create and manage user accounts; (c) process demo requests, contact inquiries, and investment applications; (d) manage the contractual and pre-contractual relationship; (e) comply with applicable legal, regulatory, and tax obligations; (f) prevent fraud, money laundering, and other illicit activities.",
              "Secondary purposes: (a) send marketing communications, newsletters, and product/service updates; (b) perform statistical analysis, market research, and user segmentation; (c) personalize the user experience within our platforms; (d) conduct satisfaction surveys and service improvement initiatives. If you do not wish your personal data to be processed for these secondary purposes, you may request so by emailing privacy@orbitcapital.ai.",
            ],
          },
          {
            title: "Legal Basis for Processing",
            content: [
              "The processing of your personal data is based on: (a) consent provided when interacting with our services, registering an account, or submitting a form; (b) performance of a contract or pre-contractual measures at the data subject's request; (c) compliance with legal obligations applicable to Orbit; (d) Orbit's legitimate interest in improving and securing its services, provided the data subject's rights and freedoms do not prevail.",
            ],
          },
          {
            title: "Data Transfers",
            content: [
              "Orbit may transfer your personal data to the following categories of recipients, always under appropriate security measures: (a) technology service providers (cloud hosting, data analytics, server infrastructure); (b) payment processors and financial institutions for investment management; (c) legal, accounting, and regulatory compliance advisors; (d) government authorities when required by law or court order.",
              "As Orbit is an entity incorporated in the United States of America with operations in Mexico, your personal data may be transferred to and stored on servers located in the United States or other jurisdictions. In such cases, Orbit will ensure that appropriate safeguards exist in accordance with applicable data protection laws.",
            ],
          },
          {
            title: "Technology Providers and Sub-Processors",
            content: [
              "To deliver our services, we use the following technology providers that may access or process personal data on our behalf: Supabase (database and authentication), Vercel (web hosting and performance analytics), PostHog (behavioral analytics and product metrics). Each of these providers is subject to data processing agreements that ensure adequate levels of protection.",
            ],
          },
          {
            title: "Data Subject Rights",
            content: [
              "You have the right to: (a) access your personal data held by Orbit and learn about the conditions of processing; (b) rectify your data when it is inaccurate or incomplete; (c) request erasure (deletion) of your data when you believe it is not being processed in accordance with applicable principles and obligations; (d) object to the processing of your data for specific purposes.",
              "You also have the right to revoke your consent at any time, limit the use or disclosure of your data, and request data portability when technically feasible.",
              "To exercise any of these rights, send a request to privacy@orbitcapital.ai indicating your full name, a clear description of the data over which you wish to exercise your right, and any documentation that may facilitate locating your data. Orbit will respond within a maximum of twenty (20) business days from receipt of the complete request.",
            ],
          },
          {
            title: "Security Measures",
            content: [
              "Orbit implements appropriate administrative, technical, and physical security measures to protect your personal data against damage, loss, alteration, destruction, or unauthorized use, access, or processing. These measures include: encryption of data in transit and at rest, role-based access controls, continuous infrastructure monitoring, periodic security audits, and internal policies for handling confidential information.",
            ],
          },
          {
            title: "Cookies and Tracking Technologies",
            content: [
              "Our websites use cookies and similar technologies to: (a) ensure the technical functioning of the site; (b) remember your preferences (such as language and visual theme); (c) obtain usage and performance metrics; (d) improve the user experience.",
              "You may configure your browser to reject cookies or to receive a notification before cookies are stored. Please note that disabling certain cookies may affect site functionality.",
            ],
          },
          {
            title: "Data Retention",
            content: [
              "We will retain your personal data for as long as necessary to fulfill the purposes described in this Policy, unless a longer retention period is required or permitted by law. The criteria used to determine our retention periods include: the duration of the contractual relationship, legal and regulatory obligations, applicable statutes of limitation, and the operational necessity of the data.",
            ],
          },
          {
            title: "Minors",
            content: [
              "Orbit's services are not directed at individuals under eighteen (18) years of age. We do not knowingly collect personal data from minors. If we become aware that we have collected data from a minor without verifiable parental or legal guardian consent, we will proceed to delete such information from our systems.",
            ],
          },
          {
            title: "Changes to this Privacy Policy",
            content: [
              "Orbit reserves the right to modify this Privacy Policy at any time. Any material changes will be notified through our website or by email to the address associated with your account. We recommend reviewing this Policy periodically. Continued use of our services after the posting of modifications constitutes your acceptance thereof.",
            ],
          },
          {
            title: "Governing Law and Jurisdiction",
            content: [
              "This Privacy Policy is governed by the applicable laws of the State of Delaware, United States of America, as well as data protection provisions in force in Mexico to the extent applicable to Orbit's operations in that territory. For the resolution of any dispute arising from this Policy, the parties submit to the jurisdiction of the competent courts in the State of Delaware, U.S.A., waiving any other jurisdiction that may correspond to them by reason of their present or future domicile.",
            ],
          },
        ],
      },

      // ── Terms of Use ──
      terms: {
        heroTag: "Legal Framework",
        heroTitle: "Terms of Use",
        heroDesc: "These Terms of Use govern access to and use of the services, platforms, and content provided by Orbit Predictive Technologies, LLC.",
        lastUpdated: "Last updated: February 16, 2026",
        contactTitle: "Legal Contact",
        contactDesc: "For legal inquiries regarding these Terms of Use, contact us:",
        contactEmail: "legal@orbitcapital.ai",
        sections: [
          {
            title: "Acceptance of Terms",
            content: [
              "By accessing, browsing, or using any service of Orbit Predictive Technologies, LLC (hereinafter \"Orbit\"), including but not limited to Our Intelligence, Orbit Risk, and Orbit Capital, as well as the websites, APIs, applications, and any associated materials (collectively, the \"Services\"), you agree to be bound by these Terms of Use (\"Terms\").",
              "If you access the Services on behalf of a company or other legal entity, you represent and warrant that you have the authority to bind such entity to these Terms. If you do not accept these Terms, do not use the Services.",
            ],
          },
          {
            title: "Description of Services",
            content: [
              "Our Intelligence: a business intelligence platform that uses artificial intelligence, prediction markets, and real-time data analysis to generate probabilities, signals, and analysis across multiple verticals (regulatory, geopolitical, economic, energy, climate, competitive, and supply chain).",
              "Orbit Risk: an operational risk hedging service that transforms business exposures (regulatory, political, climate, currency, among others) into quantifiable hedges through positions in prediction markets.",
              "Orbit Capital: a quantitative trading fund that operates in global prediction markets using Orbit's intelligence infrastructure. Orbit Capital services are intended exclusively for accredited investors in accordance with applicable regulations.",
            ],
          },
          {
            title: "Eligibility Requirements",
            content: [
              "To use the Services, you must: (a) be at least eighteen (18) years of age; (b) have legal capacity to enter into binding contracts; (c) not be prohibited from receiving the Services under the laws of the applicable jurisdiction; (d) for Orbit Capital services, meet accredited investor requirements under applicable securities regulations.",
            ],
          },
          {
            title: "Account Registration and Security",
            content: [
              "Some Services require account creation. You agree to: (a) provide true, accurate, current, and complete information during registration; (b) promptly maintain and update such information; (c) maintain the confidentiality of your access credentials; (d) immediately notify Orbit of any unauthorized use of your account.",
              "You are solely responsible for all activity that occurs under your account. Orbit shall not be liable for any loss arising from unauthorized use of your account if such use is not attributable to Orbit.",
            ],
          },
          {
            title: "Permitted Use and Restrictions",
            content: [
              "You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Services in accordance with these Terms and Orbit's Acceptable Use Policy. The following are strictly prohibited: (a) copying, modifying, distributing, selling, sublicensing, or creating derivative works of the Services; (b) reverse engineering, decompiling, or attempting to extract the source code; (c) using the Services for any unlawful or unauthorized purpose; (d) interfering with or disrupting the integrity or performance of the Services; (e) circumventing technological protection measures; (f) accessing the Services through automated means (bots, scrapers) without express authorization.",
            ],
          },
          {
            title: "Intellectual Property",
            content: [
              "All intellectual property rights in the Services, including but not limited to software, algorithms, artificial intelligence models, databases, designs, trademarks, logos, editorial content, and documentation, are and shall remain the exclusive property of Orbit or its licensors.",
              "Information, analysis, probabilities, signals, and other data generated by Orbit platforms (\"Orbit Content\") are protected by copyright and intellectual property laws. Reproduction, distribution, or public communication thereof without prior written authorization from Orbit is prohibited.",
            ],
          },
          {
            title: "Financial Information Disclaimer",
            content: [
              "IMPORTANT NOTICE: No information, analysis, probability, signal, or content provided through Orbit's Services constitutes financial advice, investment advice, securities recommendation, solicitation to buy or sell financial instruments, or a public offering of securities in any jurisdiction.",
              "Our Intelligence provides business intelligence information for informational and analytical purposes. Probabilities and signals reflect the synthesis of multiple data sources and models but do not guarantee future results.",
              "Orbit Capital operates as a private fund intended exclusively for accredited investors. Investment in prediction markets and derivative instruments carries significant risks, including the possible total loss of invested capital. Past performance does not guarantee future returns.",
            ],
          },
          {
            title: "Limitation of Liability",
            content: [
              "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ORBIT, ITS DIRECTORS, EMPLOYEES, AGENTS, LICENSORS, AND PROVIDERS SHALL NOT BE LIABLE FOR: (A) INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES; (B) LOSS OF PROFITS, REVENUE, DATA, BUSINESS OPPORTUNITIES, OR EXPECTED SAVINGS; (C) ANY DAMAGES ARISING FROM SERVICE INTERRUPTION, ERRORS, VIRUSES, OR TECHNICAL FAILURES.",
              "Orbit's aggregate liability for any claim related to the Services shall not exceed the total amount paid by you to Orbit during the twelve (12) months preceding the event giving rise to the claim, or one hundred United States dollars (USD $100), whichever is greater.",
            ],
          },
          {
            title: "Indemnification",
            content: [
              "You agree to indemnify, defend, and hold harmless Orbit, its directors, employees, agents, and affiliates from any claim, demand, damage, loss, liability, cost, or expense (including reasonable attorneys' fees) arising from or related to: (a) your use of the Services; (b) your breach of these Terms; (c) your violation of third-party rights; (d) any content or information you provide through the Services.",
            ],
          },
          {
            title: "Service Availability and Modifications",
            content: [
              "Orbit reserves the right to modify, suspend, or discontinue any aspect of the Services at any time, with or without prior notice, and without liability to you. Orbit will make commercially reasonable efforts to notify material changes with reasonable advance notice.",
              "Orbit does not guarantee that the Services will be available on an uninterrupted, secure, or error-free basis. Access to the Services may be affected by scheduled maintenance, updates, technical failures, or circumstances beyond Orbit's reasonable control.",
            ],
          },
          {
            title: "Term and Termination",
            content: [
              "These Terms shall remain in effect for as long as you use the Services. Orbit may suspend or terminate your access to the Services at any time and for any reason, including breach of these Terms, without obligation of prior notice.",
              "Upon termination: (a) all rights and licenses granted under these Terms shall cease; (b) you must immediately cease all use of the Services; (c) provisions that by their nature should survive termination shall continue in effect, including those related to intellectual property, limitation of liability, indemnification, and governing law.",
            ],
          },
          {
            title: "Governing Law and Dispute Resolution",
            content: [
              "These Terms are governed by and construed in accordance with the laws of the State of Delaware, United States of America, without reference to its conflict of laws rules.",
              "Any dispute arising from or related to these Terms or the Services shall be resolved through binding arbitration administered in accordance with the rules of the American Arbitration Association (AAA). The arbitration shall be conducted in English in the city of Wilmington, Delaware, U.S.A. The arbitral award shall be final and binding and may be enforced in any court of competent jurisdiction.",
              "THE PARTIES WAIVE THE RIGHT TO PARTICIPATE IN CLASS ACTIONS OR CLASS ARBITRATIONS. All disputes must be resolved on an individual basis.",
            ],
          },
          {
            title: "General Provisions",
            content: [
              "Assignment: you may not assign or transfer these Terms or any rights hereunder without the prior written consent of Orbit. Orbit may freely assign these Terms.",
              "Severability: if any provision of these Terms is held invalid or unenforceable, the remaining provisions shall continue in full force and effect.",
              "Waiver: Orbit's failure to exercise any right or remedy under these Terms shall not constitute a waiver of such right or remedy.",
              "Entire agreement: these Terms, together with Orbit's Privacy Policy and Acceptable Use Policy, constitute the entire agreement between you and Orbit regarding the use of the Services and supersede any prior agreements.",
            ],
          },
        ],
      },

      // ── Acceptable Use Policy ──
      acceptableUse: {
        heroTag: "Policy",
        heroTitle: "Acceptable Use Policy",
        heroDesc: "This Acceptable Use Policy establishes permitted and prohibited conduct when using the services of Orbit Predictive Technologies, LLC.",
        lastUpdated: "Last updated: February 16, 2026",
        contactTitle: "Report a Violation",
        contactDesc: "If you are aware of a violation of this policy or wish to report misuse, contact us:",
        contactEmail: "abuse@orbitcapital.ai",
        sections: [
          {
            title: "Scope and Application",
            content: [
              "This Acceptable Use Policy (\"AUP\") applies to all users of the services of Orbit Predictive Technologies, LLC (\"Orbit\"), including Our Intelligence, Orbit Risk, Orbit Capital, the APIs, websites, applications, and any related services (collectively, the \"Services\").",
              "This AUP supplements and forms an integral part of Orbit's Terms of Use. Violation of this policy may result in suspension or termination of your access to the Services, without prejudice to any legal action that may apply.",
            ],
          },
          {
            title: "General Principles of Use",
            content: [
              "When using the Services, you agree to: (a) act in good faith and ethically in all your interactions; (b) comply with all applicable laws, regulations, and rules in your jurisdiction and in any jurisdiction relevant to your use of the Services; (c) respect the intellectual property rights of Orbit and third parties; (d) not interfere with other users' use and enjoyment of the Services.",
            ],
          },
          {
            title: "Prohibited Conduct — Security and Access",
            content: [
              "The following are strictly prohibited: (a) attempting to gain unauthorized access to the Services, other users' accounts, computer systems, or networks connected to the Services; (b) using the Services to perform vulnerability testing, port scanning, or penetration testing without express written authorization from Orbit; (c) transmitting viruses, malware, ransomware, or any malicious code through the Services; (d) intentionally overloading the Services' infrastructure through denial-of-service attacks or similar techniques; (e) forging headers, identifiers, or any data to conceal the origin of content transmitted through the Services.",
            ],
          },
          {
            title: "Prohibited Conduct — Data and Information Use",
            content: [
              "The following are prohibited: (a) redistributing, reselling, or sublicensing data, analysis, probabilities, or any content obtained through Our Intelligence without express authorization; (b) using Orbit information for market manipulation, insider trading, or any activity that violates securities market regulations; (c) using the Services to collect personal data from other users without their consent; (d) scraping, data mining, or automated content extraction from the Services without prior written authorization; (e) using Orbit data to build competing products or services.",
            ],
          },
          {
            title: "Prohibited Conduct — Content and Communications",
            content: [
              "Using the Services for the following is prohibited: (a) transmitting defamatory, obscene, threatening, harassing, or violence-inciting content; (b) impersonating another person or entity; (c) sending unsolicited commercial communications (spam); (d) publishing false or misleading information for the purpose of harming third parties; (e) promoting illegal activities or conduct that violates the rights of others.",
            ],
          },
          {
            title: "API and Automated Service Usage",
            content: [
              "Users accessing the Services through APIs must: (a) respect the rate limits established for their subscription plan; (b) implement exponential backoff mechanisms to handle errors; (c) not share API keys with unauthorized third parties; (d) monitor and control the use of their API credentials; (e) immediately notify Orbit if they suspect their API credentials have been compromised.",
              "Excessive or abusive API usage that degrades service performance for other users may result in temporary or permanent access limitations.",
            ],
          },
          {
            title: "Regulatory Compliance and Sanctions",
            content: [
              "Using the Services is prohibited: (a) in violation of economic sanctions or trade embargoes imposed by the United States (OFAC), the European Union, or any other competent authority; (b) to finance or support terrorist activities, money laundering, or other illicit activities; (c) for the benefit of persons or entities included on international sanctions lists; (d) to evade export controls or international trade regulations.",
            ],
          },
          {
            title: "Artificial Intelligence and Data Models",
            content: [
              "Users interacting with Orbit's AI tools must: (a) not attempt to extract, replicate, or reverse engineer Orbit's proprietary artificial intelligence models; (b) not use AI model outputs as the sole basis for financial, legal, or medical decisions without adequate human oversight; (c) report any bias, error, or unexpected behavior detected in the models; (d) understand and accept that AI model outputs are probabilistic and do not constitute certainties or guarantees.",
            ],
          },
          {
            title: "Consequences of Violation",
            content: [
              "Orbit reserves the right to investigate any suspected violation of this AUP and take such action as it deems appropriate, including: (a) issuance of formal warnings; (b) temporary limitation of access to specific features; (c) temporary account suspension; (d) permanent account termination and revocation of access to the Services; (e) reporting conduct to competent authorities when legally required.",
              "Orbit will act proportionally, considering the severity of the violation, whether it was intentional or negligent, recidivism, and the impact on other users or on the Services.",
            ],
          },
          {
            title: "Appeals Process",
            content: [
              "If your account has been suspended or terminated and you believe the decision was made in error, you may submit a written appeal to abuse@orbitcapital.ai within thirty (30) days of notification of the action. Orbit will review the appeal and communicate its decision within a reasonable timeframe. Orbit's decision shall be final.",
            ],
          },
          {
            title: "Changes to this Policy",
            content: [
              "Orbit reserves the right to update this Acceptable Use Policy at any time. Modifications shall take effect upon publication on our website. Continued use of the Services after the posting of changes constitutes your acceptance thereof. For material changes, Orbit will make reasonable efforts to notify users in advance.",
            ],
          },
        ],
      },
    },

    // ── PageHero / Back ──
    back: "Back",

    // ── Market Page ──
    market: {
      heroTag: "Institutional Validation",
      heroTitle: "Wall Street Already Bet",
      heroDesc: "The world's most sophisticated hedge funds are actively investing in prediction markets. We are not betting on speculative technology.",
      giantsTag: "Smart Money",
      giantsTitle: "Wall Street Giants are Already In",
      giants: [
        { name: "Susquehanna International Group (SIG)", desc: "First institutional market maker dedicated to prediction markets on Kalshi. ~$2T USD in annual volume. Created a dedicated trading division, increasing liquidity ~30x." },
        { name: "Jump Trading", desc: "Algorithmic trading giant from Chicago. Entry as a liquidity provider signals that quant funds see arbitrage and market-making opportunities." },
        { name: "DRW Trading", desc: "Institutional trading powerhouse with derivatives and commodities expertise. Treats event contracts as legitimate financial derivatives to hedge black swan events." },
        { name: "Interactive Brokers & ForecastEx", desc: "IBKR (NASDAQ: IBKR) launched ForecastEx with Kalshi. One of Wall Street's most respected brokers stabilizing markets and reducing bid-ask spreads." }
      ],
      fundingTag: "Funding",
      fundingTitle: "Massive Institutional Capital",
      tablePlatform: "Platform",
      tableRaised: "Capital Raised",
      tableValuation: "Valuation",
      tableBackers: "Key Investors",
      iceNote: "Note on ICE:",
      iceDetail: "Intercontinental Exchange (owner of the NYSE) invested $2B in Polymarket. When the infrastructure that operates the New York Stock Exchange bets on prediction markets, the signal is unmistakable.",
      volumeTag: "Volumes",
      volumeTitle: "Explosive Growth",
      volumeDesc: "Combined volume on the two leading platforms has grown more than 100x in two years.",
      tableYear: "Year",
      tableCombined: "Combined",
      statPoly: "Polymarket Vol. 2025",
      statKalshi: "Kalshi Vol. 2025",
      statGrowth: "Growth 2023-2025",
      projTag: "Projection",
      projTitle: "2026-2028 Projection",
      projDesc: "Under three scenarios, combined annual volume could reach between $60B and $300B over the next three years.",
      tableScenario: "Scenario",
      tableEstVolume: "Estimated Annual Volume",
      projScenarios: [
        "Conservative",
        "Base",
        "Optimistic (World Cup + Election)"
      ],
      catalystsTitle: "Key Catalysts",
      catalystsList: [
        "2026: Institutional consolidation. CFTC approval for Polymarket. U.S. midterm elections.",
        "2027: Mainstream adoption. Integration with traditional brokers. Derivative products on event contracts.",
        "2028: U.S. Presidential Election could multiply current volumes by 3-5x.",
        "2026 FIFA World Cup in North America could generate $100B+ in volume."
      ],
      mediaTag: "Media",
      mediaTitle: "Media Validation",
      mediaDesc: "The world's leading media outlets and platforms already integrate prediction market data into their coverage.",
      mediaList: [
        { name: "CNN and CNBC", detail: "Partnerships with Kalshi to integrate real-time market data in editorial coverage." },
        { name: "Google", detail: "Integration of Kalshi and Polymarket data in Search and Google Finance (November 2025)." },
        { name: "Dow Jones", detail: "Partnership with Polymarket for data distribution to global financial institutions." },
        { name: "NHL", detail: "First major sports league to sign a licensing deal with Kalshi (October 2025)." },
        { name: "X (Twitter)", detail: "Polymarket as the official prediction markets partner, integrated with xAI." }
      ],
      relevanceTag: "Relevance",
      relevanceTitle: "Why It Matters for Orbit",
      relevanceList: [
        { title: "Perfect Timing", text: "We are entering the early institutional adoption phase (Early Majority), not the speculative phase." },
        { title: "Guaranteed Liquidity", text: "Institutional market makers allow executing strategies at scale without market impact up to $50-100M USD in AUM." },
        { title: "Market Legitimacy", text: "Bloomberg, CNN, and Google already consider prediction markets legitimate sources of data." },
        { title: "Growth Runway", text: "Market projected to grow 3-5x in 3 years. Infrastructure for a market validated by smart money." }
      ]
    },

    // ── Why Now Page (Timing) ──
    whyNow: {
      heroTag: "Timing",
      heroTitle: "Why Now?",
      heroDesc: "Four massive forces are converging to create a once-in-a-decade opportunity.",
      t1Tag: "Tailwind 1",
      t1Title: "AI Agent Explosion",
      t1Desc: "Autonomous AI agents are moving from demos to production. The world's largest companies are already deploying them — and they all require structured data as input.",
      t1Agents: [
        { name: "GPT-4 / OpenAI", detail: "Function-calling agents for research, trading, and ops." },
        { name: "Claude / Anthropic", detail: "Computer-use agents navigating complex systems." },
        { name: "Grok / xAI", detail: "Native X agent with access to real-time data." }
      ],
      t1DeployTitle: "Enterprise Deployments",
      t1Deployments: [
        { org: "Goldman Sachs", use: "Agents for research and due diligence" },
        { org: "McKinsey", use: "Lilli — internal agent for 30K+ consultants" },
        { org: "Walmart", use: "Agents for supply chain and pricing" },
        { org: "Palantir AIP", use: "$1B ARR — agents for defense and enterprise" }
      ],
      t1InsightLabel: "Key insight:",
      t1InsightText: "AI agents need structured context for LATAM — calibrated probabilities, regulatory data, political sentiment — and that context does not exist today. Orbit creates it.",
      t2Tag: "Tailwind 2",
      t2Title: "Grok and X: Real-Time Intelligence Stack",
      t2Desc: "xAI Grok has native access to X (Twitter). Combined, they form the most powerful real-time intelligence stack in the world.",
      t2List: [
        "Native access to 500M+ daily posts on X",
        "Real-time sentiment analysis",
        "Mexico: X is the primary political platform",
        "Grok converts data chaos into structured intelligence",
        "24/7 monitoring of political and economic narratives"
      ],
      t2InsightLabel: "Our advantage:",
      t2InsightText: "Orbit converts the chaos of 500M+ daily posts into structured, actionable intelligence for investors and corporates in LATAM.",
      t3Tag: "Tailwind 3",
      t3Title: "Prediction Markets Go Mainstream",
      t3Desc: "The 2024 election was the turning point. Prediction markets moved from crypto niche to mainstream decision-making tool.",
      t3Stats: [
        { stat: "$3.6B", label: "Polymarket volume in 2024 election" },
        { stat: "CFTC", label: "Regulatory validation of event contracts" },
        { stat: "Metaculus", label: "Calibration standard for AI labs" }
      ],
      t3InsightLabel: "The problem:",
      t3InsightText: "Prediction market data is fragmented across multiple platforms and is not packaged for enterprise consumption. There is no unified API, no cross-platform consensus, and no LATAM-focused analysis.",
      t4Tag: "Tailwind 4",
      t4Title: "Mexico's Political Moment",
      t4Desc: "Mexico is experiencing its highest regulatory and political uncertainty in decades — exactly when demand for predictive intelligence is at its peak.",
      t4List: [
        "2026 midterm elections — 15 gubernatorial races",
        "Judicial reform implementation — massive uncertainty",
        "Energy policy transition — impact on $50B+ of investment",
        "Nearshoring boom — $35B in 2024 investments",
        "Mexico receives more FDI than China for the first time",
        "Frequent public consultations and constitutional changes"
      ],
      t4Stats: [
        { value: 35, suffix: "B", label: "FDI in Mexico 2024" },
        { value: 15, suffix: "", label: "Gubernatorial Races 2026" },
        { value: 50, suffix: "B+", label: "Investment impacted by energy policy" }
      ],
      t5Tag: "Orbit + AI",
      t5Title: "Why Orbit Scales WITH AI",
      t5Desc: "The \"SaaS dies with AI\" narrative doesn't apply when your product is primary data that no AI can generate on its own.",
      t5List: [
        { title: "API-First Pricing", text: "Pay per query/endpoint. More AI agents = more revenue. AI growth benefits us directly." },
        { title: "Local Regulation Moat", text: "Understanding CNBV, INE, INEGI requires context that no LLM has out-of-the-box. Orbit packages that context." },
        { title: "Console + APIs", text: "Humans use the console, agents use the API. Same data, two interfaces, double the market." },
        { title: "Primary Consensus Data", text: "No AI can generate calibrated market probabilities — it requires real participants betting real money." }
      ],
      t5InsightLabel: "The thesis:",
      t5InsightText: "Orbit provides primary consensus data — calibrated probabilities backed by real money — that no LLM can manufacture. More AI agents in the world = more customers for Orbit."
    },
  },
};

export default translations;
