import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/styles';
import ProductInfo from './ProductInfo';

const useStyles = makeStyles(({ palette }) => ({
  buttonBase: {
    display: 'inline-block',
    height: '100%',
    width: '100%',
  },
  productImage: {
    position: 'relative',
    paddingBottom: '100%',
    overflow: 'hidden',
    backgroundColor: palette.grey[100],
  },
  img: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    objectFit: 'cover',
  },
}));

const ProductCardFront = ({ name, price, image, bordered }) => {
  const classes = useStyles();
  return (
    <ButtonBase className={classes.buttonBase}>
      <Box
        height={'100%'}
        {...bordered && {
          border: '1px solid #f0f0f0',
          borderTop: 'none',
          marginLeft: '-1px',
          marginTop: '-1px',
        }}
      >
        <Box p={2}>
          <div className={classes.productImage}>
            <img className={classes.img} src={image} alt={'product'} />
          </div>
        </Box>
        <ProductInfo name={name} price={price} />
      </Box>
    </ButtonBase>
  );
};

ProductCardFront.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string,
  bordered: PropTypes.bool,
};
ProductCardFront.defaultProps = {
  image: '',
  bordered: false,
};

export default ProductCardFront;
