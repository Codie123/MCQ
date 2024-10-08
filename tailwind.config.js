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
        tintgreen: "#009283",
        tintgreen80: "hsl(174deg 100% 27% / 80%)",
        tintgreen60: "hsl(174deg 100% 27% / 60%)",
        tintgreen40: "hsl(174deg 100% 27% / 40%)",
        tintgreen20: "hsl(174deg 100% 27% / 20%)",
        darkBlue: "#2b3968",
        glass: "#ffffff45",
        cyan_cuz: "#89bbbc",
        error: "#d84432",
        success: "#28a745",
      },
      borderColor: {
        darkBlue: "#2b3968",
        tintgreen: "#009283",
        tintgreen80: "hsl(174deg 100% 27% / 80%)",
        tintgreen60: "hsl(174deg 100% 27% / 60%)",
        tintgreen40: "hsl(174deg 100% 27% / 40%)",
        tintgreen20: "hsl(174deg 100% 27% / 20%)",
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
