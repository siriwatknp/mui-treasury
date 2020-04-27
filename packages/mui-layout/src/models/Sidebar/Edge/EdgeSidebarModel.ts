import get from 'lodash/get';
import { CollapsibleSidebarConfig, State } from '../../../types';

export type CollapsibleConfigParam = Pick<
  CollapsibleSidebarConfig,
  'id' | 'collapsible' | 'collapsedWidth' | 'width' | 'hidden'
>;

export default (config: CollapsibleConfigParam, state?: State) => {
  const { collapsible, collapsedWidth, width, hidden } = config;
  const isSidebarCollapsed = get(state, ['sidebar', config.id, 'collapsed']);
  const sidebarWidth =
    collapsible && isSidebarCollapsed ? collapsedWidth : width;

  return {
    width: hidden ? 0 : sidebarWidth,
  };
};
