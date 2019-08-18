import Color from 'color';

export default theme => {
  const { palette, transitions, spacing } = theme;
  const accentColor = Color(palette.primary.main)
    .lighten(1.75)
    .toString();
  return {
    menuItem: {
      fontSize: 16,
      minHeight: 40,
    },
    menuItemToggle: {},
    lv1List: {
      padding: spacing(1, 0),
    },
    lv1Item: {
      '&:hover': {
        '& $menuItem': {
          backgroundColor: 'transparent',
        },
        '& $menuItemToggle': {
          opacity: 1,
        },
      },
      '& $menuItem': {
        color: palette.text.secondary,
        fontSize: 12,
        letterSpacing: '1.5px',
        fontWeight: 500,
      },
      '& $menuItemToggle': {
        transition: transitions.create(),
        fontSize: 20,
        opacity: 0,
      },
    },
    lv2Item: {
      margin: '8px 0',
      '& $menuItem': {
        margin: spacing(0, 2),
        paddingLeft: 16,
        borderRadius: 6,
      },
      '& $menuItemToggle': {
        fontSize: 20,
      },
    },
    lv2ItemSelected: {
      '& $menuItem': {
        backgroundColor: accentColor,
        color: palette.primary.main,
        fontWeight: 500,
      },
    },
    lv3List: {
      '&:before': {
        left: 32,
      },
    },
    lv3Item: {
      margin: '8px 0',
      '&:first-of-type': {
        marginTop: 0,
      },
      '& $menuItem': {
        margin: '0 16px 0 46px',
        borderRadius: 6,
        paddingLeft: 10,
      },
      '&:after': {
        left: 24,
      },
    },
    lv3ItemSelected: {
      '&:after': {
        left: 32,
        backgroundColor: palette.primary.main,
      },
      '& $menuItem': {
        backgroundColor: accentColor,
        color: palette.primary.main,
        fontWeight: 500,
      },
    },
  };
};
