"use client";
import React from "react";

import { styled } from "@mui/material/styles";

import { layoutAttrs } from "./layoutAttrs";
import { layoutClasses } from "./layoutClasses";

const StyledEdgeDrawerClose = styled("button")({
  display: "var(--_drawer, flex) var(--_permanent, none)",
  visibility: "hidden",
  opacity: 0,
  transition: "var(--tsn, 0.3s)",
  position: "var(--drawer-pos)" as never,
  top: "calc(0.875rem + var(--jun-H-clip-h))",
  right: "var(--anchorLeft, 0.875rem)",
  left: "var(--anchorRight, 0.875rem)",
  zIndex: 2,
  width: 40,
  height: 40,
  color: "white",
  cursor: "pointer",
  backgroundColor: "#999",
  borderRadius: "40px",
  border: "none",
  alignItems: "center",
  justifyContent: "center",
  "& svg": {
    width: "1.5em",
    height: "1.5em",
  },
  [`[${layoutAttrs.isDrawerOpen}] &`]: {
    visibility: "visible",
    opacity: 1,
  },
});

const EdgeDrawerClose = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof StyledEdgeDrawerClose>
>(function EdgeDrawerClose({ className, children, ...props }, ref) {
  return (
    <StyledEdgeDrawerClose
      ref={ref}
      className={`${layoutClasses.EdgeDrawerClose} ${className || ""}`}
      {...props}
    >
      {children || (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      )}
    </StyledEdgeDrawerClose>
  );
});

export default EdgeDrawerClose;
