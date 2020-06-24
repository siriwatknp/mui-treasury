import { HeaderConfig } from '../../types';
import { plusCalc } from '../../utils';

export default (configs: HeaderConfig[]) => {
  return {
    relativeConfigs: configs.filter(c => c.position === 'relative'),
    nonRelativeConfigs: configs.filter(c => c.position !== 'relative'),
    totalHeight:
      configs.length === 1
        ? configs[0].initialHeight
        : plusCalc(...configs.map(c => c.initialHeight)),
    maxHeightFromTop: Math.max(
      ...configs
        .filter(
          c =>
            (!c.top || typeof c.top === 'number') &&
            typeof c.initialHeight === 'number'
        )
        .map(c => ((c.top || 0) as number) + (c.initialHeight as number))
    ),
  };
};
