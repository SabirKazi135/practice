import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, addVariant }) {
      // Utility + Component examples
      addUtilities({
        '.glow': {
          'box-shadow': '0 0 40px 10px rgba(0, 255, 0, 1)',
        },
      });

      addComponents({
        '.btn': {
          padding: '0.5rem 1rem',
          backgroundColor: '#2563eb',
          color: 'white',
          borderRadius: '0.375rem',
          fontWeight: '600',
          display: 'inline-block',
          '&:hover': {
            backgroundColor: '#1d4ed8',
          },
        },
      });

      // ✅ Our custom variant: `alt-hover:`
      addVariant('alt-hover', '&.alt:hover &');
    }),
  ],
};
