import React, { PropsWithChildren } from "react";
import cx from "clsx";
import {
  experimentalStyled as styled,
  unstable_useThemeProps as useThemeProps,
  Theme,
} from "@material-ui/core/styles";
import { SxProps } from "@material-ui/system";
import { navigationClasses } from "./navigationClasses";
import { OverridableComponent } from "@mui-treasury/types";

export type NavItemProps = {
  /**
   * If `true`, active style applied to the root element
   * @default false
   */
  active?: boolean;

  /**
   * If `true`, element is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * className append to the root element
   */
  className?: string;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
} & Omit<JSX.IntrinsicElements["a"], "ref">;

const NavItemRoot = styled(
  "a",
  {},
  {
    name: "JunNavigation",
    slot: "Item",
    overridesResolver: (props, styles) => {
      const { styleProps } = props;
      return {
        ...styles.item,
        ...(styleProps.active && styles.itemActive),
        ...(styleProps.disabled && styles.itemDisabled),
      };
    },
  }
)<{ styleProps: NavItemProps }>(
  ({ theme: { palette, shape, spacing, typography }, styleProps }) => ({
    ...typography.body1,
    fontWeight: 500,
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    color:
      palette.mode === "dark"
        ? "rgba(255,255,255,0.57)"
        : palette.text.secondary,
    padding: spacing(1, 2),
    borderRadius: shape.borderRadius,
    cursor: "pointer",
    textDecoration: "none",
    transition: "0.2s ease-out",
    "&:hover, &:focus": {
      ...(!styleProps.active && {
        color: palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.72)",
      }),
      outline: "none",
    },
    ...(styleProps.active && {
      color: palette.mode === "dark" ? "#fff" : palette.text.primary,
    }),
    ...(styleProps.disabled && {
      color: palette.action.disabled,
      pointerEvents: "none",
    }),
  })
);

export const NavItem: OverridableComponent<PropsWithChildren<NavItemProps>> =
  React.forwardRef<HTMLAnchorElement, PropsWithChildren<NavItemProps>>(
    function Navigation({ children, ...inProps }, ref) {
      const props = useThemeProps<Theme, NavItemProps, "JunNavigation">({
        props: inProps,
        name: "JunNavigation",
      });
      const { active = false, disabled = false, ...other } = props;

      const styleProps = {
        ...props,
        active,
        disabled,
      };

      return (
        <NavItemRoot
          ref={ref}
          {...other}
          styleProps={styleProps}
          className={cx(
            navigationClasses.item,
            active && "Mui-active",
            disabled && "Mui-disabled",
            props.className
          )}
        >
          {children}
        </NavItemRoot>
      );
    }
  );
