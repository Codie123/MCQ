/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1896px",
    },

    extend: {
      fontSize: {
        cuz4xl: "4rem",
      },
      fontFamily: {
        slabo: ["Slabo+27px"],
        rubik: ["Rubik"],
      },
      backgroundColor: {
        darkBlue: "#2b3968",
        glass: "#ffffff45",
        cyan_cuz: "#89bbbc",
        error: "#d84432",
        success: "#28a745",
      },
      borderColor: {
        darkBlue: "#2b3968",
      },
      textColor: {
        darkBlue: "#2b3968",
      },
      colors: {
        darkBlue: "#2b3968",
      },
    },
  },
  plugins: [],
};
