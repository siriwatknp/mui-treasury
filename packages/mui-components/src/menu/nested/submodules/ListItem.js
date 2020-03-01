import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import MuiListItem from '@material-ui/core/ListItem';
import { useCtxStyles } from '../StylesContext';

const ListItem = ({ className, selected, level, ...props }) => {
  const classes = useCtxStyles(props);
  return (
    <MuiListItem
      {...props}
      className={cx(
        classes.listItem,
        classes[`lv${level}Item`],
        selected && classes.listItemSelected,
        selected && classes[`lv${level}ItemSelected`],
        className
      )}
    />
  );
};

ListItem.propTypes = {
  className: PropTypes.string,
  selected: PropTypes.bool,
  level: PropTypes.number,
};
ListItem.defaultProps = {};

export default ListItem;
