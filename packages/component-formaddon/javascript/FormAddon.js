import React from "react";
import cx from "clsx";
import { styled, useThemeProps } from "@mui/material/styles";
import { unstable_composeClasses as composeClasses } from "@mui/core";
import { getFormAddonUtilityClass } from "./formAddonClasses";
const useUtilityClasses = (ownerState) => {
  const { classes } = ownerState;
  const slots = {
    root: ["root"],
  };
  return composeClasses(slots, getFormAddonUtilityClass, classes);
};
const FormAddonRoot = styled("div", {
  name: "JunFormAddon",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: 4,
  minHeight: 24,
  padding: "0 0.5rem",
  fontSize: "0.875rem",
  color: theme.palette.grey[500],
  border: "1px solid",
  borderRadius: theme.shape.borderRadius,
  borderColor: theme.palette.grey[300],
  backgroundColor: theme.palette.grey[100],
}));
export const FormAddon = React.forwardRef(function FormAddon(
  { children, component, ...inProps },
  ref
) {
  const props = useThemeProps({
    props: inProps,
    name: "JunFormAddon",
  });
  const { ...other } = props;
  const ownerState = {
    ...props,
  };
  const classes = useUtilityClasses(ownerState);
  return (
    <FormAddonRoot
      ref={ref}
      as={component}
      {...other}
      ownerState={ownerState}
      className={cx(classes.root, props.className)}
    >
      {children}
    </FormAddonRoot>
  );
});
