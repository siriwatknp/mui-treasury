import ConfigGenerator from '../../utils/ConfigGenerator';
import createContainer from '../../models/container';

describe('Container', () => {
  let provider;
  let container;
  beforeEach(() => {
    const Provider = () => {
      const config = ConfigGenerator();

      return {
        ...config,
        set: rest => {
          container = createContainer({
            ...config.get(),
            ...rest,
          });
        },
      };
    };
    provider = Provider();
    provider.set();
  });

  test('[All Insets] has correct style', () => {
    provider.primarySidebar.setInset(true);

    provider.secondarySidebar.setInset(true);
    provider.set();
    expect(container.getMarginStyle()).toStrictEqual(undefined);
    expect(container.getWidthStyle()).toBeUndefined();
  });

  test('[Primary Edge + Secondary Inset] has correct style', () => {
    provider.container.setPersistentBehavior('fit');
    provider.primarySidebar.setInset(false);
    provider.primarySidebar.setWidth(256);
    provider.primarySidebar.setVariant('permanent');
    provider.primarySidebar.setCollapsible(true);
    provider.primarySidebar.setCollapsedWidth(80);
    provider.primarySidebar.setAnchor('left');

    provider.container.setSecondaryInsetBehavior('fit');
    provider.secondarySidebar.setInset(true);
    provider.secondarySidebar.setInsetProps({ position: 'fixed' });
    provider.secondarySidebar.setWidth(244);
    provider.secondarySidebar.setAnchor('right');
    provider.secondarySidebar.setVariant('permanent');
    provider.set();
    expect(container.getMarginStyle()).toStrictEqual({
      marginLeft: 256,
    });
    expect(container.getWidthStyle()).toStrictEqual({
      width: 'calc(100% - 256px)',
    });

    // set primary edge to persistent
    provider.primarySidebar.setVariant('persistent');
    provider.set({ opened: false, collapsed: false });
    expect(container.getMarginStyle()).toStrictEqual({
      marginLeft: 0,
    });
    expect(container.getWidthStyle()).toStrictEqual({
      width: '100%',
    });

    provider.set({ opened: true, collapsed: true });
    expect(container.getMarginStyle()).toStrictEqual({
      marginLeft: 80,
    });
    expect(container.getWidthStyle()).toStrictEqual({
      width: 'calc(100% - 80px)',
    });
  });
});
