/** @type {import('tailwindcss').Config} */

const percentageWidth = require("tailwindcss-percentage-width");
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [percentageWidth],
};
