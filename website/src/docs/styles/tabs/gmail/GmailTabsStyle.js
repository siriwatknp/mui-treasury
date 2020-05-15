import React from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import {
  useGmailTabsStyles,
  useGmailTabItemStyles,
} from '@mui-treasury/styles/tabs';
import Inbox from '@material-ui/icons/Inbox';
import LocalOffer from '@material-ui/icons/LocalOffer';
import People from '@material-ui/icons/People';
import Info from '@material-ui/icons/Info';

const GmailTabsStyle = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const tabsStyles = useGmailTabsStyles();
  const tabItem1Styles = useGmailTabItemStyles({ color: '#d93025' });
  const tabItem2Styles = useGmailTabItemStyles({ color: '#1a73e8' });
  const tabItem3Styles = useGmailTabItemStyles({ color: '#188038' });
  const tabItem4Styles = useGmailTabItemStyles({ color: '#e37400' });
  return (
    <Tabs
      classes={tabsStyles}
      value={tabIndex}
      onChange={(e, index) => setTabIndex(index)}
      TabIndicatorProps={{ children: <div className={`MuiIndicator-${tabIndex}`} /> }}
    >
      <Tab
        classes={tabItem1Styles}
        disableTouchRipple
        label={'Primary'}
        icon={<Inbox />}
      />
      <Tab
        classes={tabItem2Styles}
        disableTouchRipple
        label={
          <div className={'MuiTabItem-labelGroup'}>
            <div className={'MuiTabItem-label'}>
              Social <span className={'MuiTabItem-tag'}>2 new</span>
            </div>
            <div className={'MuiTabItem-subLabel'}>LinkedIn</div>
          </div>
        }
        icon={<People />}
      />
      <Tab
        classes={tabItem3Styles}
        disableTouchRipple
        label={'Promotions'}
        icon={<LocalOffer />}
      />
      <Tab
        classes={tabItem4Styles}
        disableTouchRipple
        label={'Updates'}
        icon={<Info />}
      />
    </Tabs>
  );
};
// hide-start
GmailTabsStyle.metadata = {
  title: 'Gmail',
  path: 'styles/tabs/gmail',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Fri May 15 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'huge', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-styles', path: 'tabs/gmail/gmailTabs.styles.ts' }],
};
// hide-end

export default GmailTabsStyle;
