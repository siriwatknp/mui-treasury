import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import route from 'pages/components/.routes';
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
  {
    id: 'how',
    path: '/instruction',
    primaryText: 'How to use',
  },
  {
    id: 'contribution',
    path: '/contribution',
    primaryText: 'Contribution',
  },
];

const Navigator = withRouter(({ onClickItem, location }) => {
  const renderItem = item => (
    <ListItem
      key={item.id || item.path}
      button
      component={Link}
      to={item.path}
      selected={location.pathname === item.path}
      onClick={onClickItem}
    >
      <ListItemText>{item.primaryText}</ListItemText>
    </ListItem>
  );
  return (
    <Box mb={2}>
      <List subheader={<ListSubheader>Intro</ListSubheader>}>
        {introduction.map(renderItem)}
      </List>
      <List subheader={<ListSubheader>Components</ListSubheader>}>
        {route.map(renderItem)}
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
