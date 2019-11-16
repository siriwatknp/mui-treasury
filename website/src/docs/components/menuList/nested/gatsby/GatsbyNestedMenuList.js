/* eslint-disable no-use-before-define */
import React from 'react';
import Box from '@material-ui/core/Box';
import RotateToggle from '@mui-treasury/components/toggle/rotate';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import NestedMenuList from '@mui-treasury/components/menuList/nested';
import { useGatsbyMenuListStyles } from '@mui-treasury/styles/menuList/nested/gatsby';
import { useGatsbyActionToggleItemStyles } from '@mui-treasury/styles/menuItem/actionToggle/gatsby';
import { useGatsbyInfoMenuItemStyles } from '@mui-treasury/styles/menuItem/info/gatsby';

const MaterialNestedMenuList = () => {
  const nestedStyles = useGatsbyMenuListStyles();
  const actionToggleStyles = useGatsbyActionToggleItemStyles();
  const infoStyles = useGatsbyInfoMenuItemStyles();
  return (
    <Box minWidth={283}>
      <NestedMenuList
        // you can set initial state with these props
        // initialSelectedKey={'awsS3'}
        // initialOpenKeys={['refGuides', 'deployHosting']}
        // ------------------------------------------------
        classes={nestedStyles}
        menus={getMenus()}
        getParentProps={({ data }) => ({
          children: data.label,
          classes: actionToggleStyles,
          listItemProps: {
            className: nestedStyles.menuItem,
          },
          renderSymbol: ({ expanded }) => (
            <RotateToggle
              component={KeyboardArrowRight}
              className={actionToggleStyles.symbol}
              expanded={expanded}
            />
          ),
        })}
        getChildProps={({ data }) => ({
          children: data.label,
          classes: infoStyles,
          infoClassName: infoStyles.info,
        })}
      />
    </Box>
  );
};

const getMenus = () => [
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

// hide-start
MaterialNestedMenuList.metadata = {
  title: 'Gatsby Nested',
  path: 'menuList/nested/gatsby',
  files: [
    { pkg: 'mui-components', path: 'menuList/nested/NestedMenuList.js' },
    {
      pkg: 'mui-styles',
      path: 'menuList/nested/gatsby/gatsbyNestedMenuList.styles.js',
    },
    {
      pkg: 'mui-styles',
      path: 'menuItem/actionToggle/gatsby/gatsbyActionToggleItem.styles.js',
    },
    {
      pkg: 'mui-styles',
      path: 'menuItem/info/gatsby/gatsbyInfoMenuItem.styles.js',
    },
  ],
  relates: [],
};
// hide-end

export default MaterialNestedMenuList;
