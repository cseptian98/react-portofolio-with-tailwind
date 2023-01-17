/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "primary-dark": "#222831",
      "second-dark": "#393E46",
      "primary-light": "#EEEEEE",
      "second-light": "#00ADB5",
      sky: colors.sky,
      yellow: colors.yellow,
    },
  },
  plugins: [],
};
