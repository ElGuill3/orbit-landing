## Technical Specification: Fix Translation and Navigation Links on Market & Timing Pages

This specification defines the changes required to localize `MarketPage.jsx` and `WhyNowPage.jsx` and to ensure that anchor navigation works correctly when navigated from sub-pages.

### 1. Translation System Expansion (`src/shared/translations.js`)
Introduce new translation namespaces `market` and `timing` under both `es` and `en` blocks in `src/shared/translations.js`.
- **`market` block**:
  - `heroTag`: Locale-specific label for the hero tag ("Validación Institucional" / "Institutional Validation").
  - `heroTitle`: Page main title ("Wall Street ya Apostó" / "Wall Street Already Bet").
  - `heroDesc`: Description of hedge funds trading on prediction markets.
  - `giantsTag`, `giantsTitle`: Smart Money section header.
  - `giantsList`: Array containing names, descriptions, and icon names for the four wall street giants.
  - `fundingTag`, `fundingTitle`: Funding section headers.
  - `fundingTableHeaders`: 플랫폼/Capital Raised/Valuation/Key Investors columns.
  - `fundingList`: Matrix data for Polymarket and Kalshi raised funds and valuations.
  - `fundingNoteLabel`, `fundingNote`: Detailed breakout footnote on ICE's $2B bet.
  - `volTag`, `volTitle`, `volDesc`: Volume growth section labels.
  - `volTableHeaders`, `volList`: Table metadata and historical volume figures for 2023, 2024, and 2025.
  - `volCounters`: Stats card counts and labels.
  - `projTag`, `projTitle`, `projDesc`: Future projections section labels.
  - `projTableHeaders`, `projList`: Projection growth table rows (Conservative, Base, Optimistic).
  - `projCatalystsTitle`, `projCatalystsList`: Bulleted upcoming catalysts.
  - `mediaTag`, `mediaTitle`, `mediaDesc`: Media verification section labels.
  - `mediaList`: Partnerships detailed (CNN, CNBC, Google, Dow Jones, NHL, X).
  - `relevanceTag`, `relevanceTitle`: Orbit value-add section.
  - `relevanceCards`: Four cards clarifying why prediction markets growth matters for Orbit Capital.
- **`timing` block**:
  - `heroTag`: "Timing".
  - `heroTitle`: "¿Por Qué Ahora?" / "Why Now?".
  - `heroDesc`: Four massive forces converging.
  - `t1Tag`, `t1Title`, `t1Desc`, `t1Agents`, `t1DeployersTitle`, `t1Deployers`, `t1InsightLabel`, `t1Insight`: Section details for AI agent explosion.
  - `t2Tag`, `t2Title`, `t2Desc`, `t2Bullets`, `t2InsightLabel`, `t2Insight`: Real-time intelligence stack details (Grok & X).
  - `t3Tag`, `t3Title`, `t3Desc`, `t3Stats`, `t3InsightLabel`, `t3Insight`: Prediction markets mainstream trajectory.
  - `t4Tag`, `t4Title`, `t4Desc`, `t4Bullets`, `t4Stats`, `t4InsightLabel`, `t4Insight`: Mexico's regulatory/incertitude landscape.
  - `orbitAiTag`, `orbitAiTitle`, `orbitAiDesc`, `orbitAiCards`: AI agent platform scale justification.

### 2. Market Page Refactor (`src/pages/MarketPage.jsx`)
- Import `useLang` from `../shared/i18n`.
- Fetch `{ i18n } = useLang()`.
- Replace all raw strings and inline arrays (`GIANTS`, `CAPITAL_DATA`, `VOLUME_DATA`, `PROJECTIONS`, `MEDIA_PARTNERS`, and section labels) with dynamic dictionary values from `i18n.market.*`.

### 3. Timing Page Refactor (`src/pages/WhyNowPage.jsx`)
- Import `useLang` from `../shared/i18n`.
- Fetch `{ i18n } = useLang()`.
- Replace all raw strings and inline lists (`Tailwind 1` through `Tailwind 4` text keys, insight boxes, list values, counter stats, and cards) with dictionary values from `i18n.timing.*`.

### 4. Navbar & Footer Navigation (`src/shared/Layout.jsx`)
- **Header Navigation Hook**: Import `useNavigate` from `react-router-dom` and instantiate it inside `Layout`.
- **Anchor Link Redirection**: Modify desktop (`renderNavLink`) and mobile menu navbar button handlers:
  - If a clicked route begins with `#` and `location.pathname !== "/"`, execute `navigate("/" + target)` instead of scrolling local DOM.
  - If `location.pathname === "/"`, invoke `scrollTo(target.slice(1))` directly.
- **Hash Scroll Hook**: Implement a `useEffect` looking at `location.hash` and `location.pathname` that checks for active hashes. If present, it executes `scrollIntoView({ behavior: "smooth" })` after a short mount-delay (100ms).
- **Footer Links Clean-up**: Update footer paths array to route directly to root `/` rather than `/capital` routes:
  - `[f.elFondo, "/capital"]` -> `[f.elFondo, "/"]`
  - `[f.orbitEngine, "/capital#engine"]` -> `[f.orbitEngine, "/#engine"]`
  - `[f.performance, "/capital#performance"]` -> `[f.performance, "/#performance"]`
  - `["FAQ", "/capital#faq"]` -> `["FAQ", "/#faq"]`
