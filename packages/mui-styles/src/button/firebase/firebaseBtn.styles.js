export default ({ shadows, palette }) => ({
  root: {
    borderRadius: 8,
  },
  text: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  contained: {
    boxShadow: 'none',
    '&:active': {
      boxShadow: shadows[0],
    },
  },
  containedPrimary: {
    backgroundColor: '#039be5',
    color: palette.common.white,
    '&:hover': {
      backgroundColor: '#0388ca',
      boxShadow: 'none',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: '#0388ca',
      },
    },
  },
  label: {
    textTransform: 'none',
    letterSpacing: '0.5px',
    fontWeight: 500,
  },
});
