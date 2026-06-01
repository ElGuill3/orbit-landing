## Tasks: Fix Translation and Navigation Links on Market & Timing Pages

- [ ] Task 1: Update `src/shared/translations.js` Dictionary
  - Add comprehensive translations under `translations.es.market` and `translations.en.market`.
  - Add comprehensive translations under `translations.es.timing` and `translations.en.timing`.
  - Ensure all lists, cards, badges, and headers are captured.

- [ ] Task 2: Refactor `src/pages/MarketPage.jsx`
  - Import `useLang` from `../shared/i18n`.
  - Fetch `{ i18n } = useLang()`.
  - Replace inline hardcoded texts, headers, lists (`GIANTS`, `CAPITAL_DATA`, `VOLUME_DATA`, `PROJECTIONS`, `MEDIA_PARTNERS`) with the localized `i18n.market.*` counterparts.

- [ ] Task 3: Refactor `src/pages/WhyNowPage.jsx`
  - Import `useLang` from `../shared/i18n`.
  - Fetch `{ i18n } = useLang()`.
  - Replace inline hardcoded texts, list bullets, insights, stats, and cards with the localized `i18n.timing.*` counterparts.

- [ ] Task 4: Fix Navbar Anchor & Footer Links in `src/shared/Layout.jsx`
  - Import `useNavigate` from `react-router-dom`.
  - Modify desktop and mobile hash menu button click handlers:
    - If `location.pathname !== "/"`, navigate to `/${target}`.
    - If `location.pathname === "/"`, run `scrollTo(target.slice(1))`.
  - Add `useEffect` to handle smooth scroll to `location.hash` after route transitions complete.
  - Clean up footer navigation array to use `/#engine`, `/#performance`, `/#faq`, and `/` for "El Fondo".

- [ ] Task 5: Compilation and Verification
  - Run `npm run build` to compile the app and ensure all routes generate without errors.
  - Manually test routing transitions and language switching using the local server.
