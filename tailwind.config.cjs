/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue, js, ts, jsx, tsx}"],
  theme: {
    extend: {
      colors: {
        'main': '#F1237F',
        'secondary': '#FFFFFF'
      }
    },
    fontFamily: {
      Archivo: ["Achivo, sans-serif"]
    }, 
    screens: {
      sm: "640px",
      md: "770px"
    }
  },
  plugins: [],
}
