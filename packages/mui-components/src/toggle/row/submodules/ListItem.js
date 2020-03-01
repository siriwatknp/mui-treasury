import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import MuiListItem from '@material-ui/core/ListItem';
import { useCtxStyles } from '../StylesContext';

const ListItem = ({ className, selected, ...props }) => {
  const classes = useCtxStyles(props);
  return (
    <MuiListItem
      component={'div'}
      className={cx(
        classes.listItem,
        selected && classes.listItemSelected,
        className
      )}
      {...props}
    />
  );
};

ListItem.propTypes = {
  className: PropTypes.string,
  selected: PropTypes.bool,
};

export default ListItem;
