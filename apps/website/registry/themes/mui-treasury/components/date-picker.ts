import { formLabelClasses } from '@mui/material/FormLabel';
import { iconButtonClasses } from '@mui/material/IconButton';
import { inputLabelClasses } from '@mui/material/InputLabel';
import {
  pickersInputBaseClasses,
  pickersOutlinedInputClasses,
} from '@mui/x-date-pickers';
import { pickerDayClasses } from '@mui/x-date-pickers/PickerDay';
import { pickersCalendarHeaderClasses } from '@mui/x-date-pickers/PickersCalendarHeader';
import { pickersSectionListClasses } from '@mui/x-date-pickers/PickersSectionList';
import type {} from '@mui/x-date-pickers/themeAugmentation';

import {
  CONTROL_HEIGHTS,
  CONTROL_TOUCH_HEIGHTS,
  TOUCH_MEDIA_QUERY,
} from '../scales';
import { ThemeComponents } from '../types';

export const datePickerTheme: ThemeComponents = {
  MuiPickersTextField: {
    defaultProps: {
      variant: 'outlined',
    },
    styleOverrides: {
      root: ({ theme }) => ({
        variants: [
          {
            props: { variant: 'outlined' },
            style: {
              [`& .${formLabelClasses.root}, & .${inputLabelClasses.root}.${inputLabelClasses.shrink}`]:
                {
                  position: 'static',
                  transform: 'none',
                  pointerEvents: 'auto',
                  marginBottom: '0.25rem',
                  maxWidth: 'unset',
                  fontWeight: 500,
                  lineHeight: 1.5,
                  color: (theme.vars || theme).palette.text.primary,
                },
              [`& .${pickersSectionListClasses.root}`]: {
                paddingBlock: CONTROL_HEIGHTS.md / 2 - 10.5,
                ...(CONTROL_HEIGHTS.md !== CONTROL_TOUCH_HEIGHTS.md && {
                  [TOUCH_MEDIA_QUERY]: {
                    paddingBlock: CONTROL_TOUCH_HEIGHTS.md / 2 - 10.5,
                  },
                }),
              },
              [`& .${pickersSectionListClasses.section}`]: {
                lineHeight: 1.5,
              },
              [`& .${iconButtonClasses.root}`]: {
                '&:hover': {
                  color: (theme.vars || theme).palette.text.primary,
                  backgroundColor: 'transparent',
                },
              },
              [`&&& .${pickersInputBaseClasses.input}`]: {
                '&::-webkit-input-placeholder': {
                  opacity: '0.42 !important',
                },
                '&::-moz-placeholder': {
                  opacity: '0.42 !important',
                },
                '&::-ms-input-placeholder': {
                  opacity: '0.42 !important',
                },
              },
              [`&& .${pickersOutlinedInputClasses.notchedOutline}`]: {
                transition: 'none',
                '& legend': {
                  width: 0,
                },
              },
            },
          },
          {
            props: { variant: 'outlined', size: 'small' },
            style: {
              [`& .${pickersOutlinedInputClasses.root}`]: {
                paddingLeft: 12,
              },
              [`& .${pickersSectionListClasses.root}`]: {
                paddingBlock: CONTROL_HEIGHTS.sm / 2 - 10.5,
                ...(CONTROL_HEIGHTS.sm !== CONTROL_TOUCH_HEIGHTS.sm && {
                  [TOUCH_MEDIA_QUERY]: {
                    paddingBlock: CONTROL_TOUCH_HEIGHTS.sm / 2 - 10.5,
                  },
                }),
              },
              [`& .${iconButtonClasses.root}`]: {
                padding: '4px',
              },
            },
          },
          {
            props: { variant: 'outlined', size: 'large' },
            style: {
              [`& .${pickersOutlinedInputClasses.root}`]: {
                fontSize: '1rem',
              },
              [`& .${pickersSectionListClasses.root}`]: {
                paddingBlock: CONTROL_HEIGHTS.lg / 2 - 10.5,
                ...(CONTROL_HEIGHTS.lg !== CONTROL_TOUCH_HEIGHTS.lg && {
                  [TOUCH_MEDIA_QUERY]: {
                    paddingBlock: CONTROL_TOUCH_HEIGHTS.lg / 2 - 10.5,
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
            props: { size: 'small' },
            style: {
              fontSize: theme.typography.body2.fontSize,
            },
          },
        ],
      }),
    },
  },
  MuiPickerDay: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: (theme.vars || theme).shape.borderRadius,
        [`&.${pickerDayClasses.today}`]: {
          border: `1px solid ${(theme.vars || theme).palette.primary.main}`,
          [`&:not(.${pickerDayClasses.selected})`]: {
            backgroundColor: 'transparent',
          },
        },
      }),
    },
  },
  MuiPickersCalendarHeader: {
    styleOverrides: {
      root: {
        [`& .${pickersCalendarHeaderClasses.label}`]: {
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
        [`&.${pickersInputBaseClasses.sectionsContainer}`]: {
          opacity: 1,
        },
      },
    },
  },
};
