"use client";

import React from "react";

import { styled } from "@mui/material/styles";

import type { ForwardStyledProps } from "../../types/shared/component";
import { sidebarClasses } from "./sidebar-classes";

export type SidebarGroupTextProps = ForwardStyledProps;

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

export const SidebarGroupText = React.forwardRef<
  HTMLDivElement,
  SidebarGroupTextProps & React.ComponentPropsWithoutRef<"div">
>(function SidebarGroupText({ className, ...props }, ref) {
  return (
    <StyledSidebarGroupText
      ref={ref}
      className={`${sidebarClasses.groupText} ${className || ""}`}
      {...props}
    />
  );
});
