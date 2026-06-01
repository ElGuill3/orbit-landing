import { useState, useEffect, Component, lazy, Suspense } from "react";
import { Routes, Route, useLocation, Link, Navigate } from "react-router-dom";
import { ThemeCtx, THEMES } from "./shared/theme";
import { LangCtx, translations } from "./shared/i18n";
import { useSEO } from "./shared/useSEO";
import Layout from "./shared/Layout";
import { captureException } from "./shared/useAnalytics";

// Vercel analytics loaded lazily — not render-blocking
const LazyAnalytics = lazy(() => import("@vercel/analytics/react").then(m => ({ default: m.Analytics })));
const LazySpeedInsights = lazy(() => import("@vercel/speed-insights/react").then(m => ({ default: m.SpeedInsights })));

/* ── Lazy-loaded page components for code splitting ── */
const CapitalLanding = lazy(() => import("./pages/CapitalLanding"));
const MarketPage = lazy(() => import("./pages/MarketPage"));
const WhyNowPage = lazy(() => import("./pages/WhyNowPage"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogArticle = lazy(() => import("./pages/BlogArticle"));
const PitchPage = lazy(() => import("./pages/pitch/PitchPage"));
const InvestPage = lazy(() => import("./pages/invest/InvestPage"));

function ScrollToTop() {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        if (!hash) {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);
    return null;
}

function SEOManager({ lang }) {
    useSEO(lang);
    return null;
}
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    captureException(error, {
      componentStack: errorInfo?.componentStack,
    });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 60, textAlign: "center" }}>
          <h1 style={{ fontSize: 24, marginBottom: 12 }}>Something went wrong</h1>
          <p style={{ marginBottom: 20 }}>An unexpected error occurred.</p>
          <button onClick={() => { this.setState({ hasError: false }); window.location.href = "/"; }}
            style={{ padding: "10px 24px", fontSize: 14, cursor: "pointer", borderRadius: 8, border: "1px solid #ccc", background: "none" }}>
            Go Home
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function NotFound() {
  return (
    <div style={{ padding: "120px 20px 60px", textAlign: "center", minHeight: "60vh" }}>
      <h1 style={{ fontSize: 72, fontWeight: 800, margin: "0 0 8px", opacity: 0.15 }}>404</h1>
      <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Page not found</h2>
      <p style={{ marginBottom: 24, opacity: 0.7 }}>The page you're looking for doesn't exist.</p>
      <Link to="/" style={{ padding: "10px 24px", fontSize: 14, borderRadius: 8, border: "1px solid #888", textDecoration: "none" }}>
        Go Home
      </Link>
    </div>
  );
}

function getInitialLang() {
  if (typeof navigator !== "undefined") {
    const langs = navigator.languages || [navigator.language || ""];
    if (langs.some((l) => l.toLowerCase().startsWith("es"))) return "es";
  }
  return "en";
}

function getInitialMode() {
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return "dark";
}

export default function App() {
  const [mode, setMode] = useState(getInitialMode);
  const [lang, setLang] = useState(getInitialLang);
  const t = THEMES[mode];
  const toggle = () => setMode((m) => (m === "dark" ? "light" : "dark"));
  const toggleLang = () => setLang((l) => (l === "es" ? "en" : "es"));
  const i18n = translations[lang];

  // Listen for system preference changes
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => setMode(e.matches ? "dark" : "light");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <ErrorBoundary>
      <ThemeCtx.Provider value={{ mode, t, toggle }}>
        <LangCtx.Provider value={{ lang, toggleLang, i18n }}>
          <ScrollToTop />
          <SEOManager lang={lang} />
          <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
            <Routes>
              <Route path="/pitch" element={<PitchPage />} />
              <Route path="/invest" element={<InvestPage />} />
              <Route path="*" element={
                <Layout>
                  <Routes>
                    <Route path="/" element={<CapitalLanding />} />
                    <Route path="/capital" element={<Navigate to="/" replace />} />
                    <Route path="/capital/market" element={<MarketPage />} />
                    <Route path="/capital/timing" element={<WhyNowPage />} />
                    <Route path="/team" element={<TeamPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogArticle />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Layout>
              } />
            </Routes>
          </Suspense>
          <Suspense fallback={null}>
            <LazyAnalytics />
            <LazySpeedInsights />
          </Suspense>
        </LangCtx.Provider>
      </ThemeCtx.Provider>
    </ErrorBoundary>
  );
}
