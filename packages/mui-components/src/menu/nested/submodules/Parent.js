import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { useCtxStyles } from '../StylesContext';

const Parent = ({
  useStyles = useCtxStyles,
  className,
  level,
  active,
  collapsed,
  ...props
}) => {
  const classes = useStyles();
  return (
    <div
      className={cx(
        classes.parent,
        active && classes[`parentActive`],
        collapsed && classes[`parentCollapsed`],
        level && classes[`lv${level}Parent`],
        active && classes[`lv${level}ParentActive`],
        collapsed && classes[`lv${level}ParentCollapsed`],
        className
      )}
      {...props}
    />
  );
};

Parent.propTypes = {
  level: PropTypes.number,
  className: PropTypes.string,
  useStyles: PropTypes.func,
  active: PropTypes.bool,
  collapsed: PropTypes.bool,
};

export default Parent;
