import React from 'react';
import Switch from '@material-ui/core/Switch';
import { useN02SwitchStyles } from '@mui-treasury/styles/switch/n02';

const N02SwitchStyle = () => {
  const [toggled, setToggled] = React.useState(false);
  const switchStyles = useN02SwitchStyles();
  return (
    <div>
      <Switch
        color="primary"
        classes={switchStyles}
        checked={toggled}
        onChange={e => setToggled(e.target.checked)}
      />
      <Switch
        color="secondary"
        classes={switchStyles}
        checked={!toggled}
        onChange={e => setToggled(!e.target.checked)}
      />
    </div>
  );
};
// hide-start
N02SwitchStyle.metadata = {
  title: 'Switch II',
  path: 'styles/switch/n02',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Mon Mar 16 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-styles', path: 'switch/n02/n02Switch.styles.js' }],
};
// hide-end

export default N02SwitchStyle;
