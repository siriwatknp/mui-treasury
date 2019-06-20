import Color from 'color';

export default ({ palette, spacing }) => {
  // ATTENTION!
  // you can customize some important variables here!!
  const backgroundColor = palette.grey[100];
  const space = spacing(1); // default = 8;
  const borderRadius = 100;
  const iconColor = palette.grey[500];
  // end of variables
  return {
    MuiInputBase: {
      root: {
        '&.PeaSearchInput-root': {
          transition: '0.2s',
          backgroundColor,
          borderRadius,
          border: '1px solid',
          // initial as transparent, prevent lagging when focused
          borderColor: 'rgba(0,0,0,0)',
          padding: `${space}px ${space * 2}px`,
          '& .material-icons': {
            fontSize: 20,
            color: iconColor,
            '&:first-child': {
              marginRight: space,
            },
          },
        },
        '&$focused': {
          '&.PeaSearchInput-root': {
            borderColor: palette.primary.main,
            backgroundColor: palette.common.white,
            boxShadow: `0 1px 8px 0 ${Color(palette.primary.main).fade(0.8)}`,
            '& .material-icons': {
              color: palette.primary.dark,
            },
          },
        },
      },
    },
  };
};
