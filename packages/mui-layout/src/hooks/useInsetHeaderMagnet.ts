import { useLayoutCtx } from '../contexts';
import useScreen from './useScreen';
import useScrollY from './useScrollY';
import { pickNearestBreakpoint } from '../utils';
import { isFixedInsetSidebarConfig } from '../utils/sidebarChecker';
import useSumHeadersHeight from './useSumHeadersHeight';

export const useInsetHeaderMagnet = (
  sidebarId: string
): { height: string | number } => {
  useScrollY();
  const screen = useScreen();
  const {
    data: { header, insetSidebar, subheader },
  } = useLayoutCtx();
  const headerConfig = pickNearestBreakpoint(header, screen);
  const subheaderConfigs = Object.keys(subheader.configMapById)
    .map(subheaderId => {
      return pickNearestBreakpoint(
        subheader.configMapById[subheaderId],
        screen
      );
    })
    .filter(c => !!c);
  const highestHeight = useSumHeadersHeight(
    [headerConfig, ...subheaderConfigs],
    sidebarId
  );
  if (!highestHeight) return { height: '' } // document is not ready | component is not mounted | height is 0

  const sidebarConfig = pickNearestBreakpoint(
    insetSidebar.configMapById[sidebarId],
    screen
  );
  const shouldHaveHeight =
    isFixedInsetSidebarConfig(sidebarConfig) &&
    sidebarConfig.headerMagnetEnabled;

  return { height: shouldHaveHeight ? highestHeight : '' }; // inline style
};

export default useInsetHeaderMagnet;
