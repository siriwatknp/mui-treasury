import React from "react";
import { BoxProps } from "@mui/material/Box";
import { Breakpoint } from "@mui/material/styles";
import { styled } from "./zero-styled";

export function applySidebarContentStyles(params: {
  width?: string | Partial<Record<Breakpoint, string>>;
  expandOnHover?:
    | true
    | {
        delay?: string;
        shadow?: string;
      };
}) {
  const { width, expandOnHover } = params;
  const defaultExpandConfig = {
    delay: "0.3s",
    shadow: "0 0 10px rgba(0,0,0,0.1)",
  };
  const expandConfig =
    expandOnHover === true ? defaultExpandConfig : expandOnHover;
  return {
    "--JunSidebar-drawerWidth": width,
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
  opacity: `var(--drawer, var(--JunSidebar-drawerOpen))
            var(--permanent, 1)`,
  visibility: `var(--drawer, hidden)
               var(--permanent, visible)` as any,
  overflowX: "auto", // prevent horizontal content overflow
  flex: 1,
  position: "var(--drawer, fixed) var(--permanent, relative)" as any,
  zIndex: 2,
  width: "var(--SidebarContent-width)",
  height: "var(--drawer, 100vh)",
  overflowY: "var(--drawer, auto)" as any,
  transition: `var(--drawer, opacity 0.3s, transform 0.3s)
               var(--permanent, opacity 0.7s, width 0.3s var(--SidebarContent-transitionDelay, 0s), box-shadow 0.3s var(--SidebarContent-transitionDelay, 0s))`,
  transform: `var(--drawer, var(--anchorLeft, translateX(calc((1 - var(--JunSidebar-drawerOpen)) * -100%))) var(--anchorRight, translateX(calc(var(--JunSidebar-drawerOpen) * -100%))))
               var(--permanent, translateX(calc(var(--JunSidebar-permanentHidden) * -100%)))`,
  "[data-sidebar-hidden] &": {
    visibility: "hidden",
    opacity: 0,
  },
  "[data-drawer-open] &, [data-mobile-closing] &": {
    visibility: "visible",
    width: `var(--drawer, var(--JunSidebar-drawerWidth, 300px))
            var(--permanent, var(--SidebarContent-width))`,
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
