import { useLayoutCtx } from '../contexts';
import useScreen from './useScreen';
import { isCollapsibleSidebarConfig } from '../utils/sidebarChecker';
import { MultiResponsiveObj } from '../shared/Responsive';
import { EdgeSidebarConfig } from '../types';
import { useHeaderMagnet } from './useHeaderMagnet';

export const useEdgeHeaderMagnet = (
  sidebarId: string
): { marginTop: string } => {
  const screen = useScreen();
  const {
    data: { edgeSidebar },
  } = useLayoutCtx();

  const sidebarConfig = MultiResponsiveObj<EdgeSidebarConfig>(
    edgeSidebar
  ).getNearestConfig(sidebarId, screen);
  const dynamicHeight =
    isCollapsibleSidebarConfig(sidebarConfig) &&
    sidebarConfig.headerMagnetEnabled;

  return useHeaderMagnet(sidebarId, dynamicHeight);
};

export default useEdgeHeaderMagnet;
