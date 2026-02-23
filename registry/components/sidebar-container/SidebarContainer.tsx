"use client";
import React, { useMemo } from "react";
import { styled } from "@mui/material/styles";
import { unstable_memoTheme as memoTheme } from "@mui/material/utils";
import { sidebarContainerClasses } from "./sidebarContainerClasses";

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
    "--_collapsed": "var(--_)",
    "--_uncollapsed": "var(--__,)", // workaround to use fallback, Emotion strips out spaces if the value is " ".
    variants: [
      {
        props: () => true,
        style: ({ shrink }: Required<SidebarContainerProps>) => ({
          "& > *": {
            [`@container (min-width: ${shrink})`]: {
              "--_collapsed": "var(--__,)", // workaround to use fallback, Emotion strips out spaces if the value is " ".
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
      className={`${sidebarContainerClasses.root} ${className || ""}`}
      ownerState={ownerState}
      {...props}
    />
  );
});

export default SidebarContainer;
