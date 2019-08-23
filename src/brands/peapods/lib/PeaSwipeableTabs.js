import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import SwipeableViews from 'react-swipeable-views';

const PeaSwipeableTabs = ({
  tabs,
  onTabChange,
  enableFeedback,
  children,
  ...props
}) => {
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
    onTabChange(i);
  };

  const onSwitching = !enableFeedback
    ? undefined
    : (i, type) => {
        setFineIndex(i);
        if (type === 'end') {
          onChange(i);
        }
      };

  return (
    <Grid
      container
      direction="column"
      {...props}
      style={{
        flex: 1,
      }}
    >
      <Grid item>
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
      </Grid>

      <Grid
        container
        direction="column"
        style={{
          flex: 1,
        }}
      >
        <SwipeableViews
          style={{
            width: '100%',
            height: '100%',
          }}
          containerStyle={{
            backfaceVisibility: 'hidden',
            width: '100%',
            height: '100%',
          }}
          enableMouseEvents={enableFeedback}
          index={index}
          onSwitching={onSwitching}
        >
          {children}
        </SwipeableViews>
      </Grid>
    </Grid>
  );
};

PeaSwipeableTabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.node }))
    .isRequired,
  children: PropTypes.node.isRequired,
  // disable feedback to increase performance
  enableFeedback: PropTypes.bool,
  onTabChange: PropTypes.func,
};

PeaSwipeableTabs.defaultProps = {
  enableFeedback: true,
  onTabChange: () => {},
};

PeaSwipeableTabs.metadata = {
  name: 'Pea Swipeable Tabs',
};

export default PeaSwipeableTabs;
