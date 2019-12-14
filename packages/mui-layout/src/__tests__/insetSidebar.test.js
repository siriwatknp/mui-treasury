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
      .setInsetSidebars()
      .get();
    insetSidebar = createInsetSidebar(ctx);
    header = createHeader(ctx);
    content = createContent(ctx);
    footer = createFooter(ctx);
    provider = () => {
      const config = ConfigGenerator();

      return {
        ...config,
        get: () => ({
          insetSidebar: createInsetSidebar(config.get()),
          header: createHeader(config.get()),
          content: createContent(config.get()),
          footer: createFooter(config.get()),
        }),
      };
    };
  });

  test('InsetSidebar should have set up width', () => {
    expect(insetSidebar.getStyle()).toMatchObject({
      width: 256,
    });

    insetSidebar = createInsetSidebar({
      ...ctx,
      sidebar: ctx.secondarySidebar,
    });
    expect(insetSidebar.getStyle()).toMatchObject({
      width: 244,
    });
  });

  test('Header style should not be affected by InsetSidebar', () => {
    expect(header.getStyle()).not.toMatchObject({
      marginRight: expect.anything(),
    });
    expect(header.getStyle()).not.toMatchObject({
      marginLeft: expect.anything(),
    });

    ctx.sidebar.inset = false;
    header = createHeader(ctx);
    expect(header.getStyle()).toMatchObject({
      marginLeft: expect.anything(),
    });
    expect(header.getStyle()).not.toMatchObject({
      marginRight: expect.anything(),
    });

    ctx.secondarySidebar.inset = false;
    header = createHeader(ctx);
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
    expect(footer.getStyle()).toMatchObject({
      marginLeft: 256,
      width: 'auto',
    });
    ctx.sidebar.anchor = 'right';
    ctx.secondarySidebar.anchor = 'left';
    footer = createFooter(ctx);
    expect(footer.getStyle()).toMatchObject({
      marginRight: 256,
      width: 'auto',
    });

    ctx.footer.insetBehavior = 'flexible';
    footer = createFooter(ctx);
    expect(footer.getStyle()).toMatchObject({
      width: 'auto',
    });
  });
  // todo : InsetSidebar should become drawer at given breakpoint
  // todo : InsetSidebarTrigger should show at given breakpoint

  // todo : primary InsetSidebar can be on the right side

  // todo : secondary InsetSidebar can be on the left side
});
