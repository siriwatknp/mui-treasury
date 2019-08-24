import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { NestedMenuList, HorzMenuList } from '@mui-treasury/components';
import Toolbar from '@material-ui/core/Toolbar';
import { text, boolean, select } from '@storybook/addon-knobs';
import {
  useGatsbyNestedMenu,
  useJupiterNestedMenu,
} from '@mui-treasury/styles';

import createContainer, { StylesProvider } from './helpers/containerDecorator';
const menus2 = [
  {
    key: 'intro',
    label: 'Introduction',
  },
  {
    key: 'quick start',
    label: 'Quick Start',
  },
  {
    key: 'recipes',
    label: 'Recipes',
  },
  {
    key: 'pluginLib',
    label: 'Plugin Library',
  },
  {
    key: 'starterLib',
    label: 'Starter Library',
  },
  {
    key: 'resources',
    label: 'Awesome Gatsby Resources',
  },
  {
    key: 'refGuides',
    label: 'Reference Guides',
    subMenus: [
      {
        key: 'preparingEnv',
        label: 'Preparing Your Environment',
        subMenus: [
          {
            key: 'browserSupport',
            label: 'Browser Support',
          },
          {
            key: 'gatsbyWindow',
            label: 'Gatsby on Windows',
          },
          {
            key: 'gatsbyLinux',
            label: 'Gatsby on Linux',
          },
        ],
      },
      {
        key: 'deployHosting',
        label: 'Deploying & Hosting',
        subMenus: [
          {
            key: 'preparing',
            label: 'Preparing a Site for Deployment',
          },
          {
            key: 'awsAmplify',
            label: 'Deploying to AWS Amplify',
          },
          {
            key: 'awsS3',
            label: 'Deploying to S3 and CloudFront',
          },
        ],
      },
      {
        key: 'customConfig',
        label: 'Custom Configuration',
        subMenus: [
          {
            key: 'babeljs',
            label: 'Customizing Babel.js Config',
          },
          {
            key: 'babelPluginMacro',
            label: 'Using Babel Plugin Macros',
          },
          {
            key: 'customWebpack',
            label: 'Adding a Custom Webpack Config',
          },
        ],
      },
    ],
  },
  {
    key: 'api',
    label: 'Gatsby API',
    subMenus: [
      {
        key: 'themes',
        label: 'Gatsby Themes',
      },
      {
        key: 'link',
        label: 'Gatsby Link',
      },
      {
        key: 'image',
        label: 'Gatsby Image',
      },
      {
        key: 'config',
        label: 'Gatsby Config',
      },
    ],
  },
  {
    key: 'migration',
    label: 'Releases & Migration',
    subMenus: [
      {
        key: 'v2',
        label: 'v2 Release Notes',
      },
      {
        key: 'v1',
        label: 'v1 Release Notes',
      },
      {
        key: 'v1Tov2',
        label: 'Migration from v1 to v2',
      },
      {
        key: 'v0Tov1',
        label: 'Migration from v0 to v1',
      },
    ],
  },
];

const createCommonProps = overrides => ({
  menus: menus2,
  selectedKey: 'intro',
  getConfig: () => ({ toggleSeparated: true }),
  onClick: action('menu-clicked'),
  ...overrides,
});

storiesOf('Components|Vertical Menu/Nested Menu', module)
  .addDecorator(createContainer({ maxWidth: 'xs' }))
  .add('default', () => <NestedMenuList {...createCommonProps()} />)
  .add('Jupiter', () => (
    <StylesProvider useStyles={useJupiterNestedMenu}>
      {styles => (
        <NestedMenuList
          classes={styles}
          {...createCommonProps()}
          getConfig={() => ({ toggleSeparated: false })}
        />
      )}
    </StylesProvider>
  ))
  .add('Gatsby', () => (
    <StylesProvider useStyles={useGatsbyNestedMenu}>
      {styles => <NestedMenuList classes={styles} {...createCommonProps()} />}
    </StylesProvider>
  ));

storiesOf('Components|Horizontal Menu/Nav Menu', module)
  .addDecorator(createContainer({ maxWidth: 'md' }))
  .add('default', () => (
    <Toolbar>
      <HorzMenuList
        menus={menus2.slice(0, 5)}
        selectedKey={select(
          'selectedKey',
          menus2.slice(0, 5).map(({ key }) => key)
        )}
        getItemProps={() => ({ component: 'a' })}
      />
    </Toolbar>
  ));
