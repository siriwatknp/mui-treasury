import React from 'react';
import Switch from '@material-ui/core/Switch';
import { useIosSwitchStyles } from '@mui-treasury/styles/switch/ios';

const IosSwitchStyle = () => {
  const [toggled, setToggled] = React.useState(false);
  const iosStyles = useIosSwitchStyles();
  return (
    <div>
      <Switch
        classes={iosStyles}
        checked={toggled}
        onChange={e => setToggled(e.target.checked)}
      />
      <Switch
        classes={iosStyles}
        checked={!toggled}
        onChange={e => setToggled(e.target.checked)}
      />
    </div>
  );
};
// hide-start
IosSwitchStyle.metadata = {
  title: 'Ios',
  path: 'switch/ios',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Tue Mar 10 2020',
  frameProps: {
    bgcolor: 'grey.100',
  }, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-styles', path: 'switch/ios/iosSwitch.styles.js' }],
};
// hide-end

export default IosSwitchStyle;
