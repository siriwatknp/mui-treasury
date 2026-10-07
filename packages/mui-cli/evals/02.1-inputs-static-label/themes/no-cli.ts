import { createTheme } from '@mui/material/styles';

const LINE = '20px';
const PAD_Y = '8px';
const FINE_POINTER = '@media (pointer: fine)';

const inputPadding = {
  paddingTop: PAD_Y,
  paddingBottom: PAD_Y,
  variants: [{ props: { multiline: true }, style: { paddingTop: 0, paddingBottom: 0 } }],
};
const multilineRootPadding = {
  variants: [{ props: { multiline: true }, style: { paddingTop: PAD_Y, paddingBottom: PAD_Y } }],
};

const theme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: { verticalAlign: 'top' },
      },
    },
    MuiInputLabel: {
      defaultProps: { shrink: true },
      styleOverrides: {
        root: {
          position: 'relative',
          transform: 'none',
          maxWidth: '100%',
          zIndex: 'auto',
          pointerEvents: 'auto',
          fontSize: '0.875rem',
          fontWeight: 500,
          lineHeight: LINE,
          marginBottom: 4,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          lineHeight: LINE,
          fontSize: '1rem',
          [FINE_POINTER]: { fontSize: '0.875rem' },
          ...multilineRootPadding,
        },
        input: { height: LINE, ...inputPadding },
      },
    },
    MuiOutlinedInput: {
      defaultProps: { notched: false },
      styleOverrides: {
        input: inputPadding,
        root: multilineRootPadding,
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        input: inputPadding,
        root: multilineRootPadding,
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          'label + &, .MuiInputLabel-root + &': { marginTop: 0 },
          ...multilineRootPadding,
        },
        input: inputPadding,
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          '&.MuiInputAdornment-positionStart&:not(.MuiInputAdornment-hiddenLabel)': {
            marginTop: 0,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: { '&.MuiSelect-select': { minHeight: LINE } },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        contained: { marginLeft: 0, marginRight: 0 },
      },
    },
    MuiAutocomplete: {
      defaultProps: { slotProps: { chip: { size: 'small' } } },
      styleOverrides: {
        root: {
          '& .MuiAutocomplete-tag': { margin: 3, maxWidth: 'calc(100% - 6px)' },
          '& .MuiOutlinedInput-root, & .MuiOutlinedInput-root.MuiInputBase-sizeSmall': {
            paddingTop: 3,
            paddingBottom: 3,
            paddingLeft: 9,
            '& .MuiAutocomplete-input': { padding: '5px 4px 5px 5px' },
          },
          '& .MuiFilledInput-root, & .MuiFilledInput-root.MuiInputBase-sizeSmall': {
            paddingTop: 3,
            paddingBottom: 3,
            '& .MuiFilledInput-input': { padding: '5px 4px' },
          },
          '& .MuiInput-root, & .MuiInput-root.MuiInputBase-sizeSmall': {
            paddingTop: 3,
            paddingBottom: 3,
            '& .MuiInput-input': { padding: '5px 4px 5px 0' },
          },
        },
      },
    },
  },
});

export default theme;
