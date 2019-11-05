import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { insideTriangleTabsStylesHook } from '@mui-treasury/styles/tabs';

const InsideTriangleTabs = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const tabsStyles = insideTriangleTabsStylesHook.useTabs();
  const tabItemStyles = insideTriangleTabsStylesHook.useTabItem();
  return (
    <Tabs
      classes={tabsStyles}
      value={tabIndex}
      onChange={(e, index) => setTabIndex(index)}
    >
      <Tab classes={tabItemStyles} label={'Label 1'} />
      <Tab classes={tabItemStyles} label={'Label 2'} />
      <Tab classes={tabItemStyles} label={'Label 3'} />
    </Tabs>
  );
};

// hide-start
InsideTriangleTabs.metadata = {
  title: 'Inside Triangle',
  path: 'tabs/inside-triangle',
  size: 'large',
  files: [
    {
      pkg: 'mui-styles',
      path: 'tabs/inside-triangle/insideTriangleTabs.styles.js',
    },
  ],
};
// hide-end

export default InsideTriangleTabs;
