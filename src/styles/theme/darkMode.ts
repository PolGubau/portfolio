import { colors } from "../theme";
import { baseTheme } from "./baseTheme";

export const darkTheme = {
  ...baseTheme,
  colors: {
    main: "#465870",
    green: "#3f6250",
    yellow: "#636340",
    background: "#2b2d31",
    text: "#F5F5F5",
    buttons: {
      base: "#dfdce1",
      hover: colors.gray,
      active: colors.darkPurple,
      disabled: colors.lightGray,
      text: colors.black,
      textHover: colors.white,
    },
  },
};
