import { CSSObject } from "@mui/system";
import { Theme, alpha } from "@mui/material/styles";
import { Components } from "@mui/material/styles/components";

type Output = Required<Pick<Components, "MuiButton">>;

export const getButtonBootstrapStyles = (
  arg: Theme | { theme: Theme }
): CSSObject => {
  const { palette } = "theme" in arg ? arg.theme : arg;
  return {
    padding: ".375rem .75rem",
    textTransform: "none",
    transition:
      "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    letterSpacing: "normal",
    "&.MuiButton-contained": {
      "&:focus": {
        boxShadow: `0 0 0 0.25rem ${palette.grey[200]}`,
      },
      "&.Mui-disabled": {
        opacity: 0.65,
      },
    },
    "&.MuiButton-containedPrimary": {
      "&:active": {
        backgroundColor: palette.primary.dark,
      },
      "&:focus": {
        boxShadow: `0 0 0 0.25rem ${alpha(palette.primary.light, 0.5)}`,
      },
      "&.Mui-disabled": {
        color: "#fff",
        backgroundColor: palette.primary.main,
      },
    },
    "&.MuiButton-containedSecondary": {
      "&:active": {
        backgroundColor: palette.secondary.dark,
      },
      "&:focus": {
        boxShadow: `0 0 0 0.25rem ${alpha(palette.secondary.light, 0.5)}`,
      },
      "&.Mui-disabled": {
        color: "#fff",
        backgroundColor: palette.secondary.main,
      },
    },
    "&.MuiButton-outlined": {
      "&.Mui-disabled": {
        color: palette.text.primary,
        borderColor: palette.grey[300],
        opacity: 0.65,
      },
    },
    "&.MuiButton-outlinedPrimary": {
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
      },
    },
    "&.MuiButton-outlinedSecondary": {
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
      },
    },
  };
};

export const getButtonBootstrapTheme = (theme: Theme): Output => ({
  MuiButton: {
    defaultProps: {
      disableElevation: true,
      disableTouchRipple: true,
    },
    styleOverrides: {
      root: getButtonBootstrapStyles(theme),
    },
  },
});
