import {
  EdgeSidebarData,
  HeaderConfig,
  HeaderConfigMap,
  InsetSidebarData,
  ResultStyle,
  SubheaderData,
} from '../types';
import { combineBreakpoints, pickNearestBreakpoint } from '../utils';

export default (
  sidebar:
    | Pick<EdgeSidebarData, 'configMapById'>
    | Pick<InsetSidebarData, 'configMapById'>,
  header: HeaderConfigMap,
  subheader: SubheaderData
) => {
  return {
    getResultStyle: <T>(
      sidebarId: string,
      predicate: (
        sidebarConfig: T,
        headerConfig: HeaderConfig,
        subheaderConfigs: HeaderConfig[]
      ) => boolean,
      getHeight: (headerConfigs: HeaderConfig[]) => string | number
    ) => {
      const result: ResultStyle = {};
      let found: boolean = false;
      const configMap = sidebar.configMapById[sidebarId];
      if (configMap) {
        const breakpoints = combineBreakpoints(
          configMap,
          header,
          subheader.configMap
        );
        breakpoints.forEach(bp => {
          const sidebarConfig = pickNearestBreakpoint<T>(configMap as any, bp);
          const headerConfig = pickNearestBreakpoint(header, bp);
          const subheaderConfigs = Object.keys(subheader.configMapById)
            .map(subheaderId => {
              return pickNearestBreakpoint(
                subheader.configMapById[subheaderId],
                bp
              );
            })
            .filter(c => !!c && !c.hidden);
          if (sidebarConfig) {
            if (predicate(sidebarConfig, headerConfig, subheaderConfigs)) {
              found = true;
              result[bp] = {
                height: getHeight([headerConfig, ...subheaderConfigs]),
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
