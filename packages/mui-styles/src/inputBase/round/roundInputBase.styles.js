export default ({ palette }) => ({
  root: {
    borderRadius: 40,
    border: '1px solid',
    borderColor: palette.grey[400],
    overflow: 'hidden',
    backgroundColor: '#fff',
    '&:hover:not($disabled)': {
      borderColor: palette.grey[500],
    },
    '& > svg': {
      color: palette.grey[500],
    },
  },
  adornedStart: {
    paddingLeft: '0.5rem',
  },
  adornedEnd: {
    paddingRight: '0.5rem',
  },
  colorSecondary: {},
  focused: {
    boxShadow: '0 2px 6px 0 rgba(0,0,0,0.24)',
    borderColor: palette.primary.main,
    '&:hover:not($disabled)': {
      borderColor: palette.primary.main,
    },
    '&$adornedStart': {
      '& > svg': {
        color: palette.primary.light,
      },
    },
    '&$colorSecondary': {
      borderColor: palette.secondary.main,
      '&:hover:not($disabled)': {
        borderColor: palette.secondary.main,
      },
      '&$adornedStart': {
        '& > svg': {
          color: palette.secondary.light,
        },
      },
    }
  },
  error: {
    backgroundColor: '#fff9f9',
    borderColor: '#ff5252',
    '&:hover:not($disabled)': {
      borderColor: '#ff5252',
    },
  },
  disabled: {
    backgroundColor: palette.grey[100],
  },
  input: {
    padding: '0.625rem 1rem',
    '&:not(:first-child)': {
      paddingLeft: '0.5rem',
    },
    '&:not(:last-child)': {
      paddingRight: '0.5rem',
    },
  },
});
