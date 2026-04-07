"use client";

import React, { useMemo } from "react";

import { Breakpoint, styled } from "@mui/material/styles";
import { unstable_memoTheme as memoTheme } from "@mui/material/utils";

import type { ForwardStyledProps } from "../../types/shared/component";
import { sidebarClasses } from "./sidebar-classes";

export type SidebarIconProps = ForwardStyledProps<{
  size?: string | Partial<Record<Breakpoint, string>>;
  shrinkSize?: string | Partial<Record<Breakpoint, string>>;
}>;

const StyledSidebarIcon = styled("span", {
  name: "SidebarIcon",
  slot: "root",
})<{ ownerState: SidebarIconProps }>(
  {
    "--_mt": "0px",
    height: "var(--icon-size, 1rem)",
    width: "var(--icon-size, 1rem)",
    transition: "var(--tsn, cubic-bezier(0.4, 0, 0.2, 1) 0.15s)",
    flex: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "var(--_mt)",
    "& svg": {
      width: "100%",
      height: "100%",
    },
    "&:has(+ .SidebarGroupText)": {
      "--_mt": "max(18px - var(--icon-size, 1rem), 0px)",
    },
  },
  memoTheme(({ theme }) => ({
    variants: [
      {
        props: ({ size }: SidebarIconProps) => !!size,
        style: ({ size }: Required<SidebarIconProps>) => {
          const toSize = (v: string) => ({
            "--icon-size": v,
            height: v,
            width: v,
            [`.${sidebarClasses.menuItem}:has(&)`]: {
              "--icon-w": v,
            },
          });
          if (typeof size === "string") {
            return toSize(size);
          }
          const result: Record<string, unknown> = {};
          for (const bp of Object.keys(size) as Breakpoint[]) {
            const val = size[bp];
            if (!val) continue;
            if (bp === "xs") {
              Object.assign(result, toSize(val));
            } else {
              result[theme.breakpoints.up(bp)] = toSize(val);
            }
          }
          return result;
        },
      },
      {
        props: ({ shrinkSize }: SidebarIconProps) => !!shrinkSize,
        style: ({ shrinkSize }: Required<SidebarIconProps>) => {
          const toCollapsible = (v: string) => ({
            width: `var(--_collapsed, ${v}) var(--_uncollapsed, var(--icon-size, 1rem))`,
            height: `var(--_collapsed, ${v}) var(--_uncollapsed, var(--icon-size, 1rem))`,
          });
          if (typeof shrinkSize === "string") {
            return toCollapsible(shrinkSize);
          }
          const result: Record<string, unknown> = {};
          for (const bp of Object.keys(shrinkSize) as Breakpoint[]) {
            const val = shrinkSize[bp];
            if (!val) continue;
            if (bp === "xs") {
              Object.assign(result, toCollapsible(val));
            } else {
              result[theme.breakpoints.up(bp)] = toCollapsible(val);
            }
          }
          return result;
        },
      },
    ],
  })),
);

export const SidebarIcon = React.forwardRef<
  HTMLSpanElement,
  SidebarIconProps & React.ComponentPropsWithoutRef<"span">
>(function SidebarIcon({ className, size, shrinkSize, ...props }, ref) {
  const ownerState = useMemo(() => ({ size, shrinkSize }), [size, shrinkSize]);
  return (
    <StyledSidebarIcon
      ref={ref}
      className={`${sidebarClasses.icon} ${className || ""}`}
      ownerState={ownerState}
      {...props}
    />
  );
});
