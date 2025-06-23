import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    projects: [
      // Unit test project (Vitest/jsdom, only *.test.[jt]sx?)
      {
        name: 'unit',
        test: {
          environment: 'jsdom',
          globals: true,
          setupFiles: ['./vitest.setup.js'],
          include: ['**/*.test.{js,jsx,ts,tsx}'],
          exclude: [
            '**/node_modules/**',
            '**/*.stories.*',
            '**/*.spec.*', // Exclude Playwright/Storybook specs
            '**/*.e2e.*', // Exclude Playwright E2E tests
          ],
        },
      },
    ],
  },
});
