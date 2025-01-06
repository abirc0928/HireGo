/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans Hebrew", "sans-serif"],
       
      },
      fontFamily:{
        inter: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}

