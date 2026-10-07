import type { Theme } from '@mui/material/styles';

export default {
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          fontSize: '16px',
          letterSpacing: '0px',
          '@media (pointer: fine)': { fontSize: '14px' },
          [theme.breakpoints.up('md')]: { letterSpacing: '1px' },
        }),
      },
    },
  },
};
