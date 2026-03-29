"use client";

import React, { useMemo } from "react";

import ButtonBase, { ButtonBaseProps } from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
import { unstable_memoTheme as memoTheme } from "@mui/material/utils";

import type { OverridableComponent } from "../../types/shared/component";
import { sidebarClasses } from "./sidebar-classes";

export interface SidebarMenuActionProps {
  hoverAppear?: boolean;
  _before?: React.ReactNode;
  component?: React.ElementType;
}

const StyledSidebarMenuAction = styled(ButtonBase, {
  name: "SidebarMenuAction",
  slot: "root",
})<{ ownerState: SidebarMenuActionProps }>(
  memoTheme(({ theme }) => ({
    position: "absolute",
    right: "var(--_collapsed, -100%) var(--_uncollapsed, 0.25rem)",
    width: "var(--action-size, 1.5rem)",
    height: "var(--action-size, 1.5rem)",
    display: "inline-flex",
    visibility:
      "var(--_collapsed, hidden) var(--_uncollapsed, visible)" as never,
    justifyContent: "center",
    alignItems: "center",
    top: "calc(var(--item-h, 2rem)/2 - var(--action-size, 1.5rem)/2)",
    color: (theme.vars || theme).palette.text.secondary,
    transition: "var(--tsn, right 0.4s)",
    borderRadius: (theme.vars || theme).shape.borderRadius,
    "&:focus-visible": {
      outline: "2px solid",
      outlineColor: (theme.vars || theme).palette.text.primary,
      outlineOffset: "2px",
    },
    "@media (hover: hover)": {
      "&:hover": {
        backgroundColor: (theme.vars || theme).palette.action.hover,
      },
    },
    "& svg": {
      width: "var(--icon-size, 1rem)",
      height: "var(--icon-size, 1rem)",
    },
    "&:has(+ &)": {
      right:
        "var(--_collapsed, -100%) var(--_uncollapsed, calc(var(--action-size, 1.5rem) + 0.25rem))",
    },
    variants: [
      {
        props: { hoverAppear: true },
        style: {
          opacity: 0,
          "&:hover, &:focus-visible": {
            opacity: 1,
          },
          [`.${sidebarClasses.menuButton}:hover ~ &, .${sidebarClasses.groupLabel} > &`]:
            {
              opacity: 1,
            },
        },
      },
    ],
  })),
);

export const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  SidebarMenuActionProps & ButtonBaseProps
>(function SidebarMenuAction(
  { className, hoverAppear, _before, component, children, ...props },
  ref,
) {
  const ownerState = useMemo(() => ({ hoverAppear }), [hoverAppear]);
  return (
    <StyledSidebarMenuAction
      ref={ref}
      className={`${sidebarClasses.menuAction} ${className || ""}`}
      ownerState={ownerState}
      as={
        component ??
        (className?.includes("CollapsibleTrigger") ? "label" : undefined)
      }
      {...props}
    >
      {_before}
      {children}
    </StyledSidebarMenuAction>
  );
}) as OverridableComponent<SidebarMenuActionProps, typeof ButtonBase>;
