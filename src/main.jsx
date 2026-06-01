import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// PostHog is loaded lazily after first paint to avoid blocking the critical render path.
// The vendor-analytics chunk (~180KB) is no longer render-blocking.
function LazyPostHogProvider({ children }) {
  const [Provider, setProvider] = React.useState(null);
  const phRef = React.useRef(null);

  React.useEffect(() => {
    const posthogKey = import.meta.env.VITE_PUBLIC_POSTHOG_KEY;
    if (!posthogKey) return;

    // Defer analytics initialization until after first paint
    const init = () => {
      import('posthog-js').then((posthogModule) => {
        const posthog = posthogModule.default;
        posthog.init(posthogKey, {
          api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
          person_profiles: 'identified_only',
          capture_pageview: true,
          capture_pageleave: true,
          disable_surveys: true,
        });
        phRef.current = posthog;
        // Expose for error boundary fallback
        window.__posthog = posthog;

        // Capture unhandled async errors that React ErrorBoundary cannot catch
        window.addEventListener('error', (e) => {
          posthog.capture('$exception', { message: e.message, source: e.filename, line: e.lineno });
        });
        window.addEventListener('unhandledrejection', (e) => {
          posthog.capture('$exception', { message: String(e.reason), type: 'unhandledrejection' });
        });
        return import('@posthog/react').then((mod) => {
          setProvider(() => ({ Prov: mod.PostHogProvider, EB: mod.PostHogErrorBoundary, ph: posthog }));
        });
      });
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(init);
    } else {
      setTimeout(init, 1);
    }
  }, []);

  if (Provider) {
    return (
      <Provider.Prov client={Provider.ph}>
        <Provider.EB>{children}</Provider.EB>
      </Provider.Prov>
    );
  }
  return children;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LazyPostHogProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LazyPostHogProvider>
  </React.StrictMode>
);
