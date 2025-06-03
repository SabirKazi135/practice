/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        deepNight: '#0f002b', // custom name for --clr-bg
        creamWhite: '#FAFAFA', // custom name for --clr-text
        sunsetOrange: '#ff960b', // custom name for --clr-accent
      },
    },
  },
  plugins: [],
};
