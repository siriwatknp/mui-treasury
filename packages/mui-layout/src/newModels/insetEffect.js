import createInsetSidebar from './insetSidebar';
import createWidth from './width';
import { upperFirst } from '../utils';

export default (ctx = {}) => {
  const { sidebar = {} } = ctx;
  const insetSidebar = createInsetSidebar(ctx);
  const sidebarWidth = insetSidebar.getWidth();
  return {
    getWidthObj() {
      return createWidth('auto');
    },
    getHeaderZIndexStyle: () => {},
    getMarginStyle: ({ insetBehavior } = {}) => {
      if (insetBehavior === 'fit') {
        return {
          [`margin${upperFirst(sidebar.anchor)}`]: sidebarWidth,
        };
      }
      return undefined;
    },
    getWidthStyle() {
      return this.getWidthObj().getStyle();
    },
  };
};
