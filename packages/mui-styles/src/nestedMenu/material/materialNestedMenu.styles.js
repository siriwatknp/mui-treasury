import { materialCollapsibleMenuStyles } from '../../collapsibleMenu/material';

export default theme => {
  const s = materialCollapsibleMenuStyles(theme);
  const { palette, transitions } = theme;
  return {
    ...s,
    list: { padding: 0 },
    listItemSelected: {
      ...s.listItemSelected,
      backgroundColor: palette.grey[100],
    },
    parent: {
      position: 'relative',
    },
    lv2RowItem: {
      ...s.rowItem,
      paddingLeft: 40,
    },
    lv2RowItemSelected: {
      ...s.rowItemSelected,
    },
    lv2Item: {
      paddingLeft: 40,
    },
    lv3List: {
      '&:before': {
        content: '" "',
        position: 'absolute',
        width: 2,
        top: 14,
        bottom: 14,
        left: 40,
        backgroundColor: palette.grey[200],
        zIndex: 1,
      },
    },
    lv3Item: {
      position: 'relative',
      paddingLeft: 56,
      '&:after': {
        content: '" "',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 2,
        height: '40%',
        left: 40,
        zIndex: 2,
        opacity: 0,
        transition: transitions.create(),
      },
    },
    lv3ItemSelected: {
      '&:after': {
        backgroundColor: palette.text.primary,
        opacity: 1,
      },
    },
  };
};
