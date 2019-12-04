export default ({ palette, breakpoints }) => ({
  root: {
    borderRadius: '50%',
    border: '1px solid',
    borderColor: 'rgba(255, 255, 255, 0.6)',
    width: 40,
    minWidth: 40,
    height: 40,
    '& $label': {
      transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    },
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.38)',
      borderColor: palette.common.white,
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
  label: {
    color: palette.common.white,
  },
});
