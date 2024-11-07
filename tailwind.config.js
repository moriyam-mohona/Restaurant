export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        bebas: ["Bebas Neue", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        yellow: "#FEBF00",
        backgroundLight: "#FBF7F2",
        red: "#BD1F17",
        blue: "#0A1425",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
