/**
 * Follow predefined Typography v1.1
 */
import React from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import MuiTypography from '@material-ui/core/Typography';

const injectColor = color => {
  if (
    color === 'default' ||
    color === 'inherit' ||
    color === 'primary' ||
    color === 'secondary' ||
    color === 'textPrimary' ||
    color === 'textSecondary' ||
    color === 'error'
  ) {
    return color;
  }
  return undefined;
};

const PeaTypography = ({
  component,
  className,
  indent,
  code,
  color,
  link,
  weight,
  size,
  grey,
  inverted,
  spacing,
  ...props
}) => (
  <MuiTypography
    {...props}
    component={link ? Link : component}
    color={injectColor(color)}
    className={cx(
      'MuiTypography-root',
      className,
      size && `-size-${size}`,
      grey && `-grey-${grey}`,
      indent && `-indent-${indent}`,
      inverted && '-inverted',
      code && '-code',
      color && `-color-${color}`,
      weight && `-weight-${weight}`,
      spacing && `-spacing-${spacing}`,
    )}
  />
);

PeaTypography.propTypes = {
  className: PropTypes.string,
  inverted: PropTypes.bool,
  code: PropTypes.bool,
  indent: PropTypes.oneOf(['', 'small', 'big', 'large']),
  size: PropTypes.oneOf(['small', '', 'big', 'large']),
  spacing: PropTypes.oneOf(['', 'small', 'big', 'large']),
  color: PropTypes.oneOf([
    'default',
    'error',
    'inherit',
    'primary',
    'secondary',
    'textPrimary',
    'textSecondary',
    // custom
    'danger',
    'hint',
  ]),
  grey: PropTypes.number,
  weight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  link: PropTypes.bool,
  component: PropTypes.elementType,
};
PeaTypography.defaultProps = {
  className: '',
  color: 'default',
  inverted: false,
  code: false,
  grey: undefined,
  indent: '',
  size: '',
  spacing: '',
  weight: undefined,
  link: false,
  component: undefined,
};
PeaTypography.metadata = {
  name: 'Pea Button',
};
PeaTypography.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaTypography;
