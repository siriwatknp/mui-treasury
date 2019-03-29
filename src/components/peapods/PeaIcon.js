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
  size,
  icon,
  children,
  light,
  circular,
  color,
  bgColor,
  className,
  fontAwesomeProps,
  ...props
}) => {
  const mainIcon = children || icon;
  return (
    <Icon
      className={clsx(
        className,
        circular && 'PeaIcon--circular',
        color,
        bgColor && `PeaIcon--bg-${bgColor}`,
        light && 'PeaIcon--light',
        size && `PeaIcon--${size}`,
      )}
      color={injectColor(color)}
      {...props}
    >
      {mainIcon.includes('fa') ? (
        <i className={mainIcon} {...fontAwesomeProps} />
      ) : (
        mainIcon
      )}
    </Icon>
  );
};

PeaIcon.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.node,
  fontAwesomeProps: PropTypes.shape({}),
  className: PropTypes.string,
  light: PropTypes.bool,
  circular: PropTypes.bool,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'big']),
};
PeaIcon.defaultProps = {
  fontAwesomeProps: {},
  children: null,
  className: '',
  light: false,
  circular: false,
  color: '',
  icon: '',
  size: undefined,
  bgColor: '',
};
PeaIcon.metadata = {
  name: 'Pea Icon',
  libraries: [{ text: 'FontAwesome', link: 'https://fontawesome.com/icons' }],
};
PeaIcon.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaIcon;
