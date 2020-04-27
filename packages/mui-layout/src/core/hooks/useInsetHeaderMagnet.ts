import { useLayoutCtx } from '../Context';
import useScreen from './useScreen';
import useScrollY from './useScrollY';
import useHeaderHeight from './useHeaderHeight';
import { pickNearestBreakpoint, subtractCalc } from '../../utils';
import { useEffect, useState } from 'react';
import { isFixedInsetSidebarConfig } from '../../utils/sidebarChecker';

export const useInsetHeaderMagnet = (sidebarId: string) => {
  const screen = useScreen();
  const scrollY = useScrollY();
  const {
    data: { header, headerId, insetSidebar },
  } = useLayoutCtx();
  const headerConfig = pickNearestBreakpoint(header, screen);
  const sidebarConfig = pickNearestBreakpoint(
    insetSidebar.configMapById[sidebarId],
    screen
  );
  const resizedHeight = useHeaderHeight(headerId);
  const [headerHeight, setHeaderHeight] = useState('');
  const shouldUpdate =
    resizedHeight &&
    headerConfig.position === 'relative' &&
    isFixedInsetSidebarConfig(sidebarConfig) &&
    sidebarConfig.headerMagnetEnabled;
  useEffect(() => {
    if (shouldUpdate) {
      setHeaderHeight(subtractCalc(resizedHeight, scrollY));
    } else {
      setHeaderHeight('');
    }
  }, [shouldUpdate, resizedHeight, screen, scrollY]);

  return { height: headerHeight };
};

export default useInsetHeaderMagnet;
