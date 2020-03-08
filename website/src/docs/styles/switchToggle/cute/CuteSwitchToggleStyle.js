import React from 'react';
import SwitchToggle from '@mui-treasury/components/toggle/switch';
import { useCuteSwitchToggleStyles } from '@mui-treasury/styles/switchToggle/cute';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';
import ZoomIn from '@material-ui/icons/ZoomIn';
import ZoomOut from '@material-ui/icons/ZoomOut';

const CuteSwitchToggleStyle = () => {
  const [toggled, setToggled] = React.useState(false);
  const onToggle = () => setToggled(!toggled);
  const gutterStyles = usePushingGutterStyles();
  return (
    <div className={gutterStyles.parent}>
      <SwitchToggle
        button
        toggled={toggled}
        useStyles={useCuteSwitchToggleStyles}
        onClick={onToggle}
      />
      <SwitchToggle
        button
        toggled={toggled}
        useStyles={useCuteSwitchToggleStyles}
        color={'#ff5252'}
        onClick={onToggle}
      >
        {toggled ? <ZoomOut /> : <ZoomIn />}
      </SwitchToggle>
    </div>
  );
};
// hide-start
CuteSwitchToggleStyle.metadata = {
  title: 'Cute',
  path: 'switchToggle/cute',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Sat Mar 07 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    { pkg: 'mui-styles', path: 'switchToggle/cute/cuteSwitchToggle.styles.js' },
  ],
};
// hide-end

export default CuteSwitchToggleStyle;
