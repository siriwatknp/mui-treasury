import React from "react";
import cx from "clsx";
import { styled, useThemeProps } from "@mui/material/styles";
import { unstable_composeClasses as composeClasses } from "@mui/core";
import { useCardInput } from "@mui-treasury/use-card-input";
import { getCreditCardUtilityClass } from "./creditCardClasses";
const CCContext = React.createContext(undefined);
export const useCCContext = () => {
  const context = React.useContext(CCContext);
  if (!context) {
    throw new Error("Cannot find context, must be called under <CCField>");
  }
  return context;
};
const useUtilityClasses = (ownerState) => {
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
})({});
export const CCField = React.forwardRef(function CreditCard(inProps, ref) {
  const props = useThemeProps({
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
