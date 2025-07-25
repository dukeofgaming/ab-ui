import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'AbUI',
      fileName: (format) => `ab-ui.${format}.js`,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      // Externalize peer deps like react
      external: [
        'react',
        'react-dom',
        'prop-types',
        'react/jsx-runtime',
        'react/jsx-dev-runtime'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'prop-types': 'PropTypes'
        }
      }
    },
    outDir: 'dist'
  },
  test: {
    projects: [
      {
        test: {
          // Unit test project (Vitest/jsdom, only *.test.[jt]sx?)
          name: 'components',
          environment: 'jsdom',
          globals: true,
          setupFiles: ['./vitest.setup.js'],
          include: ['**/*.test.{js,jsx,ts,tsx}'],
          exclude: [
            '**/node_modules/**',
            '**/*.stories.*',
            '**/*.spec.*',  // Exclude Playwright/Storybook specs
            '**/*.e2e.*'    // Exclude Playwright E2E tests
          ]
        }
      }, 
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(__dirname, '.storybook')
          })
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [{
              browser: 'chromium'
            }]
          },
          setupFiles: ['.storybook/vitest.setup.ts']
        }
      }
    ]
  }
});