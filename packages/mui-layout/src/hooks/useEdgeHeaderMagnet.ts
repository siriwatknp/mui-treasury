import { useLayoutCtx } from '../contexts';
import useScreen from './useScreen';
import useScrollY from './useScrollY';
import useSumHeadersHeight from './useSumHeadersHeight';
import { pickNearestBreakpoint } from '../utils';
import { isCollapsibleSidebarConfig } from '../utils/sidebarChecker';

export const useEdgeHeaderMagnet = (
  sidebarId: string
): { height: string | number } => {
  useScrollY();
  const screen = useScreen();
  const {
    data: { header, edgeSidebar, subheader },
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
    edgeSidebar.configMapById[sidebarId],
    screen
  );
  const shouldHaveHeight =
    isCollapsibleSidebarConfig(sidebarConfig) &&
    sidebarConfig.headerMagnetEnabled;

  return { height: shouldHaveHeight ? highestHeight : '' }; // inline style
};

export default useEdgeHeaderMagnet;
