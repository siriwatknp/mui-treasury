import "@mui-treasury/component-navigation";
import { navigationClasses } from "@mui-treasury/component-navigation";
import { Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import { Components } from "@mui/material/styles/components";

type Output = Required<Pick<Components, "JunNavigation">>;

export const getNavigationPointStyles = (
  arg: Theme | { theme: Theme }
): CSSObject => {
  const { palette } = "theme" in arg ? arg.theme : arg;
  return {
    [`& .${navigationClasses.item}`]: {
      "&:not(.Mui-disabled)": {
        color:
          palette.mode === "dark"
            ? palette.text.secondary
            : palette.text.primary,
      },
      "&.Mui-active": {
        color: palette.mode === "dark" ? "#fff" : palette.primary.dark,
        "&:after": {
          opacity: 1,
          width: 40,
          backgroundColor:
            palette.mode === "dark"
              ? "rgba(255,255,255,0.8)"
              : palette.primary.main,
          transform: "scale(1) translateX(-50%)",
        },
      },
      "&:after": {
        content: '""',
        display: "block",
        position: "absolute",
        bottom: 0,
        left: "50%",
        width: 6,
        height: 6,
        borderRadius: 50,
        transform: "scale(0) translateX(-50%)",
        transition: "0.3s ease-out",
        opacity: 0,
        backgroundColor:
          palette.mode === "dark"
            ? "rgba(255,255,255,0.8)"
            : palette.primary.main,
      },
      "&:hover": {
        color: palette.text.primary,
        "&:after": {
          opacity: 1,
          transform: "scale(1) translateX(-50%)",
        },
      },
    },
  };
};

export const getNavigationPointTheme = (theme: Theme): Output => {
  return {
    JunNavigation: {
      styleOverrides: {
        root: getNavigationPointStyles(theme),
      },
    },
  };
};
