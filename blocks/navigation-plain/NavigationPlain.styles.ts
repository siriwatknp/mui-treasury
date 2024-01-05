import { CSSObject, Theme } from "@mui/material/styles";
import { navigationClasses } from "../navigation-basic";

export const getNavigationPlainStyles = (
  arg: Theme | { theme: Theme }
): CSSObject => {
  const { palette, spacing } = "theme" in arg ? arg.theme : arg;
  return {
    [`& .${navigationClasses.item}`]: {
      "&:not(:first-of-type)": {
        marginLeft: spacing(1.5),
      },
      "&:hover, &:focus": {
        color: palette.text.primary,
        backgroundColor: palette.action.hover,
      },
      ["&.Mui-active"]: {
        color: palette.text.primary,
        backgroundColor: palette.action.selected,
      },
    },
  };
};
