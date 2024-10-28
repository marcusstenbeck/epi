import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const HOST = '0.0.0.0';
const PORT = 3000;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // exit if port is in use
    strictPort: true,
    // listen to all incoming traffic
    host: HOST,
    port: PORT,
    // dev server asset origin
    origin: `http://${HOST}:${PORT}`,
  },
});
