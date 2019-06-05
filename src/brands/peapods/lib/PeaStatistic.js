import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const styles = theme => ({
  root: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontWeight: 500,
    fontSize: 14,
    color: theme.palette.text.hint,
  },
  value: {
    fontWeight: 'bold',
  },
});

const PeaStatistic = ({
  className,
  classes,
  label,
  value,
  labelProps,
  valueProps,
}) => (
  <Box className={clsx(classes.root, className)} display={'flex'}>
    <Typography
      variant={'h6'}
      color={'primary'}
      className={classes.value}
      {...valueProps}
    >
      {value}
    </Typography>
    <Typography className={classes.label} {...labelProps}>
      {label}
    </Typography>
  </Box>
);

PeaStatistic.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
  label: PropTypes.string,
  labelProps: PropTypes.shape({}),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  valueProps: PropTypes.shape({}),
};
PeaStatistic.defaultProps = {
  className: '',
  label: '',
  labelProps: {},
  value: '',
  valueProps: {},
};
PeaStatistic.metadata = {
  name: 'Pea Statistic',
};
PeaStatistic.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default withStyles(styles, { name: 'PeaStatistic' })(PeaStatistic);
