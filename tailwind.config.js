/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        jost: 'Jost',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
