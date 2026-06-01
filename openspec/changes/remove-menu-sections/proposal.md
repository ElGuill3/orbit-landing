## Proposal: Remove Menu Sections (Risk, Intelligence, Agents, Whitepaper)

### Problem
The user wants to streamline the application, focusing entirely on **Orbit Capital** and removing the other three pillars (Risk, Intelligence/Intel, Agents) as well as the Whitepaper section. The current homepage is built around the three-pillar ecosystem, and there are separate landings and assets for all of them.

### Solution
1. **Root Routing (`/`)**:
   - Re-route the root path `/` to render `<CapitalLanding />` directly.
   - Redirect `/capital` to `/` (or keep both rendering `<CapitalLanding />` to prevent broken links).
   - This completely avoids loading the complex multi-product homepage (`Home.jsx`), which is heavy due to multiple 3D canvases, interactive flywheel SVG diagrams, and marquee lists.
2. **File Cleanup**:
   - Delete/disable the following unused pages and component files:
     - `src/pages/Home.jsx`
     - `src/pages/RiskLanding.jsx`
     - `src/pages/IntelLanding.jsx`
     - `src/pages/WhitepaperPage.jsx`
     - `src/pages/AgentsPage.jsx`
     - `src/shared/IntelDashboard.jsx`
3. **Navigation & Layout (`Layout.jsx`)**:
   - Update `getNavLinks` to only return `Capital` and other non-deleted links (e.g. `Blog`, `Team`).
   - Remove MegaDropdowns and ProductsDropdowns that list Risk and Intel.
   - Clean up footer links to remove Risk, Intel, Agents, and Whitepaper columns.
4. **Metadata & SEO (`useSEO.js` & `sitemap.xml` & `prerender.mjs`)**:
   - Strip references to deleted paths from `SEO_CONFIG` and `BREADCRUMB_LABELS`.
   - Update `public/sitemap.xml` and `scripts/prerender.mjs` to only prerender and index the remaining active routes.
5. **E2E Testing (`test_frontend.py`)**:
   - Update the Playwright test suite `ROUTES` array to remove `/intel`, `/risk`, `/whitepaper`, `/agents`.
   - Delete/adjust test assertions targeting deleted pages/elements.

### Performance Analysis (Bundle Size & Latency)
- **Zero Latency Impact**: Because we are removing the imports and routes for `Home.jsx`, `RiskLanding`, `IntelLanding`, etc. in `App.jsx`, Vite's tree-shaking will completely omit these files and their heavy assets/dependencies (like the flywheel canvas, agents data, custom illustrations) from the production build bundle.
- **Initial Load Optimization**: Since the root page `/` will now render `CapitalLanding` (which only loads the clean Capital canvas), the initial page load time and JavaScript execution latency will be significantly lower than the previous multi-product landing.

### Verification Plan
- Build testing: Run `npm run build` and check for compilation warnings/errors.
- E2E testing: Run `python3 -m pytest test_frontend.py` (or equivalent test runner) to confirm the frontend behaves correctly under the new route configuration.
