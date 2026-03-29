"use client";

import React, { useMemo } from "react";

import { styled } from "@mui/material/styles";
import { unstable_memoTheme as memoTheme } from "@mui/material/utils";

import type { OverridableComponent } from "../../types/shared/component";
import { sidebarClasses } from "./sidebar-classes";

export interface SidebarContainerProps {
  shrink?: string;
  component?: React.ElementType;
}

const StyledSidebarContainer = styled("div", {
  name: "SidebarContainer",
  slot: "root",
})<{ ownerState: Required<Pick<SidebarContainerProps, "shrink">> }>(
  memoTheme(() => ({
    containerType: "inline-size",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    minHeight: 0,
    overflowY: "auto",
    "--_collapsed": "var(--_)",
    "--_uncollapsed": "var(--__,)",
    variants: [
      {
        props: () => true,
        style: ({
          shrink,
        }: Required<Pick<SidebarContainerProps, "shrink">>) => ({
          "& > *": {
            [`@container (min-width: ${shrink})`]: {
              "--_collapsed": "var(--__,)",
              "--_uncollapsed": "var(--_)",
            },
          },
        }),
      },
    ],
  })),
);

export const SidebarContainer = React.forwardRef<
  HTMLDivElement,
  SidebarContainerProps & React.ComponentPropsWithoutRef<"div">
>(function SidebarContainer(
  { className, shrink = "100px", component, ...props },
  ref,
) {
  const ownerState = useMemo(() => ({ shrink }), [shrink]);
  return (
    <StyledSidebarContainer
      ref={ref}
      className={`${sidebarClasses.container} ${className || ""}`}
      ownerState={ownerState}
      as={component}
      {...props}
    />
  );
}) as OverridableComponent<SidebarContainerProps, "div">;
