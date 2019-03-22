export default ({ muiBaseTheme }) => {
  const createSize = value => ({
    width: value * muiBaseTheme.spacing.unit,
    height: value * muiBaseTheme.spacing.unit,
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
