export const getMenuBootstrapStyles = (arg) => {
  const theme = "theme" in arg ? arg.theme : arg;
  return {
    "& .MuiMenu-paper, .MuiPaper-root": {
      boxShadow: "none",
      border: "1px solid",
      borderColor: "rgba(0,0,0,.15)",
      marginTop: 2,
    },
    "& .MuiMenuItem-root": {
      transition: "none",
      "&:hover, &:focus": {
        backgroundColor: "#e9ecef",
      },
      "&:active, &.Mui-selected, &.Mui-selected.Mui-focusVisible, &.Mui-selected:hover":
        {
          color: "#fff",
          backgroundColor: "#0d6efd",
        },
    },
  };
};
export const getMenuBootstrapTheme = (theme) => ({
  MuiMenu: {
    defaultProps: {
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "left",
      },
      transformOrigin: {
        horizontal: "left",
        vertical: "top",
      },
    },
    styleOverrides: {
      root: getMenuBootstrapStyles(theme),
    },
  },
  MuiMenuItem: {
    defaultProps: {
      disableRipple: true,
    },
  },
});
