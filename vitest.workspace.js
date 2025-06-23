import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineWorkspace } from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineWorkspace([
  'vite.config.js',
  {
    extends: 'vite.config.js',
    test: {
      name: 'storybook',
      environment: 'jsdom',
      globals: true,
      setupFiles: ['.storybook/vitest.setup.js'],
    },
    plugins: [
      storybookTest({ configDir: path.join(dirname, '.storybook') }),
    ],
  },
]);
