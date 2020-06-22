import { HeaderConfig } from '../../types';
import { plusCalc } from '../../utils';

export default (configs: HeaderConfig[]) => {
  return {
    totalHeight:
      configs.length === 1
        ? configs[0].initialHeight
        : plusCalc(...configs.map(c => c.initialHeight)),
  };
};
