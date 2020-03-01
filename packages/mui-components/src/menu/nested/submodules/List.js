import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import MuiList from '@material-ui/core/List';
import { useCtxStyles } from '../StylesContext';

const List = ({ className, level, ...props }) => {
  const classes = useCtxStyles(props);
  return (
    <MuiList
      {...props}
      className={cx(classes.list, classes[`lv${level}List`], className)}
    />
  );
};

List.propTypes = {
  className: PropTypes.string,
  level: PropTypes.number,
};
List.defaultProps = {};

export default List;
