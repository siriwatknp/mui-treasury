import LAYOUT_MENUS from './layoutMenus';
import COMPONENT_MENUS from './componentMenus';
import STYLE_MENUS from './styleMenus';

export { LAYOUT_MENUS, COMPONENT_MENUS, STYLE_MENUS };

export const PKG = {
  nav: 'nav',
  components: 'components',
  layouts: 'layouts',
  styles: 'styles',
};

export const NAV_MENUS = [
  { key: 'components', label: 'Components', to: '/components/' },
  { key: 'styles', label: 'Styles', to: '/styles/' },
  { key: 'layout', label: 'Layout', to: '/layout/' },
  {
    key: 'theme',
    label: 'Theme',
    external: true,
    to: 'https://deprecate.mui-treasury.com/brands/peapods',
    target: '_blank',
  },
];

export default {
  [PKG.layouts]: LAYOUT_MENUS,
  [PKG.nav]: NAV_MENUS,
  [PKG.components]: COMPONENT_MENUS,
  [PKG.styles]: STYLE_MENUS,
};
