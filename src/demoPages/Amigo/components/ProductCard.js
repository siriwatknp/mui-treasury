import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/styles';
import Typography from 'components/predefined/Typography';

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

const ProductCard = ({ name, price, image, bordered }) => {
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
        <Box px={2} pb={2}>
          <Typography
            variant={'subtitle1'}
            secondFamily
            weight={'bold'}
            gutterBottom
          >
            {name}
          </Typography>
          <Typography color={'primary'} weight={500}>
            $ {price}
          </Typography>
        </Box>
      </Box>
    </ButtonBase>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string,
  bordered: PropTypes.bool,
};
ProductCard.defaultProps = {
  image: '',
  bordered: false,
};
ProductCard.data = [
  {
    name: 'Nike Air Max Sequent 4 Shield',
    price: 145,
    image:
      // eslint-disable-next-line max-len
      'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/knjjwmbkdlh2wrvyxrgt/air-max-sequent-4-shield-shoe-Kg4gLm.jpg',
  },
  {
    name: 'Nike Vaporfly 4% Flynit',
    price: 249,
    image:
      // eslint-disable-next-line max-len
      'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/rlpfdp3vppliikmmv5lp/vaporfly-4-flyknit-running-shoe-Br70Kg.jpg',
  },
  {
    name: 'Nike Air Trainer 3 QS',
    price: 129,
    image:
      // eslint-disable-next-line max-len
      'https://images.nike.com/is/image/DotCom/PDP_HERO_ZOOM/CJ1436_100_A_PREM/air-trainer-3-qs-shoe.jpg',
  },
  {
    name: 'Yeezy Boost 700',
    price: 279,
    image:
      // eslint-disable-next-line max-len
      'https://media.sivasdescalzo.com/media/catalog/product/E/G/EG7596_sivasdescalzo-adidas-YEEZY-BOOST-700-EG7596-1.jpg',
  },
  {
    name: 'Predator 19.1 Trainers',
    price: 109,
    image:
      // eslint-disable-next-line max-len
      'https://assets.adidas.com/images/w_600,h_600,f_auto,q_auto:sensitive,fl_lossy/c4163f6d9d9a482285daa9f50112f4cc_9366/Predator_19.1_Trainers_White_BC0556_01_standard.jpg',
  },
  {
    name: 'Nemeziz Tango 18.1 Trainers',
    price: 109,
    image:
      // eslint-disable-next-line max-len
      'https://assets.adidas.com/images/w_600,h_600,f_auto,q_auto:sensitive,fl_lossy/8ff4f3b68a30474081f4a9b60111189a_9366/Nemeziz_Tango_18.1_Trainers_Blue_D98018_01_standard.jpg',
  },
  {
    name: 'X 18.1 Firm Ground Boots',
    price: 129,
    image:
      // eslint-disable-next-line max-len
      'https://assets.adidas.com/images/w_600,h_600,f_auto,q_auto:sensitive,fl_lossy/49da0449f99c44fe847ca9b600e1482e_9366/X_18.1_Firm_Ground_Boots_Black_BB9346_01_standard.jpg',
  },
  {
    name: 'Dame 5 Shoes',
    price: 89,
    image:
      // eslint-disable-next-line max-len
      'https://assets.adidas.com/images/w_600,h_600,f_auto,q_auto:sensitive,fl_lossy/13aa267673c54fe69200a99101535bf3_9366/Dame_5_Shoes_Turquoise_BB9314_01_standard.jpg',
  },
  {
    name: 'POD-S3.1 Shoes',
    price: 99,
    image:
      // eslint-disable-next-line max-len
      'https://assets.adidas.com/images/w_600,h_600,f_auto,q_auto:sensitive,fl_lossy/2f488fe90ddf43fdbe77a8c100ca2bb3_9366/POD_S3.1_Shoes_Black_AQ1059_01_standard.jpg',
  },
  {
    name: 'Nike Flex RN 2019',
    price: 85,
    image:
      // eslint-disable-next-line max-len
      'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/qavgxezz3gcdechtgrkg/flex-rn-2019-mens-running-shoe-NPgrwv.jpg',
  },
  {
    name: 'Air Jordan XXXIII',
    price: 175,
    image:
      // eslint-disable-next-line max-len
      'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/kpbgnt19ylkljmqwhsib/air-jordan-xxxiii-basketball-shoe-2hbkM1.jpg',
  },
  {
    name: 'Nike Air Zoom Pegasus 35 By You',
    price: 140,
    image:
      // eslint-disable-next-line max-len
      'https://render.nikeid.com/ir/render/nikeidrender/PEG35su18_v1?obj=/s/shadow/shad&show&color=000000&obj=/s/g1&color=202020&show&obj=/s/g13&color=242424&show&obj=/s/g17&color=b8b2a2&show&obj=/s/g3&color=202020&show&obj=/s/g4&color=202020&show&obj=/s/g16&color=c78f5d&show&obj=/s/g15&color=141414&show&obj=/s/g7&color=141414&show&obj=/s/g2/metal&color=fff7e0&show&obj=/s/g11&color=535559&show&obj=/s/g14&color=303030&show&obj=/s/g10&color=535559&show&obj=/s/g18&color=333333&show&obj=/s/g12&color=ffffff&show&obj=/s&req=object&fmt=png-alpha&icc=AdobeRGB&wid=1500',
  },
];

export default ProductCard;
