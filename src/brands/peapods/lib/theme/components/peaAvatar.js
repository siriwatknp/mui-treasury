export default ({ spacing }) => {
  const createSize = value => ({
    width: value * spacing(1),
    height: value * spacing(1),
  });
  return {
    MuiAvatar: {
      root: {
        backgroundColor: '#ffffff',
        '&.MuiAvatar--small': {
          ...createSize(4),
        },
        '&.MuiAvatar--big': {
          ...createSize(6),
        },
        '&.MuiAvatar--large': {
          ...createSize(10),
        },
        '&.MuiAvatar--huge': {
          ...createSize(14),
        },
      },
    },
  };
};
