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
      "primary-dark": "#222831",
      "second-dark": "#31363F",
      "primary-light": colors.sky[500],
      "second-light": "#EEEEEE",
      gray: colors.gray,
      sky: colors.sky,
      yellow: colors.yellow,
    },
  },
  plugins: [],
};
