export default ({ palette }) => {
  const initialShadow = `0 4px 6px 2px rgba(0,0,0,0.08), 0px 2px 4px 0px rgba(0,0,0,0.24), inset 0 -3px 0 0 rgba(0,0,0,0.12)`;
  return {
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
      '&:focus': {
        boxShadow: initialShadow,
      },
      '&:active': {
        boxShadow: `inset 0 4px 4px 0 rgba(0,0,0,0.14)`,
      },
    },
    containedPrimary: {
      textShadow: '0 1px 0 rgba(0,0,0,0.2)',
      transition: '0.2s',
      background: `linear-gradient(to top, ${palette.primary.main}, #7fb8d0)`,
      boxShadow: initialShadow,
      '& $label': {
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
      },
    },
    text: {
      padding: '6px 16px',
    },
  };
};
