import rowToggleStyles from '../../toggle/row/rowToggle.styles';

export default theme => {
  const s = rowToggleStyles(theme);
  return {
    action: s.action,
    actionToggled: s.actionToggled,
    actionButton: s.actionButton,
    row: s.root,
    rowSelected: s.rootSelected,
    rowItem: s.listItem,
    rowItemSelected: s.listItemSelected,
    list: {
      padding: 0,
    },
    listItem: s.listItem,
    listItemSelected: s.listItemSelected,
  };
};
