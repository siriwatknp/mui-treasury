import React from 'react';
import { Link } from 'react-router-dom';
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
    to: '/my-files',
  },
  {
    primaryText: 'Shared with me',
    icon: 'people',
    to: '/shared-with-me',
  },
  {
    primaryText: 'Starred',
    icon: 'star',
    to: '/starred',
  },
];
const RouterNavEx = ({ setOpened }) => (
  <List>
    {list.map(({ primaryText, icon, to }, i) => (
      <ListItem
        key={primaryText}
        selected={i === 0}
        button={!!to}
        component={to ? Link : 'div'}
        {...(!!to && { to })}
        onClick={() => setOpened(false)}
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

RouterNavEx.propTypes = {};
RouterNavEx.defaultProps = {};

export default RouterNavEx;
