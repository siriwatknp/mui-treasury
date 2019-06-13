import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import route from 'pages/components/.routes';
import brandRoute from 'pages/brands/.brandRoutes';
import templateRoute from 'pages/templates/.templateRoutes';
import demoRoutes from 'demoPages/.demoRoutes';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
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
  {
    id: 'layout-builder',
    path: '/layout-builder',
    primaryText: 'Layout Builder',
  },
  {
    id: 'timeline-2019',
    path: '/timeline-2019',
    primaryText: 'Timeline 2019',
  },
];

// eslint-disable-next-line react/prop-types
const Expander = ({ children, primaryText, secondaryText, path, selected }) => (
  <>
    <ListItem component={Link} to={path} button selected={selected}>
      <Text variant={'subtitle1'}>{primaryText}</Text>
      <Text variant={'caption'} color={'grey.500'} ml={'auto'} mt={0.25} mb={0}>
        {secondaryText}
      </Text>
    </ListItem>
    <Box
      pl={{
        xs: 2,
        md: 3,
      }}
    >
      {children}
    </Box>
  </>
);

const Navigator = withRouter(({ onClickItem, location }) => {
  const renderItem = (item, listItemProps) =>
    item.children ? (
      <Expander
        key={item.id || item.path}
        selected={location.pathname === item.path}
        {...item}
      >
        {item.children.map(renderItem)}
      </Expander>
    ) : (
      <ListItem
        key={item.id || item.path}
        button
        component={Link}
        to={item.path}
        {...listItemProps}
        selected={location.pathname === item.path}
        onClick={onClickItem}
      >
        {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
        <Text variant={'subtitle1'}>{item.primaryText}</Text>
        <Text
          variant={'caption'}
          color={'grey.500'}
          ml={'auto'}
          mt={0.25}
          mb={0}
        >
          {item.secondaryText}
        </Text>
      </ListItem>
    );
  return (
    <Box mb={2}>
      <List subheader={<ListSubheader disableSticky>Intro</ListSubheader>}>
        {introduction.map(renderItem)}
      </List>
      <List subheader={<ListSubheader disableSticky>Components</ListSubheader>}>
        {route.map(renderItem)}
      </List>
      <List subheader={<ListSubheader disableSticky>Demos</ListSubheader>}>
        {demoRoutes.map(renderItem)}
      </List>
      <List subheader={<ListSubheader disableSticky>Templates</ListSubheader>}>
        {templateRoute.map(renderItem)}
      </List>
      <List subheader={<ListSubheader disableSticky>Brands</ListSubheader>}>
        {brandRoute.map(renderItem)}
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
