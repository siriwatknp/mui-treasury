import { createTheme } from '@mui/material/styles';

// static labels above the box; the standard variant's 16px label margin survives, because `label + &` loses to MUI's `.MuiInputLabel-root + &`
export default createTheme({
  components: {
    MuiInputLabel: {
      defaultProps: { shrink: true },
      styleOverrides: { root: { position: 'relative', transform: 'none', marginBottom: 6 } },
    },
    MuiOutlinedInput: { defaultProps: { notched: false } },
    MuiInput: { styleOverrides: { root: { 'label + &': { marginTop: 0 } } } },
  },
});
