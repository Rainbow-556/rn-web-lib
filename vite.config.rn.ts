import { defineConfig } from 'vite';
// import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'lib')
    },
    // 优先使用.web.ts文件，达到构建产物最小化
    extensions: ['.rn.ts', '.rn.tsx', '.ts', '.tsx', '.json']
  },
  build: {
    // sourcemap: true,
    rollupOptions: {
      external: ['react', 'react-native']
    },
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      fileName: 'index',
      formats: ['es']
    },
    outDir: 'dist/rn'
  }
});
