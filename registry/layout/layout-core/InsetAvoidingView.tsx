"use client";
import React from "react";
import { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyledInsetAvoidingView = styled("div")({
  marginRight: "var(--InsetSidebarR-width)",
  marginLeft: "var(--InsetSidebarL-width)",
});

const InsetAvoidingView = React.forwardRef<HTMLDivElement, BoxProps>(
  function InsetAvoidingView({ className, ...props }, ref) {
    return (
      // @ts-expect-error BoxProps on styled native element
      <StyledInsetAvoidingView
        ref={ref}
        className={`InsetAvoidingView ${className || ""}`}
        {...props}
      />
    );
  },
);

export default InsetAvoidingView;
