import { createTheme } from '@mui/material/styles';

const base = createTheme({ focusVisible: true });
export default createTheme(base, {
  components: {
    MuiInputBase: { styleOverrides: { root: { '&.Mui-focused': { ...base.focusVisible } } } },
    MuiOutlinedInput: { styleOverrides: { root: { '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 0, 0, 0.23)', borderWidth: 1 }, '&.Mui-focused.Mui-error .MuiOutlinedInput-notchedOutline': { borderColor: base.palette.error.main } } } },
    MuiFilledInput: { styleOverrides: { root: { '&::after': { display: 'none' } } } },
    MuiInput: { styleOverrides: { root: { '&::after': { display: 'none' } } } },
  },
});
