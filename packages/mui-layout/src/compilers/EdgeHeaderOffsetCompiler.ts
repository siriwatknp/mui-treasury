import {
  EdgeSidebarConfig,
  EdgeSidebarData,
  HeaderConfigMap,
  SubheaderData,
} from '../types';
import { isCollapsibleSidebarConfig } from '../utils/sidebarChecker';
import MultiHeadersEffect from '../effects/MultiHeaders';
import OffsetCompiler from './OffsetCompiler';

export default (
  edgeSidebar: Pick<EdgeSidebarData, 'configMapById'>,
  header: HeaderConfigMap,
  subheader: SubheaderData
) => {
  return {
    getResultStyle: (sidebarId: string) =>
      OffsetCompiler(edgeSidebar, header, subheader).getResultStyle<
        EdgeSidebarConfig
      >(
        sidebarId,
        (sidebarConfig, headerConfig, subheaderConfigs) => {
          return (
            headerConfig &&
            MultiHeadersEffect([
              headerConfig,
              ...subheaderConfigs,
            ]).getSidebarInteraction(sidebarId).isClipped &&
            isCollapsibleSidebarConfig(sidebarConfig)
          );
        },
        headerConfigs =>
          MultiHeadersEffect(headerConfigs).getSidebarInteraction(sidebarId)
            .clippedHeight
      ),
  };
};
