/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dosis: ["Dosis", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
      },
    }
  },
  plugins: [],
};
