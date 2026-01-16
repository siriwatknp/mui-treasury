import {
  CONTROL_HEIGHTS,
  CONTROL_TOUCH_HEIGHTS,
  TOUCH_MEDIA_QUERY,
} from "../scales";
import { ThemeComponents } from "../types";

export const selectTheme: ThemeComponents = {
  MuiSelect: {
    defaultProps: {
      variant: "outlined",
    },
    styleOverrides: {
      select: {
        "&.MuiOutlinedInput-input": {
          paddingBlock: CONTROL_HEIGHTS.md / 2 - 10,
          paddingInline: 14,
          minHeight: "1.42857em", // 20px
          ...(CONTROL_HEIGHTS.md !== CONTROL_TOUCH_HEIGHTS.md && {
            [TOUCH_MEDIA_QUERY]: {
              paddingBlock: CONTROL_TOUCH_HEIGHTS.md / 2 - 10,
            },
          }),
          "&.MuiInputBase-inputSizeSmall": {
            paddingBlock: CONTROL_HEIGHTS.sm / 2 - 10,
            paddingInline: 12,
            ...(CONTROL_HEIGHTS.sm !== CONTROL_TOUCH_HEIGHTS.sm && {
              [TOUCH_MEDIA_QUERY]: {
                paddingBlock: CONTROL_TOUCH_HEIGHTS.sm / 2 - 10,
              },
            }),
          },
        },
        "&.MuiFilledInput-input": {
          paddingTop: CONTROL_HEIGHTS.md / 2 + 5,
          paddingInline: 12,
          paddingBottom: CONTROL_HEIGHTS.md / 2 - 12,
          ...(CONTROL_HEIGHTS.md !== CONTROL_TOUCH_HEIGHTS.md && {
            [TOUCH_MEDIA_QUERY]: {
              paddingTop: CONTROL_TOUCH_HEIGHTS.md / 2 + 5,
              paddingBottom: CONTROL_TOUCH_HEIGHTS.md / 2 - 12,
            },
          }),
          "&.MuiInputBase-inputSizeSmall": {
            paddingTop: CONTROL_HEIGHTS.sm / 2 + 4,
            paddingInline: 10,
            paddingBottom: CONTROL_HEIGHTS.sm / 2 - 13,
            ...(CONTROL_HEIGHTS.sm !== CONTROL_TOUCH_HEIGHTS.sm && {
              [TOUCH_MEDIA_QUERY]: {
                paddingTop: CONTROL_TOUCH_HEIGHTS.sm / 2 + 4,
                paddingBottom: CONTROL_TOUCH_HEIGHTS.sm / 2 - 13,
              },
            }),
          },
        },
        "&.MuiInputBase-input.MuiInputBase-input": {
          paddingRight: 32,
        },
      },
      icon: ({ theme }) => ({
        color: (theme.vars || theme).palette.text.secondary,
        right: 8,
        transition: theme.transitions.create(["transform"], {
          duration: theme.transitions.duration.shorter,
        }),
      }),
      iconOpen: {
        transform: "rotate(180deg)",
      },
    },
  },
};
