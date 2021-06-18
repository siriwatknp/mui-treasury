import {
  HeaderConfigMap,
  InsetSidebarConfig,
  InsetSidebarData,
  InsetSidebarResultStyle,
} from '../types';
import { Breakpoint } from '@material-ui/system';
import { pickNearestBreakpoint } from '../utils';
import {
  isAbsoluteInsetSidebarConfig,
  isFixedInsetSidebarConfig,
  isStickyInsetSidebarConfig,
} from '../utils/sidebarChecker';
import StickyInset from '../models/Sidebar/Inset/StickyInset';
import AbsoluteInset from '../models/Sidebar/Inset/AbsoluteInset';
import FixedInset from '../models/Sidebar/Inset/FixedInset';

export default (
  insetSidebar: Pick<InsetSidebarData, 'configMapById'>,
  header: HeaderConfigMap
) => {
  return {
    getVariant: (sidebarId: string): string => {
      const config = pickNearestBreakpoint(
        insetSidebar.configMapById[sidebarId],
        'xl'
      );
      return config.variant;
    },
    getResultStyle: (sidebarId: string): InsetSidebarResultStyle => {
      const result: InsetSidebarResultStyle = { root: {}, body: {} };
      const configMap = insetSidebar.configMapById[sidebarId];
      const breakpoints = Object.keys(configMap);
      breakpoints.forEach((bp: Breakpoint) => {
        const config: InsetSidebarConfig = pickNearestBreakpoint(configMap, bp);
        const headerConfig = pickNearestBreakpoint(header, bp);
        if (config) {
          let model: { getRootStyle: () => {}; getBodyStyle: () => {} };
          if (isStickyInsetSidebarConfig(config)) {
            model = StickyInset(config);
          } else if (isAbsoluteInsetSidebarConfig(config)) {
            model = AbsoluteInset(config, headerConfig);
          } else if (isFixedInsetSidebarConfig(config)) {
            model = FixedInset(config);
          }

          result.root[bp] = model.getRootStyle();
          result.body[bp] = model.getBodyStyle();
        }
      });
      return result;
    },
  };
};
