"use client";
import React from "react";
import Tooltip, { type TooltipProps } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { sidebarTooltipClasses } from "./sidebar-tooltip-classes";

const StyledTitle = styled("span", {
  name: "SidebarTooltip",
  slot: "root",
})({
  '[role="tooltip"]:has(&)': {
    display: "var(--_collapsed, block) var(--_uncollapsed, none)",
  },
});

interface SidebarTooltipProps
  extends Omit<TooltipProps, "title" | "placement"> {
  title: React.ReactNode;
  placement?: TooltipProps["placement"];
}

const SidebarTooltip = React.forwardRef<HTMLDivElement, SidebarTooltipProps>(
  function SidebarTooltip(
    { title, placement = "right", slotProps, ...props },
    forwardedRef,
  ) {
    const [container, setContainer] = React.useState<Element | null>(null);
    const innerRef = React.useRef<HTMLDivElement | null>(null);
    React.useEffect(() => {
      if (innerRef.current) {
        setContainer(innerRef.current.closest(".EdgeSidebar"));
      }
    }, []);
    return (
      <Tooltip
        ref={(node: HTMLDivElement | null) => {
          innerRef.current = node;
          if (typeof forwardedRef === "function") {
            forwardedRef(node);
          } else if (forwardedRef) {
            forwardedRef.current = node;
          }
        }}
        title={
          <StyledTitle className={sidebarTooltipClasses.root}>
            {title}
          </StyledTitle>
        }
        placement={placement}
        slotProps={{
          ...slotProps,
          popper: {
            container,
            ...(typeof slotProps?.popper === "object" && !!slotProps?.popper
              ? slotProps.popper
              : {}),
          },
        }}
        {...props}
      />
    );
  },
);

export { SidebarTooltip };
