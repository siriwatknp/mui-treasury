import { filledInputClasses } from '@mui/material/FilledInput';
import { formHelperTextClasses } from '@mui/material/FormHelperText';
import { formLabelClasses } from '@mui/material/FormLabel';
import { iconButtonClasses } from '@mui/material/IconButton';
import { inputClasses } from '@mui/material/Input';
import { inputAdornmentClasses } from '@mui/material/InputAdornment';
import { inputBaseClasses } from '@mui/material/InputBase';
import { inputLabelClasses } from '@mui/material/InputLabel';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

import {
  CONTROL_HEIGHTS,
  CONTROL_TOUCH_HEIGHTS,
  TOUCH_MEDIA_QUERY,
} from '../scales';
import { ThemeComponents } from '../types';

declare module '@mui/material/InputBase' {
  interface InputBasePropsSizeOverrides {
    large: true;
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsSizeOverrides {
    large: true;
  }
}

declare module '@mui/material/FormControl' {
  interface FormControlPropsSizeOverrides {
    large: true;
  }
}

export const textFieldTheme: ThemeComponents = {
  MuiFormControl: {
    defaultProps: {
      variant: 'outlined',
    },
    styleOverrides: {
      root: ({ theme }) => ({
        variants: [
          {
            props: { variant: 'outlined' },
            style: {
              [`&&& .${inputBaseClasses.input}`]: {
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
              [`&& .${outlinedInputClasses.notchedOutline}`]: {
                transition: 'none',
                '& legend': {
                  width: 0,
                },
              },
              [`& .${iconButtonClasses.root}`]: {
                '&:hover': {
                  color: (theme.vars || theme).palette.text.primary,
                  backgroundColor: 'transparent',
                },
              },
            },
          },
        ],
      }),
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: ({ theme }) => ({
        [theme.breakpoints.up(768)]: {
          fontSize: theme.typography.body2.fontSize,
          lineHeight: '1.42857em', // 20px
        },
        variants: [
          {
            props: { size: 'small' },
            style: {
              [`&:has(.${inputAdornmentClasses.positionStart})`]: {
                paddingLeft: '10px',
              },
              [`&:has(.${inputAdornmentClasses.positionEnd})`]: {
                paddingRight: '10px',
              },
            },
          },
          {
            props: { size: 'medium' },
            style: {
              [`&:has(.${inputAdornmentClasses.positionStart})`]: {
                paddingLeft: '12px',
              },
              [`&:has(.${inputAdornmentClasses.positionEnd})`]: {
                paddingRight: '12px',
              },
            },
          },
          {
            props: { size: 'large' },
            style: {
              fontSize: theme.typography.body1.fontSize,
              [theme.breakpoints.up(768)]: {
                fontSize: theme.typography.body1.fontSize,
                lineHeight: theme.typography.body1.lineHeight,
              },
            },
          },
        ],
      }),
      input: {
        paddingBlock: CONTROL_HEIGHTS.md / 2 - 10.5,
        paddingInline: 12,
        minHeight: '1.5em',
        ...(CONTROL_HEIGHTS.md !== CONTROL_TOUCH_HEIGHTS.md && {
          [TOUCH_MEDIA_QUERY]: {
            paddingBlock: CONTROL_TOUCH_HEIGHTS.md / 2 - 12,
          },
        }),
        variants: [
          {
            props: { size: 'small' },
            style: {
              paddingBlock: CONTROL_HEIGHTS.sm / 2 - 10.5,
              paddingInline: 10,
              ...(CONTROL_HEIGHTS.sm !== CONTROL_TOUCH_HEIGHTS.sm && {
                [TOUCH_MEDIA_QUERY]: {
                  paddingBlock: CONTROL_TOUCH_HEIGHTS.sm / 2 - 12,
                },
              }),
            },
          },
          {
            props: { size: 'large' },
            style: {
              paddingBlock: CONTROL_HEIGHTS.lg / 2 - 12,
              paddingInline: 16,
              ...(CONTROL_HEIGHTS.lg !== CONTROL_TOUCH_HEIGHTS.lg && {
                [TOUCH_MEDIA_QUERY]: {
                  paddingBlock: CONTROL_TOUCH_HEIGHTS.lg / 2 - 12,
                },
              }),
            },
          },
        ],
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 8,
        [`& .${outlinedInputClasses.notchedOutline}`]: {
          transition: theme.transitions.create(['border-color'], {
            duration: theme.transitions.duration.shorter,
          }),
        },
        '& legend': {
          height: '11px',
        },
        [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: (theme.vars || theme).palette.text.primary,
        },
        [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
          {
            borderWidth: 2,
            borderColor: (theme.vars || theme).palette.primary.main,
          },
        [`&.${outlinedInputClasses.error} .${outlinedInputClasses.notchedOutline}`]:
          {
            borderColor: (theme.vars || theme).palette.error.main,
          },
        [`&.${outlinedInputClasses.disabled}`]: {
          backgroundColor: (theme.vars || theme).palette.action
            .disabledBackground,
          [`& .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: (theme.vars || theme).palette.action.disabled,
          },
        },
        variants: [
          {
            props: { size: 'small', multiline: true },
            style: {
              paddingBlock: CONTROL_HEIGHTS.sm / 2 - 10.5,
              paddingInline: 12,
              ...(CONTROL_HEIGHTS.sm !== CONTROL_TOUCH_HEIGHTS.sm && {
                [TOUCH_MEDIA_QUERY]: {
                  paddingBlock: CONTROL_TOUCH_HEIGHTS.sm / 2 - 12,
                },
              }),
            },
          },
          {
            props: { size: 'medium', multiline: true },
            style: {
              paddingBlock: CONTROL_HEIGHTS.md / 2 - 10.5,
              paddingInline: 14,
              ...(CONTROL_HEIGHTS.md !== CONTROL_TOUCH_HEIGHTS.md && {
                [TOUCH_MEDIA_QUERY]: {
                  paddingBlock: CONTROL_TOUCH_HEIGHTS.md / 2 - 12,
                },
              }),
            },
          },
          {
            props: { size: 'large', multiline: true },
            style: {
              paddingBlock: CONTROL_HEIGHTS.lg / 2 - 12,
              paddingInline: 14,
              ...(CONTROL_HEIGHTS.lg !== CONTROL_TOUCH_HEIGHTS.lg && {
                [TOUCH_MEDIA_QUERY]: {
                  paddingBlock: CONTROL_TOUCH_HEIGHTS.lg / 2 - 12,
                },
              }),
            },
          },
        ],
      }),
      input: {
        paddingBlock: CONTROL_HEIGHTS.md / 2 - 10.5,
        paddingInline: 12,
        [`.${inputAdornmentClasses.root} + &`]: {
          paddingLeft: 0,
        },
        [`&:has(+ .${inputAdornmentClasses.root})`]: {
          paddingRight: 0,
        },
        variants: [
          {
            props: { size: 'small' },
            style: {
              paddingBlock: CONTROL_HEIGHTS.sm / 2 - 10.5,
              paddingInline: 12,
              ...(CONTROL_HEIGHTS.sm !== CONTROL_TOUCH_HEIGHTS.sm && {
                [TOUCH_MEDIA_QUERY]: {
                  paddingBlock: CONTROL_TOUCH_HEIGHTS.sm / 2 - 12,
                },
              }),
            },
          },
          {
            props: { size: 'medium' },
            style: {
              paddingBlock: CONTROL_HEIGHTS.md / 2 - 10.5,
              ...(CONTROL_HEIGHTS.md !== CONTROL_TOUCH_HEIGHTS.md && {
                [TOUCH_MEDIA_QUERY]: {
                  paddingBlock: CONTROL_TOUCH_HEIGHTS.md / 2 - 12,
                },
              }),
            },
          },
          {
            props: { size: 'large' },
            style: {
              paddingBlock: CONTROL_HEIGHTS.lg / 2 - 12,
              paddingInline: 14,
              ...(CONTROL_HEIGHTS.lg !== CONTROL_TOUCH_HEIGHTS.lg && {
                [TOUCH_MEDIA_QUERY]: {
                  paddingBlock: CONTROL_TOUCH_HEIGHTS.lg / 2 - 12,
                },
              }),
            },
          },
          {
            props: { multiline: true },
            style: {
              padding: 0,
            },
          },
        ],
      },
    },
  },
  MuiFilledInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: (theme.vars || theme).palette.action.hover,
        borderRadius: '8px 8px 0 0',
        '&:hover': {
          backgroundColor: (theme.vars || theme).palette.action.selected,
        },
        [`&.${filledInputClasses.focused}`]: {
          backgroundColor: (theme.vars || theme).palette.action.selected,
        },
        [`&.${filledInputClasses.disabled}`]: {
          backgroundColor: (theme.vars || theme).palette.action
            .disabledBackground,
        },
        '&::before': {
          transition: theme.transitions.create(['border-bottom-color'], {
            duration: theme.transitions.duration.shorter,
          }),
        },
        '&:hover::before': {
          borderBottom: `2px solid ${
            (theme.vars || theme).palette.text.primary
          }`,
        },
        '&::after': {
          borderBottom: `2px solid ${
            (theme.vars || theme).palette.primary.main
          }`,
        },
        [`&.${filledInputClasses.error}::after`]: {
          borderBottomColor: (theme.vars || theme).palette.error.main,
        },
      }),
      input: () => ({
        '&:where(input)': {
          paddingTop: CONTROL_HEIGHTS.md / 2 + 5,
          paddingInline: 12,
          paddingBottom: CONTROL_HEIGHTS.md / 2 - 12,
          ...(CONTROL_HEIGHTS.md !== CONTROL_TOUCH_HEIGHTS.md && {
            [TOUCH_MEDIA_QUERY]: {
              paddingTop: CONTROL_TOUCH_HEIGHTS.md / 2 + 5,
              paddingBottom: CONTROL_TOUCH_HEIGHTS.md / 2 - 12,
            },
          }),
        },
        variants: [
          {
            props: { size: 'small' },
            style: {
              '&:where(input)': {
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
          },
        ],
      }),
    },
  },
  MuiInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        '&::before': {
          transition: theme.transitions.create(['border-bottom-color'], {
            duration: theme.transitions.duration.shorter,
          }),
        },
        [`&:hover:not(.${inputClasses.disabled})::before`]: {
          borderBottom: `2px solid ${
            (theme.vars || theme).palette.text.primary
          }`,
        },
        '&::after': {
          borderBottom: `2px solid ${
            (theme.vars || theme).palette.primary.main
          }`,
        },
        [`&.${inputClasses.error}::after`]: {
          borderBottomColor: (theme.vars || theme).palette.error.main,
        },
      }),
      input: {
        padding: '4px 0 5px',
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontSize: theme.typography.body2.fontSize,
        variants: [
          {
            props: { size: 'large' },
            style: {
              fontSize: theme.typography.body1.fontSize,
            },
          },
        ],
      }),
      outlined: ({ theme }) => ({
        color: (theme.vars || theme).palette.text.primary,
        [`&.${inputLabelClasses.focused}`]: {
          color: (theme.vars || theme).palette.primary.main,
        },
        [`&.${inputLabelClasses.disabled}`]: {
          color: (theme.vars || theme).palette.text.disabled,
        },
        [`&.${formLabelClasses.root}`]: {
          position: 'static',
          transform: 'none',
          pointerEvents: 'auto',
          marginBottom: '0.25rem',
          maxWidth: 'unset',
          fontWeight: 500,
          lineHeight: 1.5,
          [`&.${inputLabelClasses.shrink}`]: {
            transform: 'none',
          },
        },
        variants: [
          {
            props: { size: 'small' },
            style: {
              transform: 'translate(14px, 7px) scale(1)',
              [`&.${inputLabelClasses.shrink}`]: {
                transform: 'translate(14px, -9px) scale(0.75)',
              },
            },
          },
        ],
      }),
      filled: {
        transform: 'translate(12px, 16px) scale(1)',
        [`&.${inputLabelClasses.shrink}`]: {
          transform: 'translate(12px, 7px) scale(0.75)',
        },
        variants: [
          {
            props: { size: 'small' },
            style: {
              transform: 'translate(12px, 14px) scale(1)',
              [`&.${inputLabelClasses.shrink}`]: {
                transform: 'translate(10px, 6px) scale(0.75)',
              },
            },
          },
        ],
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: ({ theme }) => ({
        marginTop: 4,
        lineHeight: 'calc(20/12)',
        [`&.${formHelperTextClasses.error}`]: {
          color: (theme.vars || theme).palette.error.text,
        },
      }),
    },
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: (theme.vars || theme).palette.text.secondary,
        variants: [
          {
            props: { position: 'start' },
            style: {
              marginRight: 8,
            },
          },
          {
            props: { position: 'end' },
            style: {
              marginLeft: 8,
            },
          },
        ],
      }),
    },
  },
};
