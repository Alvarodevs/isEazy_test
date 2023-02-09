/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue, js, ts, jsx, tsx}"],
  theme: {
    extend: {
      colors: {
        'main': '#F1237F',
        'white': '#FFFFFF',
        'blue': '#0C8CFA',
        'red': '#FA5939',
        'grey-border': '#DADADA',
        'grey-bg': '#E6E6E6'
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
      '1': '1px',
      '2': '2px'
    }
  },
  plugins: [],
}
