import ConfigGenerator from '../../utils/ConfigGenerator';
import createEdgeEffect from '../../models/edgeEffect';

describe('Edge Effect', () => {
  let provider;
  let effect;
  const BEHAVIOR = {
    fit: { persistentBehavior: 'fit' },
    flexible: { persistentBehavior: 'flexible' },
  };
  const THEME = {
    zIndex: {
      drawer: 1200,
    },
  };
  beforeEach(() => {
    const Provider = () => {
      const config = ConfigGenerator();

      return {
        ...config,
        set: rest => {
          effect = createEdgeEffect({
            ...config.get(),
            ...rest,
          });
        },
      };
    };
    provider = Provider();
    provider.set();
  });

  test('no effect if header is not clipped', () => {
    provider.header.setClipped(false);
    provider.header.setSecondaryClipped(false);
    provider.set();
    expect(effect.getHeaderZIndexStyle(THEME)).toBeUndefined();
  });

  test('header clipped all sidebars', () => {
    provider.header.setClipped(true);
    provider.header.setSecondaryClipped(true);
    provider.set();
    expect(effect.getHeaderZIndexStyle(THEME)).toStrictEqual({ zIndex: 1210 });
  });

  test('header clipped only primary sidebar', () => {
    provider.header.setClipped(true);
    provider.header.setSecondaryClipped(false);
    provider.set();
    expect(effect.getHeaderZIndexStyle(THEME)).toStrictEqual({ zIndex: 1210 });
  });

  test('header clipped only secondary sidebar', () => {
    provider.header.setClipped(false);
    provider.header.setSecondaryClipped(true);
    provider.set();
    expect(effect.getHeaderZIndexStyle(THEME)).toStrictEqual({ zIndex: 1210 });
  });

  test('[anchor: left] affect margin left', () => {
    provider.primarySidebar.setAnchor('left');
    provider.primarySidebar.setWidth(256);
    provider.primarySidebar.setCollapsible(true);
    provider.primarySidebar.setCollapsedWidth(80);

    // check all variants
    provider.primarySidebar.setVariant('temporary');
    provider.set();
    expect(effect.getMarginStyle()).toBeUndefined();

    provider.primarySidebar.setVariant('permanent');
    provider.set({ collapsed: false });
    expect(effect.getMarginStyle()).toStrictEqual({ marginLeft: 256 });
    provider.set({ collapsed: true });
    expect(effect.getMarginStyle()).toStrictEqual({ marginLeft: 80 });

    provider.primarySidebar.setVariant('persistent');
    provider.set({ opened: false, collapsed: false });
    expect(effect.getMarginStyle()).toStrictEqual({ marginLeft: 0 });
    provider.set({ opened: true, collapsed: false });
    // no persistentBehavior provided
    expect(effect.getMarginStyle()).toStrictEqual({ marginLeft: 0 });
    // contain persistentBehavior
    expect(effect.getMarginStyle(BEHAVIOR.fit)).toStrictEqual({
      marginLeft: 256,
    });
    expect(effect.getMarginStyle(BEHAVIOR.flexible)).toStrictEqual({
      marginLeft: 256,
    });
  });

  test('[anchor: right] affect margin right', () => {
    provider.primarySidebar.setAnchor('right');
    provider.primarySidebar.setWidth(300);
    provider.primarySidebar.setCollapsible(true);
    provider.primarySidebar.setCollapsedWidth(64);

    // check all variants
    provider.primarySidebar.setVariant('temporary');
    provider.set();
    expect(effect.getMarginStyle()).toBeUndefined();

    provider.primarySidebar.setVariant('permanent');
    provider.set({ collapsed: false });
    expect(effect.getMarginStyle()).toStrictEqual({ marginRight: 300 });
    provider.set({ collapsed: true });
    expect(effect.getMarginStyle()).toStrictEqual({ marginRight: 64 });

    provider.primarySidebar.setVariant('persistent');
    provider.set({ opened: false, collapsed: false });
    expect(effect.getMarginStyle()).toStrictEqual({ marginRight: 0 });
    provider.set({ opened: true, collapsed: false });
    // no persistentBehavior provided
    expect(effect.getMarginStyle()).toStrictEqual({ marginRight: 0 });
    // contain persistentBehavior
    expect(effect.getMarginStyle(BEHAVIOR.fit)).toStrictEqual({
      marginRight: 300,
    });
    // ------------------------------------------------------------
    // special for persistent behavior : flexible
    // should only affect marginLeft as negative value, otherwise does not work
    // css constraint
    // todo support rtl direction
    provider.set({ opened: true, collapsed: false });
    expect(effect.getMarginStyle(BEHAVIOR.flexible)).toStrictEqual({
      marginLeft: -300,
    });
    provider.set({ opened: true, collapsed: true });
    expect(effect.getMarginStyle(BEHAVIOR.flexible)).toStrictEqual({
      marginLeft: -64,
    });

    provider.primarySidebar.setWidth('30%');
    provider.set({ opened: true, collapsed: false });
    expect(effect.getMarginStyle(BEHAVIOR.flexible)).toStrictEqual({
      marginLeft: '-30%',
    });
  });

  test("affect other object's width", () => {
    provider.primarySidebar.setWidth(300);
    provider.primarySidebar.setCollapsible(true);
    provider.primarySidebar.setCollapsedWidth(64);

    // check all variants
    provider.primarySidebar.setVariant('temporary');
    provider.set();
    expect(effect.getWidthStyle()).toBeUndefined();

    provider.primarySidebar.setVariant('permanent');
    provider.set({ collapsed: false });
    expect(effect.getWidthStyle()).toStrictEqual({
      width: 'calc(100% - 300px)',
    });
    provider.set({ collapsed: true });
    expect(effect.getWidthStyle()).toStrictEqual({
      width: 'calc(100% - 64px)',
    });

    provider.primarySidebar.setVariant('persistent');
    provider.set({ opened: false, collapsed: false });
    expect(effect.getWidthStyle()).toStrictEqual({ width: '100%' });
    provider.set({ opened: true, collapsed: false });
    expect(effect.getWidthStyle()).toStrictEqual({ width: '100%' });
    expect(effect.getWidthStyle(BEHAVIOR.flexible)).toStrictEqual({
      width: '100%',
    });
    expect(effect.getWidthStyle(BEHAVIOR.fit)).toStrictEqual({
      width: 'calc(100% - 300px)',
    });
    provider.set({ opened: true, collapsed: true });
    expect(effect.getWidthStyle(BEHAVIOR.fit)).toStrictEqual({
      width: 'calc(100% - 64px)',
    });
  });
});
