import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.tsx',
      name: 'StandardBankUI',
      formats: ['es', 'cjs'],
      fileName: (format) =>
        format === 'es' ? 'standard-bank-ui.js' : 'standard-bank-ui.cjs',
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        exports: 'named',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'style.css'
          }
          return assetInfo.name ?? '[name].[ext]'
        },
      },
    },
  },
})
