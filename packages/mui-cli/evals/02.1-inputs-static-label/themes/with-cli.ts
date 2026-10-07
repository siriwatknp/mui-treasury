import { createTheme } from '@mui/material/styles';

const CONTROL_HEIGHT = '36px';
const TAG_ROW_HEIGHT = '30px';
const padBlock = `calc((${CONTROL_HEIGHT} - 1.4375em) / 2)`;
const tagPadBlock = `calc((${TAG_ROW_HEIGHT} - 1.4375em) / 2)`;

const singleLine = { props: { multiline: false }, style: { paddingTop: padBlock, paddingBottom: padBlock } };
const multiLine = {
  props: { multiline: true },
  style: { paddingTop: padBlock, paddingBottom: padBlock, minHeight: CONTROL_HEIGHT },
};

const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          '@media (pointer: fine)': {
            fontSize: '0.875rem',
          },
          '& .MuiChip-sizeMedium': {
            height: 24,
          },
          '& .MuiChip-sizeMedium .MuiChip-label': {
            paddingInline: 8,
          },
          '& .MuiChip-sizeMedium .MuiChip-avatar': {
            width: 18,
            height: 18,
            fontSize: '0.625rem',
            marginLeft: 4,
            marginRight: -4,
          },
          '& .MuiChip-sizeMedium .MuiChip-icon': {
            fontSize: 18,
            marginLeft: 4,
            marginRight: -4,
          },
          '& .MuiChip-sizeMedium .MuiChip-deleteIcon': {
            fontSize: 16,
            marginLeft: -4,
            marginRight: 4,
          },
        },
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
          marginBottom: 4,
          fontSize: '0.875rem',
          lineHeight: 1.5,
          pointerEvents: 'auto',
          transition: 'none',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: { variants: [singleLine] },
        root: { variants: [multiLine] },
        notchedOutline: {
          '& legend': {
            maxWidth: '0.01px',
            transition: 'none',
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        input: { variants: [singleLine] },
        root: { variants: [multiLine] },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          'label + &, .MuiInputLabel-root + &': {
            marginTop: 0,
          },
          variants: [multiLine],
        },
        input: { variants: [singleLine] },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          '&.MuiSelect-select:has(.MuiChip-root)': {
            paddingTop: 6,
            paddingBottom: 6,
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          '&.MuiInputAdornment-positionStart&:not(.MuiInputAdornment-hiddenLabel)': {
            marginTop: 0,
          },
          '& .MuiIconButton-root': {
            padding: 4,
          },
          '& .MuiIconButton-edgeStart': {
            marginLeft: -4,
          },
          '& .MuiIconButton-edgeEnd': {
            marginRight: -4,
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '& .MuiAutocomplete-inputRoot.MuiInputBase-root': {
            paddingTop: 3,
            paddingBottom: 3,
          },
          '& .MuiAutocomplete-inputRoot.MuiInputBase-root .MuiAutocomplete-input.MuiInputBase-input': {
            paddingTop: tagPadBlock,
            paddingBottom: tagPadBlock,
          },
          '& .MuiAutocomplete-tag': {
            margin: 3,
          },
        },
      },
    },
  },
});

export default theme;
