/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dosis: ["Dosis", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
        bebas: ['Bebas Neue', 'sans-serif'],
        silk: ['Silkscreen', 'sans-serif'],
        chacra: ['Chakra Petch', 'sans-serif'],
        rubik: ['Rubik Doodle Shadow', 'sans-serif']
      },
    }
  },
  plugins: [],
};
