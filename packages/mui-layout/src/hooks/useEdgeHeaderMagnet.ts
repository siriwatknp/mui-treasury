import { useLayoutCtx } from '../contexts';
import useScreen from './useScreen';
import useScrollY from './useScrollY';
import useSumHeadersHeight from './useSumHeadersHeight';
import { pickNearestBreakpoint } from '../utils';
import { isCollapsibleSidebarConfig } from '../utils/sidebarChecker';

export const useEdgeHeaderMagnet = (
  sidebarId: string
): { height: string | number } => {
  const screen = useScreen();
  const scrollY = useScrollY();
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
  const info = useSumHeadersHeight(
    [headerConfig, ...subheaderConfigs],
    sidebarId
  );
  if (!info) return { height: '' } // document is not ready
  const { baseHeight, abstractHeight } = info
  if (!baseHeight && !abstractHeight) return { height: '' } // handle case: component is not mounted, so height should not be set
  const calculatedHeight = baseHeight + (abstractHeight - scrollY < 0 ? 0 : abstractHeight - scrollY);

  const sidebarConfig = pickNearestBreakpoint(
    edgeSidebar.configMapById[sidebarId],
    screen
  );
  const shouldHaveHeight =
    isCollapsibleSidebarConfig(sidebarConfig) &&
    sidebarConfig.headerMagnetEnabled;

  return { height: shouldHaveHeight ? calculatedHeight : '' }; // inline style
};

export default useEdgeHeaderMagnet;
