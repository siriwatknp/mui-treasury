import React, { PropsWithChildren } from "react";
import cx from "clsx";
import {
  styled,
  unstable_useThemeProps as useThemeProps,
  Theme,
} from "@material-ui/core/styles";
import { SxProps } from "@material-ui/system";
import { navigationClasses } from "./navigationClasses";
import { OverridableComponent } from "@mui-treasury/types";

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
})<{ styleProps: NavigationProps }>({
  display: "flex",
  overflow: "auto",
  // Hide dimensionless scrollbar on MacOS
  scrollbarWidth: "none", // Firefox
  "&::-webkit-scrollbar": {
    display: "none", // Safari + Chrome
  },
});

export const Navigation: OverridableComponent<
  PropsWithChildren<NavigationProps>
> = React.forwardRef<HTMLElement, PropsWithChildren<NavigationProps>>(
  function Navigation({ children, ...inProps }, ref) {
    const props = useThemeProps<Theme, NavigationProps, "JunNavigation">({
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
  }
);
