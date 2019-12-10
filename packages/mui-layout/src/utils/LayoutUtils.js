import createAllSidebars from '../models/allSidebars';
import createSidebarEffect from '../models/sidebarEffect';
import createHeader from '../models/header';

export default (ctx = {}) => {
  const { content = {}, footer = {} } = ctx;
  const {
    primarySidebar,
    secondarySidebar,
    getPrimaryStyle,
    getSecondaryStyle,
  } = createAllSidebars(ctx);
  const header = createHeader(ctx);
  const affectedContent = createSidebarEffect(ctx, content);
  const affectedFooter = createSidebarEffect(ctx, footer);
  return {
    getSidebarWidth: () => primarySidebar.width,
    getSecondarySidebarWidth: () => secondarySidebar.width,
    getSidebarZIndex: getPrimaryStyle,
    getSecondarySidebarZIndex: getSecondaryStyle,
    getContentStyle: affectedContent.getStyle,
    getFooterStyle: affectedFooter.getStyle,
    getHeaderStyle: header.getStyle,
  };
};
