import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';

const PeaSwipeableTabs = ({ tabs, children }) => {
  const [index, setIndex] = useState(0);
  const [fineIndex, setFineIndex] = useState(index);
  const indicatorRef = useRef(null);
  const getLeft = () => {
    const indicatorDOM = indicatorRef.current;
    if (!indicatorDOM) return {};
    const { clientWidth } = indicatorDOM;
    return { left: fineIndex * clientWidth };
  };
  const onChange = i => {
    setIndex(i);
    setFineIndex(i);
  };
  return (
    <>
      <Tabs
        variant={'fullWidth'}
        centered
        value={index}
        TabIndicatorProps={{
          ref: indicatorRef,
          style: {
            ...getLeft(),
            ...(index !== fineIndex && { transition: 'none' }),
          },
        }}
        onChange={(e, val) => onChange(val)}
      >
        {tabs.map(tab => (
          <Tab key={tab.label} disableRipple {...tab} />
        ))}
      </Tabs>
      <SwipeableViews
        enableMouseEvents
        index={index}
        onSwitching={(i, type) => {
          setFineIndex(i);
          if (type === 'end') {
            onChange(i);
          }
        }}
      >
        {children}
      </SwipeableViews>
    </>
  );
};

PeaSwipeableTabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.node }))
    .isRequired,
  children: PropTypes.node.isRequired,
};
PeaSwipeableTabs.defaultProps = {};

PeaSwipeableTabs.metadata = {
  name: 'Pea Swipeable Tabs',
};

export default PeaSwipeableTabs;
