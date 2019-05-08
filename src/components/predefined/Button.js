/**
 * Current VERSION 1.2
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
    icon ? <span className={'MuiButton-span'}>{children}</span> : children;
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
  shape: PropTypes.oneOf(['', 'chubby', 'circular', 'square']),
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
Button.getTheme = ({ breakpoints, palette, spacing, shadows }) => {
  const extraStyles = {
    // if you want to extend predefined button
    // add style to below variable is recommended.
    root: {
      // ex.
      // minHeight: 44,
      // color: palette.text.secondary,
    },
    containedPrimary: {},
    containedSecondary: {},
    outlinedPrimary: {},
    outlinedSecondary: {},
  };
  const labelSizes = {
    small: 12,
    normal: 14,
    big: 16,
    large: 20,
  };
  const minHeights = {
    small: 32,
    normal: 40,
    big: 48,
    large: 56,
  };
  const buttonPadding = '0em 1.15em';
  const elongatedWidth = 160;
  const defaultFontWeight = 500;
  const defaultLetterSpacing = 0;
  const defaultTextTransform = 'none';
  const invertedColor = palette.common.white;
  const outlinedBorderWidth = 1;
  const iconSelector =
    '.MuiButton-label:not([class*="-icon-isolated"]) > .material-icons, > svg';
  const loaderSelector = '.MuiButton-label .MuiButton-loader';
  const defaultIconSize = 20;
  return {
    MuiButton: {
      root: {
        ...extraStyles.root,
        fontSize: labelSizes.normal,
        padding: buttonPadding,
        minHeight: minHeights.normal,
        minWidth: minHeights.normal,
        // STANDALONE
        '&.-color-danger': {
          color: palette.error.main,
          '&:hover': {
            backgroundColor: Color(palette.error.main)
              .fade(0.92)
              .toString(),
          },
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
          [`& ${iconSelector}`]: {
            '&:first-of-type': {
              marginLeft: '-0.4em',
            },
            '&:last-of-type': {
              marginRight: '-0.4em',
            },
          },
          '& .MuiButton-span': {
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
        [`&:not([class*="-size"]) ${iconSelector}`]: {
          '&[class*="-bg"]': {
            fontSize: labelSizes.normal + 2,
          },
        },
        '&:not([class*="-shape-circular"])': {
          '& .MuiButton-label > .material-icons, > svg': {
            // don't change upper code to var:iconSelector
            // fixed styles
            '&:first-of-type': {
              marginRight: spacing.unit,
            },
            '&:last-of-type': {
              marginLeft: spacing.unit,
            },
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
          fontSize: labelSizes.small,
          minHeight: minHeights.small,
          minWidth: minHeights.small,
          padding: buttonPadding,
          [`& ${iconSelector}`]: {
            fontSize: 18,
            '&[class*="-bg"]': {
              fontSize: '0.75rem',
            },
          },
        },
        '&.-size-big': {
          fontSize: labelSizes.big,
          minHeight: minHeights.big,
          minWidth: minHeights.big,
          padding: buttonPadding,
          [`& ${iconSelector}`]: {
            fontSize: 24,
            '&[class*="-bg"]': {
              fontSize: '1.25rem',
            },
          },
        },
        '&.-size-large': {
          fontSize: labelSizes.large,
          minHeight: minHeights.large,
          minWidth: minHeights.large,
          padding: buttonPadding,
          [`& ${iconSelector}`]: {
            fontSize: 26,
            '&[class*="-bg"]': {
              fontSize: '1.5rem',
            },
          },
        },
        '&.-shape-square': {
          borderRadius: 0,
        },
        '&.-shape-chubby': {
          borderRadius: 100,
          padding: '6px 10px',
          '& .MuiButton-span': {
            '&:first-of-type': {
              marginLeft: '0.4em',
            },
            '&:last-of-type': {
              marginRight: '0.4em',
            },
          },
        },
        '&.-shape-circular': {
          borderRadius: '50%',
          padding: 12,
          [`& ${iconSelector}`]: {
            margin: 0,
            fontSize: 20,
          },
        },
        // COMBINATION
        '&.-shape-circular.-size-small': {
          padding: spacing.unit * 1.25,
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
          padding: spacing.unit * 1.75,
          [`& ${iconSelector}`]: {
            fontSize: 36,
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
          '&:hover': {
            backgroundColor: palette.error.dark,
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: palette.error.dark,
            },
          },
          '&$disabled': {
            color: palette.action.disabled,
            boxShadow: shadows[0],
            backgroundColor: palette.action.disabledBackground,
          },
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
          borderWidth: outlinedBorderWidth,
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
        ...extraStyles.containedPrimary,
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
        ...extraStyles.containedSecondary,
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
        '&.-color-danger': {
          borderColor: Color(palette.error.main)
            .fade(0.5)
            .toString(),
          '&:hover': {
            borderColor: palette.error.main,
          },
        },
        '&.-inverted': {
          borderWidth: outlinedBorderWidth,
          transition: 'unset',
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
        ...extraStyles.outlinedPrimary,
        borderWidth: outlinedBorderWidth,
        '&:hover': {
          borderWidth: outlinedBorderWidth,
        },
        '&.-inverted': {
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
        ...extraStyles.outlinedSecondary,
        borderWidth: outlinedBorderWidth,
        '&:hover': {
          borderWidth: outlinedBorderWidth,
        },
        '&.-inverted': {
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
