import React from "react";
import Box from "@mui/material/Box";
import { collapseEdgeSidebar, uncollapseEdgeSidebar } from "./EdgeSidebar";

export default function EdgePermanentCollapse() {
  return (
    <React.Fragment>
      <Box
        component="button"
        className="EdgeSidebar-collapser"
        sx={{
          display:
            "var(--drawer, none) var(--permanent, var(--collapsed, none) var(--uncollapsed, flex))",
          alignItems: "center",
          justifyContent: "center",
          "& svg": {
            width: "1.5em",
            height: "1.5em",
          },
        }}
        onClick={() =>
          collapseEdgeSidebar({
            document: (
              document.getElementById(
                "storybook-preview-iframe",
              ) as null | HTMLIFrameElement
            )?.contentDocument,
          })
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </Box>
      <Box
        component="button"
        className="EdgeSidebar-collapser"
        sx={{
          display:
            "var(--drawer, none) var(--permanent, var(--collapsed, flex) var(--uncollapsed, none))",
          alignItems: "center",
          justifyContent: "center",
          "& svg": {
            width: "1.5em",
            height: "1.5em",
          },
        }}
        onClick={() =>
          uncollapseEdgeSidebar({
            document: (
              document.getElementById(
                "storybook-preview-iframe",
              ) as null | HTMLIFrameElement
            )?.contentDocument,
          })
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </Box>
    </React.Fragment>
  );
}
