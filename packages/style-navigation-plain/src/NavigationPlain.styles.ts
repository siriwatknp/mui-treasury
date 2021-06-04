import "@mui-treasury/component-navigation";
import { navigationClasses } from "@mui-treasury/component-navigation";
import { Theme } from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/styles";
import { Components } from "@material-ui/core/styles/components";

type Output = Required<Pick<Components, "JunNavigation">>;

const getItemStyles = ({ palette, spacing }: Theme): CSSProperties => {
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

export const getNavigationPlainStyles = ({
  theme,
}: {
  theme: Theme;
}): CSSProperties => ({
  [`& .${navigationClasses.item}`]: getItemStyles(theme),
});

export const getNavigationPlainTheme = (theme: Theme): Output => {
  return {
    JunNavigation: {
      styleOverrides: {
        item: getItemStyles(theme),
      },
    },
  };
};
