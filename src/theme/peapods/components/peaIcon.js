export default ({ palette }) => {
  const { white } = palette.common;
  const props = {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& .svg-inline--fa': {
      maxHeight: '0.875em',
      maxWidth: '0.875em',
    },
    '&.PeaIcon--circular': {
      borderRadius: '50%',
      width: 32,
      height: 32,
      padding: 2,
    },
    '&.PeaIcon--light': {
      backgroundColor: '#1FF4B2',
      color: white,
    },
    '&.PeaIcon--bg-white': {
      backgroundColor: white,
    },
    '& .fa-facebook-f': {
      color: '#3C5A99',
    },
    '&.PeaIcon--small': {
      fontSize: 16,
    },
    '&.PeaIcon--big': {
      fontSize: 32,
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
