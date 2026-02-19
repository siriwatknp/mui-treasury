"use client";
import React, { useMemo } from "react";
import { Breakpoint } from "@mui/material/styles";
import { unstable_memoTheme as memoTheme } from "@mui/material/utils";
import { styled } from "@mui/material/styles";
import { layoutClasses } from "./layoutClasses";

interface InsetSidebarProps {
  position?: "fixed" | "absolute" | "sticky";
  width?: string | Partial<Record<Breakpoint, string>>;
}

const StyledInsetSidebar = styled("aside", {
  name: "LayoutInsetSidebar",
  slot: "root",
})<{
  ownerState: InsetSidebarProps;
}>(
  memoTheme(({ theme }) => ({
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
    variants: [
      {
        props: ({ width }: InsetSidebarProps) => !!width,
        style: ({ width }: Required<InsetSidebarProps>) =>
          theme.unstable_sx({
            width,
            [`.${layoutClasses.Root}:has(&:not(:last-child))`]: {
              "--jun-ISL-w": width,
            },
            [`.${layoutClasses.Root}:has(&:last-child)`]: {
              "--jun-ISR-w": width,
            },
            // TODO: this should be removed. Better to let user handle the display of the sidebar
            ...(typeof width !== "string" && {
              display: {
                xs: "none",
                [Object.keys(width)[0]]: "block",
              },
            }),
          }),
      },
      {
        props: { position: "fixed" },
        style: {
          "--InsetSidebar-position": "var(--fixed)",
        },
      },
      {
        props: { position: "absolute" },
        style: {
          "--InsetSidebar-position": "var(--absolute)",
        },
      },
    ],
  })),
);

const InsetSidebar = React.forwardRef<
  HTMLDivElement,
  Omit<React.ComponentProps<typeof StyledInsetSidebar>, "ownerState"> &
    InsetSidebarProps
>(function InsetSidebar({ className, position, width, ...props }, ref) {
  const ownerState = useMemo(
    () => ({
      position,
      width,
    }),
    [position, width],
  );
  return (
    <StyledInsetSidebar
      ref={ref}
      className={`${layoutClasses.InsetSidebar} ${className || ""}`}
      ownerState={ownerState}
      {...props}
    />
  );
});

export default InsetSidebar;
