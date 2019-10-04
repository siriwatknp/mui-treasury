import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';

import ParallaxSlide from '../../../components/slides/ParallaxSlide';
import ChevronArrow from '../../../components/arrows/ChevronArrow';
import DotIndicator from '../../../components/indicators/DotIndicator';

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    position: 'relative',
    width: '100%',
  },
  slide: {
    overflow: 'hidden',
  },
  imageContainer: {
    display: 'block',
    position: 'relative',
    zIndex: 2,
    paddingBottom: '56.25%',
  },
  image: {
    display: 'block',
    position: 'absolute',
    zIndex: 10,
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
    marginLeft: '4px',
  },
  arrowRight: {
    right: 0,
    marginRight: '4px',
  },
  indicatorContainer: {
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
}));

const PeaImageCarousel = ({ data }) => {
  const classes = useStyles();

  // eslint-disable-next-line react/prop-types
  const renderElements = ({ index, onChangeIndex }) => (
    <div className={classes.controls}>
      <ChevronArrow
        className={cx(classes.arrow, classes.arrowLeft)}
        direction={'left'}
        disabled={index === 0}
        onClick={() => onChangeIndex(index - 1)}
      />
      <ChevronArrow
        className={cx(classes.arrow, classes.arrowRight)}
        direction={'right'}
        disabled={index === data.length - 1}
        onClick={() => onChangeIndex(index + 1)}
      />
      <div className={classes.indicatorContainer}>
        {data.map(({ id }, i) => (
          <DotIndicator
            key={id}
            active={i === index}
            onClick={() => onChangeIndex(i)}
          />
        ))}
      </div>
    </div>
  );

  const renderChildren = () =>
    data.map(({ id, image }) => (
      <div key={id} className={classes.slide}>
        <div className={classes.imageContainer}>
          <img className={classes.image} src={image} alt={'slide'} />
        </div>
      </div>
    ));

  return (
    <div className={classes.root}>
      <ParallaxSlide renderElements={renderElements}>
        {renderChildren}
      </ParallaxSlide>
    </div>
  );
};

PeaImageCarousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      image: PropTypes.string,
    }),
  ),
};

PeaImageCarousel.defaultProps = {
  data: [],
};

export default PeaImageCarousel;
