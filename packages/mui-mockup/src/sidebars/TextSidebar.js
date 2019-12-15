import React from 'react';
import List from '@material-ui/core/List';
import Folder from '@material-ui/icons/Folder';
import People from '@material-ui/icons/People';
import Star from '@material-ui/icons/Star';
import Schedule from '@material-ui/icons/Schedule';
import OfflinePin from '@material-ui/icons/OfflinePin';
import Publish from '@material-ui/icons/Publish';
import Backup from '@material-ui/icons/Backup';
import Delete from '@material-ui/icons/Delete';
import { BlueListItem } from '../components';

const list = [
  {
    primaryText: 'My Files',
    icon: <Folder />,
  },
  {
    primaryText: 'Shared with me',
    active: true,
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

const TextSidebar = () => (
  <List>
    {list.map(item => (
      <BlueListItem accentColor={'#11fedc'} key={item.primaryText} {...item} />
    ))}
  </List>
);

export default TextSidebar;
