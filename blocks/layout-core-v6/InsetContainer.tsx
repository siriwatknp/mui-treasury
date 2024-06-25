import React from "react";
import { BoxProps } from "@mui/material/Box";
import { styled } from "./zero-styled";

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
    <StyledInsetContainer
      // @ts-ignore
      ref={ref}
      className={`InsetContainer ${className || ""}`}
      {...props}
    >
      {leftSidebar && React.cloneElement(leftSidebar, { anchor: "left" })}
      {children}
      {rightSidebar && React.cloneElement(rightSidebar, { anchor: "right" })}
    </StyledInsetContainer>
  );
}) as unknown as typeof StyledInsetContainer;

export default InsetContainer;
