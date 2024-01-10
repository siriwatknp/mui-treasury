import { createTheme } from "@mui/material/styles";

export const HEADER_ID = "header";
export type HEADER_ID = typeof HEADER_ID;
export const CONTENT_ID = "content";
export type CONTENT_ID = typeof CONTENT_ID;
export const FOOTER_ID = "footer";
export type FOOTER_ID = typeof FOOTER_ID;
export const LEFT_EDGE_SIDEBAR_ID = "leftEdgeSidebar";
export type LEFT_EDGE_SIDEBAR_ID = typeof LEFT_EDGE_SIDEBAR_ID;
export const RIGHT_EDGE_SIDEBAR_ID = "rightEdgeSidebar";
export type RIGHT_EDGE_SIDEBAR_ID = typeof RIGHT_EDGE_SIDEBAR_ID;
export type EDGE_SIDEBAR_ID = LEFT_EDGE_SIDEBAR_ID | RIGHT_EDGE_SIDEBAR_ID;
export const EDGE_SIDEBAR_EXPAND_DELAY = 350;
export const CSS_TRANSITION =
  "all 225ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, color 0s";
export const DEFAULT_THEME = createTheme();
