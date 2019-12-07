import MENUS, { PKG } from '../../constants/menus';

export const getHomeHandler = () => {
  return {
    pattern: /\//,
  };
};

export const getComponentHandler = () => {
  return {
    pattern: /\/components.*/g,
    sidebarMenus: MENUS[PKG.components],
  };
};

export const getLayoutHandler = () => {
  return {
    pattern: /\/layout.*/g,
    sidebarMenus: MENUS[PKG.layouts],
  };
};

export const getFallbackHandler = () => {
  return {
    pattern: /.*/g,
    sidebarMenus: [],
    navMenus: MENUS[PKG.nav],
  };
};

const getFirstValue = (items, getValue) => {
  let result;
  items.forEach(item => {
    const value = getValue(item);
    if (!result && value !== undefined) {
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
    navMenus: getPathValue(pathname, 'navMenus'),
  };
};
