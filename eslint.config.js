// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import vitest from 'eslint-plugin-vitest'

import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

import requireFigmaDesignLinkInStories from './eslint-rules/require-figma-design-link-in-stories.js';

export default [
  { 
    ignores: [
      'dist',
      'node_modules',
      'storybook-static',
      'build',
      'coverage',
      '*.min.js',
      '**/*.bundle.js',
      '**/*-bundle.js',
      '.next',
      '.nuxt',
      'public/build',
      '.obsidian'
    ] 
  },
  // TypeScript config for all .ts/.tsx files
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {}, // add custom rules here if needed
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.commonjs,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'vitest': vitest,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  // Vitest-specific config for test files
  {
    files: ['**/*.test.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: vitest.environments.env.globals,
    },
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
    },
  },
  ...storybook.configs["flat/recommended"],
  // Custom rule: require Figma design link in stories
  {
    files: ['**/*.stories.tsx'],
    plugins: {
      'require-figma-design-link-in-stories': {
        rules: {
          'require-figma-design-link-in-stories': requireFigmaDesignLinkInStories,
        },
      },
    },
    rules: {
      'require-figma-design-link-in-stories/require-figma-design-link-in-stories': 'error',
    },
  }
];
