import { ILayoutContext } from '../core/layoutContext';

declare const SidebarAdapter: () => {
  mapSecondaryConfig: (config?: Partial<ILayoutContext>) => Partial<ILayoutContext>;
  normalize2ndSidebarConfigToFn: <R>(fn: (arg: Partial<ILayoutContext>) => R, ctx?: Partial<ILayoutContext>) => R;
}

export default SidebarAdapter;
