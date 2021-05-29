import { makeStyles, alpha } from "@material-ui/core/styles";
export const createSliderApolloStyles = (theme) => {
  return {
    MuiSlider: {
      styleOverrides: {
        rail: {
          height: 8,
          borderRadius: 4,
          backgroundColor: theme.palette.grey[100],
          opacity: 1,
        },
        track: {
          height: 8,
          borderRadius: 4,
        },
        thumb: {
          width: 24,
          height: 24,
          border: "3px solid",
          backgroundColor: theme.palette.common.white,
          marginLeft: -12,
          marginTop: -8,
        },
        thumbColorPrimary: {
          borderColor: theme.palette.primary.main,
          boxShadow: `0 2px 4px 0 ${alpha(theme.palette.primary.dark, 0.6)}`,
        },
        thumbColorSecondary: {
          borderColor: theme.palette.secondary.main,
          boxShadow: `0 2px 4px 0 ${alpha(theme.palette.secondary.dark, 0.6)}`,
        },
        valueLabel: {
          left: "calc(-50% - -2px)",
        },
      },
    },
  };
};
export const useSliderApolloStyles = makeStyles(
  // @ts-expect-error
  (theme) => createSliderApolloStyles(theme).MuiSlider.styleOverrides,
  {
    name: "MuiSliderApollo",
  }
);
