import "@mui-treasury/component-navigation";
import { navigationClasses } from "@mui-treasury/component-navigation";
import { Theme } from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/styles";
import { Components } from "@material-ui/core/styles/components";

type Output = Required<Pick<Components, "JunNavigation">>;

const getItemStyles = ({ palette }: Theme): CSSProperties => {
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

export const getNavigationFloatStyles = ({
  theme,
}: {
  theme: Theme;
}): CSSProperties => ({
  [`& .${navigationClasses.item}`]: getItemStyles(theme),
});

export const getNavigationFloatTheme = (theme: Theme): Output => {
  return {
    JunNavigation: {
      styleOverrides: {
        item: getItemStyles(theme),
      },
    },
  };
};
