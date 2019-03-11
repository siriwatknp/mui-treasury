import React from 'react';
import PropTypes from 'prop-types';
import Box from './Box';

const Swatch = ({ size, width, height, color, borderRadius }) => (
  <Box
    display={'inline-block'}
    width={width || size}
    height={height || size}
    borderRadius={borderRadius}
    p={`${borderRadius / 2}px`}
    border={`2px solid ${color}`}
  >
    <Box
      bgcolor={color}
      borderRadius={borderRadius / 2}
      height={'100%'}
      width={'100%'}
    />
  </Box>
);

Swatch.propTypes = {
  color: PropTypes.string,
  borderRadius: PropTypes.number,
  size: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};
Swatch.defaultProps = {
  color: '#ffffff',
  borderRadius: 4,
  size: 36,
  width: null,
  height: null,
};

export default Swatch;
