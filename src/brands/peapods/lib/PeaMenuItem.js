import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PeaIcon from './PeaIcon';

const styles = () => ({
  root: {
    cursor: 'pointer',
  },
  label: {
    fontWeight: 'bold',
    lineHeight: 1,
  },
});

const PeaMenuItem = ({
  className,
  classes,
  label,
  icon,
  badgeShowed,
  badgeContent,
  BadgeProps,
  IconProps,
  labelProps,
  onClick,
  isVertical,
  ...props
}) => {
  const renderIcon = () =>
    icon && <PeaIcon color={'secondary'} icon={icon} {...IconProps} />;

  return (
    <Box
      className={clsx(classes.root, className)}
      display={'flex'}
      onClick={onClick}
      {...props}
    >
      {badgeShowed ? (
        <Badge badgeContent={badgeContent} color="error" {...BadgeProps}>
          {renderIcon()}
        </Badge>
      ) : (
        renderIcon()
      )}

      {isVertical ? (
        <Typography
          color={'secondary'}
          className={clsx(classes.label, 'PeaMenuItem-label')}
          {...labelProps}
        >
          {label}
        </Typography>
      ) : (
        <Box px={1} display={'flex'} alignItems={'center'}>
          <Typography
            color={'secondary'}
            className={clsx(classes.label, 'PeaMenuItem-label')}
            {...labelProps}
          >
            {label}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

PeaMenuItem.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  classes: PropTypes.shape({
    label: PropTypes.string,
    root: PropTypes.string,
  }).isRequired,
  badgeShowed: PropTypes.bool,
  badgeContent: PropTypes.number,
  BadgeProps: PropTypes.shape({}),
  IconProps: PropTypes.shape({}),
  label: PropTypes.string,
  labelProps: PropTypes.shape({}),
  isVertical: PropTypes.bool,
};

PeaMenuItem.defaultProps = {
  onClick: () => {},
  BadgeProps: {},
  IconProps: {},
  labelProps: {},
  badgeShowed: false,
  badgeContent: undefined,
  label: '',
  className: '',
  isVertical: false,
  icon: undefined,
};

PeaMenuItem.metadata = {
  name: 'Pea Menu Item',
  libraries: [
    {
      text: 'clsx',
      link: 'https://github.com/lukeed/clsx',
    },
  ],
};

PeaMenuItem.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default withStyles(styles, { name: 'PeaMenuItem' })(PeaMenuItem);
