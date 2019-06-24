import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from 'components/atoms/Box';
import Typography from 'extensions/Typography';

const Row = ({
  left,
  leftItemProps,
  right,
  rightItemProps,
  children,
  labelLeft,
}) => (
  <Grid container justify={'center'}>
    <Grid item xs={12} sm={6} md={4} {...leftItemProps}>
      {labelLeft && (
        <Typography gutterBottom>
          <b>{labelLeft}</b>
        </Typography>
      )}
      {left}
    </Grid>
    <Grid item xs={12} sm={6} {...rightItemProps}>
      <Box
        pt={{ xs: 0, sm: labelLeft ? '25px' : 0 }}
        pl={{ xs: 0, sm: 4 }}
        pb={3}
      >
        {right}
      </Box>
    </Grid>
    {children && (
      <Grid item xs={12} sm={12} md={10}>
        {children}
      </Grid>
    )}
  </Grid>
);

Row.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
  children: PropTypes.node,
  labelLeft: PropTypes.node,
  leftItemProps: PropTypes.shape({}),
  rightItemProps: PropTypes.shape({}),
};
Row.defaultProps = {
  left: null,
  right: null,
  children: null,
  labelLeft: null,
  leftItemProps: {},
  rightItemProps: {},
};

export default Row;
