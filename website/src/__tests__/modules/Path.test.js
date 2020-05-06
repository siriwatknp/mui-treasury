import createLayout from '../../modules/path';

jest.mock('../../constants/menus', () => {
  return {
    __esModule: true,
    COMPONENT_MENUS: ['components'],
    LAYOUT_MENUS: ['layouts'],
    STYLE_MENUS: [],
  };
});

describe('LayoutController', () => {
  let location;
  let layout;
  beforeEach(() => {
    location = {
      pathname: '/',
    };
    layout = createLayout(location);
  });
  test('fallback path should not throw error', () => {
    location = {
      pathname: '/unknown-sdfnflsdfje',
    };
    layout = createLayout(location);
    expect(layout).toMatchObject({
      sidebarMenus: [],
      wrappedByLayout: true,
      parseConfig: expect.any(Function),
      getOpenKeys: expect.any(Function),
    });
    // fallback parseConfig must not change the signature
    expect(() => layout.parseConfig()).not.toThrow();
  });

  test('match "/" should not throw error', () => {
    expect(layout).toMatchObject({
      sidebarMenus: [],
      wrappedByLayout: true,
    });
    expect(() => layout.parseConfig()).not.toThrow();
  });

  test('match "/components*"', () => {
    location = {
      pathname: '/components/button',
    };
    layout = createLayout(location);
    expect(layout).toMatchObject({
      sidebarMenus: ['components'],
      wrappedByLayout: true,
    });
  });

  test('match "/layout*"', () => {
    location = {
      pathname: '/layout/presets/standard',
    };
    layout = createLayout(location);
    expect(layout).toMatchObject({
      sidebarMenus: ['layouts'],
      wrappedByLayout: true,
    });
  });

  test('match exact /layout/develop', () => {
    location = {
      pathname: '/layout/develop',
    };
    layout = createLayout(location);
    expect(layout).toMatchObject({
      sidebarMenus: ['layouts'],
      wrappedByLayout: false,
    });
  });
});

// getMenus
// parseConfig

// Home
// Layout
// Components
