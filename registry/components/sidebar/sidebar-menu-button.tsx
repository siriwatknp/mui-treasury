"use client";
import React, { useMemo } from "react";
import ButtonBase from "@mui/material/ButtonBase";
import { unstable_memoTheme as memoTheme } from "@mui/material/utils";
import { styled } from "@mui/material/styles";
import { sidebarClasses } from "./sidebar-classes";

interface SidebarMenuButtonProps {
  active?: boolean;
  hideWhen?: "collapsed" | "uncollapsed";
  _before?: React.ReactNode;
}

const StyledSidebarMenuButton = styled(ButtonBase, {
  name: "SidebarMenuButton",
  slot: "root",
})<{ ownerState: SidebarMenuButtonProps }>(
  memoTheme(({ theme }) => ({
    "--_items": "center",
    minWidth: 0,
    textAlign: "left",
    alignItems: "var(--_items)",
    justifyContent: "initial",
    flex: 1,
    fontSize: "var(--item-fs, 0.875rem)",
    lineHeight: "var(--item-lh, 1.25rem)",
    minHeight: "var(--item-h, 2rem)",
    borderRadius: (theme.vars || theme).shape.borderRadius,
    color: (theme.vars || theme).palette.text.secondary,
    cursor: "pointer",
    transition:
      "var(--tsn, min-height var(--_collapsed, 0.2s) var(--_uncollapsed, 0.3s), padding var(--_collapsed, 0.2s) var(--_uncollapsed, 0.3s), gap var(--_collapsed, 0s 0.4s) var(--_uncollapsed, 0s))",
    "--item-gap": "var(--_collapsed, 0px) var(--_uncollapsed, 0.5rem)",
    display: "flex",
    gap: "var(--item-gap)",
    paddingInline:
      "var(--_collapsed, var(--shrink-px, var(--item-px, 0.5rem))) var(--_uncollapsed, var(--item-px, 0.5rem))",
    paddingBlock:
      "var(--_collapsed, var(--shrink-py, var(--item-py, 0.375rem))) var(--_uncollapsed, var(--item-py, 0.375rem))",
    "&:focus-visible": {
      outline: "2px solid",
      outlineColor: (theme.vars || theme).palette.text.primary,
    },
    "&:is(label)": {
      userSelect: "none",
      "&:has(input:focus-visible)": {
        outline: `2px solid ${(theme.vars || theme).palette.primary.main}`,
      },
    },
    "@media (hover: hover)": {
      "&:hover": {
        color: (theme.vars || theme).palette.text.primary,
        backgroundColor: (theme.vars || theme).palette.action.hover,
      },
    },
    ":has(.SidebarIcon + .SidebarGroupText)": {
      "--_items": "flex-start",
    },
    variants: [
      {
        props: { active: true },
        style: {
          color: (theme.vars || theme).palette.text.primary,
          backgroundColor: (theme.vars || theme).palette.action.hover,
        },
      },
      {
        props: { hideWhen: "collapsed" },
        style: {
          display: "var(--_collapsed, none) var(--_uncollapsed, flex)",
        },
      },
      {
        props: { hideWhen: "uncollapsed" },
        style: {
          display: "var(--_collapsed, flex) var(--_uncollapsed, none)",
        },
      },
    ],
  })),
);

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  Omit<
    React.ComponentPropsWithoutRef<typeof StyledSidebarMenuButton>,
    "ownerState"
  > &
    SidebarMenuButtonProps
>(function SidebarMenuButton(
  { className, active, hideWhen, _before, children, ...props },
  ref,
) {
  const ownerState = useMemo(() => ({ active, hideWhen }), [active, hideWhen]);
  return (
    <StyledSidebarMenuButton
      ref={ref}
      className={`${sidebarClasses.menuButton} ${className || ""}`}
      ownerState={ownerState}
      as={className?.includes("CollapsibleTrigger") ? "label" : undefined}
      {...props}
    >
      {_before}
      {children}
    </StyledSidebarMenuButton>
  );
});

export { SidebarMenuButton };
