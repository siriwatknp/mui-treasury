import { Theme } from '@material-ui/core';

export const tabsStyles = () => ({
  root: {
    backgroundColor: '#eee',
    borderRadius: 10,
    minHeight: 44,
  },
  flexContainer: {
    position: 'relative',
    padding: '0 3px',
    zIndex: 1,
  },
  indicator: {
    top: 3,
    bottom: 3,
    right: 3,
    height: 'auto',
    borderRadius: 8,
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px 0 rgba(0,0,0,0.16)',
  },
});

export const tabItemStyles = ({ palette, breakpoints }: Theme) => ({
  root: {
    '&:hover': {
      opacity: 1,
    },
    minHeight: 44,
    minWidth: 96,
    [breakpoints.up('md')]: {
      minWidth: 120,
    },
  },
  wrapper: {
    // zIndex: 2,
    // marginTop: spacing(0.5),
    color: palette.text.primary,
    textTransform: 'initial',
  },
});
