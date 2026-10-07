import { createTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';

const HEIGHT = '40px';
const LINE = '1.4375em';

const centered = `calc((${HEIGHT} - ${LINE}) / 2)`;
const filledTop = `calc(${HEIGHT} - ${LINE} - 4px)`;
const filledBottom = '4px';
const filledLabelY = '2px';

const tagRow = '30px';
const tagRowInput = `calc((${tagRow} - ${LINE}) / 2)`;
const tagRowRoot = `calc((${HEIGHT} - ${tagRow}) / 2)`;
const filledTagTop = `calc(${HEIGHT} - ${LINE} - 6px)`;

const responsiveFontSize = (theme: Theme) => ({
  fontSize: '1rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '0.875rem',
  },
});

const vertical = (top: string, bottom: string = top) => ({
  paddingTop: top,
  paddingBottom: bottom,
});

const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }) => responsiveFontSize(theme),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...responsiveFontSize(theme),
          variants: [
            {
              props: ({ ownerState }) => ownerState.variant === 'outlined' && !ownerState.shrink,
              style: { transform: `translate(14px, ${centered}) scale(1)` },
            },
            {
              props: ({ ownerState }) => ownerState.variant === 'outlined' && !!ownerState.shrink,
              style: { transform: 'translate(14px, -0.5625em) scale(0.75)' },
            },
            {
              props: ({ ownerState }) => ownerState.variant === 'filled' && !ownerState.shrink,
              style: { transform: `translate(12px, ${centered}) scale(1)` },
            },
            {
              props: ({ ownerState }) => ownerState.variant === 'filled' && !!ownerState.shrink,
              style: { transform: `translate(12px, ${filledLabelY}) scale(0.75)` },
            },
            {
              props: ({ ownerState }) =>
                ownerState.variant === 'standard' && !!ownerState.formControl && !ownerState.shrink,
              style: { transform: `translate(0, calc(16px + ${centered})) scale(1)` },
            },
          ],
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          variants: [
            { props: { multiline: true }, style: { ...vertical(centered), minHeight: HEIGHT } },
          ],
        },
        input: {
          variants: [
            {
              props: ({ ownerState }) => !ownerState.multiline,
              style: vertical(centered),
            },
          ],
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: ({ ownerState }) => !!ownerState.multiline && !ownerState.hiddenLabel,
              style: { ...vertical(filledTop, filledBottom), minHeight: HEIGHT },
            },
            {
              props: ({ ownerState }) => !!ownerState.multiline && !!ownerState.hiddenLabel,
              style: { ...vertical(centered), minHeight: HEIGHT },
            },
          ],
        },
        input: {
          variants: [
            {
              props: ({ ownerState }) => !ownerState.multiline && !ownerState.hiddenLabel,
              style: vertical(filledTop, filledBottom),
            },
            {
              props: ({ ownerState }) => !ownerState.multiline && !!ownerState.hiddenLabel,
              style: vertical(centered),
            },
          ],
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          variants: [
            { props: { multiline: true }, style: { ...vertical(centered), minHeight: HEIGHT } },
          ],
        },
        input: {
          variants: [
            {
              props: ({ ownerState }) => !ownerState.multiline,
              style: vertical(centered),
            },
          ],
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: 'filled' },
              style: {
                '&.MuiInputAdornment-positionStart&:not(.MuiInputAdornment-hiddenLabel)': {
                  marginTop: `calc(${HEIGHT} - 8px - ${LINE})`,
                },
              },
            },
          ],
        },
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        slotProps: { chip: { size: 'small' } },
      },
      styleOverrides: {
        root: {
          '& .MuiAutocomplete-tag': { margin: 3, maxWidth: 'calc(100% - 6px)' },
          '& .MuiInput-root': {
            ...vertical(tagRowRoot),
            '& .MuiInput-input': vertical(tagRowInput),
          },
          '& .MuiInput-root.MuiInputBase-sizeSmall': {
            '& .MuiInput-input': vertical(tagRowInput),
          },
          '& .MuiOutlinedInput-root': {
            ...vertical(tagRowRoot),
            '& .MuiAutocomplete-input': vertical(tagRowInput),
          },
          '& .MuiOutlinedInput-root.MuiInputBase-sizeSmall': {
            ...vertical(tagRowRoot),
            '& .MuiAutocomplete-input': vertical(tagRowInput),
          },
          '& .MuiFilledInput-root': {
            ...vertical(filledTagTop, '2px'),
            '& .MuiFilledInput-input': vertical('2px'),
          },
          '& .MuiFilledInput-root.MuiInputBase-sizeSmall': {
            ...vertical(filledTagTop, '2px'),
            '& .MuiFilledInput-input': vertical('2px'),
          },
          '& .MuiInputBase-hiddenLabel': {
            paddingTop: tagRowRoot,
          },
          '& .MuiFilledInput-root.MuiInputBase-hiddenLabel': {
            ...vertical(tagRowRoot),
            '& .MuiAutocomplete-input': vertical(tagRowInput),
          },
          '& .MuiFilledInput-root.MuiInputBase-hiddenLabel.MuiInputBase-sizeSmall': {
            '& .MuiAutocomplete-input': vertical(tagRowInput),
          },
        },
      },
    },
  },
});

export default theme;
