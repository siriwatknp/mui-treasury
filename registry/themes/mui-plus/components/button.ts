import { ThemeComponents } from "../types";

export const buttonTheme: ThemeComponents = {
  MuiButtonBase: {
    styleOverrides: {
      root: ({ theme }) => ({
        "&& .MuiTouchRipple-child": {
          background: "color-mix(in oklch, currentColor, transparent 60%)",
        },
        "--Icon-color": "color-mix(in oklch, currentColor, transparent 12%)",
        "--Icon-size": "1lh",
        ...theme.applyStyles("dark", {
          "--Icon-color": "color-mix(in oklch, currentColor, transparent 30%)",
        }),
        "&:hover": {
          "--Icon-color": "currentColor",
        },
      }),
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        lineHeight: "1.25em",
        "&.Mui-focusVisible": {
          outline: "2px solid",
          outlineColor: (theme.vars || theme).palette.text.primary,
          outlineOffset: "2px",
        },
        "&:active": {
          transform: "scale(0.98)",
        },
        variants: [
          {
            props: { size: "medium" },
            style: {
              fontSize: "inherit",
              lineHeight: "inherit",
            },
          },
          {
            props: { color: "default" },
            style: {
              "&:hover, &:focus-visible": {
                color: (theme.vars || theme).palette.text.primary,
              },
            },
          },
        ],
      }),
    },
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        "--_g": "initial",
        gap: "var(--_g)",
        minWidth: "unset",
        textTransform: "capitalize",
        "&.Mui-focusVisible": {
          outline: "2px solid",
          outlineColor: (theme.vars || theme).palette.text.primary,
          outlineOffset: "2px",
        },
        "&:active": {
          transform: "scale(0.98)",
        },
        "&:not(:has(.MuiButton-icon))": {
          "--_g": `calc(${theme.spacing(1)} - 1px)`,
        },
        "@media (hover: hover)": {
          "&:disabled": {
            pointerEvents: "auto",
            cursor: "not-allowed",
          },
        },
        // When button contains only an icon (with or without TouchRipple)
        "&:has(> svg:only-child, > svg + .MuiTouchRipple-root)": {
          "--Icon-color": "currentColor",
          "&.MuiButton-sizeSmall": {
            padding: "4px",
            minWidth: "28px",
          },
          "&.MuiButton-sizeMedium": {
            padding: "8px",
            minWidth: "36px",
          },
          "&.MuiButton-sizeLarge": {
            padding: "12px",
            minWidth: "48px",
          },
          // Outlined variant needs to compensate for border
          "&.MuiButton-outlined": {
            "&.MuiButton-sizeSmall": {
              padding: "3px",
            },
            "&.MuiButton-sizeMedium": {
              padding: "7px",
            },
            "&.MuiButton-sizeLarge": {
              padding: "11px",
            },
          },
        },
        variants: [
          // Size variants
          {
            props: { size: "small" },
            style: {
              padding: "4px 12px",
              lineHeight: "20px",
            },
          },
          {
            props: { size: "medium" },
            style: {
              padding: "8px 16px",
              lineHeight: "20px",
            },
          },
          {
            props: { size: "large" },
            style: {
              padding: "12px 24px",
              lineHeight: "24px",
              fontSize: "1rem",
            },
          },
          // Outlined border compensation for all sizes
          {
            props: { variant: "outlined" },
            style: {
              "&.MuiButton-sizeSmall": {
                padding: "3px 12px",
              },
              "&.MuiButton-sizeMedium": {
                padding: "7px 16px",
              },
              "&.MuiButton-sizeLarge": {
                padding: "11px 24px",
              },
              "& .MuiTouchRipple-root": {
                inset: "-1px",
              },
            },
          },
          // Text variant uses custom text colors
          {
            props: { variant: "text" },
            style: {
              "&.MuiButton-colorSecondary": {
                "--variant-textColor": (theme.vars || theme).palette.secondary
                  .text,
              },
              "&.MuiButton-colorSuccess": {
                "--variant-textColor": (theme.vars || theme).palette.success
                  .text,
              },
              "&.MuiButton-colorError": {
                "--variant-textColor": (theme.vars || theme).palette.error.text,
              },
              "&.MuiButton-colorWarning": {
                "--variant-textColor": (theme.vars || theme).palette.warning
                  .text,
              },
              "&.MuiButton-colorInfo": {
                "--variant-textColor": (theme.vars || theme).palette.info.text,
              },
              color: "var(--variant-textColor)",
            },
          },
          // Outlined variant uses custom text colors and subtle borders
          {
            props: { variant: "outlined" },
            style: {
              "&.MuiButton-colorPrimary": {
                "--variant-outlinedBorder": `color-mix(in srgb, ${
                  (theme.vars || theme).palette.primary.main
                } 12%, transparent)`,
              },
              "&.MuiButton-colorSecondary": {
                "--variant-outlinedColor": (theme.vars || theme).palette
                  .secondary.text,
                "--variant-outlinedBorder": `color-mix(in srgb, ${
                  (theme.vars || theme).palette.secondary.text
                } 28%, transparent)`,
              },
              "&.MuiButton-colorSuccess": {
                "--variant-outlinedColor": (theme.vars || theme).palette.success
                  .text,
                "--variant-outlinedBorder": `color-mix(in srgb, ${
                  (theme.vars || theme).palette.success.text
                } 28%, transparent)`,
              },
              "&.MuiButton-colorError": {
                "--variant-outlinedColor": (theme.vars || theme).palette.error
                  .text,
                "--variant-outlinedBorder": `color-mix(in srgb, ${
                  (theme.vars || theme).palette.error.text
                } 28%, transparent)`,
              },
              "&.MuiButton-colorWarning": {
                "--variant-outlinedColor": (theme.vars || theme).palette.warning
                  .text,
                "--variant-outlinedBorder": `color-mix(in srgb, ${
                  (theme.vars || theme).palette.warning.text
                } 28%, transparent)`,
              },
              "&.MuiButton-colorInfo": {
                "--variant-outlinedColor": (theme.vars || theme).palette.info
                  .text,
                "--variant-outlinedBorder": `color-mix(in srgb, ${
                  (theme.vars || theme).palette.info.text
                } 28%, transparent)`,
              },
              color: "var(--variant-outlinedColor)",
              borderColor: "var(--variant-outlinedBorder)",
            },
          },
          // Contained variant for success, error, warning, info
          {
            props: { variant: "contained", color: "success" },
            style: {
              color: `color-mix(in oklch, ${
                (theme.vars || theme).palette.success.text
              }, ${(theme.vars || theme).palette.common.onBackground} 30%)`,
              backgroundColor: `color-mix(in oklch, ${
                (theme.vars || theme).palette.success.main
              }, ${(theme.vars || theme).palette.common.background} 60%)`,
            },
          },
          {
            props: { variant: "contained", color: "error" },
            style: {
              color: `color-mix(in oklch, ${
                (theme.vars || theme).palette.error.text
              }, ${(theme.vars || theme).palette.common.onBackground} 30%)`,
              backgroundColor: `color-mix(in oklch, ${
                (theme.vars || theme).palette.error.main
              }, ${(theme.vars || theme).palette.common.background} 60%)`,
            },
          },
          {
            props: { variant: "contained", color: "warning" },
            style: {
              color: `color-mix(in oklch, ${
                (theme.vars || theme).palette.warning.text
              }, ${(theme.vars || theme).palette.common.onBackground} 30%)`,
              backgroundColor: `color-mix(in oklch, ${
                (theme.vars || theme).palette.warning.main
              }, ${(theme.vars || theme).palette.common.background} 60%)`,
            },
          },
          {
            props: { variant: "contained", color: "info" },
            style: {
              color: `color-mix(in oklch, ${
                (theme.vars || theme).palette.info.text
              }, ${(theme.vars || theme).palette.common.onBackground} 30%)`,
              backgroundColor: `color-mix(in oklch, ${
                (theme.vars || theme).palette.info.main
              }, ${(theme.vars || theme).palette.common.background} 60%)`,
            },
          },
        ],
      }),
    },
  },
  MuiFab: {
    styleOverrides: {
      root: ({ theme }) => ({
        "&.Mui-focusVisible": {
          outline: "2px solid",
          outlineColor: (theme.vars || theme).palette.text.primary,
          outlineOffset: "2px",
        },
        "&:active": {
          transform: "scale(0.98)",
        },
      }),
    },
  },
};
