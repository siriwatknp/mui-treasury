import { HeaderConfig } from '../../types';
import HeaderEffect from '../../effects/Header/HeaderEffect';
import { plusCalc } from '../../utils';

export default (configs: HeaderConfig[]) => {
  return {
    getSidebarInteraction: (sidebarId: string) => {
      const clippedConfigs = configs.filter(c =>
        HeaderEffect(c).isObjectClipped(sidebarId)
      );
      return {
        isClipped: clippedConfigs.length > 0,
        clippedHeight:
          clippedConfigs.length === 1
            ? clippedConfigs[0].initialHeight
            : plusCalc(...clippedConfigs.map(c => c.initialHeight)),
      };
    }
  }
}
