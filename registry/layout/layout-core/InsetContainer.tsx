"use client";
import React from "react";
import { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export function applyInsetContainerStyles() {
  return {
    display: "flex",
    flexFlow: "row nowrap",
    flexGrow: 1,
    [`& > *:where(:not([class*="InsetSidebar"]))`]: {
      flexGrow: 1,
      overflow: "auto",
    },
  };
}

const StyledInsetContainer = styled("div")<{
  leftSidebar?: React.ReactElement;
  rightSidebar?: React.ReactElement;
}>({
  display: "flex",
  flexFlow: "row nowrap",
  flexGrow: 1,
  [`& > *:not([class*="InsetSidebar"])`]: {
    flexGrow: 1,
    overflow: "auto",
  },
});

const InsetContainer = React.forwardRef<
  HTMLDivElement,
  BoxProps & {
    leftSidebar?: React.ReactElement;
    rightSidebar?: React.ReactElement;
  }
>(function InsetContainer(
  { className, children, leftSidebar, rightSidebar, ...props },
  ref,
) {
  return (
    // @ts-expect-error BoxProps on styled native element
    <StyledInsetContainer
      ref={ref}
      className={`InsetContainer ${className || ""}`}
      {...props}
    >
      {leftSidebar &&
        React.cloneElement(leftSidebar, { anchor: "left" } as Record<
          string,
          unknown
        >)}
      {children}
      {rightSidebar &&
        React.cloneElement(rightSidebar, { anchor: "right" } as Record<
          string,
          unknown
        >)}
    </StyledInsetContainer>
  );
}) as unknown as typeof StyledInsetContainer;

export default InsetContainer;
