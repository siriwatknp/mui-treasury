import React from 'react';
import Switch from '@material-ui/core/Switch';
import { useAirbnbSwitchStyles } from '@mui-treasury/styles/switch/airbnb';

const AirbnbSwitchStyle = () => {
  const switchStyles = useAirbnbSwitchStyles();
  return (
    <div>
      <Switch classes={switchStyles} />
      <Switch classes={switchStyles} disabled />
    </div>
  );
};
// hide-start
AirbnbSwitchStyle.metadata = {
  title: 'Airbnb',
  path: 'styles/switch/airbnb',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Tue Apr 07 2020',
  frameProps: {
    bgcolor: '#60A29B',
  }, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-styles', path: 'switch/airbnb/airbnbSwitch.styles.js' }],
};
// hide-end

export default AirbnbSwitchStyle;
