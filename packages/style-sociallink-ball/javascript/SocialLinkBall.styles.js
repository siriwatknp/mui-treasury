import "@mui-treasury/component-sociallink";
export const getSocialLinkBallStyles = (arg) => {
  const { palette } = "theme" in arg ? arg.theme : arg;
  return {
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer",
    fontSize: 24,
    padding: "12px",
    borderRadius: "40px",
    backgroundColor:
      palette.mode === "dark"
        ? "rgba(255,255,255,0.08)"
        : palette.action.selected,
    color: palette.text.secondary,
    "&:not(:first-of-type)": {
      marginLeft: "0.5rem",
    },
    "&:hover, &:focus": {
      backgroundColor:
        palette.mode === "dark"
          ? palette.action.focus
          : palette.action.disabled,
      color: palette.mode === "dark" ? "#fff" : palette.text.primary,
    },
  };
};
export const getSocialLinkBallTheme = (theme) => {
  return {
    JunSocialLink: {
      styleOverrides: {
        root: getSocialLinkBallStyles(theme),
      },
    },
  };
};
