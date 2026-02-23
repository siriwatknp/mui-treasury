"use client";
import React from "react";
import { unstable_memoTheme as memoTheme } from "@mui/material/utils";
import { styled } from "@mui/material/styles";
import { sidebarGroupLabelClasses } from "./sidebarGroupLabelClasses";

const StyledSidebarGroupLabel = styled("div", {
  name: "SidebarGroupLabel",
  slot: "root",
})(
  memoTheme(({ theme }) => ({
    position: "relative",
    textOverflow: "ellipsis",
    transition: "var(--tsn, var(--_uncollapsed, opacity 0.4s))",
    opacity: "var(--_uncollapsed, 1) var(--_collapsed, 0)",
    whiteSpace: "nowrap",
    overflow: "hidden",
    fontSize: "var(--item-fs, 0.75rem)",
    lineHeight: "var(--item-lh, 1.25rem)",
    minHeight: "var(--item-h, 2rem)",
    display: "flex",
    alignItems: "center",
    color: (theme.vars || theme).palette.text.secondary,
    paddingInline: "var(--item-px, 0.5rem)",
    paddingBlock: "var(--item-py, 0.25rem)",
  })),
);

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(function SidebarGroupLabel({ className, ...props }, ref) {
  return (
    <StyledSidebarGroupLabel
      ref={ref}
      className={`${sidebarGroupLabelClasses.root} ${className || ""}`}
      {...props}
    />
  );
});

export default SidebarGroupLabel;
