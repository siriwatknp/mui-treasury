import React from 'react';
import Box from '@material-ui/core/Box';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import RowToggle from '@mui-treasury/components/toggle/row';
import { useJupiterRowToggleStyles } from '@mui-treasury/styles/rowToggle/jupiter';

const JupiterRowToggleStyle = () => {
  const [index, setIndex] = React.useState(0);
  const [toggled, setToggled] = React.useState(false);
  const onToggle = () => setToggled(!toggled);
  const createOnClick = idx => () => setIndex(idx);
  return (
    <Box minWidth={343}>
      <RowToggle useStyles={useJupiterRowToggleStyles}>
        <RowToggle.ListItem>Jupiter styles</RowToggle.ListItem>
        <RowToggle.Action button toggled={toggled} onClick={onToggle} />
      </RowToggle>
      <RowToggle useStyles={useJupiterRowToggleStyles}>
        <RowToggle.ListItem
          selected={index === 1}
          button
          onClick={createOnClick(1)}
        >
          Jupiter with icon
        </RowToggle.ListItem>
        <RowToggle.Action button toggled={toggled} onClick={onToggle}>
          {toggled ? <Remove /> : <Add />}
        </RowToggle.Action>
      </RowToggle>
    </Box>
  );
};
// hide-start
JupiterRowToggleStyle.metadata = {
  title: 'Jupiter',
  path: 'styles/rowToggle/jupiter',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Sat Mar 07 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    { pkg: 'mui-styles', path: 'rowToggle/jupiter/jupiterRowToggle.styles.js' },
  ],
};
// hide-end

export default JupiterRowToggleStyle;
