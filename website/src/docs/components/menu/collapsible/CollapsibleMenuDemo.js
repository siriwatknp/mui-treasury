import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import SwitchToggle from '@mui-treasury/components/toggle/switch';
import RowToggle from '@mui-treasury/components/toggle/row';
import Menu from '@mui-treasury/components/menu/collapsible';

const CollapsibleMenuDemo = () => {
  return (
    <div>
      <Menu
        renderToggle={({ onClick, collapsed }) => (
          <ListItem button onClick={onClick}>
            Total custom component <SwitchToggle toggled={collapsed} />
          </ListItem>
        )}
      >
        <ListItem button>List item 1</ListItem>
        <ListItem button>List item 2</ListItem>
        <ListItem button>List item 3</ListItem>
      </Menu>
      <Menu
        collapsed={true}
        renderToggle={({ onClick, collapsed }) => (
          <RowToggle>
            <RowToggle.ListItem>Custom Toggle component</RowToggle.ListItem>
            <RowToggle.Action button toggled={collapsed} onClick={onClick} />
          </RowToggle>
        )}
      >
        <ListItem button>List item 1</ListItem>
        <ListItem button>List item 2</ListItem>
        <ListItem button>List item 3</ListItem>
      </Menu>
      <Menu
        renderToggle={({ onClick, collapsed }) => (
          <Menu.Row>
            <Menu.RowItem button selected>
              All collapsible menu components
            </Menu.RowItem>
            <Menu.Action button toggled={collapsed} onClick={onClick}>
              {collapsed ? <Remove /> : <Add />}
            </Menu.Action>
          </Menu.Row>
        )}
      >
        <Menu.ListItem>List item 1</Menu.ListItem>
        <Menu.ListItem selected>List item 2</Menu.ListItem>
        <Menu.ListItem>List item 3</Menu.ListItem>
        <Menu.ListItem>List item 4</Menu.ListItem>
      </Menu>
    </div>
  );
};
// hide-start
CollapsibleMenuDemo.metadata = {
  title: 'Collapsible',
  path: 'component/menu/collapsible',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Sat Feb 29 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    { pkg: 'mui-components', path: 'menu/collapsible/CollapsibleMenu.js' },
    { pkg: 'mui-components', path: 'menu/collapsible/collapsibleMenu.styles.js' },
  ]
};
// hide-end

export default CollapsibleMenuDemo;
