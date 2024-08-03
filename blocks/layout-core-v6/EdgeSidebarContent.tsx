import React from "react";
import { BoxProps } from "@mui/material/Box";
import { styled } from "./zero-styled";

const StyledEdgeSidebarContent = styled("div")({
  display: "flex",
  background: "var(--EdgeSidebarContent-background)",
  boxShadow: "var(--EdgeSidebarContent-shadow, var(--SidebarContent-shadow))", // --SidebarContent-shadow is internal.
  flexDirection: "column",
  opacity: `var(--_temporary, var(--EdgeSidebar-temporaryOpen))
            var(--_permanent, 1)`,
  visibility: `var(--_temporary, hidden)
               var(--_permanent, visible)` as any,
  overflowX: "auto", // prevent horizontal content overflow
  flex: 1,
  position: "var(--_temporary, fixed) var(--_permanent, relative)" as any,
  zIndex: 2,
  width:
    "var(--_temporary, var(--EdgeSidebar-temporaryWidth)) var(--_permanent, calc(var(--SidebarContent-width) - var(--EdgeSidebar-sidelineWidth, 0px)))",
  height: "var(--_temporary, 100%)",
  overflowY: "var(--_temporary, auto)" as any,
  transition: `var(--_temporary, opacity 0.3s, transform 0.3s)
               var(--_permanent, opacity 0.4s, width 0.3s var(--SidebarContent-transitionDelay, 0s), transform 0.3s var(--SidebarContent-transitionDelay, 0s), box-shadow 0.3s var(--SidebarContent-transitionDelay, 0s))`,
  transform: `var(--_temporary, var(--anchorLeft, translateX(calc((1 - var(--EdgeSidebar-temporaryOpen)) * -100%))) var(--anchorRight, translateX(calc(var(--EdgeSidebar-temporaryOpen) * -100%))))
               var(--_permanent, translateX(var(--EdgeSidebar-permanentSlide, 0)))`,
  "[data-sidebar-hidden] &": {
    visibility: "hidden",
    opacity: 0,
  },
  "[data-temporary-open] &, [data-mobile-closing] &": {
    visibility: "visible",
  },
  "[data-mobile-closing] &": {
    transition: "transform 0.3s, visibility 0.3s, opacity 0.3s",
  },
});

const EdgeSidebarContent = React.forwardRef<HTMLDivElement, BoxProps>(
  function EdgeSidebarContent({ className, ...props }, ref) {
    return (
      <StyledEdgeSidebarContent
        // @ts-expect-error Material UI issue
        ref={ref}
        className={`EdgeSidebarContent ${className || ""}`}
        {...props}
      />
    );
  },
);

export default EdgeSidebarContent;
