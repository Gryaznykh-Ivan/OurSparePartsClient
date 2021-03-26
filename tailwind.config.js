const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'red': '#A23231',
        'green': "#45D700"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
