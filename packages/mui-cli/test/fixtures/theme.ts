const theme = {
  palette: { primary: { main: '#7C3AED' } },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { variants: [{ props: { size: 'medium' }, style: { minHeight: 44 } }] },
      },
    },
  },
};
export default theme;
