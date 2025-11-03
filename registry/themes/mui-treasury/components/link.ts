import { ThemeComponents } from "../types";

export const linkTheme: ThemeComponents = {
  MuiLink: {
    styleOverrides: {
      root: {
        "&:focus-visible": {
          outlineOffset: "4px",
          outlineColor: "var(--Link-underlineColor)",
        },
      },
    },
  },
};
