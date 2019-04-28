/**
 * Current VERSION 1.1
 *
 * vX.Y meaning
 * X = major changes ex. add/remove/rename some props/className,
 *     could affect other components
 * Y = minor changes ex. fix bug or internal logic, won't effect other component
 */
import React from 'react';
import PropTypes from 'prop-types';
import Color from 'color';
import cx from 'clsx';
import MuiButton from '@material-ui/core/Button';
import Icon from 'components/predefined/Icon';
import CircularProgress from '@material-ui/core/CircularProgress';

const getLoaderSize = size => {
  if (size === 'small') return 16;
  if (size === 'big') return 28;
  if (size === 'large') return 36;
  return 20;
};

const injectColor = color => {
  if (
    color === 'inherit' ||
    color === 'primary' ||
    color === 'secondary' ||
    color === 'default'
  ) {
    return color;
  }
  return undefined;
};

const Button = ({
  className,
  classes,
  color,
  inverted,
  loading,
  elongated,
  size,
  shape,
  compact,
  shadowless,
  labelExpanded,
  mobileFullWidth,
  icon,
  iconIsolated,
  iconProps,
  iconPosition,
  children,
  loaderProps,
  ...props
}) => {
  const iconComponent =
    typeof icon === 'string' ? <Icon {...iconProps}>{icon}</Icon> : icon;
  const loaderSize = getLoaderSize(size);
  const renderChildren = () =>
    icon ? <span className={'MuiButton-text'}>{children}</span> : children;
  return (
    <MuiButton
      classes={{
        root: cx('MuiButton-root', classes.root),
        label: cx(
          'MuiButton-label',
          iconIsolated && '-icon-isolated',
          classes.label,
        ),
        disabled: cx('MuiButton-disabled', classes.disabled),
      }}
      className={cx(
        className,
        inverted && '-inverted',
        loading && '-loading',
        elongated && '-elongated',
        color && `-color-${color}`,
        size && `-size-${size}`,
        shape && `-shape-${shape}`,
        labelExpanded && '-labelExpanded',
        mobileFullWidth && '-mobileFullWidth',
        shadowless && '-shadowless',
        compact && '-compact',
      )}
      color={injectColor(color)}
      {...props}
    >
      {loading && (
        <CircularProgress
          thickness={6}
          {...loaderProps}
          size={loaderSize}
          style={{
            marginLeft: -loaderSize / 2,
            marginTop: -loaderSize / 2,
          }}
          className={'MuiButton-loader'}
        />
      )}
      {icon && iconPosition === 'start' && iconComponent}
      {shape !== 'circular' && renderChildren()}
      {icon && iconPosition === 'end' && iconComponent}
    </MuiButton>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.shape({}),
  color: PropTypes.oneOf([
    'default',
    'inherit',
    'primary',
    'secondary',
    // custom
    'danger',
  ]),
  compact: PropTypes.bool,
  inverted: PropTypes.bool,
  loading: PropTypes.bool,
  elongated: PropTypes.bool,
  labelExpanded: PropTypes.bool,
  mobileFullWidth: PropTypes.bool,
  shadowless: PropTypes.bool,
  size: PropTypes.oneOf(['small', '', 'big', 'large']),
  shape: PropTypes.oneOf(['', 'chubby', 'circular']),
  children: PropTypes.node.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  iconIsolated: PropTypes.bool,
  iconPosition: PropTypes.oneOf(['start', 'end']),
  iconProps: PropTypes.shape({}),
  loaderProps: PropTypes.shape({}),
};
Button.defaultProps = {
  className: '',
  classes: {},
  color: 'default',
  compact: false,
  inverted: false,
  loading: false,
  elongated: false,
  labelExpanded: false,
  mobileFullWidth: false,
  shadowless: false,
  size: '',
  shape: '',
  icon: '',
  iconIsolated: false,
  iconPosition: 'start',
  iconProps: {},
  loaderProps: {},
};
Button.getTheme = ({ breakpoints, palette, spacing }) => {
  const elongatedWidth = 160;
  const defaultFontWeight = 'normal';
  const defaultLetterSpacing = '0.25px';
  const defaultTextTransform = 'none';
  const invertedColor = palette.common.white;
  const borderWidth = 2;
  const iconSelector =
    '.MuiButton-label:not([class*="-icon-isolated"]) > .material-icons, > svg';
  const loaderSelector = '.MuiButton-label .MuiButton-loader';
  const defaultIconSize = 16;
  return {
    MuiButton: {
      root: {
        // STANDALONE
        '&.-color-danger': {
          color: palette.error.main,
        },
        '&.-compact': {
          paddingTop: 3,
          paddingBottom: 3,
        },
        '&.-elongated': {
          minWidth: elongatedWidth,
        },
        '&.-inverted': {
          color: invertedColor,
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.2)',
          },
        },
        '&.-labelExpanded': {
          '& .MuiButton-text': {
            marginLeft: 'auto',
            marginRight: 'auto',
          },
        },
        '&.-mobileFullWidth': {
          [breakpoints.only('xs')]: {
            width: '100%',
          },
        },
        // icon
        [`& ${iconSelector}`]: {
          // default icon size
          fontSize: defaultIconSize,
        },
        '& .MuiButton-label > .material-icons, > svg': {
          // dont change upper code to iconSelector
          // fixed styles
          '&:first-child': {
            marginRight: spacing.unit,
          },
          '&:last-child': {
            marginLeft: spacing.unit,
          },
        },
        // loading
        '&.-loading': {
          pointerEvents: 'none',
          '& .MuiButton-label': {
            color: 'rgba(0,0,0,0)',
            '& .MuiButton-loader': {
              color: palette.text.primary,
            },
          },
        },
        '& .MuiButton-loader': {
          position: 'absolute',
          top: '50%',
          left: '50%',
        },
        // sizes
        '&.-size-small': {
          padding: '3px 12px',
          fontSize: '0.75rem',
          [`& ${iconSelector}`]: {
            fontSize: '0.75rem',
          },
        },
        '&.-size-big': {
          padding: '8px 24px',
          fontSize: '1rem',
          [`& ${iconSelector}`]: {
            fontSize: '1rem',
          },
        },
        '&.-size-large': {
          padding: '12px 32px',
          fontSize: '1.25rem',
          [`& ${iconSelector}`]: {
            fontSize: '1.25rem',
          },
        },
        '&.-shape-chubby': {
          borderRadius: 100,
          padding: '6px 12px',
        },
        '&.-shape-circular': {
          borderRadius: '50%',
          padding: spacing.unit,
          minWidth: 'auto',
          [`& ${iconSelector}`]: {
            margin: 0,
            fontSize: 20,
          },
        },
        // COMBINATION
        '&.-shape-circular.-size-small': {
          padding: spacing.unit,
          [`& ${iconSelector}`]: {
            fontSize: 16,
          },
        },
        '&.-shape-circular.-size-big': {
          padding: spacing.unit * 1.5,
          [`& ${iconSelector}`]: {
            fontSize: 28,
          },
        },
        '&.-shape-circular.-size-large': {
          padding: spacing.unit * 2,
          [`& ${iconSelector}`]: {
            fontSize: 32,
          },
        },
        '&.-size-big.-compact': {
          paddingTop: 4,
          paddingBottom: 4,
        },
        '&.-size-large.-compact': {
          paddingTop: 6,
          paddingBottom: 6,
        },
        '&$disabled.-inverted': {
          borderColor: 'rgba(255, 255, 255, 0.38)',
          color: 'rgba(255, 255, 255, 0.38)',
        },
        '&.-loading.-inverted': {
          [`& ${loaderSelector}`]: {
            color: invertedColor,
          },
        },
      },
      label: {
        letterSpacing: defaultLetterSpacing,
        textTransform: defaultTextTransform,
        fontWeight: defaultFontWeight,
      },
      contained: {
        '&.-color-danger': {
          backgroundColor: palette.error.main,
          color: invertedColor,
        },
        // No Shadow
        '&$focusVisible.-shadowless': {
          boxShadow: 'none',
        },
        '&.-shadowless': {
          boxShadow: 'none',
          '&:active': {
            boxShadow: 'none',
          },
        },
        // ---------
        '&.-inverted': {
          transition: 'unset',
          backgroundColor: 'unset',
          color: invertedColor,
          borderWidth,
          borderStyle: 'solid',
          borderColor: invertedColor,
          '&:hover': {
            background: invertedColor,
            color: palette.text.primary,
          },
          '& .MuiButton-label': {
            fontWeight: 'bold',
          },
        },
      },
      containedPrimary: {
        '&.-inverted': {
          borderColor: palette.primary.main,
          color: palette.primary.main,
          '&:hover': {
            background: palette.primary.main,
            color: palette.common.white,
          },
        },
        [`&.-loading ${loaderSelector}`]: {
          color: palette.common.white,
        },
      },
      containedSecondary: {
        '&.-inverted': {
          borderColor: palette.secondary.main,
          color: palette.secondary.main,
          '&:hover': {
            background: palette.secondary.main,
            color: palette.common.white,
          },
        },
        [`&.-loading ${loaderSelector}`]: {
          color: palette.common.white,
        },
      },
      outlined: {
        '&.-inverted': {
          transition: 'unset',
          borderWidth,
          borderColor: 'rgba(255, 255, 255, 0.54)',
          color: 'rgba(255, 255, 255, 0.87)',
          '&:hover': {
            borderColor: invertedColor,
            background: 'rgba(255, 255, 255, 0.24)',
            color: invertedColor,
          },
          '& .MuiButton-label': {
            fontWeight: 'bold',
          },
        },
      },
      outlinedPrimary: {
        '&.-inverted': {
          borderWidth,
          '&:hover': {
            color: palette.primary.main,
            borderColor: palette.primary.main,
            backgroundColor: Color(palette.primary.main)
              .alpha(0.1)
              .lighten(0.5)
              .string(),
          },
        },
        [`&.-loading ${loaderSelector}`]: {
          color: palette.primary.main,
        },
      },
      outlinedSecondary: {
        '&.-inverted': {
          borderWidth,
          '&:hover': {
            color: palette.secondary.main,
            borderColor: palette.secondary.main,
            backgroundColor: Color(palette.secondary.main)
              .alpha(0.1)
              .lighten(0.5)
              .string(),
          },
        },
        [`&.-loading ${loaderSelector}`]: {
          color: palette.secondary.main,
        },
      },
    },
  };
};

export default Button;
