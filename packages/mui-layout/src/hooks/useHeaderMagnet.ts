import { useRef, useState } from 'react';
import useScrollY from '../hooks/useScrollY';
import useScreen from '../hooks/useScreen';
import { useLayoutCtx } from '../contexts';
import { MultiResponsiveObj, SingleResponsiveObj } from '../shared/Responsive';
import { HeaderConfig } from '../types';
import useSumHeadersHeight from '../hooks/useSumHeadersHeight';

export const useHeaderMagnet = <T>(
  sidebarId: string,
  dynamicHeight: boolean
) => {
  useScrollY();
  const [counter, setCounter] = useState(0);
  const hiddenRef = useRef(null);
  const screen = useScreen();
  const {
    data: { header, subheader },
  } = useLayoutCtx();
  const headerConfig = SingleResponsiveObj(header).getNearestConfig(screen);
  const subheaderConfigs = MultiResponsiveObj<HeaderConfig>(
    subheader
  ).getVisibleConfigs(screen);
  const highestHeight = useSumHeadersHeight(
    [headerConfig, ...subheaderConfigs],
    sidebarId
  );
  if (!highestHeight || !dynamicHeight) return { height: '' }; // document is not ready | component is not mounted | height is 0
  if (hiddenRef.current !== subheaderConfigs.length) {
    // need to use setTimeout to let always set height after browser finishes painting
    setTimeout(() => setCounter(counter + 1), 0);
    hiddenRef.current = subheaderConfigs.length;
  }

  return {
    height: highestHeight < 0 ? 0 : highestHeight,
  }; // inline style
};
