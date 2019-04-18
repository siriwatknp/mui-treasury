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
  size: PropTypes.oneOf(['small', 'default', 'big', 'large']),
  color: PropTypes.oneOf(['', 'danger', 'primary', 'secondary']),
  bgColor: PropTypes.oneOf(['', 'danger', 'primary', 'secondary']),
};
Icon.defaultProps = {
  className: '',
  children: null,
  fontAwesomeProps: {},
  icon: '',
  inverted: false,
  link: false,
  size: 'default',
  color: '',
  bgColor: '',
};
Icon.getTheme = () => ({
  MuiIcon: {
    root: {
      '& .MuiIcon--fa': {
        verticalAlign: 'unset',
        padding: 1,
      },
    },
  },
});

export default Icon;
