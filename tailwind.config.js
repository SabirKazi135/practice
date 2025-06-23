import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-sm': {
          'text-shadow': '1px 1px 2px rgba(0,0,0,0.1)',
        },
        '.text-shadow-lg': {
          'text-shadow': '2px 2px 8px rgba(0,0,0,0.3)',
        },
        '.glow': {
          'box-shadow': '0 0 10px rgba(255, 255, 255, 0.6)',
        },
      });
    }),
  ],
};
