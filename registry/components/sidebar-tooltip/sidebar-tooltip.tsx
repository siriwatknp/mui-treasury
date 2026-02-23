"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import { sidebarTooltipClasses } from "./sidebar-tooltip-classes";

const StyledSidebarTooltip = styled("span", {
  name: "SidebarTooltip",
  slot: "root",
})({
  display: "var(--_collapsed, block) var(--_uncollapsed, none)",
});

const SidebarTooltip = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(function SidebarTooltip({ className, ...props }, ref) {
  return (
    <StyledSidebarTooltip
      ref={ref}
      className={`${sidebarTooltipClasses.root} ${className || ""}`}
      {...props}
    />
  );
});

export default SidebarTooltip;
