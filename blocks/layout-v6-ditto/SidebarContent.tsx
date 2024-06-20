import React from "react";
import { BoxProps } from "@mui/material/Box";
import { styled } from "./zero-styled";

const StyledSidebarContent = styled("div")(({ theme }) => ({
  backgroundColor: (theme.vars || theme).palette.background.paper,
  display: "flex",
  flexDirection: "column",
  opacity: `var(--_temporary, var(--EdgeSidebar-temporaryOpen))
            var(--_permanent, 1)`,
  visibility: `var(--_temporary, hidden)
               var(--_permanent, visible)` as any,
  overflowX: "auto", // prevent horizontal content overflow
  flex: 1,
  position: "var(--_temporary, fixed) var(--_permanent, relative)" as any,
  zIndex: 2,
  width: "var(--SidebarContent-width)",
  height: "var(--_temporary, 100vh)",
  overflowY: "var(--_temporary, auto)" as any,
  transition: `var(--_temporary, opacity 0.3s, transform 0.3s)
               var(--_permanent, opacity 0.7s, width 0.3s var(--SidebarContent-transitionDelay, 0s), transform 0.3s var(--SidebarContent-transitionDelay, 0s), box-shadow 0.3s var(--SidebarContent-transitionDelay, 0s))`,
  transform: `var(--_temporary, var(--anchorLeft, translateX(calc((1 - var(--EdgeSidebar-temporaryOpen)) * -100%))) var(--anchorRight, translateX(calc(var(--EdgeSidebar-temporaryOpen) * -100%))))
               var(--_permanent, translateX(var(--EdgeSidebar-permanentSlide, 0)))`,
  "[data-sidebar-hidden] &": {
    visibility: "hidden",
    opacity: 0,
  },
  "[data-temporary-open] &, [data-mobile-closing] &": {
    visibility: "visible",
    width:
      "var(--_temporary, var(--EdgeSidebar-temporaryWidth, 300px)) var(--_permanent, var(--SidebarContent-width))",
  },
  "[data-mobile-closing] &": {
    transition: "transform 0.3s, visibility 0.3s, opacity 0.3s",
  },
}));

const SidebarContent = React.forwardRef<HTMLDivElement, BoxProps>(
  function SidebarContent({ className, ...props }, ref) {
    return (
      <StyledSidebarContent
        // @ts-ignore
        ref={ref}
        className={`SidebarContent ${className || ""}`}
        {...props}
      />
    );
  },
);

export default SidebarContent;
