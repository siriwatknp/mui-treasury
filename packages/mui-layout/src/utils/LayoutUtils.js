import createAllSidebars from '../models/allSidebars';
import createSidebarEffect from '../models/sidebarEffect';
import createHeader from '../models/header';
import createContent from '../models/content';

export default (ctx = {}) => {
  const { footer = {} } = ctx;
  const {
    primarySidebar,
    secondarySidebar,
    getPrimaryStyle,
    getSecondaryStyle,
  } = createAllSidebars(ctx);
  const header = createHeader(ctx);
  const content = createContent(ctx);
  const affectedFooter = createSidebarEffect(ctx, footer);
  return {
    getSidebarWidth: () => primarySidebar.width,
    getSecondarySidebarWidth: () => secondarySidebar.width,
    getSidebarZIndex: getPrimaryStyle,
    getSecondarySidebarZIndex: getSecondaryStyle,
    getContentStyle: content.getStyle,
    getFooterStyle: affectedFooter.getStyle,
    getHeaderStyle: header.getStyle,
    getInsetSidebarStyle: primarySidebar.getStyle,
    getInsetSidebarBodyStyle: primarySidebar.getBodyStyle,
    getSecondaryInsetSidebarStyle: secondarySidebar.getStyle,
    getSecondaryInsetSidebarBodyStyle: secondarySidebar.getBodyStyle,
  };
};
