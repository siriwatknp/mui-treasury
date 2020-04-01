import { customComponents as buttonStyles } from '../../docs/styles/button';
import { customComponents as cardHeaderStyles } from '../../docs/styles/cardHeader';
import { customComponents as cardMediaStyles } from '../../docs/styles/cardMedia';
import { customComponents as gridStyles } from '../../docs/styles/grid';
import { customComponents as iconStyles } from '../../docs/styles/icon';
import { customComponents as inputBaseStyles } from '../../docs/styles/inputBase';
import { customComponents as listItemStyles } from '../../docs/styles/listItem';
import { customComponents as tabsStyles } from '../../docs/styles/tabs';
import { customComponents as textFieldStyles } from '../../docs/styles/textField';
import { customComponents as collapsibleMenuStyles } from '../../docs/styles/collapsibleMenu';
import { customComponents as nestedMenuStyles } from '../../docs/styles/nestedMenu';
import { customComponents as textInfoContentStyles } from '../../docs/styles/textInfoContent';
import { customComponents as rowToggleStyles } from '../../docs/styles/rowToggle';
import { customComponents as switchToggleStyles } from '../../docs/styles/switchToggle';
import { customComponents as flexStyles } from '../../docs/styles/flex';
import { customComponents as shadowStyles } from '../../docs/styles/shadow';
import { customComponents as switchStyles } from '../../docs/styles/switch';
import { customComponents as checkboxStyles } from '../../docs/styles/checkbox';

export default [
  {
    key: 'material-ui',
    label: 'Material-UI',
    subMenus: [
      {
        key: 'button',
        label: 'Button',
        total: buttonStyles.length,
        to: '/styles/button',
      },
      {
        key: 'card-header',
        label: 'Card Header',
        total: cardHeaderStyles.length,
        to: '/styles/card-header',
      },
      {
        key: 'card-media',
        label: 'Card Media',
        total: cardMediaStyles.length,
        to: '/styles/card-media',
      },
      {
        key: 'checkbox',
        label: 'Checkbox',
        total: checkboxStyles.length,
        to: '/styles/checkbox',
      },
      {
        key: 'grid',
        label: 'Grid',
        total: gridStyles.length,
        to: '/styles/grid',
      },
      {
        key: 'icon',
        label: 'Icon',
        total: iconStyles.length,
        to: '/styles/icon',
      },
      {
        key: 'input-base',
        label: 'Input Base',
        total: inputBaseStyles.length,
        to: '/styles/input-base',
      },
      {
        key: 'list-item',
        label: 'ListItem',
        total: listItemStyles.length,
        to: '/styles/list-item',
      },
      {
        key: 'tabs',
        label: 'Tabs',
        total: tabsStyles.length,
        to: '/styles/tabs',
      },
      {
        key: 'text-field',
        label: 'TextField',
        total: textFieldStyles.length,
        to: '/styles/text-field',
      },
      {
        key: 'switch',
        label: 'Switch',
        total: switchStyles.length,
        to: '/styles/switch',
      },
    ],
  },
  {
    key: 'custom-component',
    label: 'Custom Component',
    subMenus: [
      {
        key: 'collapsible-menu',
        label: 'Collapsible Menu',
        total: collapsibleMenuStyles.length,
        to: '/styles/collapsible-menu',
      },
      {
        key: 'nested-menu',
        label: 'Nested Menu',
        total: nestedMenuStyles.length,
        to: '/styles/nested-menu',
      },
      {
        key: 'text-info-content',
        label: 'TextInfo Content',
        total: textInfoContentStyles.length,
        to: '/styles/text-info-content',
      },
      {
        key: 'row-toggle',
        label: 'Row Toggle',
        total: rowToggleStyles.length,
        to: '/styles/row-toggle',
      },
      {
        key: 'switch-toggle',
        label: 'Switch Toggle',
        total: switchToggleStyles.length,
        to: '/styles/switch-toggle',
      },
    ],
  },
  {
    key: 'utility',
    label: 'Utility',
    subMenus: [
      {
        key: 'flex',
        label: 'Flex',
        total: flexStyles.length,
        to: '/styles/flex',
      },
      {
        key: 'shadow',
        label: 'Shadow',
        total: shadowStyles.length,
        to: '/styles/shadow',
      },
    ],
  },
];
