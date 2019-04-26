import React from 'react';
import cx from 'clsx';
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
  bgColor,
  color,
  className,
  children,
  fontAwesomeProps,
  icon,
  inverted,
  link,
  push,
  size,
  shape,
  ...props
}) => {
  const mainIcon = children || icon;
  return (
    <Icon
      className={cx(
        'MuiIcon-root',
        className,
        bgColor && `-bg-${bgColor}`,
        color && `-${color}`,
        inverted && '-inverted',
        link && '-link',
        push && `-push-${push}`,
        shape && `-${shape}`,
        size && `-${size}`,
      )}
      color={injectColor(color)}
      {...props}
    >
      {mainIcon.includes('fa') ? (
        <i className={cx('MuiIcon--fa', mainIcon)} {...fontAwesomeProps} />
      ) : (
        mainIcon
      )}
    </Icon>
  );
};

PeaIcon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  fontAwesomeProps: PropTypes.shape({}),
  icon: PropTypes.string,
  inverted: PropTypes.bool,
  link: PropTypes.bool,
  size: PropTypes.oneOf(['small', '', 'big', 'large']),
  color: PropTypes.oneOf([
    '',
    'inherit',
    'primary',
    'secondary',
    'action',
    'error',
    'disabled',
  ]),
  bgColor: PropTypes.oneOf([
    '',
    'default',
    'danger',
    'primary',
    'secondary',
    'white',
  ]),
  shape: PropTypes.oneOf(['', 'square', 'circular', 'round']),
  push: PropTypes.oneOf(['', 'left', 'right']),
};
PeaIcon.defaultProps = {
  bgColor: '',
  className: '',
  children: null,
  color: '',
  fontAwesomeProps: {},
  icon: '',
  inverted: false,
  link: false,
  push: '',
  size: '',
  shape: 'circular',
};
PeaIcon.metadata = {
  name: 'Pea Icon',
  libraries: [{ text: 'FontAwesome', link: 'https://fontawesome.com/icons' }],
};
PeaIcon.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaIcon;
