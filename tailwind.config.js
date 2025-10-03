/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kelly: '#4CBB17',
        beige: '#F5E6C4',
        brown: '#A89C81',
        neutral: {
          800: '#2D2D2D',
        }
      }
    }
  },
  plugins: [],
}