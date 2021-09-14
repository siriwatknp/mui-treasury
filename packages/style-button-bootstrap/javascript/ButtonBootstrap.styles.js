import { alpha } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
export const ButtonBootstrapStyles = ({ palette }) =>
  createStyles({
    root: {
      padding: ".375rem .75rem",
      textTransform: "none",
      transition:
        "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
      boxShadow: "none",
      letterSpacing: "normal",
      "&.Mui-disabled": {
        opacity: 0.65,
      },
    },
    contained: {
      "&:hover": {
        boxShadow: "none",
      },
      "&:focus": {
        boxShadow: `0 0 0 0.25rem ${palette.grey[200]}`,
      },
      "&.Mui-disabled": {
        color: palette.text.primary,
      },
    },
    containedPrimary: {
      "&:active": {
        backgroundColor: palette.primary.dark,
      },
      "&:focus": {
        boxShadow: `0 0 0 0.25rem ${palette.primary.light}`,
      },
      "&.Mui-disabled": {
        color: "#fff",
        backgroundColor: palette.primary.main,
      },
    },
    containedSecondary: {
      "&:active": {
        backgroundColor: palette.secondary.dark,
      },
      "&:focus": {
        boxShadow: `0 0 0 0.25rem ${alpha(palette.secondary.light, 0.6)}`,
      },
      "&.Mui-disabled": {
        color: "#fff",
        backgroundColor: palette.secondary.main,
      },
    },
    outlined: {
      "&.Mui-disabled": {
        color: palette.text.primary,
        borderColor: palette.grey[300],
      },
    },
    outlinedPrimary: {
      borderColor: palette.primary.main,
      "&:hover": {
        backgroundColor: palette.primary.main,
        color: "#fff",
      },
      "&:focus": {
        boxShadow: `0 0 0 0.25rem ${palette.primary.light}`,
      },
      "&.Mui-disabled": {
        color: palette.primary.main,
        borderColor: palette.primary.main,
      },
    },
    outlinedSecondary: {
      borderColor: palette.secondary.main,
      "&:hover": {
        backgroundColor: palette.secondary.main,
        color: "#fff",
      },
      "&:focus": {
        boxShadow: `0 0 0 0.25rem ${alpha(palette.secondary.light, 0.6)}`,
      },
      "&.Mui-disabled": {
        color: palette.secondary.main,
        borderColor: palette.secondary.main,
      },
    },
  });
export const useButtonBootstrapStyles = makeStyles(ButtonBootstrapStyles, {
  name: "MuiButtonBootstrap",
});
