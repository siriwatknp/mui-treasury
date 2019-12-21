import SidebarGenerator from '../../utils/ConfigGenerator/SidebarGenerator';
import createEdgeSidebar from '../../models/edgeSidebar';

describe('EdgeSidebar', () => {
  let provider;
  let edgeSidebar;
  beforeEach(() => {
    const Provider = () => {
      const config = SidebarGenerator();

      return {
        ...config,
        set: rest => {
          edgeSidebar = createEdgeSidebar({
            sidebar: { ...config.get() },
            ...rest,
          });
        },
      };
    };
    provider = Provider();
    provider.set();
  });
  test('able to get width related to sidebar props', () => {
    provider.setWidth(256);
    provider.setCollapsible(false);
    provider.set();
    expect(edgeSidebar.getWidth()).toBe(256);

    // collapsible but uncollapsed
    provider.setCollapsible(true);
    provider.set({ collapsed: false });
    expect(edgeSidebar.getWidth()).toBe(256);

    // todo collapsible + collapsed => collapsedWidth
    provider.setCollapsedWidth(64);
    provider.set({ collapsed: true });
    expect(edgeSidebar.getWidth()).toBe(64);

    // todo hidden
    provider.setHidden(true);
    provider.set();
    expect(edgeSidebar.getWidth()).toBe(0);
  });
});
