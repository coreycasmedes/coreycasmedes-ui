/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'clean': ['Assistant', "sans"],
          'assistant-extrabold': ['Assistant-ExtraBold', "sans"],
          'assistant-light': ['Assistant-Light', "sans"],
          'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
          'roboto': ['Roboto', ...defaultTheme.fontFamily.sans],
          'arial': ['Arial', ...defaultTheme.fontFamily.sans],
        },
    },
    plugins: [],
  }
}