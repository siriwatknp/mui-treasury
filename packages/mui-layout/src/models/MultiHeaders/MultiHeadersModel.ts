import { HeaderConfig } from '../../types';
import { plusCalc, toValidCssValue } from '../../utils';

export default (configs: HeaderConfig[]) => {
  const getDefaultValue = <T, K>(value: T, defaultValue: K) => {
    if (!configs.length) {
      return defaultValue;
    }
    return value;
  };
  return {
    relativeConfigs: configs.filter(c => c.position === 'relative'),
    nonRelativeConfigs: configs.filter(c => c.position !== 'relative'),
    totalHeight: getDefaultValue(
      configs.length === 1
        ? toValidCssValue(configs[0].initialHeight)
        : plusCalc(...configs.map(c => c.initialHeight)),
      0
    ),
    maxHeightFromTop: getDefaultValue(
      `max(${configs
        .filter(
          c =>
            (!c.top || typeof c.top === 'number') &&
            typeof c.initialHeight === 'number'
        )
        .map(c => plusCalc(c.top, c.initialHeight))
        .join(', ')})`,
      0
    ),
  };
};
