import {
  HeaderConfig,
  HeaderConfigMap,
  InsetSidebarData,
  ResultStyle,
  SubheaderData,
} from '../types';
import { combineBreakpoints, pickNearestBreakpoint, plusCalc } from '../utils';
import { isFixedInsetSidebarConfig } from '../utils/sidebarChecker';

const MultiHeaders = (headerConfigs: HeaderConfig[]) => {
  return {
    getSidebarInteraction: () => {
      return {
        clippedHeight:
          headerConfigs.length === 1
            ? headerConfigs[0].initialHeight
            : plusCalc(...headerConfigs.map(c => c.initialHeight)),
      };
    },
  };
};

export default (
  insetSidebar: Pick<InsetSidebarData, 'configMapById'>,
  header: HeaderConfigMap,
  subheader: SubheaderData
) => {
  return {
    getResultStyle: (sidebarId: string) => {
      const result: ResultStyle = {};
      let found: boolean = false;
      const configMap = insetSidebar.configMapById[sidebarId];
      if (configMap) {
        const breakpoints = combineBreakpoints(
          configMap,
          header,
          subheader.configMap
        );
        breakpoints.forEach(bp => {
          const sidebarConfig = pickNearestBreakpoint(configMap, bp);
          const headerConfig = pickNearestBreakpoint(header, bp);
          const subheaderConfigs = Object.keys(subheader.configMapById)
            .map(subheaderId => {
              return pickNearestBreakpoint(
                subheader.configMapById[subheaderId],
                bp
              );
            })
            .filter(c => !!c && !c.hidden);
          const interaction = MultiHeaders([
            headerConfig,
            ...subheaderConfigs,
          ]).getSidebarInteraction();
          if (sidebarConfig) {
            if (headerConfig && isFixedInsetSidebarConfig(sidebarConfig)) {
              found = true;
              result[bp] = {
                height: interaction.clippedHeight,
              };
            } else if (found) {
              found = false;
              result[bp] = {
                height: 0,
              };
            }
          }
        });
      }
      return result;
    },
  };
};
