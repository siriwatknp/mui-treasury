import React from "react";
import { BoxProps } from "@mui/material/Box";
import { styled } from "./zero-styled";

const StyledHeader = styled("header")({
  gridArea: "Header",
  minHeight: 56,
  alignContent: "center",
  display: "flex",
  alignItems: "center",
});

const Header = React.forwardRef<HTMLElement, BoxProps>(function Header(
  { className, ...props },
  ref,
) {
  return (
    <StyledHeader
      // @ts-ignore
      ref={ref}
      className={`Header ${className || ""}`}
      {...props}
    />
  );
});

export default Header;
