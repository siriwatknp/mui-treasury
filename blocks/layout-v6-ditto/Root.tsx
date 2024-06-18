import React from "react";
import { BoxProps } from "@mui/material/Box";
import { styled } from "./zero-styled";

const StyledRoot = styled("div")(({ theme }) => ({
  backgroundColor: (theme.vars || theme).palette.background.paper,
  minHeight: "100lvh",
  display: "grid",
  position: "relative",
  transition: "grid-template-columns 0.3s",
  gridTemplateAreas: `
    "Header"
    "Content"
    "Footer"
  ` as any,
  gridTemplateRows: "auto 1fr",
  gridTemplateColumns: "var(--_start-col,) minmax(0, 1fr) var(--_end-col,)", // minmax(0, 1fr) is used over `1fr` to prevent root horizontal overflow

  [`&:has(.EdgeSidebar-L)`]: {
    gridTemplateAreas: `
      "EdgeSidebar-L Header"
      "EdgeSidebar-L Content"
      "EdgeSidebar-L Footer"
    `,
    "--_start-col": "max-content",
    "--JunSidebar-drawerOpen": "0",
  },
  [`&:has(.EdgeSidebar-R)`]: {
    gridTemplateAreas: `
      "Header EdgeSidebar-R"
      "Content EdgeSidebar-R"
      "Footer EdgeSidebar-R"
    `,
    "--_end-col": "max-content",
    "--JunSidebar-drawerOpen": "0",
  },
  [`&:has(.EdgeSidebar-L):has(.EdgeSidebar-R)`]: {
    gridTemplateAreas: `
      "EdgeSidebar-L Header EdgeSidebar-R"
      "EdgeSidebar-L Content EdgeSidebar-R"
      "EdgeSidebar-L Footer EdgeSidebar-R"
    `,
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
      className={`JunRoot ${className || ""}`}
      {...props}
    />
  );
});

export default Root;
