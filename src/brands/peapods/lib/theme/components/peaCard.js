export default ({ spacing, palette, typography, breakpoints }) => ({
  MuiCard: {
    root: {
      '&.PeaEventCardSmall-root': {
        transition: '0.3s',
        margin: 'auto',
        minWidth: 240,
        // boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
        // '&:hover': {
        //   boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
        // },
        '& > .MuiCardMedia-root': {
          paddingTop: '56.25%',
          position: 'relative',
          '& .MuiCardTag-root': {
            fontFamily: typography.fontFamily,
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            bottom: spacing(1.5),
            left: spacing(1.5),
            border: '1px solid #ffffff',
            borderRadius: 4,
            padding: 4,
            backgroundColor: 'rgba(0,0,0,0.38)',
            color: '#ffffff',
            fontSize: 10,
          },
        },
        '& > .MuiCardContent-root': {
          textAlign: 'left',
          padding: spacing(2),
        },
        '& .MuiTypography--heading': {
          fontWeight: 'bold',
          textAlign: 'left',
          fontSize: '1rem',
          marginBottom: spacing(1.5),
        },
        '& .MuiTypography--subheading': {
          lineHeight: 1.8,
        },
        '& .MuiAvatar-root': {
          display: 'inline-block',
          border: '2px solid white',
          '&:not(:first-of-type)': {
            marginLeft: -spacing(1),
          },
        },
      },
      '&.PeaEventCard-root': {
        transition: '0.3s',
        margin: 'auto',
        minWidth: 375,
        maxWidth: 500,
        // boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
        // '&:hover': {
        //   boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
        // },
        '& > .MuiCardMedia-root': {
          paddingTop: '56.25%',
          position: 'relative',
          '& .MuiCardTag-root': {
            fontFamily: typography.fontFamily,
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #ffffff',
            borderRadius: 4,
            padding: 4,
            backgroundColor: 'rgba(0,0,0,0.38)',
            color: '#ffffff',
            fontSize: 10,
          },
        },
        '& > .MuiCardContent-root': {
          textAlign: 'left',
          padding: spacing(2),
        },
        '> * span.MuiCardHeader-title': {
          fontWeight: 'bold',
          textAlign: 'left',
          fontSize: '5rem !important',
          marginBottom: spacing(1.5),
        },

        '& .MuiTypography--heading': {
          fontWeight: 'bold',
          textAlign: 'left',
          fontSize: '3rem',
          marginBottom: spacing(1.5),
        },
        '& .MuiTypography--subheading': {
          lineHeight: 1.8,
        },
        '& .MuiAvatar-root': {
          display: 'inline-block',
          border: '2px solid white',
          '&:not(:first-of-type)': {
            marginLeft: -spacing(1),
          },
        },
      },
      '&.PodCard-root': {
        transition: '0.3s',
        margin: 'auto',
        minWidth: 240,
        // boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
        // '&:hover': {
        //   boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
        // },
        '& > .MuiCardMedia-root': {
          paddingTop: '56.25%',
          position: 'relative',
          '& .MuiCardTag-root': {
            fontFamily: typography.fontFamily,
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #ffffff',
            borderRadius: 4,
            padding: 4,
            backgroundColor: 'rgba(0,0,0,0.38)',
            color: '#ffffff',
            fontSize: 10,
          },
        },
        '& > .MuiCardContent-root': {
          textAlign: 'left',
          padding: spacing(2),
        },
        '& .MuiTypography--heading': {
          fontWeight: 'bold',
          textAlign: 'left',
          fontSize: '1rem',
          marginBottom: spacing(1.5),
        },
        '& .MuiTypography--subheading': {
          lineHeight: 1.8,
        },
        '& .MuiAvatar-root': {
          display: 'inline-block',
          border: '2px solid white',
          '&:not(:first-of-type)': {
            marginLeft: -spacing(1),
          },
        },
      },
      '&.PeaProfileCard-root': {
        minWidth: 300,
        '& > .MuiCardMedia-root': {
          paddingTop: '40%',
          position: 'relative',
          backgroundColor: palette.grey[200],
          '& .MuiAvatar-root': {
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
            transform: 'translateY(32%)',
            left: spacing(1.5),
            border: '2px solid #ffffff',
          },
        },
        '& > .MuiCardContent-root': {
          paddingTop: spacing(1),
        },
        '& .MuiTypography--heading': {
          fontWeight: 'bold',
          textAlign: 'left',
          fontSize: '1rem',
        },
        '& .MuiTypography--subheading': {
          color: palette.text.secondary,
          marginBottom: spacing(1.5),
          textAlign: 'left',
          fontSize: 12,
        },
        '& .PeaProfileCard-actions': {
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        },
      },
      '&.PeaFullProfile-root': {
        position: 'relative',
        '& .MuiCardMedia-root': {
          paddingTop: '44%',
          position: 'absolute',
          width: '100%',
          top: 0,
          zIndex: 1,
          backgroundColor: palette.grey[200],
          [breakpoints.up('sm')]: {
            paddingTop: '32%',
          },
        },
        '& .MuiAvatar-root-profilePic': {
          width: 84,
          height: 84,
          alignItems: 'center',
          transform: 'translateY(-60%)',
          left: 0,
          border: '4px solid #ffffff',
          zIndex: 3,
          [breakpoints.up('sm')]: {
            width: 104,
            height: 104,
            left: spacing(1.5),
          },
        },
        '& .PeaFullProfile-profileImgBtn': {
          display: 'flex',
          flexDirection: 'column',
          transform: 'translateY(-60%)',
          left: 0,
          borderRadius: '50%',
          [breakpoints.up('sm')]: {
            left: spacing(1.5),
          },
          '& .MuiAvatar-root-profilePic': {
            '&:after': {
              background: 'rgba(0,0,0,0.4)',
              content: '" "',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            },
            zIndex: 0,
            transform: 'none',
            left: 0,
          },
        },
        '& .PeaFullProfile-coverImgBtn': {
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          top: 0,
          left: 0,
          bottom: 0,
          width: '100%',
          background: 'rgba(0,0,0,0.6)',
          '& .material-icons': {
            fontSize: 48,
          },
        },
        '& .MuiCardContent-root': {
          position: 'relative',
          textAlign: 'left',
          zIndex: 2,
          background: palette.common.white,
          marginTop: '36%',
          borderRadius: spacing(2),
          [breakpoints.up('sm')]: {
            marginTop: '24%',
          },
        },
      },
      '&.PeaAccountProfile-root': {
        position: 'relative',
        width: '100%',
        '& > .MuiCardMedia-root': {
          paddingTop: '44%',
          position: 'absolute',
          width: '100%',
          top: 0,
          zIndex: 1,
          backgroundColor: palette.grey[200],
          [breakpoints.up('sm')]: {
            paddingTop: '32%',
          },
        },
        '& .MuiAvatar-root-profilePic': {
          width: 96,
          height: 96,
          alignItems: 'center',
          transform: 'translateY(-60%)',
          left: 0,
          border: '4px solid #ffffff',
          zIndex: 3,
          [breakpoints.up('sm')]: {
            width: 104,
            height: 104,
            left: spacing(1.5),
          },
        },
        '& .PeaAccountProfile-profileImgBtn': {
          display: 'flex',
          flexDirection: 'column',
          transform: 'translateY(-60%)',
          left: 0,
          borderRadius: '50%',
          [breakpoints.up('sm')]: {
            left: spacing(1.5),
          },
          '& .MuiAvatar-root-profilePic': {
            '&:after': {
              background: 'rgba(0,0,0,0.4)',
              content: '" "',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            },
            zIndex: 0,
            transform: 'none',
            left: 0,
          },
        },
        '& .PeaAccountProfile-coverImgBtn': {
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          top: 0,
          left: 0,
          bottom: 0,
          width: '100%',
          background: 'rgba(0,0,0,0.6)',
          '& .material-icons': {
            fontSize: 48,
          },
        },
        '& > .MuiCardContent-root': {
          position: 'relative',
          textAlign: 'left',
          zIndex: 2,
          background: palette.common.white,
          marginTop: '36%',
          borderRadius: spacing(2),
          [breakpoints.up('sm')]: {
            marginTop: '24%',
          },
          '& .MuiGrid-container.-actions': {
            justifyContent: 'space-between',
            [breakpoints.up('sm')]: {
              justifyContent: 'flex-end',
              '& .MuiButton-root.-shape-chubby': {
                minWidth: 120,
              },
            },
          },
          '& .MuiGrid-item.-reputation': {
            flexGrow: 1,
            [breakpoints.up('sm')]: {
              flexGrow: 'unset',
            },
            '& .MuiTypography-root': {
              [breakpoints.up('sm')]: {
                marginTop: 16,
              },
            },
          },
        },
        '& .PeaPodCard-root': {
          boxShadow: 'none',
        },
      },
      '&.PeaPodCard-root': {
        textAlign: 'left',
        '& > .MuiCardMedia-root': {
          paddingTop: '40%',
          position: 'relative',
        },
        '& > .MuiCardContent-root': {
          paddingBottom: 16,
        },
        '& .MuiTypography--heading': {
          paddingBottom: 16,
          fontSize: 16,
          fontWeight: 'bold',
        },
        '& .PeaPodCardPeople-root': {
          paddingTop: 16,
        },
        '& .PeaPodCardPeople-people': {
          display: 'flex',
          alignItems: 'center',
          '&:not(:first-of-type)': {
            marginTop: 8,
          },
        },
      },
      '&.PeaPersonCard-root': {
        margin: 'auto',
        boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
        [breakpoints.up('sm')]: {
          display: 'flex',
        },
        '& .MuiCardMedia-root': {
          backgroundColor: palette.grey[200],
          [breakpoints.only('xs')]: {
            paddingBottom: '56.25%',
          },
          [breakpoints.up('sm')]: {
            paddingRight: 160,
          },
        },
        '& .MuiCardContent-root': {
          minWidth: 280,
          textAlign: 'left',
          padding: spacing(2),
          '& .MuiListItem-root': {
            padding: 0,
            paddingBottom: spacing(2),
          },
          '& .PeaPersonCard-bio': {
            '& b': {
              color: palette.secondary.main,
            },
          },
        },
        '& .material-icons': {
          marginTop: 3,
        },
      },
      '&.PeaUserCard-root': {
        minWidth: 288,
        textAlign: 'left',
        '& .MuiCardMedia-root': {
          paddingTop: '40%',
          position: 'relative',
          backgroundColor: palette.grey[200],
          '& .MuiAvatar-root': {
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
            transform: 'translateY(32%)',
            left: spacing(1.5),
            border: '2px solid #ffffff',
          },
        },
        '& .PeaUserCard-actions': {
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        },
      },
      '&.PeaGroupProfile-root': {
        position: 'relative',
        textAlign: 'left',
        '& .MuiCardMedia-root': {
          paddingTop: '44%',
          position: 'absolute',
          width: '100%',
          top: 0,
          zIndex: 1,
          backgroundColor: palette.grey[200],
          [breakpoints.up('sm')]: {
            paddingTop: '40%',
          },
        },
        '& .MuiCardContent-root': {
          position: 'relative',
          textAlign: 'left',
          zIndex: 2,
          background: palette.common.white,
          marginTop: '36%',
          borderRadius: spacing(2),
          [breakpoints.up('sm')]: {
            marginTop: '36%',
          },
          '& .MuiTabs-root': {
            marginLeft: -16,
            marginRight: -16,
            width: 'auto',
            minWidth: 500,
          },
        },
        '& .MuiCardActions-root': {
          position: 'relative',
          zIndex: 3,
          boxShadow: '0 0 8px 0 rgba(0,0,0,0.12)',
          '& .MuiInputBase-root': {
            padding: '0 16px',
            borderRadius: 20,
            backgroundColor: palette.grey[100],
            flexGrow: 1,
            minHeight: 40,
          },
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
      '&.MuiCardActions--centered': {
        justifyContent: 'center',
      },
    },
  },
  MuiCardHeader: {
    content: {
      textAlign: 'left',
    },
  },
});
