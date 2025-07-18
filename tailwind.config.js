// Tailwind config referencing Style Dictionary CSS variables
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    // extend: {
    //   colors: {
    //     primary: 'var(--global-global-color-primary)',
    //     secondary: 'var(--global-global-color-secondary)',
    //     accent: 'var(--global-global-color-accent)',
    //     text: {
    //       default: 'var(--global-global-color-text-default)',
    //       header: 'var(--global-global-color-text-header)',
    //     },
    //     background: {
    //       default: 'var(--global-global-color-background-default)',
    //       panel: 'var(--global-global-color-background-panel)',
    //       tableHeader: 'var(--global-global-color-background-tableHeader)',
    //       button: {
    //         add: 'var(--global-global-color-background-button-add)',
    //         edit: 'var(--global-global-color-background-button-edit)',
    //         delete: 'var(--global-global-color-background-button-delete)',
    //       },
    //     },
    //     border: {
    //       input: 'var(--global-global-color-border-input)',
    //       tableRow: 'var(--global-global-color-border-tableRow)',
    //     },
    //   },
    // },
    // Add more theme keys (fontFamily, spacing, etc.) using CSS vars as needed
  },
  plugins: [],
};
