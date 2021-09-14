import React from "react";
import cx from "clsx";
import { styled, useThemeProps, Theme } from "@mui/material/styles";
import { unstable_composeClasses as composeClasses } from "@mui/core";
import { SxProps } from "@mui/system";
import { OverridableComponent } from "@mui-treasury/types";
import { usePinInput, UsePinInputOptions } from "@mui-treasury/use-pin-input";

import { getPinInputUtilityClass, PinInputClasses } from "./pinInputClasses";

export type PinInputProps = {
  /**
   * className append to the root element
   */
  className?: string;

  children: Array<React.ReactElement>;

  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<PinInputClasses>;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
} & Omit<UsePinInputOptions, "pinLength">;

const useUtilityClasses = (ownerState: PinInputProps) => {
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
})<{ ownerState: PinInputProps }>({
  display: "flex",
  gap: "8px",
  "& input": {
    textAlign: "center",
  },
});

export const PinInput: OverridableComponent<PinInputProps> = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<PinInputProps>
>(function PinInput(inProps, ref) {
  const props = useThemeProps<Theme, PinInputProps, "JunPinInput">({
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
