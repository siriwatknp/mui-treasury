import React from "react";
import { BoxProps } from "@mui/material/Box";
import { Breakpoint } from "@mui/material/styles";
import { styled } from "./zero-styled";

export function applyInsetSidebarStyles(params: {
  anchor: "left" | "right";
  width: string | Partial<Record<Breakpoint, string>>;
}) {
  const { anchor, width } = params;
  return {
    width,
    ".Root:has(&)": {
      [`--InsetSidebar${anchor === "right" ? "R" : "L"}-width`]: width,
    },
    ...(typeof width !== "string" && {
      display: {
        xs: "none",
        [Object.keys(width)[0]]: "block",
      },
    }),
  };
}

const InsetSidebarRoot = styled("aside")({
  "--InsetSidebar-position": "var(--sticky)",
  "--InsetSidebar-anchor": "var(--anchor-right)",
  /** DO NOT OVERRIDE, internal variables */
  "--sticky": "var(--InsetSidebar-position,)",
  "--fixed": "var(--InsetSidebar-position,)",
  "--absolute": "var(--InsetSidebar-position,)",
  "--anchor-right": "var(--InsetSidebar-anchor,)",
  "--anchor-left": "var(--InsetSidebar-anchor,)",
  position: "relative",
  flexShrink: 0,
});

const InsetSidebar = React.forwardRef<
  HTMLDivElement,
  BoxProps & {
    anchor?: "left" | "right";
    position?: "fixed" | "absolute" | "sticky";
  }
>(function InsetSidebar(
  {
    className,
    style,
    position = "sticky",
    anchor = "right",
    children,
    ...props
  },
  ref,
) {
  return (
    <InsetSidebarRoot
      // @ts-ignore
      ref={ref}
      className={`InsetSidebar ${className || ""}`}
      {...props}
      style={{
        ...style,
        ...(anchor !== "right" && {
          "--InsetSidebar-anchor": `var(--anchor-${anchor})`,
        }),
        ...(position !== "sticky" && {
          "--InsetSidebar-position": `var(--${position})`,
        }),
      }}
    >
      {children}
    </InsetSidebarRoot>
  );
});

export default InsetSidebar;
