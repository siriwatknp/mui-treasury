"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import { collapsibleIconClasses } from "./collapsible-classes";

interface CollapsibleIconProps {
  rotate?: string;
}

const StyledCollapsibleIcon = styled("span", {
  name: "CollapsibleIcon",
  slot: "root",
})({
  "--_i-uncollapsed": "var(--__)", // default when not within EdgeSidebarContent
  "--_i-collapsed": "var(--__,)", // value is ignored by default.
  flex: "none",
  transition:
    "var(--tsn, transform cubic-bezier(0.4, 0, 0.2, 1) 0.15s, visibility 0s var(--_i-uncollapsed, 0.1s))",
  visibility: "var(--_i-collapsed, hidden)" as never,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  [`.SidebarMenuButton &`]: {
    position: "absolute",
    right: "var(--item-px, 0.5rem)",
  },
  "label:has(:checked) &": {
    transform: "rotate(var(--collapsible-rotate))",
  },
  ".EdgeSidebarContent &": {
    "--_i-collapsed": "var(--_collapsed)",
    "--_i-uncollapsed": "var(--_uncollapsed)",
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
