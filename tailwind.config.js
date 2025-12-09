/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#030412',
        midnight: '#06091f',
        navy: '#161a31',
      },
      fontFamily: {
        sans: ['Funnel Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
