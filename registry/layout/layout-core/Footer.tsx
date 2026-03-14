"use client";
import React from "react";
import { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { layoutClasses } from "./layoutClasses";

const StyledFooter = styled("footer")(({ theme }) => ({
  gridArea: layoutClasses.Footer,
  transition: "all 225ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, color 0s",
  background: `var(--Footer-background, ${(theme.vars || theme).palette.background.paper})`,
  borderTop: "var(--Footer-overline)",
}));

const Footer = React.forwardRef<HTMLElement, BoxProps>(function Footer(
  { className, ...props },
  ref,
) {
  return (
    // @ts-expect-error BoxProps on styled native element
    <StyledFooter
      ref={ref}
      className={`${layoutClasses.Footer} ${className || ""}`}
      {...props}
    />
  );
});

export default Footer;
