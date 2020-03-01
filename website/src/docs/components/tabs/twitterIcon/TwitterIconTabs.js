import React from 'react';
import Tabs from '@mui-treasury/components/tabs/twitterIcon';
import Home from '@material-ui/icons/Home';
import Search from '@material-ui/icons/Search';
import Notifications from '@material-ui/icons/Notifications';
import MailOutlineRounded from '@material-ui/icons/MailOutlineRounded';

const TwitterIconTabs = () => {
  const [index, setIndex] = React.useState(0);
  return (
    <Tabs
      tabs={[
        { icon: <Home />, badgeProps: { badgeContent: '' } },
        { icon: <Search /> },
        { icon: <Notifications />, badgeProps: { badgeContent: 99 } },
        { icon: <MailOutlineRounded /> },
      ]}
      value={index}
      onChange={(e, i) => setIndex(i)}
    />
  );
};

// hide-start
TwitterIconTabs.metadata = {
  title: 'Twitter Icon',
  path: 'component/tabs/twitterIcon',
  size: 'large',
  creators: [require('constants/creators').siriwatknp],
  files: [
    { pkg: 'mui-components', path: 'tabs/twitterIcon/TwitterIconTabs.js' },
    { pkg: 'mui-styles', path: 'tabs/twitterIcon/twitterIconTabs.styles.js' },
  ],
};
// hide-end

export default TwitterIconTabs;
