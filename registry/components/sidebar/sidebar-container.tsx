"use client";
import React, { useMemo } from "react";
import { styled } from "@mui/material/styles";
import { unstable_memoTheme as memoTheme } from "@mui/material/utils";
import { sidebarClasses } from "./sidebar-classes";

interface SidebarContainerProps {
  shrink?: string;
}

const StyledSidebarContainer = styled("div", {
  name: "SidebarContainer",
  slot: "root",
})<{ ownerState: Required<SidebarContainerProps> }>(
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
        style: ({ shrink }: Required<SidebarContainerProps>) => ({
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

const SidebarContainer = React.forwardRef<
  HTMLDivElement,
  Omit<
    React.ComponentPropsWithoutRef<typeof StyledSidebarContainer>,
    "ownerState"
  > &
    SidebarContainerProps
>(function SidebarContainer({ className, shrink = "100px", ...props }, ref) {
  const ownerState = useMemo(() => ({ shrink }), [shrink]);
  return (
    <StyledSidebarContainer
      ref={ref}
      className={`${sidebarClasses.container} ${className || ""}`}
      ownerState={ownerState}
      {...props}
    />
  );
});

export { SidebarContainer };
