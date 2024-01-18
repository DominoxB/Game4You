/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dosis: ["Dosis", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        silk: ["Silkscreen", "sans-serif"],
        chacra: ["Chakra Petch", "sans-serif"],
        rubik: ["Rubik Doodle Shadow", "sans-serif"],
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%",
          },
        },
        blink: {
          "0%": {
            opacity: "0",
          },
          "0.1%": {
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "50.1%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        typewriter: "typewriter 2s steps(11) forwards",
        caret:
          "typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
