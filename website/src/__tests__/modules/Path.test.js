import createLayout from '../../modules/path';

jest.mock('../../constants/menus', () => {
  return {
    __esModule: true,
    default: {
      nav: ['nav'],
      components: ['components'],
      layouts: ['layouts'],
    },
    PKG: {
      nav: 'nav',
      components: 'components',
      layouts: 'layouts',
    },
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
  test('fallback path', () => {
    expect(layout).toMatchObject({
      sidebarMenus: [],
      wrappedByLayout: true,
    });
  });

  test('match "/"', () => {
    expect(layout).toMatchObject({
      sidebarMenus: [],
      wrappedByLayout: true,
    });
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
