import {defineConfig} from 'vitest/config';
import type {PluginOption} from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';
import {visualizer} from 'rollup-plugin-visualizer';
import postcssNest from 'postcss-nesting';
import postcssPresetEnv from 'postcss-preset-env';
import eslint from '@nabla/vite-plugin-eslint';
import browserslistToEsbuild from 'browserslist-to-esbuild';
import jsxPlugin from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  define: {
    'process.env': process.env,
  },
  base: './',
  server: {
    port: 3000,
  },
  esbuild: {
    legalComments: 'none',
  },
  build: {
    target: browserslistToEsbuild(),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
        manualChunks: {
          vueVendor: ['vue', 'vue-router'],
        },
      },
    },
  },
  plugins: [
    vue(),
    jsxPlugin(),
    visualizer({
      filename: './visualizer/index.html',
    }) as unknown as PluginOption,
    eslint(),
  ],
  test: {
    include: ['src/**/*.{test, spec}.{js,jsx,ts,tsx}'],
    environment: 'jsdom',
    globals: true,
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
  css: {
    postcss: {
      plugins: [
        postcssNest(),
        postcssPresetEnv({
          stage: 3,
          autoprefixer: {
            flexbox: 'no-2009',
          },
        }),
      ],
    },
  },
  resolve: {
    alias: {
      '@styles': resolve(__dirname, 'src/styles'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@routes': resolve(__dirname, 'src/routes'),
      '@apis': resolve(__dirname, 'src/apis'),
      '@components': resolve(__dirname, 'src/components'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@stores': resolve(__dirname, 'src/stores'),
      '@models': resolve(__dirname, 'src/models'),
      '@utils': resolve(__dirname, 'src/utils'),
    },
  },
});
