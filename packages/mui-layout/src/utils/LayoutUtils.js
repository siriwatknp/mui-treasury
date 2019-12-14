import createAllSidebars from '../models/allSidebars';
import createHeader from '../models/header';
import createContent from '../models/content';
import createFooter from '../models/footer';

export default (ctx = {}) => {
  const {
    primarySidebar,
    secondarySidebar,
    getPrimaryStyle,
    getSecondaryStyle,
  } = createAllSidebars(ctx);
  const header = createHeader(ctx);
  const content = createContent(ctx);
  const footer = createFooter(ctx);
  return {
    getSidebarWidth: () => primarySidebar.width,
    getSecondarySidebarWidth: () => secondarySidebar.width,
    getSidebarZIndex: getPrimaryStyle,
    getSecondarySidebarZIndex: getSecondaryStyle,
    getContentStyle: content.getStyle,
    getFooterStyle: footer.getStyle,
    getHeaderStyle: header.getStyle,
    getInsetSidebarStyle: primarySidebar.getStyle,
    getInsetSidebarBodyStyle: primarySidebar.getBodyStyle,
    getSecondaryInsetSidebarStyle: secondarySidebar.getStyle,
    getSecondaryInsetSidebarBodyStyle: secondarySidebar.getBodyStyle,
  };
};
