/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          primary: "#0e0e0e",
          secondary: "#4a4a4a",
        },
        bg: { 
          primary: "#fdf7f0"
        },
        highlight: {
          primary: "#dd7834",
          secondary: "#f5e8d5",
        }
      },
      fontFamily: {
        lato: "Lato",
      }
    },
  },
  plugins: [],
}

