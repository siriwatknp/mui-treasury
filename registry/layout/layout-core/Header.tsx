"use client";
import React, { useMemo } from "react";
import { Breakpoint, SxProps, Theme } from "@mui/material/styles";
import { unstable_memoTheme as memoTheme } from "@mui/material/utils";
import { styled } from "@mui/material/styles";

interface HeaderProps {
  height?: string | Partial<Record<Breakpoint, string>>;
  fullWidth?: boolean | Breakpoint;
  sx?: SxProps<Theme>;
  className?: string;
}

const FULL_WIDTH_CLIP = `
    "Header Header Header"
    "EdgeSidebar Content EdgeSidebar-R"
    "EdgeSidebar Footer EdgeSidebar-R"
  `;

const StyledHeader = styled("header", {
  name: "LayoutHeader",
  slot: "root",
})<{
  ownerState: HeaderProps;
}>(
  memoTheme(({ theme }) => ({
    gridArea: "Header",
    minHeight: 56,
    alignContent: "center",
    display: "flex",
    alignItems: "center",
    zIndex: 1,
    top: 0,
    position: "sticky",
    background: "var(--Header-background)",
    borderBottom: "var(--Header-underline)",
    height: "var(--Header-height)",
    variants: [
      {
        props: ({ height }: HeaderProps) => !!height,
        style: ({ height }: Required<HeaderProps>) =>
          theme.unstable_sx({
            ".Root:has(&)": {
              "--Header-height": height,
            },
          }),
      },
      {
        props: ({ fullWidth }: HeaderProps) => !!fullWidth,
        style: ({ fullWidth }: Required<HeaderProps>) =>
          theme.unstable_sx({
            ".Root:has(&)": {
              gridTemplateAreas:
                typeof fullWidth === "string"
                  ? { [fullWidth]: FULL_WIDTH_CLIP }
                  : FULL_WIDTH_CLIP,
              "--Header-clipHeight":
                typeof fullWidth === "string"
                  ? { [fullWidth]: "var(--Header-height)" }
                  : "var(--Header-height)",
            },
          }),
      },
    ],
  })),
);

const Header = React.forwardRef<
  HTMLElement,
  React.PropsWithChildren<HeaderProps>
>(function Header({ className, height, fullWidth, sx, ...props }, ref) {
  const ownerState = useMemo(
    () => ({
      height,
      fullWidth,
    }),
    [height, fullWidth],
  );
  return (
    <StyledHeader
      ref={ref}
      className={`Header ${className || ""}`}
      ownerState={ownerState}
      sx={sx}
      {...props}
    />
  );
});

export default Header;
