export default ({ palette }) => ({
  root: {
    borderRadius: 50,
    '&:hover': {
      borderBottom: 'none',
    },
  },
  label: {
    textTransform: 'initial',
    marginTop: -2,
  },
  contained: {
    boxShadow: 'none',
    backgroundColor: palette.grey[200],
    '&:active': {
      boxShadow: 'none',
    },
  },
  containedPrimary: {
    textShadow: '0 1px 0 rgba(0,0,0,0.2)',
    transition: '0.2s',
    background: `linear-gradient(to top, ${palette.primary.main}, #7fb8d0)`,
    boxShadow: `0 4px 6px 2px rgba(0,0,0,0.2), 0px 2px 4px 0px rgba(0,0,0,0.14), inset 0 -3px 0 0 rgba(0,0,0,0.12)`,
    transform: 'translateY(-1px)',
    // '&:hover': {
    //   transform: 'translateY(0)',
    //   boxShadow: 'none',
    // },
    '&:focus': {
      transform: 'translateY(0px)',
      boxShadow: 'none',
      // boxShadow: `inset 0 4px 4px 0 rgba(0,0,0,0.14)`,
    },
    '& $label': {
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
  },
  text: {
    padding: '6px 16px',
  },
});
