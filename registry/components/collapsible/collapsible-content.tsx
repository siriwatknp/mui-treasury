"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import { collapsibleClasses } from "./collapsible-classes";

const StyledCollapsibleContent = styled("div", {
  name: "CollapsibleContent",
  slot: "root",
})({
  "--_i-uncollapsed": "var(--__)", // default when not within EdgeSidebarContent
  "--_i-collapsed": "var(--__,)", // value is ignored by default.
  display: "grid",
  "& > *": {
    overflow: "hidden",
  },
  "label:has(:checked) ~ &": {
    transition:
      "var(--tsn, grid-template-rows 0.4s, visibility 0.4s, opacity 0.4s 0.2s)",
    gridTemplateRows: "var(--_i-collapsed, 0fr) var(--_i-uncollapsed, 1fr)",
    [`& .SidebarMenuButton`]: {
      visibility: "var(--_i-collapsed, hidden)" as never,
    },
  },
  "label:not(:has(:checked)) ~ &": {
    gridTemplateRows: "0fr",
    visibility: "hidden",
    opacity: 0,
    transition:
      "var(--tsn, grid-template-rows 0.4s, visibility 0.4s, opacity 0.2s)",
    [`& .SidebarMenuAction`]: {
      visibility: "hidden",
    },
  },
  ".EdgeSidebarContent &": {
    "--_i-collapsed": "var(--_collapsed)",
    "--_i-uncollapsed": "var(--_uncollapsed)",
  },
});

const CollapsibleContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof StyledCollapsibleContent>
>(function CollapsibleContent({ className, ...props }, ref) {
  return (
    <StyledCollapsibleContent
      ref={ref}
      className={`${collapsibleClasses.content} ${className || ""}`}
      {...props}
    />
  );
});

export { CollapsibleContent };
