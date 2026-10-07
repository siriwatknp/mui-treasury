import { alpha, createTheme } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

const brand = alpha('#3E63DD', 0.9);

export default createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: { borderColor: (theme.vars || theme).palette.text.primary },
          '&:hover': { borderRadius: 4, ...theme.applyStyles('dark', { borderRadius: 8 }) },
          fontSize: theme.typography.body2.fontSize,
          backgroundColor: theme.alpha((theme.vars || theme).palette.primary.main, 0.1),
          color: (theme.vars || theme).palette.text.secondary,
          caretColor: brand,
          [theme.breakpoints.up('md')]: { fontSize: theme.typography.body1.fontSize },
          '@media (hover: none)': { borderRadius: 4 },
        }),
        input: ({ theme }) => ({ padding: theme.spacing(1) }),
      },
    },
  },
});
