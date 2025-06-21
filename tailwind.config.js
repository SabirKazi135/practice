// tailwind.config.js
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        ':root': {
          '--color-primary': '59 130 246',
          '--font-title': '2rem',
          '--font-body': '1rem',
          '--space-sm': '0.5rem',
          '--space-md': '1rem',
          '--space-lg': '2rem',
          '--radius-sm': '4px',
          '--radius-lg': '12px',
        },
        '.dark': {
          '--color-primary': '147 51 234',
        },
      });
    }),
  ],
};
