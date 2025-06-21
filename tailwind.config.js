// tailwind.config.js
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // enable class-based dark mode
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
          '--color-primary': '59 130 246', // blue-500 for light mode
        },
        '.dark': {
          '--color-primary': '147 51 234', // purple-600 for dark mode
        },
      });
    }),
  ],
};
