import { get } from '../utils';
import { EdgeSidebarConfig, EdgeSidebarData } from '../types';
import { genHiddenBreakpoints } from '../utils';

export default (
  edgeSidebar: Pick<EdgeSidebarData, 'configMapById' | 'hiddenById'>
) => {
  return {
    getHiddenBreakpoints: (sidebarId: string) => {
      return genHiddenBreakpoints<EdgeSidebarConfig>(
        edgeSidebar,
        sidebarId,
        config => get(config, 'collapsible') && !get(config, 'hidden')
      );
    },
  };
};
