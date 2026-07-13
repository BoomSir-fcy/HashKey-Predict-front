import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@solana-program/system': path.resolve(
        __dirname,
        'node_modules/@solana-program/system/dist/src/index.mjs'
      ),
      '@solana-program/token': path.resolve(
        __dirname,
        'node_modules/@solana-program/token/dist/src/index.mjs'
      ),
    },
  },
})
