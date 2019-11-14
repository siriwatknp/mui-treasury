import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

const InfoMenuItem = ({
  children,
  info,
  infoClassName,
  infoProps,
  ...props
}) => (
  <ListItem {...props}>
    {children}
    <Typography {...infoProps} className={infoClassName}>
      {info}
    </Typography>
  </ListItem>
);

InfoMenuItem.propTypes = {
  children: PropTypes.node,
  info: PropTypes.node,
  infoClassName: PropTypes.string,
  infoProps: PropTypes.shape({}),
};
InfoMenuItem.defaultProps = {
  children: null,
  info: null,
  infoClassName: undefined,
  infoProps: {},
};

export default InfoMenuItem;
