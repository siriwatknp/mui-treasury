import React from "react";
import TextField from "@mui/material/TextField";
import { useCCContext } from "./CCField";
const resolveProps = (context, props) => ({
  color: props.color || context.color,
  error: props.error || context.error,
  variant: props.variant || context.variant,
});
export const CCName = ({ inputProps, ...props }) => {
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
export const CCNumber = ({ inputProps, ...props }) => {
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
export const CCExpiration = ({ inputProps, ...props }) => {
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
export const CCSecurityCode = ({ inputProps, ...props }) => {
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
