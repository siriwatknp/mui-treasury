export default ({ shadows, palette }) => ({
  root: {
    borderRadius: 100,
    minHeight: 30,
    padding: '0 1em',
  },
  label: {
    textTransform: 'none',
    fontSize: 15,
    fontWeight: 700,
  },
  outlined: {
    padding: '0 1em',
  },
  outlinedPrimary: {
    borderColor: 'rgb(29, 161, 242)',
    color: 'rgb(29, 161, 242)',
    '&:hover': {
      borderColor: 'rgb(29, 161, 242)',
      color: 'rgb(29, 161, 242)',
      backgroundColor: 'rgb(29, 161, 242, 0.1)',
    },
  },
  contained: {
    minHeight: 30,
    boxShadow: shadows[0],
    '&:hover': {
      boxShadow: shadows[0],
    },
    '&:active': {
      boxShadow: shadows[0],
    },
  },
  containedPrimary: {
    backgroundColor: 'rgb(29, 161, 242)',
    color: palette.common.white,
    '&:hover': {
      backgroundColor: 'rgb(29, 145, 218)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'rgb(29, 145, 218)',
      },
    },
  },
  sizeLarge: {
    padding: '0 1em',
    minHeight: 39,
  },
});
