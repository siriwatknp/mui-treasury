export default ({ muiBaseTheme }) => ({
  MuiBadge: {
    badge: {
      boxShadow: `0 0 12px 0 ${muiBaseTheme.palette.error.main}`,
    },
  },
});
