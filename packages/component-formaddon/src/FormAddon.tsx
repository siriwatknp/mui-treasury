import React, { PropsWithChildren } from "react";
import cx from "clsx";
import {
  experimentalStyled as styled,
  unstable_useThemeProps as useThemeProps,
  Theme,
} from "@material-ui/core/styles";
import { unstable_composeClasses as composeClasses } from "@material-ui/unstyled";
import { SxProps } from "@material-ui/system";
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

const useUtilityClasses = (styleProps: FormAddonProps) => {
  const { classes } = styleProps;
  const slots = {
    root: ["root"],
  };
  return composeClasses(
    slots,
    getFormAddonUtilityClass,
    classes as Required<FormAddonProps["classes"]>
  );
};

const FormAddonRoot = styled(
  "div",
  {},
  {
    name: "JunFormAddon",
    slot: "Root",
    overridesResolver: (props, styles) => styles.root,
  }
)<{ styleProps: FormAddonProps }>(({ theme }) => ({
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

interface FormAddonComponent {
  <P extends { as?: React.ElementType }>(
    props: P extends { as: infer As }
      ? As extends keyof JSX.IntrinsicElements
        ? P & FormAddonProps & JSX.IntrinsicElements[As]
        : As extends React.ComponentType<infer AsProps>
        ? P & FormAddonProps & AsProps
        : PropsWithChildren<P & FormAddonProps>
      : PropsWithChildren<P & FormAddonProps>
  ): JSX.Element | null;
}

export const FormAddon: FormAddonComponent = React.forwardRef<
  any,
  PropsWithChildren<FormAddonProps>
>(function FormAddon({ children, ...inProps }, ref) {
  const props = useThemeProps<Theme, FormAddonProps, "JunFormAddon">({
    props: inProps,
    name: "JunFormAddon",
  });
  const { ...other } = props;

  const styleProps = {
    ...props,
  };

  const classes = useUtilityClasses(styleProps);

  return (
    <FormAddonRoot
      ref={ref}
      {...other}
      styleProps={styleProps}
      className={cx(classes.root, props.className)}
    >
      {children}
    </FormAddonRoot>
  );
});
