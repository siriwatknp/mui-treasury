import { ThemeComponents } from "../types";

export const svgIconTheme: ThemeComponents = {
  MuiSvgIcon: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: `var(--Icon-color, ${(theme.vars || theme).palette.text.icon})`,
        variants: [
          {
            props: { fontSize: "small" },
            style: {
              fontSize: "var(--Icon-size, 1.125rem)", // 18px
            },
          },
          {
            props: { fontSize: "medium" },
            style: {
              fontSize: "var(--Icon-size, 1.25rem)", // 20px
            },
          },
          {
            props: { fontSize: "large" },
            style: {
              fontSize: "var(--Icon-size, 2rem)", // 32px
            },
          },
          {
            props: { color: "primary" },
            style: {
              "--Icon-color": (theme.vars || theme).palette.primary.main,
            },
          },
          {
            props: { color: "secondary" },
            style: {
              "--Icon-color": (theme.vars || theme).palette.secondary.main,
            },
          },
          {
            props: { color: "success" },
            style: {
              "--Icon-color": (theme.vars || theme).palette.success.main,
            },
          },
          {
            props: { color: "error" },
            style: {
              "--Icon-color": (theme.vars || theme).palette.error.main,
            },
          },
          {
            props: { color: "warning" },
            style: {
              "--Icon-color": (theme.vars || theme).palette.warning.main,
            },
          },
          {
            props: { color: "info" },
            style: {
              "--Icon-color": (theme.vars || theme).palette.info.main,
            },
          },
        ],
      }),
    },
  },
};
