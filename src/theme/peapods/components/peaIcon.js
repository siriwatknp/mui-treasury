export default ({ palette, spacing, transitions }) => {
  const { white: invertedColor } = palette.common;
  const props = {
    verticalAlign: 'sub',
    '&.-push-left': {
      marginLeft: spacing.unit,
    },
    '&.-push-right': {
      marginRight: spacing.unit,
    },
    '& .MuiIcon--fa': {
      verticalAlign: 'unset',
      padding: 2,
      '&.svg-inline--fa': {
        width: '1em',
      },
    },
    '& i.MuiIcon--fa': {
      display: 'block',
      '&:before': {
        display: 'block',
        fontSize: 20,
      },
    },
    '&.-inverted': {
      color: invertedColor,
    },
    '&.-small': {
      fontSize: 20,
      '& i.MuiIcon--fa:before': {
        fontSize: 16,
      },
    },
    '&.-big': {
      fontSize: 28,
      '& i.MuiIcon--fa:before': {
        fontSize: 24,
      },
    },
    '&.-large': {
      fontSize: 32,
      '& i.MuiIcon--fa:before': {
        fontSize: 28,
      },
    },
    '&.-link': {
      cursor: 'pointer',
      color: palette.text.primary,
      transition: transitions.create(),
      '&:hover': {
        transform: 'scale(1.2)',
      },
      '&.-inverted': {
        color: invertedColor,
      },
    },
    '&[class*="-bg"]': {
      width: '1.5em',
      height: '1.5em',
      padding: '0.25em',
    },
    '&.-bg-default': {
      backgroundColor: palette.grey[200],
      '&.-link.-inverted': {
        color: palette.text.primary,
      },
    },
    '&.-bg-primary': {
      backgroundColor: palette.primary.main,
      color: invertedColor,
    },
    '&.-bg-secondary': {
      backgroundColor: palette.secondary.main,
      color: invertedColor,
    },
    '&.-bg-danger': {
      backgroundColor: palette.error.main,
      color: invertedColor,
    },
    '&.-bg-white': {
      backgroundColor: invertedColor,
    },
    '&.-bg-lightPrimary': {
      backgroundColor: '#1FF4B2',
    },
    '&.-bg-lightSecondary': {
      backgroundColor: palette.secondary.light,
    },
    '&.-square': {
      borderRadius: 0,
    },
    '&.-circular': {
      borderRadius: '50%',
    },
    '&.-round': {
      borderRadius: 4,
    },
    '& .fa-facebook-f': {
      color: '#3C5A99',
    },
    '& .fa-twitter': {
      color: '#38A1F3',
    },
    '& .fa-meetup': {
      color: '#e51937',
    },
    '& .fa-hashtag': {
      color: '#5039e5',
    },
    '& .fa-users': {
      color: '#e58124',
    },
  };
  return {
    MuiIcon: {
      root: {
        ...props,
      },
    },
    MuiSvgIcon: {
      root: {
        ...props,
      },
    },
  };
};
