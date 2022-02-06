import { CSSObject } from "@mui/system";
import { Theme, alpha } from "@mui/material/styles";
import { Components } from "@mui/material/styles/components";

type Output = Required<Pick<Components, "MuiSlider">>;

export const getSliderApolloStyles = (
  arg: Theme | { theme: Theme }
): CSSObject => {
  const theme = "theme" in arg ? arg.theme : arg;
  return {
    "& .MuiSlider-rail": {
      height: 8,
      borderRadius: 4,
      backgroundColor: theme.palette.grey[100],
      opacity: 1,
    },
    "& .MuiSlider-track": {
      height: 8,
      borderRadius: 4,
    },
    "& .MuiSlider-thumb": {
      width: 24,
      height: 24,
      border: "3px solid",
      backgroundColor: theme.palette.common.white,
    },
    "& .MuiSlider-thumbColorPrimary": {
      borderColor: theme.palette.primary.main,
      boxShadow: `0 2px 4px 0 ${alpha(theme.palette.primary.dark, 0.6)}`,
    },
    "& .MuiSlider-thumbColorSecondary": {
      borderColor: theme.palette.secondary.main,
      boxShadow: `0 2px 4px 0 ${alpha(theme.palette.secondary.dark, 0.6)}`,
    },
    "& .MuiSlider-valueLabel": {
      left: "calc(-50% - -2px)",
    },
  };
};

export const getSliderApolloTheme = (theme: Theme): Output => {
  return {
    MuiSlider: {
      styleOverrides: {
        root: getSliderApolloStyles(theme),
      },
    },
  };
};
