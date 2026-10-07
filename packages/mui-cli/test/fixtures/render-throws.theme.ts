import { createTheme } from '@mui/material/styles';

export default createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => {
          if (ownerState.variant === 'outlined') {
            throw new Error('outlined render fails');
          }
          return {};
        },
      },
    },
  },
});
