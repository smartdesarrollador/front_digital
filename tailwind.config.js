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
        celeste: "#75B0E0",
        amarillo: "#ECCD50",
        celeste_claro: "#D8EAF4",
      },
    },
  },
  plugins: [],
};
