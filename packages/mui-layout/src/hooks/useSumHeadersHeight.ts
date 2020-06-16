import { useWindowCtx } from '../contexts';
import { HeaderConfig } from '../types';
import { isHeaderClipped } from '../utils';

export const useSumHeadersHeight = (headerConfigs: HeaderConfig[], sidebarId: string) => {
  const { iDocument } = useWindowCtx();
  if (!iDocument) return null
  const clippedConfigs = headerConfigs.map(config => {
    const elm = iDocument.querySelector(`[mui-layout='${config.id}']`)
    return {
      ...config,
      domHeight: elm ? elm.getBoundingClientRect().height : 0
    }
  }).filter(config => isHeaderClipped(config, sidebarId))
  let baseHeight = 0;
  let abstractHeight = 0;
  clippedConfigs.forEach(config => {
    if (config.position !== 'relative') {
      baseHeight += config.domHeight
    } else {
      abstractHeight += config.domHeight
    }
  })
  return {
    baseHeight,
    abstractHeight
  }
};

export default useSumHeadersHeight;
