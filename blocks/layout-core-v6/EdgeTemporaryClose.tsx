import React from "react";
import { SxProps } from "@mui/material/styles";
import { toggleTemporaryEdgeSidebar } from "./EdgeSidebar";
import { styled } from "./zero-styled";

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
  borderRadius: "40px",
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
  JSX.IntrinsicElements["button"] & { sx?: SxProps; sidebarId?: string }
>(function EdgeTemporaryClose(
  { className, sidebarId, children, ...props },
  ref,
) {
  return (
    <StyledEdgeTemporaryClose
      ref={ref}
      className={`EdgeTemporaryClose ${className || ""}`}
      {...props}
    >
      {children || (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      )}
    </StyledEdgeTemporaryClose>
  );
});

export default EdgeTemporaryClose;
