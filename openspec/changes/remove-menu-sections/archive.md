# Change Archive - Remove Menu Sections

This document archives the final state of the change to remove "Risk", "Intelligence", "Agents", and "Whitepaper" sections from the Orbit Capital platform.

## 1. Overview of Changes
To focus the site purely on Orbit Capital, the other products/documents were removed.
- **Removed Pages**: `RiskLanding`, `IntelLanding`, `WhitepaperPage`, `AgentsPage`, `IntelDashboard`.
- **Navigation Menu & Footer**: Pruned all references to the above pages.
- **Routing**: `App.jsx` updated to remove all deprecated routes.
- **SEO & Sitemaps**: Removed these routes from `public/sitemap.xml`, `useSEO.js`, and `scripts/prerender.mjs`.
- **Testing**: Cleaned up Playwright `test_frontend.py` routes and assertions.

## 2. File Artifact Trail
All steps of the change are documented in the following files:
- `/openspec/changes/remove-menu-sections/exploration.md` - Technical and design feasibility.
- `/openspec/changes/remove-menu-sections/proposal.md` - Plan outline and tradeoffs.
- `/openspec/changes/remove-menu-sections/spec.md` - Technical specification.
- `/openspec/changes/remove-menu-sections/tasks.md` - Step-by-step task checklist.
- `/openspec/changes/remove-menu-sections/verification.md` - Compilation and test validation results.

## 3. Final Commit Info
Suggested commit message:
`feat(cleanup): remove risk, intelligence, agents, and whitepaper sections`
