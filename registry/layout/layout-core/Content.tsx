"use client";
import React from "react";
import { unstable_memoTheme as memoTheme } from "@mui/material/utils";
import { styled } from "@mui/material/styles";

const StyledContent = styled("main", {
  name: "LayoutContent",
  slot: "root",
})(
  memoTheme(() => ({
    gridArea: "Content",
    minHeight: 0,
    "&:has(> .InsetSidebar)": {
      display: "flex",
      flexFlow: "row nowrap",
      flexGrow: 1,
      [`& > *:where(:not([class*="InsetSidebar"]))`]: {
        flexGrow: 1,
        overflow: "auto",
      },
    },
  })),
);

const Content = React.forwardRef<
  HTMLElement,
  React.ComponentProps<typeof StyledContent>
>(function Content({ className, ...props }, ref) {
  return (
    <StyledContent
      ref={ref}
      className={`Content ${className || ""}`}
      {...props}
    />
  );
});

export default Content;
