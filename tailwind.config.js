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
          secondary: "#1a1a1a"
        },
        bg: { 
          primary: "#fdf7f0"
        },
        highlight: {
          primary: "#dd7834",
          secondary: "",
        }
      }
    },
  },
  plugins: [],
}

