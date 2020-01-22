export const tabsStyles = () => ({
  indicator: {
    display: 'none',
  },
});

export const tabItemStyles = ({ palette }) => {
  const defaultLabelColor = palette.common.white;
  const defaultBgColor = palette.primary.main;
  return {
    root: ({ bgColor = defaultBgColor }) => ({
      textTransform: 'initial',
      height: 80,
      width: 150,
      '&:before': {
        position: 'absolute',
        top: 65,
        left: 75,
        content: '" "',
        height: 30,
        width: 30,
        background: 'transparent',
        transformOrigin: '0% 0%',
        transform: 'rotate(45deg)',
        boxShadow: `0 0 0 150px ${bgColor}`,
        zIndex: -1,
      },
    }),
    selected: {
      '&$root': {
        opacity: 0.99,
      },
    },
    wrapper: ({ labelColor = defaultLabelColor }) => ({
      color: labelColor,
    }),
  };
};
