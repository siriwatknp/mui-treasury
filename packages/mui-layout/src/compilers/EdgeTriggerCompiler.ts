import { get } from '../utils';
import { Breakpoint, keys } from '@material-ui/core/styles/createBreakpoints';
import { EdgeSidebarConfig, EdgeSidebarData } from '../types';
import {
  isPersistentSidebarConfig,
  isTemporarySidebarConfig,
} from '../utils/sidebarChecker';

export default (
  edgeSidebar: Pick<EdgeSidebarData, 'configMapById' | 'hiddenById'>
) => {
  return {
    getHiddenBreakpoints: (sidebarId: string) => {
      if (get(edgeSidebar, ['hiddenById', sidebarId]) === keys) {
        // hidden at all breakpoints if true
        return keys;
      }
      const result: Breakpoint[] = [];
      let found: boolean = false;
      keys.forEach(bp => {
        const config: EdgeSidebarConfig = get(edgeSidebar.configMapById, [
          sidebarId,
          bp,
        ]);
        if (
          (isPersistentSidebarConfig(config) ||
            isTemporarySidebarConfig(config)) &&
          !config.hidden
        ) {
          found = true;
        } else if (config || (!config && !found)) {
          result.push(bp);
          found = false;
        }
      });
      return result;
    },
  };
};
