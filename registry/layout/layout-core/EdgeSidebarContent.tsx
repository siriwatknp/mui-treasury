"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import { layoutAttrs } from "./layoutAttrs";
import { layoutClasses } from "./layoutClasses";

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
  position:
    "var(--_drawer, var(--drawer-pos)) var(--_permanent, relative)" as never,
  zIndex: 2,
  width:
    "var(--_drawer, var(--jun-ES-drawerWidth)) var(--_permanent, calc(var(--jun-EC-width) - var(--jun-ES-line-w, 0px)))",
  height: "var(--_drawer, var(--drawer-h))",
  top: "var(--_drawer, calc(var(--jun-h) - var(--drawer-h)))",
  overflowY: "var(--_drawer, auto)" as never,
  transition: `var(--tsn, var(--_drawer, opacity 0.3s, transform 0.3s)
               var(--_permanent, opacity 0.4s, width 0.3s var(--jun-EC-delay, 0s), transform 0.3s var(--jun-EC-delay, 0s), box-shadow 0.3s var(--jun-EC-delay, 0s)))`,
  transform: `var(--_drawer, var(--anchorLeft, translateX(calc((1 - var(--jun-ES-drawerOpen)) * -100%))) var(--anchorRight, translateX(calc(var(--jun-ES-drawerOpen) * -100%))))
               var(--_permanent, translateX(var(--jun-ES-permanentSlide, 0)))`,
  [`[${layoutAttrs.isEdgeSidebarContentHidden}] &`]: {
    visibility: "hidden",
    opacity: 0,
  },
  [`[${layoutAttrs.isDrawerOpen}] &, [${layoutAttrs.isDrawerClosing}] &`]: {
    visibility: "visible",
  },
  [`[${layoutAttrs.isDrawerClosing}] &`]: {
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
      className={`${layoutClasses.EdgeSidebarContent} ${className || ""}`}
      {...props}
    />
  );
});

export default EdgeSidebarContent;
