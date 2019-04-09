import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import { unstable_Box as Box } from '@material-ui/core/Box';
import PeaIcon from './PeaIcon';

const styles = () => ({
  root: {},
  label: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

const PeaMenuItem = ({
  className,
  classes,
  label,
  icon,
  BadgeProps,
  IconProps,
  labelProps,
}) => (
  <Box className={clsx(classes.root, className)} display={'flex'}>
    <Badge badgeContent={4} color="error" {...BadgeProps}>
      <PeaIcon color={'secondary'} icon={icon} {...IconProps} />
    </Badge>
    <Box px={2}>
      <Typography color={'secondary'} className={classes.label} {...labelProps}>
        {label}
      </Typography>
    </Box>
  </Box>
);

PeaMenuItem.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  classes: PropTypes.shape({}).isRequired,
  BadgeProps: PropTypes.shape({}),
  IconProps: PropTypes.shape({}),
  label: PropTypes.string,
  labelProps: PropTypes.shape({}),
};
PeaMenuItem.defaultProps = {
  BadgeProps: {},
  IconProps: {},
  labelProps: {},
  label: '',
  className: '',
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
