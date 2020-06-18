import HeaderEffect from '../effects/Header';
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
    getSidebarInteraction: (sidebarId: string) => {
      const clippedConfigs = headerConfigs.filter(c =>
        HeaderEffect(c).isObjectClipped(sidebarId)
      );
      return {
        isClipped: clippedConfigs.length > 0,
        clippedHeight:
          clippedConfigs.length === 1
            ? clippedConfigs[0].initialHeight
            : plusCalc(...clippedConfigs.map(c => c.initialHeight)),
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
          ]).getSidebarInteraction(sidebarId);
          if (sidebarConfig) {
            if (
              headerConfig &&
              interaction.isClipped &&
              isFixedInsetSidebarConfig(sidebarConfig)
            ) {
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
