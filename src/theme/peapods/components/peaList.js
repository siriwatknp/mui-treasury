export default ({ spacing, palette, breakpoints }) => {
  const px = spacing(2);
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
      root: {
        padding: '0 16px',
      },
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
          '& .MuiIcon-root.-sticker': {
            position: 'absolute',
            top: 0,
            right: 0,
            fontSize: 14,
            transform: 'translate(25%, -25%)',
            boxShadow: '1px 1px 2px 0 rgba(0,0,0,0.6)',
          },
          '& .MuiIcon-root.-pea': {
            position: 'absolute',
            top: 0,
            right: 0,
            fontSize: 21,
            transform: 'translate(25%, -25%)',
          },
          '& .MuiListItemText-primary': {
            color: palette.text.secondary,
            fontWeight: 400,
            letterSpacing: 0,
            display: 'block',
            marginBottom: spacing(1),
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
          '&.-unread': {
            backgroundColor: palette.secondary.main,
            borderBottom: '1px solid #59c0ff',
            '& .MuiAvatar-root': {
              backgroundColor: palette.grey[100],
            },
            '& .MuiListItemText-primary': {
              color: palette.grey[300],
              '& b': {
                color: palette.common.white,
              },
            },
            '& .MuiListItemText-secondary': {
              color: palette.grey[300],
            },
            '& .PeaButton-ignore': {
              color: palette.common.white,
            },
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
