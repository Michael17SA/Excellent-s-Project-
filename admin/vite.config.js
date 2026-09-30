/**
 * vite.config.js – admin dashboard
 * base '/admin/' so the built app can be served by Express under /admin
 * while the dev server also runs it at http://localhost:5174/admin/.
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Use a relative base so the built app works whether it is served from /
  // or mounted under /admin by the Express server.
  base: './',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5174,
    allowedHosts: true,
    proxy: {
      '/api': 'http://localhost:5000',
      '/images': 'http://localhost:5000',
      '/uploads': 'http://localhost:5000',
    },
  },
});
