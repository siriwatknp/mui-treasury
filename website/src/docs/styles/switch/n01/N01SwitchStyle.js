import React from 'react';
import Switch from '@material-ui/core/Switch';
import { useN01SwitchStyles } from '@mui-treasury/styles/switch/n01';

const N01SwitchStyle = () => {
  const [toggled, setToggled] = React.useState(false);
  const switchStyles = useN01SwitchStyles();
  return (
    <div>
      <Switch
        classes={switchStyles}
        checked={toggled}
        onChange={e => setToggled(e.target.checked)}
      />
      <Switch
        classes={switchStyles}
        checked={!toggled}
        onChange={e => setToggled(!e.target.checked)}
      />
    </div>
  );
};
// hide-start
N01SwitchStyle.metadata = {
  title: 'Switch I',
  path: 'styles/switch/n01',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Tue Mar 17 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-styles', path: 'switch/n01/n01Switch.styles.js' }],
};
// hide-end

export default N01SwitchStyle;
