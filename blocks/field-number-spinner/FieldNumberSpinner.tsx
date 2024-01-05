import React, { PropsWithChildren } from "react";
import ButtonBase from "@mui/material/ButtonBase";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput, { OutlinedInputProps } from "@mui/material/OutlinedInput";
import SvgIcon from "@mui/material/SvgIcon";
import { useNumberInput, UseNumberInputOptions } from "../use-number-input";

export type FieldNumberSpinnerProps = UseNumberInputOptions & {
  inputElement?: React.ReactElement;
} & Omit<OutlinedInputProps, "onChange">;

export const FieldNumberSpinner = React.forwardRef<
  any,
  PropsWithChildren<FieldNumberSpinnerProps>
>(function FieldNumberSpinner({ children, ...props }, ref) {
  const {
    inputElement = <OutlinedInput />,
    endAdornment = null,
    defaultValue,
    allowMouseWheel,
    keepWithinRange,
    clampValueOnBlur,
    focusInputOnChange,
    formatter,
    parser,
    min = 0,
    ...other
  } = props;

  const { inputRef, getInputProps, getIncrementProps, getDecrementProps } =
    useNumberInput({ ...props, min });

  return React.cloneElement(inputElement, {
    ref,
    readOnly: true,
    ...other,
    sx: {
      "& input": {
        textAlign: "center",
      },
      ...inputElement.props?.sxProps,
    },
    inputRef,
    inputProps: {
      size: 4,
      ...inputElement.props?.inputProps,
      ...getInputProps(props),
    },
    startAdornment: (
      <InputAdornment position="start">
        <ButtonBase
          {...getDecrementProps()}
          sx={(theme) => ({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: theme.shape.borderRadius,
            width: 40,
            height: 40,
            marginLeft: "-0.25rem",
            "&:hover:not(.Mui-disabled)": {
              color: theme.palette.text.primary,
              backgroundColor: theme.palette.action.hover,
            },
            "&.Mui-disabled": {
              opacity: 0.5,
              cursor: "not-allowed",
            },
          })}
        >
          <SvgIcon>
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M19 13H5v-2h14v2z" />
          </SvgIcon>
        </ButtonBase>
      </InputAdornment>
    ),
    endAdornment: (
      <InputAdornment position="end">
        <ButtonBase
          {...getIncrementProps()}
          sx={(theme) => ({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: theme.shape.borderRadius,
            width: 40,
            height: 40,
            marginRight: "-0.25rem",
            "&:hover:not(.Mui-disabled)": {
              color: theme.palette.text.primary,
              backgroundColor: theme.palette.action.hover,
            },
            "&.Mui-disabled": {
              opacity: 0.5,
              cursor: "not-allowed",
            },
          })}
        >
          <SvgIcon>
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </SvgIcon>
        </ButtonBase>
      </InputAdornment>
    ),
  });
});
