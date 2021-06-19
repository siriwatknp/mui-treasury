import "@mui-treasury/component-navigation";
import { navigationClasses } from "@mui-treasury/component-navigation";
import { CSSObject } from "@material-ui/system";
import { Theme, alpha, lighten } from "@material-ui/core/styles";
import { Components } from "@material-ui/core/styles/components";

type Output = Required<Pick<Components, "JunNavigation">>;

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

export const getNavigationBulbTheme = (theme: Theme): Output => {
  return {
    JunNavigation: {
      styleOverrides: {
        root: getNavigationBulbStyles(theme),
      },
    },
  };
};
