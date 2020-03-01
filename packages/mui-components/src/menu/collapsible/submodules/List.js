import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import MuiList from '@material-ui/core/List';
import { useCtxStyles } from '../StylesContext';

const List = ({ useStyles = useCtxStyles, className, ...props }) => {
  const classes = useStyles(props);
  return <MuiList className={cx(classes.list, className)} {...props} />;
};

List.propTypes = {
  className: PropTypes.string,
  useStyles: PropTypes.func,
};
List.defaultProps = {};

export default List;
