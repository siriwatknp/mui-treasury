import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import Folder from '@material-ui/icons/Folder';
import People from '@material-ui/icons/People';
import Star from '@material-ui/icons/Star';
import Schedule from '@material-ui/icons/Schedule';
import OfflinePin from '@material-ui/icons/OfflinePin';
import Publish from '@material-ui/icons/Publish';
import Backup from '@material-ui/icons/Backup';
import Delete from '@material-ui/icons/Delete';
import Settings from '@material-ui/icons/Settings';

const list = [
  {
    primaryText: 'My Files',
    icon: <Folder />,
  },
  {
    primaryText: 'Shared with me',
    icon: <People />,
  },
  {
    primaryText: 'Starred',
    icon: <Star />,
  },
  {
    primaryText: 'Recent',
    icon: <Schedule />,
  },
  {
    primaryText: 'Offline',
    icon: <OfflinePin />,
  },
  {
    primaryText: 'Uploads',
    icon: <Publish />,
  },
  {
    primaryText: 'Backups',
    icon: <Backup />,
  },
  {
    primaryText: 'Trash',
    icon: <Delete />,
  },
];
const NavContentEx = ({ onClickItem }) => (
  <List>
    {list.map(({ primaryText, icon }, i) => (
      <ListItem
        key={primaryText}
        selected={i === 0}
        button
        onClick={onClickItem}
      >
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
    <ListItem button onClick={onClickItem}>
      <ListItemIcon>
        <Settings />
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
