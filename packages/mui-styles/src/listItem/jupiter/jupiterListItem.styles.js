import Color from 'color';

export default ({ palette }) => {
  const accentColor = Color(palette.primary.main)
    .lighten(1.75)
    .fade(0.6)
    .toString();
  return {
    root: {
      borderRadius: 6,
      color: palette.text.secondary,
      padding: '0.5rem 1rem',
      '&:hover': {
        color: palette.text.primary,
        backgroundColor: palette.grey[100],
      },
    },
    selected: {
      '&.Mui-selected': {
        fontWeight: 500,
        backgroundColor: accentColor,
        color: palette.primary.main,
        '&:hover': {
          color: palette.primary.main,
          backgroundColor: accentColor,
        },
      },
    },
    getAccentColor() {
      return accentColor;
    },
  };
};
