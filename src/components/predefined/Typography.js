import React from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';
import MuiTypography from '@material-ui/core/Typography';

const Typography = ({
  className,
  indent,
  code,
  weight,
  size,
  grey,
  inverted,
  spacing,
  ...props
}) => (
  <MuiTypography
    {...props}
    className={cx(
      'MuiTypography-root',
      className,
      size && `-${size}`,
      grey && `-grey-${grey}`,
      indent && `-indent-${indent}`,
      inverted && '-inverted',
      code && '-code',
      weight && `-weight-${weight}`,
      spacing && `-spacing-${spacing}`,
    )}
  />
);

Typography.propTypes = {
  className: PropTypes.string,
  inverted: PropTypes.bool,
  code: PropTypes.bool,
  indent: PropTypes.oneOf(['', 'small', 'big', 'large']),
  size: PropTypes.oneOf(['small', '', 'big', 'large']),
  spacing: PropTypes.oneOf(['', 'small', 'big', 'large']),
  grey: PropTypes.number,
  weight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ...MuiTypography.propTypes,
};
Typography.defaultProps = {
  className: '',
  inverted: false,
  code: false,
  grey: undefined,
  indent: '',
  size: '',
  spacing: '',
  weight: undefined,
};
Typography.getTheme = ({ palette, spacing }) => {
  const invertedColor = palette.common.white;
  const weights = [
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
    'normal',
    'bold',
  ];
  const spacings = [['small', '0.5px'], ['big', '1px'], ['large', '2px']];
  const indents = [
    ['small', spacing.unit * 2],
    ['big', spacing.unit * 3],
    ['large', spacing.unit * 4],
  ];
  const sizes = [['small', 12], ['big', 20], ['large', 24]];
  return {
    MuiTypography: {
      root: {
        '&.-code, & code': {
          margin: '0 .2em',
          padding: '.2em .4em .1em',
          fontSize: '75%',
          background: palette.grey[100],
          border: `1px solid ${palette.grey[300]}`,
          borderRadius: 3,
          fontFamily:
            // eslint-disable-next-line max-len
            "'SFMono-Regular',Consolas,'Liberation Mono',Menlo,Courier,monospace",
        },
        '&.-inverted:not(.-code)': {
          color: invertedColor,
        },
        ...weights.reduce(
          (prev, curr) => ({
            ...prev,
            [`&.-weight-${curr}`]: {
              fontWeight: curr,
            },
          }),
          {},
        ),
        ...spacings.reduce(
          (prev, curr) => ({
            ...prev,
            [`&.-spacing-${curr[0]}`]: {
              letterSpacing: curr[1],
            },
          }),
          {},
        ),
        ...indents.reduce(
          (prev, curr) => ({
            ...prev,
            [`&.-indent-${curr[0]}`]: {
              textIndent: curr[1],
            },
          }),
          {},
        ),
        ...sizes.reduce(
          (prev, curr) => ({
            ...prev,
            [`&.-${curr[0]}`]: {
              fontSize: curr[1],
            },
          }),
          {},
        ),
      },
    },
    MuiLink: {
      button: {
        verticalAlign: 'unset',
      },
    },
  };
};

export default Typography;
