import {
  HeaderConfigMap,
  InsetSidebarConfig,
  InsetSidebarData,
  SubheaderData,
} from '../types';
import { isFixedInsetSidebarConfig } from '../utils/sidebarChecker';
import MultiHeadersModel from '../models/MultiHeaders';
import OffsetCompiler from './OffsetCompiler';

export default (
  insetSidebar: Pick<InsetSidebarData, 'configMapById'>,
  header: HeaderConfigMap,
  subheader: SubheaderData
) => {
  return {
    getResultStyle: (sidebarId: string) => {
      return OffsetCompiler(insetSidebar, header, subheader).getResultStyle<
        InsetSidebarConfig
      >(
        sidebarId,
        (sidebarConfig, headerConfig) =>
          headerConfig && isFixedInsetSidebarConfig(sidebarConfig),
        headerConfigs => MultiHeadersModel(headerConfigs).totalHeight
      );
    },
  };
};
