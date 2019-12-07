export default (ctx = {}) => {
  const { header = {} } = ctx;
  return {
    getPrimaryStyle: theme => {
      if (!header.clipped && header.secondaryClipped) {
        return { zIndex: theme.zIndex.drawer + 20 };
      }
      return undefined;
    },
    getSecondaryStyle: theme => {
      if (header.clipped && !header.secondaryClipped) {
        return { zIndex: theme.zIndex.drawer + 20 };
      }
      return undefined;
    },
  };
};
