import { alpha, createTheme } from '@mui/material/styles';

export default createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.text.primary },
          '&:hover': { borderRadius: theme.palette.mode === 'dark' ? 8 : 4 },
          fontSize: (theme.vars || theme).typography.body2.fontSize,
          backgroundColor: alpha((theme.vars || theme).palette.primary.main, 0.1),
          color: 'var(--mui-palette-text-secondary)',
          '@media (min-width: 900px)': { minHeight: 40 },
        }),
        input: {
          ...((theme: any) => ({ padding: theme.spacing(1) })),
        },
      },
    },
  },
});
