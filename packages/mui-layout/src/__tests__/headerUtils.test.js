import createHeaderUtils from '../utils/headerUtils';

describe('Header Utils', () => {
  let ctx;
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
    expect(headerUtils.getHeaderStyle()).toMatchObject({});
  });

  test('style has ml & width if primary sidebar not clipped but secondary is clipped', () => {
    ctx.header.clipped = false;
    const headerUtils = createHeaderUtils(ctx);
    expect(headerUtils.getHeaderStyle()).toMatchObject({
      marginLeft: ctx.sidebar.width,
      width: `calc(100% - ${ctx.sidebar.width}px)`,
    });
  });

  test('style has mr & width if secondary not clipped but primary is clipped', () => {
    ctx.header.secondaryClipped = false;
    const headerUtils = createHeaderUtils(ctx);
    expect(headerUtils.getHeaderStyle()).toMatchObject({
      marginRight: ctx.secondarySidebar.width,
      width: `calc(100% - ${ctx.secondarySidebar.width}px)`,
    });
  });

  test('style has ml, mr & width if both sidebar not clipped', () => {
    ctx.header.clipped = false;
    ctx.header.secondaryClipped = false;
    const headerUtils = createHeaderUtils(ctx);
    expect(headerUtils.getHeaderStyle()).toMatchObject({
      marginLeft: ctx.sidebar.width,
      marginRight: ctx.secondarySidebar.width,
      width: `calc(100% - ${ctx.sidebar.width + ctx.secondarySidebar.width}px)`,
    });
  });
});
