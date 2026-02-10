
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext',
  },
  server: {
    port: 3000,
  },
  define: {
    // This ensures process.env.API_KEY is replaced with the actual string at build time
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
});
