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
    ...(fullWidth && { zIndex: 3 }),
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
  top: 0, // for position sticky to work
  position: "sticky",
  background: "var(--Header-background)",
  borderBottom: "var(--Header-underline)",
});

const Header = React.forwardRef<HTMLElement, BoxProps>(function Header(
  { className, ...props },
  ref,
) {
  return (
    <StyledHeader
      // @ts-expect-error Material UI issue
      ref={ref}
      className={`Header ${className || ""}`}
      {...props}
    />
  );
});

export default Header;
