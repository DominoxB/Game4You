/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        silk: ["Silkscreen", "sans-serif"],
        rubik: ["Rubik Doodle Shadow", "sans-serif"],
        roboto: ["Roboto", "sans-serif"]
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
