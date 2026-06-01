// Lightweight PostHog access that doesn't import the heavy posthog-js or @posthog/react
// packages. These are loaded lazily by LazyPostHogProvider in main.jsx.
// Components use this hook instead of `usePostHog()` from @posthog/react
// to avoid pulling vendor-analytics into the critical render path.

import { useState, useEffect } from "react";

export function usePostHogLazy() {
  const [ph, setPh] = useState(() => window.__posthog || null);
  useEffect(() => {
    if (ph) return;
    // Poll briefly for PostHog to become available
    const id = setInterval(() => {
      if (window.__posthog) {
        setPh(window.__posthog);
        clearInterval(id);
      }
    }, 500);
    return () => clearInterval(id);
  }, [ph]);
  return ph;
}

export function captureException(error, extra) {
  const ph = window.__posthog;
  if (ph?.captureException) {
    ph.captureException(error, extra);
  }
}
