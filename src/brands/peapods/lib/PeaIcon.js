/**
 * Follow predefined Icon v1.1
 */
import MuiIcon from '@material-ui/core/Icon/Icon';
import React from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';

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
  className,
  children,
  color,
  fontAwesomeProps,
  icon,
  inverted,
  link,
  push,
  size,
  shape,
  shadow,
  ...props
}) => {
  const mainIcon = children || icon;
  return (
    <MuiIcon
      component={link ? 'a' : 'span'}
      {...props}
      className={cx(
        'MuiIcon-root',
        className,
        bgColor && `-bg-${bgColor}`,
        color && `-color-${color}`,
        inverted && '-inverted',
        link && '-link',
        push && `-push-${push}`,
        shape && `-shape-${shape}`,
        size && `-size-${size}`,
        shadow && '-shadow',
      )}
      color={injectColor(color)}
    >
      {mainIcon.includes && mainIcon.includes('fa-') ? (
        <i className={cx('MuiIcon--fa', mainIcon)} {...fontAwesomeProps} />
      ) : (
        mainIcon
      )}
    </MuiIcon>
  );
};

PeaIcon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  fontAwesomeProps: PropTypes.shape({}),
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  inverted: PropTypes.bool,
  link: PropTypes.bool,
  size: PropTypes.oneOf(['small', '', 'big', 'large']),
  color: PropTypes.string,
  bgColor: PropTypes.string,
  shape: PropTypes.oneOf(['', 'square', 'circular', 'round']),
  push: PropTypes.oneOf(['', 'left', 'right']),
  shadow: PropTypes.bool,
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
  shadow: false,
};
PeaIcon.metadata = {
  name: 'Pea Icon',
  libraries: [{ text: 'FontAwesome', link: 'https://fontawesome.com/icons' }],
};
PeaIcon.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaIcon;
