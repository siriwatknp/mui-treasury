import { Theme } from '@material-ui/core/styles';
import get from 'lodash/get';
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
  const isObjectClipped = (sidebarId?: string) =>
    (typeof header.clipped === 'boolean' && header.clipped) ||
    (typeof header.clipped === 'object' && get(header, ['clipped', sidebarId]));
  return {
    id: get(header, 'id'),
    getHeaderZIndex: (theme?: Theme) =>
      isAboveSomeSidebars ? incrementZIndex(theme, 10) : undefined,
    getEdgeSidebarZIndex: (sidebarId: string, theme?: Theme) =>
      isAboveSomeSidebars && !isObjectClipped(sidebarId)
        ? incrementZIndex(theme, 20)
        : undefined,
    isObjectClipped,
  };
};
