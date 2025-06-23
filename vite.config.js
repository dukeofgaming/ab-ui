import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.js'],
    exclude: [
      '**/node_modules/**', // Explicitly exclude node_modules
      '**/*.stories.*',    // Exclude all Storybook stories from tests
    ],
  },
})
