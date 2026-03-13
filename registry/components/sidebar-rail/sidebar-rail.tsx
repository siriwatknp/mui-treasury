"use client";
import React from "react";
import { unstable_memoTheme as memoTheme } from "@mui/material/utils";
import { styled } from "@mui/material/styles";
import { sidebarRailClasses } from "./sidebar-rail-classes";

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

const SidebarRail = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>(function SidebarRail({ className, ...props }, ref) {
  return (
    <StyledSidebarRail
      ref={ref}
      className={`${sidebarRailClasses.root} ${className || ""}`}
      {...props}
    />
  );
});

export default SidebarRail;
