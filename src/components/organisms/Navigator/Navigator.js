import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import route from 'pages/components/.routes';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import Box from 'components/atoms/Box';
import Text from 'components/atoms/Text';

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
  const renderItem = (item, listItemProps) => (
    <ListItem
      key={item.id || item.path}
      button
      component={Link}
      to={item.path}
      {...listItemProps}
      selected={location.pathname === item.path}
      onClick={onClickItem}
    >
      <Box>
        <Text variant={'subtitle1'}>{item.primaryText}</Text>
        <Text variant={'caption'} color={'grey.500'}>
          {item.secondaryText}
        </Text>
      </Box>
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
