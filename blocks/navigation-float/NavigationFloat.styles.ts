import { CSSObject, Theme } from "@mui/material/styles";
import { navigationClasses } from "../navigation-basic";

export const getNavigationFloatStyles = (
  arg: Theme | { theme: Theme }
): CSSObject => {
  const { palette } = "theme" in arg ? arg.theme : arg;
  return {
    [`& .${navigationClasses.item}`]: {
      transition: "0.2s ease-out",
      "&.Mui-active": {
        color: palette.mode === "dark" ? "#fff" : palette.primary.main,
      },
      "&:hover": {
        transform: "translateY(-4px)",
        textShadow: "0 1px 2px rgba(0,0,0,0.12)",
        color: palette.mode === "dark" ? "#fff" : palette.primary.main,
      },
    },
  };
};
