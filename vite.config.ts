/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    dts({
      insertTypesEntry: true,
      outDirs: 'dist',
      tsconfigPath: './tsconfig.app.json',
    }),
    cssInjectedByJsPlugin(),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  // ── Build en modo librería ──────────────────────────────────────────────
  build: {
    lib: {
      entry: path.resolve(dirname, 'src/index.ts'),
      name: 'SaviaUI',
      formats: ['es', 'cjs'],
      fileName: (format) => `savia-ui.${format === 'es' ? 'mjs' : 'cjs'}`,
    },
    rollupOptions: {
      // No bundlear dependencias externas
      external: ['vue', 'class-variance-authority'],
      output: {
        globals: {
          vue: 'Vue',
          'class-variance-authority': 'cva',
        },
      },
    },
    cssCodeSplit: false,
  },

  // ── Testing con Storybook + Vitest ──────────────────────────────────────
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }],
          },
        },
      },
    ],
  },
});
