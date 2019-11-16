/* eslint-disable no-use-before-define */
import React from 'react';
import cx from 'clsx';
import pick from 'lodash/pick';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CollapsibleMenuList from '@mui-treasury/components/menuList/collapsible';
import ActionToggleItem from '@mui-treasury/components/menuItem/actionToggle';
import { useMaterialActionToggleItemStyles } from '@mui-treasury/styles/menuItem/actionToggle/material';
import { useMaterialToggleMenuItemStyles } from '@mui-treasury/styles/menuItem/toggle/material';
import { useMaterialInfoMenuItemStyles } from '@mui-treasury/styles/menuItem/info/material';

const useStyles = makeStyles(({ palette }) => ({
  expanded: { color: palette.text.primary },
  list: { paddingTop: 0, paddingBottom: 16 },
}));

const MaterialCollapsibleMenuList = () => {
  const [selectedKey, setSelectedKey] = React.useState('');
  const actionStyles = useMaterialActionToggleItemStyles();
  const toggleStyles = useMaterialToggleMenuItemStyles();
  const infoStyles = useMaterialInfoMenuItemStyles();
  const extraStyles = useStyles();
  return (
    <Box minWidth={256}>
      <CollapsibleMenuList
        subMenus={subMenus1}
        listClassName={extraStyles.list}
        renderParent={({ onToggle, expanded }) => (
          <ActionToggleItem
            expanded={expanded}
            classes={actionStyles}
            onToggle={onToggle}
            listItemProps={{
              classes: pick(infoStyles, ['root', 'focusVisible']),
            }}
          >
            Parent menu
          </ActionToggleItem>
        )}
        getChildProps={({ data }) => ({
          key: data.key,
          button: true,
          children: data.label,
          classes: infoStyles,
          selected: data.key === selectedKey,
          onClick: () => setSelectedKey(data.key),
        })}
      />
      <CollapsibleMenuList
        subMenus={subMenus2}
        listClassName={extraStyles.list}
        getParentProps={({ expanded }) => ({
          children: 'Default',
          classes: pick(toggleStyles, ['root', 'focusVisible']),
          className: cx(toggleStyles.root, expanded && extraStyles.expanded),
          symbolClassName: toggleStyles.symbol,
        })}
        getChildProps={({ data }) => ({
          key: data.key,
          button: true,
          children: data.label,
          classes: infoStyles,
          selected: data.key === selectedKey,
          onClick: () => setSelectedKey(data.key),
        })}
      />
    </Box>
  );
};

const subMenus1 = [
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
];
const subMenus2 = [
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
];

// hide-start
MaterialCollapsibleMenuList.metadata = {
  title: 'Material Collapse',
  path: 'menuList/collapse/material',
  files: [
    {
      pkg: 'mui-styles',
      path: 'menuItem/actionToggle/material/actionToggleItem.styles.js',
    },
    {
      pkg: 'mui-styles',
      path: 'menuItem/toggle/material/toggleMenuItem.styles.js',
    },
    {
      pkg: 'mui-styles',
      path: 'menuItem/info/material/infoMenuItem.styles.js',
    },
    {
      pkg: 'mui-components',
      path: 'menuList/collapsible/CollapsibleMenuList.js',
    },
    {
      pkg: 'mui-components',
      path: 'menuItem/actionToggle/ActionToggleItem.js',
    },
  ],
  relates: [],
};
// hide-end

export default MaterialCollapsibleMenuList;
