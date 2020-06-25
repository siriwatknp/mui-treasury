import useScrollY from './useScrollY';
import { isHeaderClipped, plusCalc, toValidCssValue } from '../utils';
import { HeaderConfig } from '../types';

export const useRelativeHeaders = (
  headerConfigs: HeaderConfig[],
  sidebarId: string
) => {
  const scrollY = useScrollY();
  const relativeConfigs = headerConfigs.filter(
    config =>
      isHeaderClipped(config, sidebarId) &&
      !config.hidden &&
      config.position === 'relative'
  );
  const offset = plusCalc(
    ...relativeConfigs.map(c => `-${toValidCssValue(c.initialHeight)}`)
  );
  return `max(${toValidCssValue(-scrollY)}, ${offset})`;
};

export default useRelativeHeaders;
