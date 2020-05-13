import { Theme } from '@material-ui/core';

export const tabsStyles = ({
  spacing,
  palette,
}: Pick<Theme, 'spacing' | 'palette'>) => ({
  root: {
    marginLeft: spacing(1),
  },
  indicator: {
    height: 3,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    backgroundColor: palette.common.white,
  },
});

export const tabItemStyles = ({
  breakpoints,
  spacing,
}: Pick<Theme, 'breakpoints' | 'spacing'>) => ({
  root: {
    textTransform: 'initial',
    margin: spacing(0, 2),
    minWidth: 0,
    [breakpoints.up('md')]: {
      minWidth: 0,
    },
  },
  wrapper: {
    fontWeight: 'normal',
    letterSpacing: 0.5,
  },
});
