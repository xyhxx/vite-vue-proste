import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [vue(), visualizer()],
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
