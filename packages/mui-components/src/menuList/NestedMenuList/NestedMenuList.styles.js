import { mergeStyleCreators } from '@mui-treasury/styling';
import { createStyles as createMenuToggleStyles } from '@mui-treasury/components/menuItem/MenuToggle';
import { createStyles as createSvgArrowStyles } from '@mui-treasury/components/toggle/MuiSvgArrowToggle';

export default mergeStyleCreators(
  createSvgArrowStyles,
  createMenuToggleStyles,
  ({ palette, transitions }) => ({
    list: {
      padding: 0,
    },
    // -------------------------
    // Level 1
    lv1List: {},
    lv1Parent: { margin: 0, position: 'relative' },
    lv1ParentActive: {},
    lv1ParentExpanded: {},
    lv1Item: {},
    lv1ItemActive: {},
    lv1ItemSelected: {},
    lv1ItemExpanded: {},
    // -------------------------
    // Level 2
    lv2List: {},
    lv2Parent: { margin: 0, position: 'relative' },
    lv2ParentActive: {},
    lv2ParentExpanded: {},
    lv2Item: {
      '& $menuItem': {
        paddingLeft: 40,
      },
    },
    lv2ItemActive: {},
    lv2ItemSelected: {},
    lv2ItemExpanded: {},
    // -------------------------
    // Level 3
    lv3List: {
      '&:before': {
        content: '" "',
        position: 'absolute',
        width: 2,
        top: 14,
        bottom: 14,
        left: 40,
        backgroundColor: palette.grey[200],
        zIndex: 1,
      },
    },
    lv3ListActive: {},
    lv3Item: {
      position: 'relative',
      '& $menuItem': {
        paddingLeft: 56,
      },
      '&:after': {
        content: '" "',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 2,
        height: '40%',
        left: 40,
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
  })
);
