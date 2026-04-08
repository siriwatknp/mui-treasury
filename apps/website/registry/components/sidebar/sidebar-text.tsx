"use client";

import React from "react";

import { styled } from "@mui/material/styles";

import type { ForwardStyledProps } from "../../types/shared/component";
import { sidebarClasses } from "./sidebar-classes";

export type SidebarTextProps = ForwardStyledProps;

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
  [`*:where(.${sidebarClasses.text} + &)`]: {
    fontSize: "calc(var(--item-fs, 0.875rem) - 0.125rem)",
  },
});

export const SidebarText = React.forwardRef<
  HTMLSpanElement,
  SidebarTextProps & React.ComponentPropsWithoutRef<"span">
>(function SidebarText({ className, ...props }, ref) {
  return (
    <StyledSidebarText
      ref={ref}
      className={`${sidebarClasses.text} ${className || ""}`}
      {...props}
    />
  );
});
