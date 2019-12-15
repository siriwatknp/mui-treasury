import React from 'react';
import CloudCircle from '@material-ui/icons/CloudCircle';
import Security from '@material-ui/icons/Security';
import VpnLock from '@material-ui/icons/VpnLock';
import SettingsApplications from '@material-ui/icons/SettingsApplications';
import List from '@material-ui/core/List';
import { WhiteIconItem, TextLogo } from '../components';

const list = [
  {
    primaryText: 'Cloud',
    icon: <CloudCircle />,
    active: true,
  },
  {
    primaryText: 'Security',
    icon: <Security />,
  },
  {
    primaryText: 'VPN lock',
    icon: <VpnLock />,
  },
  {
    primaryText: 'Settings',
    icon: <SettingsApplications />,
  },
];

const RoundIconSidebar = ({ onClickItem }) => (
  <List>
    <TextLogo mt={2} mb={4}>
      Run.
    </TextLogo>
    {list.map(item => (
      <WhiteIconItem onClick={onClickItem} key={item.primaryText} {...item} />
    ))}
  </List>
);

export default RoundIconSidebar;
