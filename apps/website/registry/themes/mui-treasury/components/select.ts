import { filledInputClasses } from '@mui/material/FilledInput';
import { inputBaseClasses } from '@mui/material/InputBase';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { selectClasses } from '@mui/material/Select';

import {
  CONTROL_HEIGHTS,
  CONTROL_TOUCH_HEIGHTS,
  TOUCH_MEDIA_QUERY,
} from '../scales';
import { ThemeComponents } from '../types';

export const selectTheme: ThemeComponents = {
  MuiSelect: {
    styleOverrides: {
      root: {
        [`&.${outlinedInputClasses.root}.MuiInputBase-sizeLarge`]: {
          [`& .${selectClasses.select}`]: {
            paddingBlock: CONTROL_HEIGHTS.lg / 2 - 12,
            ...(CONTROL_HEIGHTS.lg !== CONTROL_TOUCH_HEIGHTS.lg && {
              [TOUCH_MEDIA_QUERY]: {
                paddingBlock: CONTROL_TOUCH_HEIGHTS.lg / 2 - 11.5,
              },
            }),
          },
        },
      },
      select: {
        minHeight: '1.5em',
        [`&.${outlinedInputClasses.input}`]: {
          paddingBlock: CONTROL_HEIGHTS.md / 2 - 10,
          paddingInline: 14,
          minHeight: '1.42857em', // 20px
          ...(CONTROL_HEIGHTS.md !== CONTROL_TOUCH_HEIGHTS.md && {
            [TOUCH_MEDIA_QUERY]: {
              paddingBlock: CONTROL_TOUCH_HEIGHTS.md / 2 - 11.5,
            },
          }),
          [`.${inputBaseClasses.sizeSmall} > &`]: {
            paddingBlock: CONTROL_HEIGHTS.sm / 2 - 10,
            paddingInline: 12,
            ...(CONTROL_HEIGHTS.sm !== CONTROL_TOUCH_HEIGHTS.sm && {
              [TOUCH_MEDIA_QUERY]: {
                paddingBlock: CONTROL_TOUCH_HEIGHTS.sm / 2 - 11.5,
              },
            }),
          },
        },
        [`&.${filledInputClasses.input}`]: {
          paddingTop: CONTROL_HEIGHTS.md / 2 + 5,
          paddingInline: 12,
          paddingBottom: CONTROL_HEIGHTS.md / 2 - 12,
          ...(CONTROL_HEIGHTS.md !== CONTROL_TOUCH_HEIGHTS.md && {
            [TOUCH_MEDIA_QUERY]: {
              paddingTop: CONTROL_TOUCH_HEIGHTS.md / 2 + 5,
              paddingBottom: CONTROL_TOUCH_HEIGHTS.md / 2 - 12,
            },
          }),
          [`.${inputBaseClasses.sizeSmall} > &`]: {
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
        [`&.${inputBaseClasses.input}.${inputBaseClasses.input}`]: {
          paddingRight: 32,
        },
      },
      icon: ({ theme }) => ({
        color: (theme.vars || theme).palette.text.secondary,
        right: 8,
        transition: theme.transitions.create(['transform'], {
          duration: theme.transitions.duration.shorter,
        }),
      }),
      iconOpen: {
        transform: 'rotate(180deg)',
      },
    },
  },
};
