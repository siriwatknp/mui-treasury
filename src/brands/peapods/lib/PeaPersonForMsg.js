import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PeaAvatar from './PeaAvatar';

const PeaPersonForMsg = ({
  src,
  name,
  onClick,
  ListItemProps,
  AvatarProps,
  ListItemTextProps,
}) => (
  <ListItem {...ListItemProps} onClick={onClick}>
    <PeaAvatar src={src} {...AvatarProps} />
    <ListItemText
      primaryTypographyProps={{ noWrap: true }}
      secondaryTypographyProps={{ noWrap: true }}
      primary={name}
      {...ListItemTextProps}
    />
  </ListItem>
);

PeaPersonForMsg.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  ListItemProps: PropTypes.shape({}),
  AvatarProps: PropTypes.shape({}),
  ListItemTextProps: PropTypes.shape({}),
};
PeaPersonForMsg.defaultProps = {
  ListItemProps: {},
  AvatarProps: {},
  ListItemTextProps: {},
};
PeaPersonForMsg.metadata = {
  name: 'Pea Person Item For Messaging',
};
PeaPersonForMsg.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaPersonForMsg;
