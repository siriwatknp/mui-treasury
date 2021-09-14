import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { useCCContext, CCContextValue } from "./CCField";

const resolveProps = (
  context: Partial<CCContextValue>,
  props: TextFieldProps
) => ({
  color: props.color || context.color,
  error: props.error || context.error,
  variant: props.variant || context.variant,
});

export const CCName = ({ inputProps, ...props }: TextFieldProps) => {
  const { getCardNameInputProps, ...context } = useCCContext();
  return (
    <TextField
      label="Cardholder Name"
      {...props}
      {...resolveProps(context, props)}
      inputProps={{ ...inputProps, ...getCardNameInputProps(props) }}
    />
  );
};

export const CCNumber = ({ inputProps, ...props }: TextFieldProps) => {
  const { getCardNumberInputProps, ...context } = useCCContext();
  return (
    <TextField
      label="Card Number"
      {...props}
      {...resolveProps(context, props)}
      inputProps={{ ...inputProps, ...getCardNumberInputProps(props) }}
    />
  );
};

export const CCExpiration = ({ inputProps, ...props }: TextFieldProps) => {
  const { getExpInputProps, ...context } = useCCContext();
  return (
    <TextField
      label="Valid Thru"
      {...props}
      {...resolveProps(context, props)}
      inputProps={{ ...inputProps, ...getExpInputProps(props), size: 9 }}
    />
  );
};

export const CCSecurityCode = ({ inputProps, ...props }: TextFieldProps) => {
  const { getCSCInputProps, ...context } = useCCContext();
  return (
    <TextField
      label="CVC"
      {...props}
      {...resolveProps(context, props)}
      inputProps={{ ...inputProps, ...getCSCInputProps(props) }}
    />
  );
};
