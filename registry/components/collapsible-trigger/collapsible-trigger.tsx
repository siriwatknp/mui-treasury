"use client";
import React from "react";
import { styled } from "@mui/material/styles";

interface CollapsibleTriggerProps {
  defaultChecked?: boolean;
  render: React.ReactNode;
}

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

const CollapsibleTrigger = function CollapsibleTrigger({
  className,
  defaultChecked,
  render,
  ...props
}: Omit<React.ComponentPropsWithoutRef<"label">, "defaultChecked"> &
  CollapsibleTriggerProps) {
  return React.cloneElement(render as React.ReactElement, {
    // @ts-expect-error to allow passing props to non-HTML element for flexibility, e.g. SidebarMenuButton
    as: "label",
    defaultChecked,
    _before: (
      <ScreenReaderInput type="checkbox" defaultChecked={defaultChecked} />
    ),
    ...props,
  });
};

export default CollapsibleTrigger;
