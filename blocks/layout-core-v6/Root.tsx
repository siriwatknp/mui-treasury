import React from "react";
import { BoxProps } from "@mui/material/Box";
import { styled } from "./zero-styled";

export function applyEdgeSidebarBelowHeader() {
  return {
    gridTemplateAreas: `
      "Header Header Header"
      "EdgeSidebar Content EdgeSidebar-R"
      "EdgeSidebar Footer EdgeSidebar-R"
    `,
  };
}

const StyledRoot = styled("div")(({ theme }) => ({
  backgroundColor: (theme.vars || theme).palette.background.paper,
  minHeight: "100lvh",
  display: "grid",
  position: "relative",
  transition: "grid-template-columns 0.3s",
  containerType: "inline-size",
  containerName: "page",
  gridTemplateRows: "auto 1fr",
  gridTemplateColumns:
    "var(--_start-col, 0px) minmax(0, 1fr) var(--_end-col, 0px)", // minmax(0, 1fr) is used over `1fr` to prevent root horizontal overflow
  gridTemplateAreas: `
    "EdgeSidebar Header EdgeSidebar-R"
    "EdgeSidebar Content EdgeSidebar-R"
    "EdgeSidebar Footer EdgeSidebar-R"
  `,

  [`&:has(.EdgeSidebar)`]: {
    "--_start-col": "max-content",
    "--EdgeSidebar-temporaryOpen": "0",
  },
  [`&:has(.EdgeSidebar-R)`]: {
    "--_end-col": "max-content",
    "--EdgeSidebar-temporaryOpen": "0",
  },
}));

const Root = React.forwardRef<HTMLDivElement, BoxProps>(function Root(
  { className, ...props },
  ref,
) {
  return (
    <StyledRoot
      // @ts-ignore
      ref={ref}
      className={`Root ${className || ""}`}
      {...props}
    />
  );
});

export default Root;
