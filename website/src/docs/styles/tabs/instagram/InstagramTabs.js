import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { instagramTabsStylesHook } from '@mui-treasury/styles/tabs';
import GridOnOutlined from '@material-ui/icons/GridOnOutlined';
import LiveTv from '@material-ui/icons/LiveTv';
import BookmarkBorderOutlined from '@material-ui/icons/BookmarkBorderOutlined';

const InstagramTabs = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const tabsStyles = instagramTabsStylesHook.useTabs();
  const tabItemStyles = instagramTabsStylesHook.useTabItem();
  return (
    <Tabs
      classes={tabsStyles}
      value={tabIndex}
      onChange={(e, index) => setTabIndex(index)}
    >
      <Tab classes={tabItemStyles} label={'Data'} icon={<GridOnOutlined />} />
      <Tab classes={tabItemStyles} label={'Rule'} icon={<LiveTv />} />
      <Tab
        classes={tabItemStyles}
        label={'Indexes'}
        icon={<BookmarkBorderOutlined />}
      />
      <Tab classes={tabItemStyles} label={'Usage'} />
    </Tabs>
  );
};

// hide-start
InstagramTabs.metadata = {
  title: 'Instagram',
  path: 'styles/tabs/instagram',
  size: 'large',
  creators: [require('constants/creators').siriwatknp],
  files: [
    { pkg: 'mui-styles', path: 'tabs/instagram/instagramTabs.styles.js' },
  ],
};
// hide-end

export default InstagramTabs;
