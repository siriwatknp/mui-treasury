import {
  CONTROL_HEIGHTS,
  CONTROL_TOUCH_HEIGHTS,
  TOUCH_MEDIA_QUERY,
} from "../scales";
import { ThemeComponents } from "../types";

declare module "@mui/material/Autocomplete" {
  interface AutocompletePropsSizeOverrides {
    large: true;
  }
}

export const autocompleteTheme: ThemeComponents = {
  MuiAutocomplete: {
    defaultProps: {
      slotProps: {
        paper: {
          elevation: 8,
        },
      },
    },
    styleOverrides: {
      root: {
        variants: [
          {
            props: { size: "medium" },
            style: {
              "& .MuiAutocomplete-inputRoot": {
                paddingTop: 2,
                paddingBottom: 2,
                paddingRight: 40,
                "&:has(.MuiChip-root)": {
                  paddingLeft: "2px",
                },
                "& .MuiAutocomplete-input": {
                  paddingBlock: CONTROL_HEIGHTS.md / 2 - 12.5,
                  ...(CONTROL_HEIGHTS.md !== CONTROL_TOUCH_HEIGHTS.md && {
                    [TOUCH_MEDIA_QUERY]: {
                      paddingBlock: CONTROL_TOUCH_HEIGHTS.md / 2 - 14,
                    },
                  }),
                },
              },
            },
          },
          {
            props: { size: "small" },
            style: {
              "& .MuiAutocomplete-inputRoot.MuiInputBase-sizeSmall": {
                paddingTop: 2,
                paddingBottom: 2,
                paddingLeft: 2,
                "& .MuiAutocomplete-input": {
                  paddingBlock: CONTROL_HEIGHTS.sm / 2 - 12.5,
                  ...(CONTROL_HEIGHTS.sm !== CONTROL_TOUCH_HEIGHTS.sm && {
                    [TOUCH_MEDIA_QUERY]: {
                      paddingBlock: CONTROL_TOUCH_HEIGHTS.sm / 2 - 14,
                    },
                  }),
                },
              },
            },
          },
          {
            props: { size: "large" },
            style: {
              "& .MuiAutocomplete-inputRoot": {
                paddingTop: 4,
                paddingBottom: 4,
                paddingLeft: 12,
                "&:has(.MuiChip-root)": {
                  paddingLeft: 4,
                },
                "& .MuiAutocomplete-input": {
                  paddingBlock: CONTROL_HEIGHTS.lg / 2 - 14.5,
                  ...(CONTROL_HEIGHTS.lg !== CONTROL_TOUCH_HEIGHTS.lg && {
                    [TOUCH_MEDIA_QUERY]: {
                      paddingBlock: CONTROL_TOUCH_HEIGHTS.lg / 2 - 16,
                    },
                  }),
                },
              },
            },
          },
        ],
      },
      tag: {
        margin: 2,
      },
      option: ({ theme }) => ({
        fontSize: theme.typography.body2.fontSize,
        padding: "6px",
        borderRadius: 4,
      }),
      paper: ({ theme }) => ({
        marginTop: 4,
        borderRadius: 8,
        border: `1px solid ${(theme.vars || theme).palette.divider}`,
      }),
      listbox: ({ theme }) => ({
        padding: "6px",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        "& .MuiAutocomplete-option": {
          minHeight: 40,
          [theme.breakpoints.up("sm")]: {
            minHeight: "auto",
          },
        },
      }),
      noOptions: ({ theme }) => ({
        fontSize: theme.typography.body2.fontSize,
        color: (theme.vars || theme).palette.text.secondary,
      }),
      loading: ({ theme }) => ({
        fontSize: theme.typography.body2.fontSize,
        color: (theme.vars || theme).palette.text.secondary,
      }),
      clearIndicator: {
        borderRadius: 4,
      },
      popupIndicator: {
        borderRadius: 4,
        variants: [
          {
            props: { size: "small" },
            style: {
              marginRight: -5,
            },
          },
        ],
      },
    },
  },
};
