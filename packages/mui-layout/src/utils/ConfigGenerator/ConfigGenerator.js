import ContentGenerator from './ContentGenerator';
import FooterGenerator from './FooterGenerator';
import HeaderGenerator from './HeaderGenerator';
import SidebarGenerator from './SidebarGenerator';

export default () => {
  const primarySidebar = SidebarGenerator();
  const secondarySidebar = SidebarGenerator().initSecondary();
  const content = ContentGenerator();
  const header = HeaderGenerator();
  const footer = FooterGenerator();
  return {
    get: () => ({
      sidebar: primarySidebar.get(),
      secondarySidebar: secondarySidebar.get(),
      content: content.get(),
      header: header.get(),
      footer: footer.get(),
    }),
    setInsetSidebars() {
      primarySidebar.setInset(true);
      secondarySidebar.setInset(true);
      return this;
    },
    primarySidebar,
    secondarySidebar,
    content,
    header,
    footer,
  };
};
