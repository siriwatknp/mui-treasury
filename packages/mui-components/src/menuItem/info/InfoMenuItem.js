import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

const InfoMenuItem = ({
  classes: { info: infoClasses, ...classes },
  children,
  info,
  infoClassName,
  infoProps,
  ...props
}) => (
  <ListItem classes={classes} {...props}>
    {children}
    <Typography {...infoProps} className={cx(infoClasses, infoClassName)}>
      {info}
    </Typography>
  </ListItem>
);

InfoMenuItem.propTypes = {
  classes: PropTypes.shape({}),
  children: PropTypes.node,
  info: PropTypes.node,
  infoClassName: PropTypes.string,
  infoProps: PropTypes.shape({}),
};
InfoMenuItem.defaultProps = {
  classes: {},
  children: null,
  info: null,
  infoClassName: undefined,
  infoProps: {},
};

export default InfoMenuItem;
