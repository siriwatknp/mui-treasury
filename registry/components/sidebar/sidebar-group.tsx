"use client";
import React from "react";
import { unstable_memoTheme as memoTheme } from "@mui/material/utils";
import { styled } from "@mui/material/styles";
import { sidebarClasses } from "./sidebar-classes";

const StyledSidebarGroup = styled("div", {
  name: "SidebarGroup",
  slot: "root",
})(
  memoTheme(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(1),
  })),
);

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof StyledSidebarGroup>
>(function SidebarGroup({ className, ...props }, ref) {
  return (
    <StyledSidebarGroup
      ref={ref}
      className={`${sidebarClasses.group} ${className || ""}`}
      {...props}
    />
  );
});

export { SidebarGroup };
