import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { appleTabsStylesHook } from '@mui-treasury/styles/tabs';

const AppleTabs = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const tabsStyles = appleTabsStylesHook.useTabs();
  const tabItemStyles = appleTabsStylesHook.useTabItem();
  return (
    <Tabs
      classes={tabsStyles}
      value={tabIndex}
      onChange={(e, index) => setTabIndex(index)}
    >
      <Tab classes={tabItemStyles} disableRipple label={'All'} />
      <Tab classes={tabItemStyles} disableRipple label={'Missed'} />
      <Tab classes={tabItemStyles} disableRipple label={'Calls'} />
    </Tabs>
  );
};

// hide-start
AppleTabs.metadata = {
  title: 'Apple',
  path: 'styles/tabs/apple',
  size: 'large',
  createdAt: '4 feb 2020',
  creators: [require('constants/creators').siriwatknp],
  files: [{ pkg: 'mui-styles', path: 'tabs/apple/appleTabs.styles.ts' }],
};
// hide-end

export default AppleTabs;
