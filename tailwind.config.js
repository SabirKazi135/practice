/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2d4356', // Blue
        secondary: '#dff7ff', // Gray
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.hide-scrollbar': {
          /* Chrome, Safari and Edge */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* Firefox */
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
        },
      };
      addUtilities(newUtilities, ['responsive']);
    },
  ],
};
