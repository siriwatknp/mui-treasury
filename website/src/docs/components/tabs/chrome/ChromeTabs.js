import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { chromeTabsStylesHook } from '@mui-treasury/styles/tabs';

const ChromeTabs = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const tabsStyles = chromeTabsStylesHook.useTabs();
  const tabItemStyles = chromeTabsStylesHook.useTabItem();
  return (
    <Tabs
      classes={tabsStyles}
      value={tabIndex}
      onChange={(e, index) => setTabIndex(index)}
    >
      <Tab classes={tabItemStyles} label={'Label 1'} />
      <Tab classes={tabItemStyles} label={'Label 2'} />
      <Tab classes={tabItemStyles} label={'Label 3'} />
      <Tab classes={tabItemStyles} label={'Label 4'} />
    </Tabs>
  );
};

// hide-start
ChromeTabs.metadata = {
  title: 'Chrome',
  path: 'tabs/default',
  size: 'large',
  creators: [require('constants/creators').siriwatknp],
  files: [{ pkg: 'mui-styles', path: 'tabs/chrome/chromeTabs.styles.js' }],
  relates: [
    {
      label: 'Qix-/Color',
      url: 'https://github.com/Qix-/color',
    },
  ],
};
// hide-end

export default ChromeTabs;
