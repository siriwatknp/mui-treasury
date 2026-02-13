"use client";
import React from "react";
import { SxProps } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { toggleTemporaryEdgeSidebar } from "./EdgeSidebar";

const StyledEdgeTemporaryClose = styled("button")({
  display: "var(--_temporary, flex) var(--_permanent, none)",
  visibility: "hidden",
  opacity: 0,
  transition: "0.3s",
  position: "fixed",
  top: "0.875rem",
  right: "var(--anchorLeft, 0.875rem)",
  left: "var(--anchorRight, 0.875rem)",
  zIndex: 2,
  width: 40,
  height: 40,
  color: "white",
  backgroundColor: "#999",
  borderRadius: "50%",
  alignItems: "center",
  justifyContent: "center",
  "& svg": {
    width: "1.5em",
    height: "1.5em",
  },
  "[data-temporary-open] &": {
    visibility: "visible",
    opacity: 1,
  },
});

const EdgeTemporaryClose = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button"> & {
    sx?: SxProps;
    sidebarId?: string;
  }
>(function EdgeTemporaryClose({ className, sidebarId, ...props }, ref) {
  return (
    <StyledEdgeTemporaryClose
      ref={ref}
      className={`EdgeTemporaryClose ${className || ""}`}
      onClick={() =>
        toggleTemporaryEdgeSidebar({
          state: false,
          sidebarId,
        })
      }
      {...props}
    >
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
    </StyledEdgeTemporaryClose>
  );
});

export default EdgeTemporaryClose;
