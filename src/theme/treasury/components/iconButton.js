export default ({ muiBaseTheme }) => ({
  MuiIconButton: {
    root: {
      '& .svg-inline--fa': {
        width: '1em',
        height: '1em',
      },
      '&.MuiIconButton--small': {
        padding: 8,
      },
    },
    label: {
      '&:hover': {
        color: muiBaseTheme.palette.common.black,
      },
    },
  },
});
