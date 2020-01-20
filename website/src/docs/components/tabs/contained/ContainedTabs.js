import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { containedTabsStylesHook } from '@mui-treasury/styles/tabs';

const ContainedTabs = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const tabsStyles = containedTabsStylesHook.useTabs();
  const tabItemStyles = containedTabsStylesHook.useTabItem();
  return (
    <Tabs
      classes={tabsStyles}
      value={tabIndex}
      onChange={(e, index) => setTabIndex(index)}
    >
      <Tab classes={tabItemStyles} label={'Specs'} />
      <Tab classes={tabItemStyles} label={'Comparison'} />
      <Tab classes={tabItemStyles} label={'Reviews'} />
      <Tab classes={tabItemStyles} label={'Return Policy'} />
    </Tabs>
  );
};

// hide-start
ContainedTabs.metadata = {
  title: 'Contained',
  path: 'tabs/contained',
  size: 'large',
  creators: [require('constants/creators').siriwatknp],
  files: [
    { pkg: 'mui-styles', path: 'tabs/contained/containedTabs.styles.js' },
  ],
  relates: [
    {
      label: 'Qix-/Color',
      url: 'https://github.com/Qix-/color',
    },
  ],
};
// hide-end

export default ContainedTabs;
