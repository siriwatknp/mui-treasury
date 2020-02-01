import { AddOns } from './AddOnsGenerator';
import { Container } from './ContainerGenerator';
import { Content } from './ContentGenerator';
import { Footer } from './FooterGenerator';
import { Header } from './HeaderGenerator';
import { SecondarySidebar, Sidebar } from './SidebarGenerator';

export interface Config<I extends boolean = false> {
  debug(props: any): void;
  get: () => (
    & (
      I extends true
        ? ReturnType<AddOns['get']>
        : {}
    )
    & {
      sidebar: ReturnType<Sidebar['get']>;
      secondarySidebar: ReturnType<SecondarySidebar['get']>;
      container?: ReturnType<Container['get']>;
      content: ReturnType<Content['get']>;
      header: ReturnType<Header['get']>;
      footer: ReturnType<Footer['get']>;
    }
  );
  setPrimarySidebarToInset(): this;
  setPrimarySidebarToNonInset(): this;
  setSecondarySidebarToInset(): this;
  setSecondarySidebarToNonInset(): this;
  setAllSidebarsToInset(): this;
  switchPrimarySidebarAnchor(): this;
  switchSecondarySidebarAnchor(): this;
  switchAllSidebarAnchors(): this;
  addOns: AddOns;
  primarySidebar: Sidebar;
  secondarySidebar: SecondarySidebar;
  content: Content;
  container: Container;
  header: Header;
  footer: Footer;
}

declare const ConfigGenerator: <I extends boolean = false>(options?: { addOnsIncluded?: I }) => Config<I>;

export default ConfigGenerator;
