export default () => ({
  root: {

    backgroundColor: 'green',
    paddingTop: '25px',
    color: 'green',

    '& + *': {
      marginTop: '16px',
      fontSize: '5rem',
    },
    '&:hover, &.Mui-focusVisible': {
      backgroundColor: 'transparent !important',
    },
    '& input + *': {
      borderRadius: '50%',
      width: 160,
      height: 160,
    },
    '& input:disabled + *': {
      boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.3) !important',
      background: 'rgba(206,217,224,.5) !important',
    },
    '&:not($checked)': {
      '& input + *': {
        boxShadow:
          '0 1px 3px 0 rgba(0,0,0,0.12), inset 0 0 0 1px rgba(16,22,26,.5)',
        backgroundColor: 'green',
      }
    },
  },
  select: {
    '& input + *': {
      backgroundColor: 'green',
      '&:before': {
        display: 'block',
        width: 64,
        height: 64,
        content: '""',
      },
    }
  },
});
