import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { twitterTabsStylesHook } from '@mui-treasury/styles/tabs';

const TwitterTabs = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const tabsStyles = twitterTabsStylesHook.useTabs();
  const tabItemStyles = twitterTabsStylesHook.useTabItem();
  return (
    <Tabs
      variant={'fullWidth'}
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
TwitterTabs.metadata = {
  title: 'Twitter',
  path: 'tabs/twitter',
  longFrame: true,
  files: [{ pkg: 'mui-styles', path: 'tabs/twitter/twitterTabs.styles.js' }],
};
// hide-end

export default TwitterTabs;
