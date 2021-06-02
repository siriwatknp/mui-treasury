import "@mui-treasury/component-emailsubscribe";
import { emailSubscribeClasses } from "@mui-treasury/component-emailsubscribe";
import { Theme } from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/styles";
import { Components } from "@material-ui/core/styles/components";

type Output = Required<Pick<Components, "JunEmailSubscribe">>;

const getFormStyles = (): CSSProperties => ({
  width: 343,
});

const getInputStyles = ({ palette, spacing }: Theme): CSSProperties => {
  return {
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
  };
};

const getSubmitStyles = ({ palette, spacing }: Theme): CSSProperties => ({
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
});

export const getEmailSubscribeTranslucentStyles = ({
  theme,
}: {
  theme: Theme;
}): CSSProperties => ({
  ...getFormStyles(),
  [`& .${emailSubscribeClasses.input}`]: getInputStyles(theme),
  [`& .${emailSubscribeClasses.submit}`]: getSubmitStyles(theme),
});

export const getEmailSubscribeTranslucentTheme = (theme: Theme): Output => {
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
