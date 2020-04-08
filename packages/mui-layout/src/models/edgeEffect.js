import get from 'lodash.get';
import createEdgeSidebar from './edgeSidebar';
import createWidth from './width';
import { upperFirst } from '../utils';

const attachOperator = (value, operator) =>
  typeof value === 'number'
    ? operator * value
    : `${operator.toString().substr(0, 1)}${value}`;

export default (ctx = {}) => {
  const { header = {}, sidebar = {}, open } = ctx;
  const edgeSidebar = createEdgeSidebar(ctx);

  const incrementZIndex = (theme, plus) => ({
    zIndex: get(theme, 'zIndex.drawer', 1200) + plus,
  });

  const sidebarWidth = edgeSidebar.getWidth();
  const isNotStatic = header.position !== 'static';
  const isAboveMainSidebar = header.clipped && isNotStatic;
  const isAboveSubSidebar = header.secondaryClipped && isNotStatic;
  const isAboveSomeSidebars = isAboveMainSidebar || isAboveSubSidebar;
  const getFlexiblePersistentBehaviorMarginValue = () => {
    if (sidebar.anchor === 'left') return attachOperator(sidebarWidth, +1);
    if (sidebar.anchor === 'right') return attachOperator(sidebarWidth, -1);
    return 0;
  };
  return {
    getHeaderZIndexStyle: theme => {
      if (isAboveSomeSidebars) {
        return incrementZIndex(theme, 10);
      }
      return undefined;
    },
    getMarginStyle({ persistentBehavior } = {}) {
      if (sidebar.variant === 'temporary') {
        return undefined;
      }
      if (sidebar.variant === 'permanent') {
        return {
          [`margin${upperFirst(sidebar.anchor)}`]: sidebarWidth,
        };
      }
      if (sidebar.variant === 'persistent') {
        if (!open) {
          return {
            [`margin${upperFirst(sidebar.anchor)}`]: 0,
          };
        }
        // open
        if (persistentBehavior === 'fit') {
          return {
            [`margin${upperFirst(sidebar.anchor)}`]: sidebarWidth,
          };
        }
        if (persistentBehavior === 'flexible') {
          return {
            marginLeft: getFlexiblePersistentBehaviorMarginValue(),
          };
        }
        return {
          [`margin${upperFirst(sidebar.anchor)}`]:
            open &&
            (persistentBehavior === 'fit' || persistentBehavior === 'flexible')
              ? sidebarWidth
              : 0,
        };
      }
      return undefined;
    },
    getWidthObj({ persistentBehavior } = {}) {
      if (sidebar.variant === 'permanent') {
        return createWidth(sidebarWidth);
      }
      if (sidebar.variant === 'persistent') {
        return createWidth(
          open && persistentBehavior === 'fit' ? sidebarWidth : 0
        );
      }
      return createWidth();
    },
    getWidthStyle(behavior) {
      return this.getWidthObj(behavior).getStyle();
    },
  };
};
