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
    '&.circular': {
      borderRadius: '50%',
      width: 32,
      height: 32,
      padding: 2,
    },
    '&.light': {
      backgroundColor: '#1FF4B2',
      color: white,
    },
    '&.white': {
      backgroundColor: white,
    },
    '& .fa-facebook-f': {
      color: '#3C5A99',
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
