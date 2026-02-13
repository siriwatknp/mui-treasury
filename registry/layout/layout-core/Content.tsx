"use client";
import React from "react";
import { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyledContent = styled("main")({
  gridArea: "Content",
  minHeight: 0,
});

const Content = React.forwardRef<HTMLElement, BoxProps>(function Content(
  { className, ...props },
  ref,
) {
  return (
    // @ts-expect-error BoxProps on styled native element
    <StyledContent
      ref={ref}
      className={`Content ${className || ""}`}
      {...props}
    />
  );
});

export default Content;
