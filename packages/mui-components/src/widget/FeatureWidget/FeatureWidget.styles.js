export default ({ typography, breakpoints, palette }) => ({
  root: {
    padding: '1.5rem',
    [breakpoints.up('sm')]: {
      padding: '2.5rem',
    },
  },
  iconWrapper: {
    width: 104,
    height: 104,
    borderRadius: '50%',
    backgroundColor: palette.grey[100],
    margin: '0 auto 1.2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [breakpoints.up('sm')]: {
      marginBottom: '2rem',
    },
  },
  icon: {
    fontSize: 40,
    color: palette.grey[500],
  },
  title: {
    fontFamily: typography.fontFamily,
    fontSize: '1.125rem',
    fontWeight: 600,
    textAlign: 'center',
  },
  content: {
    lineHeight: '1.5em',
    textAlign: 'center',
  },
});
