import React from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';
import MuiIcon from '@material-ui/core/Icon';

const Icon = ({
  className,
  children,
  icon,
  size,
  link,
  color,
  bgColor,
  shape,
  inverted,
  fontAwesomeProps,
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
        size && `-${size}`,
        color && `-${color}`,
        bgColor && `-bg-${bgColor}`,
        inverted && '-inverted',
        link && '-link',
        shape && `-${shape}`,
      )}
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
  color: PropTypes.oneOf(['', 'danger', 'primary', 'secondary']),
  bgColor: PropTypes.oneOf(['', 'default', 'danger', 'primary', 'secondary']),
  shape: PropTypes.oneOf(['', 'square', 'circular', 'round']),
};
Icon.defaultProps = {
  className: '',
  children: null,
  fontAwesomeProps: {},
  icon: '',
  inverted: false,
  link: false,
  size: '',
  color: '',
  bgColor: '',
  shape: '',
};
Icon.getTheme = ({ palette, transitions }) => {
  const invertedColor = palette.common.white;
  return {
    MuiIcon: {
      root: {
        verticalAlign: 'text-top',
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
        '&.-primary': {
          color: palette.primary.main,
        },
        '&.-secondary': {
          color: palette.secondary.main,
        },
        '&.-danger': {
          color: palette.error.main,
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
