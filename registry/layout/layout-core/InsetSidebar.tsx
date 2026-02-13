"use client";
import React from "react";
import { BoxProps } from "@mui/material/Box";
import { Breakpoint } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

export function applyInsetSidebarStyles(params: {
  width: string | Partial<Record<Breakpoint, string>>;
}) {
  const { width } = params;
  return {
    width,
    ".Root:has(&:not(:last-child))": {
      [`--InsetSidebarL-width`]: width,
    },
    ".Root:has(&:last-child)": {
      [`--InsetSidebarR-width`]: width,
    },
    ...(typeof width !== "string" && {
      display: {
        xs: "none",
        [Object.keys(width)[0]]: "block",
      },
    }),
  };
}

const InsetSidebarRoot = styled("aside")({
  "--InsetSidebar-position": "var(--sticky)",
  "--sticky": "var(--InsetSidebar-position,)",
  "--fixed": "var(--InsetSidebar-position,)",
  "--absolute": "var(--InsetSidebar-position,)",
  "--anchor-right": "var(--InsetSidebar-anchor,)",
  "--anchor-left": "var(--InsetSidebar-anchor,)",
  width: "200px",
  position: "relative",
  flexShrink: 0,
  "&:not(:last-child)": {
    "--InsetSidebar-anchor": "var(--anchor-left)",
  },
  "&:last-child": {
    "--InsetSidebar-anchor": "var(--anchor-right)",
  },
});

const InsetSidebar = React.forwardRef<
  HTMLDivElement,
  BoxProps & {
    position?: "fixed" | "absolute" | "sticky";
  }
>(function InsetSidebar(
  { className, style, position = "sticky", children, ...props },
  ref,
) {
  return (
    // @ts-expect-error BoxProps on styled native element
    <InsetSidebarRoot
      ref={ref}
      className={`InsetSidebar ${className || ""}`}
      {...props}
      style={{
        ...style,
        ...(position !== "sticky" && {
          "--InsetSidebar-position": `var(--${position})`,
        }),
      }}
    >
      {children}
    </InsetSidebarRoot>
  );
});

export default InsetSidebar;
