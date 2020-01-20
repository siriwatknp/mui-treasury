/* eslint-disable no-use-before-define */
import React from 'react';
import cx from 'clsx';
import Box from '@material-ui/core/Box';
import NestedMenuList from '@mui-treasury/components/menuList/nested';
import ToggleMenuItem from '@mui-treasury/components/menuItem/toggle';
import { useJupiterNestedMenuListStyles } from '@mui-treasury/styles/menuList/nested/jupiter';
import { useMaterialInfoMenuItemStyles } from '@mui-treasury/styles/menuItem/info/material';
import { useMaterialToggleMenuItemStyles } from '@mui-treasury/styles/menuItem/toggle/material';

const JupiterNestedMenuList = () => {
  const nestedStyles = useJupiterNestedMenuListStyles();
  const infoStyles = useMaterialInfoMenuItemStyles();
  const toggleStyles = useMaterialToggleMenuItemStyles();
  return (
    <Box minWidth={256}>
      <NestedMenuList
        // you can set initial state with these props
        // selectedKey={'awsS3'}
        // initialOpenKeys={['refGuides', 'deployHosting']}
        // ------------------------------------------------
        classes={nestedStyles}
        menus={getMenus()}
        getParentProps={({ data, expanded }) => ({
          children: data.label,
          className: cx(
            toggleStyles.root,
            expanded && toggleStyles.expanded,
            nestedStyles.menuItem
          ),
          symbolClassName: cx(
            toggleStyles.toggleBtn,
            nestedStyles.menuItemToggle
          ),
        })}
        renderParent={({ children, onToggle, className, symbolClassName }) => (
          <ToggleMenuItem
            classes={{
              focusVisible: nestedStyles.menuItemFocus,
            }}
            className={className}
            symbolClassName={symbolClassName}
            onToggle={onToggle}
          >
            {children}
          </ToggleMenuItem>
        )}
        getChildProps={({ data, selected }) => ({
          children: data.label,
          classes: {
            selected: nestedStyles.menuItemSelected,
            focusVisible: nestedStyles.menuItemFocus,
          },
          className: cx(infoStyles.root, infoStyles.button),
          infoClassName: cx(
            infoStyles.info,
            selected && nestedStyles.infoSelected
          ),
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
JupiterNestedMenuList.metadata = {
  title: 'Jupiter Nested',
  path: 'menuList/nested/jupiter',
  creators: [require('constants/creators').siriwatknp],
  files: [
    { pkg: 'mui-components', path: 'menuList/nested/NestedMenuList.js' },
    {
      pkg: 'mui-styles',
      path: 'menuList/nested/jupiter/jupiterNestedMenu.styles.js',
    },
    {
      pkg: 'mui-styles',
      path: 'menuItem/toggle/material/materialToggleMenuItem.styles.js',
    },
    {
      pkg: 'mui-styles',
      path: 'menuItem/info/material/materialInfoMenuItem.styles.js',
    },
  ],
  relates: [],
};
// hide-end

export default JupiterNestedMenuList;
