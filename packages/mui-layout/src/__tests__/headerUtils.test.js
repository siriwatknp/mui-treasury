import createHeaderUtils from '../models/header';

describe('Header Utils', () => {
  let ctx;
  const theme = { zIndex: { drawer: 1200 } };
  beforeEach(() => {
    ctx = {
      collapsed: false,
      opened: false,
      sidebar: {
        variant: 'permanent',
        anchor: 'left',
        width: 256,
        collapsible: false,
        collapsedWidth: 80,
      },
      secondarySidebar: {
        variant: 'permanent',
        anchor: 'right',
        width: 244,
        collapsible: false,
        collapsedWidth: 80,
      },
      header: {
        clipped: true,
        secondaryClipped: true,
      },
    };
  });
  test('style is empty style if both sidebar are clipped', () => {
    const headerUtils = createHeaderUtils(ctx);
    expect(headerUtils.getStyle(theme)).toMatchObject({
      zIndex: expect.any(Number),
    });
  });

  test('style has ml & width if primary sidebar not clipped but secondary is clipped', () => {
    ctx.header.clipped = false;
    const headerUtils = createHeaderUtils(ctx);
    expect(headerUtils.getStyle(theme)).toMatchObject({
      marginLeft: ctx.sidebar.width,
      width: `calc(100% - ${ctx.sidebar.width}px)`,
      zIndex: expect.any(Number),
    });
  });

  test('style has mr & width if secondary not clipped but primary is clipped', () => {
    ctx.header.secondaryClipped = false;
    const headerUtils = createHeaderUtils(ctx);
    expect(headerUtils.getStyle(theme)).toMatchObject({
      marginRight: ctx.secondarySidebar.width,
      width: `calc(100% - ${ctx.secondarySidebar.width}px)`,
      zIndex: expect.any(Number),
    });
  });

  test('style has ml, mr & width if both sidebar not clipped', () => {
    ctx.header.clipped = false;
    ctx.header.secondaryClipped = false;
    const headerUtils = createHeaderUtils(ctx);
    expect(headerUtils.getStyle()).toMatchObject({
      marginLeft: ctx.sidebar.width,
      marginRight: ctx.secondarySidebar.width,
      width: `calc(100% - ${ctx.sidebar.width + ctx.secondarySidebar.width}px)`,
    });
  });
});
