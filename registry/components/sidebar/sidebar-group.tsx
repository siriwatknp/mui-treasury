"use client";

import React from "react";

import { styled } from "@mui/material/styles";
import { unstable_memoTheme as memoTheme } from "@mui/material/utils";

import type {
  ForwardStyledProps,
  OverridableComponent,
} from "../../types/shared/component";
import { sidebarClasses } from "./sidebar-classes";

export type SidebarGroupProps = ForwardStyledProps<{
  component?: React.ElementType;
}>;

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

export const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  SidebarGroupProps & React.ComponentPropsWithoutRef<"div">
>(function SidebarGroup({ className, component, ...props }, ref) {
  return (
    <StyledSidebarGroup
      ref={ref}
      className={`${sidebarClasses.group} ${className || ""}`}
      as={component}
      {...props}
    />
  );
}) as OverridableComponent<SidebarGroupProps, "div">;
