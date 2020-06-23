import { useLayoutCtx } from '../contexts';
import useScreen from './useScreen';
import { isFixedInsetSidebarConfig } from '../utils/sidebarChecker';
import { MultiResponsiveObj } from '../shared/Responsive';
import { InsetSidebarConfig } from '../types';
import { useHeaderMagnet } from './useHeaderMagnet';

export const useInsetHeaderMagnet = (
  sidebarId: string
): { height: string | number } => {
  const screen = useScreen();
  const {
    data: { insetSidebar },
  } = useLayoutCtx();

  const sidebarConfig = MultiResponsiveObj<InsetSidebarConfig>(
    insetSidebar
  ).getNearestConfig(sidebarId, screen);
  const dynamicHeight =
    isFixedInsetSidebarConfig(sidebarConfig) &&
    sidebarConfig.headerMagnetEnabled;

  return useHeaderMagnet(sidebarId, dynamicHeight);
};

export default useInsetHeaderMagnet;
