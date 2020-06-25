import { Theme } from '@material-ui/core/styles';
import { get, isHeaderClipped } from '../../utils';
import { HeaderConfig, IHeaderEffect } from '../../types';

const incrementZIndex = (theme: Theme, plus: number) => ({
  zIndex: get(theme, 'zIndex.drawer', 1200) + plus,
});

export const isSomeClipped = ({
  clipped,
}: Pick<HeaderConfig, 'clipped'> = {}) => {
  if (typeof clipped === 'boolean') {
    return clipped;
  }
  if (typeof clipped === 'object') {
    return Object.values(clipped).some(value => !!value);
  }
  return false;
};

export default (header: Partial<HeaderConfig>): IHeaderEffect => {
  const isAboveSomeSidebars = isSomeClipped(header);
  return {
    id: get(header, 'id'),
    getHeaderZIndex: (theme?: Theme) =>
      isAboveSomeSidebars
        ? incrementZIndex(theme, 10 + (header.layer || 0))
        : undefined,
    getEdgeSidebarZIndex: (sidebarId: string, theme?: Theme) =>
      isAboveSomeSidebars && !isHeaderClipped(header, sidebarId)
        ? incrementZIndex(theme, 20)
        : undefined,
    isObjectClipped: sidebarId => isHeaderClipped(header, sidebarId),
  };
};
