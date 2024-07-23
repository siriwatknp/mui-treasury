import React from "react";
import { BoxProps } from "@mui/material/Box";
import { Breakpoint } from "@mui/material/styles";
import { styled } from "./zero-styled";

export function applyHeaderStyles(params?: {
  height: string | Partial<Record<Breakpoint, string>>;
  fullWidth?: boolean | Breakpoint;
}) {
  const { height, fullWidth } = params || {};
  const clip = `
    "Header Header Header"
    "EdgeSidebar Content EdgeSidebar-R"
    "EdgeSidebar Footer EdgeSidebar-R"
  `;
  return {
    height,
    ".Root:has(&)": {
      "--Header-height": height,
      ...(fullWidth && {
        gridTemplateAreas:
          typeof fullWidth === "string"
            ? {
                [fullWidth]: clip,
              }
            : clip,
        "--Header-clipHeight":
          typeof fullWidth === "string"
            ? {
                [fullWidth]: "var(--Header-height)",
              }
            : "var(--Header-height)",
      }),
    },
  };
}

const StyledHeader = styled("header")({
  gridArea: "Header",
  minHeight: 56,
  alignContent: "center",
  display: "flex",
  alignItems: "center",
  zIndex: 1,
  top: 0, // for position sticky to work
  background: "var(--Header-background)",
  borderBottom: "var(--Header-underline)",
  padding: "var(--shared-spacing)",
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
