import createInsetSidebar from '../models/insetSidebar';
import createHeader from '../models/header';
import createContent from '../models/content';
import createFooter from '../models/footer';
import ConfigGenerator from '../utils/ConfigGenerator';

describe('Inset Sidebar', () => {
  let ctx;
  let insetSidebar;
  let header;
  let content;
  let footer;
  let provider;
  beforeEach(() => {
    ctx = ConfigGenerator()
      .setAllSidebarsToInset()
      .get();
    insetSidebar = createInsetSidebar(ctx);
    header = createHeader(ctx);
    content = createContent(ctx);
    footer = createFooter(ctx);
    const Provider = () => {
      const config = ConfigGenerator().setAllSidebarsToInset();

      return {
        ...config,
        set: () => {
          insetSidebar = createInsetSidebar(config.get());
          header = createHeader(config.get());
          content = createContent(config.get());
          footer = createFooter(config.get());
        },
      };
    };
    provider = Provider();
    provider.set();
  });

  test('InsetSidebar should have set up width', () => {
    expect(insetSidebar.inset).toBeTruthy();
    expect(insetSidebar.getStyle()).toMatchObject({
      width: 256,
    });
  });

  test('Header style should not be affected by InsetSidebar', () => {
    expect(header.getStyle()).not.toMatchObject({
      marginRight: expect.anything(),
    });
    expect(header.getStyle()).not.toMatchObject({
      marginLeft: expect.anything(),
    });

    provider.primarySidebar.setInset(false);
    provider.set();
    expect(header.getStyle()).toStrictEqual({
      zIndex: expect.anything(),
    });

    provider.secondarySidebar.setInset(false);
    provider.set();
    expect(header.getStyle()).not.toMatchObject({
      marginLeft: expect.anything(),
    });
    expect(header.getStyle()).toMatchObject({
      marginRight: expect.anything(),
    });
  });

  test('Content should have no style for InsetSidebar', () => {
    expect(content.getStyle()).toBeUndefined();
  });

  test('Footer should have correct margin by insetBehavior', () => {
    // Primary sidebar config - anchor = left
    // Secondary sidebar config - anchor = right
    // Footer config
    // - insetBehavior = fit : should have marginLeft
    // - secondaryInsetBehavior = none : should not have marginRight
    expect(footer.getStyle()).toMatchObject({
      marginLeft: 256,
      width: 'auto',
    });
    expect(footer.getStyle()).not.toMatchObject({
      marginRight: expect.anything(),
    });

    // all insetBehavior = fit
    provider.footer.setSecondaryInsetToFit();
    provider.set();
    expect(footer.getStyle()).toMatchObject({
      marginLeft: 256,
      marginRight: 244,
      width: 'auto',
    });

    provider.footer.setPrimaryInsetToNonFit();
    provider.set();
    expect(footer.getStyle()).toMatchObject({
      marginRight: 244,
      width: 'auto',
    });
    expect(footer.getStyle()).not.toMatchObject({
      marginLeft: expect.anything(),
    });

    provider.footer.setSecondaryInsetToNonFit();
    provider.set();
    expect(footer.getStyle()).toMatchObject({
      width: 'auto',
    });
    expect(footer.getStyle()).not.toMatchObject({
      marginLeft: expect.anything(),
    });

    provider.footer.setPrimaryInsetToFit();
    provider.switchAllSidebarAnchors();
    provider.set();
    expect(footer.getStyle()).toMatchObject({
      marginRight: 256,
      width: 'auto',
    });
  });
  // todo : InsetSidebar should become drawer at given breakpoint
  // todo : InsetSidebarTrigger should show at given breakpoint

  // todo : primary InsetSidebar can be on the right side

  // todo : secondary InsetSidebar can be on the left side
});
