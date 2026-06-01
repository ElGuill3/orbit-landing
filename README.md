# Orbit Landing

Landing page for [Orbit Intelligence](https://orbit-landing-nine.vercel.app) — AI-powered prediction market analytics platform.

## Tech Stack

- **Framework:** React + Vite
- - **Language:** JavaScript (JSX)
  - - **Deployment:** Vercel
    - - **Backend:** Supabase (form submissions)
      - - **Analytics:** Vercel Web Analytics + Speed Insights, PostHog
       
        - ## Getting Started
       
        - ```bash
          # Clone the repository
          git clone git@github.com:cryptonyai/orbit-landing.git
          cd orbit-landing

          # Install dependencies
          npm install

          # Copy environment variables
          cp .env.example .env

          # Start development server
          npm run dev
          ```

          ## Project Structure

          ```
          src/           # React components, pages, and styles
          public/        # Static assets (images, fonts, icons)
          tests/         # Test suites
          .claude/       # Claude Code configuration
          .github/       # GitHub Actions workflows
          ```

          ## Deployment

          Production deploys automatically on push to `main` via Vercel.

          ## License

          Private repository — all rights reserved.
