import React from "react";
import { BoxProps } from "@mui/material/Box";
import { layoutClasses } from "./layoutClasses";
import { styled } from "./zero-styled";

const StyledFooter = styled("footer")({
  gridArea: layoutClasses.Footer,
  transition: "all 225ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, color 0s",
  background: "var(--Footer-background)",
  borderTop: "var(--Footer-overline)",
});

const Footer = React.forwardRef<HTMLElement, BoxProps>(function Footer(
  { className, ...props },
  ref,
) {
  return (
    <StyledFooter
      // @ts-expect-error Material UI issue
      ref={ref}
      className={`${layoutClasses.Footer} ${className || ""}`}
      {...props}
    />
  );
});

export default Footer;
