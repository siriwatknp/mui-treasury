import { createTheme, type Theme } from '@mui/material/styles';

const HEIGHT = 40;
const LINE = '1.4375em';
const centered = (height: number) => `calc((${height}px - ${LINE}) / 2)`;
const FILLED_BOTTOM = 3;
const filledTop = `calc(${HEIGHT - FILLED_BOTTOM}px - ${LINE})`;

const inputFontSize = ({ theme }: { theme: Theme }) => ({
  fontSize: '1rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '0.875rem',
  },
});

const notMultiline = ({ ownerState }: { ownerState: { multiline?: boolean } }) =>
  !ownerState.multiline;

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: (props) => ({
          ...inputFontSize(props),
          minHeight: HEIGHT,
          variants: [
            {
              props: { multiline: true },
              style: { paddingTop: centered(HEIGHT), paddingBottom: centered(HEIGHT) },
            },
          ],
        }),
        input: {
          variants: [
            {
              props: notMultiline,
              style: { paddingTop: centered(HEIGHT), paddingBottom: centered(HEIGHT) },
            },
          ],
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: (props) => ({
          ...inputFontSize(props),
          minHeight: HEIGHT,
          variants: [
            {
              props: { multiline: true },
              style: { paddingTop: filledTop, paddingBottom: FILLED_BOTTOM },
            },
            {
              props: { multiline: true, hiddenLabel: true },
              style: { paddingTop: centered(HEIGHT), paddingBottom: centered(HEIGHT) },
            },
          ],
        }),
        input: {
          variants: [
            {
              props: notMultiline,
              style: { paddingTop: filledTop, paddingBottom: FILLED_BOTTOM },
            },
            {
              props: ({ ownerState }) => !ownerState.multiline && !!ownerState.hiddenLabel,
              style: { paddingTop: centered(HEIGHT), paddingBottom: centered(HEIGHT) },
            },
          ],
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: (props) => ({
          ...inputFontSize(props),
          minHeight: HEIGHT,
          variants: [
            {
              props: { multiline: true },
              style: { paddingTop: centered(HEIGHT), paddingBottom: centered(HEIGHT) },
            },
          ],
        }),
        input: {
          variants: [
            {
              props: notMultiline,
              style: { paddingTop: centered(HEIGHT), paddingBottom: centered(HEIGHT) },
            },
          ],
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: (props) => ({
          ...inputFontSize(props),
          variants: [
            {
              props: ({ ownerState }) => !!ownerState.formControl && !ownerState.shrink,
              style: { transform: `translate(0, calc(16px + ${centered(HEIGHT)})) scale(1)` },
            },
            {
              props: ({ variant, ownerState }) => variant === 'outlined' && !ownerState.shrink,
              style: { transform: `translate(14px, ${centered(HEIGHT)}) scale(1)` },
            },
            {
              props: ({ variant, ownerState }) => variant === 'filled' && !ownerState.shrink,
              style: { transform: `translate(12px, ${centered(HEIGHT)}) scale(1)` },
            },
            {
              props: ({ variant, ownerState }) => variant === 'filled' && !!ownerState.shrink,
              style: { transform: 'translate(12px, 2px) scale(0.75)' },
            },
          ],
        }),
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          '& .MuiTypography-root': { fontSize: 'inherit' },
          '&.MuiInputAdornment-filled.MuiInputAdornment-positionStart:not(.MuiInputAdornment-hiddenLabel)':
            { marginTop: `calc(${HEIGHT - 2 * FILLED_BOTTOM}px - ${LINE})` },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root, & .MuiOutlinedInput-root.MuiInputBase-sizeSmall': {
            paddingTop: 1,
            paddingBottom: 1,
          },
          '& .MuiOutlinedInput-root .MuiAutocomplete-input, & .MuiOutlinedInput-root.MuiInputBase-sizeSmall .MuiAutocomplete-input':
            { paddingTop: centered(HEIGHT - 2), paddingBottom: centered(HEIGHT - 2) },
          '& .MuiFilledInput-root, & .MuiFilledInput-root.MuiInputBase-sizeSmall': {
            paddingTop: filledTop,
            paddingBottom: FILLED_BOTTOM,
          },
          '& .MuiFilledInput-root .MuiFilledInput-input, & .MuiFilledInput-root.MuiInputBase-sizeSmall .MuiFilledInput-input':
            { paddingTop: 0, paddingBottom: 0 },
          '& .MuiFilledInput-root.MuiInputBase-hiddenLabel, & .MuiFilledInput-root.MuiInputBase-hiddenLabel.MuiInputBase-sizeSmall':
            { paddingTop: 0, paddingBottom: 0 },
          '& .MuiFilledInput-root.MuiInputBase-hiddenLabel .MuiAutocomplete-input, & .MuiFilledInput-root.MuiInputBase-hiddenLabel.MuiInputBase-sizeSmall .MuiAutocomplete-input':
            { paddingTop: centered(HEIGHT), paddingBottom: centered(HEIGHT) },
          '& .MuiInput-root, & .MuiInput-root.MuiInputBase-sizeSmall': { paddingBottom: 1 },
          '& .MuiInput-root .MuiInput-input, & .MuiInput-root.MuiInputBase-sizeSmall .MuiInput-input':
            { paddingTop: centered(HEIGHT - 1), paddingBottom: centered(HEIGHT - 1) },
        },
      },
    },
  },
});

export default theme;
