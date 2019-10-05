import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from 'extensions/Typography';

const CategoryPicker = ({ categories }) => (
  <List>
    {categories.map(({ active, title, amount }) => {
      const color = active ? 'primary' : 'textSecondary';
      return (
        <ListItem button key={title} dense>
          <ListItemText primary={title} primaryTypographyProps={{ color }} />
          <Typography variant={'body2'} color={color}>
            {amount}
          </Typography>
        </ListItem>
      );
    })}
  </List>
);

CategoryPicker.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      amount: PropTypes.number,
    }),
  ),
};
CategoryPicker.defaultProps = {
  categories: [],
};
CategoryPicker.data = [
  {
    title: 'Lifestyle',
    amount: 56,
  },
  {
    title: 'Running',
    amount: 1,
    active: true,
  },
  {
    title: 'Basketball',
    amount: 23,
  },
  {
    title: 'Soccer',
    amount: 40,
  },
  {
    title: 'Baseball',
    amount: 11,
  },
  {
    title: 'Training',
    amount: 2,
  },
  {
    title: 'Golf',
    amount: 8,
  },
  {
    title: 'Skateboarding',
    amount: 15,
  },
  {
    title: 'Football',
    amount: 14,
  },
];

export default CategoryPicker;
