import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

const calculateMargin = (selfIndex, slideIndex, speed = 50) => {
  const diff = selfIndex - slideIndex;
  if (Math.abs(diff) > 1) return 0;
  return `${diff * speed}%`;
};

const ParallaxSlide = ({ transition, children, renderElements, ...props }) => {
  const [index, setIndex] = useState(0);
  const [fineIndex, setFineIndex] = useState(index);
  const onChangeIndex = i => {
    setIndex(i);
    setFineIndex(i);
  };

  const views = children({
    fineIndex,
    injectStyle: (slideIndex, speed) => ({
      marginLeft: calculateMargin(slideIndex, fineIndex, speed),
      transition: fineIndex === index ? transition : 'none',
    }),
  });

  const isSingleView = views.length < 2;

  return (
    <>
      <SwipeableViews
        disabled={isSingleView}
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
        {views}
      </SwipeableViews>
      {!isSingleView && renderElements({ index, onChangeIndex })}
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
