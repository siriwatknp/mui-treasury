import {
  createLayoutUtils,
  isSomeExisted,
  selectConfigByScreen,
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
        width: 256,
        collapsible: false,
        collapsedWidth: 80,
      },
    };
    utils = createLayoutUtils(ctx);
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

  test('[temporary Sidebar] gap return 0', () => {
    expect(utils.getSidebarGap()).toBe(0);
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

  test('[persistent Sidebar (persistentPushing=false)] gap return 0', () => {
    ctx.sidebar.variant = 'persistent';
    ctx.opened = false;
    ctx.sidebar.persistentPushing = false;
    ctx.sidebar.collapsible = false;
    utils = createLayoutUtils(ctx);
    expect(utils.getSidebarGap()).toBe(0);
  });
  test('[closed persistent Sidebar (persistentPushing=true)] gap return 0', () => {
    ctx.sidebar.variant = 'persistent';
    ctx.opened = false;
    ctx.sidebar.persistentPushing = true;
    ctx.sidebar.collapsible = true;
    ctx.collapsed = false;
    utils = createLayoutUtils(ctx);
    expect(utils.getSidebarGap()).toBe(0);
  });
  test('[opened persistent Sidebar (persistentPushed=true)] gap return width', () => {
    ctx.sidebar.variant = 'persistent';
    ctx.opened = true;
    ctx.sidebar.collapsible = true;
    ctx.collapsed = false;
    utils = createLayoutUtils(ctx);
    expect(utils.getSidebarGap({ persistentPushed: true })).toBe(256);
  });
  test('[persistent Sidebar (persistentPushed=true)] gap return collapsedWidth when collapsed', () => {
    ctx.sidebar.variant = 'persistent';
    ctx.opened = true;
    ctx.sidebar.collapsible = true;
    ctx.collapsed = true;
    utils = createLayoutUtils(ctx);
    expect(utils.getSidebarGap({ persistentPushed: true })).toBe(80);
  });

  test("[temporary Sidebar] component's width will always 100%", () => {
    ctx.sidebar.collapsible = true;
    ctx.collapsed = true;
    utils = createLayoutUtils(ctx);
    expect(utils.getWidth({ screenFit: true })).toBe('100%');
  });

  test("[permanent Sidebar] component's width will always screenFit", () => {
    ctx.sidebar.variant = 'permanent';
    utils = createLayoutUtils(ctx);
    expect(utils.getWidth({ screenFit: true })).toBe('calc(100% - 256px)');
  });

  test("[permanent Sidebar] component's width is equal to collapsed width when collapsed", () => {
    ctx.sidebar.variant = 'permanent';
    ctx.sidebar.collapsible = true;
    ctx.collapsed = true;
    utils = createLayoutUtils(ctx);
    expect(utils.getWidth()).toBe('calc(100% - 80px)');
  });

  test("[closed persistent Sidebar] component's width is 100%", () => {
    ctx.opened = false;

    ctx.sidebar.variant = 'persistent';
    ctx.sidebar.collapsible = true;
    ctx.collapsed = true;
    utils = createLayoutUtils(ctx);
    expect(utils.getWidth({ screenFit: true })).toBe('100%');
  });

  test("[opened persistent Sidebar] component's width depends on screenFit mode", () => {
    ctx.opened = true;

    ctx.sidebar.variant = 'persistent';
    ctx.sidebar.collapsible = false;
    ctx.collapsed = false;
    utils = createLayoutUtils(ctx);
    expect(utils.getWidth()).toBe('100%');
    expect(utils.getWidth({ screenFit: true, persistentPushed: true })).toBe(
      'calc(100% - 256px)'
    );

    ctx.sidebar.collapsible = true;
    ctx.collapsed = true;
    utils = createLayoutUtils(ctx);
    expect(utils.getWidth({ screenFit: true, persistentPushed: true })).toBe(
      'calc(100% - 80px)'
    );
  });
});
