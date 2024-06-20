import React from "react";
import { BoxProps } from "@mui/material/Box";
import { styled } from "./zero-styled";

export function applySidebarContentStyles(params: {
  expandOnHover?:
    | true
    | {
        delay?: string;
        shadow?: string;
      };
}) {
  const { expandOnHover } = params;
  const defaultExpandConfig = {
    delay: "0.3s",
    shadow: "0 0 10px rgba(0,0,0,0.1)",
  };
  const expandConfig =
    expandOnHover === true ? defaultExpandConfig : expandOnHover;
  return {
    ...(expandOnHover && {
      "&:hover": {
        "--SidebarContent-width": "var(--JunSidebar-permanentWidth)",
        "--SidebarContent-transitionDelay":
          expandConfig?.delay || defaultExpandConfig.delay,
        boxShadow: `var(--collapsed, ${expandConfig?.shadow || defaultExpandConfig.shadow}) var(--uncollapsed, none)`,
      },
    }),
  };
}

const StyledSidebarContent = styled("div")(({ theme }) => ({
  backgroundColor: (theme.vars || theme).palette.background.paper,
  display: "flex",
  flexDirection: "column",
  opacity: `var(--_drawer, var(--JunSidebar-drawerOpen))
            var(--_permanent, 1)`,
  visibility: `var(--_drawer, hidden)
               var(--_permanent, visible)` as any,
  overflowX: "auto", // prevent horizontal content overflow
  flex: 1,
  position: "var(--_drawer, fixed) var(--_permanent, relative)" as any,
  zIndex: 2,
  width: "var(--SidebarContent-width)",
  height: "var(--_drawer, 100vh)",
  overflowY: "var(--_drawer, auto)" as any,
  transition: `var(--_drawer, opacity 0.3s, transform 0.3s)
               var(--_permanent, opacity 0.7s, width 0.3s var(--SidebarContent-transitionDelay, 0s), box-shadow 0.3s var(--SidebarContent-transitionDelay, 0s))`,
  transform: `var(--_drawer, var(--anchorLeft, translateX(calc((1 - var(--JunSidebar-drawerOpen)) * -100%))) var(--anchorRight, translateX(calc(var(--JunSidebar-drawerOpen) * -100%))))
               var(--_permanent, translateX(calc(var(--JunSidebar-permanentHidden) * -100%)))`,
  "[data-sidebar-hidden] &": {
    visibility: "hidden",
    opacity: 0,
  },
  "[data-drawer-open] &, [data-mobile-closing] &": {
    visibility: "visible",
    width:
      "var(--_drawer, var(--JunSidebar-drawerWidth, 300px)) var(--_permanent, var(--SidebarContent-width))",
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
