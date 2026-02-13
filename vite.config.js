import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'spline-fix',
      transform(code, id) {
        // Fix dynamic imports in Spline runtime
        if (id.includes('@splinetool/runtime') && code.includes('import("./')) {
          // Replace problematic dynamic imports with a promise that resolves to undefined
          code = code.replace(
            /import\(["']\.\/(boolean|howler|gaussian-splat-compression)\.js["']\)/g,
            'Promise.resolve({})'
          )
        }
        return { code, map: null }
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['@splinetool/runtime'],
  },
})