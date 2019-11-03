import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';

const list = [
  {
    primaryText: 'My Files',
    icon: 'folder',
  },
  {
    primaryText: 'Shared with me',
    icon: 'people',
  },
  {
    primaryText: 'Starred',
    icon: 'star',
  },
  {
    primaryText: 'Recent',
    icon: 'schedule',
  },
  {
    primaryText: 'Offline',
    icon: 'offline_pin',
  },
  {
    primaryText: 'Uploads',
    icon: 'publish',
  },
  {
    primaryText: 'Backups',
    icon: 'backup',
  },
  {
    primaryText: 'Trash',
    icon: 'delete',
  },
];
const NavContentEx = () => (
  <List>
    {list.map(({ primaryText, icon }, i) => (
      <ListItem key={primaryText} selected={i === 0} button>
        <ListItemIcon>
          <Icon>{icon}</Icon>
        </ListItemIcon>
        <ListItemText
          primary={primaryText}
          primaryTypographyProps={{ noWrap: true }}
        />
      </ListItem>
    ))}
    <Divider style={{ margin: '12px 0' }} />
    <ListItem button>
      <ListItemIcon>
        <Icon>settings</Icon>
      </ListItemIcon>
      <ListItemText
        primary={'Settings & account'}
        primaryTypographyProps={{ noWrap: true }}
      />
    </ListItem>
  </List>
);

NavContentEx.propTypes = {};
NavContentEx.defaultProps = {};

export default NavContentEx;
