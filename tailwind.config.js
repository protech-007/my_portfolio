/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: "#09191F",
        secondary: "#3D606E",
        auxiliary: "#09191F",
        primaryText: "#D8D8D8",
        decorColor: "#4E9F3D"
      },
      fontFamily:{
        body: ["Josefin Sans"]
      },
      backgroundImage: {
        'hero-pattern': "url('/images/background.jpg')",
        'bg2': "url('/images/blog3.jpg')",
        'bg3': "url('/images/blog1.jpg')"
      }
    },
  },
  plugins: [],
}

