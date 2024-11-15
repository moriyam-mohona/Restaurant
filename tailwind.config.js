// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       screens: {
//         xs: "480px", // Extra small screen size
//         sm: "640px", // Small screen size (default Tailwind)
//         md: "768px", // Medium screen size (default Tailwind)
//         lg: "1200px", // Large screen size (default Tailwind)
//         xl: "1500px", // Extra-large screen size (default Tailwind)
//         "2xl": "1920px", // Custom 3XL screen size
//       },
//       fontFamily: {
//         sans: ["Inter", "sans-serif"],
//         bebas: ["Bebas Neue", "cursive"],
//         poppins: ["Poppins", "sans-serif"],
//         raleway: ["Raleway", "sans-serif"],
//         roboto: ["Roboto", "sans-serif"],
//         montserrat: ["Montserrat", "sans-serif"],
//       },
//         backgroundImage: {
//         "hero-bg": "url('assets/images/resto-bg.png')",
//         "book-bg": "url('assets/images/book.jpeg')",
//         "footer-bg": "url('assets/images/footer.jpeg')",
//       },
//       backgroundSize: {
//         small: "8%",
//         quarter: "25%",
//       },
//     },
//       colors: {
//         yellow: "#FEBF00",
//         backgroundLight: "#FBF7F2",
//         red: "#BD1F17",
//         blue: "#0A1425",
//         white: "#FFFFFF",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1200px",
        xl: "1500px",
        "2xl": "1920px",
      },
      backgroundImage: {
        "hero-bg": "url('assets/images/resto-bg.png')",
        "book-bg": "url('assets/images/book.jpeg')",
        "footer-bg": "url('/src/assets/footer.jpeg')",
      },
      backgroundSize: {
        small: "8%",
        quarter: "25%",
      },
    },
    fontFamily: {
      // robo: '"Roboto", sans-serif',
      // rale: '"Raleway", sans-serif',
      // bebas: '"Bebas Neue", sans-serif',
      // pop: '"Poppins", sans-serif',
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
      white: "##F7F8F9",
      black: "#000000",
    },
  },
  plugins: [],
};
