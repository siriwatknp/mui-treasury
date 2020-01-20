import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { elevatedTabsStylesHook } from '@mui-treasury/styles/tabs';

const ElevatedTabs = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const tabsStyles = elevatedTabsStylesHook.useTabs();
  const tabItemStyles = elevatedTabsStylesHook.useTabItem();
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
ElevatedTabs.metadata = {
  title: 'Elevated',
  path: 'tabs/elevated',
  size: 'large',
  creators: [require('constants/creators').davideAntonio],
  files: [{ pkg: 'mui-styles', path: 'tabs/elevated/elevatedTabs.styles.js' }],
};
// hide-end

export default ElevatedTabs;
