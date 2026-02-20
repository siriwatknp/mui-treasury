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
    "--InsetSidebar-position": "var(--sticky,)",
    "--fixed": "var(--InsetSidebar-position,)",
    "--absolute": "var(--InsetSidebar-position,)",
    "--anchor-right": "var(--InsetSidebar-anchor,)",
    "--anchor-left": "var(--InsetSidebar-anchor,)",
    "*:has(>&)": {
      display: "flex",
      flexFlow: "row nowrap !important",
      flexGrow: "1 !important" as never,
      [`&:not(.${layoutClasses.Content})`]: {
        height: "100%",
      },
    },
    [`*:has(>&) > :where(:not([class*="${layoutClasses.InsetSidebar}"]))`]: {
      flexGrow: "1 !important" as never,
      overflow: "auto",
    },
    width: "200px",
    flex: "none",
    position: "sticky" as const,
    height: "calc(var(--jun-h) - var(--jun-H-h, 0px))",
    overflow: "auto",
    top: "var(--jun-H-h, 0px)",
    "&:first-child": {
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
            [`.${layoutClasses.Root}:has(> .${layoutClasses.Content} > &:first-child) > .${layoutClasses.Footer}`]:
              {
                "--jun-ISL-w": width,
              },
            [`.${layoutClasses.Root}:has(> .${layoutClasses.Content} > * > &:first-child) > .${layoutClasses.Footer}`]:
              {
                "--jun-ISL-w": width,
              },
            [`.${layoutClasses.Root}:has(> .${layoutClasses.Content} > &:last-child) > .${layoutClasses.Footer}`]:
              {
                "--jun-ISR-w": width,
              },
            [`.${layoutClasses.Root}:has(> .${layoutClasses.Content} > * > &:last-child) > .${layoutClasses.Footer}`]:
              {
                "--jun-ISR-w": width,
              },
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
          "--InsetSidebar-position": "var(--fixed,)",
          position: "relative" as const,
          height: "auto",
          overflow: "visible",
          top: "auto",
          flexShrink: 0,
          zIndex: 1,
        },
      },
      {
        props: { position: "absolute" },
        style: {
          "--InsetSidebar-position": "var(--absolute,)",
          position: "relative" as const,
          height: "auto",
          overflow: "visible",
          top: "auto",
          flexShrink: 0,
          zIndex: 1,
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
