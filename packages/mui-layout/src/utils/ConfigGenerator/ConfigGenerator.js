import AddOnsGenerator from './AddOnsGenerator';
import ContentGenerator from './ContentGenerator';
import FooterGenerator from './FooterGenerator';
import HeaderGenerator from './HeaderGenerator';
import SidebarGenerator from './SidebarGenerator';

export default () => {
  const addOns = AddOnsGenerator();
  const primarySidebar = SidebarGenerator();
  const secondarySidebar = SidebarGenerator().initSecondary();
  const content = ContentGenerator();
  const header = HeaderGenerator();
  const footer = FooterGenerator();
  return {
    debug() {
      // eslint-disable-next-line no-console
      console.log(this.get());
    },
    get: addOnsIncluded => ({
      ...(addOnsIncluded && addOns),
      sidebar: primarySidebar.get(),
      secondarySidebar: secondarySidebar.get(),
      content: content.get(),
      header: header.get(),
      footer: footer.get(),
    }),
    setPrimarySidebarToInset() {
      primarySidebar.setInset(true);
      return this;
    },
    setPrimarySidebarToNonInset() {
      primarySidebar.setInset(false);
      return this;
    },
    setSecondarySidebarToInset() {
      secondarySidebar.setInset(true);
      return this;
    },
    setSecondarySidebarToNonInset() {
      secondarySidebar.setInset(false);
      return this;
    },
    setAllSidebarsToInset() {
      primarySidebar.setInset(true);
      secondarySidebar.setInset(true);
      return this;
    },
    switchPrimarySidebarAnchor() {
      const pval = primarySidebar.get();
      primarySidebar.setAnchor(pval.anchor === 'left' ? 'right' : 'left');
      return this;
    },
    switchSecondarySidebarAnchor() {
      const sval = secondarySidebar.get();
      secondarySidebar.setAnchor(sval.anchor === 'left' ? 'right' : 'left');
      return this;
    },
    switchAllSidebarAnchors() {
      this.switchPrimarySidebarAnchor();
      this.switchSecondarySidebarAnchor();
      return this;
    },
    addOns,
    primarySidebar,
    secondarySidebar,
    content,
    header,
    footer,
  };
};
