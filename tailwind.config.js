/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        azul: "#5394cf",
        celeste: "#34bceb",
        amarillo: "#ECCD50",
        celeste_claro: "#D8EAF4",
        gris_claro: "#ecf1f4",
        naranja: "#ff793f",
        naranja_claro: "#ffbea4",
        verde: "#4ac07b",
        verde_claro: "#e4f5ec",
      },
      fontFamily: {
        test_fuente: ["Gloria Hallelujah", "cursive"],
      },
    },
  },
  plugins: [],
};
