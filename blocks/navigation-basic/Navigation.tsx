import React, { PropsWithChildren } from "react";
import { styled, Theme, useThemeProps } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import cx from "clsx";
import { navigationClasses } from "./navigationClasses";

export type NavigationClassKey = keyof typeof navigationClasses;
export type NavigationClasses = Partial<typeof navigationClasses>;
export type NavigationProps = {
  /**
   * className append to the root element
   */
  className?: string;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
} & Omit<JSX.IntrinsicElements["nav"], "ref">;

const NavigationRoot = styled("nav", {
  name: "JunNavigation",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})<{ ownerState: NavigationProps }>({
  display: "flex",
  overflow: "auto",
  // Hide dimensionless scrollbar on MacOS
  scrollbarWidth: "none", // Firefox
  "&::-webkit-scrollbar": {
    display: "none", // Safari + Chrome
  },
});

export const Navigation = React.forwardRef<
  HTMLElement,
  PropsWithChildren<NavigationProps>
>(function Navigation({ children, ...inProps }, ref) {
  const props = useThemeProps<Theme, NavigationProps, "JunNavigation">({
    props: inProps,
    name: "JunNavigation",
  });
  const { ...other } = props;

  const ownerState = {
    ...props,
  };

  return (
    <NavigationRoot
      ref={ref}
      {...other}
      ownerState={ownerState}
      className={cx(navigationClasses.root, props.className)}
    >
      {children}
    </NavigationRoot>
  );
});
