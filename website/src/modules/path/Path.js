import { presets } from '@mui-treasury/layout';
import { mapNestedPath } from '@mui-treasury/utils';
import {
  COMPONENT_MENUS,
  LAYOUT_MENUS,
  STYLE_MENUS,
} from '../../constants/menus';

const { edgeSidebar: { primarySidebar } } = presets.muiTreasury.clone();

const getHomeHandler = () => {
  return {
    pattern: /^\/$/,
  };
};

const getComponentHandler = () => {
  return {
    pattern: /\/components.*/g,
    sidebarMenus: COMPONENT_MENUS,
    getOpenKeys: () => [
      'mui-extended',
      'community-custom',
      'complex-composition',
    ],
  };
};

const getStylesHandler = () => {
  return {
    pattern: /\/styles.*/g,
    sidebarMenus: STYLE_MENUS,
    getOpenKeys: () => ['material-ui', 'custom-component', 'utility'],
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
    sidebarMenus: LAYOUT_MENUS,
    parseConfig: c => {
      c.lg.width = 208;
    },
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
    parseConfig: c => {
      c.lg.width = primarySidebar.lg.width;

    },
    getOpenKeys: ({ menus, lastPath }) => {
      const keyMap = mapNestedPath(menus);
      return Object.keys(keyMap).filter(key => keyMap[key].includes(lastPath));
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
      getStylesHandler(),
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
  };
};
