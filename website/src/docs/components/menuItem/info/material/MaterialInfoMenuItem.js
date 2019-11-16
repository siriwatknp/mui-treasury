import React from 'react';
import Box from '@material-ui/core/Box';
import InfoMenuItem from '@mui-treasury/components/menuItem/info';
import { useMaterialInfoMenuItemStyles } from '@mui-treasury/styles/menuItem/info/material';

const data = [
  { children: 'Plain text', info: 20 },
  { children: 'Actionable item', info: 16, button: true },
  { children: 'Selected item', info: 16, selected: true },
];

const MaterialInfoMenuItemDemo = () => {
  const styles = useMaterialInfoMenuItemStyles();
  return (
    <Box minWidth={256}>
      {data.map(item => (
        <InfoMenuItem key={item.info} classes={styles} {...item} />
      ))}
    </Box>
  );
};

// hide-start
MaterialInfoMenuItemDemo.metadata = {
  title: 'Material Info',
  path: 'menuItem/info/material',
  files: [
    {
      pkg: 'mui-styles',
      path: 'menuItem/info/material/infoMenuItem.styles.js',
    },
    { pkg: 'mui-styles', path: 'icon/small/smallIcon.styles.js' },
    {
      pkg: 'mui-components',
      path: 'menuItem/info/InfoMenuItem.js',
    },
  ],
  relates: [],
};
// hide-end

export default MaterialInfoMenuItemDemo;
