"use client";
import React from "react";
import { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyledFooter = styled("footer")({
  gridArea: "Footer",
  transition: "all 225ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, color 0s",
  background: "var(--Footer-background)",
  borderTop: "var(--Footer-overline)",
});

const Footer = React.forwardRef<HTMLElement, BoxProps>(function Footer(
  { className, ...props },
  ref,
) {
  return (
    // @ts-expect-error BoxProps on styled native element
    <StyledFooter
      ref={ref}
      className={`Footer ${className || ""}`}
      {...props}
    />
  );
});

export default Footer;
