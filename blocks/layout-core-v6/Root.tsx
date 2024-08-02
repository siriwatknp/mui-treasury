import React from "react";
import { BoxProps } from "@mui/material/Box";
import { Breakpoint } from "@mui/material/styles";
import { styled } from "./zero-styled";

export function applyRootStyles(params?: {
  height?: string | Record<Breakpoint, string> | Record<string, string>;
  fixedHeight?: boolean;
}) {
  const { height, fixedHeight } = params || {};
  return {
    ...(height && {
      "--Root-height": height,
    }),
    ...(fixedHeight && {
      maxHeight: "var(--Root-height)",
    }),
  };
}

const StyledRoot = styled("div")(({ theme }) => ({
  "--Root-height": "100lvh",
  "--Header-underline": `1px solid ${(theme.vars || theme).palette.divider}`,
  "--Header-background": (theme.vars || theme).palette.background.paper,
  // '--Content-insetBottom': '0px', // this is a placeholder for documenting the variable, it already has a fallback value.
  "--Footer-background": (theme.vars || theme).palette.background.paper,
  "--Footer-overline": `1px solid ${(theme.vars || theme).palette.divider}`,
  "--EdgeSidebar-overlay": "rgba(0, 0, 0, 0.48)",
  "--EdgeSidebar-sidelineWidth": "1px",
  "--EdgeSidebar-sidelineColor": (theme.vars || theme).palette.divider,
  "--EdgeSidebarContent-background": (theme.vars || theme).palette.background
    .paper,
  "--InsetSidebarContent-background": (theme.vars || theme).palette.background
    .paper,
  "--InsetSidebarContent-sideline": `1px solid ${(theme.vars || theme).palette.divider}`,
  backgroundColor: (theme.vars || theme).palette.background.paper,
  minHeight: "var(--Root-height)",
  display: "grid",
  position: "relative",
  transition: "grid-template-columns 0.3s",
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
      // @ts-expect-error Material UI issue
      ref={ref}
      className={`Root ${className || ""}`}
      {...props}
    />
  );
});

export default Root;
