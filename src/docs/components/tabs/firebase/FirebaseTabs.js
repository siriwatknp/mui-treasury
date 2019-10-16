import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { firebaseTabsStylesHook } from '@mui-treasury/styles/tabs';

const FirebaseTabs = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const tabsStyles = firebaseTabsStylesHook.useTabs();
  const tabItemStyles = firebaseTabsStylesHook.useTabItem();
  return (
    <AppBar position={'static'}>
      <Tabs
        classes={tabsStyles}
        value={tabIndex}
        onChange={(e, index) => setTabIndex(index)}
      >
        <Tab classes={tabItemStyles} label={'Data'} />
        <Tab classes={tabItemStyles} label={'Rule'} />
        <Tab classes={tabItemStyles} label={'Indexes'} />
        <Tab classes={tabItemStyles} label={'Usage'} />
      </Tabs>
    </AppBar>
  );
};

// hide-start
FirebaseTabs.metadata = {
  title: 'Firebase',
  path: 'tabs/firebase',
  longFrame: true,
  files: [{ pkg: 'mui-styles', path: 'tabs/firebase/firebaseTabs.styles.js' }],
};
// hide-end

export default FirebaseTabs;
