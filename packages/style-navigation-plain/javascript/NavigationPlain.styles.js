import "@mui-treasury/component-navigation";
import { navigationClasses } from "@mui-treasury/component-navigation";
const getItemStyles = ({ palette, spacing }) => {
  return {
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
  };
};
export const getNavigationPlainStyles = ({ theme }) => ({
  [`& .${navigationClasses.item}`]: getItemStyles(theme),
});
export const getNavigationPlainTheme = (theme) => {
  return {
    JunNavigation: {
      styleOverrides: {
        item: getItemStyles(theme),
      },
    },
  };
};
