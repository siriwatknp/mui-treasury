import { inputLabelClasses } from '@mui/material/InputLabel';

export default {
  components: {
    MuiInputAdornment: { styleOverrides: { positionEnd: { position: 'absolute', right: 8 } } },
    MuiInputBase: { styleOverrides: { input: { variants: [{ props: { multiline: true }, style: { height: '20px !important', overflow: 'hidden !important' } }] } } },
    MuiInputLabel: { styleOverrides: { filled: { [`&.${inputLabelClasses.shrink}`]: { transform: 'translate(12px, 22px) scale(0.75)' } } } },
    MuiFilledInput: { styleOverrides: { input: { paddingTop: 8, paddingBottom: 8 } } },
    MuiButton: { styleOverrides: { root: { whiteSpace: 'nowrap', maxWidth: 120 } } },
  },
};
