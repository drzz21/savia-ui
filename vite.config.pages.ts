import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { copyFileSync } from 'node:fs';

// Plugin that copies index.html to 404.html for SPA routing on GitHub Pages
function spa404Plugin() {
  return {
    name: 'spa-404',
    closeBundle() {
      const outDir = resolve('docs-dist');
      copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'));
    },
  };
}

export default defineConfig({
  plugins: [vue(), tailwindcss(), spa404Plugin()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  // Base path for GitHub Pages
  base: '/savia-ui/',

  build: {
    outDir: 'docs-dist',
    emptyOutDir: true,
  },
});
