"use client";
import React from "react";
import { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { layoutClasses } from "./layoutClasses";

const StyledInsetAvoidingView = styled("div")({
  marginRight: "var(--jun-ISR-w)",
  marginLeft: "var(--jun-ISL-w)",
});

const InsetAvoidingView = React.forwardRef<HTMLDivElement, BoxProps>(
  function InsetAvoidingView({ className, ...props }, ref) {
    return (
      // @ts-expect-error BoxProps on styled native element
      <StyledInsetAvoidingView
        ref={ref}
        className={`${layoutClasses.InsetAvoidingView} ${className || ""}`}
        {...props}
      />
    );
  },
);

export default InsetAvoidingView;
