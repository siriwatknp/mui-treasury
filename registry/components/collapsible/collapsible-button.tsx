"use client";

import React from "react";

import Button, { ButtonProps } from "@mui/material/Button";

import type { OverridableComponent } from "../../types/shared/component";
import { ScreenReaderInput } from "./collapsible-trigger";

export interface CollapsibleButtonProps {
  defaultChecked?: boolean;
  component?: React.ElementType;
}

export const CollapsibleButton = React.forwardRef<
  HTMLLabelElement,
  CollapsibleButtonProps & ButtonProps
>(function CollapsibleButton({ defaultChecked, children, ...props }, ref) {
  return (
    <Button
      ref={ref}
      variant="contained"
      component="label"
      tabIndex={-1}
      role={undefined}
      {...props}
    >
      <ScreenReaderInput type="checkbox" defaultChecked={defaultChecked} />
      {children}
    </Button>
  );
}) as OverridableComponent<CollapsibleButtonProps, typeof Button>;
