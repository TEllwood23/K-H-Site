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
        textPrimary: '#FFFFFF', // Primary text color
        textSecondary: '#FFD600', // Secondary text color
      },
      fontFamily: {
        sans: ['Kadwa', 'sans-serif'], // Kadwa as your main font
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.textSecondary': {
          color: '#FFD600', // Match your secondaryText color
          outline: '1px solid black', // Black outline
        },
      });
    },
  ],
};
