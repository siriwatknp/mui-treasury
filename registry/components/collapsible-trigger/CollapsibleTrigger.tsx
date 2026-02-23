"use client";
import React from "react";
import { unstable_memoTheme as memoTheme } from "@mui/material/utils";
import { styled } from "@mui/material/styles";
import { collapsibleTriggerClasses } from "./collapsibleTriggerClasses";

interface CollapsibleTriggerProps {
  defaultChecked?: boolean;
  component?: React.ElementType;
}

const StyledCollapsibleTrigger = styled("label", {
  name: "CollapsibleTrigger",
  slot: "root",
})(
  memoTheme(({ theme }) => ({
    userSelect: "none",
    "&:has(input:focus-visible)": {
      outline: `2px solid ${(theme.vars || theme).palette.primary.main}`,
    },
  })),
);

const ScreenReaderInput = styled("input")({
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: 0,
});

const CollapsibleTrigger = React.forwardRef<
  HTMLLabelElement,
  Omit<React.ComponentPropsWithoutRef<"label">, "defaultChecked"> &
    CollapsibleTriggerProps
>(function CollapsibleTrigger(
  { className, defaultChecked, children, component, ...props },
  ref,
) {
  return (
    <StyledCollapsibleTrigger
      ref={ref}
      className={`${collapsibleTriggerClasses.root} ${className || ""}`}
      as={component}
      {...props}
    >
      <ScreenReaderInput type="checkbox" defaultChecked={defaultChecked} />
      {children}
    </StyledCollapsibleTrigger>
  );
});

export default CollapsibleTrigger;
