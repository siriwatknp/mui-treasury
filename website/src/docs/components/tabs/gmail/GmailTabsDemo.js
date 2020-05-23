import React from 'react';
import { GmailTabs, GmailTabItem } from '@mui-treasury/components/tabs/gmail';
import Inbox from '@material-ui/icons/Inbox';
import LocalOffer from '@material-ui/icons/LocalOffer';
import People from '@material-ui/icons/People';
import Info from '@material-ui/icons/Info';

const GmailTabsDemo = () => {
  const [index, setIndex] = React.useState(0);
  return (
    <GmailTabs value={index} onChange={(_, value) => setIndex(value)}>
      <GmailTabItem icon={<Inbox />} label={'Primary'} />
      <GmailTabItem
        icon={<People />}
        label={'Social'}
        tag={'2 new'}
        subLabel={'Youtube, LinkedIn'}
      />
      <GmailTabItem
        icon={<LocalOffer />}
        label={'Promotions'}
        subLabel={'Pattern Matching, Medium Daily'}
      />
      <GmailTabItem icon={<Info />} label={'Updates'} tag={'15 new'} />
    </GmailTabs>
  );
};
// hide-start
GmailTabsDemo.metadata = {
  title: 'Gmail',
  path: 'components/tabs/gmail',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Sat May 23 2020',
  stylesUrl: '',
  frameProps: {}, // props that applied to Box in grid view
  size: 'huge', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-components', path: 'tabs/gmail/GmailTabs.tsx' }],
};
// hide-end

export default GmailTabsDemo;
