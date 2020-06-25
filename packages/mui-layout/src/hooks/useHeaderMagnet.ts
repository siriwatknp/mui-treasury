import useScrollY from '../hooks/useScrollY';
import useScreen from '../hooks/useScreen';
import { useLayoutCtx } from '../contexts';
import { MultiResponsiveObj, SingleResponsiveObj } from '../shared/Responsive';
import { HeaderConfig } from '../types';
import MultiHeadersEffect from '../effects/MultiHeaders';

export const useHeaderMagnet = <T>(
  sidebarId: string,
  dynamicHeight: boolean
) => {
  const scrollY = useScrollY();
  const screen = useScreen();
  const {
    data: { header, subheader },
  } = useLayoutCtx();
  const headerConfig = SingleResponsiveObj(header).getNearestConfig(screen);
  const subheaderConfigs = MultiResponsiveObj<HeaderConfig>(
    subheader
  ).getVisibleConfigs(screen);

  if (!dynamicHeight) return { marginTop: '' }; // document is not ready | component is not mounted | height is 0

  const { maxOffset } = MultiHeadersEffect([
    headerConfig,
    ...subheaderConfigs,
  ]).getSidebarInteraction(sidebarId);

  return {
    marginTop: `max(-${scrollY}px, calc(-1 * ${maxOffset}))`,
  }; // inline style
};
