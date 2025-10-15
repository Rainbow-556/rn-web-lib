import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    // 仅在web产物构建时生成类型，rn产物构建时不生成，避免覆盖
    dts({
      insertTypesEntry: true,
      outDir: 'dist/types'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'lib')
    },
    // 优先使用.web.ts文件，达到构建产物最小化
    extensions: ['.web.ts', '.web.tsx', '.ts', '.tsx', '.json']
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
    outDir: 'dist/web'
  }
});
