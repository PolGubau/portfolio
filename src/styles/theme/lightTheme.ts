import { baseTheme } from "./baseTheme";
const colors = baseTheme.colors;
export const lightTheme = {
  ...baseTheme,
  colors: {
    main: colors.lightBlue,
    mainHover: colors.darkBlue,
    grey: colors.lightGray,
    green: "#c8ffd2",
    yellow: "#ffffc7",
    background: "#F5F5F5",
    text: "#222222",
    opacity50: {
      main: "rgba(255, 255, 255, 0.5)",
      opposite: "rgba(0, 0, 0, 0.5)",
    },
    buttons: {
      base: colors.darkGray,
      hover: "#585858",
      active: colors.gray,
      disabled: colors.lightGray,
      text: colors.white,
      textHover: colors.black,
    },
  },
};
