import Color from 'color';

export default ({ palette, spacing }) => ({
  navRoot: {
    display: 'flex',
    alignSelf: 'stretch',
    margin: 0,
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    color: palette.text.primary,
    fontSize: 16,
    padding: spacing(2, 0.25),
    margin: spacing(0, 2),
    borderBottom: '2px solid',
    borderBottomColor: 'transparent',
    cursor: 'pointer',
    '&:hover': {
      borderBottom: '2px solid',
      color: palette.primary.main,
      borderBottomColor: Color(palette.primary.main)
        .fade(0.9)
        .toString(),
    },
    '&[disabled]': {
      pointerEvents: 'none',
      color: palette.text.disabled,
    },
  },
  navSelected: {
    '&$navItem': {
      color: palette.primary.main,
      borderBottomColor: palette.primary.main,
    },
    '&[disabled]': {
      color: palette.text.disabled,
      borderBottomColor: palette.text.disabled,
    },
  },
});
