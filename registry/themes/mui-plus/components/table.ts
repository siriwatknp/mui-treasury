import { ThemeComponents } from "../types";

export const tableTheme: ThemeComponents = {
  MuiTable: {
    styleOverrides: {
      root: {
        tableLayout: "fixed",
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderBottomColor: (theme.vars || theme).palette.divider,
        fontSize: theme.typography.body2.fontSize,
        padding: "14px 24px 14px 12px",
      }),
      head: ({ theme }) => ({
        fontWeight: 600,
        color: (theme.vars || theme).palette.text.primary,
        backgroundColor: `color-mix(in srgb, ${
          (theme.vars || theme).palette.secondary.main
        }, ${(theme.vars || theme).palette.common.background} 60%)`,
      }),
      sizeSmall: {
        padding: "6px 16px 6px 12px",
      },
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: ({ theme }) => ({
        "tbody > &:last-child td, tbody > &:last-child th": {
          borderBottom: 0,
        },
        "&.MuiTableRow-hover:hover": {
          backgroundColor: (theme.vars || theme).palette.action.hover,
        },
        "&.Mui-selected": {
          backgroundColor: (theme.vars || theme).palette.action.selected,
          "&:hover": {
            backgroundColor: (theme.vars || theme).palette.action.selected,
          },
        },
      }),
    },
  },
  MuiTableContainer: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${(theme.vars || theme).palette.divider}`,
      }),
    },
  },
  MuiTablePagination: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderTop: `1px solid ${(theme.vars || theme).palette.divider}`,
      }),
      select: ({ theme }) => ({
        fontSize: theme.typography.body2.fontSize,
      }),
      selectLabel: ({ theme }) => ({
        fontSize: theme.typography.body2.fontSize,
      }),
      displayedRows: ({ theme }) => ({
        fontSize: theme.typography.body2.fontSize,
      }),
    },
  },
  MuiTableSortLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontWeight: 600,
        "&:hover": {
          color: (theme.vars || theme).palette.text.primary,
        },
        "&.Mui-active": {
          color: (theme.vars || theme).palette.text.primary,
        },
      }),
      icon: ({ theme }) => ({
        fontSize: "1.125rem",
        color: (theme.vars || theme).palette.text.secondary,
      }),
    },
  },
};
