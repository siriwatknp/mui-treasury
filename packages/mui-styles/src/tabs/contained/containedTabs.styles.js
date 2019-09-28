import Color from 'color';

export const tabsStyles = () => ({
  indicator: {
    display: 'none',
  },
});

export const tabItemStyles = ({ palette, breakpoints }) => {
  const defaultBgColor = palette.common.white;
  const defaultSelectedBgColor = palette.secondary.main;
  const defaultMinWidth = {
    md: 120,
  };
  const getTextColor = color => {
    if (Color(color).isLight()) return palette.text.primary;
    return palette.common.white;
  };
  return {
    root: ({
      bgColor = defaultBgColor,
      minWidth = defaultMinWidth,
      selectedBgColor = defaultSelectedBgColor,
    }) => ({
      opacity: 1,
      overflow: 'initial',
      color: getTextColor(bgColor),
      backgroundColor: bgColor,
      transition: '0.2s',
      [breakpoints.up('md')]: {
        minWidth: minWidth.md,
      },
      '&:before': {
        transition: '0.2s',
      },
      '&:not(:first-of-type)': {
        '&:before': {
          content: '" "',
          position: 'absolute',
          left: 0,
          display: 'block',
          height: 20,
          width: 1,
          zIndex: 1,
          backgroundColor: palette.grey[300],
        },
      },
      '& + $selected:before': {
        opacity: 0,
      },
      '&:hover': {
        '&:not($selected)': {
          backgroundColor: Color(selectedBgColor)
            .fade(0.87)
            .toString(),
        },
        '&::before': {
          opacity: 0,
        },
        '& + $root:before': {
          opacity: 0,
        },
      },
    }),
    selected: ({ selectedBgColor = defaultSelectedBgColor }) => ({
      backgroundColor: selectedBgColor,
      color: getTextColor(selectedBgColor),
      '& + $root': {
        zIndex: 1,
      },
      '& + $root:before': {
        opacity: 0,
      },
    }),
    wrapper: {
      zIndex: 2,
      textTransform: 'initial',
    },
  };
};
