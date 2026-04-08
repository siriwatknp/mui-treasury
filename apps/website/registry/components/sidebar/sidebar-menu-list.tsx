"use client";

import React, { useMemo } from "react";

import { styled } from "@mui/material/styles";
import { unstable_memoTheme as memoTheme } from "@mui/material/utils";

import type {
  ForwardStyledProps,
  OverridableComponent,
} from "../../types/shared/component";
import { sidebarClasses } from "./sidebar-classes";
import { SidebarMenuButton } from "./sidebar-menu-button";

export { SidebarMenuButton };

export type SidebarMenuProps = ForwardStyledProps<{
  relaxed?: boolean;
  nested?: boolean;
  noLine?: boolean;
  component?: React.ElementType;
}>;

const StyledSidebarMenuList = styled("div", {
  name: "SidebarMenuList",
  slot: "root",
})<{ ownerState: SidebarMenuProps }>(
  {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
  },
  memoTheme(({ theme }) => ({
    variants: [
      {
        props: { relaxed: true },
        style: {
          gap: "0.5rem",
          "--item-gap": "0.75rem",
          "--item-h": "2.5rem",
          "--item-fs": "1rem",
          "--item-lh": "1.5rem",
          "--item-px": "0.75rem",
          "--item-py": "0.5rem",
          "--action-size": "2rem",
          "--icon-size": "1.25rem",
        },
      },
      {
        props: { nested: true },
        style: {
          "--item-py": "0px",
          "--item-h": "calc(var(--item-lh, 1.25rem) + 0.5rem)",
          paddingBlock: "0.25rem",
          position: "relative",
          marginLeft:
            "calc(var(--icon-w, 1rem) + 2*var(--item-gap, 0.5rem) - 0.5rem)",
          marginRight: "2px",
          "&::before": {
            content: '""',
            display: "block",
            position: "absolute",
            width: "1px",
            top: "2px",
            bottom: "2px",
            left: "calc(var(--icon-w, 1rem)/-2 - var(--item-gap, 0.5rem) + 0.5rem)",
            background: (theme.vars || theme).palette.divider,
          },
        },
      },
      {
        props: { nested: true, noLine: true },
        style: {
          "&::before": {
            display: "none",
          },
        },
      },
    ],
  })),
);

export const SidebarMenuList = React.forwardRef<
  HTMLDivElement,
  SidebarMenuProps & React.ComponentPropsWithoutRef<"div">
>(function SidebarMenuList(
  { className, relaxed, nested, noLine, component, ...props },
  ref,
) {
  const ownerState = useMemo(
    () => ({ relaxed, nested, noLine }),
    [relaxed, nested, noLine],
  );
  return (
    <StyledSidebarMenuList
      ref={ref}
      className={`${sidebarClasses.menu} ${className || ""}`}
      ownerState={ownerState}
      as={component}
      {...props}
    />
  );
}) as OverridableComponent<SidebarMenuProps, "div">;
