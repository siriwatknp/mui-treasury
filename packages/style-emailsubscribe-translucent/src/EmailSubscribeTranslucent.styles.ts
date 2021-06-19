import "@mui-treasury/component-emailsubscribe";
import { emailSubscribeClasses } from "@mui-treasury/component-emailsubscribe";
import { CSSObject } from "@material-ui/system";
import { Theme } from "@material-ui/core/styles";
import { Components } from "@material-ui/core/styles/components";

type Output = Required<Pick<Components, "JunEmailSubscribe">>;

export const getEmailSubscribeTranslucentStyles = (
  arg: Theme | { theme: Theme }
): CSSObject => {
  const { palette, spacing } = "theme" in arg ? arg.theme : arg;
  return {
    width: 343,
    maxWidth: "100%",
    [`& .${emailSubscribeClasses.input}`]: {
      borderRadius: 0,
      padding: spacing(0, 1.5),
      backgroundColor:
        palette.mode === "dark" ? palette.divider : palette.action.selected,
      color: palette.text.primary,
      border: "none",
      "&:hover, &:focus": {
        boxShadow: "none",
        backgroundColor:
          palette.mode === "dark" ? "rgba(255,255,255,0.2)" : palette.divider,
      },
    },
    [`& .${emailSubscribeClasses.submit}`]: {
      borderRadius: 0,
      marginLeft: "0.5rem",
      padding: spacing(1, 3),
      backgroundColor: palette.divider,
      color: palette.text.primary,
      fontSize: "1rem",
      lineHeight: 1.5,
      "&:hover": {
        backgroundColor:
          palette.mode === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)",
      },
    },
  };
};

export const getEmailSubscribeTranslucentTheme = (theme: Theme): Output => {
  return {
    JunEmailSubscribe: {
      styleOverrides: {
        form: getEmailSubscribeTranslucentStyles(theme),
      },
    },
  };
};
