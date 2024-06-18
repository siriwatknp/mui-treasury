import React from "react";
import { BoxProps } from "@mui/material/Box";
import { styled } from "./zero-styled";

const StyledFooter = styled("footer")({
  gridArea: "Footer",
  transition: "all 225ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, color 0s",
});

const Footer = React.forwardRef<HTMLElement, BoxProps>(function Footer(
  { className, ...props },
  ref,
) {
  return (
    <StyledFooter
      // @ts-ignore
      ref={ref}
      className={`Footer ${className || ""}`}
      {...props}
    />
  );
});

export default Footer;
