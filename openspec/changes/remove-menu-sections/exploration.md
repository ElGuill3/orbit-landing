## Exploration: Remove Menu Sections (Risk, Intelligence, Agents, Whitepaper)

### Current State
Currently, the Orbit landing page, navigation header, sitemap, SEO configuration, prerendering script, and test suite refer to five core pillars/sections: Capital, Risk, Intelligence (Intel), Agents, and Whitepaper. The user wants to remove all sections except for **Capital**, including all downstream references, page files, routes, dropdowns, and testing scripts.

### Affected Areas
- `src/App.jsx` — Route mappings and lazy imports for `RiskLanding`, `IntelLanding`, `WhitepaperPage`, and `AgentsPage` need to be deleted.
- `src/shared/Layout.jsx` — Header and footer navigation links and sub-menus (mega dropdowns, product matrices) for Risk, Intel, Agents, and Whitepaper need to be stripped.
- `src/pages/Home.jsx` — Currently references all three main products (Capital, Risk, Intel) with a central Flywheel SVG diagram. It needs to be simplified or redirected/replaced.
- `src/shared/useSEO.js` — Contains SEO configuration mapping and breadcrumb labels for the removed routes, which must be deleted.
- `src/shared/translations.js` — Translation tables contain keys for Risk, Intel, Agents, and Whitepaper, which should be pruned to keep the localization files clean.
- `scripts/prerender.mjs` — Build-time prerender array contains route metadata for the removed routes; these must be removed.
- `public/sitemap.xml` — Sitemap entries for the deleted pages need to be deleted.
- `test_frontend.py` — Frontend Playwright/Python tests visit the `/intel` page and include other routes in page load checks; these must be updated to prevent build/test failures.
- Deleted Page files:
  - `src/pages/RiskLanding.jsx`
  - `src/pages/IntelLanding.jsx`
  - `src/pages/WhitepaperPage.jsx`
  - `src/pages/AgentsPage.jsx`
  - `src/shared/IntelDashboard.jsx`

### Approaches
1. **Approach 1: Route Redirect + Simplified Home Page**
   - Make `/` render a trimmed-down version of the homepage that only mentions Capital (removing Flywheel, Agents marquee, Risk, and Intel sections), and remove all other routes.
   - Pros: Preserves a custom homepage layout.
   - Cons: High effort to redesign `Home.jsx` without the core ecosystem concept. Code duplication with `CapitalLanding.jsx`.
   - Effort: Medium

2. **Approach 2: Capital Landing as Root Homepage**
   - Make `/` serve `CapitalLanding` directly, and set up a redirect from `/capital` to `/` (or keep both pointing to `CapitalLanding` to avoid broken links). Delete the existing `Home.jsx` or replace it with a simple export of `CapitalLanding`.
   - Pros: Low effort, no code duplication, high-fidelity experience is preserved because `CapitalLanding.jsx` is already a premium, polished landing page. Completely fits the requirement of "leaving only capital".
   - Cons: None.
   - Effort: Low

### Recommendation
Implement **Approach 2**: Make the root path `/` render `<CapitalLanding />` directly, and redirect `/capital` to `/` (or have `/capital` render the same page/redirect). This aligns perfectly with the brand positioning where Capital is the sole focus. It avoids having to maintain a rewritten, custom, and potentially less polished homepage, while removing all trace files of the other sections.

### Risks
- Playwright tests (`test_frontend.py`) fail due to visiting missing pages (`/intel`, `/risk`). We must update the test file dynamically.
- Stale redirects in Vercel. We will update `vercel.json` redirects to route from any leftover hostnames (e.g. `orbitrisk.ai`, `orbitintelligence.ai`) directly to `https://orbitcapital.ai/`.

### Ready for Proposal
Yes. The orchestrator should present this exploration document to the user and request approval to proceed to the Proposal and Specification phase.
