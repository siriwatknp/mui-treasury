import React from "react";
import type { TextFieldProps } from "@mui/material/TextField";
import type { UseBirthdateInputOptions } from "../use-birthdate-input";
import TextField from "@mui/material/TextField";
import { useBirthdateInput } from "../use-birthdate-input";

export function FieldBirthdateBasic(
  props: TextFieldProps & UseBirthdateInputOptions
) {
  const { getInputProps } = useBirthdateInput(props);
  return (
    <TextField
      {...props}
      inputProps={{ ...props.inputProps, ...getInputProps(props.inputProps) }}
    />
  );
}
