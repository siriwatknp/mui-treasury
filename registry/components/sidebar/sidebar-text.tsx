"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import { sidebarTextClasses } from "./sidebar-classes";

const StyledSidebarText = styled("span", {
  name: "SidebarText",
  slot: "root",
})({
  display: "block",
  textOverflow: "ellipsis",
  transition: "var(--tsn, var(--_uncollapsed, opacity 0.3s))",
  flex: "var(--_uncollapsed, 1) var(--_collapsed, 0)",
  opacity: "var(--_uncollapsed, 1) var(--_collapsed, 0)",
  whiteSpace: "nowrap",
  overflow: "hidden",
});

const SidebarText = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(function SidebarText({ className, ...props }, ref) {
  return (
    <StyledSidebarText
      ref={ref}
      className={`${sidebarTextClasses.root} ${className || ""}`}
      {...props}
    />
  );
});

export { SidebarText };
