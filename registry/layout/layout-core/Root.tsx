"use client";
import React, { useMemo } from "react";
import { Breakpoint } from "@mui/material/styles";
import { unstable_memoTheme as memoTheme } from "@mui/material/utils";
import { styled } from "@mui/material/styles";

interface RootProps {
  height?: string | Record<Breakpoint, string> | Record<string, string>;
  fixedHeight?: boolean;
}

const StyledRoot = styled("div", {
  name: "LayoutRoot",
  slot: "root",
})<{
  ownerState: RootProps;
}>(
  memoTheme(({ theme }) => ({
    "--Root-height": "100lvh",
    "--Header-underline": `1px solid ${(theme.vars || theme).palette.divider}`,
    "--Header-background": (theme.vars || theme).palette.background.paper,
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
    containerType: "inline-size",
    containerName: "page",
    gridTemplateRows: "auto 1fr",
    gridTemplateColumns:
      "var(--_start-col, 0px) minmax(0, 1fr) var(--_end-col, 0px)",
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
    variants: [
      {
        props: ({ height }: RootProps) => !!height,
        style: ({ height }: Required<RootProps>) =>
          theme.unstable_sx({
            "--Root-height": height,
          }),
      },
      {
        props: ({ fixedHeight }: RootProps) => !!fixedHeight,
        style: {
          maxHeight: "var(--Root-height)",
        },
      },
    ],
  })),
);

const Root = React.forwardRef<
  HTMLDivElement,
  Omit<React.ComponentPropsWithoutRef<typeof StyledRoot>, "ownerState"> &
    RootProps
>(function Root({ className, height, fixedHeight, ...props }, ref) {
  const ownerState = useMemo(
    () => ({
      height,
      fixedHeight,
    }),
    [height, fixedHeight],
  );
  return (
    <StyledRoot
      ref={ref}
      className={`Root ${className || ""}`}
      ownerState={ownerState}
      {...props}
    />
  );
});

export default Root;
