/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily : {
        montserrat : ['Montserrat', 'sans-serif']
      },
      colors: {
        'primary': '#010101',
      },
    },
    
  },
  plugins: [],
}
