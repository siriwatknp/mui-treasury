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
      width: '100%',
      position: 'sticky',
      top: 24,
    });

    provider.setInsetProps({ position: 'fixed' });
    provider.set();
    expect(insetSidebar.getBodyStyle()).toStrictEqual({
      position: 'fixed',
      height: '100%',
    });
  });
});
