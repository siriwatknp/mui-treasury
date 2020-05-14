import { Theme } from '@material-ui/core';

export const tabsStyles = () => ({
  root: {
    width: '100%',
  },
  indicator: {
    display: 'none',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const tabItemStyles = ({ breakpoints }: Pick<Theme, 'breakpoints'>) => ({
  root: {
    position: 'relative',
    display: 'block',
    borderRadius: '30px',
    textAlign: 'center',
    transition: 'all .5s',
    padding: '10px 15px',
    color: '#555555',
    height: 'auto',
    opacity: '1',
    margin: '10px 0',
    float: 'none',
    [breakpoints.up('md')]: {
      minWidth: 120,
    },
    '& + button': {
      margin: '10px 0',
    },
    '&$selected': {
      '&, &:hover': {
        color: '#FFFFFF',
        backgroundColor: '#00acc1',
        boxShadow: '0 7px 10px -5px rgba(76, 175, 80, 0.4)',
      },
    },
  },
  selected: {},
  wrapper: {
    lineHeight: '24px',
    textTransform: 'uppercase',
    fontSize: '12px',
    fontWeight: '500',
    position: 'relative',
    display: 'block',
    color: 'inherit',
  },
});
