export default ({ palette, breakpoints }) => {
  const space = 24;
  return {
    root: {
      minWidth: 256,
    },
    header: {
      padding: `4px ${space}px 0`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    avatar: {
      width: 48,
      height: 48,
      transform: 'translateY(50%)',
      '& > img': {
        margin: 0,
        backgroundColor: palette.common.white,
      },
      [breakpoints.up('sm')]: {
        width: 60,
        height: 60,
      },
    },
    divider: {
      backgroundColor: palette.grey[200],
      marginBottom: 24 - 1, // minus 1 due to divider height
      [breakpoints.up('sm')]: {
        marginBottom: 30 - 1, // minus 1 due to divider height
      },
    },
    extra: {
      textTransform: 'uppercase',
      fontSize: 14,
      color: palette.grey[500],
      letterSpacing: '1px',
    },
  };
};
