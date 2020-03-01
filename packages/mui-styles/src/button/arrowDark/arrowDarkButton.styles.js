export default ({ breakpoints }) => ({
  root: {
    borderRadius: '50%',
    border: '1px solid',
    width: 40,
    minWidth: 40,
    height: 40,
    '& $label': {
      transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    },
    '&:hover': {
      '& $label': {
        transform: 'scale(1.3)',
        [breakpoints.up('md')]: {
          transform: 'scale(1.7)',
        },
      },
    },
    [breakpoints.up('sm')]: {
      width: 48,
      minWidth: 48,
      height: 48,
    },
    [breakpoints.up('md')]: {
      width: 64,
      minWidth: 64,
      height: 64,
    },
  },
  label: {},
});
