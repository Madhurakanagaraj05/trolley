import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true, // listen on LAN so phone can reach it
    allowedHosts: true, // allow external hosts like ngrok tunnels
    proxy: {
      '/api': { target: 'http://localhost:5001', changeOrigin: true },
    },
  },
});
