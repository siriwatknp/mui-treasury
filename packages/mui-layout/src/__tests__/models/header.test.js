import ConfigGenerator from '../../utils/ConfigGenerator';
import createHeader from '../../models/header';

describe('Header', () => {
  let provider;
  let header;
  beforeEach(() => {
    const Provider = () => {
      const config = ConfigGenerator();

      return {
        ...config,
        set: rest => {
          header = createHeader({
            ...config.get(),
            ...rest,
          });
        },
      };
    };
    provider = Provider();
    provider.set();
  });
  test('[All EdgeSidebars] has correct style', () => {
    provider.header.setClipped(true);
    provider.header.setPersistentBehavior('fit');
    provider.primarySidebar.setWidth(256);
    provider.primarySidebar.setInset(false);
    provider.primarySidebar.setAnchor('left');
    provider.primarySidebar.setVariant('permanent');

    provider.header.setSecondaryClipped(true);
    provider.header.setSecondaryPersistentBehavior('fit');
    provider.secondarySidebar.setWidth(244);
    provider.secondarySidebar.setInset(false);
    provider.secondarySidebar.setAnchor('right');
    provider.secondarySidebar.setVariant('permanent');
    provider.set();
    expect(header.getMarginStyle()).toStrictEqual({});

    provider.header.setClipped(false);
    provider.header.setSecondaryClipped(false);
    provider.set();
    expect(header.getMarginStyle()).toStrictEqual({
      marginLeft: 256,
      marginRight: 244,
    });
    expect(header.getWidthStyle()).toStrictEqual({
      width: 'calc(100% - 500px)',
    });

    provider.header.setSecondaryClipped(true);
    provider.set();
    expect(header.getMarginStyle()).toStrictEqual({
      marginLeft: 256,
    });
    expect(header.getWidthStyle()).toStrictEqual({
      width: 'calc(100% - 256px)',
    });

    provider.header.setSecondaryClipped(false);
    provider.header.setSecondaryPersistentBehavior('fit');
    provider.secondarySidebar.setVariant('persistent');
    provider.set({ secondaryOpened: false });
    expect(header.getMarginStyle()).toStrictEqual({
      marginLeft: 256,
      marginRight: 0,
    });
    expect(header.getWidthStyle()).toStrictEqual({
      width: 'calc(100% - 256px)',
    });
    provider.set({ secondaryOpened: true });
    expect(header.getMarginStyle()).toStrictEqual({
      marginLeft: 256,
      marginRight: 244,
    });
    expect(header.getWidthStyle()).toStrictEqual({
      width: 'calc(100% - 500px)',
    });
  });

  test('[All Insets] has correct style', () => {
    provider.header.setClipped(true);
    provider.primarySidebar.setWidth(256);
    provider.primarySidebar.setInset(true);
    provider.primarySidebar.setAnchor('right');

    provider.header.setSecondaryClipped(false);
    provider.secondarySidebar.setWidth(244);
    provider.secondarySidebar.setInset(true);
    provider.secondarySidebar.setAnchor('left');
    provider.set();
    expect(header.getMarginStyle()).toStrictEqual({});

    provider.header.setClipped(false);
    provider.header.setSecondaryClipped(false);
    provider.set();
    expect(header.getMarginStyle()).toStrictEqual({});
    expect(header.getWidthStyle()).toStrictEqual({ width: 'auto' });
  });

  test('[Inset + Edge] has correct style', () => {
    provider.header.setClipped(false);
    provider.header.setPersistentBehavior('fit');
    provider.primarySidebar.setInset(false);
    provider.primarySidebar.setWidth(256);
    provider.primarySidebar.setVariant('persistent');
    provider.primarySidebar.setCollapsible(true);
    provider.primarySidebar.setCollapsedWidth(80);
    provider.primarySidebar.setAnchor('left');

    provider.header.setSecondaryClipped(false);
    provider.secondarySidebar.setInset(true);
    provider.secondarySidebar.setInsetProps(true);
    provider.secondarySidebar.setWidth(244);
    provider.secondarySidebar.setAnchor('right');
    provider.secondarySidebar.setVariant('permanent');
    provider.set();
    expect(header.getMarginStyle()).toStrictEqual({
      marginLeft: 0,
    });
    expect(header.getWidthStyle()).toStrictEqual({ width: '100%' });

    provider.set({ opened: true });
    expect(header.getMarginStyle()).toStrictEqual({
      marginLeft: 256,
    });
    expect(header.getWidthStyle()).toStrictEqual({ width: 'calc(100% - 256px)' });
  });
});
