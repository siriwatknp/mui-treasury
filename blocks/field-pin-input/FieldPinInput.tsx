import React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import { usePinInput, UsePinInputOptions } from "../use-pin-input";

export type FieldPinInputProps = {
  children: Array<React.ReactElement>;
} & Omit<BoxProps, "children"> &
  Omit<UsePinInputOptions, "pinLength">;

export const FieldPinInput = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<FieldPinInputProps>
>(function FieldPinInput(props, ref) {
  const { children, onChange, onBlur, ...other } = props;
  const { pins } = usePinInput({ ...props, pinLength: children.length });

  return (
    <Box
      ref={ref}
      {...other}
      sx={{
        display: "flex",
        gap: "0.5rem",
        "& input": {
          textAlign: "center",
          caretColor: "transparent",
        },
      }}
    >
      {pins.map((getInputProps, index) => {
        const inputElement = children[index];
        return (
          <React.Fragment key={index}>
            {React.cloneElement(inputElement, {
              inputProps: getInputProps({
                ...inputElement.props.inputProps,
              }),
            })}
          </React.Fragment>
        );
      })}
    </Box>
  );
});
