import collapsibleMenuStyles from '../collapsible/collapsibleMenu.styles';

export default theme => {
  const s = collapsibleMenuStyles(theme);
  const { palette } = theme;
  return {
    action: s.action,
    actionToggled: s.actionToggled,
    actionButton: s.actionButton,
    row: s.row,
    rowSelected: s.rowSelected,
    rowItem: s.rowItem,
    rowItemSelected: s.rowItemSelected,
    list: s.list,
    listItem: s.listItem,
    listItemSelected: s.listItemSelected,
    parent: {},
    parentActive: {
      '& > $row > $rowItem, & > $row > $listItem': {
        color: palette.text.primary,
      },
    },
    parentCollapsed: {
      '& > $row > $rowItem, & > $row > $listItem': {
        color: palette.text.primary,
      },
    },

    lv1Parent: {},
    lv1ParentActive: {},
    lv1ParentCollapsed: {},
    lv1List: {},
    lv1Row: {},
    lv1RowSelected: {},
    lv1RowItem: {},
    lv1RowItemSelected: {},
    lv1Item: {},
    lv1ItemSelected: {},

    lv2Parent: {},
    lv2ParentActive: {},
    lv2ParentCollapsed: {},
    lv2List: {},
    lv2Row: {},
    lv2RowSelected: {},
    lv2RowItem: {
      paddingLeft: '2rem',
    },
    lv2RowItemSelected: {},
    lv2Item: {
      paddingLeft: '2rem',
      width: 'auto',
    },
    lv2ItemSelected: {},

    lv3List: {},
    lv3Item: {
      paddingLeft: '3rem',
      width: 'auto',
    },
    lv3ItemSelected: {},
  };
};
