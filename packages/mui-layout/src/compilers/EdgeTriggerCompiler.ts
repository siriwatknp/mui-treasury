import { EdgeSidebarConfig, EdgeSidebarData } from '../types';
import {
  isPersistentSidebarConfig,
  isTemporarySidebarConfig,
} from '../utils/sidebarChecker';
import { genHiddenBreakpoints } from '../utils';

export default (
  edgeSidebar: Pick<EdgeSidebarData, 'configMapById' | 'hiddenById'>
) => {
  return {
    getHiddenBreakpoints: (sidebarId: string) => {
      return genHiddenBreakpoints<EdgeSidebarConfig>(
        edgeSidebar,
        sidebarId,
        config =>
          (isPersistentSidebarConfig(config) ||
            isTemporarySidebarConfig(config)) &&
          !config.hidden
      );
    },
  };
};
