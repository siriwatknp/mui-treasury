import React from 'react';
import PropTypes from 'prop-types';
import Box from 'components/atoms/Box';

const Browser = ({ children }) => {
  const commonProps = {
    width: 12,
    height: 12,
    borderRadius: '50%',
    ml: 1,
  };
  return (
    <Box borderRadius={8} border={'2px solid #f5f5f5'}>
      <Box
        bgcolor={'#f5f5f5'}
        borderBottom={'2px solid #f5f5f5'}
        py={1}
        {...Box.alignCenter}
      >
        <Box {...commonProps} bgcolor={'#E7586A'} />
        <Box {...commonProps} bgcolor={'#EFAD41'} />
        <Box {...commonProps} bgcolor={'#54CA1C'} />
        <Box
          ml={2}
          width={{ xs: 150, sm: 200, md: 280 }}
          height={12}
          borderRadius={2}
          bgcolor={'common.white'}
        />
      </Box>
      {children}
    </Box>
  );
};

Browser.propTypes = {
  children: PropTypes.node,
};
Browser.defaultProps = {
  children: null,
};

export default Browser;
