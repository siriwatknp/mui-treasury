import React from "react";
import { BoxProps } from "@mui/material/Box";
import { Breakpoint } from "@mui/material/styles";
import { styled } from "./zero-styled";

export function applyRootStyles(params?: {
  headerOnEdgeSidebar?: boolean;
  fullscreen?: boolean;
  height?: string | Record<Breakpoint, string> | Record<string, string>;
}) {
  const { headerOnEdgeSidebar, height, fullscreen } = params || {};
  return {
    ...(height && {
      "--Root-height": height,
    }),
    ...(fullscreen && {
      maxHeight: "var(--Root-height)",
    }),
    ...(headerOnEdgeSidebar && {
      gridTemplateAreas: `
        "Header Header Header"
        "EdgeSidebar Content EdgeSidebar-R"
        "EdgeSidebar Footer EdgeSidebar-R"
      `,
    }),
  };
}

const StyledRoot = styled("div")(({ theme }) => ({
  "--Root-height": "100lvh",
  backgroundColor: (theme.vars || theme).palette.background.paper,
  minHeight: "var(--Root-height)",
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
