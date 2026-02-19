"use client";
import React from "react";
import { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const InsetSidebarContentRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "inherit",
  overflow: "auto",
  background: "var(--InsetSidebarContent-background)",
  boxSizing:
    "var(--sticky, border-box) var(--fixed, content-box) var(--absolute, border-box)" as never,
  position:
    "var(--sticky, sticky) var(--fixed, fixed) var(--absolute, absolute)" as never,
  height:
    "var(--sticky, initial) var(--fixed, calc(100% - var(--jun-H-h, 0px))) var(--absolute, calc(var(--jun-h, 100vh) - var(--jun-H-h, 0px)))",
  width: "var(--sticky, inherit) var(--fixed, inherit) var(--absolute, 100%)",
  top: 0,
  borderRight: "var(--anchor-left, var(--InsetSidebarContent-sideline))",
  borderLeft: "var(--anchor-right, var(--InsetSidebarContent-sideline))",
  borderColor: theme.palette.divider,
  marginLeft:
    "var(--fixed, var(--anchor-left, -9999px)) var(--absolute, initial) var(--sticky, initial)",
  paddingLeft:
    "var(--fixed, var(--anchor-left, 9999px)) var(--absolute, initial) var(--sticky, initial)",
  marginRight:
    "var(--fixed, var(--anchor-right, -9999px)) var(--absolute, initial) var(--sticky, initial)",
  paddingRight:
    "var(--fixed, var(--anchor-right, 9999px)) var(--absolute, initial) var(--sticky, initial)",
  marginTop: "var(--fixed, var(--jun-H-h))",
}));

const InsetSidebarContent = React.forwardRef<HTMLDivElement, BoxProps>(
  function InsetSidebarContent({ className, children, ...props }, ref) {
    return (
      // @ts-expect-error BoxProps on styled native element
      <InsetSidebarContentRoot
        ref={ref}
        className={`InsetSidebarContent ${className || ""}`}
        {...props}
      >
        {children}
      </InsetSidebarContentRoot>
    );
  },
);

export default InsetSidebarContent;
