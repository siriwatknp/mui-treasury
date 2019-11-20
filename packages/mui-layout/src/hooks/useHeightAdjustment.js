import debounce from 'lodash.debounce';
import { useCallback, useEffect, useState } from 'react';
import someIs from '../utils/someIs';
import useEventListener from './useEventListener';

export default ({
  sidebar = {},
  header: { clipped, position, offsetHeight } = {},
  heightAdjustmentSpeed = 144,
  heightAdjustmentDisabled = false,
}) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (typeof offsetHeight === 'number') {
      setHeight(offsetHeight);
    }
  }, [offsetHeight]);

  const handler = useCallback(
    debounce(
      () => {
        // Update height
        if (typeof offsetHeight === 'number') {
          const offset = offsetHeight - window.scrollY;
          setHeight(offset < 0 ? 0 : offset);
        }
      },
      heightAdjustmentSpeed,
      { leading: true, trailing: true }
    ),
    [setHeight, offsetHeight]
  );

  useEventListener('scroll', handler);

  if (heightAdjustmentDisabled) return 0; // disabled by user.
  if (sidebar.variant === 'temporary') return 0;
  if (!clipped) {
    // do not run the effect below if behavior is not right.
    return 0;
  }
  if (clipped && someIs(['sticky', 'fixed'], position)) {
    return offsetHeight;
  }
  return height;
};
