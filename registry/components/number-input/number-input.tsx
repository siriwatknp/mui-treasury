/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { unstable_useId as useId } from "@mui/material/utils";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import OutlinedInput, { OutlinedInputProps } from "@mui/material/OutlinedInput";
import SvgIcon from "@mui/material/SvgIcon";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import {
  useNumberInput,
  UseNumberInputOptions,
} from "@/registry/hooks/use-number-input";

export type {
  NumberInputError,
  NumberInputEventType,
} from "@/registry/hooks/use-number-input";

export type NumberInputProps = UseNumberInputOptions & {
  inputElement?: React.ReactElement;
  incrementIcon?: React.ReactNode;
  decrementIcon?: React.ReactNode;
} & Omit<OutlinedInputProps, "onChange">;

export const NumberInput = React.forwardRef<HTMLDivElement, NumberInputProps>(
  function NumberInput(props, ref) {
    const {
      endAdornment = null,
      defaultValue,
      allowMouseWheel,
      keepWithinRange,
      clampValueOnBlur,
      focusInputOnChange,
      formatter,
      parser,
      onChange,
      ...other
    } = props;

    const { inputRef, getInputProps, getIncrementProps, getDecrementProps } =
      useNumberInput(props);

    return (
      <OutlinedInput
        ref={ref}
        {...other}
        inputRef={inputRef}
        inputProps={getInputProps()}
        endAdornment={
          <>
            {endAdornment}
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                alignSelf: "stretch",
                marginRight: "-14px",
                marginLeft: "0.5rem",
                borderLeft: `1px solid ${
                  (theme.vars || theme).palette.divider
                }`,
                "& > button": {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  flex: 1,
                  width: 28,
                  "&:hover": {
                    color: theme.palette.text.primary,
                    backgroundColor: (theme.vars || theme).palette.action.hover,
                  },
                  "&.Mui-disabled": {
                    opacity: 0.5,
                    cursor: "not-allowed",
                  },
                  "&:first-child": {
                    borderTopRightRadius: (theme.vars || theme).shape
                      .borderRadius,
                  },
                  "&:last-child": {
                    borderBottomRightRadius: (theme.vars || theme).shape
                      .borderRadius,
                  },
                  "& svg": {
                    fontSize: "1rem",
                    mr: "2px",
                  },
                },
              })}
            >
              <ButtonBase {...getIncrementProps()}>
                <SvgIcon sx={{ bottom: "-4px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </SvgIcon>
              </ButtonBase>
              <Box sx={{ width: "100%", height: "1px", bgcolor: "divider" }} />
              <ButtonBase {...getDecrementProps()}>
                <SvgIcon sx={{ top: "-4px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </SvgIcon>
              </ButtonBase>
            </Box>
          </>
        }
      />
    );
  }
);

export const NumberInputField = React.forwardRef<
  HTMLDivElement,
  NumberInputProps & {
    label?: React.ReactNode;
    helperText?: React.ReactNode;
  }
>(function NumberInputField(
  { id: idOverride, helperText, label, error, fullWidth, ...props },
  ref
) {
  const id = useId(idOverride);
  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
  const inputLabelId = label && id ? `${id}-label` : undefined;
  return (
    <FormControl error={error} ref={ref} fullWidth={fullWidth}>
      <InputLabel id={inputLabelId} htmlFor={id}>
        {label}
      </InputLabel>
      <NumberInput id={id} {...props} />
      {helperText && (
        <FormHelperText id={helperTextId}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
});
