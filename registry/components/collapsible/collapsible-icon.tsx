"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import { collapsibleIconClasses } from "./collapsible-classes";
import { sidebarMenuActionClasses } from "../sidebar-menu-action/sidebar-menu-action-classes";

interface CollapsibleIconProps {
  rotate?: string;
}

const StyledCollapsibleIcon = styled("span", {
  name: "CollapsibleIcon",
  slot: "root",
})({
  flex: "none",
  position: "absolute",
  right: "var(--item-px, 0.5rem)",
  transition:
    "var(--tsn, transform cubic-bezier(0.4, 0, 0.2, 1) 0.15s, visibility 0s var(--_uncollapsed, 0.1s))",
  visibility: "var(--_collapsed, hidden)" as never,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  [`.${sidebarMenuActionClasses.root} &`]: {
    position: "unset",
    right: "unset",
  },
  "label:has(:checked) &": {
    transform: "rotate(var(--collapsible-rotate))",
  },
});

const CollapsibleIcon = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<typeof StyledCollapsibleIcon> &
    CollapsibleIconProps
>(function CollapsibleIcon(
  { className, rotate = "180deg", style, ...props },
  ref,
) {
  return (
    <StyledCollapsibleIcon
      ref={ref}
      className={`${collapsibleIconClasses.root} ${className || ""}`}
      style={
        {
          ...style,
          "--collapsible-rotate": `-${rotate}`,
        } as React.CSSProperties
      }
      {...props}
    />
  );
});

export { CollapsibleIcon };
