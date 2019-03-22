import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';

const PeaIcon = ({
  icon,
  light,
  circular,
  color,
  className,
  fontAwesomeProps,
  ...props
}) => (
  <Icon
    className={cx(className, circular && 'circular', color, light && 'light')}
    {...props}
  >
    {icon.includes('fa') ? <i className={icon} {...fontAwesomeProps} /> : icon}
  </Icon>
);

PeaIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  fontAwesomeProps: PropTypes.shape({}),
  className: PropTypes.string,
  light: PropTypes.bool,
  circular: PropTypes.bool,
  color: PropTypes.string,
};
PeaIcon.defaultProps = {
  fontAwesomeProps: {},
  className: '',
  light: false,
  circular: false,
  color: '',
};
PeaIcon.metadata = {
  name: 'Pea Icon',
};
PeaIcon.codeSandbox = 'https://codesandbox.io/s/2vk8l2j2wn';

export default PeaIcon;
