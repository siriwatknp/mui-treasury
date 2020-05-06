import HeaderEffect from '../effects/Header';
import {
  EdgeSidebarConfig,
  EdgeSidebarData,
  HeaderConfigMap,
  EdgeSidebarVariantStyle,
  State,
} from '../types';
import { combineBreakpoints, pickNearestBreakpoint } from '../utils';
import {
  isPermanentSidebarConfig,
  isPersistentSidebarConfig,
  isTemporarySidebarConfig,
} from '../utils/sidebarChecker';
import createEdgeSidebarModel from '../models/Sidebar/Edge/EdgeSidebarModel';

export default (
  state: State,
  edgeSidebar: Pick<EdgeSidebarData, 'configMapById'>,
  header: HeaderConfigMap
) => {
  return {
    getResultStyle: (sidebarId: string): EdgeSidebarVariantStyle => {
      const result: EdgeSidebarVariantStyle = {
        persistent: {},
        permanent: {},
        temporary: {},
      };

      const sidebarConfigMap = edgeSidebar.configMapById[sidebarId];
      if (!sidebarConfigMap) return result;

      const configMap = sidebarConfigMap;

      const breakpoints = combineBreakpoints(configMap, header);

      breakpoints.forEach(bp => {
        const config: EdgeSidebarConfig = pickNearestBreakpoint(configMap, bp);
        if (config) {
          const headerEffect = HeaderEffect(pickNearestBreakpoint(header, bp));
          if (isPersistentSidebarConfig(config) && headerEffect) {
            result.persistent[bp] = {
              ...createEdgeSidebarModel(config, state),
              ...headerEffect.getEdgeSidebarZIndex(sidebarId),
            };
          } else if (isPermanentSidebarConfig(config) && headerEffect) {
            result.permanent[bp] = {
              ...createEdgeSidebarModel(config, state),
              ...headerEffect.getEdgeSidebarZIndex(sidebarId),
            };
          } else if (isTemporarySidebarConfig(config)) {
            result.temporary[bp] = {
              width: config.width,
            };
          }
        }
      });
      return result;
    },
  };
};
