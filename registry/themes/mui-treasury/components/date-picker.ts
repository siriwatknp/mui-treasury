import type {} from "@mui/x-date-pickers/themeAugmentation";
import type {} from "@mui/x-date-pickers-pro/themeAugmentation";
import {
  CONTROL_HEIGHTS,
  CONTROL_TOUCH_HEIGHTS,
  TOUCH_MEDIA_QUERY,
} from "../scales";
import { ThemeComponents } from "../types";

export const datePickerTheme: ThemeComponents = {
  MuiPickersTextField: {
    defaultProps: {
      variant: "outlined",
    },
    styleOverrides: {
      root: ({ theme }) => ({
        variants: [
          {
            props: { variant: "outlined" },
            style: {
              "& .MuiFormLabel-root, & .MuiInputLabel-root.MuiInputLabel-shrink":
                {
                  position: "static",
                  transform: "none",
                  pointerEvents: "auto",
                  marginBottom: "0.25rem",
                  maxWidth: "unset",
                  fontWeight: 500,
                  lineHeight: 1.5,
                  color: (theme.vars || theme).palette.text.primary,
                },
              "& .MuiPickersSectionList-root": {
                paddingBlock: CONTROL_HEIGHTS.md / 2 - 10.5,
                ...(CONTROL_HEIGHTS.md !== CONTROL_TOUCH_HEIGHTS.md && {
                  [TOUCH_MEDIA_QUERY]: {
                    paddingBlock: CONTROL_TOUCH_HEIGHTS.md / 2 - 10.5,
                  },
                }),
              },
              "& .MuiPickersSectionList-section": {
                lineHeight: 1.5,
              },
              "& .MuiIconButton-root": {
                "&:hover": {
                  color: (theme.vars || theme).palette.text.primary,
                  backgroundColor: "transparent",
                },
              },
              // size small
              "& .MuiPickersInputBase-inputSizeSmall": {
                "& .MuiPickersSectionList-root": {
                  paddingBlock: CONTROL_HEIGHTS.sm / 2 - 10.5,
                  ...(CONTROL_HEIGHTS.sm !== CONTROL_TOUCH_HEIGHTS.sm && {
                    [TOUCH_MEDIA_QUERY]: {
                      paddingBlock: CONTROL_TOUCH_HEIGHTS.sm / 2 - 10.5,
                    },
                  }),
                },
                "& .MuiIconButton-root": {
                  padding: "4px",
                },
              },
              "&&& .MuiPickersInputBase-input": {
                "&::-webkit-input-placeholder": {
                  opacity: "0.42 !important",
                },
                "&::-moz-placeholder": {
                  opacity: "0.42 !important",
                },
                "&::-ms-input-placeholder": {
                  opacity: "0.42 !important",
                },
              },
              "&& .MuiPickersOutlinedInput-notchedOutline": {
                transition: "none",
                "& legend": {
                  width: 0,
                },
              },
            },
          },
          {
            props: { variant: "outlined", size: "small" },
            style: {
              "& .MuiPickersInputBase-input:where(input)": {
                paddingBlock: CONTROL_HEIGHTS.sm / 2 - 10.5,
                paddingInline: 12,
                ...(CONTROL_HEIGHTS.sm !== CONTROL_TOUCH_HEIGHTS.sm && {
                  [TOUCH_MEDIA_QUERY]: {
                    paddingBlock: CONTROL_TOUCH_HEIGHTS.sm / 2 - 10.5,
                  },
                }),
              },
            },
          },
        ],
      }),
    },
  },
  MuiPickersInputBase: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontSize: theme.typography.body2.fontSize,
        variants: [
          {
            props: { size: "small" },
            style: {
              fontSize: theme.typography.body2.fontSize,
            },
          },
        ],
      }),
    },
  },
  MuiPickersDay: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: (theme.vars || theme).shape.borderRadius,
        "&.MuiPickersDay-today": {
          border: `1px solid ${(theme.vars || theme).palette.primary.main}`,
          "&:not(.Mui-selected)": {
            backgroundColor: "transparent",
          },
        },
      }),
    },
  },
  MuiPickersCalendarHeader: {
    styleOverrides: {
      root: {
        "& .MuiPickersCalendarHeader-label": {
          fontWeight: 500,
        },
      },
      switchViewButton: {
        marginRight: 0,
      },
    },
  },
  MuiPickersToolbar: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
      }),
    },
  },
  MuiPickerPopper: {
    styleOverrides: {
      paper: ({ theme }) => ({
        marginTop: 8,
        border: `1px solid ${(theme.vars || theme).palette.divider}`,
      }),
    },
  },
  MuiPickersSectionList: {
    styleOverrides: {
      root: {
        "&.MuiPickersInputBase-sectionsContainer": {
          opacity: 1,
        },
      },
    },
  },
};
