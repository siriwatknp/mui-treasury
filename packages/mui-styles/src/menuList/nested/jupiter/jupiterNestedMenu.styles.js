import Color from 'color';

export default theme => {
  const { palette, transitions, spacing } = theme;
  const accentColor = Color(palette.primary.main)
    .rotate(-10)
    .fade(0.92)
    .toString();
  const systemFont =
    "-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'";
  return {
    menuItemSelected: {
      '&$menuItemSelected': {
        backgroundColor: 'rgba(0,0,0,0)',
        color: palette.primary.main,
        '&:hover': {
          backgroundColor: accentColor,
        },
      },
    },
    menuItem: {
      width: 'auto',
      fontSize: 16,
      minHeight: 40,
      borderRadius: 6,
      '&:hover': {
        borderBottom: 'none',
      },
    },
    menuItemFocus: {
      '&$menuItemFocus': {
        backgroundColor: accentColor,
        boxShadow: `0 0 4px 0 ${palette.primary.light}`,
      },
    },
    menuItemToggle: {
      marginLeft: 'auto',
    },
    infoSelected: {
      color: palette.primary.main,
      fontWeight: 600,
    },
    wrapper: {
      margin: 0,
    },
    lv1List: {
      padding: spacing(1, 0),
    },
    lv1Item: {
      margin: '0 4px',
      '&:hover': {
        '&$menuItem, & $menuItem': {
          backgroundColor: 'transparent',
        },
        '& $menuItemToggle': {
          opacity: 1,
        },
      },
      '&$menuItem, & $menuItem': {
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
    lv1ItemSelected: {
      '&$menuItem, & $menuItem': {
        color: palette.primary.main,
        fontWeight: 'bold',
      },
    },
    // lv2List: {},
    lv2Wrapper: {
      '&:not(:first-child)': {
        marginTop: spacing(1),
      },
    },
    lv2Item: {
      cursor: 'pointer',
      paddingTop: 8,
      '&:not(:first-child)': {
        marginTop: spacing(1),
      },
      '&$menuItem, & $menuItem': {
        fontFamily: systemFont,
        letterSpacing: 0.5,
        marginLeft: spacing(2),
        marginRight: spacing(2),
        paddingLeft: 16,
      },
      '& $menuItemToggle': {
        fontSize: 20,
      },
    },
    lv2ItemSelected: {
      '&$menuItem, & $menuItem': {
        backgroundColor: accentColor,
        color: palette.primary.main,
        fontWeight: 500,
      },
    },
    lv3List: {
      '&:before': {
        content: '" "',
        position: 'absolute',
        width: 2,
        top: 16,
        bottom: 16,
        left: 32,
        backgroundColor: palette.grey[200],
        zIndex: 1,
      },
    },
    lv3Item: {
      position: 'relative',
      cursor: 'pointer',
      paddingTop: spacing(1),
      '&:not(:first-child)': {
        marginTop: spacing(1),
      },
      '&$menuItem, & $menuItem': {
        fontFamily: systemFont,
        letterSpacing: 0.5,
        marginLeft: 46,
        marginRight: 16,
        paddingLeft: 10,
      },
      '&:after': {
        content: '" "',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 2,
        height: 24,
        left: -20,
        zIndex: 2,
        opacity: 0,
        transition: transitions.create(),
      },
    },
    lv3ItemSelected: {
      '&:after': {
        left: -14,
        backgroundColor: palette.primary.main,
        opacity: 1,
      },
      '&$menuItem, & $menuItem': {
        backgroundColor: accentColor,
        color: palette.primary.main,
        fontWeight: 500,
      },
    },
  };
};
