/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'based': '#252525',
        'span' : '#444444'
      },
    },
  },
  plugins: [],
}