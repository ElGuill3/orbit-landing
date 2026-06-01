import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: 'hidden',
    target: 'esnext',
    cssMinify: true,
    modulePreload: { polyfill: false },
    cssCodeSplit: true,
    chunkSizeWarningLimit: 200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/') || id.includes('node_modules/react-router')) {
            return 'vendor-react';
          }
          if (id.includes('posthog') || id.includes('@vercel/analytics') || id.includes('@vercel/speed-insights') || id.includes('@supabase/')) {
            return 'vendor-analytics';
          }
          if (id.includes('/shared/translations.js')) {
            return 'i18n';
          }
        },
      },
    },
  },
  server: {
    proxy: {
      '/api/polymarket': {
        target: 'https://gamma-api.polymarket.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/polymarket/, ''),
      },
    },
  },
});
