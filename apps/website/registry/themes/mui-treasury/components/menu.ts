import { ThemeComponents } from "../types";

export const menuTheme: ThemeComponents = {
  MuiMenu: {
    defaultProps: {
      PaperProps: {
        elevation: 0,
        variant: "outlined",
      },
    },
    styleOverrides: {
      paper: ({ theme }) => ({
        marginTop: 4,
        borderRadius: 8,
        border: `1px solid ${(theme.vars || theme).palette.divider}`,
        boxShadow: (theme.vars || theme).shadows[8],
      }),
      list: {
        padding: "6px",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontSize: theme.typography.body2.fontSize,
        padding: "6px",
        borderRadius: 4,
        minHeight: 40,
        margin: 0,
        transition: theme.transitions.create(["background-color"], {
          duration: theme.transitions.duration.shortest,
        }),
        "&:hover": {
          backgroundColor: (theme.vars || theme).palette.action.hover,
        },
        "&.Mui-selected": {
          backgroundColor: (theme.vars || theme).palette.action.selected,
          "&:hover": {
            backgroundColor: (theme.vars || theme).palette.action.selected,
          },
        },
        "&.Mui-focusVisible": {
          backgroundColor: (theme.vars || theme).palette.action.focus,
        },
        variants: [
          {
            props: { dense: true },
            style: {
              padding: "4px 8px",
            },
          },
        ],
      }),
    },
  },
};
