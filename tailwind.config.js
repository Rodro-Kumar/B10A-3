/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Manrope: "var(--Manrope)",
    },
    extend: {
      colors: {
        bgColor: "var(--bgColor)",
        black1: "var(--black1)",
        black2: "var(--black2)",
        tiyaGreen: "var(--tiyaGreen)",
      },
    },
  },
  plugins: [],
};
