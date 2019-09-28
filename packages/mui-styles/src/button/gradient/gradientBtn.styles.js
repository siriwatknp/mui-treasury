export default ({ palette, shadows }) => ({
  root: ({ chubby }) => ({
    minWidth: 200,
    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    background:
      /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      'linear-gradient(to right, #FFC371, #FF5F6D)',
    '&:hover': {
      transform: 'scale(1.1)',
    },
    ...(chubby && {
      borderRadius: 50,
    }),
  }),
  label: {
    color: palette.common.white,
    textTransform: 'none',
    fontSize: 15,
    fontWeight: 700,
  },
  contained: {
    minHeight: 30,
    boxShadow: shadows[0],
    '&:active': {
      boxShadow: shadows[0],
    },
  },
});
