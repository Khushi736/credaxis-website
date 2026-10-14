import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import {injectDefaultSeo} from './vite.injectDefaultSeo';
import {spaHashBootstrap} from './vite.spaHashBootstrap';

export default defineConfig(() => {
  const disableHmr = process.env.DISABLE_HMR === 'true';

  return {
    plugins: [injectDefaultSeo(), spaHashBootstrap(), react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    css: {
      devSourcemap: false,
    },
    build: {
      cssCodeSplit: false,
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: disableHmr
        ? false
        : {
            overlay: true,
          },
      watch: disableHmr
        ? null
        : {
            ignored: ['**/dist/**', '**/node_modules/**', '**/.git/**'],
            awaitWriteFinish: {
              stabilityThreshold: 200,
              pollInterval: 100,
            },
          },
    },
  };
});
