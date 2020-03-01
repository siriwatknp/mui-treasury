import { gatsbyRowToggleStyles } from '../../rowToggle/gatsby';

const s = gatsbyRowToggleStyles();

export default () => ({
  action: s.action,
  actionToggled: s.actionToggled,
  actionButton: s.actionButton,
  row: s.root,
  rowSelected: s.rootSelected,
  rowItem: s.listItem,
  rowItemSelected: s.listItemSelected,
  listItem: s.listItem,
  listItemSelected: s.listItemSelected,
});
