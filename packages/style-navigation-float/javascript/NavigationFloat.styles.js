import "@mui-treasury/component-navigation";
import { navigationClasses } from "@mui-treasury/component-navigation";
const getItemStyles = ({ palette }) => {
  return {
    transition: "0.2s ease-out",
    "&.Mui-active": {
      color: palette.mode === "dark" ? "#fff" : palette.primary.main,
    },
    "&:hover": {
      transform: "translateY(-4px)",
      textShadow: "0 1px 2px rgba(0,0,0,0.12)",
      color: palette.mode === "dark" ? "#fff" : palette.primary.main,
    },
  };
};
export const getNavigationFloatStyles = ({ theme }) => ({
  [`& .${navigationClasses.item}`]: getItemStyles(theme),
});
export const getNavigationFloatTheme = (theme) => {
  return {
    JunNavigation: {
      styleOverrides: {
        item: getItemStyles(theme),
      },
    },
  };
};
