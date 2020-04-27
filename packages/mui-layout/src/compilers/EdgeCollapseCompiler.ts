import { Breakpoint, keys } from '@material-ui/core/styles/createBreakpoints';
import { isCollapsibleSidebarConfig } from '../utils/sidebarChecker';
import { get } from '../utils';
import { EdgeSidebarConfig, EdgeSidebarData } from '../types';

export default (edgeSidebar: Pick<EdgeSidebarData, 'configMapById'>) => {
  return {
    getHiddenBreakpoints: (sidebarId: string) => {
      if (get(edgeSidebar, ['hiddenById', sidebarId]) === keys) {
        // hidden at all breakpoints if true
        return keys
      }
      const result: Breakpoint[] = [];
      let found: boolean = false;
      keys.forEach(bp => {
        const config: EdgeSidebarConfig = get(edgeSidebar.configMapById, [
          sidebarId,
          bp,
        ]);
        if (isCollapsibleSidebarConfig(config)) {
          if (get(config, 'collapsible') && !get(config, 'hidden')) {
            found = true;
          } else {
            found = false;
            result.push(bp);
          }
        } else {
          if (!found) {
            found = false;
            result.push(bp);
          }
        }
      });
      return result;
    },
  };
};
