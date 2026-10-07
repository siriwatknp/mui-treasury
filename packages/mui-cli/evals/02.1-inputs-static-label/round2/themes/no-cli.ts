import { createTheme } from '@mui/material/styles';

const LINE_HEIGHT = 20;
const PAD_Y = 8;
const CHIP_ROW_PAD = 4;

const verticalPadding = (value: number) => ({ paddingTop: value, paddingBottom: value });

const autocompleteRoot = {
  ...verticalPadding(CHIP_ROW_PAD),
  '& .MuiAutocomplete-input': verticalPadding(PAD_Y - CHIP_ROW_PAD),
};

const theme = createTheme({
  components: {
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
      styleOverrides: {
        root: {
          position: 'static',
          transform: 'none',
          maxWidth: '100%',
          pointerEvents: 'auto',
          userSelect: 'auto',
          zIndex: 'auto',
          marginBottom: 4,
          fontSize: '0.875rem',
          fontWeight: 500,
          lineHeight: '20px',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          lineHeight: `${LINE_HEIGHT}px`,
          '@media (pointer: fine)': {
            fontSize: '0.875rem',
          },
          '&.MuiInputBase-multiline': verticalPadding(PAD_Y),
        },
        input: {
          height: LINE_HEIGHT,
          ...verticalPadding(PAD_Y),
          'textarea&': {
            height: 'auto',
            ...verticalPadding(0),
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          '.MuiInputLabel-root + &': {
            marginTop: 0,
          },
          '&.MuiInputBase-multiline': verticalPadding(PAD_Y),
        },
        input: {
          ...verticalPadding(PAD_Y),
          'textarea&': verticalPadding(0),
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          '&.MuiInputBase-multiline': verticalPadding(PAD_Y),
        },
        input: {
          ...verticalPadding(PAD_Y),
          'textarea&': verticalPadding(0),
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.MuiInputBase-multiline': verticalPadding(PAD_Y),
        },
        input: {
          ...verticalPadding(PAD_Y),
          'textarea&': verticalPadding(0),
        },
        notchedOutline: {
          top: 0,
          '& legend': {
            display: 'none',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          minHeight: LINE_HEIGHT,
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          '&.MuiInputAdornment-positionStart&:not(.MuiInputAdornment-hiddenLabel)': {
            marginTop: 0,
          },
          '& .MuiIconButton-sizeMedium': {
            padding: 4,
          },
          '& .MuiIconButton-sizeMedium.MuiIconButton-edgeEnd': {
            marginRight: -8,
          },
          '& .MuiIconButton-sizeMedium.MuiIconButton-edgeStart': {
            marginLeft: -8,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        contained: {
          marginLeft: 0,
          marginRight: 0,
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
          '& .MuiAutocomplete-tag': {
            margin: 2,
            maxWidth: 'calc(100% - 4px)',
          },
          '& .MuiInput-root': autocompleteRoot,
          '& .MuiInput-root.MuiInputBase-sizeSmall': autocompleteRoot,
          '& .MuiOutlinedInput-root': autocompleteRoot,
          '& .MuiOutlinedInput-root.MuiInputBase-sizeSmall': autocompleteRoot,
          '& .MuiFilledInput-root': autocompleteRoot,
          '& .MuiFilledInput-root.MuiInputBase-sizeSmall': autocompleteRoot,
          '& .MuiFilledInput-root.MuiInputBase-hiddenLabel': autocompleteRoot,
          '& .MuiFilledInput-root.MuiInputBase-hiddenLabel.MuiInputBase-sizeSmall': autocompleteRoot,
        },
      },
    },
  },
});

export default theme;
