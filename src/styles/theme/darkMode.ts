import { colors } from "../theme";
import { baseTheme } from "./baseTheme";

export const darkTheme = {
  ...baseTheme,
  colors: {
    main: "#262335",
    background: "#2b2d31",
    text: "#F5F5F5",
    buttons: {
      base: "#b8b9bf",
      hover: colors.gray,
      active: colors.darkPurple,
      disabled: colors.lightGray,
      text: colors.black,
    },
  },
};
