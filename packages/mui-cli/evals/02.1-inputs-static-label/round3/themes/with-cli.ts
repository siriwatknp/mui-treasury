import { createTheme } from '@mui/material/styles';

const LINE = '1.25rem';
const PAD_Y = 8;

const singleLine = { multiline: false };
const multiLine = { multiline: true };

const theme = createTheme({
  components: {
    MuiFormControl: {
      defaultProps: { hiddenLabel: true },
    },
    MuiInputLabel: {
      defaultProps: { shrink: true },
      styleOverrides: {
        root: {
          position: 'relative',
          transform: 'none',
          maxWidth: '100%',
          pointerEvents: 'auto',
          userSelect: 'auto',
          fontSize: '0.875rem',
          lineHeight: 1.5,
          marginBottom: 4,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          lineHeight: LINE,
          '@media (pointer: fine)': { fontSize: '0.875rem' },
          variants: [{ props: multiLine, style: { paddingTop: PAD_Y, paddingBottom: PAD_Y } }],
        },
        input: {
          variants: [
            { props: singleLine, style: { height: LINE, paddingTop: PAD_Y, paddingBottom: PAD_Y } },
          ],
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          'label + &, .MuiInputLabel-root + &': { marginTop: 0 },
          variants: [{ props: multiLine, style: { paddingTop: PAD_Y, paddingBottom: PAD_Y } }],
        },
        input: {
          variants: [{ props: singleLine, style: { paddingTop: PAD_Y, paddingBottom: PAD_Y } }],
        },
      },
    },
    MuiFilledInput: {
      defaultProps: { hiddenLabel: true },
      styleOverrides: {
        root: {
          variants: [{ props: multiLine, style: { paddingTop: PAD_Y, paddingBottom: PAD_Y } }],
        },
        input: {
          variants: [{ props: singleLine, style: { paddingTop: PAD_Y, paddingBottom: PAD_Y } }],
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: { notched: false },
      styleOverrides: {
        root: {
          variants: [{ props: multiLine, style: { paddingTop: PAD_Y, paddingBottom: PAD_Y } }],
        },
        input: {
          variants: [{ props: singleLine, style: { paddingTop: PAD_Y, paddingBottom: PAD_Y } }],
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: { minHeight: LINE },
      },
    },
    MuiAutocomplete: {
      defaultProps: { slotProps: { chip: { size: 'small' } } },
      styleOverrides: {
        root: {
          '& .MuiAutocomplete-tag': { margin: 3 },
          '& .MuiInput-root': { paddingTop: 3, paddingBottom: 3 },
          '& .MuiInput-root .MuiInput-input, & .MuiInput-root.MuiInputBase-sizeSmall .MuiInput-input':
            { paddingTop: 5, paddingBottom: 5 },
          '& .MuiOutlinedInput-root, & .MuiOutlinedInput-root.MuiInputBase-sizeSmall': {
            paddingTop: 3,
            paddingBottom: 3,
          },
          '& .MuiOutlinedInput-root .MuiAutocomplete-input, & .MuiOutlinedInput-root.MuiInputBase-sizeSmall .MuiAutocomplete-input':
            { paddingTop: 5, paddingBottom: 5 },
          '& .MuiFilledInput-root, & .MuiFilledInput-root.MuiInputBase-hiddenLabel, & .MuiFilledInput-root.MuiInputBase-sizeSmall':
            { paddingTop: 3, paddingBottom: 3 },
          '& .MuiFilledInput-root .MuiFilledInput-input, & .MuiFilledInput-root.MuiInputBase-hiddenLabel .MuiAutocomplete-input, & .MuiFilledInput-root.MuiInputBase-hiddenLabel.MuiInputBase-sizeSmall .MuiAutocomplete-input, & .MuiFilledInput-root.MuiInputBase-sizeSmall .MuiFilledInput-input':
            { paddingTop: 5, paddingBottom: 5 },
        },
      },
    },
  },
});

export default theme;
