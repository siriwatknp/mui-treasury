import "@mui-treasury/component-sociallink";
import { Theme, alpha, lighten } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import { Components } from "@mui/material/styles/components";

type Output = Required<Pick<Components, "JunSocialLink">>;

export const getSocialLinkPoofStyles = (
  arg: Theme | { theme: Theme }
): CSSObject => {
  const { palette } = "theme" in arg ? arg.theme : arg;
  const extraLightPrimary = alpha(lighten(palette.primary.main, 0.84), 0.84);
  return {
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer",
    fontSize: 24,
    padding: "12px",
    borderColor: palette.divider,
    color: palette.text.secondary,
    position: "relative",
    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0,
      backgroundColor:
        palette.mode === "dark" ? palette.action.focus : extraLightPrimary,
      borderRadius: "40px",
      transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
      transform: "scale(0)",
    },
    "&:not(:first-of-type)": {
      marginLeft: "0.5rem",
    },
    "&:hover, &:focus": {
      color: palette.mode === "dark" ? "#fff" : palette.primary.main,
      "&:after": {
        transform: "scale(1)",
      },
    },
    "& svg": {
      position: "relative",
      zIndex: 1,
    },
  };
};

export const getSocialLinkPoofTheme = (theme: Theme): Output => {
  return {
    JunSocialLink: {
      styleOverrides: {
        root: getSocialLinkPoofStyles(theme),
      },
    },
  };
};
