import React from 'react';
import Box from '@material-ui/core/Box';
import Menu from '@mui-treasury/components/menu/collapsible';
import { useMaterialCollapsibleMenuStyles } from '@mui-treasury/styles/collapsibleMenu/material';

const MaterialCollapsibleMenuStyle = () => {
  const [index, setIndex] = React.useState(-1);
  const createOnClick = idx => () => setIndex(idx);
  return (
    <Box minWidth={343}>
      <Menu
        collapsed
        useStyles={useMaterialCollapsibleMenuStyles}
        renderToggle={({ onClick, collapsed }) => (
          <Menu.Row>
            <Menu.RowItem
              button
              selected={index === 0}
              onClick={createOnClick(0)}
            >
              Gatsby styles
            </Menu.RowItem>
            <Menu.Action button toggled={collapsed} onClick={onClick} />
          </Menu.Row>
        )}
      >
        <Menu.ListItem button selected={index === 1} onClick={createOnClick(1)}>
          List item 1
        </Menu.ListItem>
        <Menu.ListItem button selected={index === 2} onClick={createOnClick(2)}>
          List item 2
        </Menu.ListItem>
        <Menu.ListItem button selected={index === 3} onClick={createOnClick(3)}>
          List item 3
        </Menu.ListItem>
        <Menu.ListItem button selected={index === 4} onClick={createOnClick(4)}>
          List item 4
        </Menu.ListItem>
      </Menu>
    </Box>
  );
};
// hide-start
MaterialCollapsibleMenuStyle.metadata = {
  title: 'Material',
  path: 'collapsibleMenu/material',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Sat Mar 07 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    {
      pkg: 'mui-styles',
      path: 'collapsibleMenu/material/materialCollapsibleMenu.styles.js',
    },
  ],
};
// hide-end

export default MaterialCollapsibleMenuStyle;
