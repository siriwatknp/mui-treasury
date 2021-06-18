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
    opacity: `${light ? 1 : 0.5} !important`,
    color: "rgb(108, 117, 125)",
  };
};
export const createTextfieldBootstrapStyles = (theme: Theme): Output => {
  const placeholderVisible = getPlaceholderVisible(theme);
  return {
    MuiInputLabel: {
      styleOverrides: {
        // @ts-ignore
        standard: {
          transform: "none",
          lineHeight: "1.5",
          color: "#212529",
          "&.Mui-focused": {
            color: "#212529",
          },
          "&.Mui-error": {
            color: "#212529",
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
          border: "1px solid",
          borderColor: "#ced4da",
          borderRadius: "0.25rem",
          transition:
            "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
          backgroundColor: "#fff",
          lineHeight: "1.5",
          fontSize: "1rem",
          "label + &": {
            marginTop: 32,
          },
          "&.Mui-focused": {
            borderColor: "#86b7fe",
            boxShadow: "0 0 0 0.25rem rgb(13 110 253 / 25%)",
          },
          "&.Mui-error": {
            borderColor: "#dc3545",
          },
          "&.Mui-error.Mui-focused": {
            boxShadow: "0 0 0 0.25rem rgb(220 53 69 / 25%)",
          },
          "&&& .MuiInput-input": {
            // tripple '&' to override default behaviour
            "&::-webkit-input-placeholder": placeholderVisible,
            "&::-moz-placeholder": placeholderVisible,
            "&:-ms-input-placeholder": placeholderVisible,
            "&::-ms-input-placeholder": placeholderVisible, // Edge
          },
          "&.Mui-disabled": {
            backgroundColor: "#e9ecef",
          },
          "&.MuiInputBase-sizeSmall": {
            fontSize: ".875rem",
            borderRadius: "0.2rem",
            minHeight: "calc(1.5em + .5rem + 2px)",
            "label + &": {
              marginTop: 24,
            },
          },
        },
        input: {
          padding: ".375rem .75rem",
          height: "auto",
          letterSpacing: 0,
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
            padding: ".25rem .5rem",
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
        root: {
          "&.MuiInput-input": {
            height: "100%",
            "&:focus": {
              borderRadius: "0.25rem",
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
            "&.Mui-error": {
              color: "#dc3545",
            },
          },
        },
      },
    },
  };
};

const useInputLabelStyles = makeStyles(
  // @ts-expect-error
  (theme) => createTextfieldBootstrapStyles(theme).MuiInputLabel.styleOverrides
);

const useInputStyles = makeStyles(
  // @ts-expect-error
  (theme) => createTextfieldBootstrapStyles(theme).MuiInput.styleOverrides
);

const useInputAdornmentStyles = makeStyles(
  // @ts-expect-error
  (theme) =>
    createTextfieldBootstrapStyles(theme).MuiInputAdornment.styleOverrides
);

const useSelectStyles = makeStyles(
  // @ts-expect-error
  (theme) => createTextfieldBootstrapStyles(theme).MuiSelect.styleOverrides
);

const useFormHelperTextStyles = makeStyles(
  // @ts-expect-error
  (theme) =>
    createTextfieldBootstrapStyles(theme).MuiFormHelperText.styleOverrides
);

export const useTextfieldBootstrapStyles = () => {
  return {
    InputLabel: useInputLabelStyles(),
    Input: useInputStyles(),
    InputAdornment: useInputAdornmentStyles(),
    Select: useSelectStyles(),
    FormHelperText: useFormHelperTextStyles(),
  };
};
