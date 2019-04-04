export default ({ palette, shadows, red }) => ({
  MuiButton: {
    root: {
      borderRadius: 100,
      minWidth: 160,
      minHeight: 44,
      color: palette.text.secondary,
      '& span:not(.material-icons)': {
        margin: 'auto',
      },
      '&.MuiButton--auto': {
        minWidth: 'auto',
      },
      '&.MuiButton--danger': {
        color: red.main,
      },
    },
    sizeSmall: {
      minHeight: 32,
      padding: '4px 12px',
      '& .material-icons:first-child': {
        marginRight: 4,
      },
      '& .material-icons:last-child': {
        marginLeft: 4,
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
