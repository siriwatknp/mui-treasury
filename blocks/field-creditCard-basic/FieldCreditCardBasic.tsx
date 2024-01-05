import React from "react";
import Box from "@mui/material/Box";
import { Theme } from "@mui/material/styles";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { SxProps } from "@mui/system";
import { useCardInput, UseCardInputOptions } from "../use-card-input";

export type CCFieldProps = {
  /**
   * className append to the root element
   */
  className?: string;

  children: React.ReactNode;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
} & UseCardInputOptions &
  Pick<TextFieldProps, "variant" | "error" | "color"> &
  Omit<JSX.IntrinsicElements["div"], "ref" | "onChange" | "onBlur">;

export type CCContextValue = ReturnType<typeof useCardInput> &
  Pick<TextFieldProps, "variant" | "error" | "color"> &
  Pick<UseCardInputOptions, "autoFocus" | "fullYear" | "cardSeparator">;

const CCContext = React.createContext<CCContextValue | undefined>(undefined);

export const useCCContext = () => {
  const context = React.useContext(CCContext);
  if (!context) {
    throw new Error("Cannot find context, must be called under <CCField>");
  }
  return context;
};

export const CCField = React.forwardRef<HTMLDivElement, CCFieldProps>(
  function CreditCard(props, ref) {
    const {
      children,
      autoFocus,
      cardSeparator,
      fullYear,
      onChange,
      onBlur,
      defaultValue,
      value,
      variant,
      color,
      error,
      ...other
    } = props;

    const context = useCardInput({
      ...props,
      autoFocus,
      cardSeparator,
      fullYear,
      onChange,
      onBlur,
      defaultValue,
      value,
    });

    return (
      <Box ref={ref} {...other}>
        <CCContext.Provider
          value={{
            ...context,
            color,
            error,
            variant,
            autoFocus,
            cardSeparator,
            fullYear,
          }}
        >
          {children}
        </CCContext.Provider>
      </Box>
    );
  }
);

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
