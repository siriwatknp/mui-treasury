import React from 'react';
import Box from '@material-ui/core/Box';
import NestedMenuList from '@mui-treasury/components/menuList/nested';
import { useMaterialNestedMenuStyles } from '@mui-treasury/styles/menuList/nested/material';
import { useMaterialActionToggleItemStyles } from '@mui-treasury/styles/menuItem/actionToggle/material';
import { useMaterialInfoMenuItemStyles } from '@mui-treasury/styles/menuItem/info/material';
import cx from 'clsx';

const menus = [
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

const MaterialNestedMenuList = () => {
  const materialStyles = useMaterialNestedMenuStyles();
  const actionToggleStyles = useMaterialActionToggleItemStyles();
  const infoStyles = useMaterialInfoMenuItemStyles();
  return (
    <Box minWidth={256}>
      <NestedMenuList
        classes={materialStyles}
        menus={menus}
        getParentProps={({ data }) => ({
          children: data.label,
          classes: actionToggleStyles,
          listItemProps: {
            className: materialStyles.menuItem,
          },
        })}
        getChildProps={({ data }) => ({
          children: data.label,
          className: cx(infoStyles.root, infoStyles.button),
          infoClassName: infoStyles.info,
        })}
      />
    </Box>
  );
};

// hide-start
MaterialNestedMenuList.metadata = {
  title: 'Material Nested',
  path: 'menuList/nested/material',
  files: [
    { pkg: 'mui-components', path: 'menuList/nested/NestedMenuList.js' },
    {
      pkg: 'mui-styles',
      path: 'menuList/nested/material/materialNestedMenu.styles.js',
    },
    {
      pkg: 'mui-styles',
      path: 'menuItem/actionToggle/material/toggleMenuItem.styles.js',
    },
    {
      pkg: 'mui-styles',
      path: 'menuItem/info/material/infoMenuItem.styles.js',
    },
  ],
  relates: [],
};
// hide-end

export default MaterialNestedMenuList;
