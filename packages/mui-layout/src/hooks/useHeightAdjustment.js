import debounce from 'lodash.debounce';
import get from 'lodash.get';
import { useCallback, useEffect, useState } from 'react';
import useWindow from './useWindow';
import someIs from '../utils/someIs';
import useEventListener from './useEventListener';

export default ({
  sidebar = {},
  clipped,
  header: { position, offsetHeight } = {},
  heightAdjustmentSpeed = 144,
  heightAdjustmentDisabled = false,
}) => {
  const [height, setHeight] = useState(0);
  const { iWindow } = useWindow();

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
          const offset = offsetHeight - iWindow.scrollY;
          setHeight(offset < 0 ? 0 : offset);
        }
      },
      heightAdjustmentSpeed,
      { leading: true, trailing: true }
    ),
    [setHeight, offsetHeight, iWindow]
  );

  useEventListener('scroll', handler);

  if (heightAdjustmentDisabled) return 0; // disabled by user.
  if (sidebar.inset) {
    // inset sidebar
    const insetPosition = get(sidebar, 'insetProps.position');
    if (
      someIs(['fixed', 'sticky'], position) &&
      someIs(['fixed', 'sticky'], insetPosition) &&
      !(position === 'sticky' && insetPosition === 'sticky')
    ) {
      return offsetHeight;
    }
    if (
      someIs(['absolute', 'relative', 'static'], position) &&
      someIs(['fixed', 'sticky'], insetPosition) &&
      !(position === 'relative' && insetPosition === 'sticky')
    ) {
      return height;
    }
    return 0;
  }
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
