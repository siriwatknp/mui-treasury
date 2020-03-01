import { materialCollapsibleMenuStyles } from '../../collapsibleMenu/material';

export default theme => {
  const s = materialCollapsibleMenuStyles(theme);
  const { palette, transitions } = theme;
  return {
    ...s,
    list: {
      '&:not($lv1List)': {
        padding: 0,
      },
    },
    listItemSelected: {
      ...s.listItemSelected,
      fontWeight: 500,
      backgroundColor: palette.grey[100],
    },
    parent: {
      position: 'relative',
    },
    parentCollapsed: {
      '& > $row > $rowItem, & > $row > $listItem': {
        color: palette.text.primary,
      },
    },
    parentActive: {
      '& > $row > $rowItem, & > $row > $listItem': {
        color: palette.text.primary,
      },
    },
    lv1List: {},
    lv2RowItem: {
      ...s.rowItem,
      paddingLeft: '2rem',
    },
    lv2Item: {
      paddingLeft: '2rem',
    },
    lv3List: {
      '&:before': {
        content: '" "',
        position: 'absolute',
        width: 2,
        top: 14,
        bottom: 14,
        left: '2rem',
        backgroundColor: 'rgba(0,0,0,0.08)',
        zIndex: 1,
      },
    },
    lv3Item: {
      position: 'relative',
      paddingLeft: '3rem',
      '&:after': {
        content: '" "',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 2,
        height: '40%',
        left: '2rem',
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
