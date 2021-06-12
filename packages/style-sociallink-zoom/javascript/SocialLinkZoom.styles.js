import "@mui-treasury/component-sociallink";
export const getSocialLinkZoomStyles = ({ theme: { palette } }) => ({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  fontSize: 24,
  padding: 12,
  color:
    palette.mode === "dark" ? palette.text.disabled : palette.primary.light,
  "&:not(:first-of-type)": {
    marginLeft: "0.5rem",
  },
  "&:hover, &:focus": {
    transform: "scale(1.3)",
    color: palette.mode === "dark" ? "#fff" : palette.primary.main,
  },
});
export const getSocialLinkZoomTheme = (theme) => {
  return {
    JunSocialLink: {
      styleOverrides: {
        root: getSocialLinkZoomStyles({ theme }),
      },
    },
  };
};
