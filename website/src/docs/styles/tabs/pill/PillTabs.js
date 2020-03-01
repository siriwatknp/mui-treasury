import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { pillTabsStylesHook } from '@mui-treasury/styles/tabs';

const PillTabs = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const tabsStyles = pillTabsStylesHook.useTabs();
  const tabItemStyles = pillTabsStylesHook.useTabItem();
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
PillTabs.metadata = {
  title: 'Pill',
  path: 'styles/tabs/pill',
  size: 'large',
  creators: [require('constants/creators').davideAntonio],
  files: [{ pkg: 'mui-styles', path: 'tabs/pill/pillTabs.styles.js' }],
};
// hide-end

export default PillTabs;
