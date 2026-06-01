## Exploration: Fix Translation and Navigation Links on Market & Timing Pages

### Current State
1. **Translation Failures**: The Market (`/capital/market` via `MarketPage.jsx`) and Timing (`/capital/timing` via `WhyNowPage.jsx`) sub-pages have all of their textual content, section titles, headers, cards, and tables hardcoded in Spanish. They do not import `useLang` or utilize the dictionary in `src/shared/translations.js`, which prevents content localization when the language is toggled.
2. **Broken Navigation Links**: The navigation header for Orbit Capital features anchor links (`#engine`, `#performance`, `#infra`, `#terms`, `#faq`). Clicking these links when visiting the sub-pages `/capital/market` or `/capital/timing` does not work because `document.getElementById(...)` returns `null` on these pages.
3. **Footer Redirect Links**: The footer contains outdated references to `/capital` (e.g., `/capital#engine`, `/capital#performance`), which trigger unnecessary routing redirects.

### Affected Areas
- `src/shared/translations.js` — Needs new dictionary keys for all textual content in `MarketPage.jsx` and `WhyNowPage.jsx` (both Spanish and English locales).
- `src/pages/MarketPage.jsx` — Must import and consume the `i18n` translation keys.
- `src/pages/WhyNowPage.jsx` — Must import and consume the `i18n` translation keys.
- `src/shared/Layout.jsx` — Needs routing navigation support for anchor links when not on the root page `/`, including a hash scroll utility that runs on page transitions.
- `test_frontend.py` — May need E2E route checks for translations.

### Approaches

#### 1. Page Translation Approach
- **Approach**: Extract all text segments (headers, subheaders, lists, tables, cards, descriptions) into `src/shared/translations.js` under the keys `market` and `timing` for both `es` and `en` blocks. Use React components/interpolation for styling elements (like bold `<strong>` tags or dynamic percentages).
- **Pros**: Clean separation of translation concerns, completely localizable, standard pattern across the workspace.
- **Cons**: Requires mapping a large number of nested keys.
- **Effort**: Medium-Low

#### 2. Anchor Links Fix Approach
- **Approach**: Modify `Layout.jsx` to check if `location.pathname === "/"`.
  - If yes, use the current `scrollTo(target.slice(1))` logic.
  - If no, use `navigate("/" + target)` (using React Router's `useNavigate` hook).
  - Add a `useEffect` inside `Layout.jsx` that listens to `location.pathname` and `location.hash` to smooth-scroll to the targeted element upon mounting or route change.
- **Pros**: Solves navigation globally across all sub-pages, extremely clean user experience with smooth scrolling.
- **Cons**: None.
- **Effort**: Low

### Recommendation
Implement both approaches:
- Create `market` and `timing` blocks in `src/shared/translations.js`.
- Refactor `MarketPage.jsx` and `WhyNowPage.jsx` to load their text via `useLang()`.
- Update `Layout.jsx` with `useNavigate` and a scroll-to-hash effect, ensuring anchor links navigate to `/{hash}` when clicked from sub-pages and scroll down smoothly on transition.
- Align footer paths to use clean root hashes (e.g. `/#engine`).

### Risks
- Missing dynamic numbers or text styling in translations: Ensure nested inline elements like `<strong>` are handled correctly via JSX splitting or string replacements.
- Page rendering race conditions during route transition hash scroll: The scroll helper should wait briefly (100ms via `setTimeout`) for the DOM of the target page to be fully mounted before scrolling.

### Ready for Proposal
Yes. The orchestrator is ready to present the exploration results and proceed to the Proposal phase.
