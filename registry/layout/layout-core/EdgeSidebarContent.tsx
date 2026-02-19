"use client";
import React from "react";
import { styled } from "@mui/material/styles";

const StyledEdgeSidebarContent = styled("div", {
  name: "LayoutEdgeSidebarContent",
  slot: "root",
})({
  display: "flex",
  background: "var(--EdgeSidebarContent-background)",
  flexDirection: "column",
  opacity: `var(--_drawer, var(--jun-ES-drawerOpen))
            var(--_permanent, 1)`,
  visibility: `var(--_drawer, hidden)
               var(--_permanent, visible)` as never,
  overflowX: "auto",
  flex: 1,
  position: "var(--_drawer, fixed) var(--_permanent, relative)" as never,
  zIndex: 2,
  width:
    "var(--_drawer, var(--jun-ES-drawerWidth)) var(--_permanent, calc(var(--jun-EC-width) - var(--jun-ES-line-w, 0px)))",
  height: "var(--_drawer, 100%)",
  overflowY: "var(--_drawer, auto)" as never,
  transition: `var(--_drawer, opacity 0.3s, transform 0.3s)
               var(--_permanent, opacity 0.7s, width 0.3s var(--jun-EC-delay, 0s), transform 0.3s var(--jun-EC-delay, 0s), box-shadow 0.3s var(--jun-EC-delay, 0s))`,
  transform: `var(--_drawer, var(--anchorLeft, translateX(calc((1 - var(--jun-ES-drawerOpen)) * -100%))) var(--anchorRight, translateX(calc(var(--jun-ES-drawerOpen) * -100%))))
               var(--_permanent, translateX(var(--jun-ES-permanentSlide, 0)))`,
  "[data-sidebar-hidden] &": {
    visibility: "hidden",
    opacity: 0,
  },
  "[data-drawer-open] &, [data-mobile-closing] &": {
    visibility: "visible",
  },
  "[data-mobile-closing] &": {
    transition: "transform 0.3s, visibility 0.3s, opacity 0.3s",
  },
});

const EdgeSidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof StyledEdgeSidebarContent>
>(function EdgeSidebarContent({ className, ...props }, ref) {
  return (
    <StyledEdgeSidebarContent
      ref={ref}
      className={`EdgeSidebarContent ${className || ""}`}
      {...props}
    />
  );
});

export default EdgeSidebarContent;
