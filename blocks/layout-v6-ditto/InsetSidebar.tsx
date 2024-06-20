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

const InsetSidebarBody = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "inherit",
  overflow: "auto",
  boxSizing:
    "var(--sticky, border-box) var(--fixed, content-box) var(--absolute, border-box)" as any,
  position:
    "var(--sticky, sticky) var(--fixed, fixed) var(--absolute, absolute)" as any,
  height:
    "var(--sticky, initial) var(--fixed, calc(100% - var(--Header-height, 0px))) var(--absolute, calc(100vh - var(--Header-height, 0px)))",
  width: "var(--sticky, inherit) var(--fixed, inherit) var(--absolute, 100%)",
  top: 0,
  borderRight: "var(--anchor-left, 1px solid)",
  borderLeft: "var(--anchor-right, 1px solid)",
  borderColor: theme.palette.divider,
  marginLeft:
    "var(--fixed, var(--anchor-left, -9999px)) var(--absolute, initial) var(--sticky, initial)",
  paddingLeft:
    "var(--fixed, var(--anchor-left, 9999px)) var(--absolute, initial) var(--sticky, initial)",
  marginRight:
    "var(--fixed, var(--anchor-right, -9999px)) var(--absolute, initial) var(--sticky, initial)",
  paddingRight:
    "var(--fixed, var(--anchor-right, 9999px)) var(--absolute, initial) var(--sticky, initial)",
  paddingTop: "var(--fixed, var(--Header-height))",
}));

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
      <InsetSidebarBody>{children}</InsetSidebarBody>
    </InsetSidebarRoot>
  );
});

export default InsetSidebar;
