import debounce from 'lodash/debounce';
import { useCallback, useEffect, useState } from 'react';
import { useTheme } from '@material-ui/core';
import createGetScreenValue from '../utils/createGetScreenValue';
import someIs from '../utils/someIs';
import useConfig from './useConfig';
import useWidth from './useWidth';
import useEventListener from './useEventListener';

export default () => {
  const {
    breakpoints: { keys },
  } = useTheme();
  const {
    clipped,
    headerPosition,
    initialAdjustmentHeight,
    heightAdjustmentSpeed,
    heightAdjustmentDisabled,
    navVariant,
  } = useConfig();
  const currentScreen = useWidth();
  const getScreenValue = createGetScreenValue(keys, currentScreen);
  const initialHeight = getScreenValue(initialAdjustmentHeight);

  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (typeof initialHeight === 'number') {
      setHeight(initialHeight);
    }
  }, [initialHeight]);

  const handler = useCallback(
    debounce(
      () => {
        // Update height
        if (typeof initialHeight === 'number') {
          const offset = initialHeight - window.scrollY;
          setHeight(offset < 0 ? 0 : offset);
        }
      },
      heightAdjustmentSpeed,
      { leading: true, trailing: true }
    ),
    [setHeight, initialHeight]
  );

  useEventListener('scroll', handler);

  if (heightAdjustmentDisabled) return 0; // disabled by user.
  if (navVariant === 'temporary') return 0;
  if (!clipped) {
    // do not run the effect below if behavior is not right.
    return 0;
  }
  if (clipped && someIs(['sticky', 'fixed'], headerPosition)) {
    return initialHeight;
  }
  return height;
};
