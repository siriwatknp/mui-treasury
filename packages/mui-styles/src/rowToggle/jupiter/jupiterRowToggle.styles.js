import { jupiterListItemStyles } from '../../listItem/jupiter';

export default theme => {
  const s = jupiterListItemStyles(theme);
  const { palette } = theme;
  return {
    root: {
      display: 'flex',
      position: 'relative',
      margin: 0,
    },
    action: {
      marginLeft: 'auto',
      lineHeight: 0,
      marginRight: -4,
      color: palette.text.secondary,
      '& svg': {
        fontSize: '1.25rem',
      },
    },
    actionButton: {
      minWidth: 44,
      marginLeft: '0.5rem',
      marginRight: 0,
      borderRadius: 6,
      '&:hover': {
        backgroundColor: s.getAccentColor(),
        color: palette.primary.main,
      },
    },
    actionToggled: {
      backgroundColor: s.getAccentColor(),
      color: palette.primary.main,
    },
    listItem: {
      ...s.root,
      '& $actionToggled': {
        background: 'none',
      },
    },
    listItemSelected: s.selected['&.Mui-selected'],
    getAccentColor() {
      return s.getAccentColor();
    },
  };
};
