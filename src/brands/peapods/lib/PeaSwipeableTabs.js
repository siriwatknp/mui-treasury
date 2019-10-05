import React, { useState, useRef, memo } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import SwipeableViews from 'react-swipeable-views';
import AutoSizer from 'react-virtualized-auto-sizer';

const PeaSwipeableTabs = ({
  initialIndex,
  tabs,
  onTabChange,
  enableFeedback,
  children,
  hasPadding,
  ...props
}) => {
  const [index, setIndex] = useState(initialIndex);
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
        height: '100%',
      }}
    >
      <Grid
        item
        style={{
          width: '100%',
        }}
      >
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
        item
        style={{
          flex: 1,
        }}
      >
        <AutoSizer>
          {({ height, width }) => (
            <SwipeableViews
              style={{
                height,
                width,
              }}
              containerStyle={{
                height: '100%',
              }}
              slideStyle={{
                height: '100%',
              }}
              enableMouseEvents={enableFeedback}
              index={index}
              onSwitching={onSwitching}
            >
              {React.Children.map(children, child => (
                <div
                  style={{
                    padding: hasPadding ? 16 : 0,
                    minHeight: 'calc(100% - 32px)',
                  }}
                >
                  {child}
                </div>
              ))}
            </SwipeableViews>
          )}
        </AutoSizer>
      </Grid>
    </Grid>
  );
};

PeaSwipeableTabs.propTypes = {
  initialIndex: PropTypes.number,
  hasPadding: PropTypes.bool,
  tabs: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.node }))
    .isRequired,
  children: PropTypes.node.isRequired,
  // disable feedback to increase performance
  enableFeedback: PropTypes.bool,
  onTabChange: PropTypes.func,
};

PeaSwipeableTabs.defaultProps = {
  initialIndex: 0,
  hasPadding: true,
  enableFeedback: true,
  onTabChange: () => {},
};

PeaSwipeableTabs.metadata = {
  name: 'Pea Swipeable Tabs',
};

export default memo(PeaSwipeableTabs);
