import { colors } from "../theme";
import { baseTheme } from "./baseTheme";

export const darkTheme = {
  ...baseTheme,
  colors: {
    main: "#465870",
    mainHover: "#3f4f63",
    grey: colors.darkGray,

    green: "#3f6250",
    yellow: "#636340",
    background: "#2b2d31",
    text: "#F5F5F5",
    opacity50: {
      main: "rgba(0, 0, 0, 0.5)",
      opposite: "rgba(255, 255, 255, 0.5)",
    },
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
