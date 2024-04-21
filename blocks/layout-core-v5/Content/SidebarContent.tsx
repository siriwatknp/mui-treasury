import React from "react";
import { styled, Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";

const SidebarContentRoot = styled("div", {
  name: "AppSidebarContent",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})({
  minHeight: 0,
  flexGrow: 1,
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
});

type Props = JSX.IntrinsicElements["div"];
export type SidebarContentClassKey = "root";
export interface SidebarContentProps extends Props {
  sx?: SxProps<Theme>;
}

export const SidebarContent = (props: SidebarContentProps) => {
  return <SidebarContentRoot {...props} />;
};
