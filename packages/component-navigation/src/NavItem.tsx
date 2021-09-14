import React, { PropsWithChildren } from "react";
import cx from "clsx";
import { styled, useThemeProps, Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
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

const NavItemRoot = styled("a", {
  name: "JunNavigation",
  slot: "Item",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [
      styles.item,
      ownerState.active && styles.itemActive,
      ownerState.disabled && styles.itemDisabled,
    ];
  },
})<{ ownerState: NavItemProps }>(
  ({ theme: { palette, shape, spacing, typography }, ownerState }) => ({
    ...typography.body1,
    fontWeight: 500,
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    color:
      palette.mode === "dark"
        ? "rgba(255,255,255,0.57)"
        : palette.text.secondary,
    position: "relative",
    padding: spacing(1, 2),
    borderRadius: shape.borderRadius,
    cursor: "pointer",
    textDecoration: "none",
    transition: "0.2s ease-out",
    "&:hover, &:focus": {
      color: palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.72)",
      outline: "none",
    },
    "&.Mui-active": {
      color: palette.mode === "dark" ? "#fff" : palette.text.primary,
    },
    "&.Mui-disabled": {
      color: palette.action.disabled,
      pointerEvents: "none",
    },
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

      const ownerState = {
        ...props,
        active,
        disabled,
      };

      return (
        <NavItemRoot
          ref={ref}
          {...other}
          ownerState={ownerState}
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
