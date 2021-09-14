import "@mui-treasury/component-navigation";
import { navigationClasses } from "@mui-treasury/component-navigation";
import { Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import { Components } from "@mui/material/styles/components";

type Output = Required<Pick<Components, "JunNavigation">>;

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

export const getNavigationPlainTheme = (theme: Theme): Output => {
  return {
    JunNavigation: {
      styleOverrides: {
        root: getNavigationPlainStyles(theme),
      },
    },
  };
};
