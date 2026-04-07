import { ThemeComponents } from "../types";

export const cardTheme: ThemeComponents = {
  MuiCard: {
    defaultProps: {
      variant: "outlined",
    },
    styleOverrides: {
      root: ({ theme }) => ({
        transition: theme.transitions.create(["box-shadow", "border-color"], {
          duration: theme.transitions.duration.short,
        }),
        "&:hover": {
          boxShadow: theme.shadows[4],
        },
      }),
    },
  },
  MuiCardHeader: {
    styleOverrides: {
      root: {
        padding: 16,
      },
      title: ({ theme }) => ({
        ...theme.typography.subtitle1,
        fontWeight: 500,
      }),
      subheader: ({ theme }) => ({
        ...theme.typography.body2,
      }),
      action: {
        marginTop: 0,
        marginRight: 0,
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: 16,
        "&:last-child": {
          paddingBottom: 16,
        },
      },
    },
  },
  MuiCardActions: {
    defaultProps: {
      disableSpacing: true,
    },
    styleOverrides: {
      root: {
        padding: 16,
        gap: 8,
      },
    },
  },
};
