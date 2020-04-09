import ConfigGenerator from '../../utils/ConfigGenerator';
import createFooter from '../../models/footer';

describe('Footer', () => {
  let provider;
  let footer;
  beforeEach(() => {
    const Provider = () => {
      const config = ConfigGenerator();

      return {
        ...config,
        set: rest => {
          footer = createFooter({
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
    provider.footer.setInsetBehavior('fit');
    provider.primarySidebar.setWidth(256);
    provider.primarySidebar.setInset(true);
    provider.primarySidebar.setAnchor('right');

    provider.footer.setSecondaryInsetBehavior('fit');
    provider.secondarySidebar.setWidth(244);
    provider.secondarySidebar.setInset(true);
    provider.secondarySidebar.setAnchor('left');
    provider.set();
    expect(footer.getMarginStyle()).toStrictEqual({
      marginLeft: 244,
      marginRight: 256,
    });
    expect(footer.getWidthStyle()).toStrictEqual({ width: 'auto' });

    provider.footer.setSecondaryInsetBehavior('none');
    provider.set();
    expect(footer.getMarginStyle()).toStrictEqual({
      marginRight: 256,
    });
  });

  test('[Inset + Edge] has correct style', () => {
    provider.footer.setPersistentBehavior('fit');
    provider.primarySidebar.setInset(false);
    provider.primarySidebar.setWidth(256);
    provider.primarySidebar.setVariant('persistent');
    provider.primarySidebar.setCollapsible(true);
    provider.primarySidebar.setCollapsedWidth(80);
    provider.primarySidebar.setAnchor('left');

    provider.footer.setSecondaryInsetBehavior('fit');
    provider.secondarySidebar.setInset(true);
    provider.secondarySidebar.setInsetProps({ position: 'fixed' });
    provider.secondarySidebar.setWidth(244);
    provider.secondarySidebar.setAnchor('right');
    provider.secondarySidebar.setVariant('permanent');
    provider.set({ open: false, collapsed: false });
    expect(footer.getMarginStyle()).toStrictEqual({
      marginLeft: 0,
      marginRight: 244,
    });
    expect(footer.getWidthStyle()).toStrictEqual({ width: 'auto' });

    provider.set({ open: true, collapsed: false });
    expect(footer.getMarginStyle()).toStrictEqual({
      marginLeft: 256,
      marginRight: 244,
    });
  });
});
