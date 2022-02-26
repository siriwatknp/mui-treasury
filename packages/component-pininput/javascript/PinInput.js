import React from "react";
import cx from "clsx";
import { styled, useThemeProps } from "@mui/material/styles";
import { unstable_composeClasses as composeClasses } from "@mui/base";
import { usePinInput } from "@mui-treasury/use-pin-input";
import { getPinInputUtilityClass } from "./pinInputClasses";
const useUtilityClasses = (ownerState) => {
  const { classes } = ownerState;
  const slots = {
    root: ["root"],
  };
  return composeClasses(slots, getPinInputUtilityClass, classes);
};
const PinInputRoot = styled("div", {
  name: "JunPinInput",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})({
  display: "flex",
  gap: "8px",
  "& input": {
    textAlign: "center",
  },
});
export const PinInput = React.forwardRef(function PinInput(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JunPinInput",
  });
  const { children, onChange, onBlur, ...other } = props;
  const ownerState = {
    ...props,
  };
  const classes = useUtilityClasses(ownerState);
  const { pins } = usePinInput({ ...props, pinLength: children.length });
  return (
    <PinInputRoot
      ref={ref}
      {...other}
      ownerState={ownerState}
      className={cx(classes.root, props.className)}
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
    </PinInputRoot>
  );
});
