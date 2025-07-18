import '../src/index.css';
import type { Preview } from '@storybook/react-vite'

import { withThemeByClassName } from "@storybook/addon-themes";

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
      themes: {
          // nameOfTheme: 'classNameForTheme'
          light: '',
          dark: 'dark',
          orders: 'theme-orders',
          logistics: 'theme-logistics',
          product: 'theme-product',
          financial: 'theme-financial',
      },
      defaultTheme: 'light',
  })]
};

export default preview;