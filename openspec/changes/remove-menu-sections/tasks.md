## Tasks: Remove Menu Sections (Risk, Intelligence, Agents, Whitepaper)

- [ ] Task 1: Physical file deletion
  - Delete `src/pages/Home.jsx`
  - Delete `src/pages/RiskLanding.jsx`
  - Delete `src/pages/IntelLanding.jsx`
  - Delete `src/pages/WhitepaperPage.jsx`
  - Delete `src/pages/AgentsPage.jsx`
  - Delete `src/shared/IntelDashboard.jsx`

- [ ] Task 2: Update App.jsx Routing
  - Remove imports for the deleted page components.
  - Update route `/` to render `<CapitalLanding />`.
  - Add a Route redirect or route handler for `/capital` that points to `/`.
  - Delete routes for `/risk`, `/intel`, `/whitepaper`, `/agents`.

- [ ] Task 3: Update Layout.jsx Header and Footer Links
  - Update `getNavLinks` default array to: `[[i18n.nav.capital, "/"]]`.
  - In `MegaDropdown` and `ProductsDropdown`, remove sections rendering Risk and Intel details.
  - In footer rendering, remove columns/links for Risk, Intel, Agents, and Whitepaper.

- [ ] Task 4: Update useSEO.js SEO Config
  - Remove keys `"/risk"`, `"/intel"`, `"/whitepaper"`, `"/agents"` from `SEO_CONFIG`.
  - Prune the same keys from `BREADCRUMB_LABELS`.
  - Update the `SiteNavigationElement` array inside `SEO_CONFIG["/"]` to remove Risk, Intel, Agents, and Whitepaper.

- [ ] Task 5: Update prerender.mjs Build Script
  - Remove routes `/risk`, `/intel`, `/whitepaper`, `/agents` from the `ROUTES` array.
  - Remove the navigation links in the fallback `noscript` block for the deleted routes.

- [ ] Task 6: Update sitemap.xml
  - Remove the `<url>` entries for the deleted pages.

- [ ] Task 7: Update test_frontend.py Tests
  - Remove `("/intel", "Intel Landing")` from `ROUTES`.
  - Remove the "Intel Modal" test block (lines 202-214).

- [ ] Task 8: Validation and verification
  - Run `npm run build` to verify compilation.
  - Run `python3 -m pytest test_frontend.py` or local Playwright verification commands.
