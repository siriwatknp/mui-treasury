"use client";

import React from "react";

import { styled } from "@mui/material/styles";

import type { OverridableComponent } from "../../types/shared/component";
import { sidebarClasses } from "./sidebar-classes";

export interface SidebarMenuItemProps {
  component?: React.ElementType;
}

const StyledSidebarMenuItem = styled("div", {
  name: "SidebarMenuItem",
  slot: "root",
})({
  display: "flex",
  flexDirection: "column",
  position: "relative",
});

export const SidebarMenuItem = React.forwardRef<
  HTMLDivElement,
  SidebarMenuItemProps & React.ComponentPropsWithoutRef<"div">
>(function SidebarMenuItem({ className, component, ...props }, ref) {
  return (
    <StyledSidebarMenuItem
      ref={ref}
      className={`${sidebarClasses.menuItem} ${className || ""}`}
      as={component}
      {...props}
    />
  );
}) as OverridableComponent<SidebarMenuItemProps, "div">;
