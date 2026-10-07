import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  focusVisible: true,
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&.Mui-focused': theme.focusVisible || undefined,
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: 1,
          },
          '&.Mui-focused:not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
            borderColor:
              theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.23)' : 'rgba(0, 0, 0, 0.23)',
          },
          '@media (hover: hover)': {
            '&.Mui-focused:not(.Mui-error):hover .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.text.primary,
            },
          },
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&.MuiInputLabel-outlined.MuiInputLabel-shrink.Mui-focused': {
            backgroundColor: theme.palette.background.default,
            paddingInline: 4,
            marginLeft: -4,
          },
        }),
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          '&.Mui-focused:not(.Mui-error)::after': {
            transform: 'scaleX(0)',
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          '&.Mui-focused:not(.Mui-error)::after': {
            transform: 'scaleX(0)',
          },
        },
      },
    },
  },
});

export default theme;
