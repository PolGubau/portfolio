import { colors } from "../theme";
import { baseTheme } from "./baseTheme";

export const lightTheme = {
  ...baseTheme,
  colors: {
    main: colors.lightBlue,
    green: "#c8ffd2",
    yellow: "#ffffc7",
    background: "#F5F5F5",
    text: "#222222",
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
