import {
  createLayoutUtils,
  isSomeExisted,
  selectConfigByScreen,
  getInitialScreen,
  upperFirst,
} from '../utils';
import createAllSidebars from '../models/allSidebars';
import createSidebarEffect from '../models/sidebarEffect';

describe('utils', function() {
  let utils;
  let ctx;
  let target;
  let sidebarEffect;
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
    target = createAllSidebars(ctx).getTargetProps();
    sidebarEffect = createSidebarEffect(ctx);
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
  test('[temporary Sidebar] gap return 0', () => {
    expect(target.primaryGap).toBe(0);
    expect(target.secondaryGap).toBe(0);
  });

  test('[permanent Sidebar] gap return width', () => {
    ctx.sidebar.variant = 'permanent';
    ctx.secondarySidebar.variant = 'permanent';
    target = createAllSidebars(ctx).getTargetProps();
    expect(target.primaryGap).toBe(256);
    expect(target.secondaryGap).toBe(244);
  });

  test('[collapsible permanent Sidebar] gap return width (not collapsed yet)', () => {
    ctx.sidebar.variant = 'permanent';
    ctx.sidebar.collapsible = true;
    ctx.collapsed = false;
    target = createAllSidebars(ctx).getTargetProps();
    expect(target.primaryGap).toBe(256);
  });
  test('[collapsed persistent Sidebar] gap return collapsed width', () => {
    ctx.sidebar.variant = 'permanent';
    ctx.sidebar.collapsible = true;
    ctx.collapsed = true;
    target = createAllSidebars(ctx).getTargetProps();
    expect(target.primaryGap).toBe(80);
  });

  test('[persistent Sidebar (persistentBehavior=none)] gap return 0', () => {
    ctx.sidebar.variant = 'persistent';
    ctx.opened = false;
    ctx.sidebar.collapsible = false;
    target = createAllSidebars(ctx).getTargetProps();
    expect(target.primaryGap).toBe(0);
  });
  test('[closed persistent Sidebar (persistentBehavior=fit)] gap return 0', () => {
    ctx.sidebar.variant = 'persistent';
    ctx.opened = false;
    ctx.sidebar.persistentBehavior = 'fit';
    ctx.sidebar.collapsible = true;
    ctx.collapsed = false;
    target = createAllSidebars(ctx).getTargetProps();
    expect(target.primaryGap).toBe(0);
  });
  test('[opened persistent Sidebar (persistentBehavior=fit)] gap return width', () => {
    ctx.sidebar.variant = 'persistent';
    ctx.opened = true;
    ctx.sidebar.collapsible = true;
    ctx.collapsed = false;
    target = createAllSidebars(ctx).getTargetProps({
      persistentBehavior: 'fit',
    });
    expect(target.primaryGap).toBe(256);
  });
  test('[persistent Sidebar (persistentBehavior=fit)] gap return collapsedWidth when collapsed', () => {
    ctx.sidebar.variant = 'persistent';
    ctx.opened = true;
    ctx.sidebar.collapsible = true;
    ctx.collapsed = true;
    target = createAllSidebars(ctx).getTargetProps({
      persistentBehavior: 'fit',
    });
    expect(target.primaryGap).toBe(80);
  });

  /**
   * getWidth test cases
   */
  test("[temporary Sidebar] component's width will always 100%", () => {
    ctx.sidebar.collapsible = true;
    ctx.collapsed = true;
    target = createAllSidebars(ctx).getTargetProps({
      persistentBehavior: 'fit',
    });
    expect(target.primaryWidth).toBe('100%');
  });

  test("[permanent PrimarySidebar] component's width will minus sidebar width", () => {
    ctx.sidebar.variant = 'permanent';
    target = createAllSidebars(ctx).getTargetProps();
    expect(target.primaryWidth).toBe('calc(100% - 256px)');
  });

  test("[permanent SecondarySidebar] component's width will minus sidebar width", () => {
    ctx.secondarySidebar.variant = 'permanent';
    target = createAllSidebars(ctx).getTargetProps();
    expect(target.secondaryWidth).toBe('calc(100% - 244px)');
  });

  test("[permanent PrimarySidebar] component's width is equal to collapsed width when collapsed", () => {
    ctx.sidebar.variant = 'permanent';
    ctx.sidebar.collapsible = true;
    ctx.collapsed = true;
    target = createAllSidebars(ctx).getTargetProps();
    expect(target.primaryWidth).toBe('calc(100% - 80px)');
  });

  test("[closed persistent PrimarySidebar] component's width is 100%", () => {
    ctx.opened = false;

    ctx.sidebar.variant = 'persistent';
    ctx.sidebar.collapsible = true;
    ctx.collapsed = true;
    target = createAllSidebars(ctx).getTargetProps();
    expect(target.primaryWidth).toBe('100%');
  });

  test("[opened persistent PrimarySidebar] component's width depends on persistentBehavior mode", () => {
    ctx.opened = true;

    ctx.sidebar.variant = 'persistent';
    ctx.sidebar.collapsible = false;
    ctx.collapsed = false;

    expect(target.primaryWidth).toBe('100%');
    target = createAllSidebars(ctx).getTargetProps({
      persistentBehavior: 'fit',
    });
    expect(target.primaryWidth).toBe('calc(100% - 256px)');

    ctx.sidebar.collapsible = true;
    ctx.collapsed = true;
    target = createAllSidebars(ctx).getTargetProps({
      persistentBehavior: 'fit',
    });
    expect(target.primaryWidth).toBe('calc(100% - 80px)');
  });

  test('[Both temporary side bar] width should be 100%', () => {
    target = createAllSidebars(ctx).getTargetProps();
    expect(target.primaryWidth).toBe('100%');
    expect(target.secondaryWidth).toBe('100%');
  });

  test("[Both is permanent] width should minus both sidebar's width", () => {
    ctx.sidebar.variant = 'permanent';
    ctx.sidebar.collapsible = true;
    ctx.secondarySidebar.variant = 'permanent';
    ctx.secondarySidebar.collapsible = true;
    sidebarEffect = createSidebarEffect(ctx);
    expect(sidebarEffect.getAffectedWidth()).toBe(
      `calc(100% - ${256 + 244}px)`
    );

    ctx.collapsed = true;
    sidebarEffect = createSidebarEffect(ctx);
    expect(sidebarEffect.getAffectedWidth()).toBe(`calc(100% - ${80 + 244}px)`);

    ctx.secondaryCollapsed = true;
    sidebarEffect = createSidebarEffect(ctx);
    expect(sidebarEffect.getAffectedWidth()).toBe(`calc(100% - ${80 + 80}px)`);

    ctx.collapsed = false;
    sidebarEffect = createSidebarEffect(ctx);
    expect(sidebarEffect.getAffectedWidth()).toBe(`calc(100% - ${256 + 80}px)`);
  });

  test('[Default anchor sidebars] should calculate correct margin', () => {
    expect(sidebarEffect.getStyle()).toMatchObject({
      marginLeft: 0,
      marginRight: 0,
      width: '100%',
    });
  });
});
