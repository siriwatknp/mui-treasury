import { jupiterRowToggleStyles } from '../../rowToggle/jupiter';

export default theme => {
  const s = jupiterRowToggleStyles(theme);
  return {
    action: s.action,
    actionToggled: s.actionToggled,
    actionButton: s.actionButton,
    row: s.root,
    rowSelected: s.rootSelected,
    rowItem: s.listItem,
    rowItemSelected: s.listItemSelected,
    listItem: s.listItem,
    listItemSelected: s.listItemSelected,
    getAccentColor() {
      return s.getAccentColor();
    },
  };
};
