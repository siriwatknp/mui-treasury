"use client";
import { unstable_createBreakpoints as createBreakpoints } from "@mui/material/styles";
import { ThemeOptions } from "./types";

const breakpoints = createBreakpoints({});

// Responsive heading styles extracted from tailwind-prose configuration
const h1Styles = {
  "--_fs": "2.25rem",
  "--_lh": "1.11111111",
  fontWeight: 800,
  fontSize: "var(--_fs)",
  lineHeight: "var(--_lh)",
  [breakpoints.up("sm")]: {
    "--_fs": "3rem",
    "--_lh": "1",
  },
  [breakpoints.up("md")]: {
    "--_fs": "3.5rem",
  },
  [breakpoints.up("xl")]: {
    "--_fs": "4rem",
  },
};

const h2Styles = {
  "--_fs": "1.5rem",
  "--_lh": "1.5",
  fontWeight: 700,
  fontSize: "var(--_fs)",
  lineHeight: "var(--_lh)",
  [breakpoints.up("sm")]: {
    "--_fs": "1.875rem",
  },
  [breakpoints.up("md")]: {
    "--_fs": "2.25rem",
    "--_lh": "1.11111111",
  },
  [breakpoints.up("xl")]: {
    "--_fs": "3rem",
    "--_lh": "1.08333",
  },
};

const h3Styles = {
  "--_fs": "1.25rem",
  "--_lh": "1.6",
  fontWeight: 600,
  fontSize: "var(--_fs)",
  lineHeight: "var(--_lh)",
  [breakpoints.up("sm")]: {
    "--_fs": "1.5rem",
    "--_lh": "1.5",
  },
  [breakpoints.up("md")]: {
    "--_fs": "1.875rem",
    "--_lh": "1.33333",
  },
  [breakpoints.up("xl")]: {
    "--_fs": "2.25rem",
    "--_lh": "1.22222",
  },
};

const h4Styles = {
  "--_fs": "1.125rem",
  "--_lh": "1.55556",
  fontWeight: 600,
  fontSize: "var(--_fs)",
  lineHeight: "var(--_lh)",
  [breakpoints.up("sm")]: {
    "--_fs": "1.25rem",
    "--_lh": "1.55556",
  },
  [breakpoints.up("md")]: {
    "--_lh": "1.6",
  },
  [breakpoints.up("xl")]: {
    "--_lh": "1.5",
  },
};

export const typography: ThemeOptions["typography"] = {
  fontFamily:
    'var(--font-primary, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif)',
  h1: h1Styles,
  h2: h2Styles,
  h3: h3Styles,
  h4: h4Styles,
  h5: h4Styles, // use h4 styles since h5 is rarely used
  h6: h4Styles, // use h4 styles since h6 is rarely used
  body2: {
    lineHeight: "1.4285714286",
  },
  button: {
    lineHeight: "20px",
    textTransform: "capitalize",
  },
};
