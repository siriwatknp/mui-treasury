import get from 'lodash.get';
import createEdgeSidebar from './edgeSidebar';
import createWidth from './width';
import { upperFirst } from '../utils';

export default (ctx = {}) => {
  const { header = {}, sidebar = {}, opened } = ctx;
  const edgeSidebar = createEdgeSidebar(ctx);

  const incrementZIndex = (theme, plus) => ({
    zIndex: get(theme, 'zIndex.drawer', 1200) + plus,
  });

  const sidebarWidth = edgeSidebar.getWidth();
  const isNotStatic = header.position !== 'static';
  const isAboveMainSidebar = header.clipped && isNotStatic;
  const isAboveSubSidebar = header.secondaryClipped && isNotStatic;
  const isAboveSomeSidebars = isAboveMainSidebar || isAboveSubSidebar;
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
        return {
          [`margin${upperFirst(sidebar.anchor)}`]:
            opened &&
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
          opened && persistentBehavior === 'fit' ? sidebarWidth : 0
        );
      }
      return createWidth();
    },
    getWidthStyle(behavior) {
      return this.getWidthObj(behavior).getStyle();
    },
  };
};
