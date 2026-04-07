"use client";

import React from "react";

import { styled } from "@mui/material/styles";
import { unstable_memoTheme as memoTheme } from "@mui/material/utils";

import type {
  ForwardStyledProps,
  OverridableComponent,
} from "../../types/shared/component";
import { sidebarClasses } from "./sidebar-classes";

export type SidebarRailProps = ForwardStyledProps<{
  component?: React.ElementType;
}>;

const StyledSidebarRail = styled("button", {
  name: "SidebarRail",
  slot: "root",
})(
  memoTheme(({ theme }) => ({
    "--indicator-w": "2px",
    "--touch-size": "20px",
    "--offset": "calc(-1 * (var(--indicator-w)/2 + var(--touch-size)/2))",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: "var(--anchorLeft, var(--offset)) var(--anchorRight, unset)",
    left: "var(--anchorLeft, unset) var(--anchorRight, var(--offset))",
    zIndex: 20,
    width: "var(--touch-size)",
    textAlign: "center",
    cursor:
      "var(--_collapsed, e-resize) var(--_uncollapsed, w-resize)" as never,
    display: "inline-flex",
    justifyContent: "center",
    border: "none",
    padding: 0,
    background: "transparent",
    "&::after": {
      content: '""',
      width: "var(--indicator-w)",
      height: "100%",
      display: "block",
    },
    "@media (hover: hover)": {
      "&:hover::after": {
        background: (theme.vars || theme).palette.divider,
      },
    },
  })),
);

export const SidebarRail = React.forwardRef<
  HTMLButtonElement,
  SidebarRailProps & React.ComponentPropsWithoutRef<"button">
>(function SidebarRail({ className, component, ...props }, ref) {
  return (
    <StyledSidebarRail
      ref={ref}
      className={`${sidebarClasses.rail} ${className || ""}`}
      as={component}
      {...props}
    />
  );
}) as OverridableComponent<SidebarRailProps, "button">;
