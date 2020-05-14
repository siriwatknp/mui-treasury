import { Theme } from '@material-ui/core';

export const tabsStyles = () => ({
  root: {
    boxShadow: 'inset 0 1px 0 0 #efefef',
    overflow: 'visible',
  },
  fixed: {
    overflow: 'visible !important',
  },
  indicator: {
    height: 1,
    transform: 'translateY(-52px)',
    backgroundColor: '#262626',
  },
});

export const tabItemStyles = ({ breakpoints }: Pick<Theme, 'breakpoints'>) => ({
  root: {
    lineHeight: 'inherit',
    minWidth: 0,
    '&:not(:last-child)': {
      marginRight: 24,
      [breakpoints.up('sm')]: {
        marginRight: 60,
      },
    },
    [breakpoints.up('md')]: {
      minWidth: 0,
    },
  },
  labelIcon: {
    minHeight: 53,
    '& $wrapper > *:first-child': {
      marginBottom: 0,
    },
  },
  textColorInherit: {
    opacity: 0.4,
  },
  wrapper: {
    flexDirection: 'row',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    '& svg, .material-icons': {
      fontSize: 16,
      marginRight: 8,
    },
  },
});
