export default ({ muiBaseTheme, attach, borderColor, APP_BAR, shade }) => ({
  MuiAppBar: {
    colorDefault: {
      backgroundColor: muiBaseTheme.palette.common.white,
    },
    root: {
      zIndex: 1300,
      borderBottom: `1px solid ${borderColor.default}`,
      [attach(APP_BAR.shaded)]: {
        backgroundColor: shade.light,
      },
    },
  },
});
