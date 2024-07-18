/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        slabo: ["Slabo+27px"],
        rubik: ["Rubik"],
      },
      backgroundColor: {
        darkBlue: "#2b3968",

        glass: "#ffffff45",
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
