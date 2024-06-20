import React from "react";
import { SxProps } from "@mui/material/styles";
import { toggleTemporaryEdgeSidebar } from "./EdgeSidebar";
import { styled } from "./zero-styled";

const StyledEdgeDrawerClose = styled("button")({
  display: "none",
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
  "& svg": {
    width: "1.5em",
    height: "1.5em",
  },
  "[data-temporary-open] &": {
    display: "var(--_temporary, flex) var(--_permanent, none)",
    alignItems: "center",
    justifyContent: "center",
  },
});

const EdgeDrawerClose = React.forwardRef<
  HTMLButtonElement,
  JSX.IntrinsicElements["button"] & { sx?: SxProps; sidebarId?: string }
>(function EdgeDrawerClose({ className, sidebarId, ...props }, ref) {
  return (
    <StyledEdgeDrawerClose
      // @ts-ignore
      ref={ref}
      className={`EdgeDrawerClose ${className || ""}`}
      onClick={() =>
        toggleTemporaryEdgeSidebar({
          state: false,
          sidebarId,
          document: (
            document.getElementById(
              "storybook-preview-iframe",
            ) as null | HTMLIFrameElement
          )?.contentDocument,
        })
      }
      {...props}
    >
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
    </StyledEdgeDrawerClose>
  );
});

export default EdgeDrawerClose;
