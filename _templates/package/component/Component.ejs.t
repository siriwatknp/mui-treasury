---
to: packages/<%=h.toNamePath(name)%>/src/<%= h.toName(name) %>.tsx
unless_exists: true
---
import React, { PropsWithChildren } from "react";
import cx from "clsx";
import {
  experimentalStyled as styled,
  unstable_useThemeProps as useThemeProps,
  Theme,
} from "@material-ui/core/styles";
import { unstable_composeClasses as composeClasses } from "@material-ui/unstyled";
import { SxProps } from "@material-ui/system";
import { get<%=Name = h.toName(name)%>UtilityClass, <%= nameCamel=h.toNameCamel(name) %>Classes } from "./<%= nameCamel %>Classes";
import { OverridableComponent } from "@mui-treasury/types";

export type <%=Name%>ClassKey = keyof typeof <%= nameCamel %>Classes;
export type <%=Name%>Classes = Partial<typeof <%= nameCamel %>Classes>;
export type <%=Name%>Props = {
  /**
   * className append to the root element
   */
  className?: string;

  /**
   * Override or extend the styles applied to the component.
   */
  classes?: <%=Name%>Classes;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
};

const useUtilityClasses = (styleProps: <%=Name%>Props) => {
  const { classes } = styleProps;
  const slots = {
    root: ["root"],
  };
  return composeClasses(
    slots,
    get<%=Name%>UtilityClass,
    classes as Required<<%=Name%>Props["classes"]>
  );
};

const <%=Name%>Root = styled(
  "div",
  {},
  {
    name: "Jun<%=Name%>",
    slot: "Root",
    overridesResolver: (props, styles) => styles.root,
  }
)<{ styleProps: <%=Name%>Props }>({});

export const <%=Name%>: OverridableComponent<<%=Name%>Props> = React.forwardRef<
  any,
  PropsWithChildren<<%=Name%>Props>
>(function <%=Name%>({ children, ...inProps }, ref) {
  const props = useThemeProps<Theme, <%=Name%>Props, "Jun<%=Name%>">({
    props: inProps,
    name: "Jun<%=Name%>",
  });
  const { ...other } = props;

  const styleProps = {
    ...props,
  };

  const classes = useUtilityClasses(styleProps);

  return (
    <<%=Name%>Root
      ref={ref}
      {...other}
      styleProps={styleProps}
      className={cx(classes.root, props.className)}
    >
      {children}
    </<%=Name%>Root>
  );
});
