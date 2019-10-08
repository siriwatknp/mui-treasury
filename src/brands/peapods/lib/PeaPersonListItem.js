import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PeaButton from './PeaButton';
import PeaAvatar from './PeaAvatar';

const PeaPersonListItem = ({
  src,
  name,
  tag,
  onClick,
  ListItemProps,
  AvatarProps,
  ListItemTextProps,
  ButtonProps,
  isButtonShown,
}) => (
  <ListItem {...ListItemProps} onClick={!isButtonShown ? onClick : null}>
    <PeaAvatar src={src} {...AvatarProps} />
    <ListItemText
      primaryTypographyProps={{ noWrap: true }}
      secondaryTypographyProps={{ noWrap: true }}
      primary={name}
      secondary={tag}
      {...ListItemTextProps}
    />
    {isButtonShown && (
      <PeaButton
        variant={'contained'}
        color={'primary'}
        onClick={onClick}
        {...ButtonProps}
      >
        Follow
      </PeaButton>
    )}
  </ListItem>
);

PeaPersonListItem.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  ListItemProps: PropTypes.shape({}),
  AvatarProps: PropTypes.shape({}),
  ListItemTextProps: PropTypes.shape({}),
  ButtonProps: PropTypes.shape({}),
  isButtonShown: PropTypes.bool,
};
PeaPersonListItem.defaultProps = {
  ListItemProps: {},
  AvatarProps: {},
  ListItemTextProps: {},
  ButtonProps: {},
  isButtonShown: true,
};
PeaPersonListItem.metadata = {
  name: 'Pea Person List Item',
};
PeaPersonListItem.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaPersonListItem;
