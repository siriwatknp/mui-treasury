import React from 'react';
import SwitchToggle from '@mui-treasury/components/toggle/switch';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

const SwitchToggleDemo = () => {
  const [toggled, setToggled] = React.useState(false);
  return (
    <div>
      <SwitchToggle toggled={toggled} />
      <SwitchToggle
        button
        toggled={toggled}
        onClick={() => setToggled(!toggled)}
      />
      <SwitchToggle
        button
        toggled={toggled}
        onClick={() => setToggled(!toggled)}
      >
        {toggled ? <Remove /> : <Add />}
      </SwitchToggle>
    </div>
  );
};
// hide-start
SwitchToggleDemo.metadata = {
  title: 'Switch',
  path: 'components/toggle/switch',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Sat Mar 07 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-components', path: 'toggle/switch/SwitchToggle.js' }],
};
// hide-end

export default SwitchToggleDemo;
