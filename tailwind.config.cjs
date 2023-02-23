/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customBlue: '#63718b',
        customWhite: '#b8d1ff',
      },
    },
  },
  plugins: [],
}
