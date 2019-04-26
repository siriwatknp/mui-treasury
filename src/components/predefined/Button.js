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
        label: cx('MuiButton-label', classes.label),
        disabled: cx('MuiButton-disabled', classes.disabled),
      }}
      className={cx(
        className,
        inverted && '-inverted',
        loading && '-loading',
        elongated && '-elongated',
        color && `-color-${color}`,
        size && `-${size}`,
        shape && `-${shape}`,
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
  iconPosition: 'start',
  iconProps: {},
  loaderProps: {},
};
Button.getTheme = ({ breakpoints, palette, spacing }) => {
  const elongatedWidth = 160;
  const defaultTextTransform = 'none';
  const invertedColor = palette.common.white;
  const borderWidth = 2;
  return {
    MuiButton: {
      root: {
        '&.-labelExpanded': {
          '& .MuiButton-text': {
            marginLeft: 'auto',
            marginRight: 'auto',
          },
        },
        '&.-chubby': {
          borderRadius: 100,
          padding: '6px 12px',
        },
        '&.-elongated': {
          minWidth: elongatedWidth,
        },
        '&.-circular': {
          borderRadius: '50%',
          padding: spacing.unit,
          minWidth: 'auto',
          '& .MuiButton-label > .material-icons, > svg': {
            margin: 0,
            fontSize: 20,
          },
          '&.-small': {
            padding: spacing.unit,
            '& .MuiButton-label > .material-icons, > svg': {
              fontSize: 16,
            },
          },
          '&.-big': {
            padding: spacing.unit * 1.5,
            '& .MuiButton-label > .material-icons, > svg': {
              fontSize: 28,
            },
          },
          '&.-large': {
            padding: spacing.unit * 2,
            '& .MuiButton-label > .material-icons, > svg': {
              fontSize: 32,
            },
          },
        },
        '&.-mobileFullWidth': {
          [breakpoints.only('xs')]: {
            width: '100%',
          },
        },
        '&.-color-danger': {
          color: palette.error.main,
        },
        '&.-inverted': {
          color: invertedColor,
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.2)',
          },
        },
        '&.-compact': {
          paddingTop: 3,
          paddingBottom: 3,
        },
        '&.-small': {
          padding: '3px 12px',
          fontSize: '0.75rem',
          '& .MuiButton-label > .material-icons, > svg': {
            fontSize: '0.75rem',
          },
        },
        '&.-big': {
          padding: '8px 24px',
          fontSize: '1rem',
          '& .MuiButton-label > .material-icons, > svg': {
            fontSize: '1rem',
          },
          '&.-compact': {
            paddingTop: 4,
            paddingBottom: 4,
          },
        },
        '&.-large': {
          padding: '12px 32px',
          fontSize: '1.25rem',
          '& .MuiButton-label > .material-icons, > svg': {
            fontSize: '1.25rem',
          },
          '&.-compact': {
            paddingTop: 6,
            paddingBottom: 6,
          },
        },
        '&$disabled.-inverted': {
          borderColor: 'rgba(255, 255, 255, 0.38)',
          color: 'rgba(255, 255, 255, 0.38)',
        },
        // LOADER
        '&.-loading': {
          pointerEvents: 'none',
          '& .MuiButton-label': {
            color: 'rgba(0,0,0,0)',
            '& .MuiButton-loader': {
              color: palette.text.primary,
            },
          },
          '&.-inverted': {
            '& .MuiButton-label .MuiButton-loader': {
              color: invertedColor,
            },
          },
        },
        '& .MuiButton-loader': {
          position: 'absolute',
          top: '50%',
          left: '50%',
        },
      },
      label: {
        letterSpacing: '0.25px',
        textTransform: defaultTextTransform,
        // ICON
        '& > .material-icons, > svg': {
          fontSize: 16,
          '&:first-child': {
            marginRight: spacing.unit,
          },
          '&:last-child': {
            marginLeft: spacing.unit,
          },
        },
      },
      contained: {
        '&.-color-danger': {
          backgroundColor: palette.error.main,
          color: invertedColor,
        },
        '&$focusVisible.-shadowless': {
          boxShadow: 'none',
        },
        '&.-shadowless': {
          boxShadow: 'none',
          '&:active': {
            boxShadow: 'none',
          },
        },
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
        '&.-loading .MuiButton-label .MuiButton-loader': {
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
        '&.-loading .MuiButton-label .MuiButton-loader': {
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
        '&.-loading .MuiButton-label .MuiButton-loader': {
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
        '&.-loading .MuiButton-label .MuiButton-loader': {
          color: palette.secondary.main,
        },
      },
    },
  };
};

export default Button;
