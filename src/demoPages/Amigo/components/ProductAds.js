import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from 'extensions/Typography';
import Button from 'extensions/Button';

const useStyles = makeStyles(({ palette, spacing }) => ({
  bg: ({ bgColor }) => ({
    overflow: 'hidden',
    ...(bgColor === 'purple1' && {
      backgroundColor: '#9380cc',
    }),
    ...(bgColor === 'purple2' && {
      backgroundColor: '#be92cc',
    }),
  }),
  tag: {
    background: palette.common.white,
    padding: spacing(0, 1),
  },
  overline: {
    lineHeight: 1,
    color: 'rgba(255, 255, 255, 0.87)',
  },
  image: ({ contentSide, imageCentered }) => ({
    maxWidth: '60%',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))',
    ...(imageCentered && {
      top: '50%',
      transform: 'translateY(-50%)',
    }),
    ...(contentSide === 'left'
      ? {
          right: 0,
        }
      : {
          left: 0,
        }),
  }),
}));

const ProductAds = ({
  title,
  overline,
  tag,
  image,
  imageCentered,
  actionLabel,
  bgColor,
  contentSide,
  rootBoxProps,
  contentBoxProps,
}) => {
  const classes = useStyles({ bgColor, contentSide, imageCentered });
  const sides = {
    left: 'left',
    right: 'right',
  };
  return (
    <Box
      position={'relative'}
      classes={{ root: classes.bg }}
      py={3}
      px={{ xs: 2, md: 3 }}
      height={'100%'}
      {...rootBoxProps}
    >
      <Box
        textAlign={sides[contentSide]}
        position={'relative'}
        zIndex={1}
        {...contentSide === 'right' && { ml: 'auto' }}
        {...contentBoxProps}
      >
        {tag && (
          <Typography
            className={classes.tag}
            display={'inline-block'}
            bottomSpace={'medium'}
            weight={'bold'}
          >
            {tag}
          </Typography>
        )}
        {overline && (
          <Typography
            className={classes.overline}
            gutterBottom
            variant={'overline'}
            display={'block'}
            weight={'bold'}
          >
            {overline}
          </Typography>
        )}
        <Typography
          bottomSpace={'medium'}
          inverted
          secondFamily
          weight={'bold'}
          variant={'h5'}
        >
          {title}
        </Typography>
        <Button shape={'chubby'} variant={'outlined'} inverted>
          {actionLabel}
        </Button>
      </Box>
      <img className={classes.image} alt={'product'} src={image} />
    </Box>
  );
};

ProductAds.propTypes = {
  title: PropTypes.string.isRequired,
  overline: PropTypes.string,
  tag: PropTypes.string,
  image: PropTypes.string,
  imageCentered: PropTypes.bool,
  actionLabel: PropTypes.string,
  bgColor: PropTypes.string,
  contentSide: PropTypes.oneOf(['right', 'left']),
  rootBoxProps: PropTypes.shape({}),
  contentBoxProps: PropTypes.shape({}),
};
ProductAds.defaultProps = {
  overline: '',
  tag: '',
  image: '',
  imageCentered: false,
  actionLabel: 'MORE',
  bgColor: '',
  contentSide: 'left',
  rootBoxProps: {},
  contentBoxProps: {},
};
ProductAds.test1 = {
  tag: 'SALE',
  overline: 'Jean Denim',
  title: 'SALES COLLECTION 2018',
  actionLabel: 'MORE',
  bgColor: 'purple1',
  image:
    // eslint-disable-next-line max-len
    'https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/08/16121006/Slim-Fit-Jean-PNG-Free-Download.png',
};
ProductAds.test2 = {
  tag: 'NEW',
  overline: 'Eye Glasses',
  title: 'PREMIUM MOTTO LENS',
  actionLabel: 'SHOP NOW',
  bgColor: 'purple2',
  imageCentered: true,
  image:
    // eslint-disable-next-line max-len
    'https://www.solaris.fr/publicmedia/original/111/321/8/fr/e93d50dcaa554ab6e1d42e1c8d8da7de1f2e473b_190605049051_front_01_police_spl636_0568_55_pair.png',
};

export default ProductAds;
