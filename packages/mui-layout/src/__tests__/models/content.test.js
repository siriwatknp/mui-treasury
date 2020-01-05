import ConfigGenerator from '../../utils/ConfigGenerator';
import createContent from '../../models/content';

describe('Content', () => {
  let provider;
  let content;
  beforeEach(() => {
    const Provider = () => {
      const config = ConfigGenerator();

      return {
        ...config,
        set: rest => {
          content = createContent({
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
    provider.content.setPersistentBehavior('fit');
    provider.primarySidebar.setWidth(256);
    provider.primarySidebar.setInset(false);
    provider.primarySidebar.setAnchor('left');
    provider.primarySidebar.setVariant('permanent');

    provider.secondarySidebar.setWidth(244);
    provider.secondarySidebar.setInset(false);
    provider.secondarySidebar.setAnchor('right');
    provider.secondarySidebar.setVariant('permanent');
    provider.set();
    expect(content.getMarginStyle()).toStrictEqual({
      marginLeft: 256,
      marginRight: 244,
    });
    expect(content.getWidthStyle()).toStrictEqual({
      width: 'calc(100% - 500px)',
    });

    provider.secondarySidebar.setVariant('persistent');
    provider.content.setSecondaryPersistentBehavior('fit');
    provider.set({ secondaryOpened: false });
    expect(content.getMarginStyle()).toStrictEqual({
      marginLeft: 256,
      marginRight: 0,
    });
    expect(content.getWidthStyle()).toStrictEqual({
      width: 'calc(100% - 256px)',
    });
    provider.set({ secondaryOpened: true });
    expect(content.getMarginStyle()).toStrictEqual({
      marginLeft: 256,
      marginRight: 244,
    });
    expect(content.getWidthStyle()).toStrictEqual({
      width: 'calc(100% - 500px)',
    });

    provider.content.setSecondaryPersistentBehavior('flexible');
    provider.set({ secondaryOpened: true });
    expect(content.getMarginStyle()).toStrictEqual({
      marginLeft: 'calc(256px + -244px)',
    });
    expect(content.getWidthStyle()).toStrictEqual({
      width: 'calc(100% - 256px)',
    });
  });

  test('[All Insets] has correct style', () => {
    provider.primarySidebar.setWidth(256);
    provider.primarySidebar.setInset(true);
    provider.primarySidebar.setAnchor('right');

    provider.secondarySidebar.setWidth(244);
    provider.secondarySidebar.setInset(true);
    provider.secondarySidebar.setAnchor('left');
    provider.set();
    expect(content.getMarginStyle()).toStrictEqual({});

    provider.set();
    expect(content.getMarginStyle()).toStrictEqual({});
    expect(content.getWidthStyle()).toStrictEqual({ width: 'auto' });
  });

  test('[Inset + Edge] has correct style', () => {
    provider.primarySidebar.setInset(false);

    provider.secondarySidebar.setInset(true);
    provider.set();
    expect(content.getMarginStyle()).toBeUndefined();
    expect(content.getWidthStyle()).toBeUndefined();
  });
});
