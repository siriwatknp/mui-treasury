import { customComponents as groups } from '../../docs/components/group';
import { customComponents as tabs } from '../../docs/components/tabs';
import { customComponents as tags } from '../../docs/components/tag';
import { customComponents as textFields } from '../../docs/components/textField';
import { customComponents as toggles } from '../../docs/components/toggle';
import { customComponents as contents } from '../../docs/components/content';
import { customComponents as cardFooters } from '../../docs/components/cardFooter';
import { customComponents as cardHeaders } from '../../docs/components/cardHeader';
import { customComponents as chatMsgs } from '../../docs/components/chatMsg';
import { customComponents as indicators } from '../../docs/components/indicator';
import { customComponents as rips } from '../../docs/components/rip';
import { customComponents as slides } from '../../docs/components/slide';
import { customComponents as cards } from '../../docs/components/card';
import { customComponents as carousels } from '../../docs/components/carousel';
import { customComponents as charts } from '../../docs/components/chart';
import { customComponents as menus } from '../../docs/components/menu';
import { customComponents as buttons } from '../../docs/components/button';

export default [
  {
    key: 'mui-extended', // use material-ui as a main component and add more features.
    label: 'Material-UI Extended',
    subMenus: [
      {
        key: 'button',
        label: 'Button',
        total: buttons.length,
        to: '/components/button'
      },
      {
        key: 'group',
        label: 'Group',
        total: groups.length,
        to: '/components/group',
      },
      {
        key: 'tabs',
        label: 'Tabs',
        total: tabs.length,
        to: '/components/tabs',
      },
      { key: 'tag', label: 'Tag', total: tags.length, to: '/components/tag' },
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
      {
        key: 'toggle',
        label: 'Toggle',
        total: toggles.length,
        to: '/components/toggle',
      },
    ],
  },
  {
    key: 'community-custom', // use some material-ui as a base and material-ui styling solution to create brand new component.
    label: 'Community Custom',
    subMenus: [
      {
        key: 'content',
        label: 'Content',
        total: contents.length,
        to: '/components/content',
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
        key: 'chat-msg',
        label: 'Chat Message',
        total: chatMsgs.length,
        to: '/components/chat-msg',
      },
      {
        key: 'indicator',
        label: 'Indicator',
        total: indicators.length,
        to: '/components/indicator',
      },
      { key: 'rip', label: 'Rip', total: rips.length, to: '/components/rip' },
      {
        key: 'slide',
        label: 'Slide',
        total: slides.length,
        to: '/components/slide',
      },
    ],
  },
  {
    key: 'complex-composition', // compose both material-ui component & custom component together to form real world complex component.
    label: 'Complex Composition',
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
        key: 'menu',
        label: 'Menu',
        total: menus.length,
        to: '/components/menu',
      },
    ],
  },
];