import { customComponents as arrows } from 'docs/components/arrow';
import { customComponents as buttons } from 'docs/styles/button';
import { customComponents as cards } from 'docs/components/card';
import { customComponents as cardContents } from 'docs/components/cardContent';
import { customComponents as cardFooters } from 'docs/components/cardFooter';
import { customComponents as cardHeaders } from 'docs/components/cardHeader';
import { customComponents as cardMedia } from 'docs/styles/cardMedia';
import { customComponents as carousels } from 'docs/components/carousel';
import { customComponents as chatMsgs } from 'docs/components/chatMsg';
import { customComponents as charts } from 'docs/components/chart';
import { customComponents as flexs } from 'docs/styles/flex';
import { customComponents as grids } from 'docs/styles/grid';
import { customComponents as groups } from 'docs/components/group';
import { customComponents as icons } from 'docs/styles/icon';
import { customComponents as indicators } from 'docs/components/indicator';
import { customComponents as inputBases } from 'docs/styles/inputBase';
import { customComponents as menuItems } from 'docs/components/menuItem';
import { customComponents as menuList } from 'docs/components/menuList';
import { customComponents as rips } from 'docs/components/rip';
import { customComponents as shadows } from 'docs/styles/shadow';
import { customComponents as slides } from 'docs/components/slide';
import { customComponents as tabs } from 'docs/components/tabs';
import { customComponents as tags } from 'docs/components/tag';
import { customComponents as textFields } from 'docs/components/textField';
import { customComponents as menu } from 'docs/components/menu';

export const PKG = {
  nav: 'nav',
  components: 'components',
  layouts: 'layouts',
};

export default {
  [PKG.layouts]: [
    { key: 'layout', label: 'Introduction', to: '/layout' },
    {
      key: 'tutorials',
      label: 'Tutorials',
      subMenus: [
        {
          key: 'dashboard-layout',
          label: 'Dashboard Layout',
          to: '/layout/tutorials/dashboard-layout/',
        },
        {
          key: 'blog-layout',
          label: 'Blog Layout',
          to: '/layout/tutorials/blog-layout/',
        },
      ],
    },
    { key: 'builder', label: 'Builder', to: '/layout/builder' },
    {
      key: 'presets',
      label: 'Presets',
      subMenus: [
        {
          key: 'default',
          label: 'Default',
          to: '/layout/presets/default',
        },
        {
          key: 'standard',
          label: 'Standard',
          to: '/layout/presets/standard',
        },
        {
          key: 'content-based',
          label: 'Content Based',
          to: '/layout/presets/content-based',
        },
        {
          key: 'cozy',
          label: 'Cozy',
          to: '/layout/presets/cozy',
        },
        {
          key: 'fixed',
          label: 'Fixed',
          to: '/layout/presets/fixed',
        },
        {
          key: 'mui-treasury',
          label: 'MUI Treasury',
          to: '/layout/presets/mui-treasury',
        },
      ],
    },
    {
      key: 'basic-examples',
      label: 'Basic Examples',
      subMenus: [
        {
          key: 'custom-theme',
          label: 'Custom theme',
          to: '/layout/basic-examples/custom-theme?bgColor=d4b397',
        },
        {
          key: 'custom-styles',
          label: 'Custom styles',
          to:
            '/layout/basic-examples/custom-styles?bgColor=213E9B&accent=rgb(17, 254, 220)&dark=true',
        },
        {
          key: 'control-sidebar',
          label: 'Control Sidebar',
          to:
            '/layout/basic-examples/control-sidebar?bgColor=e9e9e9&primary=36338E&accent=ff9600',
        },
        {
          key: 'secondary-sidebar',
          label: '2nd Sidebar',
          to: '/layout/basic-examples/secondary-sidebar',
        },
        {
          key: 'inset-sidebar',
          label: 'Inset Sidebar',
          to: '/layout/basic-examples/inset-sidebar',
        },
      ],
    },
    {
      key: 'clones',
      label: 'Clones',
      subMenus: [
        {
          key: 'reactjs',
          label: 'React Doc',
          to: '/layout/clones/reactjs?bgColor=b6c0d4',
        },
        {
          key: 'messenger',
          label: 'Messenger',
          to: '/layout/clones/messenger?bgColor=rgb(0,153,255)&dark=true',
        },
        {
          key: 'shopping-cart',
          label: 'Shopping Cart',
          to: '/layout/clones/shopping-cart?bgColor=EAEEF1',
        },
      ],
    },
  ],
  [PKG.nav]: [
    // { key: 'how-to', label: 'How to' },
    { key: 'components', label: 'Components', to: '/components/button' },
    { key: 'styles', label: 'Styles', disabled: true },
    { key: 'layout', label: 'Layout', to: '/layout' },
    { key: 'form', label: 'Form', disabled: true },
    {
      key: 'theme',
      label: 'Theme',
      external: true,
      to: 'https://deprecate.mui-treasury.com/brands/peapods',
      target: '_blank',
    },
  ],
  [PKG.components]: [
    {
      key: 'basic',
      label: 'Basic',
      subMenus: [
        {
          key: 'arrow',
          label: 'Arrow',
          total: arrows.length,
          to: '/components/arrow',
        },
        {
          key: 'button',
          label: 'Button',
          total: buttons.length,
          to: '/components/button',
        },
        {
          key: 'card-content',
          label: 'Card Content',
          total: cardContents.length,
          to: '/components/card-content',
        },
        {
          key: 'card-footer',
          label: 'Card Footer',
          total: cardFooters.length,
          to: '/components/card-footer',
        },
        {
          key: 'card-header',
          label: 'Card Header',
          total: cardHeaders.length,
          to: '/components/card-header',
        },
        {
          key: 'card-media',
          label: 'Card Media',
          total: cardMedia.length,
          to: '/components/card-media',
        },
        {
          key: 'chart',
          label: 'Chart',
          total: charts.length,
          to: '/components/chart',
          isToggleOutside: true,
          subMenus: [
            {
              key: 'tree',
              label: 'Tree',
              to: '/components/chart/tree',
            },
            {
              key: 'org',
              label: 'Organization',
              to: '/components/chart/org',
            },
            {
              key: 'family',
              label: 'Family',
              to: '/components/chart/family',
            },
          ],
        },
        {
          key: 'chat-msg',
          label: 'Chat Message',
          total: chatMsgs.length,
          to: '/components/chat-msg',
        },
        {
          key: 'flex',
          label: 'Flex',
          total: flexs.length,
          to: '/components/flex',
        },
        {
          key: 'grid',
          label: 'Grid',
          total: grids.length,
          to: '/components/grid',
        },
        {
          key: 'group',
          label: 'Group',
          total: groups.length,
          to: '/components/group',
        },
        {
          key: 'icon',
          label: 'Icon',
          total: icons.length,
          to: '/components/icon',
        },
        {
          key: 'input',
          label: 'Input',
          total: inputBases.length,
          to: '/components/input',
        },
        {
          key: 'indicator',
          label: 'Indicator',
          total: indicators.length,
          to: '/components/indicator',
        },
        {
          key: 'menu-item',
          label: 'Menu Item',
          total: menuItems.length,
          to: '/components/menu-item',
        },
        { key: 'rip', label: 'Rip', total: rips.length, to: '/components/rip' },
        {
          key: 'slide',
          label: 'Slide',
          total: slides.length,
          to: '/components/slide',
        },
        {
          key: 'shadow',
          label: 'Shadow',
          total: shadows.length,
          to: '/components/shadow',
        },
        {
          key: 'tabs',
          label: 'Tabs',
          total: tabs.length,
          to: '/components/tabs',
        },
        { key: 'tag', label: 'Tag', total: tags.length, to: '/components/tag' },
      ],
    },
    {
      key: 'complex',
      label: 'Complex',
      subMenus: [
        {
          key: 'card',
          label: 'Card',
          total: cards.length,
          to: '/components/card',
        },
        {
          key: 'carousel',
          label: 'Carousel',
          total: carousels.length,
          to: '/components/carousel',
        },
        {
          key: 'menu-list',
          label: 'Menu List',
          total: menuList.length,
          to: '/components/menu-list',
        },
        {
          key: 'menu',
          label: 'Menu',
          total: menu.length,
          to: '/components/menu',
        },
        {
          key: 'text-field',
          label: 'TextField',
          total: textFields.length,
          isToggleOutside: true,
          to: '/components/text-field',
          subMenus: [
            {
              key: 'birthday',
              label: 'Birthday',
              to: '/components/text-field/birthday',
            },
          ],
        },
      ],
    },
  ],
};
