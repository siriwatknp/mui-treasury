import { HeaderConfig } from '../../types';
import HeaderEffect from '../../effects/Header/HeaderEffect';
import MultiHeadersModel from '../../models/MultiHeaders';
import { subtractCalc, plusCalc } from '../../utils';

export default (configs: HeaderConfig[]) => {
  return {
    getSidebarInteraction: (sidebarId: string) => {
      const clippedConfigs = configs.filter(c =>
        HeaderEffect(c).isObjectClipped(sidebarId)
      );
      const relativeConfigs = MultiHeadersModel(clippedConfigs).relativeConfigs;
      const relativeHeight = MultiHeadersModel(relativeConfigs).totalHeight;
      const nonRelativeConfigs = MultiHeadersModel(clippedConfigs)
        .nonRelativeConfigs;
      const nonRelativeHeight = MultiHeadersModel(nonRelativeConfigs)
        .totalHeight;
      const maxHeightFromTop = MultiHeadersModel(nonRelativeConfigs)
        .maxHeightFromTop;
      const nonRelativeOffset = subtractCalc(
        nonRelativeHeight,
        maxHeightFromTop
      );
      const maxOffset = plusCalc(relativeHeight, nonRelativeOffset);
      return {
        isClipped: clippedConfigs.length > 0,
        clippedHeight: MultiHeadersModel(clippedConfigs).totalHeight,
        relativeHeight,
        nonRelativeHeight,
        maxHeightFromTop,
        nonRelativeOffset,
        maxOffset,
      };
    },
  };
};
