import { Theme, ThemeOptions } from '@material-ui/core';
import Color from 'color';

export const tabsStyles = {
  indicator: {
    display: 'none',
  },
};

export const tabItemStyles = ({
  palette,
  spacing,
  breakpoints,
}: Pick<Theme, 'breakpoints' | 'palette' | 'spacing'>) => {
  const defaultBgColor = palette.grey[300];
  const defaultSelectedBgColor = '#272C34';
  const defaultMinWidth = {
    md: 120,
  };
  const getTextColor = (color: string) => {
    if (Color(color).isLight()) return palette.text.primary;
    return palette.common.white;
  };
  return {
    root: ({
      bgColor = defaultBgColor,
      minWidth = defaultMinWidth,
    }: {
      bgColor?: string;
      minWidth?: { md: number };
    }) => ({
      opacity: 1,
      overflow: 'initial',
      paddingLeft: spacing(2),
      paddingRight: spacing(2),
      borderTopLeftRadius: spacing(1),
      borderTopRightRadius: spacing(1),
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
          marginTop: spacing(0.5),
          backgroundColor: palette.grey[500],
        },
      },
      '& + $selected:before': {
        opacity: 0,
      },
      '&:hover': {
        '&:not($selected)': {
          backgroundColor: Color(bgColor)
            .whiten(0.6)
            .hex(),
        },
        '&::before': {
          opacity: 0,
        },
        '& + $root:before': {
          opacity: 0,
        },
      },
    }),
    selected: ({
      selectedBgColor = defaultSelectedBgColor,
    }: {
      selectedBgColor?: string;
    }) => ({
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
      marginTop: spacing(0.5),
      textTransform: 'initial',
    },
  };
};
