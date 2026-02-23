"use client";
import React from "react";
import { unstable_memoTheme as memoTheme } from "@mui/material/utils";
import { styled } from "@mui/material/styles";
import { sidebarGroupClasses } from "./sidebarGroupClasses";

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
  React.ComponentPropsWithoutRef<"div">
>(function SidebarGroup({ className, ...props }, ref) {
  return (
    <StyledSidebarGroup
      ref={ref}
      className={`${sidebarGroupClasses.root} ${className || ""}`}
      {...props}
    />
  );
});

export default SidebarGroup;
