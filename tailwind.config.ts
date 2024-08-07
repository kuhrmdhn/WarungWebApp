import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-blue": "#56B9F1",
        "body-gray": "#F0EFF6",
      },
      screens: {
        "xs": "360px"
      },
      fontSize: {
        "2xs": "0.625rem"
      },
      keyframes: {
        fade_in: {
          "0%": {
            transform: "translateY(50px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        }
      },
      animation: {
        "fade-in": "fade_in 1s ease"
      }
    },
  },
  plugins: [],
};
export default config;
