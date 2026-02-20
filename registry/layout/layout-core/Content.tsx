"use client";
import React from "react";
import { unstable_memoTheme as memoTheme } from "@mui/material/utils";
import { styled } from "@mui/material/styles";
import { layoutClasses } from "./layoutClasses";

const StyledContent = styled("main", {
  name: "LayoutContent",
  slot: "root",
})(
  memoTheme(() => ({
    "--_overflow": "var(--content-overflow)",
    overflow: "var(--_overflow)" as never,
    gridArea: layoutClasses.Content,
    minHeight: 0,
  })),
);

const Content = React.forwardRef<
  HTMLElement,
  React.ComponentProps<typeof StyledContent>
>(function Content({ className, ...props }, ref) {
  return (
    <StyledContent
      ref={ref}
      className={`${layoutClasses.Content} ${className || ""}`}
      {...props}
    />
  );
});

export default Content;
