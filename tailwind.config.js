/** @type {import('tailwindcss').Config} */

import { PolUITheme } from "pol-ui";

export default {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { PolUITheme },
  },
  plugins: [],
};
