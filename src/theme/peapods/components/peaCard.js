export default ({ spacing, palette }) => ({
  MuiCard: {
    root: {
      '&.PeaEventCard-root': {
        transition: '0.3s',
        margin: 'auto',
        minWidth: 240,
        // boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
        // '&:hover': {
        //   boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
        // },
        '& .MuiCardMedia-root': {
          paddingTop: '56.25%',
          position: 'relative',
          '& .MuiCardTag-root': {
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            bottom: spacing.unit * 1.5,
            left: spacing.unit * 1.5,
            border: '1px solid #ffffff',
            borderRadius: 4,
            padding: 4,
            backgroundColor: 'rgba(0,0,0,0.38)',
            color: '#ffffff',
            fontSize: 10,
          },
        },
        '& .MuiCardContent-root': {
          textAlign: 'left',
          padding: spacing.unit * 2,
        },
        '& .MuiTypography--heading': {
          fontWeight: 'bold',
          textAlign: 'left',
          fontSize: '1rem',
          marginBottom: spacing.unit * 1.5,
        },
        '& .MuiTypography--subheading': {
          lineHeight: 1.8,
        },
        '& .MuiAvatar-root': {
          display: 'inline-block',
          border: '2px solid white',
          '&:not(:first-of-type)': {
            marginLeft: -spacing.unit,
          },
        },
      },
      '&.PeaProfileCard-root': {
        minWidth: 300,
        '& .MuiCardMedia-root': {
          paddingTop: '40%',
          position: 'relative',
          '& .MuiAvatar-root': {
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
            transform: 'translateY(32%)',
            left: spacing.unit * 1.5,
            border: '2px solid #ffffff',
          },
        },
        '& .MuiCardContent-root': {
          paddingTop: spacing.unit,
        },
        '& .MuiTypography--heading': {
          fontWeight: 'bold',
          textAlign: 'left',
          fontSize: '1rem',
        },
        '& .MuiTypography--subheading': {
          color: palette.text.secondary,
          marginBottom: spacing.unit * 1.5,
          textAlign: 'left',
          fontSize: 12,
        },
        '& .PeaProfileCard-actions': {
          display: 'flex',
          justifyContent: 'flex-end',
        },
      },
    },
  },
  MuiCardActions: {
    root: {
      '&.MuiCardActions--primary': {
        backgroundColor: palette.primary.main,
        '& .MuiButton-root, .MuiButton--auto': {
          borderRadius: 4,
        },
        '& .MuiCardActions-left': {},
        '& .MuiCardActions-right': {
          marginLeft: 'auto',
        },
      },
    },
  },
});
