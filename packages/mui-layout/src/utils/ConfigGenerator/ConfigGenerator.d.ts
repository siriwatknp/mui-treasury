import AddOnsGenerator from './AddOnsGenerator';
import ContainerGenerator from './ContainerGenerator';
import ContentGenerator from './ContentGenerator';
import FooterGenerator from './FooterGenerator';
import HeaderGenerator from './HeaderGenerator';
import SidebarGenerator from './SidebarGenerator';

export interface Config<I extends boolean = false> {
  debug(props: any): void;
  get: () => (I extends true ? ReturnType<ReturnType<typeof AddOnsGenerator>['get']> : {}) & {
    sidebar: ReturnType<ReturnType<typeof SidebarGenerator>['get']>;
    secondarySidebar: ReturnType<ReturnType<ReturnType<typeof SidebarGenerator>['initSecondary']>['get']>;
    container: ReturnType<ReturnType<typeof ContainerGenerator>['get']>;
    content: ReturnType<ReturnType<typeof ContentGenerator>['get']>;
    header: ReturnType<ReturnType<typeof HeaderGenerator>['get']>;
    footer: ReturnType<ReturnType<typeof FooterGenerator>['get']>;
  };
  setPrimarySidebarToInset(): this;
  setPrimarySidebarToNonInset(): this;
  setSecondarySidebarToInset(): this;
  setSecondarySidebarToNonInset(): this;
  setAllSidebarsToInset(): this;
  switchPrimarySidebarAnchor(): this;
  switchSecondarySidebarAnchor(): this;
  switchAllSidebarAnchors(): this;
  addOns: ReturnType<typeof AddOnsGenerator>,
  primarySidebar: ReturnType<typeof SidebarGenerator>;
  secondarySidebar: ReturnType<typeof SidebarGenerator>;
  content: ReturnType<typeof ContentGenerator>;
  container: ReturnType<typeof ContainerGenerator>;
  header: ReturnType<typeof HeaderGenerator>;
  footer: ReturnType<typeof FooterGenerator>;
}

declare const ConfigGenerator: <I extends boolean = false>(options?: { addOnsIncluded?: I }) => Config<I>;

export default ConfigGenerator;
