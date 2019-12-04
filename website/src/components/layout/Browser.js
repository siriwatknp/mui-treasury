import React from 'react';
import PropTypes from 'prop-types';
import Box from 'components/atoms/Box';

const grey = '#f0f0f0';
const border = `2px solid ${grey}`;
const Browser = ({ children, ...props }) => {
  const commonProps = {
    width: 12,
    height: 12,
    borderRadius: '50%',
    ml: 1,
  };
  return (
    <Box
      position={'relative'}
      borderRadius={8}
      border={border}
      overflow={'hidden'}
      {...props}
    >
      <Box bgcolor={grey} borderBottom={border} py={1} {...Box.alignCenter}>
        <Box {...commonProps} bgcolor={'grey.400'} />
        <Box {...commonProps} bgcolor={'grey.300'} />
        <Box {...commonProps} bgcolor={'grey.300'} />
        <Box
          ml={2}
          width={{ xs: 150, sm: 200, md: 280 }}
          height={12}
          borderRadius={10}
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
