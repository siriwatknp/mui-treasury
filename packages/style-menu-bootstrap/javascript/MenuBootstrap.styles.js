import { makeStyles } from "@material-ui/core/styles";
export const createMenuBootstrapStyles = (theme) => ({
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
      paper: {
        "&.MuiPaper-root": {
          boxShadow: "none",
        },
        border: "1px solid",
        borderColor: "rgba(0,0,0,.15)",
        marginTop: 2,
      },
    },
  },
  MuiMenuItem: {
    defaultProps: {
      // @ts-expect-error
      disableRipple: true,
    },
    styleOverrides: {
      root: {
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
    },
  },
});
const useMenuStyles = makeStyles(
  // @ts-expect-error
  (theme) => createMenuBootstrapStyles(theme).MuiMenu.styleOverrides
);
const useMenuItemStyles = makeStyles(
  // @ts-expect-error
  (theme) => createMenuBootstrapStyles(theme).MuiMenuItem.styleOverrides
);
export const useMenuBootstrapStyles = () => {
  return {
    Menu: useMenuStyles(),
    MenuItem: useMenuItemStyles(),
  };
};
