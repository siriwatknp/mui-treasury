import React from "react";
import cx from "clsx";
import { styled, useThemeProps, Theme } from "@mui/material/styles";
import { unstable_composeClasses as composeClasses } from "@mui/core";
import { SxProps } from "@mui/system";
import { OverridableComponent } from "@mui-treasury/types";
import { TextFieldProps } from "@mui/material/TextField";
import {
  useCardInput,
  UseCardInputOptions,
} from "@mui-treasury/use-card-input";

import {
  getCreditCardUtilityClass,
  CreditCardClasses,
} from "./creditCardClasses";

export type CCFieldProps = {
  /**
   * className append to the root element
   */
  className?: string;

  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<CreditCardClasses>;

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

const useUtilityClasses = (ownerState: CCFieldProps) => {
  const { classes } = ownerState;
  const slots = {
    root: ["root"],
  };
  return composeClasses(slots, getCreditCardUtilityClass, classes);
};

const CCFieldRoot = styled("div", {
  name: "JunCreditCard",
  slot: "Field",
  overridesResolver: (props, styles) => styles.root,
})<{ ownerState: CCFieldProps }>({});

export const CCField: OverridableComponent<CCFieldProps> = React.forwardRef<
  HTMLDivElement,
  CCFieldProps
>(function CreditCard(inProps, ref) {
  const props = useThemeProps<Theme, CCFieldProps, "JunCreditCard">({
    props: inProps,
    name: "JunCreditCard",
  });
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

  const ownerState = {
    ...props,
  };

  const classes = useUtilityClasses(ownerState);

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
    <CCFieldRoot
      ref={ref}
      {...other}
      ownerState={ownerState}
      className={cx(classes.root, props.className)}
    >
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
    </CCFieldRoot>
  );
});
