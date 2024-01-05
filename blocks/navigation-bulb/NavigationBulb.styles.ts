import { alpha, lighten, Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import { navigationClasses } from "../navigation-basic";

const getActiveColor = (palette: Theme["palette"]) =>
  palette.mode === "dark"
    ? "rgba(255,255,255,0.2)"
    : alpha(lighten(palette.primary.main, 0.84), 0.87);

const itemHorzPadding = 3;

export const getNavigationBulbStyles = (
  arg: Theme | { theme: Theme }
): CSSObject => {
  const { palette, spacing } = "theme" in arg ? arg.theme : arg;
  const activeColor = getActiveColor(palette);
  return {
    [`& .${navigationClasses.item}`]: {
      padding: spacing(1, itemHorzPadding),
      cursor: "pointer",
      textDecoration: "none",
      borderRadius: "8px / 50%",
      color: palette.mode === "dark" ? palette.text.secondary : "#121212",
      [`&.Mui-active`]: {
        backgroundColor: activeColor,
        color: palette.mode === "dark" ? "#fff" : palette.primary.main,
      },
      "&:hover": {
        backgroundColor: activeColor,
      },
    },
  };
};
