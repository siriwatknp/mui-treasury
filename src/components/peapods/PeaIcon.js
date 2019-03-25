import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';

const injectColor = color => {
  if (
    color === 'inherit' ||
    color === 'primary' ||
    color === 'secondary' ||
    color === 'action' ||
    color === 'error' ||
    color === ' disabled'
  ) {
    return color;
  }
  return undefined;
};

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
    className={clsx(className, circular && 'circular', color, light && 'light')}
    color={injectColor(color)}
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
  libraries: [{ text: 'FontAwesome', link: 'https://fontawesome.com/icons' }],
};
PeaIcon.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaIcon;
