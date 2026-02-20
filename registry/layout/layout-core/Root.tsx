"use client";
import React, { useMemo } from "react";
import { Breakpoint } from "@mui/material/styles";
import { unstable_memoTheme as memoTheme } from "@mui/material/utils";
import { styled } from "@mui/material/styles";
import { layoutClasses } from "./layoutClasses";

interface RootProps {
  height?: string | Record<Breakpoint, string> | Record<string, string>;
  standalone?: boolean;
}

const StyledRoot = styled("div", {
  name: "LayoutRoot",
  slot: "root",
})<{
  ownerState: RootProps;
}>(
  memoTheme(({ theme }) => ({
    "--jun-h": "calc(100svh - env(safe-area-inset-bottom))",
    "--Header-underline": `1px solid ${(theme.vars || theme).palette.divider}`,
    "--Header-background": (theme.vars || theme).palette.background.paper,
    "--Footer-background": (theme.vars || theme).palette.background.paper,
    "--Footer-overline": `1px solid ${(theme.vars || theme).palette.divider}`,
    "--drawer-pos": "fixed",
    "--drawer-z": "999",
    "--jun-ES-line-w": "1px",
    "--jun-ES-line-color": (theme.vars || theme).palette.divider,
    "--EdgeSidebarContent-background": (theme.vars || theme).palette.background
      .paper,
    "--jun-IC-bg": (theme.vars || theme).palette.background.paper,
    "--jun-IC-sideline": `1px solid ${(theme.vars || theme).palette.divider}`,
    backgroundColor: (theme.vars || theme).palette.background.paper,
    minHeight: "var(--jun-h)",
    display: "grid",
    position: "relative",
    transition: "var(--tsn, grid-template-columns 0.3s)",
    containerType: "inline-size",
    containerName: "page",
    gridTemplateRows: "auto 1fr",
    gridTemplateColumns:
      "var(--_start-col, 0px) minmax(0, 1fr) var(--_end-col, 0px)",
    gridTemplateAreas: `
    "${layoutClasses.EdgeSidebar} ${layoutClasses.Header} ${layoutClasses.EdgeSidebarRight}"
    "${layoutClasses.EdgeSidebar} ${layoutClasses.Content} ${layoutClasses.EdgeSidebarRight}"
    "${layoutClasses.EdgeSidebar} ${layoutClasses.Footer} ${layoutClasses.EdgeSidebarRight}"
  `,

    [`&:has(.${layoutClasses.EdgeSidebar})`]: {
      "--_start-col": "max-content",
      "--jun-ES-drawerOpen": "0",
    },
    [`&:has(.${layoutClasses.EdgeSidebarRight})`]: {
      "--_end-col": "max-content",
      "--jun-ES-drawerOpen": "0",
    },
    variants: [
      {
        props: ({ height }: RootProps) => !!height,
        style: ({ height }: Required<RootProps>) =>
          theme.unstable_sx({
            "--jun-h": height,
          }),
      },
      {
        props: { standalone: true },
        style: {
          "--drawer-pos": "absolute",
          "--drawer-z": "5",
          "--content-overflow": "auto",
          maxHeight: "var(--jun-h)",
        },
      },
    ],
  })),
);

const Root = React.forwardRef<
  HTMLDivElement,
  Omit<React.ComponentPropsWithoutRef<typeof StyledRoot>, "ownerState"> &
    RootProps
>(function Root({ className, height, standalone, ...props }, ref) {
  const ownerState = useMemo(
    () => ({
      height,
      standalone,
    }),
    [height, standalone],
  );
  return (
    <StyledRoot
      ref={ref}
      className={`${layoutClasses.Root} ${className || ""}`}
      ownerState={ownerState}
      {...props}
    />
  );
});

export default Root;
