import React from "react";
import { BoxProps } from "@mui/material/Box";
import { Breakpoint } from "@mui/material/styles";
import { layoutClasses } from "./layoutClasses";
import { styled } from "./zero-styled";

export function applyHeaderStyles(params?: {
  height: string | Partial<Record<Breakpoint, string>>;
  fullWidth?: boolean | Breakpoint;
}) {
  const { height, fullWidth } = params || {};
  const clip = `
    "${layoutClasses.Header} ${layoutClasses.Header} ${layoutClasses.Header}"
    "${layoutClasses.EdgeSidebar} ${layoutClasses.Content} ${layoutClasses.EdgeSidebarRight}"
    "${layoutClasses.EdgeSidebar} ${layoutClasses.Footer} ${layoutClasses.EdgeSidebarRight}"
  `;
  return {
    height,
    ...(fullWidth && { zIndex: 3 }),
    [`.${layoutClasses.Root}:has(&)`]: {
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

const StyledHeader = styled("header")(({ theme }) => ({
  gridArea: layoutClasses.Header,
  height: 56, // better than `min-height` because user can set height to 0
  alignContent: "center",
  display: "flex",
  alignItems: "center",
  top: 0, // for position sticky to work
  position: "sticky",
  background: (theme.vars || theme).palette.background.paper,
  borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
}));

const Header = React.forwardRef<HTMLElement, BoxProps>(function Header(
  { className, ...props },
  ref,
) {
  return (
    <StyledHeader
      // @ts-expect-error Material UI issue
      ref={ref}
      className={`${layoutClasses.Header} ${className || ""}`}
      {...props}
    />
  );
});

export default Header;
