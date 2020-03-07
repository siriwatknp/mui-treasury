import React from 'react';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import RowToggle from '@mui-treasury/components/toggle/row';

const RowToggleDemo = () => {
  const [index, setIndex] = React.useState(0);
  const [toggled, setToggled] = React.useState(false);
  const onToggle = () => setToggled(!toggled);
  const createOnClick = idx => () => setIndex(idx);
  return (
    <Box minWidth={343}>
      <RowToggle selected={index === 0}>
        Anything you want to render
        <RowToggle.Action toggled={toggled} onClick={onToggle} />
      </RowToggle>
      <RowToggle selected={index === 1}>
        <RowToggle.ListItem
          button
          selected={index === 1}
          onClick={createOnClick(1)}
        >
          Built-in ListItem
        </RowToggle.ListItem>
        <RowToggle.Action toggled={toggled} onClick={onToggle} />
      </RowToggle>
      <RowToggle selected={index === 2}>
        <RowToggle.ListItem
          button
          selected={index === 2}
          onClick={createOnClick(2)}
        >
          Single Action
          <RowToggle.Action button={false} toggled={toggled} />
        </RowToggle.ListItem>
      </RowToggle>
      <RowToggle>
        <RowToggle.Action button toggled={toggled} onClick={onToggle} />
        <ListItem button selected={index === 3} onClick={createOnClick(3)}>
          Default Lead Action
        </ListItem>
      </RowToggle>
    </Box>
  );
};
// hide-start
RowToggleDemo.metadata = {
  title: 'Row',
  path: 'components/toggle/row',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Sat Mar 07 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-components', path: 'toggle/row/RowToggle.js' }],
};
// hide-end

export default RowToggleDemo;
