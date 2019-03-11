import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import MuiAvatar from '@material-ui/core/Avatar';
import { AVATAR } from 'theme/core';

const Avatar = ({
  className,
  bordered,
  link,
  small,
  medium,
  huge,
  ...props
}) => (
  <MuiAvatar
    src={'http://i.pravatar.cc/300'}
    className={cx(
      AVATAR.root,
      className,
      bordered && AVATAR.bordered,
      link && AVATAR.link,
      small && AVATAR.small,
      medium && AVATAR.medium,
      huge && AVATAR.huge,
    )}
    {...props}
  />
);

Avatar.propTypes = {
  className: PropTypes.string,
  bordered: PropTypes.bool,
  link: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  huge: PropTypes.bool,
};
Avatar.defaultProps = {
  className: '',
  bordered: false,
  link: false,
  small: false,
  medium: false,
  huge: false,
};

export default Avatar;
