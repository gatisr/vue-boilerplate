// FILE: vite.config.js

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '~': path.resolve('src'),
    },
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),

    quasar({
      autoImportComponentCase: 'pascal',
      sassVariables: 'src/quasar-variables.sass',
    }),
  ],
  server: {
    port: 3000
  },
});
