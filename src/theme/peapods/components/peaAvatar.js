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
        '&.MuiAvatar--large': {
          ...createSize(9),
        },
        '&.MuiAvatar--huge': {
          ...createSize(14),
        },
      },
    },
  };
};
