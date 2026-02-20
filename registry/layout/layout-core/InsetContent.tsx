"use client";
import React from "react";
import { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { layoutClasses } from "./layoutClasses";

const InsetContentRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "inherit",
  overflow: "auto",
  background: "var(--jun-IC-bg)",
  boxSizing: "var(--fixed, content-box) var(--absolute, border-box)" as never,
  position: "var(--fixed, fixed) var(--absolute, absolute)" as never,
  height:
    "var(--fixed, calc(100% - var(--jun-H-h, 0px))) var(--absolute, var(--jun-IC-absolute-h, 100%))",
  width: "var(--fixed, inherit) var(--absolute, 100%)",
  top: 0,
  borderRight: "var(--anchor-left, var(--jun-IC-sideline))",
  borderLeft: "var(--anchor-right, var(--jun-IC-sideline))",
  borderColor: theme.palette.divider,
  marginLeft:
    "var(--fixed, var(--anchor-left, -9999px)) var(--absolute, initial)",
  paddingLeft:
    "var(--fixed, var(--anchor-left, 9999px)) var(--absolute, initial)",
  marginRight:
    "var(--fixed, var(--anchor-right, -9999px)) var(--absolute, initial)",
  paddingRight:
    "var(--fixed, var(--anchor-right, 9999px)) var(--absolute, initial)",
  marginTop: "var(--fixed, var(--jun-H-h))",
}));

const InsetContent = React.forwardRef<HTMLDivElement, BoxProps>(
  function InsetContent({ className, children, ...props }, ref) {
    return (
      // @ts-expect-error BoxProps on styled native element
      <InsetContentRoot
        ref={ref}
        className={`${layoutClasses.InsetContent} ${className || ""}`}
        {...props}
      >
        {children}
      </InsetContentRoot>
    );
  },
);

export default InsetContent;
