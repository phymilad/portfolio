import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-vazir)', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        // semantic color tokens
        background: {
          light: '#ffffff', // light mode background
          dark: '#0f172a',  // dark mode background
        },
        foreground: {
          light: '#000', // slate-800
          dark: '#f9fafb',  // slate-50
        },
      },
    },
  },
  plugins: [],
};

export default config;
