/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
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
    },
  },
  plugins: [],
};

