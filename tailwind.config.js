/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#4B9EEA',  // Corrected with #
        textPrimary: '#FFFFFF', // Corrected with #
        textSecondary: '#FFD600', // Corrected with #
      }
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
