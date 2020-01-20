import { mapNestedPath } from '@mui-treasury/utils';
import MENUS, { PKG } from '../../constants/menus';

const getHomeHandler = () => {
  return {
    pattern: /^\/$/,
    hamburgerHidden: true,
    parseConfig: c => ({
      ...c,
      sidebar: {
        ...c.sidebar,
        hidden: true,
      },
    }),
  };
};

const getComponentHandler = () => {
  return {
    pattern: /\/components.*/g,
    sidebarMenus: MENUS[PKG.components],
  };
};

const getLayoutDevelop = () => {
  return {
    pattern: /\/layout\/develop/g,
    wrappedByLayout: false,
  };
};

const getLayoutHandler = () => {
  return {
    pattern: /\/layout.*/g,
    sidebarMenus: MENUS[PKG.layouts],
    parseConfig: c => ({
      ...c,
      sidebar: {
        ...c.sidebar,
        width: 208,
      },
    }),
    getOpenKeys: () => [
      'tutorials',
      'presets',
      'basic-examples',
      'advanced-examples',
      'clones',
    ],
  };
};

const getFallbackHandler = () => {
  return {
    pattern: /.*/g,
    sidebarMenus: [],
    wrappedByLayout: true,
    hamburgerHidden: false,
    parseConfig: c => c,
    getOpenKeys: ({ menus, lastPath }) => {
      const keyMap = mapNestedPath(menus);
      return menus
        .filter(({ key }) => keyMap[key].includes(lastPath))
        .map(({ key }) => key);
    },
  };
};

const getFirstValue = (items, getValue) => {
  let result;
  items.forEach(item => {
    const value = getValue(item);
    if (result === undefined && value !== undefined) {
      result = value;
    }
  });
  return result;
};

const getPathValue = (pathname, key) =>
  getFirstValue(
    [
      getHomeHandler(),
      getComponentHandler(),
      getLayoutDevelop(),
      getLayoutHandler(),
      getFallbackHandler(),
    ],
    item => {
      const { pattern } = item;
      if (pattern.test(pathname) && item[key] !== undefined) {
        return item[key];
      }
      return undefined;
    }
  );

export default (location = {}) => {
  const { pathname } = location;
  return {
    sidebarMenus: getPathValue(pathname, 'sidebarMenus'),
    wrappedByLayout: getPathValue(pathname, 'wrappedByLayout'),
    parseConfig: getPathValue(pathname, 'parseConfig'),
    getOpenKeys: getPathValue(pathname, 'getOpenKeys'),
    hamburgerHidden: getPathValue(pathname, 'hamburgerHidden'),
  };
};
