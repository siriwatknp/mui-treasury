import { ThemeComponents } from "../types";

export const chipTheme: ThemeComponents = {
  MuiChip: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 6,
        fontWeight: 400,
        fontSize: theme.typography.body2.fontSize,
        "&.Mui-focusVisible": {
          outline: "2px solid",
          outlineColor: (theme.vars || theme).palette.text.primary,
          outlineOffset: "2px",
        },
        variants: [
          {
            props: { variant: "outlined", color: "primary" },
            style: {
              color: (theme.vars || theme).palette.primary.text,
            },
          },
          {
            props: { variant: "outlined", color: "secondary" },
            style: {
              color: (theme.vars || theme).palette.secondary.text,
            },
          },
          {
            props: { variant: "outlined", color: "success" },
            style: {
              color: (theme.vars || theme).palette.success.text,
            },
          },
          {
            props: { variant: "outlined", color: "error" },
            style: {
              color: (theme.vars || theme).palette.error.text,
            },
          },
          {
            props: { variant: "outlined", color: "warning" },
            style: {
              color: (theme.vars || theme).palette.warning.text,
            },
          },
          {
            props: { variant: "outlined", color: "info" },
            style: {
              color: (theme.vars || theme).palette.info.text,
            },
          },
          // Filled variant for success, error, warning, info
          {
            props: { variant: "filled" },
            style: {
              ...theme.applyStyles("dark", {
                "--_p": "60%",
              }),
            },
          },
          {
            props: { variant: "filled", color: "success" },
            style: {
              color: `color-mix(in oklch, ${
                (theme.vars || theme).palette.success.text
              }, ${(theme.vars || theme).palette.common.onBackground} 30%)`,
              backgroundColor: `color-mix(in oklch, ${
                (theme.vars || theme).palette.success.main
              }, ${
                (theme.vars || theme).palette.common.background
              } var(--_p, 80%))`,
            },
          },
          {
            props: { variant: "filled", color: "error" },
            style: {
              color: `color-mix(in oklch, ${
                (theme.vars || theme).palette.error.text
              }, ${(theme.vars || theme).palette.common.onBackground} 30%)`,
              backgroundColor: `color-mix(in oklch, ${
                (theme.vars || theme).palette.error.main
              }, ${
                (theme.vars || theme).palette.common.background
              } var(--_p, 80%))`,
            },
          },
          {
            props: { variant: "filled", color: "warning" },
            style: {
              color: `color-mix(in oklch, ${
                (theme.vars || theme).palette.warning.text
              }, ${(theme.vars || theme).palette.common.onBackground} 30%)`,
              backgroundColor: `color-mix(in oklch, ${
                (theme.vars || theme).palette.warning.main
              }, ${
                (theme.vars || theme).palette.common.background
              } var(--_p, 80%))`,
            },
          },
          {
            props: { variant: "filled", color: "info" },
            style: {
              color: `color-mix(in oklch, ${
                (theme.vars || theme).palette.info.text
              }, ${(theme.vars || theme).palette.common.onBackground} 30%)`,
              backgroundColor: `color-mix(in oklch, ${
                (theme.vars || theme).palette.info.main
              }, ${
                (theme.vars || theme).palette.common.background
              } var(--_p, 80%))`,
            },
          },
          {
            props: { clickable: true },
            style: {
              "&:active": {
                transform: "scale(0.98)",
              },
            },
          },
        ],
      }),
      icon: {
        fontSize: "1.125rem",
        variants: [
          {
            props: { size: "small" },
            style: {
              fontSize: "1rem",
            },
          },
        ],
      },
      deleteIcon: ({ theme }) => ({
        "&:active": {
          transform: "scale(0.97)",
        },
        variants: [
          {
            props: { color: "default" },
            style: {
              color: (theme.vars || theme).palette.text.icon,
              "&:hover": {
                color: (theme.vars || theme).palette.text.secondary,
              },
            },
          },
        ],
      }),
    },
  },
};
