import React, { PropsWithChildren } from "react";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput, { OutlinedInputProps } from "@mui/material/OutlinedInput";
import SvgIcon from "@mui/material/SvgIcon";
import { useNumberInput, UseNumberInputOptions } from "../use-number-input";

export type {
  NumberInputError as FieldNumberInputError,
  NumberInputEventType as FieldNumberInputEventType,
} from "../use-number-input";

export type FieldNumberInputProps = UseNumberInputOptions & {
  inputElement?: React.ReactElement;
  incrementIcon?: React.ReactNode;
  decrementIcon?: React.ReactNode;
} & Omit<OutlinedInputProps, "onChange">;

export const FieldNumberInput = React.forwardRef<
  any,
  PropsWithChildren<FieldNumberInputProps>
>(function NumberInput(props, ref) {
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
    size = "medium",
    ...other
  } = props;

  const { inputRef, getInputProps, getIncrementProps, getDecrementProps } =
    useNumberInput(props);

  return React.cloneElement(inputElement, {
    ref,
    size,
    ...other,
    inputRef,
    inputProps: getInputProps(props),
    endAdornment: (
      <>
        {endAdornment}
        <InputAdornment position="end">
          <Box
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
              marginRight: "-0.5rem",
              "& > button": {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 4,
                "&:hover": {
                  color: theme.palette.text.primary,
                },
                "&.Mui-disabled": {
                  opacity: 0.5,
                  cursor: "not-allowed",
                },
              },
            })}
          >
            <ButtonBase {...getIncrementProps()}>
              <SvgIcon>
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
              </SvgIcon>
            </ButtonBase>
            <ButtonBase {...getDecrementProps()}>
              <SvgIcon>
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
              </SvgIcon>
            </ButtonBase>
          </Box>
        </InputAdornment>
      </>
    ),
  });
});
