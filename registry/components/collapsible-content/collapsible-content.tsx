"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import { collapsibleContentClasses } from "./collapsible-content-classes";
import { sidebarMenuButtonClasses } from "../sidebar-menu-button/sidebar-menu-button-classes";
import { sidebarMenuActionClasses } from "../sidebar-menu-action/sidebar-menu-action-classes";

const StyledCollapsibleContent = styled("div", {
  name: "CollapsibleContent",
  slot: "root",
})({
  display: "grid",
  "& > *": {
    overflow: "hidden",
  },
  "label:has(:checked) ~ &": {
    transition:
      "var(--tsn, grid-template-rows 0.4s, visibility 0.4s, opacity 0.4s 0.2s)",
    gridTemplateRows: "var(--_collapsed, 0fr) var(--_uncollapsed, 1fr)",
    [`& .${sidebarMenuButtonClasses.root}`]: {
      visibility: "var(--_collapsed, hidden)" as never,
    },
  },
  "label:not(:has(:checked)) ~ &": {
    gridTemplateRows: "0fr",
    visibility: "hidden",
    opacity: 0,
    transition:
      "var(--tsn, grid-template-rows 0.4s, visibility 0.4s, opacity 0.2s)",
    [`& .${sidebarMenuActionClasses.root}`]: {
      visibility: "hidden",
    },
  },
});

const CollapsibleContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(function CollapsibleContent({ className, ...props }, ref) {
  return (
    <StyledCollapsibleContent
      ref={ref}
      className={`${collapsibleContentClasses.root} ${className || ""}`}
      {...props}
    />
  );
});

export { CollapsibleContent };
