import "@mui-treasury/component-emailsubscribe";
import { emailSubscribeClasses } from "@mui-treasury/component-emailsubscribe";
import { Theme } from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/styles";
import { Components } from "@material-ui/core/styles/components";

type Output = Required<Pick<Components, "JunEmailSubscribe">>;

const getFormStyles = (): CSSProperties => ({
  minWidth: 296,
});

const getInputStyles = ({ palette }: Theme): CSSProperties => {
  return {
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
        palette.mode === "dark" ? "rgba(255,255,255,0.38)" : "rgba(0,0,0,0.38)",
      boxShadow: "none",
      backgroundColor: palette.background.paper,
    },
  };
};

const getSubmitStyles = ({ palette }: Theme): CSSProperties => ({
  flexShrink: 0,
  borderRadius: "0 2px 2px 0",
  padding: "0.5rem",
  minWidth: 48,
  backgroundColor: palette.success.main,
  color: "#fff",
  "&:hover, &:focus": {
    backgroundColor: palette.success.dark,
  },
});

export const getEmailSubscribeInfoStyles = ({
  theme,
}: {
  theme: Theme;
}): CSSProperties => ({
  ...getFormStyles(),
  [`& .${emailSubscribeClasses.input}`]: getInputStyles(theme),
  [`& .${emailSubscribeClasses.submit}`]: getSubmitStyles(theme),
});

export const getEmailSubscribeInfoTheme = (theme: Theme): Output => {
  return {
    JunEmailSubscribe: {
      styleOverrides: {
        form: getFormStyles(),
        input: getInputStyles(theme),
        submit: getSubmitStyles(theme),
      },
    },
  };
};
