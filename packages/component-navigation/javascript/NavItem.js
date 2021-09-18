import React from "react";
import cx from "clsx";
import { styled, useThemeProps } from "@mui/material/styles";
import { navigationClasses } from "./navigationClasses";
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
})(({ theme: { palette, shape, spacing, typography }, ownerState }) => ({
  ...typography.body1,
  fontWeight: 500,
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  color:
    palette.mode === "dark" ? "rgba(255,255,255,0.57)" : palette.text.secondary,
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
}));
export const NavItem = React.forwardRef(function Navigation(
  { children, ...inProps },
  ref
) {
  const props = useThemeProps({
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
});
