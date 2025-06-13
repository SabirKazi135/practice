// tailwind.config.js
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ matchUtilities }) {
      matchUtilities(
        {
          xbg: (value) => ({
            backgroundColor: value,
          }),
        },
        {
          // Allow arbitrary values like #123456
          values: {}, // leave empty to enable arbitrary values
          type: ['color'],
        },
      );
    }),
  ],
};
