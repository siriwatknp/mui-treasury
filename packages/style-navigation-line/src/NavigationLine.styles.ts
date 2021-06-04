import "@mui-treasury/component-navigation";
import { navigationClasses } from "@mui-treasury/component-navigation";
import { Theme } from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/styles";
import { Components } from "@material-ui/core/styles/components";

type Output = Required<Pick<Components, "JunNavigation">>;

const itemHorzPadding = 2;

const getItemStyles = ({ palette, spacing }: Theme): CSSProperties => {
  return {
    position: "relative",
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

export const getNavigationLineStyles = ({
  theme,
}: {
  theme: Theme;
}): CSSProperties => ({
  [`& .${navigationClasses.item}`]: getItemStyles(theme),
});

export const getNavigationLineTheme = (theme: Theme): Output => {
  return {
    JunNavigation: {
      styleOverrides: {
        item: getItemStyles(theme),
      },
    },
  };
};
