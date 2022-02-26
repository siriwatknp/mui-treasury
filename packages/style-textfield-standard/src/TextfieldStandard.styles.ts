import { Theme } from "@mui/material/styles";
import { Components } from "@mui/material/styles/components";

type Output = Required<
  Pick<
    Components,
    | "MuiInputLabel"
    | "MuiInput"
    | "MuiInputAdornment"
    | "MuiSelect"
    | "MuiFormHelperText"
  >
>;
const getPlaceholderVisible = (theme: Theme) => {
  const light = theme.palette.mode === "light";
  return {
    opacity: `${light ? 0.42 : 0.5} !important`,
  };
};
export const getTextFieldStandardTheme = (theme: Theme): Output => {
  const placeholderVisible = getPlaceholderVisible(theme);
  return {
    MuiInputLabel: {
      styleOverrides: {
        // @ts-ignore
        standard: {
          fontWeight: 500,
          transform: "none",
          lineHeight: "24px",
          color: theme.palette.text.primary,
          "&.Mui-focused": {
            color: theme.palette.primary.dark,
          },
          "&.MuiInputLabel-sizeSmall": {
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
          },
        },
      },
    },
    MuiInput: {
      defaultProps: {
        disableUnderline: true,
      },
      styleOverrides: {
        root: {
          height: 40,
          border: "1px solid",
          borderColor: theme.palette.grey[300],
          borderRadius: theme.shape.borderRadius,
          transition: "all 0.2s ease 0s",
          "label + &": {
            marginTop: 32,
          },
          "&.Mui-focused": {
            borderColor: theme.palette.primary.main,
            boxShadow: `${theme.palette.primary.main} 0px 0px 0px 1px`,
          },
          "&.Mui-error:not(.Mui-focused)": {
            borderColor: theme.palette.error.main,
            boxShadow: `${theme.palette.error.main} 0px 0px 0px 1px`,
          },
          "&&& .MuiInput-input": {
            // tripple '&' to override default behaviour
            "&::-webkit-input-placeholder": placeholderVisible,
            "&::-moz-placeholder": placeholderVisible, // Firefox 19+
            "&:-ms-input-placeholder": placeholderVisible, // IE11
            "&::-ms-input-placeholder": placeholderVisible, // Edge
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.grey[50],
          },
          "&.MuiInputBase-sizeSmall": {
            height: 36,
            "label + &": {
              marginTop: 24,
            },
          },
        },
        input: {
          padding: "0 16px",
          zIndex: 1,
          height: "100%",
          lineHeight: "1.25rem",
          "&.MuiInputBase-inputAdornedStart": {
            paddingLeft: 40,
            "&.MuiInputBase-inputSizeSmall": {
              paddingLeft: 40,
            },
          },
          "&.MuiInputBase-inputAdornedEnd": {
            paddingRight: 40,
            "&.MuiInputBase-inputSizeSmall": {
              paddingRight: 40,
            },
          },
          "&.MuiInputBase-inputSizeSmall": {
            padding: "0 12px",
            fontSize: "0.875rem",
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          "&.MuiInputAdornment-standard": {
            position: "absolute",
            color: theme.palette.action.disabled,
          },
        },
        positionStart: {
          left: 8,
        },
        positionEnd: {
          right: 8,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          "&.MuiInput-input": {
            height: "100%",
            "&:focus": {
              borderRadius: theme.shape.borderRadius,
            },
          },
          "&.MuiSelect-standard": {
            paddingRight: 32,
          },
        },
        // @ts-ignore
        standard: {
          display: "flex",
          alignItems: "center",
          "&.MuiInputBase-inputAdornedEnd": {
            paddingRight: 64,
            "&.MuiInputBase-inputSizeSmall": {
              paddingRight: 64,
            },
          },
        },
        // @ts-ignore
        iconStandard: {
          right: 6,
          "& + .MuiInputAdornment-standard": {
            right: 32,
          },
        },
        nativeInput: {
          padding: 0,
          border: "none",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          ".MuiInput-root + &": {
            marginTop: 4,
          },
        },
      },
    },
  };
};
