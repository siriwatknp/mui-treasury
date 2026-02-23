"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import { sidebarGroupTextClasses } from "./sidebarGroupTextClasses";

const StyledSidebarGroupText = styled("div", {
  name: "SidebarGroupText",
  slot: "root",
})({
  transition:
    "var(--tsn, grid-template-rows 0.4s, opacity 0.4s var(--_uncollapsed, 0.2s))",
  opacity: "var(--_collapsed, 0) var(--_uncollapsed, 1)",
  display: "grid",
  whiteSpace: "nowrap",
  gridTemplateRows: "var(--_collapsed, 0fr) var(--_uncollapsed, 1fr)",
  "& > *": {
    overflow: "hidden",
  },
});

const SidebarGroupText = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(function SidebarGroupText({ className, ...props }, ref) {
  return (
    <StyledSidebarGroupText
      ref={ref}
      className={`${sidebarGroupTextClasses.root} ${className || ""}`}
      {...props}
    />
  );
});

export default SidebarGroupText;
