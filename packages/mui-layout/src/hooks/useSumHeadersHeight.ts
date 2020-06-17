import { useWindowCtx } from '../contexts';
import { HeaderConfig } from '../types';
import { isHeaderClipped } from '../utils';

const getHeightFromTop = (elm: Element) => {
  if (!elm) return 0;
  const { top, height } = elm.getBoundingClientRect();
  return top + height;
};

export const useSumHeadersHeight = (
  headerConfigs: HeaderConfig[],
  sidebarId: string
) => {
  const { iDocument } = useWindowCtx();
  if (!iDocument) return null;
  const clippedConfigs = headerConfigs
    .map(config => {
      const elm = iDocument.querySelector(`[mui-layout='${config.id}']`);
      return {
        ...config,
        domHeight: elm ? elm.getBoundingClientRect().height : 0,
        heightFromTop: getHeightFromTop(elm),
      };
    })
    .filter(config => isHeaderClipped(config, sidebarId))
    .map(({ heightFromTop }) => heightFromTop);
  return Math.max(...clippedConfigs);
};

export default useSumHeadersHeight;
