import Color from 'color';

export default ({ muiBaseTheme, primary, secondary }) => ({
  MuiTabs: {
    root: {
      width: '100%',
      borderBottom: 'none',
    },
    indicator: {
      backgroundColor: primary.main,
    },
  },
  MuiTab: {
    root: {
      minHeight: 53,
      minWidth: 0,
      [muiBaseTheme.breakpoints.up('md')]: {
        minWidth: 0,
      },
      '&:hover': {
        backgroundColor: Color(primary.main)
          .fade(0.9)
          .string(),
        '& .MuiTab-label': {
          color: secondary.main,
        },
      },
      '&$selected': {
        '& *': {
          color: secondary.main,
        },
      },
    },
    textColorInherit: {
      opacity: 1,
    },
    wrapper: {
      '& svg': {
        fontSize: 26.25,
      },
    },
    labelContainer: {
      width: '100%',
      padding: 15,
      [muiBaseTheme.breakpoints.up('md')]: {
        padding: 15,
      },
    },
    label: {
      textTransform: 'none',
      fontSize: 15,
      fontWeight: 700,
      color: '#657786',
    },
  },
  MuiPrivateTabIndicator: {
    root: {
      height: 4,
      borderRadius: 4,
    },
  },
});
