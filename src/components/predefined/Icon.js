import React from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';
import MuiIcon from '@material-ui/core/Icon';

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

const Icon = ({
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
        color && `-${color}`,
        inverted && '-inverted',
        link && '-link',
        push && `-push-${push}`,
        shape && `-${shape}`,
        size && `-${size}`,
      )}
      color={injectColor(color)}
    >
      {mainIcon.includes('fa-') ? (
        <i className={cx('MuiIcon--fa', mainIcon)} {...fontAwesomeProps} />
      ) : (
        mainIcon
      )}
    </MuiIcon>
  );
};

Icon.propTypes = {
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
Icon.defaultProps = {
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
  shape: '',
};
Icon.getTheme = ({ palette, transitions, spacing }) => {
  const invertedColor = palette.common.white;
  return {
    MuiIcon: {
      root: {
        verticalAlign: 'sub',
        '&.-push-left': {
          marginLeft: spacing.unit,
        },
        '&.-push-right': {
          marginRight: spacing.unit,
        },
        '& .MuiIcon--fa': {
          verticalAlign: 'unset',
          padding: 2,
          '&.svg-inline--fa': {
            width: '1em',
          },
        },
        '& i.MuiIcon--fa': {
          display: 'block',
          '&:before': {
            display: 'block',
            fontSize: 20,
          },
        },
        '&.-inverted': {
          color: invertedColor,
        },
        '&.-small': {
          fontSize: 20,
          '& i.MuiIcon--fa:before': {
            fontSize: 16,
          },
        },
        '&.-big': {
          fontSize: 28,
          '& i.MuiIcon--fa:before': {
            fontSize: 24,
          },
        },
        '&.-large': {
          fontSize: 32,
          '& i.MuiIcon--fa:before': {
            fontSize: 28,
          },
        },
        '&.-link': {
          cursor: 'pointer',
          color: palette.text.primary,
          transition: transitions.create(),
          '&:hover': {
            transform: 'scale(1.2)',
          },
          '&.-inverted': {
            color: invertedColor,
          },
        },
        '&[class*="-bg"]': {
          width: '1.5em',
          height: '1.5em',
          padding: '0.25em',
        },
        '&.-bg-default': {
          backgroundColor: palette.grey[200],
          '&.-link.-inverted': {
            color: palette.text.primary,
          },
        },
        '&.-bg-primary': {
          backgroundColor: palette.primary.main,
          color: invertedColor,
        },
        '&.-bg-secondary': {
          backgroundColor: palette.secondary.main,
          color: invertedColor,
        },
        '&.-bg-danger': {
          backgroundColor: palette.error.main,
          color: invertedColor,
        },
        '&.-bg-white': {
          backgroundColor: invertedColor,
        },
        '&.-bg-lightPrimary': {
          backgroundColor: palette.primary.light,
        },
        '&.-bg-lightSecondary': {
          backgroundColor: palette.secondary.light,
        },
        '&.-square': {
          borderRadius: 0,
        },
        '&.-circular': {
          borderRadius: '50%',
        },
        '&.-round': {
          borderRadius: 4,
        },
      },
    },
  };
};

export default Icon;
