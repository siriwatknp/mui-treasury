/**
 * Current VERSION 1.1
 *
 * vX.Y meaning
 * X = major changes ex. add/remove/rename some props/className,
 *     could affect other components
 * Y = minor changes ex. fix bug or internal logic, won't effect other component
 */
import React from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
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

const useStyles = makeStyles(({ palette, spacing }) => {
  const invertedColor = palette.common.white;
  return {
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
      '& ul, ol': {
        paddingLeft: spacing.unit * 3,
      },
      '& li': {
        marginBottom: '0.5em',
      },
      '&.-inverted:not(.-code)': {
        color: invertedColor,
      },
      // colors
      '&.-color-hint': {
        color: palette.grey[500],
      },
      '&.-color-danger': {
        color: palette.error.main,
      },
      // sizes
      '&.-size-small': {
        fontSize: 12,
      },
      '&.-size-big': {
        fontSize: 20,
      },
      '&.-size-large': {
        fontSize: 24,
      },
      // indents
      '&.-indent-small': {
        textIndent: spacing.unit * 2,
      },
      '&.-indent-big': {
        textIndent: spacing.unit * 3,
      },
      '&.-indent-large': {
        textIndent: spacing.unit * 4,
      },
      // spacings
      '&.-spacing-small': {
        letterSpacing: '0.5px',
      },
      '&.-spacing-big': {
        letterSpacing: '1px',
      },
      '&.-spacing-large': {
        letterSpacing: '2px',
      },
      // weights
      '&.-weight-100': {
        fontWeight: 100,
      },
      '&.-weight-200': {
        fontWeight: 200,
      },
      '&.-weight-300': {
        fontWeight: 300,
      },
      '&.-weight-400': {
        fontWeight: 400,
      },
      '&.-weight-500': {
        fontWeight: 500,
      },
      '&.-weight-600': {
        fontWeight: 600,
      },
      '&.-weight-700': {
        fontWeight: 700,
      },
      '&.-weight-800': {
        fontWeight: 800,
      },
      '&.-weight-900': {
        fontWeight: 900,
      },
      '&.-weight-normal': {
        fontWeight: 'normal',
      },
      '&.-weight-bold': {
        fontWeight: 'bold',
      },
    },
    button: {
      verticalAlign: 'unset',
    },
  };
});

const Typography = ({
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
}) => {
  const classes = useStyles();
  return (
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
      classes={classes}
    />
  );
};

Typography.propTypes = {
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
Typography.defaultProps = {
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
Typography.getTheme = () => {};

export default Typography;
