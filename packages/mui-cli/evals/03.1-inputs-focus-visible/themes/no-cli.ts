import { createTheme } from '@mui/material/styles';
import { inputBaseClasses } from '@mui/material/InputBase';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { filledInputClasses } from '@mui/material/FilledInput';
import { inputClasses } from '@mui/material/Input';
import { inputLabelClasses } from '@mui/material/InputLabel';

const { focused, error } = inputBaseClasses;
const { notchedOutline } = outlinedInputClasses;

const theme = createTheme({
  focusVisible: true,
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          [`&.${focused}`]: {
            // keeps the ring outset even when the input sits inside a clip-prone parent (MenuItem, Tab)
            '--_focusVisible-offset': 1,
            '--_focusVisible-behavior': 'initial',
            ...t.focusVisible,
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          [`&.${focused} .${notchedOutline}`]: {
            borderWidth: 1,
          },
          [`&.${focused}:not(.${error}) .${notchedOutline}`]: {
            borderColor: t.vars
              ? t.alpha(t.vars.palette.common.onBackground, 0.23)
              : t.palette.mode === 'light'
                ? 'rgba(0, 0, 0, 0.23)'
                : 'rgba(255, 255, 255, 0.23)',
          },
          [`&.${focused}:not(.${error}):hover .${notchedOutline}`]: {
            borderColor: (t.vars || t).palette.text.primary,
          },
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          // the outlined label straddles the input's top edge, so mask the ring behind it
          [`&.${inputLabelClasses.outlined}.${inputLabelClasses.shrink}.${inputLabelClasses.focused}`]: {
            backgroundColor: (t.vars || t).palette.background.paper,
            paddingInline: 4,
            marginInlineStart: -3,
          },
        }),
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          [`&.${filledInputClasses.focused}::after`]: {
            transform: 'scaleX(0)',
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          [`&.${inputClasses.focused}::after`]: {
            transform: 'scaleX(0)',
          },
        },
      },
    },
  },
});

export default theme;
