import { ThemeComponents } from "../types";

export const linkTheme: ThemeComponents = {
  MuiLink: {
    styleOverrides: {
      root: {
        verticalAlign: "var(--va)", // for button inside Typography to align properly with text
        "&:focus-visible": {
          outlineOffset: "4px",
          outlineColor: "var(--Link-underlineColor)",
        },
      },
    },
  },
};
