"use client";
import React, { useMemo } from "react";
import { Breakpoint } from "@mui/material/styles";
import { unstable_memoTheme as memoTheme } from "@mui/material/utils";
import { styled } from "@mui/material/styles";

interface HeaderProps {
  height?: string | Partial<Record<Breakpoint, string>>;
  fullWidth?: boolean | Breakpoint;
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
    height: "var(--jun-H-h)",
    variants: [
      {
        props: ({ height }: HeaderProps) => !!height,
        style: ({ height }: Required<HeaderProps>) =>
          theme.unstable_sx({
            ".Root:has(&)": {
              "--jun-H-h": height,
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
              "--jun-H-clip-h":
                typeof fullWidth === "string"
                  ? { [fullWidth]: "var(--jun-H-h)" }
                  : "var(--jun-H-h)",
            },
          }),
      },
    ],
  })),
);

const Header = React.forwardRef<
  HTMLElement,
  Omit<React.ComponentPropsWithoutRef<typeof StyledHeader>, "ownerState"> &
    HeaderProps
>(function Header({ className, height, fullWidth, ...props }, ref) {
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
      {...props}
    />
  );
});

export default Header;
