module.exports = {
  helpers: {
    now: () => {
      const now = new Date();
      return now.toDateString();
    },
  },
};
