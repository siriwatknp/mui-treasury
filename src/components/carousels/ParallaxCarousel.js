/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import ParallaxSlide from 'components/slides/ParallaxSlide';
import SimpleArrow from 'components/arrows/SimpleArrow';
import IndicatorGroup from 'components/indicators/IndicatorGroup';
import SimpleIndicator from 'components/indicators/SimpleIndicator';

const useStyles = makeStyles(({ palette, breakpoints, spacing }) => ({
  root: {
    // a must if you want to set arrows, indicator as absolute
    position: 'relative',
  },
  slide: {
    perspective: 1000, // create perspective
    overflow: 'hidden',
    // relative is a must if you want to create overlapping layers in children
    position: 'relative',
    paddingTop: spacing(8),
    [breakpoints.up('sm')]: {
      paddingTop: spacing(10),
    },
    [breakpoints.up('md')]: {
      paddingTop: spacing(14),
    },
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
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    marginLeft: '12%',
    [breakpoints.up('sm')]: {
      marginLeft: '4%',
    },
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
    // shared style for text-top and text-bottom
    fontFamily: 'Poppins, san-serif',
    fontWeight: 900,
    position: 'absolute',
    zIndex: 1,
    color: palette.common.white,
    padding: '0 8px',
    transform: 'rotateY(45deg)',
    lineHeight: 1.2,
    [breakpoints.up('sm')]: {
      padding: '0 16px',
    },
    [breakpoints.up('md')]: {
      padding: '0 24px',
    },
  },
  title: {
    top: 20,
    left: '20%',
    height: '40%',
    fontSize: 40,
    background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, #9c9c9c 100%)',
    [breakpoints.up('sm')]: {
      top: 40,
      fontSize: 72,
    },
    [breakpoints.up('md')]: {
      top: 52,
      fontSize: 72,
    },
  },
  subtitle: {
    top: 60,
    left: '0%',
    height: '52%',
    fontSize: 56,
    background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, #888888 100%)',
    [breakpoints.up('sm')]: {
      top: 112,
      left: '6%',
      fontSize: 96,
    },
    [breakpoints.up('md')]: {
      top: 128,
      fontSize: 104,
    },
  },
}));

const ParallaxCarousel = ({ data }) => {
  const classes = useStyles();
  const createStyle = (slideIndex, fineIndex) => {
    const diff = slideIndex - fineIndex;
    if (Math.abs(diff) > 1) return {};
    return {
      transform: `rotateY(${(-diff + 1) * 45}deg)`,
    };
  };
  // eslint-disable-next-line react/prop-types
  const renderElements = ({ index, onChangeIndex }) => (
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
  );
  const renderChildren = ({ injectStyle, fineIndex }) =>
    data.map(({ id, title, subtitle, image }, i) => (
      <div key={id} className={classes.slide}>
        <Typography
          noWrap
          className={cx(classes.text, classes.title)}
          style={{ ...injectStyle(i, 60), ...createStyle(i, fineIndex) }}
        >
          {title}
        </Typography>
        <Typography
          noWrap
          className={cx(classes.text, classes.subtitle)}
          style={{ ...injectStyle(i, 40), ...createStyle(i, fineIndex) }}
        >
          {subtitle}
        </Typography>
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
ParallaxCarousel.code = `
  import React from 'react';
  import PropTypes from 'prop-types';
  import cx from 'clsx';
  import { makeStyles } from '@material-ui/styles';
  import Typography from '@material-ui/core/Typography';
  import ParallaxSlide from 'components/slides/ParallaxSlide';
  import SimpleArrow from 'components/arrows/SimpleArrow';
  import IndicatorGroup from 'components/indicators/IndicatorGroup';
  import SimpleIndicator from 'components/indicators/SimpleIndicator';
  
  const useStyles = makeStyles(({ palette, breakpoints, spacing }) => ({
    root: {
      // a must if you want to set arrows, indicator as absolute
      position: 'relative',
    },
    slide: {
      perspective: 1000, // create perspective
      overflow: 'hidden',
      // relative is a must if you want to create overlapping layers in children
      position: 'relative',
      paddingTop: spacing(8),
      [breakpoints.up('sm')]: {
        paddingTop: spacing(10),
      },
      [breakpoints.up('md')]: {
        paddingTop: spacing(14),
      },
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
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      marginLeft: '12%',
      [breakpoints.up('sm')]: {
        marginLeft: '4%',
      },
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
      // shared style for text-top and text-bottom
      fontFamily: 'Poppins, san-serif',
      fontWeight: 900,
      position: 'absolute',
      zIndex: 1,
      color: palette.common.white,
      padding: '0 8px',
      transform: 'rotateY(45deg)',
      lineHeight: 1.2,
      [breakpoints.up('sm')]: {
        padding: '0 16px',
      },
      [breakpoints.up('md')]: {
        padding: '0 24px',
      },
    },
    title: {
      top: 20,
      left: '20%',
      height: '40%',
      fontSize: 40,
      background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, #9c9c9c 100%)',
      [breakpoints.up('sm')]: {
        top: 40,
        fontSize: 72,
      },
      [breakpoints.up('md')]: {
        top: 52,
        fontSize: 72,
      },
    },
    subtitle: {
      top: 60,
      left: '0%',
      height: '52%',
      fontSize: 56,
      background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, #888888 100%)',
      [breakpoints.up('sm')]: {
        top: 112,
        left: '6%',
        fontSize: 96,
      },
      [breakpoints.up('md')]: {
        top: 128,
        fontSize: 104,
      },
    },
  }));
  
  const ParallaxCarousel = ({ data }) => {
    const classes = useStyles();
    const createStyle = (slideIndex, fineIndex) => {
      const diff = slideIndex - fineIndex;
      if (Math.abs(diff) > 1) return {};
      return {
        transform: 'rotateY'+ (-diff + 1) * 45 + 'deg',
      };
    };
    // eslint-disable-next-line react/prop-types
    const renderElements = ({ index, onChangeIndex }) => (
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
    );
    const renderChildren = ({ injectStyle, fineIndex }) =>
      data.map(({ id, title, subtitle, image }, i) => (
        <div key={id} className={classes.slide}>
          <Typography
            noWrap
            className={cx(classes.text, classes.title)}
            style={{ ...injectStyle(i, 60), ...createStyle(i, fineIndex) }}
          >
            {title}
          </Typography>
          <Typography
            noWrap
            className={cx(classes.text, classes.subtitle)}
            style={{ ...injectStyle(i, 40), ...createStyle(i, fineIndex) }}
          >
            {subtitle}
          </Typography>
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
  
  ParallaxCarousel.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        // eslint-disable-next-line max-len
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
`;

export default ParallaxCarousel;
