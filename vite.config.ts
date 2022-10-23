import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.ts'),
      name: 'KodMarkdown',
      formats: ['es', 'umd'],
      fileName: (format) => `kod-markdown.${format}.ts`
    },
    rollupOptions: {
      external: ['react', 'react-dom', "react-markdown", "react-syntax-highlighter", "remark-gfm"],
      output: {
        globals: {
          react: 'React',
          'react-split': 'Split',
          "rect-markdown": "ReactMarkdown",
          "Prism": "react-syntax-highlighter",
          "remarkGfm": "remark-gfm"
        }
      },
    }
  },
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      insertTypesEntry: true
    }),
  ]
})
