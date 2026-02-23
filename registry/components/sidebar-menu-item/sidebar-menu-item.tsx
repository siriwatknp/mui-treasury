"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import { sidebarMenuItemClasses } from "./sidebar-menu-item-classes";

const StyledSidebarMenuItem = styled("div", {
  name: "SidebarMenuItem",
  slot: "root",
})({
  display: "flex",
  flexDirection: "column",
  position: "relative",
});

const SidebarMenuItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(function SidebarMenuItem({ className, ...props }, ref) {
  return (
    <StyledSidebarMenuItem
      ref={ref}
      className={`${sidebarMenuItemClasses.root} ${className || ""}`}
      {...props}
    />
  );
});

export default SidebarMenuItem;
