/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ParallaxSlide from 'components/slides/ParallaxSlide';
import CONSTANT from 'constant';

const useStyles = makeStyles(() => ({
  root: {
    fontSize: 48,
    fontWeight: 900,
  },
}));

const demoCode = `
  import React from 'react';
  import { makeStyles } from '@material-ui/styles';
  import Box from '@material-ui/core/Box';
  import Typography from '@material-ui/core/Typography';
  import ParallaxSlide from './ParallaxSlide';
  
  const useStyles = makeStyles(() => ({
    root: {
      fontSize: 48,
      fontWeight: 900,
    },
  }));
  
  const Demo = () => {
    const classes = useStyles();
    const data = [
      {
        id: 1,
        boxProps: {
          bgcolor: '#c7ffcf',
        },
        title: 'Parallax #1',
        subtitle: 'Parallax #2',
      },
      {
        id: 2,
        boxProps: {
          bgcolor: '#ffcaa9',
        },
        title: 'Parallax #1',
        subtitle: 'Parallax #2',
      },
      {
        id: 3,
        boxProps: {
          bgcolor: '#c6d4ff',
        },
        title: 'Parallax #1',
        subtitle: 'Parallax #2',
      },
    ];
    return (
      <Box width={'100%'}>
        <ParallaxSlide>
          {({ injectStyle }) =>
            data.map(({ boxProps, title, subtitle, id }, i) => (
              <Box key={id} {...boxProps}>
                <Typography
                  noWrap
                  align={'center'}
                  className={classes.root}
                  style={injectStyle(i, 80)}
                >
                  {title}
                </Typography>
                <Typography
                  noWrap
                  align={'center'}
                  className={classes.root}
                  style={injectStyle(i, 40)}
                >
                  {subtitle}
                </Typography>
                <Typography
                  align={'center'}
                  className={classes.root}
                >
                  Static Text
                </Typography>
              </Box>
            ))
          }
        </ParallaxSlide>
      </Box>
    );
  };
  
  export default Demo;
  
`;

ParallaxSlide.Demo = () => {
  const classes = useStyles();
  const data = [
    {
      id: 1,
      boxProps: {
        bgcolor: '#c7ffcf',
      },
      title: 'Parallax #1',
      subtitle: 'Parallax #2',
    },
    {
      id: 2,
      boxProps: {
        bgcolor: '#ffcaa9',
      },
      title: 'Parallax #1',
      subtitle: 'Parallax #2',
    },
    {
      id: 3,
      boxProps: {
        bgcolor: '#c6d4ff',
      },
      title: 'Parallax #1',
      subtitle: 'Parallax #2',
    },
  ];
  return (
    <Box width={'100%'}>
      <ParallaxSlide>
        {({ injectStyle }) =>
          data.map(({ boxProps, title, subtitle, id }, i) => (
            <Box key={id} {...boxProps}>
              <Typography
                noWrap
                align={'center'}
                className={classes.root}
                style={injectStyle(i, 80)}
              >
                {title}
              </Typography>
              <Typography
                noWrap
                align={'center'}
                className={classes.root}
                style={injectStyle(i, 40)}
              >
                {subtitle}
              </Typography>
              <Typography align={'center'} className={classes.root}>
                Static Text
              </Typography>
            </Box>
          ))
        }
      </ParallaxSlide>
    </Box>
  );
};

const coreCode = `
  import React, { useState } from 'react';
  import PropTypes from 'prop-types';
  import SwipeableViews from 'react-swipeable-views';
  
  const calculateMargin = (selfIndex, slideIndex, speed = 50) => {
    const diff = selfIndex - slideIndex;
    if (Math.abs(diff) > 1) return 0;
    return \`\${diff * speed}%\`;
  };
  
  const ParallaxSlide = ({ transition, children, renderElements, ...props }) => {
    const [index, setIndex] = useState(0);
    const [fineIndex, setFineIndex] = useState(index);
    const onChangeIndex = i => {
      setIndex(i);
      setFineIndex(i);
    };
    return (
      <>
        <SwipeableViews
          resistance
          springConfig={{
            duration: '0.6s',
            easeFunction: '',
            delay: '0s',
          }}
          enableMouseEvents
          {...props}
          index={index}
          onChangeIndex={onChangeIndex}
          onSwitching={i => {
            setFineIndex(i);
          }}
        >
          {children({
            fineIndex,
            injectStyle: (slideIndex, speed) => ({
              marginLeft: calculateMargin(slideIndex, fineIndex, speed),
              transition: fineIndex === index ? transition : 'none',
            }),
          })}
        </SwipeableViews>
        {renderElements({ index, onChangeIndex })}
      </>
    );
  };
  
  ParallaxSlide.propTypes = {
    transition: PropTypes.string,
    children: PropTypes.func.isRequired,
    renderElements: PropTypes.func,
  };
  ParallaxSlide.defaultProps = {
    transition: '0.8s',
    renderElements: () => {},
  };
  
  export default ParallaxSlide;

`;

ParallaxSlide.info = {
  name: 'ParallaxSlide',
  description: '',
  links: [],
  files: [
    {
      label: 'Demo.js',
      code: demoCode,
    },
    {
      label: 'ParallaxSlide.js',
      code: coreCode,
      core: true,
    },
  ],
  libraries: [CONSTANT.libraries.swipeableViews],
  dependencies: ['react-swipeable-views'],
};

export default ParallaxSlide;
