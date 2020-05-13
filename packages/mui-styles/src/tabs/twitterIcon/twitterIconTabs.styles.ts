import { Theme } from '@material-ui/core';

export const tabsStyles = () => ({
  root: {
    width: '100%',
    boxShadow: 'inset 0 -1px 0 0 #E6ECF0',
  },
  indicator: {
    backgroundColor: '#1da1f2',
  },
});

export const tabItemStyles = ({ breakpoints }: Theme) => ({
  root: {
    minHeight: 53,
    minWidth: 80,
    [breakpoints.up('md')]: {
      minWidth: 120,
    },
    '&:hover': {
      '& .MuiTab-label': {
        color: '#1da1f2',
      },
    },
    '&$selected': {
      '& *': {
        color: '#1da1f2',
      },
    },
    '&.MuiTab--iconOnly': {
      '& .MuiTab-wrapper': {
        width: 'auto',
        padding: 8,
        borderRadius: 25,
        color: '#657786',
        '&:hover': {
          color: '#1da1f2',
          backgroundColor: 'rgba(29, 161, 242, 0.1)',
        },
      },
    },
  },
  textColorInherit: {
    opacity: 1,
  },
  wrapper: {
    textTransform: 'none',
    fontSize: 15,
    fontWeight: 700,
    color: '#657786',
    '& svg, .material-icons': {
      fontSize: 26.25,
    },
  },
});

export const badgeStyles = ({ palette }: Pick<Theme, 'palette'>) => ({
  root: {
    [`&.MuiBadge--dotted, &.MuiBadge--number`]: {
      '& .MuiBadge-badge': {
        color: palette.common.white,
        backgroundColor: '#1da1f2',
      },
    },
    [`&.MuiBadge--dotted .MuiBadge-badge`]: {
      minWidth: 6,
      height: 6,
      top: 0,
      right: 4,
      padding: 0,
    },
    [`&.MuiBadge--number .MuiBadge-badge`]: {
      top: -4,
      right: 0,
      boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0.14rem',
      minWidth: 16,
      height: 16,
      fontSize: 10.7,
      fontWeight: 'bold',
    },
  },
  colorPrimary: {
    color: palette.common.white,
  },
});
