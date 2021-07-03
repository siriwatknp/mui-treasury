import React from "react";
import cx from "clsx";
import { styled, useThemeProps, Theme } from "@material-ui/core/styles";
import { unstable_composeClasses as composeClasses } from "@material-ui/unstyled";
import { SxProps } from "@material-ui/system";
import { OverridableComponent } from "@mui-treasury/types";
import { TextFieldProps } from "@material-ui/core/TextField";
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

const useUtilityClasses = (styleProps: CCFieldProps) => {
  const { classes } = styleProps;
  const slots = {
    root: ["root"],
  };
  return composeClasses(slots, getCreditCardUtilityClass, classes);
};

const CCFieldRoot = styled("div", {
  name: "JunCreditCard",
  slot: "Field",
  overridesResolver: (props, styles) => styles.root,
})<{ styleProps: CCFieldProps }>({});

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

  const styleProps = {
    ...props,
  };

  const classes = useUtilityClasses(styleProps);

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
      styleProps={styleProps}
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
