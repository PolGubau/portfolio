import typography from "@tailwindcss/typography";
import { poluiPlugin } from "pol-ui";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/pol-ui/lib/**/*.js",
  ],
  theme: {
    extend: {
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        widthGrow: {
          "0%": {
            left: "0%",
            width: "0%",
          },

          "70%": {
            left: "0%",
            width: "100%",
          },
          "100%": {
            left: "100%",
            width: "0%",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
        widthGrow: "widthGrow 2s ease-out infinite",
      },
    },
  },
 
  plugins: [
    typography,
    poluiPlugin({
      colors: {
        primary: {
          50: "#ffffec",
          100: "#ffffc5",
          200: "#ffffa9",
          300: "#ffff82",
          400: "#ffff69",
          500: "#ffff44",
          600: "#e8e83e",
          700: "#b5b530",
          800: "#8c8c25",
          900: "#6b6b1d",
        },
        secondary: {
          50: "#f7f7f7",
          100: "#eaeaea",
          200: "#d4d4d4",
          300: "#bcbcbc",
          400: "#a1a1a1",
          500: "#7f7f7f",
          600: "#666666",
          700: "#4d4d4d",
          800: "#333333",
          900: "#121212",
        },
      },
    }),
  ],
  darkMode: "media",
}  
