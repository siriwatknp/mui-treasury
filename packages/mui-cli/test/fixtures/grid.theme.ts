import type {} from '@mui/x-data-grid/themeAugmentation';

export default {
  components: {
    MuiDataGrid: {
      styleOverrides: {
        cell: { padding: '0 24px' },
      },
    },
  },
};
