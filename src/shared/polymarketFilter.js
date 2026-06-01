// ─── polymarketFilter.js — Enterprise market filtering for LATAM/MX clients ───
//
// Two-layer filtering system:
//   Layer 1: Keyword exclusion (sports, entertainment, trivial)
//   Layer 2: Keyword inclusion + category classification (enterprise verticals)
//
// To maintain: edit the EXCLUDE_KEYWORDS or ENTERPRISE_CATEGORIES arrays below.
// No logic changes needed when adding/removing keywords.

// ═══════════════════════════════════════════════════════════════════════════════
// LAYER 1 — EXCLUSION KEYWORDS
// Any market whose question+slug+description contains these is immediately dropped.
// ═══════════════════════════════════════════════════════════════════════════════
const EXCLUDE_KEYWORDS = [
  // ── Sports ──
  "nfl", "nba", "mlb", "nhl", "mls", "fifa", "ufc", "boxing", "f1 ",
  "formula 1", "grand prix", "premier league", "la liga", "serie a",
  "bundesliga", "champions league", "world cup", "super bowl", "playoff",
  "quarterback", "touchdown", "slam dunk", "home run", "hat trick",
  "mvp ", "all-star", "march madness", "ncaa", "wnba", "pga", "lpga",
  "tennis", "wimbledon", "us open tennis", "french open", "australian open tennis",
  "olympics", "olympic", "medal count", "world series", "stanley cup",
  "copa america", "euros 2024", "euros 2028", "ballon d'or",
  "wrestling", "wwe", "aew", "cricket", "ipl", "rugby",
  "cycling", "tour de france", "esports", "league of legends", "dota",
  "valorant", "counter-strike", "overwatch league",
  // ── Entertainment ──
  "oscar", "grammy", "emmy", "golden globe", "tony award", "brit award",
  "academy award", "box office", "movie", "film release", "netflix series",
  "reality show", "bachelor", "bachelorette", "survivor", "big brother",
  "love island", "kardashian", "taylor swift", "drake ", "beyonce",
  "kanye", "rihanna", "celebrity", "influencer", "youtuber", "tiktoker",
  "streamer", "twitch", "spotify streams", "billboard", "album release",
  "concert", "tour dates", "red carpet", "met gala", "fashion week",
  "miss universe", "pageant",
  // ── Pop culture / memes ──
  "will x tweet", "tweet about", "meme coin", "memecoin", "dogecoin",
  "shiba inu", "pepe coin", "bonk", "floki", "degen ", "rug pull",
  "nft drop", "nft collection", "bored ape", "cryptopunk",
  "viral", "tiktok trend", "instagram", "snapchat",
  "mukbang", "asmr", "hot dog eating", "eating contest",
  // ── Trivial bets ──
  "daily weather", "rain tomorrow", "snow tomorrow", "temperature tomorrow",
  "what will.*wear", "hair color", "baby name", "gender reveal",
  "dating", "break up", "divorce", "married",
  "joke market", "meme market", "parody",
  // ── Crypto degen (non-macro) ──
  "memecoin", "airdrop", "token launch", "token burn", "nft floor",
  "nft mint", "yield farm", "liquidity pool", "dex volume",
  "shitcoin", "pump and dump", "wen moon", "to the moon",
  "wagmi", "ngmi", "gm ", "probably nothing",
];

// ═══════════════════════════════════════════════════════════════════════════════
// LAYER 2 — ENTERPRISE CATEGORIES (inclusion + classification)
// A market must match at least one keyword in ANY category to be included.
// The first matching category wins (order matters for ambiguous markets).
// ═══════════════════════════════════════════════════════════════════════════════
const ENTERPRISE_CATEGORIES = {
  geopolitics: {
    label: "geopolitics",
    icon: "globe",
    color: "#6366F1",
    keywords: [
      // Trade & tariffs
      "tariff", "trade deal", "trade war", "trade agreement", "trade deficit",
      "t-mec", "tmec", "usmca", "nafta", "free trade", "import duty", "export ban",
      "trade policy", "trade restriction", "customs",
      // Sanctions & diplomacy
      "sanction", "embargo", "diplomatic", "diplomacy", "treaty", "alliance",
      "nato", "g7 ", "g20", "united nations", "un resolution", "security council",
      // US-China
      "china", "beijing", "xi jinping", "us-china", "taiwan", "south china sea",
      "decoupling", "chip ban", "semiconductor ban",
      // US-Mexico / LATAM relations
      "mexico border", "immigration", "migrant", "migration policy", "asylum",
      "deportation", "border wall", "cartel", "fentanyl",
      "nearshoring", "reshoring", "friend-shoring", "supply chain",
      // Geopolitical conflicts
      "ukraine", "russia", "putin", "zelensky", "crimea", "donbas",
      "iran", "israel", "hamas", "hezbollah", "gaza", "middle east",
      "north korea", "kim jong", "nuclear weapon", "missile test",
      "coup", "civil war", "invasion", "military strike", "airstrike",
      // International orgs
      "imf", "world bank", "wto", "oecd", "brics",
    ],
  },

  macroeconomy: {
    label: "macroeconomy",
    icon: "trending",
    color: "#F59E0B",
    keywords: [
      // Central banks & rates
      "fed ", "federal reserve", "interest rate", "rate cut", "rate hike",
      "fomc", "powell", "central bank", "monetary policy", "quantitative",
      "banxico", "ecb", "bank of england", "bank of japan", "boj ",
      "basis point", "bps ", "benchmark rate",
      // Inflation & prices
      "inflation", "cpi", "ppi", "deflation", "disinflation",
      "consumer price", "producer price", "core inflation",
      // GDP & growth
      "gdp", "recession", "economic growth", "soft landing", "hard landing",
      "stagflation", "contraction", "expansion",
      // Employment
      "unemployment", "jobs report", "nonfarm", "payroll", "labor market",
      "jobless claims", "hiring", "layoffs",
      // Markets & instruments
      "s&p 500", "s&p", "nasdaq", "dow jones", "stock market", "bear market",
      "bull market", "market crash", "correction",
      "treasury", "yield curve", "bond", "debt ceiling", "government shutdown",
      // FX & commodities
      "dollar", "usd", "eur", "forex", "currency", "exchange rate",
      "peso", "mxn", "usd/mxn", "dxy",
      "oil price", "wti", "brent", "crude oil", "petroleum",
      "gold price", "silver price", "commodity", "commodities",
      // Crypto
      "bitcoin", "btc", "ethereum", "eth ", "crypto", "cryptocurrency",
      "crypto market", "solana", "sol ", "xrp", "ripple", "cardano",
      "polkadot", "avalanche", "chainlink", "polygon", "matic",
      "defi", "stablecoin", "usdt", "usdc", "tether",
      "halving", "spot etf", "bitcoin etf", "crypto etf",
      "binance", "coinbase", "kraken",
    ],
  },

  regulatory: {
    label: "regulatory",
    icon: "shield",
    color: "#EC4899",
    keywords: [
      // US agencies & regulation
      "regulation", "regulatory", "deregulat",
      "sec ", "ftc", "fda", "doj ", "cftc", "cfpb", "fcc",
      "antitrust", "monopoly", "compliance",
      // Legislation
      "legislation", "bill pass", "executive order", "veto",
      "congress", "senate vote", "house vote",
      // Courts & legal
      "supreme court", "court ruling", "lawsuit", "litigation",
      "indictment", "conviction", "verdict", "legal challenge",
      // Specific regulatory areas
      "crypto regulation", "stablecoin", "cbdc",
      "ai regulation", "ai act", "ai policy", "ai executive order",
      "data privacy", "gdpr", "antitrust",
      "tax reform", "tax policy", "corporate tax", "fiscal reform",
      "tiktok ban", "tech regulation", "platform regulation",
      "financial regulation", "banking regulation", "dodd-frank",
      // Mexico regulatory
      "reforma fiscal", "reforma energetica", "reforma judicial",
      "ine ", "tribunal", "cofece", "profeco",
    ],
  },

  elections: {
    label: "elections",
    icon: "scale",
    color: "#8B5CF6",
    keywords: [
      // General election terms
      "election", "presidential election", "midterm", "primary",
      "vote", "ballot", "poll ", "polling", "electoral",
      "candidate", "nominee", "nominate", "inaugur",
      "runoff", "recount", "swing state",
      // US politics
      "president", "trump", "biden", "kamala", "harris", "desantis",
      "haley", "vance", "rfk", "republican", "democrat",
      "gop", "dnc", "speaker of the house", "vice president",
      "cabinet", "secretary of state",
      // Mexico politics
      "sheinbaum", "amlo", "morena", "pan ", "pri ",
      "gobernador", "eleccion", "mexico president",
      // LATAM politics
      "lula", "milei", "petro", "boric", "bukele", "maduro",
      "brazil election", "argentina election", "colombia election",
      "chile election", "venezuela",
      // International leadership
      "prime minister", "chancellor", "parliament",
      "imf director", "world bank president", "wto director",
      "un secretary", "nato secretary",
    ],
  },

  technology: {
    label: "technology",
    icon: "rocket",
    color: "#3B82F6",
    keywords: [
      // AI
      "artificial intelligence", "ai ", "openai", "chatgpt", "gpt-",
      "deepmind", "anthropic", "claude ", "gemini ai", "llm ",
      "large language model", "machine learning", "agi ",
      "generative ai", "ai chip", "gpu shortage",
      // Big tech
      "apple", "google", "microsoft", "amazon", "meta ",
      "nvidia", "tesla", "spacex", "ipo ",
      "merger", "acquisition", "m&a", "antitrust",
      // Cybersecurity
      "cybersecurity", "cyber attack", "data breach", "ransomware",
      "hack ", "hacking", "vulnerability",
      // Digital platforms
      "social media regulation", "content moderation",
      "app store", "digital market",
      // Semiconductors
      "semiconductor", "chip ", "tsmc", "intel ", "qualcomm",
      "chip war", "chips act",
    ],
  },

  climateEnergy: {
    label: "climateEnergy",
    icon: "globe",
    color: "#10B981",
    keywords: [
      // Climate events
      "climate", "hurricane", "wildfire", "drought", "flood",
      "earthquake", "tornado", "typhoon", "cyclone",
      "el nino", "la nina", "heat wave", "polar vortex",
      "sea level", "glacier", "ice cap",
      // Climate policy
      "paris agreement", "cop28", "cop29", "cop30",
      "carbon tax", "carbon credit", "carbon emission",
      "net zero", "green deal", "climate pledge",
      "global warming", "greenhouse gas",
      // Energy
      "energy transition", "renewable", "solar energy", "wind energy",
      "nuclear energy", "nuclear power", "hydrogen",
      "natural gas", "lng", "opec", "opec+",
      "electric vehicle", "ev ", "battery", "lithium",
      "power grid", "blackout", "energy crisis",
      "pipeline", "drilling", "fracking",
      // Environmental regulation
      "epa ", "environmental regulation", "emission standard",
      "deforestation", "biodiversity",
    ],
  },

  publicHealth: {
    label: "publicHealth",
    icon: "chart",
    color: "#14B8A6",
    keywords: [
      // Pandemics & disease
      "pandemic", "epidemic", "outbreak", "covid", "coronavirus",
      "bird flu", "h5n1", "mpox", "monkeypox", "who emergency",
      "public health emergency", "quarantine", "lockdown",
      // Drug approvals & pharma
      "fda approval", "drug approval", "vaccine", "clinical trial",
      "pharmaceutical", "pharma ", "biotech",
      "weight loss drug", "ozempic", "wegovy", "glp-1",
      // Health policy
      "healthcare", "health insurance", "medicaid", "medicare",
      "universal health", "obamacare", "aca ",
      "opioid", "fentanyl crisis", "drug overdose",
      // WHO & global health
      "who ", "world health organization",
      "disease surveillance", "health regulation",
    ],
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// LATAM RELEVANCE KEYWORDS
// Markets mentioning these get flagged as regionally relevant.
// ═══════════════════════════════════════════════════════════════════════════════
const LATAM_KEYWORDS = [
  // Mexico
  "mexico", "méxico", "mexican", "banxico", "peso", "mxn", "usd/mxn",
  "t-mec", "tmec", "usmca", "nearshoring", "sheinbaum", "amlo", "morena",
  "pemex", "cfe ", "reforma",
  // Central America & Caribbean
  "guatemala", "honduras", "el salvador", "bukele", "costa rica",
  "panama", "canal de panama", "panama canal", "nicaragua", "cuba",
  "dominican republic", "puerto rico", "jamaica", "haiti",
  // South America
  "brazil", "brasil", "lula", "bolsonaro", "petrobras",
  "argentina", "milei", "buenos aires", "peso argentino",
  "colombia", "petro", "bogota",
  "chile", "boric", "santiago", "lithium chile",
  "peru", "lima",
  "venezuela", "maduro", "pdvsa",
  "ecuador", "quito",
  "uruguay", "paraguay", "bolivia",
  // Regional terms
  "latin america", "latam", "américa latina", "latinoamerica",
  "mercosur", "alianza del pacifico", "pacific alliance",
  "inter-american", "oas ", "oea ", "cepal", "eclac",
  "remittance", "remesas",
];


// ═══════════════════════════════════════════════════════════════════════════════
// CACHE
// ═══════════════════════════════════════════════════════════════════════════════
let _cache = { data: null, ts: 0 };
const CACHE_TTL = 45_000; // 45 seconds

function getCachedMarkets() {
  if (_cache.data && Date.now() - _cache.ts < CACHE_TTL) return _cache.data;
  return null;
}

function setCachedMarkets(data) {
  _cache = { data, ts: Date.now() };
}

function clearMarketCache() {
  _cache = { data: null, ts: 0 };
}

// ═══════════════════════════════════════════════════════════════════════════════
// FILTERING & CLASSIFICATION
// ═══════════════════════════════════════════════════════════════════════════════

/** Build searchable text from a raw market object */
function haystack(m) {
  return `${m.question || ""} ${m.slug || ""} ${m.description || ""}`.toLowerCase();
}

/** Layer 1: returns true if the market should be EXCLUDED */
function isExcluded(text) {
  for (const kw of EXCLUDE_KEYWORDS) {
    if (text.includes(kw)) return true;
  }
  return false;
}

/** Layer 2: classify into an enterprise category. Returns key or null. */
function classifyEnterprise(text) {
  for (const [catKey, cat] of Object.entries(ENTERPRISE_CATEGORIES)) {
    for (const kw of cat.keywords) {
      if (text.includes(kw)) return catKey;
    }
  }
  return null;
}

/** Check if the market has LATAM/MX relevance */
function isLatamRelevant(text) {
  for (const kw of LATAM_KEYWORDS) {
    if (text.includes(kw)) return true;
  }
  return false;
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN FILTER PIPELINE
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Filter and classify raw markets from the Polymarket API.
 *
 * @param {Array} rawMarkets — array of raw market objects from the API
 * @returns {Array} — filtered, classified, and sorted market objects
 */
function filterEnterpriseMarkets(rawMarkets) {
  const cached = getCachedMarkets();
  if (cached) return cached;

  const results = [];

  for (const m of rawMarkets) {
    if (!m.outcomePrices || !m.outcomes || !m.question) continue;

    const text = haystack(m);

    // Layer 1: exclude sports, entertainment, trivial, degen
    if (isExcluded(text)) continue;

    // Layer 2: must match an enterprise category
    const category = classifyEnterprise(text);
    if (!category) continue;

    const volume = parseFloat(m.volume24hr || m.volume || "0");

    // Parse prices and outcomes (guard against malformed JSON from API)
    let prices, outcomes;
    try {
      prices = typeof m.outcomePrices === "string"
        ? JSON.parse(m.outcomePrices)
        : m.outcomePrices;
      outcomes = typeof m.outcomes === "string"
        ? JSON.parse(m.outcomes)
        : m.outcomes;
    } catch {
      continue;
    }

    const latamRelevant = isLatamRelevant(text);

    // Parse end date if available
    const endDate = m.endDate || m.end_date || m.resolutionDate || null;
    const endTs = endDate ? new Date(endDate).getTime() : null;

    results.push({
      id: m.id || m.condition_id || String(Math.random()),
      question: m.question,
      slug: m.slug || "",
      description: m.description || "",
      image: m.image || m.icon || null,
      prices: prices.map((p) => parseFloat(p)),
      outcomes,
      volume24hr: volume,
      volume: parseFloat(m.volume || m.volumeNum || "0"),
      category,
      latamRelevant,
      endDate: endDate || null,
      endTimestamp: endTs,
      link: m.slug ? `https://polymarket.com/event/${m.slug}` : null,
    });
  }

  // ── Sort: LATAM first, then by volume desc, then by proximity of end date ──
  results.sort((a, b) => {
    // 1. LATAM relevant markets bubble up
    if (a.latamRelevant !== b.latamRelevant) return a.latamRelevant ? -1 : 1;

    // 2. Higher volume wins
    const volDiff = b.volume24hr - a.volume24hr;
    if (Math.abs(volDiff) > 1000) return volDiff;

    // 3. Markets resolving sooner get priority (if both have end dates)
    if (a.endTimestamp && b.endTimestamp) return a.endTimestamp - b.endTimestamp;
    if (a.endTimestamp) return -1;
    if (b.endTimestamp) return 1;

    return 0;
  });

  setCachedMarkets(results);
  return results;
}

// ═══════════════════════════════════════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════════════════════════════════════

export {
  ENTERPRISE_CATEGORIES,
  EXCLUDE_KEYWORDS,
  LATAM_KEYWORDS,
  filterEnterpriseMarkets,
  clearMarketCache,
  getCachedMarkets,
};
