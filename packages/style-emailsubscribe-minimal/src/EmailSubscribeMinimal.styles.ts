import "@mui-treasury/component-emailsubscribe";
import { emailSubscribeClasses } from "@mui-treasury/component-emailsubscribe";
import { CSSObject } from "@material-ui/system";
import { Theme } from "@material-ui/core/styles";
import { Components } from "@material-ui/core/styles/components";
import { blueGrey } from "@material-ui/core/colors";

type Output = Required<Pick<Components, "JunEmailSubscribe">>;

export const getEmailSubscribeMinimalStyles = (
  arg: Theme | { theme: Theme }
): CSSObject => {
  const { palette } = "theme" in arg ? arg.theme : arg;
  return {
    position: "relative",
    backgroundColor:
      palette.mode === "dark" ? palette.background.default : blueGrey[50],

    [`& .${emailSubscribeClasses.input}`]: {
      border: "none",
      borderRadius: 0,
      backgroundColor: palette.action.hover,
      padding: "0.5rem 1rem",
      paddingRight: "3rem",
      color: palette.text.primary,
      "&:hover, &:focus": {
        backgroundColor: palette.action.focus,
        boxShadow: "none",
        border: "none",
      },
    },
    [`& .${emailSubscribeClasses.submit}`]: {
      alignSelf: "stretch",
      position: "absolute",
      borderRadius: 0,
      zIndex: 1,
      backgroundColor: "unset",
      top: 0,
      right: 0,
      bottom: 0,
      padding: "0 0.75rem",
      color: palette.action.active,
      "&:hover, &:focus": {
        backgroundColor: palette.action.hover,
      },
    },
  };
};

export const getEmailSubscribeMinimalTheme = (theme: Theme): Output => {
  return {
    JunEmailSubscribe: {
      styleOverrides: {
        form: getEmailSubscribeMinimalStyles(theme),
      },
    },
  };
};
