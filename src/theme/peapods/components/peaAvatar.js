export default ({ spacing }) => {
  const createSize = value => ({
    width: value * spacing.unit,
    height: value * spacing.unit,
  });
  return {
    MuiAvatar: {
      root: {
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
