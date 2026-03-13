"use client";
import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { ScreenReaderInput } from "./collapsible-trigger";

interface CollapsibleButtonProps extends ButtonProps {
  defaultChecked?: boolean;
}

const CollapsibleButton = function CollapsibleButton({
  defaultChecked,
  ...props
}: Omit<React.ComponentPropsWithoutRef<"label">, "defaultChecked"> &
  CollapsibleButtonProps) {
  return (
    <Button
      variant="contained"
      component="label"
      tabIndex={-1}
      role={undefined}
      {...props}
    >
      <ScreenReaderInput type="checkbox" defaultChecked={defaultChecked} />
      {props.children}
    </Button>
  );
};

export { CollapsibleButton };
