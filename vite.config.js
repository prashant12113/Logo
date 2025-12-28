import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative base makes this work on GitHub Pages for any repo path (/<repo>/)
  base: './',
});


