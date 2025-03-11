import { poluiPlugin } from "pol-ui";

export default {
  plugins: [
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
};
