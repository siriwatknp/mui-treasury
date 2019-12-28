import SidebarGenerator from '../../utils/ConfigGenerator/SidebarGenerator';
import createInsetSidebar from '../../models/insetSidebar';

describe('Inset Sidebar', () => {
  let provider;
  let insetSidebar;
  beforeEach(() => {
    const Provider = () => {
      const config = SidebarGenerator();

      return {
        ...config,
        set: rest => {
          insetSidebar = createInsetSidebar({
            sidebar: { ...config.get() },
            ...rest,
          });
        },
      };
    };
    provider = Provider();
    provider.set();
  });

  test('hidden sidebar has width 0', () => {
    provider.setInset(true);
    provider.setWidth(200);
    provider.setHidden(true);
    provider.set();
    expect(insetSidebar.getWidth()).toBe(0);
  });

  test('return correct width', () => {
    provider.setInset(true);
    provider.setWidth(200);
    provider.set();
    expect(insetSidebar.getWidth()).toBe(200);
  });

  test('body style contains position & width', () => {
    provider.setWidth(256);
    provider.setInsetProps({ position: 'sticky', top: 24 });
    provider.set();
    expect(insetSidebar.getBodyStyle()).toStrictEqual({
      position: 'sticky',
      top: 24,
    });

    provider.setInsetProps({ position: 'fixed', top: 0 });
    provider.set();
    expect(insetSidebar.getBodyStyle()).toStrictEqual({
      top: 0,
      position: 'fixed',
      height: '100%',
    });

    provider.setInsetProps({ position: 'absolute', top: 0 });
    provider.set({ header: { offsetHeight: 60 } });
    expect(insetSidebar.getBodyStyle()).toStrictEqual({
      top: 0,
      position: 'absolute',
      height: 'calc(100vh - 60px)',
    });
  });
});
