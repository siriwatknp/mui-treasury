import { ThemeComponents } from "../types";

export const dialogTheme: ThemeComponents = {
  MuiDialog: {
    styleOverrides: {
      root: ({ theme }) => ({
        "--_spacing-row": "16px",
        "--_spacing-col": "20px",
        "--_edge": "16px",
        [theme.breakpoints.up("md")]: {
          "--_spacing-row": "20px",
          "--_spacing-col": "24px",
        },
      }),
      paper: ({ theme }) => ({
        "&:not(.MuiDialog-paperFullScreen)": {
          borderRadius: theme.shape.borderRadius,
          boxShadow: theme.shadows[8],
          width: "calc(100% - var(--_edge))",
          margin: "var(--_edge)",
        },
      }),
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        padding: "var(--_spacing-row) var(--_spacing-col)",
        fontSize: "1.25rem",
        fontWeight: 500,
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: "0 var(--_spacing-col) var(--_spacing-row)",
      },
      dividers: ({ theme }) => ({
        padding: "var(--_spacing-row) var(--_spacing-col)",
        borderTop: "1px solid",
        borderBottom: "1px solid",
        borderColor: (theme.vars || theme).palette.divider,
      }),
    },
  },
  MuiDialogActions: {
    defaultProps: {
      disableSpacing: true,
    },
    styleOverrides: {
      root: {
        padding: "0px var(--_spacing-col) var(--_spacing-row)",
        gap: 8,
        ".MuiDialogContent-dividers + &": {
          paddingTop: "var(--_spacing-row)",
        },
      },
    },
  },
  MuiDialogContentText: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.vars.palette.text.secondary,
        marginBottom: 0,
      }),
    },
  },
};
