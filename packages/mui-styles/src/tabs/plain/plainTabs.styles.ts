export const tabsStyles = () => ({
  indicator: {
    display: 'none',
  },
});

export const tabItemStyles = () => ({
  root: {
    border: '1px solid #e9e9e9',
    '&:not(:first-of-type)': {
      marginLeft: -1,
    },
    background: '#f7f7f7',
    opacity: 1,
  },
  selected: {
    borderBottomWidth: 0,
    background: '#ffffff',
    '& $wrapper': {
      opacity: 1,
    },
  },
  wrapper: {
    opacity: 0.7,
  },
});
