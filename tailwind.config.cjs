/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue, js, ts, jsx, tsx}"],
  theme: {
    extend: {
      colors: {
        'main': '#F1237F',
        'white': '#FFFFFF',
        'blue': '#0C8CFA',
        'red': '#FA5939'
      }
    },
    fontFamily: {
      Titilium: ["Titilium, sans-serif"]
    }, 
    screens: {
      sm: "640px",
      md: "770px"
    },
    borderWidth: {
      '1': '1px'
    }
  },
  plugins: [],
}
