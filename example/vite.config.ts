import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      '@kod-markdown': path.join(__dirname, '../src/components/index.ts'),
    },
    extensions: ['.ts', '.d.ts', ".js", ".tsx", ".jsx"],
  },
  plugins: [react()]
})
