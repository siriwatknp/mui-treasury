import { createTheme } from '@mui/material/styles';

const CONTROL_HEIGHT = 36;
const LINE_HEIGHT = '1.4375em';
const pointerFine = '@media (pointer: fine)';

const fontSize = {
  fontSize: '1rem',
  [pointerFine]: { fontSize: '0.875rem' },
};

const blockPad = (height: number) => `calc((${height}px - ${LINE_HEIGHT}) / 2)`;

const singleLinePad = { paddingTop: blockPad(CONTROL_HEIGHT), paddingBottom: blockPad(CONTROL_HEIGHT) };

const inputSlot = {
  variants: [
    { props: { multiline: false }, style: singleLinePad },
    { props: { multiline: true }, style: { paddingTop: 0, paddingBottom: 0 } },
  ],
};

const multilineRoot = {
  variants: [{ props: { multiline: true }, style: { ...singleLinePad, minHeight: CONTROL_HEIGHT } }],
};

const AUTOCOMPLETE_ROOT_PAD = 3;
const autocompleteInner = CONTROL_HEIGHT - AUTOCOMPLETE_ROOT_PAD * 2;

const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: { ...fontSize, lineHeight: LINE_HEIGHT, ...multilineRoot },
        input: inputSlot,
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          '&.MuiInputAdornment-filled.MuiInputAdornment-positionStart:not(.MuiInputAdornment-hiddenLabel)': {
            marginTop: 0,
          },
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: { notched: false },
      styleOverrides: { root: multilineRoot, input: inputSlot },
    },
    MuiFilledInput: {
      styleOverrides: { root: multilineRoot, input: inputSlot },
    },
    MuiInput: {
      styleOverrides: {
        root: { 'label + &': { marginTop: 0 }, ...multilineRoot },
        input: inputSlot,
      },
    },
    MuiInputLabel: {
      defaultProps: { shrink: true },
      styleOverrides: {
        root: {
          ...fontSize,
          lineHeight: 1.5,
          position: 'relative',
          transform: 'none',
          maxWidth: '100%',
          marginBottom: 6,
          pointerEvents: 'auto',
          userSelect: 'auto',
          zIndex: 'auto',
        },
      },
    },
    MuiAutocomplete: {
      defaultProps: { slotProps: { chip: { size: 'small' } } },
      styleOverrides: {
        root: {
          '&&& .MuiAutocomplete-inputRoot': {
            paddingTop: AUTOCOMPLETE_ROOT_PAD,
            paddingBottom: AUTOCOMPLETE_ROOT_PAD,
          },
          '&&&& .MuiAutocomplete-inputRoot .MuiAutocomplete-input': {
            paddingTop: blockPad(autocompleteInner),
            paddingBottom: blockPad(autocompleteInner),
          },
        },
      },
    },
  },
});

export default theme;
