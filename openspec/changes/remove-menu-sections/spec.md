## Technical Specification: Remove Menu Sections (Risk, Intelligence, Agents, Whitepaper)

This specification outlines the concrete changes to be applied across the repository.

### 1. File Deletions (Unused Components & Pages)
The following files are no longer needed and will be physically deleted to prevent them from being imported, processed, or packaged:
- `src/pages/Home.jsx`
- `src/pages/RiskLanding.jsx`
- `src/pages/IntelLanding.jsx`
- `src/pages/WhitepaperPage.jsx`
- `src/pages/AgentsPage.jsx`
- `src/shared/IntelDashboard.jsx`

### 2. Routing Configuration (`src/App.jsx`)
- Remove lazy imports for the deleted pages: `Home`, `RiskLanding`, `IntelLanding`, `WhitepaperPage`, `AgentsPage`.
- Import `CapitalLanding` lazily.
- Update routes under `<Routes>`:
  - Route `/` will now render `<CapitalLanding />` instead of `<Home />`.
  - Add a redirect/fallback from `/capital` to `/` to ensure any existing bookmarks/links redirect to the new home route seamlessly.
  - Delete `<Route>` definitions for `/risk`, `/intel`, `/whitepaper`, and `/agents`.

### 3. Layout & Navigation (`src/shared/Layout.jsx`)
- **Navigation Links (`getNavLinks`)**:
  - Update the `default` navigation array to only include `[i18n.nav.capital, "/"]` (rendering "Capital" pointing to root `/`).
- **Mega Dropdown & Products Dropdown**:
  - Remove references to `Orbit Risk` and `Orbit Intel` in product grids and dropdown rendering functions (`MegaDropdown`, `ProductsDropdown`).
  - Strip sub-navigation handlers and ACCENTS configurations referring to the deleted products.
- **Footer Links**:
  - Clean up footer columns to remove links to Risk, Intel, Agents, and Whitepaper.
  - Retain links to Capital, Team, Blog, Privacy, and Terms.

### 4. SEO & Metadata (`src/shared/useSEO.js`)
- Remove the following configuration blocks from `SEO_CONFIG`:
  - `/intel`
  - `/risk`
  - `/whitepaper`
  - `/agents`
- In the `/` root configuration block of `SEO_CONFIG`, update `SiteNavigationElement` to exclude:
  - `"Risk"`, `"Intel"`, `"Agents"`, `"Whitepaper"` (both names and URLs).
- Update the `/` title and description to represent the unified Orbit Capital focus.
- Remove the keys for `/intel`, `/risk`, `/whitepaper`, and `/agents` from `BREADCRUMB_LABELS`.

### 5. Build Prerendering (`scripts/prerender.mjs`)
- Update the `ROUTES` array to remove configurations for `/intel`, `/risk`, `/whitepaper`, and `/agents`.
- Prune the `<nav>` inside the `noscript` fallback block to remove deleted page links.

### 6. Sitemap (`public/sitemap.xml`)
- Remove `<url>` records for:
  - `https://orbitcapital.ai/intel`
  - `https://orbitcapital.ai/risk`
  - `https://orbitcapital.ai/whitepaper`
  - `https://orbitcapital.ai/agents`

### 7. Playwright E2E Tests (`test_frontend.py`)
- Remove `"/intel"` and `"/risk"` from the global `ROUTES` list tested by `test_page_loads`.
- Delete or modify test cases that specifically navigate to `/intel` or interact with elements on `/intel` / `/risk` (e.g. form fields specific to those sections).
