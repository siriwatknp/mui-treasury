import React from "react";
import { BoxProps } from "@mui/material/Box";
import { Breakpoint } from "@mui/material/styles";
import { styled } from "./zero-styled";

export function applyHeaderStyles(params?: {
  height: string | Partial<Record<Breakpoint, string>>;
}) {
  const { height } = params || {};
  return {
    height,
    ".JunRoot:has(&)": {
      "--Header-height": height,
    },
  };
}

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
