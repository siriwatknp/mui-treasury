import { mergeStyleCreators } from '@mui-treasury/styling';
import gatsbyMenuItem from '../menuItem/gatsby/gatsbyMenuItem.styles';

export default mergeStyleCreators(gatsbyMenuItem, {
  lv1Parent: {
    '&:before': {
      content: '" "',
      position: 'absolute',
      borderTop: '1px solid #f0f0f2',
      left: '1.5rem',
      right: 0,
      top: 0,
    },
    '& > $lv1Item > $menuItem': {
      textTransform: 'uppercase',
      letterSpacing: '0.075em',
      fontSize: '0.75rem',
      fontFamily:
        'Fira sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
    },
  },
  lv1ParentActive: {
    '&:before': {
      borderTop: '1px solid rgb(246, 237, 250)',
    },
    background: 'rgba(241,222,250,0.15)',
    '& > $lv1Item > $menuItem': {
      fontWeight: 500,
    },
    '& > $lv1ItemExpanded > $menuItem': {
      color: 'rgb(138, 75, 175)',
    },
    '&$lv1ParentExpanded': {
      '&:before': {
        left: 0,
      },
    },
  },
  lv1ParentExpanded: {},
  lv1Item: {},
  lv1ItemSelected: {
    '& $menuItem': {
      fontWeight: 500,
    },
  },
  lv1ItemExpanded: {},
  lv2List: {},
  lv2ParentActive: {
    '& > $lv2Item > $menuItem': {
      color: 'rgb(138, 75, 175)',
      fontWeight: 500,
    },
  },
  lv2Item: {
    '& $menuItem': {
      paddingLeft: '1.5rem',
    },
  },
  lv3Item: {
    '& $menuItem': {
      paddingLeft: 48,
      '&:before': {
        left: '1.5rem',
      },
    },
  },
  lv3List: {
    '&:before': {
      display: 'none',
    },
  },
  lv3ItemSelected: {
    '& $menuItem': {
      '&:after': {
        width: 'calc(1.5rem + 8px)',
      },
    },
    '&:after': {
      display: 'none',
    },
  },
});
