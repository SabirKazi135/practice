/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#0fa9e6',
        'brand-light': '#3fbaeb',
        'brand-dark': '#0c87b8',
      },
    },
  },
  plugins: [],
};
