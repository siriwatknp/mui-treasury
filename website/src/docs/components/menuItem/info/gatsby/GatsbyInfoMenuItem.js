import React from 'react';
import Box from '@material-ui/core/Box';
import InfoMenuItem from '@mui-treasury/components/menuItem/info';
import { useGatsbyInfoMenuItemStyles } from '@mui-treasury/styles/menuItem/info/gatsby';

const data = [
  { children: 'First item', info: 20 },
  { children: 'Second item', info: 8 },
  { children: 'Actionable item', info: 16, button: true },
];

const GatsbyInfoMenuItem = () => {
  const styles = useGatsbyInfoMenuItemStyles();
  return (
    <Box minWidth={256}>
      {data.map(item => (
        <InfoMenuItem key={item.info} classes={styles} {...item} />
      ))}
    </Box>
  );
};

// hide-start
GatsbyInfoMenuItem.metadata = {
  title: 'Gatsby Info',
  path: 'menuItem/info/gatsby',
  files: [
    {
      pkg: 'mui-styles',
      path: 'menuItem/info/gatsby/gatsbyInfoMenuItem.styles.js',
    },
    {
      pkg: 'mui-components',
      path: 'menuItem/info/InfoMenuItem.js',
    },
  ],
  relates: [],
};
// hide-end

export default GatsbyInfoMenuItem;
