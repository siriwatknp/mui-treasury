import {
  createLayoutUtils,
  isSomeExisted,
  selectConfigByScreen,
  getInitialScreen,
  upperFirst,
} from '../utils';

describe('utils', function() {
  let utils;
  let ctx;
  beforeEach(() => {
    ctx = {
      collapsed: false,
      opened: false,
      sidebar: {
        variant: 'temporary',
        anchor: 'left',
        width: 256,
        collapsible: false,
        collapsedWidth: 80,
      },
      secondarySidebar: {
        variant: 'temporary',
        anchor: 'right',
        width: 244,
        collapsible: false,
        collapsedWidth: 80,
      },
    };
    utils = createLayoutUtils(ctx);
  });
  test('upperFirst should have first letter uppercase and the rest lowercase', () => {
    expect(upperFirst('fIrst')).toEqual('First');
    expect(upperFirst('HelloWorld')).toEqual('Helloworld');
    expect(upperFirst('reactive')).toEqual('Reactive');
    expect(upperFirst('UPPERCASE')).toEqual('Uppercase');
  });
  test('getInitialScreen return initial screen', () => {
    expect(
      getInitialScreen({
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      })
    ).toBe('md');
  });

  test('selectConfigByScreen return correct config', () => {
    const config = {
      xs: 'xs',
      lg: 'lg',
    };
    expect(selectConfigByScreen(config, 'xs')).toBe('xs');
    expect(selectConfigByScreen(config, 'sm')).toBe('xs');
    expect(selectConfigByScreen(config, 'lg')).toBe('lg');
    expect(selectConfigByScreen(config, 'xl')).toBe('lg');
  });

  test('isSomeExisted return true if some key in source exist in target', () => {
    const source = {
      screen: 'md',
      xs: {},
    };
    const target = ['xs', 'sm', 'md'];
    expect(isSomeExisted(source, target)).toBeTruthy();
    delete source.xs;
    expect(isSomeExisted(source, target)).toBeFalsy();
  });

  /**
   *  getSidebarGap
   */
  test('[temporary PrimarySidebar] gap return 0', () => {
    expect(utils.getSidebarGap()).toBe(0);
  });

  test('[temporary SecondarySidebar] gap return 0', () => {
    expect(utils.getSecondarySidebarGap()).toBe(0);
  });

  test('[permanent Sidebar] gap return width', () => {
    ctx.sidebar.variant = 'permanent';
    utils = createLayoutUtils(ctx);
    expect(utils.getSidebarGap()).toBe(256);
  });
  test('[collapsible permanent Sidebar] gap return width (not collapsed yet)', () => {
    ctx.sidebar.variant = 'permanent';
    ctx.sidebar.collapsible = true;
    ctx.collapsed = false;
    utils = createLayoutUtils(ctx);
    expect(utils.getSidebarGap()).toBe(256);
  });
  test('[collapsed persistent Sidebar] gap return collapsed width', () => {
    ctx.sidebar.variant = 'permanent';
    ctx.sidebar.collapsible = true;
    ctx.collapsed = true;
    utils = createLayoutUtils(ctx);
    expect(utils.getSidebarGap()).toBe(80);
  });

  test('[persistent Sidebar (primaryPersistentPushed=false)] gap return 0', () => {
    ctx.sidebar.variant = 'persistent';
    ctx.opened = false;
    ctx.sidebar.primaryPersistentPushed = false;
    ctx.sidebar.collapsible = false;
    utils = createLayoutUtils(ctx);
    expect(utils.getSidebarGap()).toBe(0);
  });
  test('[closed persistent Sidebar (primaryPersistentPushed=true)] gap return 0', () => {
    ctx.sidebar.variant = 'persistent';
    ctx.opened = false;
    ctx.sidebar.primaryPersistentPushed = true;
    ctx.sidebar.collapsible = true;
    ctx.collapsed = false;
    utils = createLayoutUtils(ctx);
    expect(utils.getSidebarGap()).toBe(0);
  });
  test('[opened persistent Sidebar (primaryPersistentPushed=true)] gap return width', () => {
    ctx.sidebar.variant = 'persistent';
    ctx.opened = true;
    ctx.sidebar.collapsible = true;
    ctx.collapsed = false;
    utils = createLayoutUtils(ctx);
    expect(utils.getSidebarGap({ primaryPersistentPushed: true })).toBe(256);
  });
  test('[persistent Sidebar (primaryPersistentPushed=true)] gap return collapsedWidth when collapsed', () => {
    ctx.sidebar.variant = 'persistent';
    ctx.opened = true;
    ctx.sidebar.collapsible = true;
    ctx.collapsed = true;
    utils = createLayoutUtils(ctx);
    expect(utils.getSidebarGap({ primaryPersistentPushed: true })).toBe(80);
  });

  test("[temporary Sidebar] component's width will always 100%", () => {
    ctx.sidebar.collapsible = true;
    ctx.collapsed = true;
    utils = createLayoutUtils(ctx);
    expect(utils.getWidth({ primaryPersistentScreenFit: true })).toBe('100%');
  });

  /**
   * getWidth test cases
   */
  test("[permanent PrimarySidebar] component's width will minus sidebar width", () => {
    ctx.sidebar.variant = 'permanent';
    utils = createLayoutUtils(ctx);
    expect(utils.getWidth()).toBe('calc(100% - 256px)');
  });

  test("[permanent SecondarySidebar] component's width will minus sidebar width", () => {
    ctx.secondarySidebar.variant = 'permanent';
    utils = createLayoutUtils(ctx);
    expect(utils.getWidth()).toBe('calc(100% - 244px)');
  });

  test("[permanent PrimarySidebar] component's width is equal to collapsed width when collapsed", () => {
    ctx.sidebar.variant = 'permanent';
    ctx.sidebar.collapsible = true;
    ctx.collapsed = true;
    utils = createLayoutUtils(ctx);
    expect(utils.getWidth()).toBe('calc(100% - 80px)');
  });

  test("[closed persistent PrimarySidebar] component's width is 100%", () => {
    ctx.opened = false;

    ctx.sidebar.variant = 'persistent';
    ctx.sidebar.collapsible = true;
    ctx.collapsed = true;
    utils = createLayoutUtils(ctx);
    expect(utils.getWidth({ primaryPersistentScreenFit: true })).toBe('100%');
  });

  test("[opened persistent PrimarySidebar] component's width depends on primaryPersistentScreenFit mode", () => {
    ctx.opened = true;

    ctx.sidebar.variant = 'persistent';
    ctx.sidebar.collapsible = false;
    ctx.collapsed = false;
    utils = createLayoutUtils(ctx);
    expect(utils.getWidth()).toBe('100%');
    expect(
      utils.getWidth({
        primaryPersistentScreenFit: true,
        primaryPersistentPushed: true,
      })
    ).toBe('calc(100% - 256px)');

    ctx.sidebar.collapsible = true;
    ctx.collapsed = true;
    utils = createLayoutUtils(ctx);
    expect(
      utils.getWidth({
        primaryPersistentScreenFit: true,
        primaryPersistentPushed: true,
      })
    ).toBe('calc(100% - 80px)');
  });

  test('[Both temporary side bar] width should be 100%', () => {
    utils = createLayoutUtils(ctx);
    expect(utils.getWidth()).toBe('100%');
  });

  test("[Both is permanent] width should minus both sidebar's width", () => {
    ctx.sidebar.variant = 'permanent';
    ctx.sidebar.collapsible = true;
    ctx.secondarySidebar.variant = 'permanent';
    ctx.secondarySidebar.collapsible = true;
    utils = createLayoutUtils(ctx);
    expect(utils.getWidth()).toBe(`calc(100% - ${256 + 244}px)`);

    ctx.collapsed = true;
    utils = createLayoutUtils(ctx);
    expect(utils.getWidth()).toBe(`calc(100% - ${80 + 244}px)`);

    ctx.secondaryCollapsed = true;
    utils = createLayoutUtils(ctx);
    expect(utils.getWidth()).toBe(`calc(100% - ${80 + 80}px)`);

    ctx.collapsed = false;
    utils = createLayoutUtils(ctx);
    expect(utils.getWidth()).toBe(`calc(100% - ${256 + 80}px)`);
  });

  test('[Default anchor sidebars] should calculate correct margin', () => {
    utils = createLayoutUtils(ctx);
    expect(utils.getContainerMarginStyle()).toMatchObject({
      marginLeft: utils.getSidebarGap(),
      marginRight: utils.getSecondarySidebarGap(),
    });
  });

  test('getContentStyle & getFooterStyle return correct style', () => {
    utils = createLayoutUtils(ctx);
    expect(utils.getContentStyle()).toMatchObject({
      marginLeft: utils.getSidebarGap(),
      marginRight: utils.getSecondarySidebarGap(),
      width: utils.getWidth(),
    });
    expect(utils.getFooterStyle()).toMatchObject({
      marginLeft: utils.getSidebarGap(),
      marginRight: utils.getSecondarySidebarGap(),
      width: utils.getWidth(),
    });
  });
});
