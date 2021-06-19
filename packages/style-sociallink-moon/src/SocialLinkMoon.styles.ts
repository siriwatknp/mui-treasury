import "@mui-treasury/component-sociallink";
import { Theme } from "@material-ui/core/styles";
import { CSSObject } from "@material-ui/system";
import { Components } from "@material-ui/core/styles/components";

type Output = Required<Pick<Components, "JunSocialLink">>;

export const getSocialLinkMoonStyles = (
  arg: Theme | { theme: Theme }
): CSSObject => {
  const { palette } = "theme" in arg ? arg.theme : arg;
  return {
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer",
    fontSize: 24,
    padding: "12px",
    borderRadius: "40px",
    border: "1px solid",
    borderColor: palette.divider,
    color: palette.text.secondary,
    transition: "0.3s ease-out",
    "&:not(:first-of-type)": {
      marginLeft: "0.5rem",
    },
    "&:hover, &:focus": {
      transform: "translateY(-4px)",
      borderColor: palette.text.secondary,
      color: palette.mode === "dark" ? "#fff" : palette.text.primary,
    },
  };
};

export const getSocialLinkMoonTheme = (theme: Theme): Output => {
  return {
    JunSocialLink: {
      styleOverrides: {
        root: getSocialLinkMoonStyles(theme),
      },
    },
  };
};
