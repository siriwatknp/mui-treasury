import "@mui-treasury/component-navigation";
import { navigationClasses } from "@mui-treasury/component-navigation";
export const getNavigationPlainStyles = (arg) => {
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
export const getNavigationPlainTheme = (theme) => {
  return {
    JunNavigation: {
      styleOverrides: {
        root: getNavigationPlainStyles(theme),
      },
    },
  };
};
