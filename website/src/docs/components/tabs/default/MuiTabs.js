import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const MuiTabs = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  return (
    <Tabs value={tabIndex} onChange={(e, index) => setTabIndex(index)}>
      <Tab label={'Label 1'} />
      <Tab label={'Label 2'} />
      <Tab label={'Label 3'} />
    </Tabs>
  );
};

// hide-start
MuiTabs.metadata = {
  isDefault: true,
  title: 'Default',
  path: 'tabs/default',
  relates: [
    {
      label: 'Official Demo',
      url: 'https://material-ui.com/components/tabs/',
    },
    { label: 'Official API', url: 'https://material-ui.com/api/tabs/' },
  ],
};
// hide-end

export default MuiTabs;
