import { Theme } from "@material-ui/core/styles";
import { Components } from "@material-ui/core/styles/components";
import makeStyles from "@material-ui/styles/makeStyles";

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
    opacity: `${light ? 0.32 : 0.5} !important`,
    fontWeight: 500,
    letterSpacing: 0,
  };
};
export const createTextfieldAntStyles = (theme: Theme): Output => {
  const placeholderVisible = getPlaceholderVisible(theme);
  return {
    MuiInputLabel: {
      styleOverrides: {
        // @ts-ignore
        standard: {
          fontSize: 14,
          transform: "none",
          color: theme.palette.text.primary,
          lineHeight: 1.5715,
          "&.Mui-focused": {
            color: theme.palette.text.primary,
          },
          "&.Mui-error": {
            color: theme.palette.text.primary,
          },
          "&.Mui-required": {
            paddingLeft: 10,
            "& .MuiFormLabel-asterisk": {
              position: "absolute",
              left: 0,
              color: "#ff4d4f",
            },
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
          border: "1px solid",
          borderColor: "#d9d9d9",
          borderRadius: 2,
          backgroundColor: theme.palette.background.paper,
          fontSize: 14,
          lineHeight: 1.5715,
          "label + &": {
            marginTop: 28,
            "&.MuiInputBase-sizeSmall": {
              marginTop: 24,
            },
          },
          "&:hover:not(.Mui-disabled):not(.Mui-error)": {
            borderColor: "#40a9ff",
          },
          "&.Mui-focused": {
            borderColor: "#40a9ff",
            boxShadow: "0 0 0 2px rgb(24 144 255 / 20%)",
          },
          "&.Mui-error": {
            borderColor: "#ff4d4f",
            "&.Mui-focused": {
              boxShadow: "0 0 0 2px rgb(255 77 79 / 20%)",
            },
          },
          "&&& .MuiInput-input": {
            // tripple '&' to override default behaviour
            "&::-webkit-input-placeholder": placeholderVisible,
            "&::-moz-placeholder": placeholderVisible, // Firefox 19+
            "&:-ms-input-placeholder": placeholderVisible, // IE11
            "&::-ms-input-placeholder": placeholderVisible, // Edge
          },
          "&.Mui-disabled": {
            backgroundColor: "#f5f5f5",
          },
        },
        input: {
          padding: "4px 11px",
          height: "auto",
          "&.MuiInputBase-inputAdornedStart": {
            paddingLeft: 36,
            "&.MuiInputBase-inputSizeSmall": {
              paddingLeft: 32,
            },
          },
          "&.MuiInputBase-inputAdornedEnd": {
            paddingRight: 36,
            "&.MuiInputBase-inputSizeSmall": {
              paddingRight: 32,
            },
          },
          "&.MuiInputBase-inputSizeSmall": {
            padding: "0 7px",
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          "&.MuiInputAdornment-standard": {
            position: "absolute",
            color: theme.palette.text.primary,
            "& svg": {
              fontSize: "1.25rem",
            },
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
        root: {
          "&.MuiSelect-standard": {
            paddingRight: 32,
          },
        },
        // @ts-ignore
        standard: {
          "&.MuiInputBase-inputAdornedEnd": {
            paddingRight: 60,
            "&.MuiInputBase-inputSizeSmall": {
              paddingRight: 60,
            },
          },
        },
        // @ts-ignore
        iconStandard: {
          right: 4,
          "& + .MuiInputAdornment-standard": {
            right: 32,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          ".MuiInput-root + &": {
            lineHeight: 1.5715,
            fontSize: 12,
            "&.Mui-error": {
              color: "#ff4d4f",
            },
          },
        },
      },
    },
  };
};

const useInputLabelStyles = makeStyles(
  // @ts-expect-error
  (theme) => createTextfieldAntStyles(theme).MuiInputLabel.styleOverrides
);

const useInputStyles = makeStyles(
  // @ts-expect-error
  (theme) => createTextfieldAntStyles(theme).MuiInput.styleOverrides
);

const useInputAdornmentStyles = makeStyles(
  // @ts-expect-error
  (theme) => createTextfieldAntStyles(theme).MuiInputAdornment.styleOverrides
);

const useSelectStyles = makeStyles(
  // @ts-expect-error
  (theme) => createTextfieldAntStyles(theme).MuiSelect.styleOverrides
);

const useFormHelperTextStyles = makeStyles(
  // @ts-expect-error
  (theme) => createTextfieldAntStyles(theme).MuiFormHelperText.styleOverrides
);

export const useTextfieldAntStyles = () => {
  return {
    InputLabel: useInputLabelStyles(),
    Input: useInputStyles(),
    InputAdornment: useInputAdornmentStyles(),
    Select: useSelectStyles(),
    FormHelperText: useFormHelperTextStyles(),
  };
};
