import "@mui-treasury/component-emailsubscribe";
import { emailSubscribeClasses } from "@mui-treasury/component-emailsubscribe";
import { CSSObject } from "@material-ui/system";
import { Theme } from "@material-ui/core/styles";
import { Components } from "@material-ui/core/styles/components";

type Output = Required<Pick<Components, "JunEmailSubscribe">>;

export const getEmailSubscribeInfoStyles = (
  arg: Theme | { theme: Theme }
): CSSObject => {
  const { palette } = "theme" in arg ? arg.theme : arg;
  return {
    [`& .${emailSubscribeClasses.input}`]: {
      boxSizing: "border-box",
      padding: "0.5rem 1rem",
      border: "1px solid",
      borderColor:
        palette.mode === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)",
      borderRadius: "2px 0 0 2px",
      color: palette.text.primary,
      backgroundColor:
        palette.mode === "dark" ? "transparent" : palette.common.white,
      "&:hover, &:focus": {
        borderColor:
          palette.mode === "dark"
            ? "rgba(255,255,255,0.38)"
            : "rgba(0,0,0,0.38)",
        boxShadow: "none",
        backgroundColor: palette.background.paper,
      },
    },
    [`& .${emailSubscribeClasses.submit}`]: {
      flexShrink: 0,
      borderRadius: "0 2px 2px 0",
      padding: "0.5rem",
      minWidth: 48,
      backgroundColor: palette.success.main,
      color: "#fff",
      "&:hover, &:focus": {
        backgroundColor: palette.success.dark,
      },
    },
  };
};

export const getEmailSubscribeInfoTheme = (theme: Theme): Output => {
  return {
    JunEmailSubscribe: {
      styleOverrides: {
        form: getEmailSubscribeInfoStyles(theme),
      },
    },
  };
};
