import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { plainTabsStylesHook } from '@mui-treasury/styles/tabs';

const PlainTabs = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const tabsStyles = plainTabsStylesHook.useTabs();
  const tabItemStyles = plainTabsStylesHook.useTabItem();
  return (
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
  );
};

// hide-start
PlainTabs.metadata = {
  title: 'Plain',
  path: 'tabs/plain',
  size: 'large',
  creators: [require('constants/creators').siriwatknp],
  files: [{ pkg: 'mui-styles', path: 'tabs/plain/plainTabs.styles.js' }],
};
// hide-end

export default PlainTabs;
