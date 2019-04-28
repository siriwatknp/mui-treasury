export default ({ palette, spacing, transitions }) => {
  const { white: invertedColor } = palette.common;
  const props = {
    // STANDALONE
    verticalAlign: 'sub',
    '&.-push-left': {
      marginLeft: spacing.unit,
    },
    '&.-push-right': {
      marginRight: spacing.unit,
    },
    '&.-link': {
      cursor: 'pointer',
      '&:not([class*="-color"])': {
        color: palette.text.primary,
      },
      transition: transitions.create(),
      '&:hover': {
        transform: 'scale(1.2)',
      },
    },
    // colors
    '&.-color-success': {
      color: '#28a745',
    },
    '&.-color-danger': {
      color: palette.error.main,
    },
    '&.-inverted': {
      color: invertedColor,
    },
    // icon
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
    // -------------------------------
    // sizes
    '&.-size-small': {
      fontSize: 20,
      '& i.MuiIcon--fa:before': {
        fontSize: 16,
      },
    },
    '&.-size-big': {
      fontSize: 28,
      '& i.MuiIcon--fa:before': {
        fontSize: 24,
      },
    },
    '&.-size-large': {
      fontSize: 32,
      '& i.MuiIcon--fa:before': {
        fontSize: 28,
      },
    },
    // background
    '&[class*="-bg"]': {
      width: '1.5em',
      height: '1.5em',
      padding: '0.25em',
    },
    '&.-bg-default': {
      backgroundColor: palette.grey[200],
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
    // shapes
    '&.-shape-square': {
      borderRadius: 0,
    },
    '&.-shape-circular': {
      borderRadius: '50%',
    },
    '&.-shape-round': {
      borderRadius: 4,
    },

    // COMBINATION
    '&.-bg-default.-link.-inverted': {
      color: palette.text.primary,
    },
    '&.-link.-inverted:not([class*="-color"])': {
      color: invertedColor,
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
