import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(({ spacing }) => ({
  action: {
    right: spacing(1),
  },
}));

const BrandPicker = ({ brands }) => {
  const classes = useStyles();
  return (
    <List>
      {brands.map(({ active, title }) => {
        const color = active ? 'primary' : 'textSecondary';
        return (
          <ListItem button key={title} dense>
            <ListItemText primary={title} primaryTypographyProps={{ color }} />
            <ListItemSecondaryAction className={classes.action}>
              <Checkbox color={'primary'} checked={active} />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};

BrandPicker.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      amount: PropTypes.number,
    }),
  ),
};
BrandPicker.defaultProps = {
  brands: [],
};
BrandPicker.data = [
  {
    title: 'Adidas',
  },
  {
    title: 'Nike',
    active: true,
  },
  {
    title: 'Balenciaga',
  },
  {
    title: 'NB Balance',
  },
  {
    title: 'Sketcher',
  },
];

export default BrandPicker;
