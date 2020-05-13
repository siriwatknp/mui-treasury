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

export const tabItemStyles = ({ breakpoints }: Pick<Theme, 'breakpoints'>) => ({
  root: {
    minHeight: 53,
    minWidth: 80,
    [breakpoints.up('md')]: {
      minWidth: 120,
    },
    '&:hover': {
      backgroundColor: 'rgba(29, 161, 242, 0.1)',
      '& $wrapper': {
        color: '#1da1f2',
      },
    },
    '&$selected': {
      '& *': {
        color: '#1da1f2',
      },
    },
  },
  selected: {},
  textColorInherit: {
    opacity: 1,
  },
  wrapper: {
    textTransform: 'none',
    fontSize: 15,
    fontWeight: 700,
    color: '#657786',
  },
});
