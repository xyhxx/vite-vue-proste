import { defineConfig } from 'vitest/config';
import type {PluginOption} from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import vueTypeImports from 'vite-plugin-vue-type-imports';

export default defineConfig({
  plugins: [vue() as unknown as PluginOption, visualizer() as unknown as PluginOption, vueTypeImports()],
  test: {
    environment: 'jsdom',
    include: ['__tests__/*.ts', '__tests__/*.{test, spec}.ts'],
  },
  resolve: {
    alias: {
      '@styles': resolve(__dirname, 'src/styles'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@routes': resolve(__dirname, 'src/routes/index'),
      '@apis': resolve(__dirname, 'src/apis/index'),
      '@components': resolve(__dirname, 'src/components/index'),
      '@hooks': resolve(__dirname, 'src/hooks/index'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@stores': resolve(__dirname, 'src/stores/index'),
      '@utils': resolve(__dirname, 'src/utils/index'),
    },
  },
});
