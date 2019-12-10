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
    expect(upperFirst(undefined)).toEqual('');
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
  test.skip('[temporary PrimarySidebar] gap return 0', () => {
    expect(utils.getSidebarGap()).toBe(0);
  });

  test.skip('[temporary SecondarySidebar] gap return 0', () => {
    expect(utils.getSecondarySidebarGap()).toBe(0);
  });

  test.skip('[permanent Sidebar] gap return width', () => {
    ctx.sidebar.variant = 'permanent';
    utils = createLayoutUtils(ctx);
    expect(utils.getSidebarGap()).toBe(256);
  });
  test.skip('[collapsible permanent Sidebar] gap return width (not collapsed yet)', () => {
    ctx.sidebar.variant = 'permanent';
    ctx.sidebar.collapsible = true;
    ctx.collapsed = false;
    utils = createLayoutUtils(ctx);
    expect(utils.getSidebarGap()).toBe(256);
  });
  test.skip('[collapsed persistent Sidebar] gap return collapsed width', () => {
    ctx.sidebar.variant = 'permanent';
    ctx.sidebar.collapsible = true;
    ctx.collapsed = true;
    utils = createLayoutUtils(ctx);
    expect(utils.getSidebarGap()).toBe(80);
  });

  test.skip('[persistent Sidebar (persistentBehavior=none)] gap return 0', () => {
    ctx.sidebar.variant = 'persistent';
    ctx.opened = false;
    ctx.sidebar.collapsible = false;
    utils = createLayoutUtils(ctx);
    expect(utils.getSidebarGap()).toBe(0);
  });
  test.skip('[closed persistent Sidebar (persistentBehavior=fit)] gap return 0', () => {
    ctx.sidebar.variant = 'persistent';
    ctx.opened = false;
    ctx.sidebar.persistentBehavior = 'fit';
    ctx.sidebar.collapsible = true;
    ctx.collapsed = false;
    utils = createLayoutUtils(ctx);
    expect(utils.getSidebarGap()).toBe(0);
  });
  test.skip('[opened persistent Sidebar (persistentBehavior=fit)] gap return width', () => {
    ctx.sidebar.variant = 'persistent';
    ctx.opened = true;
    ctx.sidebar.collapsible = true;
    ctx.collapsed = false;
    utils = createLayoutUtils(ctx);
    expect(utils.getSidebarGap({ persistentBehavior: 'fit' })).toBe(256);
  });
  test.skip('[persistent Sidebar (persistentBehavior=fit)] gap return collapsedWidth when collapsed', () => {
    ctx.sidebar.variant = 'persistent';
    ctx.opened = true;
    ctx.sidebar.collapsible = true;
    ctx.collapsed = true;
    utils = createLayoutUtils(ctx);
    expect(utils.getSidebarGap({ persistentBehavior: 'fit' })).toBe(80);
  });

  /**
   * getWidth test cases
   */
  test.skip("[temporary Sidebar] component's width will always 100%", () => {
    ctx.sidebar.collapsible = true;
    ctx.collapsed = true;
    utils = createLayoutUtils(ctx);
    expect(utils.getWidth({ persistentBehavior: 'fit' })).toBe('100%');
  });

  test.skip("[permanent PrimarySidebar] component's width will minus sidebar width", () => {
    ctx.sidebar.variant = 'permanent';
    utils = createLayoutUtils(ctx);
    expect(utils.getWidth()).toBe('calc(100% - 256px)');
  });

  test.skip("[permanent SecondarySidebar] component's width will minus sidebar width", () => {
    ctx.secondarySidebar.variant = 'permanent';
    utils = createLayoutUtils(ctx);
    expect(utils.getWidth()).toBe('calc(100% - 244px)');
  });

  test.skip("[permanent PrimarySidebar] component's width is equal to collapsed width when collapsed", () => {
    ctx.sidebar.variant = 'permanent';
    ctx.sidebar.collapsible = true;
    ctx.collapsed = true;
    utils = createLayoutUtils(ctx);
    expect(utils.getWidth()).toBe('calc(100% - 80px)');
  });

  test.skip("[closed persistent PrimarySidebar] component's width is 100%", () => {
    ctx.opened = false;

    ctx.sidebar.variant = 'persistent';
    ctx.sidebar.collapsible = true;
    ctx.collapsed = true;
    utils = createLayoutUtils(ctx);
    expect(utils.getWidth()).toBe('100%');
  });

  test.skip("[opened persistent PrimarySidebar] component's width depends on persistentScreenFit mode", () => {
    ctx.opened = true;

    ctx.sidebar.variant = 'persistent';
    ctx.sidebar.collapsible = false;
    ctx.collapsed = false;
    utils = createLayoutUtils(ctx);
    expect(utils.getWidth()).toBe('100%');
    expect(utils.getWidth({ persistentBehavior: 'fit' })).toBe(
      'calc(100% - 256px)'
    );

    ctx.sidebar.collapsible = true;
    ctx.collapsed = true;
    utils = createLayoutUtils(ctx);
    expect(utils.getWidth({ persistentBehavior: 'fit' })).toBe(
      'calc(100% - 80px)'
    );
  });

  test.skip('[Both temporary side bar] width should be 100%', () => {
    utils = createLayoutUtils(ctx);
    expect(utils.getWidth()).toBe('100%');
  });

  test.skip("[Both is permanent] width should minus both sidebar's width", () => {
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

  test.skip('[Default anchor sidebars] should calculate correct margin', () => {
    utils = createLayoutUtils(ctx);
    expect(utils.getContainerMarginStyle()).toMatchObject({
      marginLeft: utils.getSidebarGap(),
      marginRight: utils.getSecondarySidebarGap(),
    });
  });

  test.skip('getContentStyle & getFooterStyle return correct style', () => {
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
