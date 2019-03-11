export const attach = (...classNames) => `&.${classNames.join('.')}`;
export const nest = (...classNames) => `& .${classNames.join('.')}`;

// MuiListSubheader-root
// {Component}-attribute

export const APP_BAR = {
  root: 'MuiAppBar-root',
};

export const AVATAR = {
  root: 'MuiAvatar-root',
  // custom variants
  small: 'MuiAvatar--small',
  medium: 'MuiAvatar--medium',
  large: 'MuiAvatar--large',
  huge: 'MuiAvatar--huge',
  bordered: 'MuiAvatar--bordered',
  linked: 'MuiAvatar--linked',
};

export const BADGE = {
  root: 'MuiBadge-root',
  badge: 'MuiBadge-badge',
  // custom variants
  dotted: 'MuiBadge--dotted',
  number: 'MuiBadge--number',
};

export const BUTTON = {
  root: 'MuiButton-root',
  small: 'MuiButton-small',
  large: 'MuiButton-large',
  // custom variants
  inverted: 'MuiButton--inverted',
  danger: 'MuiButton--danger',
};

export const CARD = {
  root: 'MuiCard-root',
  // custom variants
  contained: 'MuiCard--contained',
  actionable: 'MuiCard--actionable',
  spaceGrey: 'MuiCard--spaceGrey',
  darkBlue: 'MuiCard--darkBlue',
};

export const CARD_CONTENT = {
  root: 'MuiCardContent-root',
};

export const CARD_ACTION_AREA = {
  root: 'MuiCardActionArea-root',
};

export const CARD_ACTIONS = {
  root: 'MuiCardActions-root',
  action: 'MuiCardActions-actions',
  // custom variants
  contained: 'MuiCardActions--contained',
};

export const CARD_MEDIA = {
  root: 'MuiCardMedia-root',
  // custom variants
  wideScreen: 'MuiCardMedia--wideScreen',
};

export const CHIP = {
  root: 'MuiChip-root',
  label: 'MuiChip-label',
  icon: 'MuiChip-icon',
  // custom variants
  narrow: 'MuiChip--narrow',
  inverted: 'MuiChip--inverted',
};

export const DRAWER = {
  root: 'MuiDrawer-root',
};

export const DIVIDER = {
  root: 'MuiDivider-root',
  vertical: 'MuiDivider--vertical',
};

export const GRID = {
  root: 'MuiGrid-root',
};

export const ICON_BUTTON = {
  root: 'MuiIconButton-root',
  // custom variants
  shaded: 'MuiIconButton--shaded',
  noPad: 'MuiIconButton--noPad',
  narrowPad: 'MuiIconButton--narrowPad',
  separated: 'MuiIconButton--separated',
  linkInverted: 'MuiIconButton--linkInverted',
};

export const ICON = {
  root: 'MuiIcon-root',
  // custom attribute
  front: 'MuiIcon__front',
  caret: 'MuiIcon__caret',
  // custom variants
  left: 'MuiIcon--left',
  right: 'MuiIcon--right',
  frontFlipped: 'MuiIcon--flipped',
  linked: 'MuiIcon--linked',
  linkInverted: 'MuiIcon--linkInverted',
  contained: 'MuiIcon--contained',
  purple: 'MuiIcon--purple',
  white: 'MuiIcon--white',
  red: 'MuiIcon--red',
  primary: 'MuiIcon--primary',
  small: 'MuiIcon--small',
  text: 'MuiIcon--text',
  light: 'MuiIcon--light',
};

export const INPUT_ADORNMENT = {
  root: 'MuiInputAdornment-root',
  positionStart: 'MuiInputAdornment-start',
};

export const LIST = {
  root: 'MuiList-root',
};

export const LIST_ITEM = {
  root: 'MuiListItem-root',
  header: 'MuiListItem__header',
  headerLabel: 'MuiListItem__headerLabel',
  headerActionable: 'MuiListItem__header--actionable',
  category: 'MuiListItem__category',
  subcategory: 'MuiListItem__subcategory',
  noPadY: 'MuiListItem--noPadY',
};

export const LIST_ITEM_TEXT = {
  root: 'MuiListItemText-root',
  primary: 'MuiListItemText-primary',
  category: 'MuiListItemText__category',
  subcategory: 'MuiListItemText__subcategory',
  subcategoryPrimary: 'MuiListItemText__subcategory--primary',
};

export const LIST_ITEM_ICON = {
  root: 'MuiListItemIcon-root',
  subcategory: 'MuiListItemIcon__subcategory',
};

export const NOTCHED_OUTLINE = {
  root: 'notched-outline__root',
  // custom variants
  focused: 'notched-outline--focused',
};

export const OUTLINED_INPUT = {
  root: 'outlined-input__root',
  // custom variants
  focused: 'outlined-input--notched-outline',
};

export const PAPER = {
  root: 'MuiPaper-root',
};

export const TABS = {
  root: 'MuiTabs-root',
  // custom variants
  inverted: 'MuiTabs--inverted',
  indicator: 'MuiTabs-indicator',
  underline: 'MuiTabs--underline',
};

export const TAB = {
  root: 'tab__root',
  label: 'tab__label',
  wrapper: 'tab__wrapper',
  // custom variants
  selected: 'tab--selected',
  onlyIcon: 'tab--only-icon',
};

export const TEXT = {
  root: 'MuiTypography-root',
  primary: 'MuiTypography-primary',
  secondary: 'MuiTypography-secondary',
  // custom variants
  bold: 'MuiTypography--bold',
  inline: 'MuiTypography--inline',
  linked: 'MuiTypography--linked',
  linkInverted: 'MuiTypography--linkInverted',
  icon: 'MuiTypography--icon',
  inverted: 'MuiTypography--inverted',
  indented: 'MuiTypography--indented',
  indentedLarge: 'MuiTypography--indentedLarge',
};

export const TOOLBAR = {
  root: 'MuiToolbar-root',
  narrow: 'MuiToolbar--narrow',
};

export const TOUCH_RIPPLE = {
  root: 'MuiTouchRipple-root',
  child: 'MuiTouchRipple-child',
};

export default (converter = classes => classes) =>
  converter({
    AVATAR,
    APP_BAR,
    BADGE,
    BUTTON,
    CARD,
    CARD_ACTIONS,
    CARD_MEDIA,
    CARD_CONTENT,
    CARD_ACTION_AREA,
    DIVIDER,
    GRID,
    LIST,
    LIST_ITEM,
    LIST_ITEM_TEXT,
    LIST_ITEM_ICON,
    NOTCHED_OUTLINE,
    OUTLINED_INPUT,
    ICON,
    ICON_BUTTON,
    INPUT_ADORNMENT,
    PAPER,
    TABS,
    TAB,
    TOOLBAR,
    TEXT,
    TOUCH_RIPPLE,
    attach,
    nest,
  });
