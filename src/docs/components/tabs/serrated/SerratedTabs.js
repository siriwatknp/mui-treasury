import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { serratedTabsStylesHook } from '@mui-treasury/styles/tabs';

const SerratedTabs = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const tabsStyles = serratedTabsStylesHook.useTabs();
  const tabItemStyles = serratedTabsStylesHook.useTabItem({
    bgColor: '#4486a3',
    selectedBgColor: '#ffffff',
  });
  return (
    <AppBar
      position={'static'}
      elevation={0}
      style={{ backgroundColor: '#E6E8EB' }}
    >
      <Toolbar
        // you need to set override hidden in toolbar
        style={{ overflow: 'hidden', minHeight: 72 }}
      >
        <Tabs
          style={{ alignSelf: 'flex-end' }}
          classes={tabsStyles}
          value={tabIndex}
          onChange={(e, index) => setTabIndex(index)}
        >
          <Tab classes={tabItemStyles} disableRipple label={'Profile'} />
          <Tab classes={tabItemStyles} disableRipple label={'Calendar'} />
          <Tab classes={tabItemStyles} disableRipple label={'Contacts'} />
          <Tab classes={tabItemStyles} disableRipple label={'Settings'} />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

// hide-start
SerratedTabs.metadata = {
  title: 'Serrated',
  path: 'tabs/serrated',
  size: 'large',
  files: [{ pkg: 'mui-styles', path: 'tabs/serrated/serratedTabs.styles.js' }],
};
// hide-end

export default SerratedTabs;
