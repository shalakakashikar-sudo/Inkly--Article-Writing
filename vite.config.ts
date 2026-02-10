
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext',
  },
  server: {
    port: 3000,
  },
  define: {
    // This performs a literal find-and-replace for 'process.env.API_KEY' in your code
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || '')
  }
});
