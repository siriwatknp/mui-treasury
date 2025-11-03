import { ThemeComponents } from "../types";

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
        "& .MuiAutocomplete-inputRoot": {
          paddingTop: 2,
          paddingBottom: 2,
          paddingRight: 40,
          "&:has(.MuiChip-root)": {
            paddingLeft: "2px",
          },
          "& .MuiAutocomplete-input": {
            paddingBlock: 7.5,
          },
        },
        "& .MuiAutocomplete-inputRoot.MuiInputBase-sizeSmall": {
          paddingTop: 2,
          paddingBottom: 2,
          paddingLeft: 4,
          "& .MuiAutocomplete-input": {
            paddingBlock: 4.5,
          },
        },
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
      listbox: {
        padding: "6px",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      },
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
