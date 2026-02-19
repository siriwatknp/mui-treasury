"use client";
import React, { useMemo } from "react";
import { Breakpoint } from "@mui/material/styles";
import { unstable_memoTheme as memoTheme } from "@mui/material/utils";
import { styled } from "@mui/material/styles";

type ClipSide = "left" | "right" | "both";

interface HeaderProps {
  height?: string | Partial<Record<Breakpoint, string>>;
  clip?: ClipSide | Partial<Record<Breakpoint, ClipSide>>;
}

const CLIP_BOTH = `
    "Header Header Header"
    "EdgeSidebar Content EdgeSidebar-R"
    "EdgeSidebar Footer EdgeSidebar-R"
  `;

const CLIP_LEFT = `
    "Header Header EdgeSidebar-R"
    "EdgeSidebar Content EdgeSidebar-R"
    "EdgeSidebar Footer EdgeSidebar-R"
  `;

const CLIP_RIGHT = `
    "EdgeSidebar Header Header"
    "EdgeSidebar Content EdgeSidebar-R"
    "EdgeSidebar Footer EdgeSidebar-R"
  `;

function getClipStyles(side: ClipSide) {
  if (side === "left") {
    return {
      gridTemplateAreas: CLIP_LEFT,
      "& .EdgeSidebar": {
        "--jun-H-clip-h": "var(--jun-H-h)",
      },
    };
  }
  if (side === "right") {
    return {
      gridTemplateAreas: CLIP_RIGHT,
      "& .EdgeSidebar-R": {
        "--jun-H-clip-h": "var(--jun-H-h)",
      },
    };
  }
  return {
    gridTemplateAreas: CLIP_BOTH,
    "--jun-H-clip-h": "var(--jun-H-h)",
  };
}

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
        props: ({ clip }: HeaderProps) => !!clip,
        style: ({ clip }: Required<HeaderProps>) => {
          const normalized = typeof clip === "string" ? { xs: clip } : clip;
          const rootStyles: Record<string, unknown> = {};

          (Object.keys(normalized) as Breakpoint[])
            .sort(
              (a, b) =>
                theme.breakpoints.values[a] - theme.breakpoints.values[b],
            )
            .forEach((bp) => {
              const side = normalized[bp];
              if (side) {
                if (bp === "xs") {
                  Object.assign(rootStyles, getClipStyles(side));
                } else {
                  rootStyles[theme.breakpoints.up(bp)] = getClipStyles(side);
                }
              }
            });

          return {
            zIndex: 3,
            ".Root:has(&)": rootStyles,
          };
        },
      },
    ],
  })),
);

const Header = React.forwardRef<
  HTMLElement,
  Omit<React.ComponentPropsWithoutRef<typeof StyledHeader>, "ownerState"> &
    HeaderProps
>(function Header({ className, height, clip, ...props }, ref) {
  const ownerState = useMemo(
    () => ({
      height,
      clip,
    }),
    [height, clip],
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
