import { jupiterCollapsibleMenuStyles } from '../../collapsibleMenu/jupiter';

export default theme => {
  const s = jupiterCollapsibleMenuStyles(theme);
  const { palette, transitions } = theme;
  return {
    ...s,
    listItem: {
      ...s.listItem,
      width: 'auto',
    },
    list: { padding: 0 },
    parent: {
      position: 'relative',
    },
    lv1List: {
      padding: '0.5rem 0',
    },
    lv1Item: {
      minHeight: 40,
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'transparent',
        '& $action': {
          opacity: 1,
        },
      },
      color: palette.text.secondary,
      fontSize: 12,
      letterSpacing: '1.5px',
      fontWeight: 500,
      '& $action': {
        transition: transitions.create(),
        opacity: 0,
      },
    },
    lv1ItemSelected: {
      color: palette.primary.main,
      fontWeight: 'bold',
    },
    lv1RowItem: {
      color: palette.text.secondary,
      fontSize: 12,
      letterSpacing: '1.5px',
      fontWeight: 500,
    },
    lv1RowItemSelected: {
      color: palette.primary.main,
      fontWeight: 'bold',
    },
    lv2List: {
      marginBottom: '8px !important',
    },
    lv2Row: {
      marginLeft: '1rem',
    },
    lv2Item: {
      cursor: 'pointer',
      margin: '0.5rem 0 0.5rem 1rem',
      paddingLeft: 16,
    },
    lv2ItemSelected: {
      backgroundColor: s.getAccentColor(),
      color: palette.primary.main,
      fontWeight: 500,
    },
    lv3List: {
      '&:before': {
        left: 32,
        content: '""',
        top: '0.875rem',
        bottom: '0.875rem',
        width: 2,
        position: 'absolute',
        backgroundColor: '#eeeeee',
      },
    },
    lv3Item: {
      cursor: 'pointer',
      paddingTop: 8,
      margin: '0.5rem 1rem 0 2.875rem',
      paddingLeft: 10,
      '&:after': {
        position: 'absolute',
        content: '""',
        width: 2,
        top: '0.625rem',
        bottom: '0.625rem',
        left: -20,
      },
    },
    lv3ItemSelected: {
      '&:after': {
        left: -17,
        backgroundColor: palette.primary.main,
      },
      backgroundColor: s.getAccentColor(),
      color: palette.primary.main,
      fontWeight: 500,
    },
  };
};
