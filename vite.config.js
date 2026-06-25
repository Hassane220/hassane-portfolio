import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { port: 5173 },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.test.{jsx,js,ts,tsx}'],
    setupFiles: ['./src/__tests__/setup.js'],
    css: false,
    alias: {
      'framer-motion': path.resolve(__dirname, './src/__mocks__/framer-motion.js'),
    },
  },
})
