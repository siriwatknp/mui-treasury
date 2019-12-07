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
  test('layout instance is an object', () => {
    expect(layout).toMatchObject({
      sidebarMenus: expect.any(Array),
      navMenus: expect.any(Array),
    });
  });

  test('match home handler', () => {
    expect(layout).toMatchObject({
      sidebarMenus: [],
      navMenus: ['nav'],
    });
  });

  test('match component handler', () => {
    location = {
      pathname: '/components/button',
    };
    layout = createLayout(location);
    expect(layout).toMatchObject({
      sidebarMenus: ['components'],
      navMenus: ['nav'],
    });
  });

  test('match layout handler', () => {
    location = {
      pathname: '/layout/presets/standard',
    };
    layout = createLayout(location);
    expect(layout).toMatchObject({
      sidebarMenus: ['layouts'],
      navMenus: ['nav'],
    });
  });

});

// getMenus
// parseConfig

// Home
// Layout
// Components
