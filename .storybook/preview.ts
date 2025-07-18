import '../src/index.css';

import type { Preview } from '@storybook/react-vite'

import { withThemeByClassName } from "@storybook/addon-themes";

import tokens from '../design/tokens/tokens.json';

function getThemeMap(tokens: any) {
  if (!tokens || Object.keys(tokens).length === 0) {
    throw new Error('Design tokens JSON is empty or invalid!');
  }
  // Always include light/dark
  const themes: Record<string, string> = {
    light: '',
    dark: 'dark',
  };
  // Find theme keys like 'theme/orders', 'theme/logistics', etc.
  Object.keys(tokens)
    .filter(key => key.startsWith('theme/'))
    .forEach(key => {
      const themeName = key.replace('theme/', '');
      themes[themeName] = `theme-${themeName}`;
    });
  return themes;
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },

  decorators: [withThemeByClassName({
      themes: getThemeMap(tokens),
      defaultTheme: 'light',
  })]
};

export default preview;