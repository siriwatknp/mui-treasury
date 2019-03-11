import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Box from 'components/atoms/Box';

const introduction = [
  {
    id: 'what',
    path: '/',
    primaryText: 'Mui Treasury',
  },
];

const components = [
  {
    id: 'button',
    path: '/components/button',
    primaryText: 'Button',
  },
  {
    id: 'card',
    path: '/components/card',
    primaryText: 'Card',
  },
  {
    id: 'tabs',
    path: '/components/tabs',
    primaryText: 'Tabs',
  },
];

const Navigator = withRouter(({ onClickItem, location }) => {
  const renderItem = item => (
    <ListItem
      component={Link}
      to={item.path}
      button
      key={item.id}
      selected={location.pathname === item.path}
      onClick={onClickItem}
    >
      <ListItemText>{item.primaryText}</ListItemText>
    </ListItem>
  );
  return (
    <Box my={2}>
      <List subheader={<ListSubheader>Intro</ListSubheader>}>
        {introduction.map(renderItem)}
      </List>
      <List subheader={<ListSubheader>Components</ListSubheader>}>
        {components.map(renderItem)}
      </List>
    </Box>
  );
});

Navigator.propTypes = {
  onClickItem: PropTypes.func,
};
Navigator.defaultProps = {
  onClickItem: () => {},
};
Navigator.displayName = 'Navigator';

export default Navigator;
