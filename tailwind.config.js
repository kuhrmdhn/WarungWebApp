/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
<<<<<<< HEAD
        xs: "320px",
      },
      fontSize: {
        "2xs": "10px",
        "3xs": "8px"
      },
      width: {
        86: "17rem",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "rotate(0)" },
          "30%": { transform: "rotate(13deg)" },
          "60%": { transform: "rotate(-13deg)" },
        },
      },
      colors: {
        "cashier-primary": "#1E293B",
        "owner-primary": "#7C41F5",
        "owner-secondary": "#F5C525",
        "green-reset-button": "#009E73",
        "blue-choose-button": "#0091EA",
        "red-reset-all-button": "#CC0000",
      },
      fontFamily: {
        raleway: "Raleway, sans-serif",
        montserrat: "Montserrat, sans-serif",
        playpen: "Playpen Sans, sans-serif",
      },
=======
        xs: "326px",
      },
      fontSize: {
        xxs: "10px"
      },
      width: {
        86: "17rem"
      },
      keyframes: {
        "shake" : {
          "0%, 100%" : {transform : "rotate(0)"},
          "30%": {transform: "rotate(13deg)"},
          "60%": {transform: "rotate(-13deg)"}
        }
      }
>>>>>>> 62532792277426f90780886ce8ac75b26faa8cea
    },
  },
  plugins: [],
};

