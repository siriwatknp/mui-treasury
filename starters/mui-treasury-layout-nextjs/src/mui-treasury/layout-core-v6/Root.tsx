import React from "react";
import { BoxProps } from "@mui/material/Box";
import { Breakpoint } from "@mui/material/styles";
import { layoutClasses } from "./layoutClasses";
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
  "--EdgeSidebar-sidelineWidth": "1px",
  "--EdgeSidebar-sidelineColor": (theme.vars || theme).palette.divider,
  backgroundColor: (theme.vars || theme).palette.background.paper,
  minHeight: "var(--Root-height)",
  display: "grid",
  position: "relative",
  transition: "grid-template-columns 0.3s",
  gridTemplateRows: "auto 1fr",
  gridTemplateColumns:
    "var(--_start-col, 0px) minmax(0, 1fr) var(--_end-col, 0px)", // minmax(0, 1fr) is used over `1fr` to prevent root horizontal overflow
  gridTemplateAreas: `
    "${layoutClasses.EdgeSidebar} ${layoutClasses.Header} ${layoutClasses.EdgeSidebarRight}"
    "${layoutClasses.EdgeSidebar} ${layoutClasses.Content} ${layoutClasses.EdgeSidebarRight}"
    "${layoutClasses.EdgeSidebar} ${layoutClasses.Footer} ${layoutClasses.EdgeSidebarRight}"
  `,

  [`&:has(.${layoutClasses.EdgeSidebar})`]: {
    "--_start-col": "max-content",
    "--EdgeSidebar-temporaryOpen": "0",
  },
  [`&:has(.${layoutClasses.EdgeSidebarRight})`]: {
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
      className={`${layoutClasses.Root} ${className || ""}`}
      {...props}
    />
  );
});

export default Root;
