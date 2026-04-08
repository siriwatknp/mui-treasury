import type {} from "@mui/x-data-grid/themeAugmentation";
import { ThemeComponents } from "../types";

export const dataGridTheme: ThemeComponents = {
  MuiDataGrid: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${(theme.vars || theme).palette.divider}`,
        backgroundColor: (theme.vars || theme).palette.background.paper,
      }),
      cell: ({ theme }) => ({
        borderBottomColor: (theme.vars || theme).palette.divider,
        fontSize: theme.typography.body2.fontSize,
        padding: "0 16px",
        "&:focus": {
          outline: "none",
        },
        "&:focus-within": {
          outline: `2px solid ${(theme.vars || theme).palette.primary.main}`,
          outlineOffset: -2,
        },
      }),
      columnHeader: ({ theme }) => ({
        backgroundColor: `color-mix(in srgb, ${
          (theme.vars || theme).palette.secondary.main
        }, ${(theme.vars || theme).palette.common.background} 60%)`,
        borderBottomColor: (theme.vars || theme).palette.divider,
        fontSize: theme.typography.body2.fontSize,
        fontWeight: 600,
        color: (theme.vars || theme).palette.text.primary,
        "&:focus": {
          outline: "none",
        },
        "&:focus-within": {
          outline: `2px solid ${(theme.vars || theme).palette.primary.main}`,
          outlineOffset: -2,
        },
      }),
      columnSeparator: ({ theme }) => ({
        color: (theme.vars || theme).palette.divider,
      }),
      menuIconButton: {
        opacity: 0.5,
        "&:hover": {
          opacity: 1,
        },
      },
      iconButtonContainer: {
        "& .MuiIconButton-root": {
          padding: 4,
        },
      },
      row: ({ theme }) => ({
        "&:hover": {
          backgroundColor: (theme.vars || theme).palette.action.hover,
        },
        "&.Mui-selected": {
          backgroundColor: (theme.vars || theme).palette.action.selected,
          "&:hover": {
            backgroundColor: (theme.vars || theme).palette.action.selected,
          },
        },
      }),
      footerContainer: ({ theme }) => ({
        borderTop: `1px solid ${(theme.vars || theme).palette.divider}`,
        minHeight: 52,
      }),
      checkboxInput: {
        padding: 4,
      },
      columnHeaderTitle: {
        fontWeight: 600,
      },
      toolbarContainer: ({ theme }) => ({
        padding: "16px",
        gap: 16,
        borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
      }),
      virtualScroller: {
        "&::-webkit-scrollbar": {
          width: "8px",
          height: "8px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          borderRadius: "4px",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          },
        },
      },
      overlayWrapper: {
        minHeight: 240,
      },
      overlay: ({ theme }) => ({
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        ...theme.applyStyles("dark", {
          backgroundColor: "rgba(0, 0, 0, 0.9)",
        }),
      }),
    },
  },
};
