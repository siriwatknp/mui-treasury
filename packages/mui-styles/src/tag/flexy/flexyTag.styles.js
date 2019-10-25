import Color from 'color';

export default ({ spacing, palette }) => {
  const initialBgColor = palette.grey[100];
  const shade = palette.primary;
  const hoveredBgColor = Color(shade.light)
    .lighten(0.5)
    .toString();
  const hoveredTextColor = shade.dark;
  return {
    root: {
      backgroundColor: initialBgColor,
      '&:hover, &.Mui-focusVisible': {
        backgroundColor: hoveredBgColor,
        color: hoveredTextColor,
        '& $icon': {
          color: hoveredTextColor,
          marginLeft: spacing(1),
          visibility: 'visible',
          opacity: 1,
        },
        '& $overline': {
          color: Color(hoveredTextColor)
            .fade(0.3)
            .toString(),
        },
      },
    },
    label: {
      transition: '0.2s',
      textTransform: 'initial',
    },
    icon: {
      fontSize: 18,
      visibility: 'hidden',
      opacity: 0,
      transition: '0.3s',
      color: palette.common.white,
      marginLeft: -spacing(1.5),
      '& .MuiIcon--fa': {
        padding: 0,
      },
    },
    overline: {
      display: 'block',
      lineHeight: 1,
      fontSize: 10,
      textAlign: 'left',
      textTransform: 'uppercase',
      marginTop: 4,
      color: palette.text.secondary,
    },
  };
};
