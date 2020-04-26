import get from 'lodash/get';
import { Breakpoint, keys } from '@material-ui/core/styles/createBreakpoints';
import { EdgeSidebarConfig, EdgeSidebarData } from '../types';
import {
  isPersistentSidebarConfig,
  isTemporarySidebarConfig,
} from '../utils/sidebarChecker';

export default (edgeSidebar: Pick<EdgeSidebarData, 'configMapById'>) => {
  return {
    getHiddenBreakpoints: (sidebarId: string) => {
      const result: Breakpoint[] = [];
      let found: boolean = false;
      keys.forEach(bp => {
        const config: EdgeSidebarConfig = get(edgeSidebar.configMapById, [
          sidebarId,
          bp,
        ]);
        if (
          isPersistentSidebarConfig(config) ||
          isTemporarySidebarConfig(config)
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
