const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: colors.orange[500],
        'primary-': colors.orange,
        secondary: colors.gray[300],
        'secondary-': colors.gray,
        success: colors.green[500],
        'success-': colors.green,
        info: colors.blue[500],
        'info-': colors.blue,
        warning: colors.yellow[500],
        'warning-': colors.yellow,
        danger: colors.red[500],
        'danger-': colors.red,
        dark: colors.gray[900],
        'dark-': colors.gray,
      },
      fontFamily: {
        jost: ['Jost', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
