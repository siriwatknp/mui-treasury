import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from 'extensions/Typography';

const ProductInfo = ({ name, price, inverted, rootBoxProps }) => (
  <Box px={2} pb={2} {...rootBoxProps}>
    <Typography
      variant={'subtitle1'}
      secondFamily
      weight={'bold'}
      gutterBottom
      inverted={inverted}
    >
      {name}
    </Typography>
    <Typography color={'primary'} weight={'bold'} inverted={inverted}>
      $ {price}
    </Typography>
  </Box>
);

ProductInfo.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  inverted: PropTypes.bool,
  rootBoxProps: PropTypes.shape({}),
};
ProductInfo.defaultProps = {
  inverted: false,
  rootBoxProps: {},
};

export default ProductInfo;
