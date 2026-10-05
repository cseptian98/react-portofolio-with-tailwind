/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        montserrat: "montserrat",
        tomorrow: "tomorrow",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "primary-dark": "#000000",
      "second-dark": "#1c1c1e",
      "primary-light": colors.sky[500],
      "second-light": "#f5f5f7",
      gray: colors.gray,
      sky: colors.sky,
      yellow: colors.yellow,
    },
  },
  plugins: [],
};
