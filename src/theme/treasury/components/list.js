export default ({
  nest,
  muiBaseTheme,
  primary,
  LIST_ITEM_TEXT,
  TOUCH_RIPPLE,
}) => ({
  MuiListSubheader: {
    root: {
      color: muiBaseTheme.palette.text.hint,
      letterSpacing: '1px',
      fontSize: 12,
      textTransform: 'uppercase',
    },
  },
  MuiListItem: {
    root: {
      '&$selected': {
        backgroundColor: primary.light,
        '&:hover': {
          backgroundColor: primary.light,
        },
        [nest(LIST_ITEM_TEXT.primary)]: {
          color: primary.main,
        },
      },
      [nest(TOUCH_RIPPLE.child)]: {
        background: primary.main,
      },
    },
    button: {
      '&:hover': {
        backgroundColor: primary.light,
      },
    },
  },
  MuiListItemText: {
    primary: {
      fontWeight: 500,
    },
  },
});
