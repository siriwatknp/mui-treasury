import React from 'react';
import Switch from '@material-ui/core/Switch';
import { useLovelySwitchStyles } from '@mui-treasury/styles/switch/lovely';

const LovelySwitchStyle = () => {
  const [toggled, setToggled] = React.useState(false);
  const lovelyStyles = useLovelySwitchStyles();
  return (
    <div>
      <Switch
        classes={lovelyStyles}
        checked={toggled}
        onChange={e => setToggled(e.target.checked)}
      />
      <Switch
        classes={lovelyStyles}
        checked={!toggled}
        onChange={e => setToggled(!e.target.checked)}
      />
    </div>
  );
};
// hide-start
LovelySwitchStyle.metadata = {
  title: 'Lovely',
  path: 'styles/switch/lovely',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Wed Mar 11 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-styles', path: 'switch/lovely/lovelySwitch.styles.js' }],
};
// hide-end

export default LovelySwitchStyle;
