import React, { PropsWithChildren } from "react";
import cx from "clsx";
import { styled, useThemeProps, Theme } from "@mui/material/styles";
import { unstable_composeClasses as composeClasses } from "@mui/base";
import { SxProps } from "@mui/system";
import { OverridableComponent } from "@mui-treasury/types";
import { getFormAddonUtilityClass, formAddonClasses } from "./formAddonClasses";

export type FormAddonClassKey = keyof typeof formAddonClasses;
export type FormAddonClasses = Partial<typeof formAddonClasses>;
export type FormAddonProps = {
  /**
   * className append to the root element
   */
  className?: string;

  /**
   * Override or extend the styles applied to the component.
   */
  classes?: FormAddonClasses;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
};

const useUtilityClasses = (ownerState: FormAddonProps) => {
  const { classes } = ownerState;
  const slots = {
    root: ["root"],
  };
  return composeClasses(
    slots,
    getFormAddonUtilityClass,
    classes as Required<FormAddonProps["classes"]>
  );
};

const FormAddonRoot = styled("div", {
  name: "JunFormAddon",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})<{ ownerState: FormAddonProps }>(({ theme }) => ({
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

type FormAddonComponent = OverridableComponent<
  PropsWithChildren<FormAddonProps>
>;
export const FormAddon: FormAddonComponent = React.forwardRef<
  any,
  PropsWithChildren<FormAddonProps & { component?: React.ElementType }>
>(function FormAddon({ children, component, ...inProps }, ref) {
  const props = useThemeProps<Theme, FormAddonProps, "JunFormAddon">({
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
