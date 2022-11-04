/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily : {
        montserrat : ['Montserrat', 'sans-serif'],
        bebas : ['Bebas Neue', 'cursive']
      },
      colors: {
        'primary': '#010101',
        'secondary' : '#fbaa33',
      },
    },
    
  },
  plugins: [],
}
