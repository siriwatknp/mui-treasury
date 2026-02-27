"use client";
import React, { useMemo } from "react";
import { unstable_memoTheme as memoTheme } from "@mui/material/utils";
import { styled } from "@mui/material/styles";
import { sidebarMenuClasses } from "@/registry/components/sidebar-menu/sidebar-menu-classes";
import SidebarMenuButton from "@/registry/components/sidebar-menu-button/sidebar-menu-button";
import { sidebarMenuButtonClasses } from "@/registry/components/sidebar-menu-button/sidebar-menu-button-classes";

export { SidebarMenuButton, sidebarMenuButtonClasses };

interface SidebarMenuProps {
  relaxed?: boolean;
  nested?: boolean;
  noLine?: boolean;
}

const StyledSidebarMenu = styled("div", {
  name: "SidebarMenu",
  slot: "root",
})<{ ownerState: SidebarMenuProps }>(
  {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
  },
  memoTheme(({ theme }) => ({
    variants: [
      {
        props: { relaxed: true },
        style: {
          gap: "0.5rem",
          "--item-gap": "0.75rem",
          "--item-h": "2.5rem",
          "--item-fs": "1rem",
          "--item-lh": "1.5rem",
          "--item-px": "0.75rem",
          "--item-py": "0.5rem",
          "--action-size": "2rem",
          "--icon-size": "1.25rem",
        },
      },
      {
        props: { nested: true },
        style: {
          "--item-py": "0px",
          "--item-h": "calc(var(--item-lh, 1.25rem) + 0.5rem)",
          paddingBlock: "0.25rem",
          position: "relative",
          marginLeft:
            "calc(var(--icon-w, 1rem) + 2*var(--item-gap, 0.5rem) - 0.5rem)",
          marginRight: "2px", // account for SidebarMenuButton outline to not cut off
          "&::before": {
            content: '""',
            display: "block",
            position: "absolute",
            width: "1px",
            top: "2px",
            bottom: "2px",
            left: "calc(var(--icon-w, 1rem)/-2 - var(--item-gap, 0.5rem) + 0.5rem)",
            background: (theme.vars || theme).palette.divider,
          },
        },
      },
      {
        props: { nested: true, noLine: true },
        style: {
          "&::before": {
            display: "none",
          },
        },
      },
    ],
  })),
);

const SidebarMenu = React.forwardRef<
  HTMLDivElement,
  Omit<React.ComponentPropsWithoutRef<typeof StyledSidebarMenu>, "ownerState"> &
    SidebarMenuProps
>(function SidebarMenu({ className, relaxed, nested, noLine, ...props }, ref) {
  const ownerState = useMemo(
    () => ({ relaxed, nested, noLine }),
    [relaxed, nested, noLine],
  );
  return (
    <StyledSidebarMenu
      ref={ref}
      className={`${sidebarMenuClasses.root} ${className || ""}`}
      ownerState={ownerState}
      {...props}
    />
  );
});

export default SidebarMenu;
