export default ({ palette, shadows }) => ({
  MuiButton: {
    root: {
      borderRadius: 100,
      minWidth: 160,
      minHeight: 44,
      '& span:not(.material-icons)': {
        margin: 'auto',
      },
    },
    text: {
      paddingLeft: 16,
      paddingRight: 16,
    },
    label: {
      textTransform: 'initial',
      fontWeight: 'bold',
    },
    outlined: {
      borderWidth: 2,
    },
    outlinedPrimary: {
      color: palette.text.secondary,
      borderWidth: '2px !important',
    },
    contained: {
      boxShadow: 'none',
      '&$focusVisible': {
        boxShadow: shadows[0],
      },
      '&:active': {
        boxShadow: shadows[0],
      },
      '& svg, .material-icons': {
        '&:first-child': {
          marginLeft: -8,
        },
        '&:last-child': {
          marginRight: -8,
        },
      },
    },
    containedPrimary: {
      color: palette.common.white,
    },
  },
});
