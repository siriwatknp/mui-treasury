import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import ParallaxSlide from 'components/slides/ParallaxSlide';
import SimpleArrow from 'components/arrows/SimpleArrow';
import IndicatorGroup from 'components/indicators/IndicatorGroup';
import SimpleIndicator from 'components/indicators/SimpleIndicator';
import Typography from 'components/predefined/Typography';

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  root: {
    // background: 'radial-gradient(circle, #f5f5f5 0%, #202020 56%)',
  },
  imageContainer: {
    display: 'block',
  },
  image: {
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  arrow: {
    display: 'none',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    [breakpoints.up('sm')]: {
      display: 'inline-flex',
    },
  },
  arrowLeft: {
    left: 0,
    [breakpoints.up('lg')]: {
      left: -64,
    },
  },
  arrowRight: {
    right: 0,
    [breakpoints.up('lg')]: {
      right: -64,
    },
  },
  text: {
    fontFamily: 'Poppins, san-serif',
    fontWeight: 900,
    position: 'absolute',
    zIndex: 1,
    color: palette.common.white,
    padding: '0 8px',
    [breakpoints.up('sm')]: {
      padding: '0 16px',
    },
    [breakpoints.up('md')]: {
      padding: '0 24px',
    },
  },
  title: {
    top: 0,
    left: '20%',
    fontSize: 40,
    lineHeight: 1.2,
    backgroundColor: '#a5a5a5',
    [breakpoints.up('sm')]: {
      fontSize: 60,
    },
    [breakpoints.up('md')]: {
      fontSize: 72,
    },
  },
  subtitle: {
    top: 44,
    left: '0%',
    fontSize: 56,
    lineHeight: 1.3,
    backgroundColor: '#888888',
    [breakpoints.up('sm')]: {
      top: 72,
      left: '10%',
      fontSize: 80,
    },
    [breakpoints.up('md')]: {
      top: 80,
      fontSize: 104,
    },
  },
}));

const ParallaxCarousel = ({ data }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root} position={'relative'}>
      <ParallaxSlide
        renderElements={({ index, onChangeIndex }) => (
          <>
            <SimpleArrow
              className={cx(classes.arrow, classes.arrowLeft)}
              direction={'left'}
              disabled={index === 0}
              onClick={() => onChangeIndex(index - 1)}
            />
            <SimpleArrow
              className={cx(classes.arrow, classes.arrowRight)}
              direction={'right'}
              disabled={index === data.length - 1}
              onClick={() => onChangeIndex(index + 1)}
            />
            <IndicatorGroup>
              {data.map(({ id }, i) => (
                <SimpleIndicator
                  key={id}
                  active={i === index}
                  onClick={() => onChangeIndex(i)}
                />
              ))}
            </IndicatorGroup>
          </>
        )}
      >
        {({ injectStyle }) =>
          data.map(({ id, title, subtitle, image }, i) => (
            <Box
              key={id}
              position={'relative'}
              overflow={'hidden'}
              pt={{ xs: 8, sm: 10, md: 13 }}
            >
              <Typography
                className={cx(classes.text, classes.title)}
                style={injectStyle(i, 80)}
              >
                {title}
              </Typography>
              <Typography
                className={cx(classes.text, classes.subtitle)}
                style={injectStyle(i, 40)}
              >
                {subtitle}
              </Typography>
              <Box
                className={classes.imageContainer}
                position={'relative'}
                pb={'56.25%'}
                zIndex={2}
              >
                <img className={classes.image} src={image} alt={'slide'} />
              </Box>
            </Box>
          ))
        }
      </ParallaxSlide>
    </Box>
  );
};

ParallaxCarousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      image: PropTypes.string,
    }),
  ),
};
ParallaxCarousel.defaultProps = {
  data: [],
};

export default ParallaxCarousel;
