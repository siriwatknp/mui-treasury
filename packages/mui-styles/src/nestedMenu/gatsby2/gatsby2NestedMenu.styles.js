import { gatsbyCollapsibleMenuStyles } from '../../collapsibleMenu/gatsby';

const s = gatsbyCollapsibleMenuStyles();

export default () => ({
  ...s,
  list: { padding: 0 },
  parent: {
    position: 'relative',
  },
  lv1Parent: {
    '&:before': {
      content: '" "',
      position: 'absolute',
      borderTop: '1px solid #f0f0f2',
      left: '1.5rem',
      right: 0,
      top: 0,
    },
    '& > $row > $rowItem, & > $row > $listItem': {
      textTransform: 'uppercase',
      letterSpacing: '0.075em',
      fontSize: '0.75rem',
      fontFamily:
        'Fira sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
    },
  },
  lv1ParentActive: {
    background: 'rgba(241,222,250,0.15)',
    '&:before': {
      borderTop: '1px solid rgb(246, 237, 250)',
    },
    '& > $row > $rowItem, & > $row > $listItem': {
      color: 'rgb(138, 75, 175)',
      fontWeight: 'bold',
    },
    '&$lv1ParentCollapsed': {
      '&:before': {
        left: 0,
      },
    },
  },
  lv1ParentCollapsed: {},
  lv2ParentActive: {
    '& > $row > $rowItem, & > $row > $listItem': {
      color: 'rgb(138, 75, 175)',
      fontWeight: 500,
    },
  },
  lv2Item: {
    paddingLeft: '1.5rem',
  },
  lv3Item: {
    paddingLeft: 48,
    '&:before': {
      left: '1.5rem',
    },
  },
  lv3ItemSelected: {
    '&:after': {
      width: 'calc(1.5rem + 8px)',
    },
  },
});
