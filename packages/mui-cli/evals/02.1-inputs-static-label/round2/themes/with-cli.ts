import { createTheme } from '@mui/material/styles';

const CONTROL_HEIGHT = '36px';
const LINE_HEIGHT = '1.4375em';
const blockPadding = `calc((${CONTROL_HEIGHT} - ${LINE_HEIGHT}) / 2)`;
const AUTOCOMPLETE_ROOT_PADDING = '4px';
const autocompleteInputPadding = `calc((${CONTROL_HEIGHT} - 2 * ${AUTOCOMPLETE_ROOT_PADDING} - ${LINE_HEIGHT}) / 2)`;

const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          '@media (pointer: fine)': {
            fontSize: '0.875rem',
          },
          '&.MuiInputBase-multiline': {
            paddingTop: blockPadding,
            paddingBottom: blockPadding,
          },
        },
        input: {
          '&:not(textarea)': {
            paddingTop: blockPadding,
            paddingBottom: blockPadding,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          'label + &, .MuiInputLabel-root + &': {
            marginTop: 0,
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          '&.MuiInputAdornment-filled.MuiInputAdornment-positionStart:not(.MuiInputAdornment-hiddenLabel)':
            {
              marginTop: 0,
            },
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        notched: false,
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
      styleOverrides: {
        root: {
          position: 'relative',
          transform: 'none',
          maxWidth: '100%',
          pointerEvents: 'auto',
          fontSize: '0.875rem',
          lineHeight: 1.5,
          marginBottom: 4,
        },
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        slotProps: {
          chip: { size: 'small' },
        },
      },
      styleOverrides: {
        root: {
          '& .MuiAutocomplete-inputRoot.MuiInputBase-root': {
            paddingTop: AUTOCOMPLETE_ROOT_PADDING,
            paddingBottom: AUTOCOMPLETE_ROOT_PADDING,
          },
          '& .MuiAutocomplete-inputRoot.MuiInputBase-root .MuiAutocomplete-input.MuiInputBase-input':
            {
              paddingTop: autocompleteInputPadding,
              paddingBottom: autocompleteInputPadding,
            },
          '& .MuiAutocomplete-tag': {
            margin: 2,
            maxWidth: 'calc(100% - 4px)',
          },
        },
      },
    },
  },
});

export default theme;
