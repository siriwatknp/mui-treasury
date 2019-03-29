export default ({ spacing, palette, breakpoints }) => {
  const px = spacing.unit * 2;
  return {
    MuiListSubheader: {
      root: {
        color: palette.text.primary,
        padding: `0 ${px}px`,
        textAlign: 'left',
        lineHeight: '25px',
        '& *': {
          fontWeight: 500,
        },
        '&.MuiListSubheader--stretch': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
      },
      gutters: {
        padding: '10px 15px',
        paddingLeft: px,
        paddingRight: px,
        [breakpoints.up('sm')]: {
          padding: '10px 15px',
          paddingLeft: px,
          paddingRight: px,
        },
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: 700,
        lineHeight: 1.3125,
      },
      secondary: {
        lineHeight: 1.3125,
        color: 'rgb(101, 119, 134)',
      },
    },
    MuiListItem: {
      root: {
        background: palette.common.white,
        '& .MuiButton-root, .MuiButton--auto': {
          minHeight: 32,
        },
        '&.PeaNotificationItem-root': {
          '& .MuiListItemText-primary': {
            color: palette.text.secondary,
            fontWeight: 400,
            letterSpacing: 0,
            '& b': {
              color: palette.text.primary,
            },
          },
          '& .MuiListItemText-secondary': {
            color: palette.text.disabled,
          },
          '& .PeaNotificationItem-actions': {
            flexBasis: 'auto',
            flexShrink: 10000,
            width: 'auto',
          },
        },
      },
      gutters: {
        padding: px,
        paddingLeft: px,
        paddingRight: px,
        [breakpoints.up('sm')]: {
          padding: px,
          paddingLeft: px,
          paddingRight: px,
        },
      },
      button: {
        '&:hover': {
          backgroundColor: '#F5F8FA',
        },
      },
      focusVisible: {
        backgroundColor: 'rgba(230, 236, 240, 0.7)',
      },
    },
    MuiList: {
      root: {
        background: palette.common.white,
      },
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
  };
};
