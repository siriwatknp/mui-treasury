import { Theme, alpha } from "@material-ui/core/styles";
import { Components } from "@material-ui/core/styles/components";

type Output = Required<Pick<Components, "MuiButton">>;

export const createButtonBootstrapStyles = ({ palette }: Theme): Output => ({
  MuiButton: {
    defaultProps: {
      disableElevation: true,
      disableTouchRipple: true,
    },
    styleOverrides: {
      root: {
        padding: ".375rem .75rem",
        textTransform: "none",
        transition:
          "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
        letterSpacing: "normal",
      },
      contained: {
        "&:focus": {
          boxShadow: `0 0 0 0.25rem ${palette.grey[200]}`,
        },
        "&.Mui-disabled": {
          // note: it will be overridden by `containedPrimary`
          opacity: 0.65,
        },
      },
      containedPrimary: {
        "&:active": {
          backgroundColor: palette.primary.dark,
        },
        "&:focus": {
          boxShadow: `0 0 0 0.25rem ${alpha(palette.primary.light, 0.5)}`,
        },
        "&.Mui-disabled": {
          color: "#fff",
          backgroundColor: palette.primary.main,
          opacity: 0.65,
        },
      },
      containedSecondary: {
        "&:active": {
          backgroundColor: palette.secondary.dark,
        },
        "&:focus": {
          boxShadow: `0 0 0 0.25rem ${alpha(palette.secondary.light, 0.5)}`,
        },
        "&.Mui-disabled": {
          color: "#fff",
          backgroundColor: palette.secondary.main,
          opacity: 0.65,
        },
      },
      outlined: {
        "&.Mui-disabled": {
          color: palette.text.primary,
          borderColor: palette.grey[300],
          opacity: 0.65,
        },
      },
      outlinedPrimary: {
        borderColor: palette.primary.main,
        "&:hover": {
          backgroundColor: palette.primary.main,
          color: "#fff",
        },
        "&:focus": {
          boxShadow: `0 0 0 0.25rem ${alpha(palette.primary.light, 0.5)}`,
        },
        "&.Mui-disabled": {
          color: palette.primary.main,
          borderColor: palette.primary.main,
          opacity: 0.65,
        },
      },
      outlinedSecondary: {
        borderColor: palette.secondary.main,
        "&:hover": {
          backgroundColor: palette.secondary.main,
          color: "#fff",
        },
        "&:focus": {
          boxShadow: `0 0 0 0.25rem ${alpha(palette.secondary.light, 0.5)}`,
        },
        "&.Mui-disabled": {
          color: palette.secondary.main,
          borderColor: palette.secondary.main,
          opacity: 0.65,
        },
      },
    },
  },
});
