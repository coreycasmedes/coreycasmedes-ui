/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          typing: {
            'from': { width: '0' },
            'to': { width: '100%' },
          },
          blink: {
            'from, to': { borderColor: 'transparent' },
            '50%': { borderColor: 'orange' },
          }
        },
        animation: {
          typing: 'typing 3.5s steps(40, end) forwards',
          blink: 'blink 0.75s step-end infinite',
          'typing-blink': 'typing 3.5s steps(40, end) forwards, blink 0.75s step-end infinite',
        },
        // animation: {
        //   typing: 'typing 3.5s steps(40, end)',
        //   blink: 'blink .75s step-end infinite',
        // },
        // keyframes: {
        //   typing: {
        //     'from': {width: '0'},
        //     'to': {width: '100%'}
        //   },
        //   blinkcaret: {
        //     'from, to': { 'border-color': 'transparent' },
        //     '50%': { 'border-color': 'orange' },
        //   }
        // },
        // animation: {
        //   typing: 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
        // },
        backgroundColor: {
          'sage-green': '#ccd5ae',
          'pale-spring': '#e9edc9',
          'soft-sunshine': '#fefae0',
          'warm-sand': '#faedcd',
          'golden-caramel': '#d4a373',
        },
        fontFamily: {
          'clean': ['Assistant', "sans"],
          'open-sans-medium': ['OpenSans-Medium', "sans"],
          'open-sans-light': ['OpenSans-Light', "sans"],
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