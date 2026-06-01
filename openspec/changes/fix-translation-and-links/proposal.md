## Proposal: Fix Translation and Navigation Links on Market & Timing Pages

### Problem
1. **Hardcoded Spanish Texts**: The pages `/capital/market` (Market) and `/capital/timing` (Timing) are static and completely hardcoded in Spanish, meaning the language toggles in the header do not affect them at all.
2. **Broken Navigation Links**: Anchor/hash links (such as `#engine`, `#performance`, `#infra`, `#terms`, `#faq`) in the header navbar do not function when clicked from these sub-pages because the local DOM does not contain those elements.
3. **Redundant Footer Links**: Footer paths point to `/capital#engine` instead of directly to `/#engine`.

### Solution

1. **Dictionary Updates (`src/shared/translations.js`)**:
   - Create comprehensive translation blocks under `translations.es` and `translations.en` for `market` and `timing` namespaces.
   - Capture all sub-headers, table labels, card bodies, badges, and button labels.

2. **Page Refactor (`MarketPage.jsx` & `WhyNowPage.jsx`)**:
   - Import `useLang` from `../shared/i18n`.
   - Re-wire all strings to consume `i18n.market.*` and `i18n.timing.*`.
   - Format numeric counts and structured list arrays dynamically.

3. **Navigation Fix (`src/shared/Layout.jsx`)**:
   - Import `useNavigate` from `react-router-dom`.
   - Modify the header navbar click logic:
     - If clicked link is a hash link and the page is NOT the root `/`, use `navigate("/" + target)` instead of invoking `scrollTo(...)` immediately.
     - Add a global `useEffect` inside `Layout.jsx` listening to `location.hash` and `location.pathname` to smoothly scroll to elements after navigation transitions complete.
   - Clean up navigation paths in the footer to point to root (`/`) rather than `/capital` paths (e.g. `/#engine`, `/#performance`, `/#faq`, and `/` for "El Fondo").

### Verification Plan
1. **Compilation Check**: Run `npm run build` to verify there are no syntax errors or missing variables.
2. **E2E/Manual Navigation Check**: Verify that:
   - Language toggles correctly localize all elements on `/capital/market` and `/capital/timing`.
   - Clicking navbar links on `/capital/market` and `/capital/timing` redirects to the homepage and smooth-scrolls to the target section.
