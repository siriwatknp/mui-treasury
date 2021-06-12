import "@mui-treasury/component-navigation";
import { navigationClasses } from "@mui-treasury/component-navigation";
const itemHorzPadding = 2;
const getItemStyles = ({ palette, spacing }) => {
  return {
    color: palette.text.secondary,
    "&.Mui-active": {
      color:
        palette.mode === "dark" ? palette.primary.light : palette.primary.main,
      "&:after": {
        opacity: 1,
        transform: "scale(1, 1)",
        backgroundColor:
          palette.mode === "dark"
            ? palette.primary.light
            : palette.primary.main,
      },
    },
    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      bottom: 0,
      left: spacing(itemHorzPadding),
      width: `calc(100% - ${spacing(itemHorzPadding * 2)})`,
      height: 3,
      transform: "scale(0, 1)",
      transition: "0.2s ease-out",
      opacity: 0,
      backgroundColor: palette.primary.light,
    },
    "&:hover": {
      color:
        palette.mode === "dark" ? palette.primary.light : palette.primary.main,
      "&:after": {
        opacity: 1,
        transform: "scale(1, 1)",
      },
    },
  };
};
export const getNavigationLineStyles = ({ theme }) => ({
  [`& .${navigationClasses.item}`]: getItemStyles(theme),
});
export const getNavigationLineTheme = (theme) => {
  return {
    JunNavigation: {
      styleOverrides: {
        item: getItemStyles(theme),
      },
    },
  };
};
