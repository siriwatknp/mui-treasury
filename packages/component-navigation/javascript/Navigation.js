import React from "react";
import cx from "clsx";
import { styled, useThemeProps } from "@mui/material/styles";
import { navigationClasses } from "./navigationClasses";
const NavigationRoot = styled(
  "nav",
  {},
  {
    name: "JunNavigation",
    slot: "Root",
    overridesResolver: (props, styles) => styles.root,
  }
)({
  display: "flex",
  overflow: "auto",
  // Hide dimensionless scrollbar on MacOS
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});
export const Navigation = React.forwardRef(function Navigation(
  { children, ...inProps },
  ref
) {
  const props = useThemeProps({
    props: inProps,
    name: "JunNavigation",
  });
  const { ...other } = props;
  const styleProps = {
    ...props,
  };
  return (
    <NavigationRoot
      ref={ref}
      {...other}
      styleProps={styleProps}
      className={cx(navigationClasses.root, props.className)}
    >
      {children}
    </NavigationRoot>
  );
});
