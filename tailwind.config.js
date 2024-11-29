/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#4B9EEA',  // Background color
        backgroundSecondary: '#FFD600',
        textPrimary: '#FFFFFF', // Primary text color
        textSecondary: '#FFD600', // Secondary text color
        textTertiary: '#FF0000',
        burgerMenuBackground: '#FFD600'
      },
      fontFamily: {
        sans: ['Kadwa', 'sans-serif'], // Kadwa as your main font
        sub: ['Raleway light', 'sans-serif']
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-border': {
          '-webkit-text-stroke': '1px black', // Default stroke
        },
        '.text-border-primary': {
          '-webkit-text-stroke': '1px #FFFFFF', // Stroke using primary text color
          'color': '#FFFFFF',                  // Ensure color is applied
        },
        '.text-border-secondary': {
          '-webkit-text-stroke': '0.1px #000000', // Stroke using primary text color
          'color': '#FFD600',                  // Ensure color is applied
        },
        '.text-border-tertiary': {
          '-webkit-text-stroke': '0.25px #000000', // Stroke using primary text color
          'color': '#FF0000',                  // Ensure color is applied
        },
        '.text-border-thick': {
          '-webkit-text-stroke': '0.5px black', // Thicker stroke
          'color': '#FFFFFF',                // Ensure color remains visible
        },
      });
    },
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    },
  ],
};
