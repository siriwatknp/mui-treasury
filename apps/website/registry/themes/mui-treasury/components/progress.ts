import { ThemeComponents } from "../types";

export const progressTheme: ThemeComponents = {
  MuiCircularProgress: {
    styleOverrides: {
      circle: {
        strokeLinecap: "round",
      },
    },
  },
};
