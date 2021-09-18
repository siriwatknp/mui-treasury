import "@mui-treasury/component-sociallink";
export const getSocialLinkMoonStyles = (arg) => {
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
export const getSocialLinkMoonTheme = (theme) => {
  return {
    JunSocialLink: {
      styleOverrides: {
        root: getSocialLinkMoonStyles(theme),
      },
    },
  };
};
